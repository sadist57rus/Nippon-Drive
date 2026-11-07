import type { JapaneseBrand, JapaneseCarModel } from '../data/vehicleCatalog';

/** Диапазон лет выпуска, разобранный из строки вида «2006–2012» или «2015–н.в.». */
export interface YearRange { from: number; to: number }

export function parseYearRange(years: string): YearRange | null {
  const nums = (years.match(/\d{4}/g) ?? []).map(Number);
  if (!nums.length) return null;
  const open = /н\.?\s?в|наст|present|\+/i.test(years);
  const first = nums[0];
  const second = nums.length > 1 ? nums[1] : open ? new Date().getFullYear() : first;
  return { from: Math.min(first, second), to: Math.max(first, second) };
}

/* ---------- Семейства моделей (Corolla, Outlander…) ---------- */

export interface VehicleFamily { key: string; name: string; models: JapaneseCarModel[] }

/** «Outlander I (CU)» → «Outlander»; если название не удалось сократить, возвращается как есть. */
export function familyName(model: JapaneseCarModel): string {
  let name = model.name.replace(/\s*\([^)]*\)/g, ' ').replace(/\s+/g, ' ').trim();
  const tails = [/\s+[IVX]{1,4}$/, /\s+(?:Mk|Gen)\.?\s?\d+$/i, /\s+[A-Z]{1,3}\d{1,3}[A-Z]{0,2}$/];
  let changed = true;
  while (changed) {
    changed = false;
    for (const tail of tails) {
      if (tail.test(name)) {
        name = name.replace(tail, '').trim();
        changed = true;
      }
    }
  }
  return name || model.name;
}

export function familyKeyOf(model: JapaneseCarModel): string {
  return familyName(model).toLocaleLowerCase('ru-RU');
}

/** Семейства марки: сначала те, у которых больше поколений, затем по алфавиту. Поколения — от новых к старым. */
export function buildFamilies(brand: JapaneseBrand): VehicleFamily[] {
  const map = new Map<string, VehicleFamily>();
  for (const model of brand.models) {
    const name = familyName(model);
    const key = name.toLocaleLowerCase('ru-RU');
    const existing = map.get(key);
    if (existing) existing.models.push(model);
    else map.set(key, { key, name, models: [model] });
  }
  const families = Array.from(map.values());
  for (const family of families) {
    family.models.sort((a, b) => (parseYearRange(b.years)?.from ?? 0) - (parseYearRange(a.years)?.from ?? 0));
  }
  return families.sort((a, b) => b.models.length - a.models.length || a.name.localeCompare(b.name, 'ru'));
}

/* ---------- Поиск ---------- */

const CYRILLIC: Record<string, string> = {
  а: 'a', б: 'b', в: 'v', г: 'g', д: 'd', е: 'e', ж: 'zh', з: 'z', и: 'i', й: 'i', к: 'k', л: 'l', м: 'm',
  н: 'n', о: 'o', п: 'p', р: 'r', с: 's', т: 't', у: 'u', ф: 'f', х: 'h', ц: 'ts', ч: 'ch', ш: 'sh',
  щ: 'sh', ъ: '', ы: 'i', ь: '', э: 'e', ю: 'u', я: 'a',
};

const BRAND_ALIASES: Record<string, string[]> = {
  toyota: ['тойота'],
  mitsubishi: ['митсубиси', 'мицубиси', 'митсубиши', 'мицубиши'],
  nissan: ['ниссан', 'датсун', 'datsun'],
  honda: ['хонда'],
  mazda: ['мазда'],
  subaru: ['субару'],
  suzuki: ['сузуки'],
  lexus: ['лексус'],
  infiniti: ['инфинити'],
  daihatsu: ['дайхатсу'],
  isuzu: ['исузу'],
  acura: ['акура'],
};

/** Слова без регистра и знаков препинания; «ё» приравнивается к «е». */
export function tokenize(text: string): string[] {
  return text.toLowerCase().replace(/ё/g, 'е').split(/[^a-z0-9а-я]+/).filter(Boolean);
}

/** Звуковой ключ слова: «королла», «corolla» и «корола» дают один ключ, как «тойота» и «toyota». */
export function phoneticKey(token: string): string {
  let out = '';
  for (const ch of token.toLowerCase()) {
    const mapped = CYRILLIC[ch];
    out += mapped !== undefined ? mapped : ch;
  }
  return out
    .replace(/ph/g, 'f')
    .replace(/ck/g, 'k')
    .replace(/q/g, 'k')
    .replace(/w/g, 'v')
    .replace(/x/g, 'ks')
    .replace(/[yj]/g, 'i')
    .replace(/c(?=[ei])/g, 's')
    .replace(/c(?!h)/g, 'k')
    .replace(/(.)\1+/g, '$1');
}

function editDistance(a: string, b: string): number {
  let previous = Array.from({ length: b.length + 1 }, (_, j) => j);
  for (let i = 1; i <= a.length; i++) {
    const current = [i];
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      current[j] = Math.min(previous[j] + 1, current[j - 1] + 1, previous[j - 1] + cost);
    }
    previous = current;
  }
  return previous[b.length];
}

/** 3 — слово совпало полностью, 2 — по началу, 1 — по части, 0.5 — с опечаткой, 0 — не совпало. */
function wordScore(query: string, word: string): number {
  if (word === query) return 3;
  if (word.startsWith(query)) return 2;
  if (query.length >= 3 && word.includes(query)) return 1;
  if (query.length >= 4) {
    const tolerance = query.length >= 8 ? 2 : 1;
    if (editDistance(query, word.slice(0, query.length)) <= tolerance) return 0.5;
  }
  return 0;
}

interface IndexedBrand { brand: JapaneseBrand; keys: string[] }
interface IndexedModel { brand: JapaneseBrand; model: JapaneseCarModel; keys: string[]; range: YearRange | null }
export interface CatalogIndex { brands: IndexedBrand[]; models: IndexedModel[] }

function keysOf(texts: string[]): string[] {
  const keys = new Set<string>();
  for (const text of texts) for (const token of tokenize(text)) keys.add(phoneticKey(token));
  return Array.from(keys);
}

export function buildCatalogIndex(brands: JapaneseBrand[]): CatalogIndex {
  const indexedBrands: IndexedBrand[] = [];
  const indexedModels: IndexedModel[] = [];
  for (const brand of brands) {
    const brandTexts = [brand.name, brand.russianName, ...(BRAND_ALIASES[brand.id] ?? [])];
    indexedBrands.push({ brand, keys: keysOf(brandTexts) });
    for (const model of brand.models) {
      const engines = (model.engines ?? []).map(engine => engine.code + ' ' + engine.name);
      indexedModels.push({
        brand,
        model,
        keys: keysOf([...brandTexts, model.name, model.generation, model.bodyType, ...engines]),
        range: parseYearRange(model.years),
      });
    }
  }
  return { brands: indexedBrands, models: indexedModels };
}

export interface SearchResult {
  brands: JapaneseBrand[];
  models: { brand: JapaneseBrand; model: JapaneseCarModel }[];
}

const isYearToken = (token: string) => /^\d{4}$/.test(token) && Number(token) >= 1950 && Number(token) <= 2100;

/** Все слова запроса должны найтись (с допуском на опечатки); год, если указан, должен попадать в годы выпуска. */
export function searchCatalog(index: CatalogIndex, rawQuery: string, limit = 8): SearchResult {
  const tokens = tokenize(rawQuery);
  const years = tokens.filter(isYearToken).map(Number);
  const textKeys = tokens.filter(token => !isYearToken(token)).map(phoneticKey);
  if (!textKeys.length) return { brands: [], models: [] };

  const score = (keys: string[]): number => {
    let total = 0;
    for (const query of textKeys) {
      let best = 0;
      for (const key of keys) {
        const value = wordScore(query, key);
        if (value > best) best = value;
        if (best === 3) break;
      }
      if (best === 0) return 0;
      total += best;
    }
    return total;
  };

  const brands = years.length
    ? []
    : index.brands
        .map(item => ({ item, value: score(item.keys) }))
        .filter(entry => entry.value > 0)
        .sort((a, b) => b.value - a.value)
        .slice(0, 4)
        .map(entry => entry.item.brand);

  const models: { item: IndexedModel; value: number }[] = [];
  for (const item of index.models) {
    const value = score(item.keys);
    if (value === 0) continue;
    if (years.some(year => !item.range || year < item.range.from || year > item.range.to)) continue;
    models.push({ item, value: value + years.length });
  }
  models.sort((a, b) => b.value - a.value || a.item.model.name.localeCompare(b.item.model.name, 'ru'));

  return {
    brands,
    models: models.slice(0, limit).map(({ item }) => ({ brand: item.brand, model: item.model })),
  };
}
