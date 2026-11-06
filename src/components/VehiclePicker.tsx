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
        <