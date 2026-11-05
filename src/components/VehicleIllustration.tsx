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
  'mitsubishi-lancer-x-cy-sedan': {
    src: '/assets/vehicles/mitsubishi-lancer-x-silver.jpg',
    alt: 'Серебристый Mitsubishi Lancer X (CY), седан 2008 года, вид сбоку',
    credit: 'Фото: Acgskup, Wikimedia Commons, CC BY 4.0; файл уменьшен для приложения',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Mitsubishi_Lancer_(2008)_–_left_side_view.jpg',
  },
  'toyota-prado-j120-suv': {
    src: '/assets/vehicles/toyota-land-cruiser-prado-j120.jpg',
    alt: 'Серебристый Toyota Land Cruiser Prado J120, 2006 год, 3.0 D-4D',
    credit: 'Фото: Dekel Santo, Wikimedia Commons, CC BY-SA 3.0; файл уменьшен для приложения',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Toyota_Land-Cruiser_Prado.jpg',
  },
  'nissan-xtrail-t31': {
    src: '/assets/vehicles/nissan-x-trail-t31.jpg',
    alt: 'Чёрный Nissan X-Trail второго поколения T31, вид сбоку',
    credit: 'Фото: Acgskup, Wikimedia Commons, CC BY 4.0; файл уменьшен для приложения',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Nissan_X-Trail_%E2%80%93_right_side_view.jpg',
  },
  'mazda3-bk-hatchback': {
    src: '/assets/vehicles/mazda3-bk-hatchback.jpg',
    alt: 'Серебристый Mazda3 первого поколения BK, хэтчбек 2004 года',
    credit: 'Фото: Bull-Doser, Wikimedia Commons, общественное достояние; файл уменьшен для приложения',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:%2704_Mazda3_2.3_Hatchback.JPG',
  },
  'nissan-qashqai-j10-crossover': {
    src: '/assets/vehicles/nissan-qashqai-j10.jpg',
    alt: 'Белый Nissan Qashqai первого поколения J10',
    credit: 'Фото: Trop86, Wikimedia Commons, CC BY 4.0; файл уменьшен для приложения',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Nissan_Qashqai_(J10)_164122.jpg',
  },
  'honda-fit-gd-hatchback': {
    src: '/assets/vehicles/honda-jazz-gd.jpg',
    alt: 'Honda Jazz / Fit первого поколения GD, хэтчбек 2002–2004 годов',
    credit: 'Фото: OSX, Wikimedia Commons, общественное достояние; файл уменьшен для приложения',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:2002-2004_Honda_Jazz_(GD)_hatchback_01.jpg',
  },
  'toyota-land-cruiser-100': {
    src: '/assets/vehicles/toyota-land-cruiser-100.jpg',
    alt: 'Toyota Land Cruiser 100 (J100), фотография автомобиля',
    credit: 'Фото: 100yen, Wikimedia Commons, CC BY-SA 3.0 / GFDL; файл уменьшен для приложения',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Landcruiser100.JPG',
  },
  'toyota-corolla-e120': {
    src: '/assets/vehicles/toyota-corolla-e120.jpg',
    alt: 'Белая Toyota Corolla E120/E130, седан',
    credit: 'Фото: Kuha455405, Wikimedia Commons, CC BY-SA 3.0 / GFDL 1.2+; файл оптимизирован для приложения',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:E120_Toyota_Corolla.jpg',
  },
  'mazda3-bk-sedan': {
    src: '/assets/vehicles/mazda3-bk-sedan.jpg',
    alt: 'Mazda3 BK, седан',
    credit: 'Фото: Krzysztof Masloch, Wikimedia Commons, CC BY-SA 3.0; файл оптимизирован для приложения',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Mazda_3_BK.jpg',
  },
  'nissan-note-e11-hatchback': {
    src: '/assets/vehicles/nissan-note-e11.jpg',
    alt: 'Nissan Note E11, хэтчбек',
    credit: 'Фото: Mytho88, Wikimedia Commons, CC BY-SA 3.0 / GFDL 1.2+; файл оптимизирован для приложения',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:2005_Nissan_Note_01.jpg',
  },
  'toyota-camry-xv30': {
    src: '/assets/vehicles/toyota-camry-xv30.jpg',
    alt: 'Toyota Camry XV30, японская ACV30 2.4G',
    credit: 'Фото: Toyotacoronaexsaloon, Wikimedia Commons, CC BY-SA 4.0; файл оптимизирован для приложения',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Toyota_camry_acv30_2.4g_1_f.jpg',
  },
  'nissan-serena-c25': {
    src: '/assets/vehicles/nissan-serena-c25.jpg',
    alt: 'Nissan Serena C25, минивэн',
    credit: 'Фото: TTTNIS, Wikimedia Commons, Public domain (author release); файл оптимизирован для приложения',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:NISSAN_SERENA_C25.jpg',
  },
  'nissan-tiida-c11-hatchback': {
    src: '/assets/vehicles/nissan-tiida-c11-hatchback.jpg',
    alt: 'Серая Nissan Tiida C11, хэтчбек',
    credit: 'Фото: SSJF01, Wikimedia Commons, CC0 1.0; файл оптимизирован для приложения',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Nissan_Tiida_(C11)_hatchback.png',
  },
  'toyota-prius-xw30-liftback': {
    src: '/assets/vehicles/toyota-prius-xw30.jpg',
    alt: 'Серебристая Toyota Prius XW30, лифтбек',
    credit: 'Фото: Dinkun Chen, Wikimedia Commons, CC BY-SA 4.0; файл оптимизирован для приложения',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:TOYOTA_PRIUS_(XW30)_China.jpg',
  },
  'toyota-hiace-h200': {
    src: '/assets/vehicles/toyota-hiace-h200.jpg',
    alt: 'Белый Toyota HiAce H200',
    credit: 'Фото: Bull-Doser, Wikimedia Commons, Public domain (author release); файл оптимизирован для приложения',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Toyota_H-200_HiAce.jpg',
  },
  'mazda-cx5-ke-crossover': {
    src: '/assets/vehicles/mazda-cx5-ke.jpg',
    alt: 'Синяя Mazda CX-5 KE, Grand Touring',
    credit: 'Фото: OSX, Wikimedia Commons, Public domain (author release); файл оптимизирован для приложения',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:2012_Mazda_CX-5_(KE)_Grand_Touring_wagon_(2012-10-26)_01.jpg',
  },
  'toyota-yaris-xp90-hatchback': {
    src: '/assets/vehicles/toyota-vitz-xp90.jpg',
    alt: 'Белая Toyota Vitz / Yaris XP90, хэтчбек',
    credit: 'Фото: arakaki (uploaded by Hanloh), Wikimedia Commons, Public domain (author release); файл оптимизирован для приложения',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:White_Toyota_Vitz_(XP90).jpg',
  },
  'honda-crv-rd7-suv': {
    src: '/assets/vehicles/honda-crv-rd7-gray.jpg',
    alt: 'Серый Honda CR-V второго поколения RD7, 2006 год',
    credit: 'Фото: OSX, Wikimedia Commons, общественное достояние; файл оптимизирован для приложения',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:2006_Honda_CR-V_(RD7_MY06)_wagon_(2008-11-12).jpg',
  },
  'mazda-6-gg-sedan': {
    src: '/assets/vehicles/mazda6-gg-sedan-silver.jpg',
    alt: 'Серебристая Mazda6 первого поколения GG, седан 2003–2005 годов',
    credit: 'Фото: Bull-Doser, Wikimedia Commons, общественное достояние; файл оптимизирован для приложения',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:%2703-%2705_Mazda_6_Sedan.JPG',
  },
  'toyota-mark-ii-x90-tourer-v': {
    src: '/assets/vehicles/toyota-mark-ii-x90-tourer-v.jpg',
    alt: 'Toyota Mark II X90 Tourer V, седан',
    credit: 'Фото: Mld61294, Wikimedia Commons, CC BY-SA 4.0; файл оптимизирован для приложения',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Toyota_Mark_II_Tourer_V_(JZX90).jpg',
  },
  'toyota-mark-ii-x100-tourer-v': {
    src: '/assets/vehicles/toyota-mark-ii-x100-tourer-v.jpg',
    alt: 'Toyota Mark II X100 Tourer V, седан',
    credit: 'Фото: 先従隗始, Wikimedia Commons, CC0 1.0; файл оптимизирован для приложения',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Toyota_GF-JZX100_Mark_Ⅱ_2.5_TOURER_V_(24033010401).jpg',
  },
  'toyota-chaser-x100-tourer-v': {
    src: '/assets/vehicles/toyota-chaser-x100-tourer-v.jpg',
    alt: 'Toyota Chaser X100 Tourer V',
    credit: 'Фото: FotoSleuth (uploaded by OSX), Wikimedia Commons, CC BY 2.0; файл оптимизирован для приложения',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Toyota_Chaser_Tourer_V.jpg',
  },
  'toyota-chaser-x90-tourer-v': {
    src: '/assets/vehicles/toyota-chaser-x90-tourer-v.jpg',
    alt: 'Toyota Chaser X90 Tourer V',
    credit: 'Фото: 先従隗始, Wikimedia Commons, CC0 1.0; файл оптимизирован для приложения',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Nissan_GF-S15_Silvia_spec._S_-_Toyota_E-JZX90_Chaser_2.5_Tourer_V_(23011710160).jpg',
  },
  'toyota-cresta-x100-rulant-g': {
    src: '/assets/vehicles/toyota-cresta-x100-roulant-g.jpg',
    alt: 'Toyota Cresta X100 2.5 Roulant G',
    credit: 'Фото: 先従隗始, Wikimedia Commons, CC0 1.0; файл оптимизирован для приложения',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Toyota_GF-JZX100_Cresta_2.5_Roulant_G_-_Honda_ABA-CL9_Accord_24TL_(23060415233).jpg',
  },
  'toyota-supra-a80-rz': {
    src: '/assets/vehicles/toyota-supra-a80-rz.jpg',
    alt: 'Toyota Supra A80 RZ, купе',
    credit: 'Фото: Tokumeigakarinoaoshima, Wikimedia Commons, CC0 1.0; файл оптимизирован для приложения',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Toyota_Supra_RZ_(E-JZA80).jpg',
  },
  'toyota-supra-a70-gt-turbo': {
    src: '/assets/vehicles/toyota-supra-a70-gt-turbo.jpg',
    alt: 'Toyota Supra A70 3.0 GT Turbo, купе 1989 года',
    credit: 'Фото: Sicnag, Wikimedia Commons, CC BY 2.0; файл оптимизирован для приложения',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:1989_Toyota_A70_Supra_MkIII_3.0_GT_Turbo.jpg',
  },
  'toyota-soarer-jzz30-gt-twin-turbo': {
    src: '/assets/vehicles/toyota-soarer-jzz30-gt-twin-turbo.jpg',
    alt: 'Toyota Soarer JZZ30 2.5 GT Twin Turbo',
    credit: 'Фото: TTTNIS, Wikimedia Commons, CC0 1.0; файл оптимизирован для приложения',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:1992_Toyota_Soarer_2.5GT_Twin_Turbo.jpg',
  },
  'nissan-cefiro-a31-rb20det': {
    src: '/assets/vehicles/nissan-cefiro-a31-rb20det.jpg',
    alt: 'Nissan Cefiro A31, седан',
    credit: 'Фото: OSX, Wikimedia Commons, Public domain (author release); файл оптимизирован для приложения',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:1988-1990_Nissan_Cefiro_(A31)_sedan_01.jpg',
  },
  'nissan-laurel-c33-rb20-medalist': {
    src: '/assets/vehicles/nissan-laurel-c33-rb20-medalist.jpg',
    alt: 'Nissan Laurel C33 Medalist',
    credit: 'Фото: Toyotacoronaexsaloon, Wikimedia Commons, CC BY-SA 4.0; файл оптимизирован для приложения',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Nissan_laurel_hc33_medalist_1_f.jpg',
  },
  'toyota-mr2-sw20-gt-s-1997': {
    src: '/assets/vehicles/toyota-mr2-sw20-gt-s.jpg',
    alt: 'Toyota MR2 GT-S SW20, купе',
    credit: 'Фото: Toyotacoronaexsaloon, Wikimedia Commons, CC BY-SA 4.0; файл оптимизирован для приложения',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Toyota_mr2_sw20_gt-s_1_r.jpg',
  },
  'toyota-starlet-ep91-glanza-v': {
    src: '/assets/vehicles/toyota-starlet-ep91-glanza-v.jpg',
    alt: 'Toyota Starlet Glanza V EP91, хэтчбек',
    credit: 'Фото: Toyotacoronaexsaloon, Wikimedia Commons, CC BY-SA 4.0; файл оптимизирован для приложения',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Toyota_starlet_ep91_glanzav_1_f.jpg',
  },
  'toyota-caldina-st215w-gt-t': {
    src: '/assets/vehicles/toyota-caldina-st215w-gt-t.jpg',
    alt: 'Toyota Caldina GT-T ST215W, универсал',
    credit: 'Фото: Calreyn88, Wikimedia Commons, CC BY 4.0; файл оптимизирован для приложения',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:2000_Toyota_Caldina_GT-T.jpg',
  },
  'toyota-crown-jzs171-athlete-v': {
    src: '/assets/vehicles/toyota-crown-jzs171-athlete-v.jpg',
    alt: 'Toyota Crown Athlete V JZS171, седан',
    credit: 'Фото: Vauxford, Wikimedia Commons, CC BY-SA 4.0; файл оптимизирован для приложения',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:2002_Toyota_Crown_Athlete_V_2.5_Front.jpg',
  },
  'toyota-crown-estate-jzs171w-athlete-v': {
    src: '/assets/vehicles/toyota-crown-estate-jzs171w-athlete-v.jpg',
    alt: 'Toyota Crown Estate Athlete V JZS171W, универсал',
    credit: 'Фото: Tokumeigakarinoaoshima, Wikimedia Commons, CC BY-SA 4.0; файл оптимизирован для приложения',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Toyota_CROWN_ESTATE_ATHLETE_V_(GH-JZS171W)_front.jpg',
  },
  'toyota-altezza-sxe10-rs200': {
    src: '/assets/vehicles/toyota-altezza-sxe10-rs200.jpg',
    alt: 'Toyota Altezza RS200 SXE10, седан',
    credit: 'Фото: Tokumeigakarinoaoshima, Wikimedia Commons, CC0 1.0; файл оптимизирован для приложения',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Toyota_ALTEZZA_RS200_(SXE10)_front.JPG',
  },
  'toyota-aristo-jzs161-v300': {
    src: '/assets/vehicles/toyota-aristo-jzs161-v300.jpg',
    alt: 'Toyota Aristo V300 JZS161 Vertex Edition, седан',
    credit: 'Фото: 先従隗始, Wikimedia Commons, CC0 1.0; файл оптимизирован для приложения',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Toyota_GH-JZS161_Aristo_V300_%E2%80%9CVERTEX_EDITION%E2%80%9D_(No.)_(24042811473).jpg',
  },
  'toyota-corolla-levin-ae101-gt-apex': {
    src: '/assets/vehicles/toyota-corolla-levin-ae101-gt-apex.jpg',
    alt: 'Toyota Corolla Levin AE101 GT Apex, купе',
    credit: 'Фото: OSX, Wikimedia Commons, Public domain (author release); файл оптимизирован для приложения',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:1993-1995_Toyota_Corolla_Levin_(AE101)_GT_Apex_coupe_01.jpg',
  },
  'nissan-skyline-gt-r-bnr34-v-spec-ii': {
    src: '/assets/vehicles/nissan-skyline-bnr34-v-spec-ii.jpg',
    alt: 'Nissan Skyline GT-R BNR34 V-spec II, купе',
    credit: 'Фото: 先従隗始, Wikimedia Commons, CC0 1.0; файл оптимизирован для приложения',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Nissan_GF-BNR34_Skyline_GT-R_V%EF%BD%A5spec_%E2%85%A1_(22091110272).jpg',
  },
  'nissan-skyline-gt-r-bnr34-m-spec-nur': {
    src: '/assets/vehicles/nissan-skyline-bnr34-m-spec-nur.jpg',
    alt: 'Nissan Skyline GT-R BNR34 M-spec Nür, купе',
    credit: 'Фото: Tennen-Gas, Wikimedia Commons, GFDL 1.2+ / CC BY-SA 3.0; файл оптимизирован для приложения',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Nissan_Skyline_R34_GT-R_N%C3%BCr_001.jpg',
  },
  'pajero-4': {
    src: '/assets/vehicles/mitsubishi-pajero-v80.jpg',
    alt: 'Mitsubishi Pajero IV, серия V80',
    credit: 'Фото: M 93, Wikimedia Commons, GFDL 1.2+ / CC BY-SA 3.0; файл оптимизирован для приложения',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Mitsubishi_Pajero_(V80)_front.jpg',
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
  'toyota-rav4-3': {
    src: '/assets/vehicles/toyota-rav4-xa30.jpg',
    alt: 'Toyota RAV4 XA30, третье поколение',
    credit: 'Фото: Navigator84, Wikimedia Commons, CC BY-SA 3.0; файл оптимизирован для приложения',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Toyota_Rav4_XA30_01_China_2012-04-22.jpg',
  },
  'toyota-camry-40': {
    src: '/assets/vehicles/toyota-camry-xv40.jpg',
    alt: 'Toyota Camry XV40 SE',
    credit: 'Фото: Bull-Doser, Wikimedia Commons, Public domain (author release); файл оптимизирован для приложения',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Toyota_Camry_SE_XV40.JPG',
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
