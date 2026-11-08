import { createHash } from 'node:crypto';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { parseComplectationHtml, parseSpecificationHtml, parseIndividualModificationHtml } from './parseDromHtmlSamples.js';

const USER_AGENT = 'Nippon-Drive-CatalogResearch/1.0 (+https://github.com/sadist57rus/Nippon-Drive)';
const INVENTORY_PATH = resolve('artifacts/drom-catalog/inventory.json');
const OUTPUT_DIR = resolve('artifacts/drom-catalog/technical-batch');
const MAX_PAGES = 50;
const MAX_BYTES = 8 * 1024 * 1024;
const JAPANESE_MAKES = new Set([
  'acura', 'daihatsu', 'honda', 'infiniti', 'isuzu', 'lexus', 'mazda',
  'mitsubishi', 'mitsubishi-fuso', 'mitsuoka', 'nissan', 'scion',
  'subaru', 'suzuki', 'toyota', 'hino',
]);

type InventoryRecord = {
  url: string;
  kind: string;
  makeSlug: string | null;
  japaneseMake: boolean;
};

async function main() {
  const inventory = JSON.parse(await readFile(INVENTORY_PATH, 'utf8')) as { records: InventoryRecord[] };
  const uniqueCandidates = [...new Map(inventory.records
    .filter((item) => item.japaneseMake && item.makeSlug && JAPANESE_MAKES.has(item.makeSlug))
    .filter((item) => item.kind.toLowerCase().includes('complectation'))
    .filter((item) => {
      const url = new URL(item.url);
      return (url.hostname === 'www.drom.ru' || url.hostname === 'drom.ru') && /^\/catalog\//.test(url.pathname);
    })
    .sort((a, b) => a.url.localeCompare(b.url))
    .map((item) => [item.url, item])).values()];
  const byMake = new Map<string, InventoryRecord[]>();
  for (const item of uniqueCandidates) {
    const group = byMake.get(item.makeSlug!) ?? [];
    group.push(item);
    byMake.set(item.makeSlug!, group);
  }
  const makeQueues = [...byMake.entries()].sort(([a], [b]) => a.localeCompare(b)).map(([, items]) => items);
  const candidates: InventoryRecord[] = [];
  while (candidates.length < MAX_PAGES && makeQueues.some((items) => items.length)) {
    for (const items of makeQueues) {
      const next = items.shift();
      if (next) candidates.push(next);
      if (candidates.length >= MAX_PAGES) break;
    }
  }

  await mkdir(OUTPUT_DIR, { recursive: true });
  const variants: unknown[] = [];
  const specifications: unknown[] = [];
  const results: Array<Record<string, unknown>> = [];

  for (const item of candidates) {
    const startedAt = new Date().toISOString();
    try {
      const response = await fetch(item.url, {
        headers: {
          'user-agent': USER_AGENT,
          accept: 'text/html,application/xhtml+xml',
        },
        redirect: 'follow',
        signal: AbortSignal.timeout(30_000),
      });
      const contentType = response.headers.get('content-type') ?? '';
      if (!response.ok) throw new Error('HTTP ' + response.status);
      if (!contentType.toLowerCase().includes('text/html')) throw new Error('Unexpected content type: ' + contentType);
      const bytes = Buffer.from(await response.arrayBuffer());
      if (bytes.byteLength > MAX_BYTES) throw new Error('Response exceeds ' + MAX_BYTES + ' byte limit');
      const charset = contentType.match(/charset=([^;]+)/i)?.[1]?.trim() || 'utf-8';
      const html = new TextDecoder(charset).decode(bytes);
      const individual = parseIndividualModificationHtml(html, response.url);
      const pageVariants = parseComplectationHtml(html, response.url);
      const pageSpecifications = parseSpecificationHtml(html, response.url);
      if (individual) {
        variants.push(individual.variant);
        specifications.push(...individual.specificationRows);
      }
      variants.push(...pageVariants);
      specifications.push(...pageSpecifications);
      results.push({
        url: item.url,
        finalUrl: response.url,
        kind: item.kind,
        status: response.status,
        contentType,
        bytes: bytes.byteLength,
        sha256: createHash('sha256').update(bytes).digest('hex'),
        modificationRows: pageVariants.length + (individual ? 1 : 0),
        specificationRows: pageSpecifications.length + (individual?.specificationRows.length ?? 0),
        startedAt,
      });
    } catch (error) {
      results.push({
        url: item.url,
        kind: item.kind,
        startedAt,
        error: error instanceof Error ? error.message : String(error),
      });
    }
    await new Promise((resolveDelay) => setTimeout(resolveDelay, 1_000));
  }

  const output = {
    generatedAt: new Date().toISOString(),
    source: 'Drom public catalog sitemap URLs; secondary reference only',
    maxPages: MAX_PAGES,
    pagesSelected: candidates.length,
    pagesFetched: results.filter((item) => item.status === 200).length,
    failedPages: results.filter((item) => 'error' in item).length,
    modificationRows: variants.length,
    specificationRowCount: specifications.length,
    importedIntoApplication: false,
    note: 'No canonical modelId/generationId matching or primary-source verification is inferred. Drom records remain secondary references.',
    pages: results,
    records: variants,
    specifications,
  };
  await writeFile(resolve(OUTPUT_DIR, 'technical-batch.json'), JSON.stringify(output, null, 2) + '\n');
  console.log(JSON.stringify({
    pagesSelected: output.pagesSelected,
    pagesFetched: output.pagesFetched,
    failedPages: output.failedPages,
    modificationRows: output.modificationRows,
    specificationRows: output.specificationRowCount,
  }, null, 2));
  if (!candidates.length || !output.pagesFetched) process.exitCode = 1;
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
