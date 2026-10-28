/**
 * Source-backed technical data, grouped by exact engine/chassis application.
 * Do not merge these values into other markets/engines without evidence.
 */
export interface TechnicalDataSource {
  id: string;
  title: string;
  url: string;
  sourceType: 'service-manual-mirror' | 'oem-manual';
  accessedAt: string;
  scope: string;
}
export interface TechnicalValue {
  label: string;
  value: string;
  conditions?: string;
  sourceId: string;
}
export interface EngineTechnicalRecord {
  id: string;
  modelId: string;
  chassisCode: string;
  engineCode: string;
  marketScope: string;
  modelYears: string;
  verificationStatus: 'partially-verified' | 'verified';
  summary: string;
  values: TechnicalValue[];
  sourceIds: string[];
  limitations: string[];
}
export const TECHNICAL_DATA_SOURCES: TechnicalDataSource[] = [
  {
    id: 'mitsubishi-outlander-2006-cu5w-4g69-service-manual',
    title: 'Mitsubishi Outlander 2006 — руководство по ремонту, механическая часть двигателя 4G69',
    url: 'https://www.jdmfsm.info/Auto/Japan/Mitsubishi/Outlander/Manuals/2006/Service%20Manual%20PDF/WM/GR00000600-11E.pdf',
    sourceType: 'service-manual-mirror',
    accessedAt: '2026-10-16',
    scope: 'Разделы руководства по ремонту для Outlander CU5W с двигателем 4G69. Сверяйте обозначения страниц и групп в руководстве, а также соответствие рынку и модельному году автомобиля.'
  }
];

export const ENGINE_TECHNICAL_RECORDS: EngineTechnicalRecord[] = [
  {
    id: 'mitsubishi-outlander-cu5w-4g69-2006-engine-mechanical',
    modelId: 'outlander-1',
    chassisCode: 'CU5W',
    engineCode: '4G69',
    marketScope: 'Конфигурация CU5W по руководству 2006 года; рынок необходимо подтвердить по коду кузова/VIN',
    modelYears: 'Издание руководства — 2006 год; применимость к периоду выпуска необходимо проверить по VIN',
    verificationStatus: 'partially-verified',
    summary: 'В руководстве для Outlander CU5W указан двигатель 4G69-2 объёмом 2 378 см³, SOHC, 16 клапанов. Приведённые ниже значения относятся к этому руководству и не являются универсальными для всех автомобилей Mitsubishi с двигателями семейства 4G69.',
    sourceIds: ['mitsubishi-outlander-2006-cu5w-4g69-service-manual'],
    values: [
      { label: 'Рабочий объём двигателя', value: '2,378 cm³', conditions: 'CU5W / 4G69-2', sourceId: 'mitsubishi-outlander-2006-cu5w-4g69-service-manual' },
      { label: 'Диаметр цилиндра × ход поршня', value: '87 × 100 mm', conditions: 'Спецификация при ремонте двигателя', sourceId: 'mitsubishi-outlander-2006-cu5w-4g69-service-manual' },
      { label: 'Степень сжатия', value: '9.5:1', conditions: 'Спецификация при ремонте двигателя', sourceId: 'mitsubishi-outlander-2006-cu5w-4g69-service-manual' },
      { label: 'Конфигурация цилиндров и головки блока', value: 'Рядный 4-цилиндровый, SOHC, 16 клапанов', conditions: 'Таблица моделей двигателя в руководстве по ремонту', sourceId: 'mitsubishi-outlander-2006-cu5w-4g69-service-manual' },
      { label: 'Топливная система', value: 'Электронно-управляемый распределённый впрыск топлива', conditions: 'Данные двигателя из руководства по ремонту', sourceId: 'mitsubishi-outlander-2006-cu5w-4g69-service-manual' },
      { label: 'Зазор клапанов — впуск', value: '0.20 mm', conditions: 'Двигатель прогрет; проверять и регулировать по процедуре из руководства', sourceId: 'mitsubishi-outlander-2006-cu5w-4g69-service-manual' },
      { label: 'Зазор клапанов — выпуск', value: '0.30 mm', conditions: 'Двигатель прогрет; проверять и регулировать по процедуре из руководства', sourceId: 'mitsubishi-outlander-2006-cu5w-4g69-service-manual' },
      { label: 'Начальный угол опережения зажигания', value: '5° до ВМТ ± 3°', conditions: 'Использовать предусмотренный диагностический режим и процедуру из руководства', sourceId: 'mitsubishi-outlander-2006-cu5w-4g69-service-manual' },
      { label: 'Частота холостого хода — механическая коробка передач', value: '680 ± 100 rpm', conditions: 'Нормативное значение из руководства; необходимо соблюдать условия проверки', sourceId: 'mitsubishi-outlander-2006-cu5w-4g69-service-manual' },
      { label: 'Частота холостого хода — автоматическая коробка передач', value: '750 ± 100 rpm', conditions: 'Нормативное значение из руководства; необходимо соблюдать условия проверки', sourceId: 'mitsubishi-outlander-2006-cu5w-4g69-service-manual' },
      { label: 'Компрессия — нормативное значение', value: '1,560 kPa at 200 rpm', conditions: 'Результат зависит от процедуры проверки, состояния аккумулятора и частоты прокрутки', sourceId: 'mitsubishi-outlander-2006-cu5w-4g69-service-manual' },
      { label: 'Компрессия — предельно допустимое значение', value: '1,130 kPa at 200 rpm', conditions: 'Предельное значение по руководству; оценивать вместе со сравнением цилиндров', sourceId: 'mitsubishi-outlander-2006-cu5w-4g69-service-manual' },
      { label: 'Максимальная разница компрессии между цилиндрами', value: '98 kPa', conditions: 'Предельно допустимая разница между цилиндрами по руководству', sourceId: 'mitsubishi-outlander-2006-cu5w-4g69-service-manual' },
      { label: 'Прогиб ремня балансирных валов', value: '5–7 мм после регулировки/замены; 5–10 мм при проверке', conditions: 'Измерять строго по процедуре и инструментом, указанным в руководстве', sourceId: 'mitsubishi-outlander-2006-cu5w-4g69-service-manual' },
      { label: 'Выступание штока натяжителя ремня ГРМ', value: '3.8–4.5 mm', conditions: 'Значение по руководству по ремонту', sourceId: 'mitsubishi-outlander-2006-cu5w-4g69-service-manual' }
    ],
    limitations: [
      'Запись содержит только сервисные спецификации для CU5W/4G69 и не подтверждает применимость к CU2W/4G63, другим двигателям, кузовам или модельным годам.',
      'Документ размещён на стороннем зеркале руководства по ремонту; это не подтверждённый официальный портал производителя.',
      'Не заменяйте этими значениями полную процедуру, предупреждения по безопасности, требования к специнструменту, таблицы моментов затяжки или сервисные данные для конкретного VIN.',
      'Мощность и крутящий момент, расход топлива, объёмы жидкостей, сервисная жидкость коробки передач и номера деталей намеренно не определяются по этому фрагменту механической части двигателя.'
    ]
  }
];
