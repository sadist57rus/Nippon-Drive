import { createHash } from 'node:crypto';
import { mkdir, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const USER_AGENT = 'Nippon-Drive-CatalogResearch/1.0 (+https://github.com/sadist57rus/Nippon-Drive)';
const OUTPUT_DIR = resolve('artifacts/drom-catalog/html-samples');
const MAX_BYTES = 8 * 1024 * 1024;
const PAGES = [
  { name: 'toyota-corolla-model', url: 'https://www.drom.ru/catalog/toyota/corolla/' },
  { name: 'toyota-corolla-2026', url: 'https://www.drom.ru/catalog/toyota/corolla/2026/' },
  { name: 'toyota-corolla-transmission', url: 'https://www.drom.ru/catalog/toyota/corolla/specs/transmission/' },
] as const;

async function main() {
  await mkdir(OUTPUT_DIR, { recursive: true });
  const results: Array<Record<string, unknown>> = [];

  for (const page of PAGES) {
    const startedAt = new Date().toISOString();
    try {
      const response = await fetch(page.url, {
        headers: {
          'user-agent': USER_AGENT,
          accept: 'text/html,application/xhtml+xml',
        },
        redirect: 'follow',
        signal: AbortSignal.timeout(30_000),
      });
      const contentType = response.headers.get('content-type') ?? '';
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      if (!contentType.toLowerCase().includes('text/html')) {
        throw new Error(`Unexpected content type: ${contentType || 'missing'}`);
      }
      const body = Buffer.from(await response.arrayBuffer());
      const bytes = body.byteLength;
      if (bytes > MAX_BYTES) throw new Error(`Response exceeds ${MAX_BYTES} byte limit`);
      const filename = `${page.name}.html`;
      // Preserve source bytes: Drom currently labels these pages windows-1251.
      await writeFile(resolve(OUTPUT_DIR, filename), body);
      results.push({
        name: page.name,
        requestedUrl: page.url,
        finalUrl: response.url,
        startedAt,
        status: response.status,
        contentType,
        bytes,
        sha256: createHash('sha256').update(body).digest('hex'),
        file: filename,
      });
    } catch (error) {
      results.push({
        name: page.name,
        requestedUrl: page.url,
        startedAt,
        error: error instanceof Error ? error.message : String(error),
      });
    }
    await new Promise((resolveDelay) => setTimeout(resolveDelay, 1_500));
  }

  const manifest = {
    generatedAt: new Date().toISOString(),
    source: 'Public Drom catalogue HTML pages',
    policy: 'Fixed public URLs only; no login, API probing, CAPTCHA bypass, or access-control circumvention.',
    results,
  };
  await writeFile(resolve(OUTPUT_DIR, 'manifest.json'), JSON.stringify(manifest, null, 2) + '\n');
  console.log(JSON.stringify(manifest, null, 2));
  if (results.every((result) => 'error' in result)) process.exitCode = 1;
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
