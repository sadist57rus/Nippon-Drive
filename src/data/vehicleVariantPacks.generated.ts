// Автоматически создано scripts/importVehicleVariants.ts. Не редактировать вручную.
import type { VehicleVariant } from './vehicleVariantSchema';
export const VEHICLE_VARIANTS: VehicleVariant[] = [
  {
    "market": "не указан в карточке Drom",
    "bodyStyle": "SUV",
    "steeringPosition": "unknown",
    "tires": [],
    "wheelFitments": [],
    "verificationStatus": "partially-verified",
    "sources": [
      {
        "label": "Drom — Mitsubishi Outlander 2.4 AT XLS",
        "url": "https://www.drom.ru/catalog/mitsubishi/outlander/312259/",
        "sourceType": "secondary-reference",
        "market": "не указан в карточке Drom",
        "scope": "CU5W 2.4 AT XLS FWD, 12.2002–03.2006; двигатель, коробка, привод, размеры, масса и бак",
        "accessedAt": "2026-11-06"
      }
    ],
    "limitations": [
      {
        "field": "market",
        "reason": "Рынок сбыта не установлен по карточке Drom."
      },
      {
        "field": "wheelFitments",
        "reason": "ET, PCD и DIA не подтверждены."
      },
      {
        "field": "tires",
        "reason": "Индексы нагрузки и скорости не указаны источником."
      }
    ],
    "id": "mitsubishi-outlander-cu5w-24-at-xls-fwd-2002-2006",
    "modelId": "outlander-1",
    "generationId": "mitsubishi-outlander-cu",
    "modelYearFrom": 2002,
    "modelYearTo": 2006,
    "productionMonthFrom": "2002-12",
    "productionMonthTo": "2006-03",
    "bodyCode": "CU5W",
    "trimOrGrade": "2.4 AT XLS FWD",
    "engineCode": "4G69",
    "engine": {
      "code": "4G69",
      "displacementCc": 2378,
      "powerHp": 160,
      "torqueNm": 216,
      "fuelType": "Бензин АИ-92"
    },
    "transmissionType": "AT",
    "drivetrain": "FWD",
    "dimensions": {
      "lengthMm": 4550,
      "widthMm": 1750,
      "heightMm": 1680,
      "wheelbaseMm": 2625,
      "groundClearanceMm": 210,
      "trackFrontMm": 1540,
      "trackRearMm": 1540,
      "curbWeightKg": 1470,
      "fuelTankLiters": 60,
      "luggageVolumeLiters": 402
    },
    "notes": "Только CU5W 2.4 AT XLS FWD; не переносить на другие исполнения."
  },
  {
    "market": "не указан в карточке Drom",
    "bodyStyle": "SUV",
    "steeringPosition": "unknown",
    "tires": [],
    "wheelFitments": [],
    "verificationStatus": "partially-verified",
    "sources": [
      {
        "label": "Drom — Nissan X-Trail 2.0 CVT SE",
        "url": "https://www.drom.ru/catalog/nissan/x-trail/91044/",
        "sourceType": "secondary-reference",
        "market": "не указан в карточке Drom",
        "scope": "T31 2.0 CVT SE 4WD, 08.2007–02.2011; двигатель, трансмиссия, привод, размеры, масса и бак",
        "accessedAt": "2026-11-06"
      }
    ],
    "limitations": [
      {
        "field": "market",
        "reason": "Рынок сбыта не установлен по карточке Drom."
      },
      {
        "field": "wheelFitments",
        "reason": "ET, PCD и DIA не подтверждены."
      },
      {
        "field": "tires",
        "reason": "Индексы нагрузки и скорости не указаны источником."
      }
    ],
    "id": "nissan-xtrail-t31-mr20de-cvt-se-4wd-2007-2011",
    "modelId": "nissan-xtrail-t31",
    "generationId": "nissan-xtrail-t31",
    "modelYearFrom": 2007,
    "modelYearTo": 2011,
    "productionMonthFrom": "2007-08",
    "productionMonthTo": "2011-02",
    "bodyCode": "T31",
    "trimOrGrade": "2.0 CVT SE 4WD",
    "engineCode": "MR20DE",
    "engine": {
      "code": "MR20DE",
      "displacementCc": 1997,
      "powerHp": 141,
      "torqueNm": 196,
      "fuelType": "Бензин АИ-95"
    },
    "transmissionType": "CVT",
    "drivetrain": "4WD",
    "dimensions": {
      "lengthMm": 4630,
      "widthMm": 1785,
      "heightMm": 1685,
      "wheelbaseMm": 2630,
      "groundClearanceMm": 200,
      "trackFrontMm": 1530,
      "trackRearMm": 1535,
      "curbWeightKg": 1514,
      "fuelTankLiters": 65,
      "luggageVolumeLiters": 479
    },
    "notes": "Только T31 2.0 CVT SE 4WD указанного периода."
  },
  {
    "market": "не указан в карточке Drom",
    "bodyStyle": "SUV",
    "steeringPosition": "unknown",
    "tires": [],
    "wheelFitments": [
      {
        "tireSize": "225/65 R17",
        "rimSize": "7J x 17",
        "applicability": "Toyota RAV4 ACA31 2.4 AT Sol 4WD, 01.2006–12.2008",
        "verificationStatus": "partially-verified",
        "sourceUrl": "https://www.drom.ru/catalog/toyota/rav4/119983/",
        "notes": "Drom указывает размер диска и шин. PCD, DIA и ET в карточке не указаны."
      }
    ],
    "verificationStatus": "partially-verified",
    "sources": [
      {
        "label": "Drom — Toyota RAV4 2.4 AT Sol",
        "url": "https://www.drom.ru/catalog/toyota/rav4/119983/",
        "sourceType": "secondary-reference",
        "market": "не указан в карточке Drom",
        "scope": "ACA31 2.4 AT Sol 4WD, 01.2006–12.2008; двигатель, трансмиссия, привод, размеры, масса и бак",
        "accessedAt": "2026-11-06"
      }
    ],
    "limitations": [
      {
        "field": "market",
        "reason": "Рынок сбыта не установлен по карточке Drom."
      },
      {
        "field": "wheelFitments",
        "reason": "В источнике указан 7J x 17, но ET, PCD и DIA не подтверждены."
      },
      {
        "field": "tires",
        "reason": "Индексы нагрузки и скорости не указаны источником."
      }
    ],
    "id": "toyota-rav4-xa30-2azfe-24-at-sol-4wd-2006-2008",
    "modelId": "toyota-rav4-3",
    "generationId": "toyota-rav4-xa30",
    "modelYearFrom": 2006,
    "modelYearTo": 2008,
    "productionMonthFrom": "2006-01",
    "productionMonthTo": "2008-12",
    "bodyCode": "ACA31",
    "trimOrGrade": "2.4 AT Sol 4WD",
    "engineCode": "2AZ-FE",
    "engine": {
      "code": "2AZ-FE",
      "displacementCc": 2362,
      "powerHp": 170,
      "torqueNm": 224,
      "fuelType": "Бензин АИ-95"
    },
    "transmissionType": "AT",
    "drivetrain": "4WD",
    "dimensions": {
      "lengthMm": 4395,
      "widthMm": 1815,
      "heightMm": 1685,
      "wheelbaseMm": 2560,
      "groundClearanceMm": 190,
      "trackFrontMm": 1560,
      "trackRearMm": 1560,
      "curbWeightKg": 1590,
      "fuelTankLiters": 60,
      "luggageVolumeLiters": 586
    },
    "notes": "Только ACA31 2.4 AT Sol 4WD указанного периода."
  },
  {
    "id": "toyota-camry-xv40-2azfe-24-at-se-fwd-2006-2008",
    "modelId": "toyota-camry-40",
    "generationId": "toyota-camry-xv40",
    "market": "не уточнён; Drom указывает сборку Япония/США",
    "modelYearFrom": 2006,
    "modelYearTo": 2008,
    "productionMonthFrom": "2006-03",
    "productionMonthTo": "2008-12",
    "bodyCode": "ACV40",
    "bodyStyle": "седан",
    "trimOrGrade": "2.4 AT SE",
    "engineCode": "2AZ-FE",
    "engine": {
      "code": "2AZ-FE",
      "displacementCc": 2362,
      "powerHp": 158,
      "torqueNm": 218,
      "fuelType": "Бензин АИ-95"
    },
    "transmissionType": "AT",
    "drivetrain": "FWD",
    "steeringPosition": "LHD",
    "dimensions": {
      "lengthMm": 4806,
      "widthMm": 1821,
      "heightMm": 1466,
      "wheelbaseMm": 2776,
      "groundClearanceMm": 134,
      "trackFrontMm": 1575,
      "trackRearMm": 1565,
      "curbWeightKg": 1520,
      "fuelTankLiters": 70,
      "luggageVolumeLiters": 425
    },
    "tires": [],
    "wheelFitments": [],
    "verificationStatus": "partially-verified",
    "sources": [
      {
        "label": "Drom — Toyota Camry 2.4 AT SE",
        "url": "https://www.drom.ru/catalog/toyota/camry/84300/",
        "sourceType": "secondary-reference",
        "market": "не уточнён; Drom указывает сборку Япония/США",
        "scope": "ACV40 2.4 AT SE, 03.2006–12.2008; двигатель, АКПП, привод, рулевое положение, габариты, масса, бак и багажник",
        "accessedAt": "2026-11-06"
      }
    ],
    "limitations": [
      {
        "field": "market",
        "reason": "Drom перечисляет сборку Япония/США, но не привязывает карточку к одному рынку продаж."
      },
      {
        "field": "wheelFitments",
        "reason": "В карточке указан только диаметр диска 17 дюймов; ширина, ET, PCD и DIA не подтверждены."
      },
      {
        "field": "tires",
        "reason": "Размер шин указан, но индексы нагрузки и скорости не указаны."
      }
    ],
    "notes": "Не смешивать с Camry XV40 других рынков, двигателями 2AZ-FE иных калибровок и 3.5 V6."
  },
  {
    "id": "subaru-forester-sh5-ej205-20-xt-4wd-5mt-2010-2012",
    "modelId": "subaru-forester-sg-sh",
    "generationId": "subaru-forester-sh",
    "market": "Япония",
    "modelYearFrom": 2010,
    "modelYearTo": 2012,
    "productionMonthFrom": "2010-10",
    "productionMonthTo": "2012-10",
    "bodyCode": "DBA-SH5",
    "bodyStyle": "SUV",
    "trimOrGrade": "2.0 XT 4WD 5MT",
    "engineCode": "EJ205",
    "engine": {
      "code": "EJ205",
      "displacementCc": 1994,
      "powerHp": 230,
      "torqueNm": 319,
      "fuelType": "Бензин Premium (АИ-98)",
      "induction": "Турбонаддув"
    },
    "transmissionType": "MT",
    "drivetrain": "4WD",
    "steeringPosition": "RHD",
    "dimensions": {
      "lengthMm": 4560,
      "widthMm": 1780,
      "heightMm": 1675,
      "wheelbaseMm": 2615,
      "groundClearanceMm": 225,
      "trackFrontMm": 1530,
      "trackRearMm": 1530,
      "curbWeightKg": 1490,
      "fuelTankLiters": 60
    },
    "interiorDimensions": {
      "lengthMm": 2000,
      "widthMm": 1520,
      "heightMm": 1290,
      "notes": "Drom: габариты салона для SH5 2.0 XT 4WD 5MT, RHD, 10.2010–10.2012."
    },
    "tires": [],
    "wheelFitments": [],
    "verificationStatus": "partially-verified",
    "sources": [
      {
        "label": "Drom — Subaru Forester 2.0 XT 4WD",
        "url": "https://www.drom.ru/catalog/subaru/forester/94533/",
        "sourceType": "secondary-reference",
        "market": "Япония",
        "scope": "DBA-SH5 2.0 XT 4WD, 5MT, RHD, 10.2010–10.2012; двигатель, трансмиссия, привод, внешние и внутренние размеры, масса, бак и шины",
        "accessedAt": "2026-11-06"
      }
    ],
    "limitations": [
      {
        "field": "wheelFitments",
        "reason": "Размер диска, ET, PCD и DIA не указаны в карточке."
      },
      {
        "field": "tires",
        "reason": "Размер шин 225/55R17 указан, но индексы нагрузки и скорости в используемой карточке не приведены."
      }
    ],
    "notes": "Только SH5 2.0 XT с 5MT и правым рулём; не объединять с 4AT или версиями 2007–2010."
  },
  {
    "id": "honda-crv-re-24-at-4wd-2007-2009",
    "modelId": "honda-cr-v-3",
    "generationId": "honda-crv-re",
    "market": "не указан; страна сборки Япония",
    "modelYearFrom": 2007,
    "modelYearTo": 2009,
    "productionMonthFrom": "2007-03",
    "productionMonthTo": "2009-08",
    "bodyCode": "RE",
    "bodyStyle": "SUV",
    "trimOrGrade": "2.4 AT 4WD",
    "engineCode": "K24Z1",
    "engine": {
      "code": "K24Z1",
      "displacementCc": 2354,
      "powerHp": 170,
      "torqueNm": 220,
      "fuelType": "Бензин"
    },
    "transmissionType": "AT",
    "drivetrain": "4WD",
    "steeringPosition": "LHD",
    "dimensions": {
      "lengthMm": 4520,
      "widthMm": 1820,
      "heightMm": 1680,
      "wheelbaseMm": 2620,
      "groundClearanceMm": 185,
      "trackFrontMm": 1565,
      "trackRearMm": 1565,
      "curbWeightKg": 1550,
      "fuelTankLiters": 58,
      "luggageVolumeLiters": 556
    },
    "tires": [],
    "wheelFitments": [
      {
        "tireSize": "225/60R18",
        "rimSize": "18x7J",
        "applicability": "Honda CR-V RE 2.4 AT 4WD, 03.2007–08.2009",
        "verificationStatus": "partially-verified",
        "sourceUrl": "https://www.drom.ru/catalog/honda/cr-v/195793/",
        "notes": "Drom указывает размер шины и диска; PCD, DIA и ET не указаны."
      }
    ],
    "verificationStatus": "partially-verified",
    "sources": [
      {
        "label": "Drom — Honda CR-V 2.4 AT",
        "url": "https://www.drom.ru/catalog/honda/cr-v/195793/",
        "sourceType": "secondary-reference",
        "market": "не указан; страна сборки Япония",
        "scope": "RE 2.4 AT 4WD, 03.2007–08.2009; двигатель, АКПП, привод, рулевое положение, габариты, масса, бак, багажник, шины и размер диска",
        "accessedAt": "2026-11-06"
      }
    ],
    "limitations": [
      {
        "field": "market",
        "reason": "Drom указывает страну сборки Япония, но не называет рынок продаж."
      },
      {
        "field": "wheelFitments",
        "reason": "PCD, DIA и ET не подтверждены карточкой."
      },
      {
        "field": "tires",
        "reason": "Индексы нагрузки и скорости не включены в запись; не формировать полную TireOption."
      }
    ],
    "notes": "Только RE 2.4 AT 4WD указанного периода; не переносить характеристики на 2.0, переднеприводные и рестайлинговые версии."
  }
];
