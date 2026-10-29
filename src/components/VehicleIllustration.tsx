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

export interface VehicleColorPhotoOption {
  id: string;
  label: string;
  hex: string;
  src: string;
}

/** Color options are restricted to models/colors with a real matching photo. */
export function getVehicleColorPhotoOptions(modelId?: string, bodyType = ''): VehicleColorPhotoOption[] {
  const options: Record<string, Array<{id: string; label: string; src: string}>> = {
    'toyota-rav4-3': [
      { id: 'silver', label: 'Серебристый', src: '/assets/vehicles/toyota-rav4-xa30-silver.jpg' },
      { id: 'blue', label: 'Синий', src: '/assets/vehicles/toyota-rav4-xa30.jpg' },
      { id: 'black', label: 'Чёрный', src: '/assets/vehicles/toyota-rav4-xa30-black.jpg' },
    ],
    'outlander-1': [
      { id: 'silver', label: 'Серебристый', src: '/assets/vehicles/mitsubishi-outlander-1-silver.jpg' },
      { id: 'blue', label: 'Синий', src: '/assets/vehicles/mitsubishi-outlander-1-blue.jpg' },
      { id: 'red', label: 'Красный', src: '/assets/vehicles/mitsubishi-outlander-1-red.jpg' },
    ],
    'outlander-xl': [
      { id: 'silver', label: 'Серебристый', src: '/assets/vehicles/mitsubishi-outlander-2-silver.jpg' },
      { id: 'black', label: 'Чёрный', src: '/assets/vehicles/mitsubishi-outlander-2-black.jpg' },
    ],
    'lancer-9': bodyType === 'Универсал' ? [
      { id: 'blue', label: 'Синий', src: '/assets/vehicles/mitsubishi-lancer-9-wagon-blue.jpg' },
      { id: 'silver', label: 'Серебристый', src: '/assets/vehicles/mitsubishi-lancer-9-wagon-silver.jpg' },
    ] : [
      { id: 'silver', label: 'Серебристый', src: '/assets/vehicles/mitsubishi-lancer-9-sedan-silver.jpg' },
      { id: 'yellow', label: 'Жёлтый', src: '/assets/vehicles/mitsubishi-lancer-9-sedan-yellow.jpg' },
    ],
  };
  return (options[modelId || ''] || []).map(option => ({
    ...option,
    hex: VEHICLE_COLORS.find(color => color.id === option.id)?.hex || '#808080',
  }));
}

export function getVehicleColorsForModel(modelId?: string, bodyType = '') {
  const photoOptions = getVehicleColorPhotoOptions(modelId, bodyType);
  if (photoOptions.length) {
    return VEHICLE_COLORS.filter(color => photoOptions.some(option => option.id === color.id));
  }
  return VEHICLE_COLORS;
}

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
    src: '/assets/vehicles/mitsubishi-outlander-1.jpg',
    alt: 'Mitsubishi Outlander первого поколения, вид сбоку',
    credit: 'Фото: Milkmandan, Wikimedia Commons, CC BY-SA 3.0 / GFDL; файл уменьшен для приложения',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Mitsubishi_outlander_side.jpg',
  },
  'outlander-xl': {
    src: '/assets/vehicles/mitsubishi-outlander-2.jpg',
    alt: 'Mitsubishi Outlander второго поколения (2007–2008), фотография автомобиля',
    credit: 'Фото: IFCAR, Wikimedia Commons, общественное достояние; файл уменьшен для приложения',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:2nd_Mitsubishi_Outlander.jpg',
  },
  'pajero-4': {
    src: '/assets/vehicles/mitsubishi-pajero-4.jpg',
    alt: 'Mitsubishi Pajero IV, длиннобазная версия после рестайлинга, 2015 год',
    credit: 'Фото: Navigator84, Wikimedia Commons, CC BY-SA 4.0; файл уменьшен для приложения',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Mitsubishi_Pajero_IV_LWB_facelift_China_2015-04-23.jpg',
  },
  'toyota-camry-40': {
    src: '/assets/vehicles/toyota-camry-xv40.jpg',
    alt: 'Toyota Camry XV40, вид строго сбоку',
    credit: 'Фото: Sabung.hamster, Wikimedia Commons, CC BY-SA 4.0; файл уменьшен для приложения',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Toyota_Camry_(XV40)_profile,_Jakarta.jpg',
  },
  'toyota-rav4-3': {
    src: '/assets/vehicles/toyota-rav4-xa30.jpg',
    alt: 'Toyota RAV4 третьего поколения (XA30), синий кузов',
    credit: 'Фото: Ymaup, Wikimedia Commons, CC BY-SA 3.0 / GFDL; файл уменьшен для приложения',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Toyota_Rav4.jpg',
  },
  'toyota-land-cruiser-100': {
    src: '/assets/vehicles/toyota-land-cruiser-100.jpg',
    alt: 'Toyota Land Cruiser 100 (J100), фотография автомобиля',
    credit: 'Фото: 100yen, Wikimedia Commons, CC BY-SA 3.0 / GFDL; файл уменьшен для приложения',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Landcruiser100.JPG',
  },
};

export default function VehicleIllustration({
  color = DEFAULT_VEHICLE_COLOR,
  bodyType = '',
  modelName = '',
  modelId = '',
  className = '',
}: Props) {
  // Images are selected by exact catalog ID, body style, and a verified color photo.
  const colorImage = (src: string, alt: string, credit: string, sourceUrl: string) => ({src,alt,credit,sourceUrl});
  const modelColorImages: Record<string, Record<string, {src:string;alt:string;credit:string;sourceUrl:string}>> = {
    'toyota-rav4-3': {
      silver: colorImage('/assets/vehicles/toyota-rav4-xa30-silver.jpg','Серебристая Toyota RAV4 III facelift (XA30), вид сбоку','Фото: M 93; разрешение на повторное использование с указанием авторства','https://commons.wikimedia.org/wiki/File:Toyota_RAV4_(III,_Facelift)_–_Seitenansicht,_13._Februar_2011,_Mettmann.jpg'),
      blue: VERIFIED_MODEL_IMAGES['toyota-rav4-3'],
      black: colorImage('/assets/vehicles/toyota-rav4-xa30-black.jpg','Чёрная Toyota RAV4 III facelift (XA30)','Фото: Damian B Oh, Wikimedia Commons, CC BY-SA 4.0','https://commons.wikimedia.org/wiki/File:Toyota_RAV4_2.5_4WD_Limited_XA30_FL_Black_(1).jpg'),
    },
    'outlander-1': {
      silver: colorImage('/assets/vehicles/mitsubishi-outlander-1-silver.jpg','Серебристый Mitsubishi Outlander I / CU','Фото: Wikimedia Commons, CC BY-SA 3.0 / GFDL','https://commons.wikimedia.org/wiki/File:Mitsubishi_Outlander_I_(2003-2006)_front.jpg'),
      blue: colorImage('/assets/vehicles/mitsubishi-outlander-1-blue.jpg','Синий Mitsubishi Outlander I / CU','Фото: Guillaume Vachey, Wikimedia Commons, CC0 1.0','https://commons.wikimedia.org/wiki/File:Mitsubishi_Outlander_(47957951373).jpg'),
      red: colorImage('/assets/vehicles/mitsubishi-outlander-1-red.jpg','Красный Mitsubishi Outlander I / CU','Фото: OSX, Wikimedia Commons, общественное достояние','https://commons.wikimedia.org/wiki/File:2005_Mitsubishi_Outlander_(ZF_MY06)_LS_wagon_(2015-06-03)_01.jpg'),
    },
    'outlander-xl': {
      silver: colorImage('/assets/vehicles/mitsubishi-outlander-2-silver.jpg','Серебристый Mitsubishi Outlander II / CW','Фото: Cutlass, Wikimedia Commons, CC0 1.0','https://commons.wikimedia.org/wiki/File:2007_Mitsubishi_Outlander_in_Cool_Silver_Metallic,_front_left,_10-11-2025.jpg'),
      black: colorImage('/assets/vehicles/mitsubishi-outlander-2-black.jpg','Чёрный Mitsubishi Outlander II / CW','Фото: Lukas 3z, Wikimedia Commons, CC0 1.0','https://commons.wikimedia.org/wiki/File:Black_Mitsubishi_Outlander_in_Kraków_(1).jpg'),
    },
    'lancer-9': bodyType === 'Универсал' ? {
      blue: colorImage('/assets/vehicles/mitsubishi-lancer-9-wagon-blue.jpg','Синий Mitsubishi Lancer IX универсал','Фото: Charles01, Wikimedia Commons, CC BY-SA 4.0','https://commons.wikimedia.org/wiki/File:Mitsubishi_Lancer_estate_1584cc_Registered_February_2005.JPG'),
      silver: colorImage('/assets/vehicles/mitsubishi-lancer-9-wagon-silver.jpg','Серебристый Mitsubishi Lancer универсал CH MY07','Фото: OSX, Wikimedia Commons, общественное достояние','https://commons.wikimedia.org/wiki/File:2006-2008_Mitsubishi_Lancer_(CH_MY07)_ES_station_wagon_01.jpg'),
    } : {
      silver: colorImage('/assets/vehicles/mitsubishi-lancer-9-sedan-silver.jpg','Серебристый Mitsubishi Lancer IX седан','Фото: IFCAR, Wikimedia Commons, общественное достояние','https://commons.wikimedia.org/wiki/File:04-05_Mitsubishi_Lancer_sedan.jpg'),
      yellow: colorImage('/assets/vehicles/mitsubishi-lancer-9-sedan-yellow.jpg','Жёлтый Mitsubishi Lancer IX седан CH MY07','Фото: OSX, Wikimedia Commons, общественное достояние','https://commons.wikimedia.org/wiki/File:2006-2007_Mitsubishi_Lancer_(CH_MY07)_ES_sedan_01.jpg'),
    },
  };
  const image = modelColorImages[modelId]?.[color] || VERIFIED_MODEL_IMAGES[modelId];

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
        <figcaption className="mt-1 text-center text-xs opacity-60"><a href={image.sourceUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center justify-center px-2 py-1 text-center underline">{image.credit}</a></figcaption>
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
