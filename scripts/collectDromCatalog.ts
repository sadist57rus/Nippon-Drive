import { mkdir, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const USER_AGENT = 'Nippon-Drive-CatalogResearch/1.0 (+https://github.com/sadist57rus/Nippon-Drive)';
const OUTPUT_DIR = resolve('artifacts/drom-catalog');
const MAX_SITEMAPS = Number(process.env.DROM_MAX_SITEMAPS ?? 200);

const SEEDS = [
  'https://www.drom.ru/sitemaps/catalog/generated/catalog_firms_index.xml',
  'https://www.drom.ru/sitemaps/catalog/generated/catalog_models_index.xml',
  'https://www.drom.ru/sitemaps/catalog/generated/catalog_generations_index.xml',
  'https://www.drom.ru/sitemaps/catalog/generated/catalog_complectations_index.xml',
  'https://www.drom.ru/sitemaps/catalog/generated/catalog_model_summary_specs_index.xml',
  'https://www.drom.ru/sitemaps/catalog/generated/catalog_firm_engines_index.xml',
  'https://www.drom.ru/sitemaps/catalog/generated/catalog_firm_engine_index.xml',
  'https://www.drom.ru/sitemaps/catalog/generated/catalog_models_years_index.xml',
] as const;

const JAPANESE_MAKES = new Set([
  'acura', 'daihatsu', 'honda', 'infiniti', 'isuzu', 'lexus', 'mazda',
  'mitsubishi', 'mitsubishi-fuso', 'mitsuoka', 'nissan', 'scion',
  'subaru', 'suzuki', 'toyota', 'hino',
]);

type SitemapRecord = {
  sitemap: string;
  url: string;
  kind: string;
  makeSlug: string | null;
  japaneseMake: boolean;
};

function decodeXml(value: string): string {
  return value
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');
}

function locations(xml: string): string[] {
  return [...xml.matchAll(/<loc(?:\s[^>]*)?>([\s\S]*?)<\/loc>/gi)]
    .map((match) => decodeXml(match[1].trim()))
    .filter(Boolean);
}

function kindFromSitemap(url: string): string {
  const name = new URL(url).pathname.split('/').pop() ?? '';
  return name.replace(/\.xml(?:\.gz)?$/i, '').replace(/^catalog_/, '');
}

function makeFromUrl(url: string): string | null {
  const parts = new URL(url).pathname.split('/').filter(Boolean);
  const catalogIndex = parts.indexOf('catalog');
  if (catalogIndex < 0 || !parts[catalogIndex + 1]) return null;
  const candidate = parts[catalogIndex + 1].toLowerCase();
  return JAPANESE_MAKES.has(candidate) ? candidate : null;
}

async function fetchXml(url: string): Promise<string> {
  const response = await fetch(url, {
    headers: { 'user-agent': USER_AGENT, accept: 'application/xml,text/xml,*/*' },
    signal: AbortSignal.timeout(12_000),
  });
  if (!response.ok) throw new Error(`HTTP ${response.status} for ${url}`);
  if (new URL(url).pathname.endsWith('.gz')) {
    if (!response.body) throw new Error(`Empty gzip response for ${url}`);
    const decompressed = response.body.pipeThrough(new DecompressionStream('gzip'));
    return new Response(decompressed).text();
  }
  return response.text();
}

async function main() {
  const visitedSitemaps = new Set<string>();
  const records = new Map<string, SitemapRecord>();
  const errors: string[] = [];
  const queue: string[] = [...SEEDS];

  while (queue.length && visitedSitemaps.size < MAX_SITEMAPS) {
    const sitemap = queue.shift()!;
    if (visitedSitemaps.has(sitemap)) continue;
    visitedSitemaps.add(sitemap);

    try {
      const xml = await fetchXml(sitemap);
      const entries = locations(xml);
      if (!entries.length) {
        errors.push(`No <loc> entries: ${sitemap}`);
        continue;
      }

      for (const entry of entries) {
        let parsed: URL;
        try {
          parsed = new URL(entry);
        } catch {
          errors.push(`Invalid URL in ${sitemap}: ${entry}`);
          continue;
        }
        if (parsed.hostname !== 'www.drom.ru' && parsed.hostname !== 'drom.ru') continue;

        if (/\.xml(?:\.gz)?$/i.test(parsed.pathname)) {
          if (!visitedSitemaps.has(parsed.href)) queue.push(parsed.href);
          continue;
        }

        const makeSlug = makeFromUrl(parsed.href);
        records.set(parsed.href, {
          sitemap,
          url: parsed.href,
          kind: kindFromSitemap(sitemap),
          makeSlug,
          japaneseMake: makeSlug !== null,
        });
      }
    } catch (error) {
      errors.push(`${sitemap}: ${error instanceof Error ? error.message : String(error)}`);
    }

    // Sequential requests and a pause avoid creating load on the source.
    if (queue.length) await new Promise((resolveDelay) => setTimeout(resolveDelay, 1_000));
  }

  const all = [...records.values()].sort((a, b) => a.url.localeCompare(b.url));
  const japanese = all.filter((item) => item.japaneseMake);
  const summary = {
    generatedAt: new Date().toISOString(),
    source: 'Drom public catalog XML sitemaps',
    seeds: SEEDS,
    sitemapsVisited: visitedSitemaps.size,
    sitemapLimit: MAX_SITEMAPS,
    truncated: queue.length > 0,
    urlsDiscovered: all.length,
    japaneseUrls: japanese.length,
    japaneseMakeSlugs: [...new Set(japanese.map((item) => item.makeSlug))].sort(),
    errors,
    note: 'URL discovery only. This inventory is not a technical-specification dataset. No vehicle facts are inferred from URLs.',
  };

  await mkdir(OUTPUT_DIR, { recursive: true });
  await writeFile(resolve(OUTPUT_DIR, 'inventory.json'), JSON.stringify({ summary, records: all }, null, 2) + '\n');
  await writeFile(resolve(OUTPUT_DIR, 'japanese-urls.txt'), japanese.map((item) => item.url).join('\n') + '\n');
  await writeFile(resolve(OUTPUT_DIR, 'errors.txt'), errors.join('\n') + (errors.length ? '\n' : ''));

  console.log(JSON.stringify(summary, null, 2));
  if (!all.length || errors.length === SEEDS.length) process.exitCode = 1;
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
