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
  },
  {
    "id": "mazda-cx5-ke-pevps-20-mt-sport-fwd-2012-2015",
    "modelId": "mazda-cx5-ke-kf",
    "generationId": "mazda-cx5-ke",
    "market": "рынок сбыта не указан; Drom указывает сборку Япония/Малайзия",
    "modelYearFrom": 2012,
    "modelYearTo": 2015,
    "productionMonthFrom": "2012-01",
    "productionMonthTo": "2015-01",
    "bodyCode": "KE",
    "bodyStyle": "5-дверный SUV",
    "trimOrGrade": "2.0 MT Sport FWD",
    "engineCode": "PE-VPS",
    "engine": {
      "code": "PE-VPS",
      "displacementCc": 1997,
      "powerHp": 155,
      "torqueNm": 210,
      "fuelType": "Бензин АИ-95"
    },
    "transmissionType": "MT",
    "drivetrain": "FWD",
    "steeringPosition": "unknown",
    "dimensions": {
      "lengthMm": 4539,
      "widthMm": 1840,
      "heightMm": 1709,
      "wheelbaseMm": 2700,
      "groundClearanceMm": 216,
      "trackFrontMm": 1585,
      "trackRearMm": 1590,
      "curbWeightKg": 1449,
      "fuelTankLiters": 56,
      "luggageVolumeLiters": 966
    },
    "wheelFitments": [],
    "tires": [],
    "verificationStatus": "partially-verified",
    "sources": [
      {
        "label": "Drom — Mazda CX-5 2.0 MT Sport",
        "url": "https://www.drom.ru/catalog/mazda/cx-5/250344/",
        "sourceType": "secondary-reference",
        "market": "рынок сбыта не указан; сборка Япония/Малайзия",
        "scope": "KE 2.0 MT Sport FWD, 01.2012–01.2015; двигатель PE-VPS, 155 л.с., 210 Н·м, 6MT, размеры, масса, бак, багажник и шины",
        "accessedAt": "2026-11-06"
      }
    ],
    "limitations": [
      {
        "field": "market",
        "reason": "Drom сообщает страны сборки, но не фиксирует рынок продаж конкретного экземпляра."
      },
      {
        "field": "tires",
        "reason": "Размер 225/65 R17 указан без индексов нагрузки и скорости; полная TireOption не создаётся."
      },
      {
        "field": "wheelFitments",
        "reason": "В использованной карточке не подтверждены параметры диска, PCD, DIA и ET."
      }
    ],
    "notes": "Передний привод и 6MT; не смешивать с 2.0 AT и AWD/дизельными версиями KE."
  },
  {
    "id": "mazda-cx5-ke-pevps-20-at-drive-fwd-2014-2015",
    "modelId": "mazda-cx5-ke-kf",
    "generationId": "mazda-cx5-ke",
    "market": "рынок не уточнён; Drom указывает сборку Япония/Россия/Малайзия",
    "modelYearFrom": 2014,
    "modelYearTo": 2015,
    "productionMonthFrom": "2014-01",
    "productionMonthTo": "2015-01",
    "bodyCode": "KE",
    "bodyStyle": "5-дверный SUV",
    "trimOrGrade": "2.0 AT Drive FWD",
    "engineCode": "PE-VPS",
    "engine": {
      "code": "PE-VPS",
      "displacementCc": 1997,
      "powerHp": 150,
      "torqueNm": 210,
      "fuelType": "Бензин АИ-95"
    },
    "transmissionType": "AT",
    "drivetrain": "FWD",
    "steeringPosition": "unknown",
    "dimensions": {
      "lengthMm": 4555,
      "widthMm": 1840,
      "heightMm": 1670,
      "wheelbaseMm": 2700,
      "groundClearanceMm": 215,
      "trackFrontMm": 1585,
      "trackRearMm": 1590,
      "curbWeightKg": 1400,
      "fuelTankLiters": 56,
      "luggageVolumeLiters": 403
    },
    "wheelFitments": [],
    "tires": [],
    "verificationStatus": "partially-verified",
    "sources": [
      {
        "label": "Drom — Mazda CX-5 2.0 AT Drive",
        "url": "https://www.drom.ru/catalog/mazda/cx-5/75135/",
        "sourceType": "secondary-reference",
        "market": "рынок не уточнён; сборка Япония/Россия/Малайзия",
        "scope": "KE 2.0 AT Drive FWD, 01.2014–01.2015; PE-VPS 150 л.с., 210 Н·м, 6AT, габариты, масса, бак, багажник и шины",
        "accessedAt": "2026-11-06"
      }
    ],
    "limitations": [
      {
        "field": "market",
        "reason": "Страны сборки не позволяют однозначно определить рынок продаж."
      },
      {
        "field": "tires",
        "reason": "225/65 R17 без индексов нагрузки и скорости."
      },
      {
        "field": "wheelFitments",
        "reason": "Ширина обода, ET, PCD и DIA не подтверждены карточкой."
      }
    ],
    "notes": "FWD, 6AT; характеристики не переносить на AWD и поздний рестайлинг."
  },
  {
    "id": "mazda-cx5-ke-shy1-22d-mt-sports-line-4wd-2015-2017",
    "modelId": "mazda-cx5-ke-kf",
    "generationId": "mazda-cx5-ke",
    "market": "Япония (страна сборки по Drom)",
    "modelYearFrom": 2015,
    "modelYearTo": 2017,
    "productionMonthFrom": "2015-01",
    "productionMonthTo": "2017-03",
    "bodyCode": "KE",
    "bodyStyle": "5-дверный SUV",
    "trimOrGrade": "2.2D Sports-Line 4WD",
    "engineCode": "SHY1 / SHY4",
    "engine": {
      "code": "SHY1 / SHY4",
      "displacementCc": 2191,
      "powerHp": 175,
      "torqueNm": 420,
      "fuelType": "Дизельное топливо",
      "induction": "Турбонаддув"
    },
    "transmissionType": "MT",
    "drivetrain": "4WD",
    "steeringPosition": "unknown",
    "dimensions": {
      "lengthMm": 4555,
      "widthMm": 1840,
      "heightMm": 1710,
      "wheelbaseMm": 2700,
      "groundClearanceMm": 215,
      "trackFrontMm": 1585,
      "trackRearMm": 1590,
      "curbWeightKg": 1555,
      "fuelTankLiters": 58,
      "luggageVolumeLiters": 503
    },
    "wheelFitments": [],
    "tires": [],
    "verificationStatus": "partially-verified",
    "sources": [
      {
        "label": "Drom — Mazda CX-5 2.2D Sports-Line",
        "url": "https://www.drom.ru/catalog/mazda/cx-5/450096/",
        "sourceType": "secondary-reference",
        "market": "Япония",
        "scope": "KE 2.2D Sports-Line 4WD, 01.2015–03.2017; SHY1/SHY4, 175 л.с., 420 Н·м, 6MT, размеры, масса, бак, багажник и шины",
        "accessedAt": "2026-11-06"
      }
    ],
    "limitations": [
      {
        "field": "tires",
        "reason": "225/55 R19 указан без индексов нагрузки и скорости."
      },
      {
        "field": "wheelFitments",
        "reason": "Размер диска, PCD, DIA и ET не подтверждены."
      }
    ],
    "notes": "Турбодизель 2.2, полный привод, 6MT; не смешивать с 2.2D AT и бензиновыми версиями."
  },
  {
    "id": "toyota-rav4-xa30-zsa30-3zrfae-20-cvt-4wd-2010-2011",
    "modelId": "toyota-rav4-3",
    "generationId": "toyota-rav4-xa30",
    "market": "Япония (страна сборки по Drom)",
    "modelYearFrom": 2010,
    "modelYearTo": 2011,
    "productionMonthFrom": "2010-06",
    "productionMonthTo": "2011-08",
    "bodyCode": "ZSA30",
    "bodyStyle": "5-дверный SUV",
    "trimOrGrade": "2.0 CVT Стандарт 4WD",
    "engineCode": "3ZR-FAE",
    "engine": {
      "code": "3ZR-FAE",
      "displacementCc": 1986,
      "powerHp": 158,
      "torqueNm": 198,
      "fuelType": "Бензин АИ-95"
    },
    "transmissionType": "CVT",
    "drivetrain": "4WD",
    "steeringPosition": "unknown",
    "dimensions": {
      "lengthMm": 4445,
      "widthMm": 1815,
      "heightMm": 1685,
      "wheelbaseMm": 2560,
      "groundClearanceMm": 180,
      "trackFrontMm": 1560,
      "trackRearMm": 1560,
      "curbWeightKg": 1645,
      "fuelTankLiters": 60,
      "luggageVolumeLiters": 410
    },
    "wheelFitments": [
      {
        "tireSize": "225/65R17",
        "rimSize": "6.5J x 17",
        "applicability": "Toyota RAV4 ZSA30 2.0 CVT Стандарт 4WD, 06.2010–08.2011",
        "verificationStatus": "partially-verified",
        "sourceUrl": "https://www.drom.ru/catalog/toyota/rav4/60899/",
        "notes": "Drom указывает размер шины и диска; PCD, DIA и ET не указаны."
      }
    ],
    "tires": [],
    "verificationStatus": "partially-verified",
    "sources": [
      {
        "label": "Drom — Toyota RAV4 2.0 CVT Стандарт",
        "url": "https://www.drom.ru/catalog/toyota/rav4/60899/",
        "sourceType": "secondary-reference",
        "market": "Япония",
        "scope": "ZSA30 2.0 CVT Стандарт 4WD, 06.2010–08.2011; 3ZR-FAE 158 л.с./198 Н·м, CVT, габариты, масса, бак, багажник, шины и диск",
        "accessedAt": "2026-11-06"
      }
    ],
    "limitations": [
      {
        "field": "tires",
        "reason": "Размер 225/65R17 без индексов нагрузки и скорости."
      },
      {
        "field": "wheelFitments",
        "reason": "PCD, DIA и ET не приведены."
      }
    ],
    "notes": "Ранний период рестайлинга XA30; мощность 158 л.с. не переносить на исполнение 2011–2013."
  },
  {
    "id": "toyota-rav4-xa30-zsa30-3zrfae-20-cvt-4wd-2011-2013",
    "modelId": "toyota-rav4-3",
    "generationId": "toyota-rav4-xa30",
    "market": "Япония (страна сборки по Drom)",
    "modelYearFrom": 2011,
    "modelYearTo": 2013,
    "productionMonthFrom": "2011-09",
    "productionMonthTo": "2013-01",
    "bodyCode": "ZSA30",
    "bodyStyle": "5-дверный SUV",
    "trimOrGrade": "2.0 CVT Стандарт 4WD",
    "engineCode": "3ZR-FAE",
    "engine": {
      "code": "3ZR-FAE",
      "displacementCc": 1986,
      "powerHp": 148,
      "torqueNm": 198,
      "fuelType": "Бензин АИ-95"
    },
    "transmissionType": "CVT",
    "drivetrain": "4WD",
    "steeringPosition": "unknown",
    "dimensions": {
      "lengthMm": 4445,
      "widthMm": 1815,
      "heightMm": 1685,
      "wheelbaseMm": 2560,
      "groundClearanceMm": 180,
      "trackFrontMm": 1560,
      "trackRearMm": 1560,
      "curbWeightKg": 1645,
      "fuelTankLiters": 60,
      "luggageVolumeLiters": 410
    },
    "wheelFitments": [
      {
        "tireSize": "225/65R17",
        "rimSize": "6.5J x 17",
        "applicability": "Toyota RAV4 ZSA30 2.0 CVT Стандарт 4WD, 09.2011–01.2013",
        "verificationStatus": "partially-verified",
        "sourceUrl": "https://www.drom.ru/catalog/toyota/rav4/183254/",
        "notes": "Drom указывает размер шины и диска; PCD, DIA и ET не указаны."
      }
    ],
    "tires": [],
    "verificationStatus": "partially-verified",
    "sources": [
      {
        "label": "Drom — Toyota RAV4 2.0 CVT Стандарт",
        "url": "https://www.drom.ru/catalog/toyota/rav4/183254/",
        "sourceType": "secondary-reference",
        "market": "Япония",
        "scope": "ZSA30 2.0 CVT Стандарт 4WD, 09.2011–01.2013; 3ZR-FAE 148 л.с./198 Н·м, CVT, габариты, масса, бак, багажник, шины и диск",
        "accessedAt": "2026-11-06"
      }
    ],
    "limitations": [
      {
        "field": "tires",
        "reason": "Размер 225/65R17 без индексов нагрузки и скорости."
      },
      {
        "field": "wheelFitments",
        "reason": "PCD, DIA и ET не приведены."
      }
    ],
    "notes": "Поздний период рестайлинга XA30; не объединять с версией 158 л.с. 2010–2011."
  },
  {
    "id": "nissan-xtrail-t31-mr20de-cvt-le-high-4wd-2012-2015",
    "modelId": "nissan-xtrail-t31",
    "generationId": "nissan-xtrail-t31",
    "market": "Россия",
    "modelYearFrom": 2012,
    "modelYearTo": 2015,
    "productionMonthFrom": "2012-12",
    "productionMonthTo": "2015-01",
    "bodyCode": "T31",
    "bodyStyle": "5-дверный SUV",
    "trimOrGrade": "2.0 CVT LE High 4WD",
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
    "steeringPosition": "LHD",
    "dimensions": {
      "lengthMm": 4635,
      "widthMm": 1790,
      "heightMm": 1785,
      "wheelbaseMm": 2630,
      "groundClearanceMm": 210,
      "trackFrontMm": 1540,
      "trackRearMm": 1545,
      "curbWeightKg": 1550,
      "fuelTankLiters": 65,
      "luggageVolumeLiters": 479
    },
    "wheelFitments": [
      {
        "tireSize": "225/55 R18",
        "rimSize": "18X7JJ",
        "applicability": "Nissan X-Trail T31 2.0 CVT LE High 4WD, 12.2012–01.2015",
        "verificationStatus": "partially-verified",
        "sourceUrl": "https://www.drom.ru/catalog/nissan/x-trail/71634/",
        "notes": "Drom указывает размер шины и диска; PCD, DIA и ET не указаны."
      }
    ],
    "tires": [],
    "verificationStatus": "partially-verified",
    "sources": [
      {
        "label": "Drom — Nissan X-Trail 2.0 CVT LE High",
        "url": "https://www.drom.ru/catalog/nissan/x-trail/71634/",
        "sourceType": "secondary-reference",
        "market": "Россия",
        "scope": "T31 2.0 CVT LE High 4WD, 12.2012–01.2015; MR20DE 141 л.с./196 Н·м, CVT, габариты, масса, бак, багажник, шины и диск",
        "accessedAt": "2026-11-06"
      }
    ],
    "limitations": [
      {
        "field": "tires",
        "reason": "225/55 R18 без индексов нагрузки и скорости."
      },
      {
        "field": "wheelFitments",
        "reason": "PCD, DIA и ET не указаны."
      }
    ],
    "notes": "Российское исполнение T31 после рестайлинга; не переносить размеры кузова на японские RHD исполнения."
  },
  {
    "id": "suzuki-grand-vitara-jt-j24b-24-at-3door-4wd-2008-2012",
    "modelId": "suzuki-grand-vitara-2",
    "generationId": "suzuki-grand-vitara-jt",
    "market": "рынок сбыта не указан; страна сборки Япония",
    "modelYearFrom": 2008,
    "modelYearTo": 2012,
    "productionMonthFrom": "2008-08",
    "productionMonthTo": "2012-07",
    "bodyCode": "TAA4V",
    "bodyStyle": "3-дверный SUV",
    "trimOrGrade": "2.4 AT Comfort 4WD",
    "engineCode": "J24B",
    "engine": {
      "code": "J24B",
      "displacementCc": 2393,
      "powerHp": 166,
      "torqueNm": 183,
      "fuelType": "Бензин АИ-95"
    },
    "transmissionType": "AT",
    "drivetrain": "4WD",
    "steeringPosition": "unknown",
    "dimensions": {
      "lengthMm": 4150,
      "widthMm": 1870,
      "heightMm": 1685,
      "wheelbaseMm": 2440,
      "groundClearanceMm": 205,
      "trackFrontMm": 1540,
      "trackRearMm": 1570,
      "curbWeightKg": 1536,
      "fuelTankLiters": 55,
      "luggageVolumeLiters": 184
    },
    "wheelFitments": [
      {
        "tireSize": "225/65 R17",
        "rimSize": "17X6.5J",
        "applicability": "Suzuki Grand Vitara TAA4V 2.4 AT Comfort 4WD, 08.2008–07.2012",
        "verificationStatus": "partially-verified",
        "sourceUrl": "https://www.drom.ru/catalog/suzuki/grand_vitara/221896/",
        "notes": "Drom указывает шины и размер диска; PCD, DIA и ET не указаны."
      }
    ],
    "tires": [],
    "verificationStatus": "partially-verified",
    "sources": [
      {
        "label": "Drom — Suzuki Grand Vitara 2.4 AT Comfort, 3 двери",
        "url": "https://www.drom.ru/catalog/suzuki/grand_vitara/221896/",
        "sourceType": "secondary-reference",
        "market": "рынок не указан; сборка Япония",
        "scope": "TAA4V, 3-дверный кузов, 2.4 AT Comfort 4WD, 08.2008–07.2012; J24B, размеры, масса, бак, багажник и колёса",
        "accessedAt": "2026-11-06"
      }
    ],
    "limitations": [
      {
        "field": "market",
        "reason": "Страна сборки Япония не устанавливает однозначно рынок продаж."
      },
      {
        "field": "tires",
        "reason": "Индексы нагрузки и скорости не указаны."
      },
      {
        "field": "wheelFitments",
        "reason": "PCD, DIA и ET не приведены."
      }
    ],
    "notes": "3-дверный TAA4V; не объединять с 5-дверным TD_4 и его другими габаритами."
  },
  {
    "id": "suzuki-grand-vitara-jt-j24b-24-at-5door-4wd-2008-2012",
    "modelId": "suzuki-grand-vitara-2",
    "generationId": "suzuki-grand-vitara-jt",
    "market": "рынок сбыта не указан; страна сборки Япония",
    "modelYearFrom": 2008,
    "modelYearTo": 2012,
    "productionMonthFrom": "2008-08",
    "productionMonthTo": "2012-07",
    "bodyCode": "TD_4",
    "bodyStyle": "5-дверный SUV",
    "trimOrGrade": "2.4 AT Comfort 4WD",
    "engineCode": "J24B",
    "engine": {
      "code": "J24B",
      "displacementCc": 2393,
      "powerHp": 169,
      "torqueNm": 183,
      "fuelType": "Бензин АИ-95"
    },
    "transmissionType": "AT",
    "drivetrain": "4WD",
    "steeringPosition": "unknown",
    "dimensions": {
      "lengthMm": 4575,
      "widthMm": 1880,
      "heightMm": 1685,
      "wheelbaseMm": 2640,
      "groundClearanceMm": 205,
      "trackFrontMm": 1540,
      "trackRearMm": 1570,
      "curbWeightKg": 1642,
      "fuelTankLiters": 66,
      "luggageVolumeLiters": 398
    },
    "wheelFitments": [
      {
        "tireSize": "225/65 R17",
        "rimSize": "17X6.5J",
        "applicability": "Suzuki Grand Vitara TD_4 2.4 AT Comfort 4WD, 08.2008–07.2012",
        "verificationStatus": "partially-verified",
        "sourceUrl": "https://www.drom.ru/catalog/suzuki/grand_vitara/221889/",
        "notes": "Drom указывает шины и размер диска; PCD, DIA и ET не указаны."
      }
    ],
    "tires": [],
    "verificationStatus": "partially-verified",
    "sources": [
      {
        "label": "Drom — Suzuki Grand Vitara 2.4 AT Comfort, 5 дверей",
        "url": "https://www.drom.ru/catalog/suzuki/grand_vitara/221889/",
        "sourceType": "secondary-reference",
        "market": "рынок не указан; сборка Япония",
        "scope": "TD_4, 5-дверный кузов, 2.4 AT Comfort 4WD, 08.2008–07.2012; J24B, размеры, масса, бак, багажник и колёса",
        "accessedAt": "2026-11-06"
      }
    ],
    "limitations": [
      {
        "field": "market",
        "reason": "Страна сборки Япония не устанавливает однозначно рынок продаж."
      },
      {
        "field": "tires",
        "reason": "Индексы нагрузки и скорости не указаны."
      },
      {
        "field": "wheelFitments",
        "reason": "PCD, DIA и ET не приведены."
      }
    ],
    "notes": "5-дверный TD_4; не объединять с 3-дверным TAA4V и его другими габаритами."
  },
  {
    "id": "mazda-cx5-ke-shy1-22d-at-sports-line-4wd-2015-2017",
    "modelId": "mazda-cx5-ke-kf",
    "generationId": "mazda-cx5-ke",
    "market": "Япония",
    "modelYearFrom": 2015,
    "modelYearTo": 2017,
    "productionMonthFrom": "2015-01",
    "productionMonthTo": "2017-03",
    "bodyCode": "KE",
    "bodyStyle": "5-дверный SUV",
    "trimOrGrade": "2.2D AT Sports-Line 4WD",
    "engineCode": "SHY1 / SHY4",
    "engine": {
      "code": "SHY1 / SHY4",
      "displacementCc": 2191,
      "powerHp": 175,
      "torqueNm": 420,
      "fuelType": "Дизельное топливо",
      "induction": "Турбонаддув"
    },
    "transmissionType": "AT",
    "drivetrain": "4WD",
    "steeringPosition": "unknown",
    "dimensions": {
      "lengthMm": 4555,
      "widthMm": 1840,
      "heightMm": 1710,
      "wheelbaseMm": 2700,
      "groundClearanceMm": 215,
      "trackFrontMm": 1585,
      "trackRearMm": 1590,
      "curbWeightKg": 1570,
      "fuelTankLiters": 58,
      "luggageVolumeLiters": 503
    },
    "wheelFitments": [],
    "tires": [],
    "verificationStatus": "partially-verified",
    "sources": [
      {
        "label": "Drom — Mazda CX-5 2.2D AT Sports-Line",
        "url": "https://www.drom.ru/catalog/mazda/cx-5/450099/",
        "sourceType": "secondary-reference",
        "market": "Япония",
        "scope": "KE 2.2D AT Sports-Line 4WD, 01.2015–03.2017; SHY1/SHY4 175 л.с./420 Н·м, 6AT, габариты, масса, бак, багажник и шины",
        "accessedAt": "2026-11-06"
      }
    ],
    "limitations": [
      {
        "field": "tires",
        "reason": "225/55 R19 указан без индексов нагрузки и скорости."
      },
      {
        "field": "wheelFitments",
        "reason": "Размер диска, PCD, DIA и ET не подтверждены."
      }
    ],
    "notes": "Турбодизель 2.2, полный привод, 6AT; не смешивать с 2.2D MT и 150-сильными дизельными версиями."
  },
  {
    "id": "subaru-forester-sh5-ej204-20-x-4wd-5mt-2009-2010",
    "modelId": "subaru-forester-sg-sh",
    "generationId": "subaru-forester-sh",
    "market": "Япония",
    "modelYearFrom": 2009,
    "modelYearTo": 2010,
    "productionMonthFrom": "2009-01",
    "productionMonthTo": "2010-09",
    "bodyCode": "DBA-SH5",
    "bodyStyle": "5-дверный SUV",
    "trimOrGrade": "2.0 X 4WD 5MT",
    "engineCode": "EJ204",
    "engine": {
      "code": "EJ204",
      "displacementCc": 1994,
      "powerHp": 148,
      "torqueNm": 191,
      "fuelType": "Бензин Regular (АИ-92, АИ-95)"
    },
    "transmissionType": "MT",
    "drivetrain": "4WD",
    "steeringPosition": "RHD",
    "dimensions": {
      "lengthMm": 4560,
      "widthMm": 1780,
      "heightMm": 1675,
      "wheelbaseMm": 2615,
      "groundClearanceMm": 215,
      "trackFrontMm": 1530,
      "trackRearMm": 1530,
      "curbWeightKg": 1430,
      "fuelTankLiters": 60
    },
    "interiorDimensions": {
      "lengthMm": 2000,
      "widthMm": 1520,
      "heightMm": 1290,
      "notes": "Размеры салона приведены в карточке Drom для указанной модификации; не переносить на другие кузова и комплектации."
    },
    "wheelFitments": [],
    "tires": [],
    "verificationStatus": "partially-verified",
    "sources": [
      {
        "label": "Drom — Subaru Forester 2.0 X 4WD",
        "url": "https://www.drom.ru/catalog/subaru/forester/56890/",
        "sourceType": "secondary-reference",
        "market": "Япония",
        "scope": "DBA-SH5 2.0 X 4WD 5MT RHD, 01.2009–09.2010; EJ204, мощность/момент, внешние и внутренние размеры, масса, бак и шины",
        "accessedAt": "2026-11-06"
      }
    ],
    "limitations": [
      {
        "field": "tires",
        "reason": "215/65R16 без индексов нагрузки и скорости."
      },
      {
        "field": "wheelFitments",
        "reason": "Ширина диска, ET, PCD и DIA не приведены."
      },
      {
        "field": "luggageVolumeLiters",
        "reason": "Объём багажника не указан в использованной карточке."
      }
    ],
    "notes": "Японская праворульная версия 5MT; не объединять с 4AT и более поздними FB20."
  },
  {
    "id": "subaru-forester-sh5-ej204-20-xs-4wd-4at-2009-2010",
    "modelId": "subaru-forester-sg-sh",
    "generationId": "subaru-forester-sh",
    "market": "Япония",
    "modelYearFrom": 2009,
    "modelYearTo": 2010,
    "productionMonthFrom": "2009-01",
    "productionMonthTo": "2010-09",
    "bodyCode": "DBA-SH5",
    "bodyStyle": "5-дверный SUV",
    "trimOrGrade": "2.0 XS 4WD 4AT",
    "engineCode": "EJ204",
    "engine": {
      "code": "EJ204",
      "displacementCc": 1994,
      "powerHp": 148,
      "torqueNm": 191,
      "fuelType": "Бензин Regular (АИ-92, АИ-95)"
    },
    "transmissionType": "AT",
    "drivetrain": "4WD",
    "steeringPosition": "RHD",
    "dimensions": {
      "lengthMm": 4560,
      "widthMm": 1780,
      "heightMm": 1675,
      "wheelbaseMm": 2615,
      "groundClearanceMm": 215,
      "trackFrontMm": 1530,
      "trackRearMm": 1530,
      "curbWeightKg": 1460,
      "fuelTankLiters": 60
    },
    "interiorDimensions": {
      "lengthMm": 2000,
      "widthMm": 1520,
      "heightMm": 1290,
      "notes": "Размеры салона приведены в карточке Drom для указанной модификации; не переносить на другие кузова и комплектации."
    },
    "wheelFitments": [],
    "tires": [],
    "verificationStatus": "partially-verified",
    "sources": [
      {
        "label": "Drom — Subaru Forester 2.0 XS 4WD",
        "url": "https://www.drom.ru/catalog/subaru/forester/56891/",
        "sourceType": "secondary-reference",
        "market": "Япония",
        "scope": "DBA-SH5 2.0 XS 4WD 4AT RHD, 01.2009–09.2010; EJ204, мощность/момент, внешние и внутренние размеры, масса, бак и шины",
        "accessedAt": "2026-11-06"
      }
    ],
    "limitations": [
      {
        "field": "tires",
        "reason": "215/65R16 без индексов нагрузки и скорости."
      },
      {
        "field": "wheelFitments",
        "reason": "Ширина диска, ET, PCD и DIA не приведены."
      },
      {
        "field": "luggageVolumeLiters",
        "reason": "Объём багажника не указан в использованной карточке."
      }
    ],
    "notes": "Японская праворульная версия 4AT; не объединять с 5MT и более поздними FB20."
  },
  {
    "id": "lexus-rx-al10-2grfe-35-at-4wd-rhd-2009-2012",
    "modelId": "lexus-rx-350",
    "generationId": "lexus-rx-al10",
    "market": "Япония",
    "modelYearFrom": 2009,
    "modelYearTo": 2012,
    "productionMonthFrom": "2009-01",
    "productionMonthTo": "2012-03",
    "bodyCode": "DBA-GGL15W",
    "bodyStyle": "5-дверный SUV",
    "trimOrGrade": "RX350 4WD",
    "engineCode": "2GR-FE",
    "engine": {
      "code": "2GR-FE",
      "displacementCc": 3456,
      "powerHp": 280,
      "fuelType": "Бензин Premium (АИ-98)"
    },
    "transmissionType": "AT",
    "drivetrain": "4WD",
    "steeringPosition": "RHD",
    "dimensions": {
      "lengthMm": 4770,
      "widthMm": 1885,
      "heightMm": 1690,
      "wheelbaseMm": 2740,
      "groundClearanceMm": 185,
      "trackFrontMm": 1630,
      "trackRearMm": 1625,
      "curbWeightKg": 1940
    },
    "interiorDimensions": {
      "lengthMm": 2180,
      "widthMm": 1560,
      "heightMm": 1220,
      "notes": "Размеры салона приведены в карточке Drom для указанной модификации; не переносить на другие кузова и комплектации."
    },
    "wheelFitments": [],
    "tires": [],
    "verificationStatus": "partially-verified",
    "sources": [
      {
        "label": "Drom — Lexus RX350 350 4WD",
        "url": "https://www.drom.ru/catalog/lexus/rx350/57470/",
        "sourceType": "secondary-reference",
        "market": "Япония",
        "scope": "DBA-GGL15W RX350 4WD RHD, 01.2009–03.2012; 2GR-FE 3.5, 280 л.с., 6AT, размеры кузова и салона, масса и шины",
        "accessedAt": "2026-11-06"
      }
    ],
    "limitations": [
      {
        "field": "engine.torqueNm",
        "reason": "Крутящий момент не приведён в доступном фрагменте карточки; не заполнен."
      },
      {
        "field": "dimensions.fuelTankLiters",
        "reason": "Объём топливного бака не подтверждён использованной карточкой."
      },
      {
        "field": "wheelFitments",
        "reason": "235/60R18 указан как размер шин; ширина диска, PCD, DIA и ET не подтверждены."
      }
    ],
    "notes": "Японская праворульная версия GGL15W с полным приводом; не смешивать с переднеприводной GGL10W и GGL16W с пневмоподвеской."
  }
];
