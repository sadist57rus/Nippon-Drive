import type { TabId } from '../components/Header';

/**
 * Модель, для которой в приложении есть полный набор справочных данных
 * (см. vehicleDataRegistry.ts). Модуль лёгкий: не импортирует сами данные,
 * поэтому им можно пользоваться на главном экране без загрузки тяжёлых файлов.
 * Если в реестр добавится новая модель, добавьте её id сюда.
 */
export const FULL_DATA_MODEL_IDS: readonly string[] = ['outlander-1'];

/** Разделы, которые открываются только при наличии полного набора данных. */
export const DATA_GATED_SECTIONS: readonly TabId[] = [
  'specs', 'bulbs', 'parts', 'fuses', 'tuning', 'guides', 'issues', 'wheels', 'maintenance', 'obd',
];

export function hasFullVehicleData(modelId: string): boolean {
  return FULL_DATA_MODEL_IDS.includes(modelId);
}

export function isSectionAvailable(tab: TabId, modelId: string): boolean {
  return !DATA_GATED_SECTIONS.includes(tab) || hasFullVehicleData(modelId);
}
