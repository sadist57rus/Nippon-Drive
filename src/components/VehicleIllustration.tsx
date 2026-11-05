import PhotoCredit from './PhotoCredit';

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

const MODEL_IMAGE_ALIASES: Record<string, string> = {
  'toyota-camry-xv40': 'toyota-camry-40',
  'toyota-rav4-xa30-crossover': 'toyota-rav4-3',
  'mitsubishi-lancer-cs-sedan': 'lancer-9',
  'mitsubishi-lancer-cs-wagon': 'lancer-9',
  'toyota-land-cruiser-prado-120-j120-suv': 'toyota-prado-j120-suv',
  'nissan-xtrail-t31-suv': 'nissan-xtrail-t31',
  'honda-fit-gd': 'honda-fit-gd-hatchback',
};

function resolveVehicleImageModelId(modelId?: string): string {
  return MODEL_IMAGE_ALIASES[modelId || ''] || modelId || '';
}

export function hasVerifiedVehicleImage(modelId?: string): boolean {
  const resolvedModelId = resolveVehicleImageModelId(modelId);
  return Boolean(VERIFIED_MODEL_IMAGES[resolvedModelId] || resolvedModelId === 'lancer-9');
}

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
  const resolvedModelId = resolveVehicleImageModelId(modelId);
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
    'mitsubishi-lancer-x-cy-sedan': [
      { id: 'silver', label: 'Серебристый', src: '/assets/vehicles/mitsubishi-lancer-x-silver.jpg' },
      { id: 'red', label: 'Красный', src: '/assets/vehicles/mitsubishi-lancer-x-sport-sedan.jpg' },
      { id: 'black', label: 'Чёрный', src: '/assets/vehicles/mitsubishi-lancer-x-black.jpg' },
    ],
    'toyota-prado-j120-suv': [
      { id: 'silver', label: 'Серебристый', src: '/assets/vehicles/toyota-land-cruiser-prado-j120.jpg' },
      { id: 'black', label: 'Чёрный', src: '/assets/vehicles/toyota-prado-j120-black.jpg' },
      { id: 'white', label: 'Белый', src: '/assets/vehicles/toyota-prado-j120-white.jpg' },
    ],
    'nissan-xtrail-t31': [
      { id: 'black', label: 'Чёрный', src: '/assets/vehicles/nissan-x-trail-t31.jpg' },
      { id: 'white', label: 'Белый', src: '/assets/vehicles/nissan-x-trail-t31-white.jpg' },
      { id: 'blue', label: 'Синий', src: '/assets/vehicles/nissan-x-trail-t31-blue.jpg' },
    ],
    'mazda3-bk-hatchback': [
      { id: 'silver', label: 'Серебристый', src: '/assets/vehicles/mazda3-bk-hatchback.jpg' },
    ],
    'nissan-qashqai-j10-crossover': [
      { id: 'white', label: 'Белый', src: '/assets/vehicles/nissan-qashqai-j10.jpg' },
      { id: 'silver', label: 'Серебристый', src: '/assets/vehicles/nissan-qashqai-j10-silver.jpg' },
    ],
    'honda-fit-gd-hatchback': [
      { id: 'silver', label: 'Серебристый', src: '/assets/vehicles/honda-jazz-gd.jpg' },
      { id: 'blue', label: 'Синий', src: '/assets/vehicles/honda-jazz-gd-blue.jpg' },
    ],
    'nissan-note-e11-hatchback': [
      { id: 'green', label: 'Зелёный', src: '/assets/vehicles/nissan-note-e11.jpg' },
      { id: 'red', label: 'Красный', src: '/assets/vehicles/nissan-note-e11-red.jpg' },
    ],
    'lancer-9': bodyType === 'Универсал' ? [
      { id: 'blue', label: 'Синий', src: '/assets/vehicles/mitsubishi-lancer-9-wagon-blue.jpg' },
      { id: 'silver', label: 'Серебристый', src: '/assets/vehicles/mitsubishi-lancer-9-wagon-silver.jpg' },
    ] : [
      { id: 'silver', label: 'Серебристый', src: '/assets/vehicles/mitsubishi-lancer-9-sedan-silver.jpg' },
      { id: 'yellow', label: 'Жёлтый', src: '/assets/vehicles/mitsubishi-lancer-9-sedan-yellow.jpg' },
    ],
  };
  return (options[resolvedModelId] || []).map(option => ({
    ...option,
    hex: VEHICLE_COLORS.find(color => color.id === option.id)?.hex || '#808080',
  }));
}

export function getVehicleColorsForModel(modelId?: string, bodyType = '') {
  const photoOptions = getVehicleColorPhotoOptions(modelId, bodyType);
  if (photoOptions.length) {
    return VEHICLE_COLORS.filter(color => photoOptions.some(option => option.id === color.id));
  }
  return [];
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
  'lancer-9': {
    src: '/assets/vehicles/mitsubishi-lancer-ix-cs-sedan.jpg',
    alt: 'Mitsubishi Lancer IX CS, седан 2004–2005 годов',
    credit: 'Фото: IFCAR, Wikimedia Commons, Public domain (author release); файл оптимизирован для приложения',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:04-05_Mitsubishi_Lancer_sedan.jpg',
  },
  'pajero-sport-3': {
    src: '/assets/vehicles/mitsubishi-pajero-sport-iii.jpg',
    alt: 'Mitsubishi Pajero Sport III, внедорожник',
    credit: 'Фото: RL GNZLZ, Wikimedia Commons, CC BY-SA 2.0; файл оптимизирован для приложения',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Mitsubishi_Pajero_Sport_III.jpg',
  },
  'nissan-patrol-y61': {
    src: '/assets/vehicles/nissan-patrol-y61.jpg',
    alt: 'Nissan Patrol Y61 до рестайлинга',
    credit: 'Фото: Alekc2m, Wikimedia Commons, CC BY-SA 4.0; файл оптимизирован для приложения',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Nissan_Patrol_Y61.jpg',
  },
  'suzuki-grand-vitara-2': {
    src: '/assets/vehicles/suzuki-grand-vitara-jt.jpg',
    alt: 'Suzuki Grand Vitara II JT 2.4 GLX Sport',
    credit: 'Фото: RL GNZLZ, Wikimedia Commons, CC BY-SA 2.0; файл оптимизирован для приложения',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Suzuki_Grand_Vitara_2.4_GLX_Sport_2014_(33343530282).jpg',
  },
  'honda-cr-v-3': {
    src: '/assets/vehicles/honda-crv-re-third-gen.jpg',
    alt: 'Honda CR-V RE, третье поколение',
    credit: 'Фото: Rudolf Stricker, Wikimedia Commons, GFDL 1.2+ / CC BY-SA 3.0; файл оптимизирован для приложения',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Honda_CRV_3_front_20071106.jpg',
  },
  'infiniti-fx-35-37': {
    src: '/assets/vehicles/infiniti-fx35-s51.jpg',
    alt: 'Infiniti FX35 S51',
    credit: 'Фото: Tokumeigakarinoaoshima, Wikimedia Commons, CC BY-SA 4.0; файл оптимизирован для приложения',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Infiniti_FX35_(S51)_front.jpg',
  },
  'daihatsu-terios': {
    src: '/assets/vehicles/daihatsu-terios-j200.jpg',
    alt: 'Daihatsu Terios J200',
    credit: 'Фото: Trop86, Wikimedia Commons, CC0 1.0; файл оптимизирован для приложения',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Daihatsu_Terios_(J200)_164951260.jpg',
  },
  'outlander-3': {
    src: '/assets/vehicles/mitsubishi-outlander-iii.jpg',
    alt: 'Mitsubishi Outlander III, поколение 2012 года',
    credit: 'Фото: Alekc2m, Wikimedia Commons, CC BY-SA 4.0; файл оптимизирован для приложения',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Mitsubishi_Outlander_(third_generation,_2012)_03.jpg',
  },
  'suzuki-jimny-3': {
    src: '/assets/vehicles/suzuki-jimny-jb23.jpg',
    alt: 'Suzuki Jimny JB23W, III поколение, версия 4 (2002–2004)',
    credit: 'Фото: 天然ガス, Wikimedia Commons, CC BY-SA 4.0; файл оптимизирован для приложения',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Suzuki_Jimny_JB23_043.jpg',
  },
  'subaru-forester-sg-sh': {
    src: '/assets/vehicles/subaru-forester-sg.jpg',
    alt: 'Subaru Forester SG XT, 2002–2005, II поколение',
    credit: 'Фото: OSX, Wikimedia Commons, Public domain (author release); файл оптимизирован для приложения',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:2002-2005_Subaru_Forester_XT_wagon_(2011-11-18)_01.jpg',
  },
  'toyota-corolla-fielder-e140-wagon': {
    src: '/assets/vehicles/toyota-corolla-fielder-e140.jpg',
    alt: 'Toyota Corolla Fielder E140, универсал 2006 года',
    credit: 'Фото: Mytho88, Wikimedia Commons, GFDL 1.2+ / CC BY-SA 3.0; файл оптимизирован для приложения',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:2006_Toyota_Corolla-Fielder_03.jpg',
  },
  'honda-civic-fd-sedan': {
    src: '/assets/vehicles/honda-civic-fd1-sedan.jpg',
    alt: 'Honda Civic FD1 1.8GL, седан',
    credit: 'Фото: Tokumeigakarinoaoshima, Wikimedia Commons, CC BY-SA 4.0; файл оптимизирован для приложения',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Honda_CIVIC_1.8GL_(DBA-FD1)_front.jpg',
  },
  'honda-civic-fn-hatchback': {
    src: '/assets/vehicles/honda-civic-fn-hatchback.jpg',
    alt: 'Honda Civic FN, хэтчбек 2008 года, Galaxy Grey',
    credit: 'Фото: Cutlass, Wikimedia Commons, CC0 1.0; файл оптимизирован для приложения',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:2008_Honda_Civic_hatchback_in_Galaxy_Grey,_front_left,_06-05-2025.jpg',
  },
  'subaru-impreza-ge-sedan': {
    src: '/assets/vehicles/subaru-impreza-ge-sedan.jpg',
    alt: 'Subaru Impreza GE, седан 2008 года',
    credit: 'Фото: IFCAR, Wikimedia Commons, Public domain (author release); файл оптимизирован для приложения',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:2008_Subaru_Impreza_sedan.jpg',
  },
  'subaru-impreza-gh-hatchback': {
    src: '/assets/vehicles/subaru-impreza-gh-hatchback.jpg',
    alt: 'Subaru Impreza GH, хэтчбек 2008 года',
    credit: 'Фото: Bull-Doser, Wikimedia Commons, Public domain (author release); файл оптимизирован для приложения',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:2008_Subaru_Impreza_Hatchback.jpg',
  },
  'suzuki-swift-zc11-hatchback': {
    src: '/assets/vehicles/suzuki-swift-zc11s.jpg',
    alt: 'Suzuki Swift ZC11S, хэтчбек',
    credit: 'Фото: Tokumeigakarinoaoshima, Wikimedia Commons, CC0 1.0; файл оптимизирован для приложения',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Tuned_Suzuki_SWIFT_(ZC11S)_front.JPG',
  },
  'lexus-is-xe20-sedan': {
    src: '/assets/vehicles/lexus-is-xe20.jpg',
    alt: 'Lexus IS 250 XE20, седан',
    credit: 'Фото: M 93, Wikimedia Commons, CC BY-SA 3.0; файл оптимизирован для приложения',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Lexus_IS250_front-1.JPG',
  },
  'infiniti-g-v36-sedan': {
    src: '/assets/vehicles/infiniti-g-v36-sedan.jpg',
    alt: 'Infiniti G V36, седан 2007–2009 годов',
    credit: 'Фото: IFCAR, Wikimedia Commons, Public domain (author release); файл оптимизирован для приложения',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Infiniti_G_sedan.jpg',
  },
  'mazda-mpv-lw': {
    src: '/assets/vehicles/mazda-mpv-lw.jpg',
    alt: 'Mazda MPV LW, минивэн 1999–2002 годов',
    credit: 'Фото: OSX, Wikimedia Commons, Public domain (author release); файл оптимизирован для приложения',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:1999-2002_Mazda_MPV_(LW)_van_01.jpg',
  },
  'nissan-march-k12': {
    src: '/assets/vehicles/nissan-march-k12.jpg',
    alt: 'Nissan March K12, хэтчбек',
    credit: 'Фото: TTTNIS, Wikimedia Commons, Public domain (author release); файл оптимизирован для приложения',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:NISSAN_MARCH_K12.jpg',
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
    'toyota-prado-j120-suv': {
      black: colorImage('/assets/vehicles/toyota-prado-j120-black.jpg','Чёрный Toyota Land Cruiser Prado J120 KZJ120 3.0 VX','Фото: Ethan Llamas, Wikimedia Commons, CC BY-SA 4.0','https://commons.wikimedia.org/wiki/File:Toyota_Land_Cruiser_Prado_KZJ120_3.0_VX_Raven_Black_01.jpg'),
      white: colorImage('/assets/vehicles/toyota-prado-j120-white.jpg','Белый Toyota Land Cruiser Prado J120 KZJ120 3.0 VX','Фото: Ethan Llamas, Wikimedia Commons, CC BY-SA 4.0','https://commons.wikimedia.org/wiki/File:Toyota_Land_Cruiser_Prado_KZJ120_3.0_VX_White_Pearl_Crystal_Shine_01.jpg'),
    },
    'nissan-xtrail-t31': {
      white: colorImage('/assets/vehicles/nissan-x-trail-t31-white.jpg','Белый Nissan X-Trail T31 2.5L 2WD','Фото: Ethan Llamas, Wikimedia Commons, CC BY-SA 4.0','https://commons.wikimedia.org/wiki/File:Nissan_X-Trail_T31_2.5L_2WD_White.jpg'),
      blue: colorImage('/assets/vehicles/nissan-x-trail-t31-blue.jpg','Синий Nissan X-Trail T31 2.5L 2WD Tempest Blue','Фото: Ethan Llamas, Wikimedia Commons, CC BY-SA 4.0','https://commons.wikimedia.org/wiki/File:Nissan_X-Trail_T31_2.5L_2WD_Tempest_Blue.jpg'),
    },
    'nissan-qashqai-j10-crossover': {
      silver: colorImage('/assets/vehicles/nissan-qashqai-j10-silver.jpg','Серебристый Nissan Qashqai J10','Фото: Trop86, Wikimedia Commons, CC0 1.0','https://commons.wikimedia.org/wiki/File:Nissan_Qashqai_(J10)_130819.jpg'),
    },
    'honda-fit-gd-hatchback': {
      blue: colorImage('/assets/vehicles/honda-jazz-gd-blue.jpg','Синий Honda Jazz / Fit GD, хэтчбек 2002–2004 годов','Фото: OSX, Wikimedia Commons, общественное достояние','https://commons.wikimedia.org/wiki/File:2002-2004_Honda_Jazz_(GD)_hatchback_02.jpg'),
    },
    'nissan-note-e11-hatchback': {
      green: VERIFIED_MODEL_IMAGES['nissan-note-e11-hatchback'],
      red: colorImage('/assets/vehicles/nissan-note-e11-red.jpg','Красный Nissan Note E11 facelift, 2009 год','Фото: Cutlass, Wikimedia Commons, CC0 1.0','https://commons.wikimedia.org/wiki/File:2009_Nissan_Note_in_Emotion_Red,_front_left,_06-08-2025.jpg'),
    },
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
    'mitsubishi-lancer-x-cy-sedan': {
      black: colorImage('/assets/vehicles/mitsubishi-lancer-x-black.jpg','Чёрный Mitsubishi Lancer X / CY, седан','Фото: JustAnotherCarDesigner, Wikimedia Commons, CC0 1.0','https://commons.wikimedia.org/wiki/File:Mitsubishi_Lancer_X_001.jpg'),
      red: colorImage('/assets/vehicles/mitsubishi-lancer-x-sport-sedan.jpg','Красный Mitsubishi Lancer X / CY0, седан, 2007 год','Фото: Overlaet, Wikimedia Commons, CC BY-SA 3.0','https://commons.wikimedia.org/wiki/File:Mitsubishi_Lancer_Sport_Sedan_(front_side_quarter).jpg'),
    },
    'lancer-9': bodyType === 'Универсал' ? {
      blue: colorImage('/assets/vehicles/mitsubishi-lancer-9-wagon-blue.jpg','Синий Mitsubishi Lancer IX универсал','Фото: Charles01, Wikimedia Commons, CC BY-SA 4.0','https://commons.wikimedia.org/wiki/File:Mitsubishi_Lancer_estate_1584cc_Registered_February_2005.JPG'),
      silver: colorImage('/assets/vehicles/mitsubishi-lancer-9-wagon-silver.jpg','Серебристый Mitsubishi Lancer универсал CH MY07','Фото: OSX, Wikimedia Commons, общественное достояние','https://commons.wikimedia.org/wiki/File:2006-2008_Mitsubishi_Lancer_(CH_MY07)_ES_station_wagon_01.jpg'),
    } : {
      silver: colorImage('/assets/vehicles/mitsubishi-lancer-9-sedan-silver.jpg','Серебристый Mitsubishi Lancer IX седан','Фото: IFCAR, Wikimedia Commons, общественное достояние','https://commons.wikimedia.org/wiki/File:04-05_Mitsubishi_Lancer_sedan.jpg'),
      yellow: colorImage('/assets/vehicles/mitsubishi-lancer-9-sedan-yellow.jpg','Жёлтый Mitsubishi Lancer IX седан CH MY07','Фото: OSX, Wikimedia Commons, общественное достояние','https://commons.wikimedia.org/wiki/File:2006-2007_Mitsubishi_Lancer_(CH_MY07)_ES_sedan_01.jpg'),
    },
  };
  const resolvedModelId = resolveVehicleImageModelId(modelId);
  const image = modelColorImages[resolvedModelId]?.[color] || VERIFIED_MODEL_IMAGES[resolvedModelId];

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
        <PhotoCredit credit={image.credit} sourceUrl={image.sourceUrl} />
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
