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
  const [showAll