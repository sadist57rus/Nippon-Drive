/**
 * Дополнительные характеристики автомобиля.
 *
 * Числа в CarDimensions выражены в миллиметрах и килограммах.
 * Наличие значения не означает, что оно подтверждено для каждой комплектации:
 * уровень проверки хранится в записи модели/варианта и не повышается автоматически.
 */
export interface CarDimensions {
  length: number; // мм
  width: number; // мм
  height: number; // мм
  wheelbase: number; // мм
  groundClearance: number; // мм
  weight: number; // кг
}

export interface TireOption {
  /** Размер в маркировке боковины, например 225/55R17. */
  size: string;
  /** Расчётный внешний диаметр шины, мм. */
  diameter: number;
  /** Номинальная ширина шины, мм. */
  width: number;
  /** Высота профиля в процентах от ширины. */
  aspectRatio: number;
  /** Посадочный диаметр обода, мм (дюймы × 25,4). */
  rimDiameter: number;
  loadIndex: string;
  speedRating: string;
  /** Статус применимости и оговорки по рынку/комплектации. */
  notes: string;
}

export interface InteriorDimensions {
  /** Passenger-compartment length, mm. */
  lengthMm?: number | null;
  /** Passenger-compartment width, mm. */
  widthMm?: number | null;
  /** Passenger-compartment height, mm. */
  heightMm?: number | null;
  /** Luggage compartment volume, litres, only when the measurement method is known. */
  luggageVolumeLiters?: number | null;
  /** Notes about seat position, measurement method, market and body style. */
  notes: string;
}

export interface WheelRimFitment {
  /** Tire sidewall marking, e.g. 225/65R17. */
  tireSize: string;
  /** Rim marking, e.g. 7Jx17. */
  rimSize: string;
  /** Bolt pattern, e.g. 5x114.3. */
  pcd?: string | null;
  /** Center bore, mm. */
  centerBoreMm?: number | null;
  /** Rim offset, mm. */
  offsetEtMm?: number | null;
  /** Exact grade/engine/drive/market scope. */
  applicability: string;
  verificationStatus: 'unverified' | 'partially-verified' | 'verified';
  sourceUrl?: string;
  notes: string;
}

export interface WiperBladeSize {
  driverSide: string;
  passengerSide: string;
  rearSide?: string | null;
  notes: string;
}

/**
 * Старый формат каталога сохранён для обратной совместимости UI.
 * Не путать с CarDimensions: это существовавшая до миграции схема.
 */
export interface LegacyCarDimensions {
  lengthMm: number | null;
  widthMm: number | null;
  heightMm: number | null;
  wheelbaseMm: number | null;
  groundClearanceMm: number | null;
  trunkVolumeLiters: string;
  fuelTankLiters: number | null;
  curbWeightKg: string;
}
