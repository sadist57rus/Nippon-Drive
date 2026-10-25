export const VEHICLE_COLORS = [
  { id: 'black', label: 'Чёрный', hex: '#202124' },
  { id: 'white', label: 'Белый', hex: '#f5f5f2' },
  { id: 'silver', label: 'Серебристый', hex: '#aeb6bf' },
  { id: 'gray', label: 'Серый', hex: '#68717c' },
  { id: 'red', label: 'Красный', hex: '#c62828' },
  { id: 'blue', label: 'Синий', hex: '#1769aa' },
  { id: 'navy', label: 'Тёмно-синий', hex: '#172c54' },
  { id: 'green', label: 'Зелёный', hex: '#2e6b45' },
  { id: 'brown', label: 'Коричневый', hex: '#76513b' },
  { id: 'beige', label: 'Бежевый', hex: '#c9b99a' },
  { id: 'gold', label: 'Золотистый', hex: '#b99a45' },
  { id: 'yellow', label: 'Жёлтый', hex: '#f2c230' },
  { id: 'orange', label: 'Оранжевый', hex: '#e87524' },
  { id: 'purple', label: 'Фиолетовый', hex: '#7042a0' },
  { id: 'burgundy', label: 'Бордовый', hex: '#722f3e' },
] as const;

export type VehicleColorId = typeof VEHICLE_COLORS[number]['id'];
export const DEFAULT_VEHICLE_COLOR: VehicleColorId = 'silver';

interface Props {
  color?: string;
  bodyType?: string;
  modelName?: string;
  modelId?: string;
  className?: string;
}

/**
 * Vehicle images must depict the selected model, not a generic SVG passed off
 * as a real car. Only models with a verified image are shown as photographs;
 * all other models get a neutral placeholder until a matching image is added.
 */
const VERIFIED_MODEL_IMAGES: Record<string, { src: string; alt: string; credit: string; sourceUrl: string }> = {
  'outlander-1': {
    src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Mitsubishi_outlander_side.jpg',
    alt: 'Mitsubishi Outlander первого поколения, вид сбоку',
    credit: 'Фото: Milkmandan, Wikimedia Commons, CC BY-SA 3.0 / GFDL',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Mitsubishi_outlander_side.jpg',
  },
  'toyota-land-cruiser-100': {
    src: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Landcruiser100.JPG',
    alt: 'Toyota Land Cruiser 100 (J100), фотография автомобиля',
    credit: 'Фото: 100yen, Wikimedia Commons, CC BY-SA 3.0 / GFDL',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Landcruiser100.JPG',
  },
};

export default function VehicleIllustration({
  bodyType = '',
  modelName = '',
  modelId = '',
  className = '',
}: Props) {
  // Image selection is by stable catalog ID, never by a fuzzy model-name match.
  // This prevents an Outlander I photo from appearing on later generations.
  const image = VERIFIED_MODEL_IMAGES[modelId];

  if (image) {
    return (
      <figure className={`w-full min-w-0 ${className}`}>
        <img
          src={image.src}
          alt={image.alt}
          loading="lazy"
          referrerPolicy="no-referrer"
          className="block h-auto max-h-56 w-full object-contain"
          onError={(event) => {
            event.currentTarget.style.display = 'none';
          }}
        />
        <figcaption className="mt-1 text-center text-xs opacity-60"><a href={image.sourceUrl} target="_blank" rel="noreferrer" className="underline">{image.credit}</a></figcaption>
      </figure>
    );
  }

  return (
    <div
      role="img"
      aria-label={`Фотография модели ${modelName || bodyType} пока не добавлена`}
      className={`flex min-h-24 w-full items-center justify-center rounded-md border border-current/15 px-3 py-5 text-center text-sm opacity-60 ${className}`}
    >
      Фото кузова этой модели ещё не проверено
    </div>
  );
}
