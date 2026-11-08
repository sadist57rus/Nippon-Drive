import { mkdir, readFile, readdir, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

export type DromParsedVariant = {
  makeSlug: string;
  modelSlug: string;
  market: string | null;
  generationLabel: string | null;
  generationNumber: number | null;
  generationProductionFrom: string | null;
  generationProductionTo: string | null;
  bodyStyle: string | null;
  trimOrGrade: string;
  productionMonthFrom: string | null;
  productionMonthTo: string | null;
  engineCode: string | null;
  bodyCode: string | null;
  displacementCc: number | null;
  powerHp: number | null;
  fuelType: string | null;
  transmissionType: 'MT' | 'AT' | 'CVT' | 'DCT' | 'AMT' | null;
  drivetrain: 'FWD' | 'RWD' | 'AWD' | '4WD' | null;
  hybrid: boolean | null;
  sourceUrl: string;
  sourceType: 'secondary-reference';
  verificationStatus: 'partially-verified';
  limitations: string[];
};

const INPUT_DIR = resolve('artifacts/drom-catalog/html-samples');
const OUTPUT_DIR = resolve('artifacts/drom-catalog');
const MANIFEST_PATH = resolve(INPUT_DIR, 'manifest.json');

function decodeEntities(value: string): string {
  return value
    .replace(/&nbsp;|&#160;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&quot;/gi, '"')
    .replace(/&#39;|&apos;/gi, "'")
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>')
    .replace(/&#(\d+);/g, (_, n: string) => String.fromCodePoint(Number(n)))
    .replace(/&#x([\da-f]+);/gi, (_, n: string) => String.fromCodePoint(parseInt(n, 16)));
}

function cellText(markup: string): string {
  return decodeEntities(markup
    .replace(/<(script|style)\b[^>]*>[\s\S]*?<\/\1>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim());
}

function cellsFromRow(row: string): string[] {
  return [...row.matchAll(/<(?:td|th)\b[^>]*>([\s\S]*?)<\/(?:td|th)>/gi)]
    .map((match) => cellText(match[1]));
}

function monthFromPeriod(period: string | null, side: 'from' | 'to'): string | null {
  if (!period) return null;
  const match = period.match(/(\d{2})\.(\d{4})\s*[-–]\s*(?:(\d{2})\.(\d{4})|н\.в\.|нв|по настоящее время)/i);
  if (!match) return null;
  if (side === 'from') return match[2] + '-' + match[1];
  if (!match[3] || !match[4]) return null;
  return match[4] + '-' + match[3];
}

function parseGenerationHeading(value: string) {
  const generation = value.match(/(\d+)\s*поколени/i);
  const period = value.match(/\d{2}\.\d{4}\s*[-–]\s*(?:(?:\d{2}\.\d{4})|н\.в\.|нв|по настоящее время)/i)?.[0] ?? null;
  const parts = value.split(',').map((part) => part.trim()).filter(Boolean);
  const bodyStyle = parts.length ? parts[parts.length - 1] : null;
  return {
    label: value || null,
    number: generation ? Number(generation[1]) : null,
    from: monthFromPeriod(period, 'from'),
    to: monthFromPeriod(period, 'to'),
    bodyStyle,
  };
}

function parseGroup(value: string) {
  const lower = value.toLowerCase();
  const displacement = value.match(/(\d+(?:[.,]\d+)?)\s*л\b/i);
  const power = value.match(/(\d+)\s*л\.?\s*с\.?/i);
  let transmissionType: DromParsedVariant['transmissionType'] = null;
  if (/мкпп|механическ/i.test(lower)) transmissionType = 'MT';
  else if (/вариатор|\bcvt\b/i.test(lower)) transmissionType = 'CVT';
  else if (/dct|dsg|робот/i.test(lower)) transmissionType = 'DCT';
  else if (/\bamt\b/i.test(lower)) transmissionType = 'AMT';
  else if (/акпп|автомат/i.test(lower)) transmissionType = 'AT';

  let drivetrain: DromParsedVariant['drivetrain'] = null;
  if (/передн|\bff\b/i.test(lower)) drivetrain = 'FWD';
  else if (/задн|\bfr\b/i.test(lower)) drivetrain = 'RWD';
  else if (/4wd/i.test(lower)) drivetrain = '4WD';
  else if (/awd|полный/i.test(lower)) drivetrain = 'AWD';

  let fuelType: string | null = null;
  if (/бензин/i.test(lower)) fuelType = 'gasoline';
  else if (/дизел/i.test(lower)) fuelType = 'diesel';
  else if (/электро|electric/i.test(lower)) fuelType = 'electric';
  else if (/газ|\blpg\b|\bcng\b/i.test(lower)) fuelType = 'gas';
  else if (/гибрид|hybrid/i.test(lower)) fuelType = 'hybrid';

  return {
    displacementCc: displacement ? Math.round(Number(displacement[1].replace(',', '.')) * 1000) : null,
    powerHp: power ? Number(power[1]) : null,
    fuelType,
    transmissionType,
    drivetrain,
    hybrid: /гибрид|hybrid/i.test(lower) ? true : null,
  };
}

function normalizeMarketHeading(value: string): string | null {
  const match = value.match(/^Для\s+(.+)$/i);
  return match ? match[1].trim() : null;
}

export function parseComplectationHtml(html: string, sourceUrl: string): DromParsedVariant[] {
  const tokens = /<h2\b[^>]*>([\s\S]*?)<\/h2>|<h3\b[^>]*>([\s\S]*?)<\/h3>|(<table\b[^>]*class=["'][^"']*complectation-table[^"']*["'][^>]*>[\s\S]*?<\/table>)/gi;
  let market: string | null = null;
  let generation: ReturnType<typeof parseGenerationHeading> | null = null;
  let group: ReturnType<typeof parseGroup> | null = null;
  const records: DromParsedVariant[] = [];

  for (const token of html.matchAll(tokens)) {
    if (token[1] !== undefined) {
      const heading = cellText(token[1]);
      market = normalizeMarketHeading(heading) ?? market;
      continue;
    }
    if (token[2] !== undefined) {
      generation = parseGenerationHeading(cellText(token[2]));
      group = null;
      continue;
    }
    const table = token[3] ?? '';
    const rows = [...table.matchAll(/<tr\b[^>]*>([\s\S]*?)<\/tr>/gi)].map((match) => cellsFromRow(match[1]));
    for (const row of rows) {
      if (row.length === 1) {
        group = parseGroup(row[0]);
        continue;
      }
      if (row.length !== 5 || /комплектац/i.test(row[0])) continue;
      if (!group) continue;

      const [trimOrGrade, period, , engineCodeRaw, bodyCodeRaw] = row;
      const engineCode = engineCodeRaw.trim() || null;
      const bodyCode = bodyCodeRaw.trim() || null;
      const limitations: string[] = [];
      if (!market) limitations.push('market: Drom page did not expose a recognized market heading');
      if (!generation?.number) limitations.push('generationId: canonical generation mapping is not inferred by the scraper');
      if (!bodyCode) limitations.push('bodyCode: missing in Drom modification row');
      if (!engineCode) limitations.push('engine.code: missing in Drom modification row');
      if (!group.transmissionType) limitations.push('transmissionType: not present in the grouped specification heading');
      if (!group.drivetrain) limitations.push('drivetrain: not present in the grouped specification heading');

      records.push({
        makeSlug: 'toyota',
        modelSlug: 'corolla',
        market,
        generationLabel: generation?.label ?? null,
        generationNumber: generation?.number ?? null,
        generationProductionFrom: generation?.from ?? null,
        generationProductionTo: generation?.to ?? null,
        bodyStyle: generation?.bodyStyle ?? null,
        trimOrGrade,
        productionMonthFrom: monthFromPeriod(period, 'from'),
        productionMonthTo: monthFromPeriod(period, 'to'),
        engineCode,
        bodyCode,
        ...group,
        sourceUrl,
        sourceType: 'secondary-reference',
        verificationStatus: 'partially-verified',
        limitations,
      });
    }
  }
  return records;
}

async function main() {
  const manifest = JSON.parse(await readFile(MANIFEST_PATH, 'utf8')) as {
    results: Array<{ name: string; requestedUrl: string; finalUrl?: string; contentType?: string; status?: number; file?: string; error?: string }>;
  };
  const records: DromParsedVariant[] = [];
  const errors: string[] = [];

  for (const item of manifest.results) {
    if (item.error || item.status !== 200 || !item.file) {
      errors.push(item.name + ': sample unavailable (' + (item.error ?? 'non-200 response') + ')');
      continue;
    }
    const bytes = await readFile(resolve(INPUT_DIR, item.file));
    const charset = item.contentType?.match(/charset=([^;]+)/i)?.[1]?.trim() || 'utf-8';
    let html: string;
    try {
      html = new TextDecoder(charset).decode(bytes);
    } catch {
      errors.push(item.name + ': unsupported charset ' + charset);
      continue;
    }
    const parsed = parseComplectationHtml(html, item.finalUrl ?? item.requestedUrl);
    records.push(...parsed);
    if (!parsed.length) errors.push(item.name + ': no complectation rows matched the known Drom table structure');
  }

  const unique = new Map<string, DromParsedVariant>();
  for (const record of records) {
    const key = [record.market, record.generationLabel, record.trimOrGrade, record.productionMonthFrom, record.engineCode, record.bodyCode].join('|');
    unique.set(key, record);
  }
  const output = {
    generatedAt: new Date().toISOString(),
    source: 'Drom public catalog HTML; secondary reference only',
    inputSamples: manifest.results.length,
    parsedRows: records.length,
    uniqueRows: unique.size,
    importedIntoApplication: false,
    note: 'Raw extraction only. Canonical modelId/generationId matching and primary-source verification are intentionally not inferred.',
    errors,
    records: [...unique.values()],
  };
  await mkdir(OUTPUT_DIR, { recursive: true });
  await writeFile(resolve(OUTPUT_DIR, 'parsed-variants.json'), JSON.stringify(output, null, 2) + '\n');
  console.log(JSON.stringify({ inputSamples: output.inputSamples, parsedRows: output.parsedRows, uniqueRows: output.uniqueRows, errors }, null, 2));
  if (!unique.size) process.exitCode = 1;
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
}
