import { useCallback, useEffect, useState } from 'react';
import { ChevronLeft, Search, X } from 'lucide-react';
import { JAPANESE_BRANDS, type JapaneseBrand, type JapaneseCarModel } from '../data/vehicleCatalog';
import { BrandLogo } from './BrandLogos';
import {
  buildCatalogIndex,
  buildFamilies,
  familyKeyOf,
  parseYearRange,
  searchCatalog,
  type CatalogIndex,
  type VehicleFamily,
  type YearRange,
} from '../lib/vehicleSearch';

export type PickedDrivetrain = 'ALL' | 'FWD' | '4WD';

export interface PickedVehicle {
  brandId: string;
  modelId: string;
  year: number;
  mileage: number;
  engine: string;
  transmission: string;
  drivetrain: PickedDrivetrain;
}

interface Props {
  onComplete: (vehicle: PickedVehicle) => void;
  /** Если задан, на первом шаге «Назад» закрывает мастер. */
  onCancel?: () => void;
  /** Родитель получает обработчик кнопки «Назад» (Android и жест). Возвращает true, если шаг обработан. */
  onRegisterBack?: (handler: () => boolean) => void;
  /** Открыть сразу на уточнении модификации для этой записи каталога. */
  initialModelId?: string;
  saveLabel?: string;
}

type Step = 'brand' | 'family' | 'generation' | 'modification' | 'confirm';

const POPULAR_BRAND_IDS = ['toyota', 'mitsubishi', 'nissan', 'mazda', 'honda'];
const UNKNOWN_ENGINE = 'не указан';
const UNKNOWN_TRANSMISSION = 'не указана';
const MAX_VISIBLE = 8;
const YEAR_BAND = 4;

const STEP_TITLES: Record<Step, string> = {
  brand: 'Выберите марку',
  family: 'Выберите модель',
  generation: 'Выберите поколение',
  modification: 'Уточните модификацию',
  confirm: 'Почти готово',
};

function plural(count: number, forms: [string, string, string]): string {
  const mod10 = count % 10;
  const mod100 = count % 100;
  if (mod10 === 1 && mod100 !== 11) return forms[0];
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) return forms[1];
  return forms[2];
}

function locate(modelId: string | undefined): { brand: JapaneseBrand; model: JapaneseCarModel } | null {
  if (!modelId) return null;
  for (const brand of JAPANESE_BRANDS) {
    const model = brand.models.find(item => item.id === modelId);
    if (model) return { brand, model };
  }
  return null;
}

function singleEngine(model: JapaneseCarModel | null | undefined): string | null {
  const engines = model?.engines ?? [];
  return engines.length === 1 ? engines[0].code : null;
}

function singleTransmission(model: JapaneseCarModel | null | undefined): string | null {
  const transmissions = model?.transmissions ?? [];
  return transmissions.length === 1 ? transmissions[0] : null;
}

/** «6-ступенчатая МКПП — наличие зависит от комплектации» → «6-ступенчатая МКПП». */
function shortLabel(text: string): string {
  const head = text.split(' — ')[0].trim();
  return head.length > 60 ? head.slice(0, 57) + '…' : head;
}

function familySpan(family: VehicleFamily): string {
  const ranges = family.models.map(model => parseYearRange(model.years)).filter((range): range is YearRange => range !== null);
  if (!ranges.length) return '';
  const from = Math.min(...ranges.map(range => range.from));
  const to = Math.max(...ranges.map(range => range.to));
  return from === to ? String(from) : `${from}–${to}`;
}

const chipClass = (selected: boolean) =>
  'min-h-14 rounded-xl border-2 px-4 py-2 text-left text-base font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 ' +
  (selected
    ? 'border-red-600 bg-red-600 text-white'
    : 'border-slate-300 bg-white text-slate-900 hover:border-red-400 dark:border-slate-600 dark:bg-slate-800 dark:text-white');

const cardClass =
  'block min-h-16 w-full rounded-2xl border-2 border-slate-200 bg-white p-4 text-left text-slate-900 transition hover:border-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 dark:border-slate-700 dark:bg-slate-900 dark:text-white';

const moreButtonClass =
  'min-h-14 w-full rounded-xl border-2 border-dashed border-slate-300 px-4 text-base font-semibold text-slate-700 hover:border-red-400 dark:border-slate-600 dark:text-slate-200';

interface ChipOption {
  value: string;
  label: string;
  hint?: string;
}

function ChipGroup({ id, legend, options, value, onChange, unknownValue }: {
  id: string;
  legend: string;
  options: ChipOption[];
  value: string | null;
  onChange: (value: string) => void;
  unknownValue: string;
}) {
  const [expanded, setExpanded] = useState(false);
  const collapsed = options.length > MAX_VISIBLE && !expanded;
  const visible = collapsed ? options.slice(0, MAX_VISIBLE) : options;
  return (
    <fieldset className="space-y-2" data-testid={`picker-group-${id}`}>
      <legend className="text-base font-bold text-slate-900 dark:text-white">{legend}</legend>
      <div className="flex flex-wrap gap-2">
        {visible.map((option, index) => (
          <button key={option.value + index} type="button" aria-pressed={value === option.value} onClick={() => onChange(option.value)} className={chipClass(value === option.value)}>
            <span className="block">{option.label}</span>
            {option.hint && <span className="block text-xs font-normal opacity-80">{option.hint}</span>}
          </button>
        ))}
        {collapsed && (
          <button type="button" onClick={() => setExpanded(true)} className={moreButtonClass + ' sm:w-auto'}>
            Ещё {options.length - MAX_VISIBLE}
          </button>
        )}
        <button type="button" data-testid={`picker-${id}-unknown`} aria-pressed={value === unknownValue} onClick={() => onChange(unknownValue)} className={chipClass(value === unknownValue)}>
          Не знаю
        </button>
      </div>
    </fieldset>
  );
}

export default function VehiclePicker({ onComplete, onCancel, onRegisterBack, initialModelId, saveLabel = 'Сохранить автомобиль' }: Props) {
  const [step, setStep] = useState<Step>(() => (locate(initialModelId) ? 'modification' : 'brand'));
  const [brandId, setBrandId] = useState<string | null>(() => locate(initialModelId)?.brand.id ?? null);
  const [familyKey, setFamilyKey] = useState<string | null>(() => {
    const found = locate(initialModelId);
    return found ? familyKeyOf(found.model) : null;
  });
  const [modelId, setModelId] = useState<string | null>(() => locate(initialModelId)?.model.id ?? null);
  const [engine, setEngine] = useState<string | null>(() => singleEngine(locate(initialModelId)?.model));
  const [transmission, setTransmission] = useState<string | null>(() => singleTransmission(locate(initialModelId)?.model));
  const [drivetrain, setDrivetrain] = useState<PickedDrivetrain | null>(null);
  const [year, setYear] = useState<number | null>(null);
  const [yearGuess, setYearGuess] = useState(false);
  const [bandIndex, setBandIndex] = useState<number | null>(null);
  const [mileage, setMileage] = useState('');
  const [showAllBrands, setShowAllBrands] = useState(false);
  const [showAllFamilies, setShowAllFamilies] = useState(false);
  const [showAllGenerations, setShowAllGenerations] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [index, setIndex] = useState<CatalogIndex | null>(null);

  const brand = brandId ? JAPANESE_BRANDS.find(item => item.id === brandId) ?? null : null;
  const families = brand ? buildFamilies(brand) : [];
  const family = families.find(item => item.key === familyKey) ?? null;
  const model = brand && modelId ? brand.models.find(item => item.id === modelId) ?? null : null;
  const engines = model?.engines ?? [];
  const transmissions = model?.transmissions ?? [];

  const openSearch = () => {
    setIndex(previous => previous ?? buildCatalogIndex(JAPANESE_BRANDS));
    setSearchOpen(true);
  };
  const closeSearch = () => {
    setSearchOpen(false);
    setQuery('');
  };

  const chooseBrand = (id: string) => {
    setBrandId(id);
    setFamilyKey(null);
    setModelId(null);
    setShowAllFamilies(false);
    setStep('family');
  };

  const chooseModel = (nextBrand: JapaneseBrand, next: JapaneseCarModel) => {
    setBrandId(nextBrand.id);
    setFamilyKey(familyKeyOf(next));
    setModelId(next.id);
    setEngine(singleEngine(next));
    setTransmission(singleTransmission(next));
    setDrivetrain(null);
    setYear(null);
    setYearGuess(false);
    setBandIndex(null);
    setStep('modification');
  };

  const chooseFamily = (next: VehicleFamily) => {
    setFamilyKey(next.key);
    setShowAllGenerations(false);
    if (next.models.length === 1 && brand) {
      chooseModel(brand, next.models[0]);
    } else {
      setModelId(null);
      setStep('generation');
    }
  };

  const goBack = useCallback((): boolean => {
    if (searchOpen) {
      setSearchOpen(false);
      setQuery('');
      return true;
    }
    if (step === 'confirm') { setStep('modification'); return true; }
    if (step === 'modification') { setStep(family && family.models.length > 1 ? 'generation' : 'family'); return true; }
    if (step === 'generation') { setStep('family'); return true; }
    if (step === 'family') { setStep('brand'); return true; }
    if (onCancel) { onCancel(); return true; }
    return false;
  }, [searchOpen, step, family, onCancel]);

  useEffect(() => {
    onRegisterBack?.(goBack);
    return () => onRegisterBack?.(() => false);
  }, [goBack, onRegisterBack]);

  const canGoBack = searchOpen || step !== 'brand' || Boolean(onCancel);
  const results = index && query.trim() ? searchCatalog(index, query) : null;

  const modificationReady =
    (engines.length === 0 || engine !== null) &&
    (transmissions.length === 0 || transmission !== null) &&
    drivetrain !== null;

  const range = model ? parseYearRange(model.years) : null;
  const years = range ? Array.from({ length: range.to - range.from + 1 }, (_, offset) => range.from + offset) : [];
  const bands: number[][] | null = years.length > MAX_VISIBLE
    ? Array.from({ length: Math.ceil(years.length / YEAR_BAND) }, (_, i) => years.slice(i * YEAR_BAND, (i + 1) * YEAR_BAND))
    : null;
  const visibleYears = bands ? (bandIndex !== null ? bands[bandIndex] : []) : years;
  const yearValid = year !== null && Number.isInteger(year) && year >= 1900 && year <= new Date().getFullYear() + 1;

  const save = () => {
    if (!brand || !model || year === null || !yearValid) return;
    onComplete({
      brandId: brand.id,
      modelId: model.id,
      year,
      mileage: Math.max(0, Number(mileage) || 0),
      engine: engine ?? UNKNOWN_ENGINE,
      transmission: transmission ?? UNKNOWN_TRANSMISSION,
      drivetrain: drivetrain ?? 'ALL',
    });
  };

  const engineLabel = engine === null || engine === UNKNOWN_ENGINE ? 'не указан' : engines.find(item => item.code === engine)?.name ?? engine;
  const transmissionLabel = transmission === null || transmission === UNKNOWN_TRANSMISSION ? 'не указана' : shortLabel(transmission);
  const drivetrainLabel = drivetrain === 'FWD' ? 'передний' : drivetrain === '4WD' ? 'полный' : 'не указан';

  const popular = JAPANESE_BRANDS.filter(item => POPULAR_BRAND_IDS.includes(item.id));
  const shownBrands = showAllBrands || popular.length === 0 ? JAPANESE_BRANDS : popular;
  const shownFamilies = showAllFamilies ? families : families.slice(0, MAX_VISIBLE);
  const generations = family?.models ?? [];
  const shownGenerations = showAllGenerations ? generations : generations.slice(0, MAX_VISIBLE);

  const crumb = (label: string, target: Step) => (
    <button key={target} type="button" onClick={() => setStep(target)} className="min-h-12 rounded-full bg-slate-100 px-4 text-sm font-semibold text-slate-800 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700">
      {label}
    </button>
  );

  return (
    <section aria-label="Подбор автомобиля" data-testid="vehicle-picker" className="mx-auto w-full max-w-3xl space-y-5 text-slate-900 dark:text-white">
      <div className="flex items-center gap-3">
        {canGoBack && (
          <button type="button" data-testid="picker-back" aria-label="Назад" onClick={() => { goBack(); }} className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border-2 border-slate-300 hover:border-red-400 dark:border-slate-600">
            <ChevronLeft aria-hidden="true" size={24} />
          </button>
        )}
        <h2 className="min-w-0 flex-1 text-2xl font-black">{searchOpen ? 'Поиск' : STEP_TITLES[step]}</h2>
        <button type="button" data-testid="picker-search-toggle" aria-label="Поиск по марке и модели" aria-pressed={searchOpen} onClick={() => (searchOpen ? closeSearch() : openSearch())} className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border-2 ${searchOpen ? 'border-red-600 bg-red-600 text-white' : 'border-slate-300 hover:border-red-400 dark:border-slate-600'}`}>
          {searchOpen ? <X aria-hidden="true" size={24} /> : <Search aria-hidden="true" size={24} />}
        </button>
      </div>

      {searchOpen && (
        <div className="space-y-4">
          <label className="flex min-h-14 items-center gap-3 rounded-2xl border-2 border-slate-300 bg-white px-4 dark:border-slate-600 dark:bg-slate-800">
            <Search aria-hidden="true" className="shrink-0 text-slate-500" size={20} />
            <input
              autoFocus
              type="search"
              enterKeyHint="search"
              autoComplete="off"
              autoCapitalize="off"
              spellCheck={false}
              data-testid="picker-search-input"
              aria-label="Марка, модель или поколение"
              value={query}
              onChange={event => setQuery(event.target.value)}
              placeholder="Например: тойота кор, outlander 2005"
              className="min-h-14 w-full bg-transparent text-lg text-slate-900 outline-none placeholder:text-slate-500 dark:text-white"
            />
          </label>
          {!results && <p className="text-base text-slate-600 dark:text-slate-300">Начните вводить марку или модель. Можно по-русски и по-английски, с годом выпуска.</p>}
          {results && results.brands.length === 0 && results.models.length === 0 && (
            <p className="text-base text-slate-600 dark:text-slate-300">Ничего не нашли. Попробуйте написать иначе или закройте поиск и выберите по карточкам.</p>
          )}
          {results && results.brands.length > 0 && (
            <div className="space-y-2">
              <h3 className="text-base font-bold">Марки</h3>
              {results.brands.map(item => (
                <button key={item.id} type="button" data-testid={`picker-result-brand-${item.id}`} onClick={() => { chooseBrand(item.id); closeSearch(); }} className={cardClass}>
                  <span className="text-lg font-extrabold">{item.name}</span> <span className="text-sm text-slate-600 dark:text-slate-300">{item.russianName}</span>
                </button>
              ))}
            </div>
          )}
          {results && results.models.length > 0 && (
            <div className="space-y-2">
              <h3 className="text-base font-bold">Модели и поколения</h3>
              {results.models.map(({ brand: owner, model: item }) => (
                <button key={item.id} type="button" data-testid={`picker-result-model-${item.id}`} onClick={() => { chooseModel(owner, item); closeSearch(); }} className={cardClass}>
                  <span className="block text-lg font-extrabold">{owner.name} {item.name}</span>
                  <span className="block text-sm text-slate-600 dark:text-slate-300">{item.generation}, {item.years}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {!searchOpen && step !== 'brand' && brand && (
        <nav aria-label="Ваш выбор" className="flex flex-wrap gap-2">
          {crumb(brand.name, 'brand')}
          {family && step !== 'family' && crumb(family.name, 'family')}
          {family && family.models.length > 1 && model && (step === 'modification' || step === 'confirm') && crumb(model.generation, 'generation')}
        </nav>
      )}

      {!searchOpen && step === 'brand' && (
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {shownBrands.map(item => (
              <button key={item.id} type="button" data-testid={`picker-brand-${item.id}`} onClick={() => chooseBrand(item.id)} className={cardClass + ' flex min-h-28 flex-col items-center justify-center gap-2 text-center'}>
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 p-1.5 dark:bg-slate-800"><BrandLogo brandId={item.id} className="h-9 w-9" useBrandColor={true} /></span>
                <span className="text-lg font-extrabold">{item.name}</span>
              </button>
            ))}
          </div>
          {!showAllBrands && popular.length > 0 && popular.length < JAPANESE_BRANDS.length && (
            <button type="button" data-testid="picker-show-all" onClick={() => setShowAllBrands(true)} className={moreButtonClass}>Все марки ({JAPANESE_BRANDS.length})</button>
          )}
        </div>
      )}

      {!searchOpen && step === 'family' && brand && (
        <div className="space-y-3">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {shownFamilies.map((item, position) => (
              <button key={item.key} type="button" data-testid={`picker-family-${position}`} onClick={() => chooseFamily(item)} className={cardClass}>
                <span className="block text-lg font-extrabold">{item.name}</span>
                <span className="block text-sm text-slate-600 dark:text-slate-300">
                  {[familySpan(item), `${item.models.length} ${plural(item.models.length, ['поколение', 'поколения', 'поколений'])}`].filter(Boolean).join(', ')}
                </span>
              </button>
            ))}
          </div>
          {!showAllFamilies && families.length > MAX_VISIBLE && (
            <button type="button" data-testid="picker-show-all" onClick={() => setShowAllFamilies(true)} className={moreButtonClass}>Показать все модели ({families.length})</button>
          )}
          <p className="text-sm text-slate-600 dark:text-slate-300">Не нашли свою? Нажмите на лупу вверху и введите название.</p>
        </div>
      )}

      {!searchOpen && step === 'generation' && brand && family && (
        <div className="space-y-3">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {shownGenerations.map(item => (
              <button key={item.id} type="button" data-testid={`picker-model-${item.id}`} onClick={() => chooseModel(brand, item)} className={cardClass}>
                <span className="block text-lg font-extrabold">{item.generation}</span>
                <span className="block text-sm text-slate-700 dark:text-slate-200">{item.years}, {item.bodyType}</span>
                <span className="block text-xs text-slate-600 dark:text-slate-300">{item.name}</span>
              </button>
            ))}
          </div>
          {!showAllGenerations && generations.length > MAX_VISIBLE && (
            <button type="button" data-testid="picker-show-all" onClick={() => setShowAllGenerations(true)} className={moreButtonClass}>Показать все поколения ({generations.length})</button>
          )}
        </div>
      )}

      {!searchOpen && step === 'modification' && brand && model && (
        <div className="space-y-6">
          <div>
            <p className="text-lg font-extrabold">{brand.name} {model.name}</p>
            <p className="text-sm text-slate-600 dark:text-slate-300">{model.generation}, {model.years}, {model.bodyType}</p>
          </div>
          {engines.length > 0 && (
            <ChipGroup id="engine" legend="Двигатель" value={engine} onChange={setEngine} unknownValue={UNKNOWN_ENGINE} options={engines.map(item => ({ value: item.code, label: item.name, hint: item.code }))} />
          )}
          {transmissions.length > 0 && (
            <ChipGroup id="transmission" legend="Коробка передач" value={transmission} onChange={setTransmission} unknownValue={UNKNOWN_TRANSMISSION} options={transmissions.map(item => ({ value: item, label: shortLabel(item) }))} />
          )}
          <ChipGroup id="drivetrain" legend="Привод" value={drivetrain} onChange={value => setDrivetrain(value as PickedDrivetrain)} unknownValue="ALL" options={[{ value: 'FWD', label: 'Передний' }, { value: '4WD', label: 'Полный' }]} />
          <button type="button" data-testid="picker-next" disabled={!modificationReady} onClick={() => setStep('confirm')} className="min-h-16 w-full rounded-2xl bg-red-600 px-6 text-xl font-black text-white shadow-lg hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-50">
            Далее
          </button>
          {!modificationReady && <p className="text-sm text-slate-600 dark:text-slate-300">В каждой группе выберите вариант или нажмите «Не знаю».</p>}
        </div>
      )}

      {!searchOpen && step === 'confirm' && brand && model && (
        <div className="space-y-6">
          <div className="flex items-center gap-4 rounded-2xl border-2 border-slate-200 p-4 dark:border-slate-700">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-slate-100 p-2 dark:bg-slate-800"><BrandLogo brandId={brand.id} className="h-10 w-10" useBrandColor={true} /></span>
            <div className="min-w-0">
              <p className="text-lg font-extrabold">{brand.name} {model.name}</p>
              <p className="text-sm text-slate-600 dark:text-slate-300">{model.generation}, {model.years}</p>
              <p className="text-sm text-slate-600 dark:text-slate-300">Двигатель: {engineLabel}. Коробка: {transmissionLabel}. Привод: {drivetrainLabel}.</p>
            </div>
          </div>

          <fieldset className="space-y-2">
            <legend className="text-base font-bold">Год выпуска</legend>
            {years.length === 0 ? (
              <input type="number" inputMode="numeric" min="1950" max={new Date().getFullYear() + 1} data-testid="picker-year-input" aria-label="Год выпуска" value={year ?? ''} onChange={event => { setYear(event.target.value ? Number(event.target.value) : null); setYearGuess(false); }} className="min-h-14 w-full rounded-2xl border-2 border-slate-300 bg-white px-4 text-xl text-slate-900 dark:border-slate-600 dark:bg-slate-800 dark:text-white" />
            ) : (
              <div className="space-y-2">
                {bands && (
                  <div className="flex flex-wrap gap-2">
                    {bands.map((band, position) => (
                      <button key={band[0]} type="button" data-testid={`picker-band-${position}`} aria-pressed={bandIndex === position} onClick={() => { setBandIndex(position); setYear(null); setYearGuess(false); }} className={chipClass(bandIndex === position)}>
                        {band[0]}–{band[band.length - 1]}
                      </button>
                    ))}
                  </div>
                )}
                <div className="flex flex-wrap gap-2">
                  {visibleYears.map(value => (
                    <button key={value} type="button" data-testid={`picker-yearchip-${value}`} aria-pressed={year === value} onClick={() => { setYear(value); setYearGuess(false); }} className={chipClass(year === value)}>
                      {value}
                    </button>
                  ))}
                  <button type="button" data-testid="picker-year-unknown" aria-pressed={yearGuess} onClick={() => { setYear(years[0]); setYearGuess(true); }} className={chipClass(yearGuess)}>
                    Не знаю
                  </button>
                </div>
                {yearGuess && <p className="text-sm text-slate-600 dark:text-slate-300">Поставим начало выпуска этого поколения: {years[0]}. Уточнить год можно позже в разделе «Авто».</p>}
              </div>
            )}
          </fieldset>

          <label className="block text-base font-bold">
            Пробег, км (можно указать позже)
            <input type="number" min="0" inputMode="numeric" data-testid="picker-mileage" value={mileage} onChange={event => setMileage(event.target.value)} className="mt-2 min-h-14 w-full rounded-2xl border-2 border-slate-300 bg-white px-4 text-xl text-slate-900 dark:border-slate-600 dark:bg-slate-800 dark:text-white" />
          </label>

          <button type="button" data-testid="picker-save" disabled={!yearValid} onClick={save} className="min-h-16 w-full rounded-2xl bg-red-600 px-6 text-xl font-black text-white shadow-lg hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-50">
            {saveLabel}
          </button>
          {!yearValid && <p className="text-sm text-slate-600 dark:text-slate-300">Выберите год выпуска или нажмите «Не знаю».</p>}
        </div>
      )}
    </section>
  );
}
