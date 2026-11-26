import type { InteriorDimensions, TireOption, WheelRimFitment, WiperBladeSize } from './types/carDimensions';

export type VerificationStatus = 'unverified' | 'partially-verified' | 'verified';
export interface VehicleVariantSource {
  label: string;
  url: string;
  sourceType: 'oem-owner-manual' | 'oem-service-manual' | 'oem-parts-catalog' | 'oem-bulletin' | 'regulator' | 'secondary-reference';
  market: string;
  scope: string;
  pageOrSection?: string;
  accessedAt: string;
}
export interface VehicleVariantDimensions {
  lengthMm?: number; widthMm?: number; heightMm?: number; wheelbaseMm?: number;
  groundClearanceMm?: number; trackFrontMm?: number; trackRearMm?: number;
  curbWeightKg?: number; fuelTankLiters?: number; luggageVolumeLiters?: number;
}
export interface VehicleVariantEngine {
  code: string; displacementCc?: number; powerHp?: number; torqueNm?: number;
  fuelType?: string; induction?: string;
}
export interface VehicleVariant {
  id: string; modelId: string; generationId: string; market: string; modelYearFrom: number;
  modelYearTo?: number; productionMonthFrom?: string; productionMonthTo?: string;
  bodyCode: string; bodyStyle?: string; trimOrGrade?: string;
  engineCode?: string; engine?: VehicleVariantEngine; transmissionCode?: string;
  transmissionType?: 'MT' | 'AT' | 'CVT' | 'DCT' | 'AMT' | 'EV-reduction' | 'other';
  drivetrain?: 'FWD' | 'RWD' | 'AWD' | '4WD' | 'other';
  steeringPosition?: 'LHD' | 'RHD' | 'both' | 'unknown';
  dimensions?: VehicleVariantDimensions;
  interiorDimensions?: InteriorDimensions | null;
  wheelFitments?: WheelRimFitment[]; tires?: TireOption[]; wiperBladeSize?: WiperBladeSize[];
  specification?: {
    engineOil?: { viscosity?: string; approval?: string; refillWithFilter?: string; refillWithoutFilter?: string };
    transmissionFluid?: { specification?: string; serviceRefill?: string; dryFill?: string; levelCheckProcedure?: string };
    transferCaseFluid?: { specification?: string; capacity?: string };
    differentialFluid?: { front?: string; rear?: string; capacities?: string };
    coolant?: { type?: string; capacity?: string };
    brakeFluid?: string; bulbs?: Record<string, string>; fuses?: Record<string, string>;
    obd?: { protocol?: string; portLocation?: string; codes?: { code?: string; title?: string; sourceId?: string }[] };
    knownIssues?: { title?: string; conditions?: string; evidenceSourceIds?: string[] }[];
  };
  verificationStatus: VerificationStatus; sources: VehicleVariantSource[];
  limitations?: { field: string; reason: string }[]; lastReviewed?: string; notes?: string;
}
const PRIMARY_SOURCE_TYPES = new Set<VehicleVariantSource['sourceType']>([
  'oem-owner-manual', 'oem-service-manual', 'oem-parts-catalog', 'oem-bulletin', 'regulator',
]);
export function validateVehicleVariant(variant: VehicleVariant): string[] {
  const errors: string[] = [];
  for (const key of ['id', 'modelId', 'generationId', 'market', 'bodyCode'] as const) {
    if (typeof variant[key] !== 'string' || !variant[key].trim()) errors.push(key + ' is required');
  }
  if (!Number.isInteger(variant.modelYearFrom) || variant.modelYearFrom < 1885) errors.push('modelYearFrom is invalid');
  if (variant.modelYearTo !== undefined && (!Number.isInteger(variant.modelYearTo) || variant.modelYearTo < variant.modelYearFrom)) errors.push('modelYearTo is invalid');
  for (const key of ['productionMonthFrom', 'productionMonthTo'] as const) {
    const value = variant[key];
    if (value !== undefined && !/^\d{4}-(0[1-9]|1[0-2])$/.test(value)) errors.push(key + ' must use YYYY-MM');
  }
  if (variant.productionMonthTo && variant.productionMonthFrom && variant.productionMonthTo < variant.productionMonthFrom) errors.push('productionMonthTo precedes productionMonthFrom');
  const hasLimitation = (field: string) => (variant.limitations ?? []).some(item => item.field === field && item.reason.trim());
  const isValidCalendarDate = (value: string) => {
    const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
    if (!match) return false;
    const [, year, month, day] = match;
    const date = new Date(Date.UTC(Number(year), Number(month) - 1, Number(day)));
    return date.getUTCFullYear() === Number(year) && date.getUTCMonth() === Number(month) - 1 && date.getUTCDate() === Number(day);
  };
  const unresolvedMarketPattern = /не\s*(?:указан|установлен|уточнён|уточнен)|unknown|страна\s+сборки|сборк\w*|страна\s+производства|assembly|made\s+in/i;
  const marketEvidence = [variant.market, ...(variant.sources ?? []).map(source => source.market)].join(' ');
  if (unresolvedMarketPattern.test(marketEvidence) && !hasLimitation('market')) {
    errors.push('market requires a limitation when the source does not establish the sales market or only identifies assembly country');
  }
  if ((variant.sources ?? []).some(source => source.market.trim().toLocaleLowerCase('ru-RU') !== variant.market.trim().toLocaleLowerCase('ru-RU')) && !hasLimitation('market')) {
    errors.push('source market differs from variant market and requires an explicit market limitation');
  }
  const allowedSourceTypes = new Set<VehicleVariantSource['sourceType']>([
    'oem-owner-manual', 'oem-service-manual', 'oem-parts-catalog', 'oem-bulletin', 'regulator', 'secondary-reference',
  ]);
  if (!(variant.engine?.code || variant.engineCode) && !hasLimitation('engine.code')) errors.push('engine.code is required or must have a limitation');
  if (!variant.transmissionType && !hasLimitation('transmissionType')) errors.push('transmissionType is required or must have a limitation');
  if (!variant.drivetrain && !hasLimitation('drivetrain')) errors.push('drivetrain is required or must have a limitation');
  if (variant.engine?.displacementCc !== undefined && (!Number.isFinite(variant.engine.displacementCc) || variant.engine.displacementCc <= 0)) errors.push('engine.displacementCc must be positive');
  if (variant.engine?.powerHp !== undefined && (!Number.isFinite(variant.engine.powerHp) || variant.engine.powerHp <= 0)) errors.push('engine.powerHp must be positive');
  if (variant.engine?.torqueNm !== undefined && (!Number.isFinite(variant.engine.torqueNm) || variant.engine.torqueNm <= 0)) errors.push('engine.torqueNm must be positive');
  for (const [field, value] of Object.entries(variant.dimensions ?? {})) if (value !== undefined && (!Number.isFinite(value) || value <= 0)) errors.push('dimensions.' + field + ' must be positive');
  if (variant.interiorDimensions) for (const key of ['lengthMm', 'widthMm', 'heightMm', 'luggageVolumeLiters'] as const) {
    const value = variant.interiorDimensions[key];
    if (value !== undefined && value !== null && (!Number.isFinite(value) || value <= 0)) errors.push('interiorDimensions.' + key + ' must be positive');
  }
  for (const source of variant.sources ?? []) {
    if (!source.label?.trim() || !source.scope?.trim() || !source.market?.trim()) errors.push('source is missing label, scope or market');
    if (!allowedSourceTypes.has(source.sourceType)) errors.push('sourceType is invalid');
    if (!/^https?:\/\//i.test(source.url ?? '')) errors.push('source URL must be HTTP(S)');
    if (!isValidCalendarDate(source.accessedAt ?? '')) errors.push('source accessedAt must be a valid calendar date in YYYY-MM-DD format');
  }
  if (variant.verificationStatus === 'verified') {
    if (!variant.sources?.length) errors.push('verified variants require source references');
    if (variant.sources?.some(source => !source.url || !source.scope || !source.market || !source.accessedAt || !PRIMARY_SOURCE_TYPES.has(source.sourceType))) errors.push('verified variants require complete primary-source metadata');
  }
  if (variant.verificationStatus === 'partially-verified' && !variant.sources?.length) errors.push('partially-verified variants require source references');
  for (const wheel of variant.wheelFitments ?? []) {
    if (!wheel.tireSize.trim() || !wheel.rimSize.trim() || !wheel.applicability.trim() || !wheel.notes.trim()) errors.push('wheelFitment is incomplete');
    if (wheel.centerBoreMm != null && (!Number.isFinite(wheel.centerBoreMm) || wheel.centerBoreMm <= 0)) errors.push('wheelFitment.centerBoreMm must be positive');
    if (wheel.offsetEtMm != null && !Number.isFinite(wheel.offsetEtMm)) errors.push('wheelFitment.offsetEtMm must be finite');
  }
  for (const tire of variant.tires ?? []) {
    if (!tire.size.trim() || !tire.loadIndex.trim() || !tire.speedRating.trim() || !tire.notes.trim()) errors.push('tire entry is incomplete');
    for (const key of ['diameter', 'width', 'aspectRatio', 'rimDiameter'] as const) if (!Number.isFinite(tire[key]) || tire[key] <= 0) errors.push('tires.' + key + ' must be positive');
  }
  for (const wiper of variant.wiperBladeSize ?? []) if (!wiper.driverSide.trim() || !wiper.passengerSide.trim() || !wiper.notes.trim()) errors.push('wiperBladeSize entry is incomplete');
  for (const item of variant.limitations ?? []) if (!item.field.trim() || !item.reason.trim()) errors.push('limitations entries require field and reason');
  return errors;
}
