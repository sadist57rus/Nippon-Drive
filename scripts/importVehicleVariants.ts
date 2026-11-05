import { readdir, readFile, writeFile } from 'node:fs/promises';
import { resolve, relative } from 'node:path';
import { JAPANESE_BRANDS } from '../src/data/vehicleCatalog';
import { GENERATION_BODY_CATALOG } from '../src/data/generationBodyCatalog';
import { validateVehicleVariant, type VehicleVariant } from '../src/data/vehicleVariantSchema';

const ROOT = process.cwd();
const INPUT_DIR = resolve(ROOT, 'src/data/packs');
const OUTPUT_FILE = resolve(ROOT, 'src/data/vehicleVariantPacks.generated.ts');
const args = new Set(process.argv.slice(2));
const writeMode = args.has('--write');
const checkMode = args.has('--check');
if (writeMode === checkMode) {
  console.error('Укажи ровно один режим: --write или --check');
  process.exit(2);
}
async function jsonFiles(directory: string): Promise<string[]> {
  const entries = await readdir(directory, { withFileTypes: true }).catch(() => []);
  const nested = await Promise.all(entries.map(async entry => {
    const path = resolve(directory, entry.name);
    if (entry.isDirectory()) return jsonFiles(path);
    return entry.isFile() && entry.name.toLowerCase().endsWith('.json') ? [path] : [];
  }));
  return nested.flat().sort();
}
const modelIds = new Set(JAPANESE_BRANDS.flatMap(brand => brand.models.map(model => model.id)));
const generations = new Map(GENERATION_BODY_CATALOG.map(record => [record.id, record]));
const allVariants: VehicleVariant[] = [];
const ids = new Set<string>();
const identities = new Set<string>();
const errors: string[] = [];
const files = await jsonFiles(INPUT_DIR);
for (const file of files) {
  let pack: unknown;
  try { pack = JSON.parse(await readFile(file, 'utf8')); }
  catch (error) { errors.push(relative(ROOT, file) + ': invalid JSON (' + String(error) + ')'); continue; }
  if (!pack || typeof pack !== 'object' || !('schemaVersion' in pack) || pack.schemaVersion !== 1 || !('variants' in pack) || !Array.isArray(pack.variants)) {
    errors.push(relative(ROOT, file) + ': expected { schemaVersion: 1, variants: [] }');
    continue;
  }
  for (const [index, raw] of pack.variants.entries()) {
    const label = relative(ROOT, file) + ' variants[' + index + ']';
    if (!raw || typeof raw !== 'object') { errors.push(label + ': variant must be an object'); continue; }
    const variant = raw as VehicleVariant;
    for (const issue of validateVehicleVariant(variant)) errors.push(label + ': ' + issue);
    if (!modelIds.has(variant.modelId)) errors.push(label + ': unknown modelId ' + variant.modelId);
    const generation = generations.get(variant.generationId);
    if (!generation) errors.push(label + ': unknown generationId ' + variant.generationId);
    else if (generation.sourceModelId !== variant.modelId) errors.push(label + ': generationId does not belong to modelId');
    if (ids.has(variant.id)) errors.push(label + ': duplicate variant id ' + variant.id);
    ids.add(variant.id);
    const identity = [
      variant.modelId, variant.generationId, variant.market, variant.modelYearFrom, variant.modelYearTo ?? '',
      variant.productionMonthFrom ?? '', variant.productionMonthTo ?? '', variant.bodyCode, variant.bodyStyle ?? '',
      variant.trimOrGrade ?? '', variant.engine?.code ?? variant.engineCode ?? '', variant.transmissionCode ?? '',
      variant.transmissionType ?? '', variant.drivetrain ?? '',
    ].join('|').toLocaleLowerCase('en');
    if (identities.has(identity)) errors.push(label + ': duplicate exact vehicle identity');
    identities.add(identity);
    allVariants.push(variant);
  }
}
if (errors.length) {
  console.error('Импорт остановлен. Ошибок: ' + errors.length);
  for (const issue of errors) console.error('ERROR: ' + issue);
  process.exit(1);
}
const generated = [
  '// Автоматически создано scripts/importVehicleVariants.ts. Не редактировать вручную.',
  "import type { VehicleVariant } from './vehicleVariantSchema';",
  'export const VEHICLE_VARIANTS: VehicleVariant[] = ' + JSON.stringify(allVariants, null, 2) + ';',
  '',
].join('\n');
if (checkMode) {
  const current = await readFile(OUTPUT_FILE, 'utf8').catch(() => '');
  if (current !== generated) {
    console.error('vehicleVariantPacks.generated.ts устарел. Выполни: npm run import:vehicles');
    process.exit(1);
  }
  console.log('Пакеты проверены: ' + files.length + ' файлов, ' + allVariants.length + ' модификаций.');
} else {
  await writeFile(OUTPUT_FILE, generated, 'utf8');
  console.log('Импорт выполнен: ' + files.length + ' файлов, ' + allVariants.length + ' модификаций.');
}
