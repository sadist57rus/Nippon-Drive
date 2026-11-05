/**
 * Drom generation index: model generations, chassis codes and production periods.
 * Source is the Drom public generation sitemap. This does not assert trim/engine/body fitment.
 */
import type { GenerationBodyRecord } from './generationBodyCatalog';

export type SourcedGenerationBodyRecord = GenerationBodyRecord & { source: 'Drom' | 'Auto.ru' };

export const DROM_GENERATION_INDEX: SourcedGenerationBodyRecord[] = [
  {
    "id": "drom-gen-acura-cl-ya1-19961999",
    "sourceModelId": "acura-cl",
    "make": "Acura",
    "model": "CL",
    "generation": "YA1",
    "chassisCodes": [
      "YA1"
    ],
    "years": "1996-1999",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-acura-cl-ya4-20002003",
    "sourceModelId": "acura-cl",
    "make": "Acura",
    "model": "CL",
    "generation": "YA4",
    "chassisCodes": [
      "YA4"
    ],
    "years": "2000-2003",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-acura-el--19962000",
    "sourceModelId": "acura-el",
    "make": "Acura",
    "model": "EL",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "1996-2000",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-acura-ilx-de1-20122022",
    "sourceModelId": "acura-ilx",
    "make": "Acura",
    "model": "ILX",
    "generation": "DE1",
    "chassisCodes": [
      "DE1"
    ],
    "years": "2012-2022",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-acura-integra--19932001",
    "sourceModelId": "acura-integra",
    "make": "Acura",
    "model": "Integra",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "1993-2001",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-acura-integra-de4-2022",
    "sourceModelId": "acura-integra",
    "make": "Acura",
    "model": "Integra",
    "generation": "DE4",
    "chassisCodes": [
      "DE4"
    ],
    "years": "2022-н.в.",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-acura-legend-ka8-ka7-19901995",
    "sourceModelId": "acura-legend",
    "make": "Acura",
    "model": "Legend",
    "generation": "KA8, KA7",
    "chassisCodes": [
      "KA8",
      "KA7"
    ],
    "years": "1990-1995",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-acura-mdx-yd1-20002006",
    "sourceModelId": "acura-mdx",
    "make": "Acura",
    "model": "MDX",
    "generation": "YD1",
    "chassisCodes": [
      "YD1"
    ],
    "years": "2000-2006",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-acura-mdx-yd2-20062013",
    "sourceModelId": "acura-mdx",
    "make": "Acura",
    "model": "MDX",
    "generation": "YD2",
    "chassisCodes": [
      "YD2"
    ],
    "years": "2006-2013",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-acura-mdx-yd3-20132021",
    "sourceModelId": "acura-mdx",
    "make": "Acura",
    "model": "MDX",
    "generation": "YD3",
    "chassisCodes": [
      "YD3"
    ],
    "years": "2013-2021",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-acura-mdx-yd8-2020",
    "sourceModelId": "acura-mdx",
    "make": "Acura",
    "model": "MDX",
    "generation": "YD8",
    "chassisCodes": [
      "YD8"
    ],
    "years": "2020-н.в.",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-acura-rdx-tb1-tb2-20062012",
    "sourceModelId": "acura-rdx",
    "make": "Acura",
    "model": "RDX",
    "generation": "TB1, TB2",
    "chassisCodes": [
      "TB1",
      "TB2"
    ],
    "years": "2006-2012",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-acura-rdx-tb3-tb4-20122018",
    "sourceModelId": "acura-rdx",
    "make": "Acura",
    "model": "RDX",
    "generation": "TB3, TB4",
    "chassisCodes": [
      "TB3",
      "TB4"
    ],
    "years": "2012-2018",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-acura-rl-kb1-20042012",
    "sourceModelId": "acura-rl",
    "make": "Acura",
    "model": "RL",
    "generation": "KB1",
    "chassisCodes": [
      "KB1"
    ],
    "years": "2004-2012",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-acura-rsx-dc5-20012006",
    "sourceModelId": "acura-rsx",
    "make": "Acura",
    "model": "RSX",
    "generation": "DC5",
    "chassisCodes": [
      "DC5"
    ],
    "years": "2001-2006",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-honda-accord-ca-19851990",
    "sourceModelId": "honda-accord",
    "make": "Honda",
    "model": "Accord",
    "generation": "CA",
    "chassisCodes": [
      "CA"
    ],
    "years": "1985-1990",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-honda-accord-cb-19891994",
    "sourceModelId": "honda-accord",
    "make": "Honda",
    "model": "Accord",
    "generation": "CB",
    "chassisCodes": [
      "CB"
    ],
    "years": "1989-1994",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-honda-accord-cd-ce-cc-19931998",
    "sourceModelId": "honda-accord",
    "make": "Honda",
    "model": "Accord",
    "generation": "CD, CE, CC",
    "chassisCodes": [
      "CD",
      "CE",
      "CC"
    ],
    "years": "1993-1998",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-honda-accord-cg-ch-cf-19972003",
    "sourceModelId": "honda-accord",
    "make": "Honda",
    "model": "Accord",
    "generation": "CG, CH, CF",
    "chassisCodes": [
      "CG",
      "CH",
      "CF"
    ],
    "years": "1997-2003",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-honda-accord-ct-cr-20122020",
    "sourceModelId": "honda-accord",
    "make": "Honda",
    "model": "Accord",
    "generation": "CT, CR",
    "chassisCodes": [
      "CT",
      "CR"
    ],
    "years": "2012-2020",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-honda-accord-cv-20172023",
    "sourceModelId": "honda-accord",
    "make": "Honda",
    "model": "Accord",
    "generation": "CV",
    "chassisCodes": [
      "CV"
    ],
    "years": "2017-2023",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-honda-accord-cw-cs-cp-cu-20072013",
    "sourceModelId": "honda-accord",
    "make": "Honda",
    "model": "Accord",
    "generation": "CW, CS, CP, CU",
    "chassisCodes": [
      "CW",
      "CS",
      "CP",
      "CU"
    ],
    "years": "2007-2013",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-honda-accord-cy-2022",
    "sourceModelId": "honda-accord",
    "make": "Honda",
    "model": "Accord",
    "generation": "CY",
    "chassisCodes": [
      "CY"
    ],
    "years": "2022-н.в.",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-honda-accord-sj-sm-19761981",
    "sourceModelId": "honda-accord",
    "make": "Honda",
    "model": "Accord",
    "generation": "SJ, SM",
    "chassisCodes": [
      "SJ",
      "SM"
    ],
    "years": "1976-1981",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-honda-accord-sy-sz-19811985",
    "sourceModelId": "honda-accord",
    "make": "Honda",
    "model": "Accord",
    "generation": "SY, SZ",
    "chassisCodes": [
      "SY",
      "SZ"
    ],
    "years": "1981-1985",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-honda-accord-uc-cl-cm-20022008",
    "sourceModelId": "honda-accord",
    "make": "Honda",
    "model": "Accord",
    "generation": "UC, CL, CM",
    "chassisCodes": [
      "UC",
      "CL",
      "CM"
    ],
    "years": "2002-2008",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-honda-acty--19992018",
    "sourceModelId": "honda-acty",
    "make": "Honda",
    "model": "Acty",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "1999-2018",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-honda-airwave-gj-20052010",
    "sourceModelId": "honda-airwave",
    "make": "Honda",
    "model": "Airwave",
    "generation": "GJ",
    "chassisCodes": [
      "GJ"
    ],
    "years": "2005-2010",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-honda-ascot-cb-19891993",
    "sourceModelId": "honda-ascot",
    "make": "Honda",
    "model": "Ascot",
    "generation": "CB",
    "chassisCodes": [
      "CB"
    ],
    "years": "1989-1993",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-honda-ascot-ce-19931997",
    "sourceModelId": "honda-ascot",
    "make": "Honda",
    "model": "Ascot",
    "generation": "CE",
    "chassisCodes": [
      "CE"
    ],
    "years": "1993-1997",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-honda-ascot-innova--19921996",
    "sourceModelId": "honda-ascot-innova",
    "make": "Honda",
    "model": "Ascot Innova",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "1992-1996",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-honda-avancier--19992003",
    "sourceModelId": "honda-avancier",
    "make": "Honda",
    "model": "Avancier",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "1999-2003",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-honda-avancier-tg-2016",
    "sourceModelId": "honda-avancier",
    "make": "Honda",
    "model": "Avancier",
    "generation": "TG",
    "chassisCodes": [
      "TG"
    ],
    "years": "2016-н.в.",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-honda-beat--19911996",
    "sourceModelId": "honda-beat",
    "make": "Honda",
    "model": "Beat",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "1991-1996",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-honda-cr-v-rd-19952001",
    "sourceModelId": "honda-cr-v",
    "make": "Honda",
    "model": "CR-V",
    "generation": "RD",
    "chassisCodes": [
      "RD"
    ],
    "years": "1995-2001",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-honda-cr-v-rd-20012006",
    "sourceModelId": "honda-cr-v",
    "make": "Honda",
    "model": "CR-V",
    "generation": "RD",
    "chassisCodes": [
      "RD"
    ],
    "years": "2001-2006",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-honda-cr-v-re-20062012",
    "sourceModelId": "honda-cr-v",
    "make": "Honda",
    "model": "CR-V",
    "generation": "RE",
    "chassisCodes": [
      "RE"
    ],
    "years": "2006-2012",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-honda-cr-v-re-rm-20112018",
    "sourceModelId": "honda-cr-v",
    "make": "Honda",
    "model": "CR-V",
    "generation": "RE, RM",
    "chassisCodes": [
      "RE",
      "RM"
    ],
    "years": "2011-2018",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-honda-cr-v-rm-rt-rw-20162023",
    "sourceModelId": "honda-cr-v",
    "make": "Honda",
    "model": "CR-V",
    "generation": "RM, RT, RW",
    "chassisCodes": [
      "RM",
      "RT",
      "RW"
    ],
    "years": "2016-2023",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-honda-cr-v-rs-2022",
    "sourceModelId": "honda-cr-v",
    "make": "Honda",
    "model": "CR-V",
    "generation": "RS",
    "chassisCodes": [
      "RS"
    ],
    "years": "2022-н.в.",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-honda-civic-aj-ak-au-af-as-ag-ah-al-at-19831987",
    "sourceModelId": "honda-civic",
    "make": "Honda",
    "model": "Civic",
    "generation": "AJ, AK, AU, AF, AS, AG, AH, AL, AT",
    "chassisCodes": [
      "AJ",
      "AK",
      "AU",
      "AF",
      "AS",
      "AG",
      "AH",
      "AL",
      "AT"
    ],
    "years": "1983-1987",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-honda-civic-ed-ef-ec-19871991",
    "sourceModelId": "honda-civic",
    "make": "Honda",
    "model": "Civic",
    "generation": "ED, EF, EC",
    "chassisCodes": [
      "ED",
      "EF",
      "EC"
    ],
    "years": "1987-1991",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-honda-civic-ej-mk5-eg-eh-19911995",
    "sourceModelId": "honda-civic",
    "make": "Honda",
    "model": "Civic",
    "generation": "EJ, MK5, EG, EH",
    "chassisCodes": [
      "EJ",
      "MK5",
      "EG",
      "EH"
    ],
    "years": "1991-1995",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-honda-civic-em-eu-en-es-ep-20002006",
    "sourceModelId": "honda-civic",
    "make": "Honda",
    "model": "Civic",
    "generation": "EM, EU, EN, ES, EP",
    "chassisCodes": [
      "EM",
      "EU",
      "EN",
      "ES",
      "EP"
    ],
    "years": "2000-2006",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-honda-civic-fe-fl-2020",
    "sourceModelId": "honda-civic",
    "make": "Honda",
    "model": "Civic",
    "generation": "FE, FL",
    "chassisCodes": [
      "FE",
      "FL"
    ],
    "years": "2020-н.в.",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-honda-civic-fk-fb-20112017",
    "sourceModelId": "honda-civic",
    "make": "Honda",
    "model": "Civic",
    "generation": "FK, FB",
    "chassisCodes": [
      "FK",
      "FB"
    ],
    "years": "2011-2017",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-honda-civic-fk-fc-20152022",
    "sourceModelId": "honda-civic",
    "make": "Honda",
    "model": "Civic",
    "generation": "FK, FC",
    "chassisCodes": [
      "FK",
      "FC"
    ],
    "years": "2015-2022",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-honda-civic-fn-fk-fd-20052012",
    "sourceModelId": "honda-civic",
    "make": "Honda",
    "model": "Civic",
    "generation": "FN, FK, FD",
    "chassisCodes": [
      "FN",
      "FK",
      "FD"
    ],
    "years": "2005-2012",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-honda-civic-ferio--19911995",
    "sourceModelId": "honda-civic-ferio",
    "make": "Honda",
    "model": "Civic Ferio",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "1991-1995",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-honda-civic-ferio--19952000",
    "sourceModelId": "honda-civic-ferio",
    "make": "Honda",
    "model": "Civic Ferio",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "1995-2000",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-honda-civic-ferio--20002006",
    "sourceModelId": "honda-civic-ferio",
    "make": "Honda",
    "model": "Civic Ferio",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "2000-2006",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-honda-civic-type-r-ek9-19972001",
    "sourceModelId": "honda-civic-type-r",
    "make": "Honda",
    "model": "Civic Type R",
    "generation": "EK9",
    "chassisCodes": [
      "EK9"
    ],
    "years": "1997-2001",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-honda-civic-type-r-ep-ep3-20012006",
    "sourceModelId": "honda-civic-type-r",
    "make": "Honda",
    "model": "Civic Type R",
    "generation": "EP, EP3",
    "chassisCodes": [
      "EP",
      "EP3"
    ],
    "years": "2001-2006",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-honda-civic-type-r-fd2-fn-20062012",
    "sourceModelId": "honda-civic-type-r",
    "make": "Honda",
    "model": "Civic Type R",
    "generation": "FD2, FN",
    "chassisCodes": [
      "FD2",
      "FN"
    ],
    "years": "2006-2012",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-honda-civic-type-r-fk8-2017",
    "sourceModelId": "honda-civic-type-r",
    "make": "Honda",
    "model": "Civic Type R",
    "generation": "FK8",
    "chassisCodes": [
      "FK8"
    ],
    "years": "2017-н.в.",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-honda-civic-type-r-fl5-2022",
    "sourceModelId": "honda-civic-type-r",
    "make": "Honda",
    "model": "Civic Type R",
    "generation": "FL5",
    "chassisCodes": [
      "FL5"
    ],
    "years": "2022-н.в.",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-honda-cr-x--19871992",
    "sourceModelId": "honda-cr-x",
    "make": "Honda",
    "model": "CR-X",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "1987-1992",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-honda-cr-x-del-sol--19921998",
    "sourceModelId": "honda-cr-x-del-sol",
    "make": "Honda",
    "model": "CR-X del Sol",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "1992-1998",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-honda-cr-z--20102017",
    "sourceModelId": "honda-cr-z",
    "make": "Honda",
    "model": "CR-Z",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "2010-2017",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-honda-fit-gd-20012007",
    "sourceModelId": "honda-fit",
    "make": "Honda",
    "model": "Fit",
    "generation": "GD",
    "chassisCodes": [
      "GD"
    ],
    "years": "2001-2007",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-honda-fit-ge-20072013",
    "sourceModelId": "honda-fit",
    "make": "Honda",
    "model": "Fit",
    "generation": "GE",
    "chassisCodes": [
      "GE"
    ],
    "years": "2007-2013",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-honda-fit-gk-gp-20132020",
    "sourceModelId": "honda-fit",
    "make": "Honda",
    "model": "Fit",
    "generation": "GK, GP",
    "chassisCodes": [
      "GK",
      "GP"
    ],
    "years": "2013-2020",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-honda-fit-gr-gs-2019",
    "sourceModelId": "honda-fit",
    "make": "Honda",
    "model": "Fit",
    "generation": "GR, GS",
    "chassisCodes": [
      "GR",
      "GS"
    ],
    "years": "2019-н.в.",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-honda-freed--20082016",
    "sourceModelId": "honda-freed",
    "make": "Honda",
    "model": "Freed",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "2008-2016",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-honda-freed--20162024",
    "sourceModelId": "honda-freed",
    "make": "Honda",
    "model": "Freed",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "2016-2024",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-honda-freed--2024",
    "sourceModelId": "honda-freed",
    "make": "Honda",
    "model": "Freed",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "2024-н.в.",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-honda-hr-v-gh-19982007",
    "sourceModelId": "honda-hr-v",
    "make": "Honda",
    "model": "HR-V",
    "generation": "GH",
    "chassisCodes": [
      "GH"
    ],
    "years": "1998-2007",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-honda-hr-v-ru-20142022",
    "sourceModelId": "honda-hr-v",
    "make": "Honda",
    "model": "HR-V",
    "generation": "RU",
    "chassisCodes": [
      "RU"
    ],
    "years": "2014-2022",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-honda-hr-v-rv-rz-2021",
    "sourceModelId": "honda-hr-v",
    "make": "Honda",
    "model": "HR-V",
    "generation": "RV, RZ",
    "chassisCodes": [
      "RV",
      "RZ"
    ],
    "years": "2021-н.в.",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-honda-insight-ze1-19992006",
    "sourceModelId": "honda-insight",
    "make": "Honda",
    "model": "Insight",
    "generation": "ZE1",
    "chassisCodes": [
      "ZE1"
    ],
    "years": "1999-2006",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-honda-insight-ze2-20092014",
    "sourceModelId": "honda-insight",
    "make": "Honda",
    "model": "Insight",
    "generation": "ZE2",
    "chassisCodes": [
      "ZE2"
    ],
    "years": "2009-2014",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-honda-insight-ze4-20182022",
    "sourceModelId": "honda-insight",
    "make": "Honda",
    "model": "Insight",
    "generation": "ZE4",
    "chassisCodes": [
      "ZE4"
    ],
    "years": "2018-2022",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-honda-integra--19891993",
    "sourceModelId": "honda-integra",
    "make": "Honda",
    "model": "Integra",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "1989-1993",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-honda-integra--19932000",
    "sourceModelId": "honda-integra",
    "make": "Honda",
    "model": "Integra",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "1993-2000",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-honda-integra--20012006",
    "sourceModelId": "honda-integra",
    "make": "Honda",
    "model": "Integra",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "2001-2006",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-honda-integra-da1-av-19851989",
    "sourceModelId": "honda-integra",
    "make": "Honda",
    "model": "Integra",
    "generation": "DA1, AV",
    "chassisCodes": [
      "DA1",
      "AV"
    ],
    "years": "1985-1989",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-honda-legend--19851990",
    "sourceModelId": "honda-legend",
    "make": "Honda",
    "model": "Legend",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "1985-1990",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-honda-legend--19901996",
    "sourceModelId": "honda-legend",
    "make": "Honda",
    "model": "Legend",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "1990-1996",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-honda-legend--19952004",
    "sourceModelId": "honda-legend",
    "make": "Honda",
    "model": "Legend",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "1995-2004",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-honda-legend--20042012",
    "sourceModelId": "honda-legend",
    "make": "Honda",
    "model": "Legend",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "2004-2012",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-honda-legend--20152021",
    "sourceModelId": "honda-legend",
    "make": "Honda",
    "model": "Legend",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "2015-2021",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-honda-life--19971998",
    "sourceModelId": "honda-life",
    "make": "Honda",
    "model": "Life",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "1997-1998",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-honda-life--19982003",
    "sourceModelId": "honda-life",
    "make": "Honda",
    "model": "Life",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "1998-2003",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-honda-life--20032008",
    "sourceModelId": "honda-life",
    "make": "Honda",
    "model": "Life",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "2003-2008",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-honda-life--20082014",
    "sourceModelId": "honda-life",
    "make": "Honda",
    "model": "Life",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "2008-2014",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-honda-n-box-jf1-2-20112017",
    "sourceModelId": "honda-n-box",
    "make": "Honda",
    "model": "N-BOX",
    "generation": "JF1/2",
    "chassisCodes": [
      "JF1/2"
    ],
    "years": "2011-2017",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-honda-n-box-jf3-4-20172023",
    "sourceModelId": "honda-n-box",
    "make": "Honda",
    "model": "N-BOX",
    "generation": "JF3/4",
    "chassisCodes": [
      "JF3/4"
    ],
    "years": "2017-2023",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-honda-nsx--19902005",
    "sourceModelId": "honda-nsx",
    "make": "Honda",
    "model": "NSX",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "1990-2005",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-honda-odyssey-ra1-ra5-19941999",
    "sourceModelId": "honda-odyssey",
    "make": "Honda",
    "model": "Odyssey",
    "generation": "RA1, RA5",
    "chassisCodes": [
      "RA1",
      "RA5"
    ],
    "years": "1994-1999",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-honda-odyssey-rl1-19982004",
    "sourceModelId": "honda-odyssey",
    "make": "Honda",
    "model": "Odyssey",
    "generation": "RL1",
    "chassisCodes": [
      "RL1"
    ],
    "years": "1998-2004",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-honda-odyssey-rl3-rl4-20032010",
    "sourceModelId": "honda-odyssey",
    "make": "Honda",
    "model": "Odyssey",
    "generation": "RL3, RL4",
    "chassisCodes": [
      "RL3",
      "RL4"
    ],
    "years": "2003-2010",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-honda-odyssey-rl5-20082014",
    "sourceModelId": "honda-odyssey",
    "make": "Honda",
    "model": "Odyssey",
    "generation": "RL5",
    "chassisCodes": [
      "RL5"
    ],
    "years": "2008-2014",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-honda-odyssey-rl6-2013",
    "sourceModelId": "honda-odyssey",
    "make": "Honda",
    "model": "Odyssey",
    "generation": "RL6",
    "chassisCodes": [
      "RL6"
    ],
    "years": "2013-н.в.",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-honda-prelude--19821987",
    "sourceModelId": "honda-prelude",
    "make": "Honda",
    "model": "Prelude",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "1982-1987",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-honda-prelude-ba-19871991",
    "sourceModelId": "honda-prelude",
    "make": "Honda",
    "model": "Prelude",
    "generation": "BA",
    "chassisCodes": [
      "BA"
    ],
    "years": "1987-1991",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-honda-prelude-ba-bb-19911996",
    "sourceModelId": "honda-prelude",
    "make": "Honda",
    "model": "Prelude",
    "generation": "BA, BB",
    "chassisCodes": [
      "BA",
      "BB"
    ],
    "years": "1991-1996",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-honda-prelude-bb-19962001",
    "sourceModelId": "honda-prelude",
    "make": "Honda",
    "model": "Prelude",
    "generation": "BB",
    "chassisCodes": [
      "BB"
    ],
    "years": "1996-2001",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-honda-s2000-ap1-19992009",
    "sourceModelId": "honda-s2000",
    "make": "Honda",
    "model": "S2000",
    "generation": "AP1",
    "chassisCodes": [
      "AP1"
    ],
    "years": "1999-2009",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-honda-stepwgn--19962001",
    "sourceModelId": "honda-stepwgn",
    "make": "Honda",
    "model": "Stepwgn",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "1996-2001",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-honda-stepwgn--20012005",
    "sourceModelId": "honda-stepwgn",
    "make": "Honda",
    "model": "Stepwgn",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "2001-2005",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-honda-stepwgn--20052009",
    "sourceModelId": "honda-stepwgn",
    "make": "Honda",
    "model": "Stepwgn",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "2005-2009",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-honda-stepwgn--20092015",
    "sourceModelId": "honda-stepwgn",
    "make": "Honda",
    "model": "Stepwgn",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "2009-2015",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-honda-stepwgn--20152021",
    "sourceModelId": "honda-stepwgn",
    "make": "Honda",
    "model": "Stepwgn",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "2015-2021",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-honda-stepwgn--2022",
    "sourceModelId": "honda-stepwgn",
    "make": "Honda",
    "model": "Stepwgn",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "2022-н.в.",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-honda-stream--20002006",
    "sourceModelId": "honda-stream",
    "make": "Honda",
    "model": "Stream",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "2000-2006",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-honda-stream--20062014",
    "sourceModelId": "honda-stream",
    "make": "Honda",
    "model": "Stream",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "2006-2014",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-nissan-100nx--19901996",
    "sourceModelId": "nissan-100nx",
    "make": "Nissan",
    "model": "100NX",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "1990-1996",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-nissan-180sx--19891998",
    "sourceModelId": "nissan-180sx",
    "make": "Nissan",
    "model": "180SX",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "1989-1998",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-nissan-200sx-s13-19891993",
    "sourceModelId": "nissan-200sx",
    "make": "Nissan",
    "model": "200SX",
    "generation": "S13",
    "chassisCodes": [
      "S13"
    ],
    "years": "1989-1993",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-nissan-300zx-z31-19831989",
    "sourceModelId": "nissan-300zx",
    "make": "Nissan",
    "model": "300ZX",
    "generation": "Z31",
    "chassisCodes": [
      "Z31"
    ],
    "years": "1983-1989",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-nissan-300zx-z32-19892000",
    "sourceModelId": "nissan-300zx",
    "make": "Nissan",
    "model": "300ZX",
    "generation": "Z32",
    "chassisCodes": [
      "Z32"
    ],
    "years": "1989-2000",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-nissan-350z-z33-20022009",
    "sourceModelId": "nissan-350z",
    "make": "Nissan",
    "model": "350Z",
    "generation": "Z33",
    "chassisCodes": [
      "Z33"
    ],
    "years": "2002-2009",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-nissan-370z-z34-20092020",
    "sourceModelId": "nissan-370z",
    "make": "Nissan",
    "model": "370Z",
    "generation": "Z34",
    "chassisCodes": [
      "Z34"
    ],
    "years": "2009-2020",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-nissan-ad-vb11-19821990",
    "sourceModelId": "nissan-ad",
    "make": "Nissan",
    "model": "AD",
    "generation": "VB11",
    "chassisCodes": [
      "VB11"
    ],
    "years": "1982-1990",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-nissan-ad-y10-19901999",
    "sourceModelId": "nissan-ad",
    "make": "Nissan",
    "model": "AD",
    "generation": "Y10",
    "chassisCodes": [
      "Y10"
    ],
    "years": "1990-1999",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-nissan-ad-y11-19992008",
    "sourceModelId": "nissan-ad",
    "make": "Nissan",
    "model": "AD",
    "generation": "Y11",
    "chassisCodes": [
      "Y11"
    ],
    "years": "1999-2008",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-nissan-ad-y12-20062025",
    "sourceModelId": "nissan-ad",
    "make": "Nissan",
    "model": "AD",
    "generation": "Y12",
    "chassisCodes": [
      "Y12"
    ],
    "years": "2006-2025",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-nissan-almera-classic-b10-20062012",
    "sourceModelId": "nissan-almera-classic",
    "make": "Nissan",
    "model": "Almera Classic",
    "generation": "B10",
    "chassisCodes": [
      "B10"
    ],
    "years": "2006-2012",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-nissan-almera-g15-n17-20112019",
    "sourceModelId": "nissan-almera",
    "make": "Nissan",
    "model": "Almera",
    "generation": "G15, N17",
    "chassisCodes": [
      "G15",
      "N17"
    ],
    "years": "2011-2019",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-nissan-almera-n15-19952000",
    "sourceModelId": "nissan-almera",
    "make": "Nissan",
    "model": "Almera",
    "generation": "N15",
    "chassisCodes": [
      "N15"
    ],
    "years": "1995-2000",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-nissan-almera-n16-20002006",
    "sourceModelId": "nissan-almera",
    "make": "Nissan",
    "model": "Almera",
    "generation": "N16",
    "chassisCodes": [
      "N16"
    ],
    "years": "2000-2006",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-nissan-almera-n18-2019",
    "sourceModelId": "nissan-almera",
    "make": "Nissan",
    "model": "Almera",
    "generation": "N18",
    "chassisCodes": [
      "N18"
    ],
    "years": "2019-н.в.",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-nissan-altima-l30-19972001",
    "sourceModelId": "nissan-altima",
    "make": "Nissan",
    "model": "Altima",
    "generation": "L30",
    "chassisCodes": [
      "L30"
    ],
    "years": "1997-2001",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-nissan-altima-l31-20012006",
    "sourceModelId": "nissan-altima",
    "make": "Nissan",
    "model": "Altima",
    "generation": "L31",
    "chassisCodes": [
      "L31"
    ],
    "years": "2001-2006",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-nissan-altima-l33-20122018",
    "sourceModelId": "nissan-altima",
    "make": "Nissan",
    "model": "Altima",
    "generation": "L33",
    "chassisCodes": [
      "L33"
    ],
    "years": "2012-2018",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-nissan-altima-l34-2018",
    "sourceModelId": "nissan-altima",
    "make": "Nissan",
    "model": "Altima",
    "generation": "L34",
    "chassisCodes": [
      "L34"
    ],
    "years": "2018-н.в.",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-nissan-altima-u13-19921997",
    "sourceModelId": "nissan-altima",
    "make": "Nissan",
    "model": "Altima",
    "generation": "U13",
    "chassisCodes": [
      "U13"
    ],
    "years": "1992-1997",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-nissan-altima-u32-l32-20062013",
    "sourceModelId": "nissan-altima",
    "make": "Nissan",
    "model": "Altima",
    "generation": "U32, L32",
    "chassisCodes": [
      "U32",
      "L32"
    ],
    "years": "2006-2013",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-nissan-ariya--2020",
    "sourceModelId": "nissan-ariya",
    "make": "Nissan",
    "model": "Ariya",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "2020-н.в.",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-nissan-armada-ta60-20032016",
    "sourceModelId": "nissan-armada",
    "make": "Nissan",
    "model": "Armada",
    "generation": "TA60",
    "chassisCodes": [
      "TA60"
    ],
    "years": "2003-2016",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-nissan-armada-y62-20162024",
    "sourceModelId": "nissan-armada",
    "make": "Nissan",
    "model": "Armada",
    "generation": "Y62",
    "chassisCodes": [
      "Y62"
    ],
    "years": "2016-2024",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-nissan-armada-y63-2024",
    "sourceModelId": "nissan-armada",
    "make": "Nissan",
    "model": "Armada",
    "generation": "Y63",
    "chassisCodes": [
      "Y63"
    ],
    "years": "2024-н.в.",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-nissan-auster-t12-19851990",
    "sourceModelId": "nissan-auster",
    "make": "Nissan",
    "model": "Auster",
    "generation": "T12",
    "chassisCodes": [
      "T12"
    ],
    "years": "1985-1990",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-nissan-avenir-w10-19901995",
    "sourceModelId": "nissan-avenir",
    "make": "Nissan",
    "model": "Avenir",
    "generation": "W10",
    "chassisCodes": [
      "W10"
    ],
    "years": "1990-1995",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-nissan-avenir-w11-19982005",
    "sourceModelId": "nissan-avenir",
    "make": "Nissan",
    "model": "Avenir",
    "generation": "W11",
    "chassisCodes": [
      "W11"
    ],
    "years": "1998-2005",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-nissan-bassara-ju30-19992003",
    "sourceModelId": "nissan-bassara",
    "make": "Nissan",
    "model": "Bassara",
    "generation": "JU30",
    "chassisCodes": [
      "JU30"
    ],
    "years": "1999-2003",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-nissan-bluebird-910-19791983",
    "sourceModelId": "nissan-bluebird",
    "make": "Nissan",
    "model": "Bluebird",
    "generation": "910",
    "chassisCodes": [
      "910"
    ],
    "years": "1979-1983",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-nissan-bluebird-maxima-pu11-19841988",
    "sourceModelId": "nissan-bluebird-maxima",
    "make": "Nissan",
    "model": "Bluebird Maxima",
    "generation": "PU11",
    "chassisCodes": [
      "PU11"
    ],
    "years": "1984-1988",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-nissan-bluebird-sylphy-g10-20002005",
    "sourceModelId": "nissan-bluebird-sylphy",
    "make": "Nissan",
    "model": "Bluebird Sylphy",
    "generation": "G10",
    "chassisCodes": [
      "G10"
    ],
    "years": "2000-2005",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-nissan-bluebird-sylphy-g11-20052012",
    "sourceModelId": "nissan-bluebird-sylphy",
    "make": "Nissan",
    "model": "Bluebird Sylphy",
    "generation": "G11",
    "chassisCodes": [
      "G11"
    ],
    "years": "2005-2012",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-nissan-bluebird-u11-19831990",
    "sourceModelId": "nissan-bluebird",
    "make": "Nissan",
    "model": "Bluebird",
    "generation": "U11",
    "chassisCodes": [
      "U11"
    ],
    "years": "1983-1990",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-nissan-bluebird-u12-19871991",
    "sourceModelId": "nissan-bluebird",
    "make": "Nissan",
    "model": "Bluebird",
    "generation": "U12",
    "chassisCodes": [
      "U12"
    ],
    "years": "1987-1991",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-nissan-bluebird-u13-19911995",
    "sourceModelId": "nissan-bluebird",
    "make": "Nissan",
    "model": "Bluebird",
    "generation": "U13",
    "chassisCodes": [
      "U13"
    ],
    "years": "1991-1995",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-nissan-bluebird-u14-19962001",
    "sourceModelId": "nissan-bluebird",
    "make": "Nissan",
    "model": "Bluebird",
    "generation": "U14",
    "chassisCodes": [
      "U14"
    ],
    "years": "1996-2001",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-nissan-caravan-e23-19801986",
    "sourceModelId": "nissan-caravan",
    "make": "Nissan",
    "model": "Caravan",
    "generation": "E23",
    "chassisCodes": [
      "E23"
    ],
    "years": "1980-1986",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-nissan-caravan-e24-19862001",
    "sourceModelId": "nissan-caravan",
    "make": "Nissan",
    "model": "Caravan",
    "generation": "E24",
    "chassisCodes": [
      "E24"
    ],
    "years": "1986-2001",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-nissan-caravan-e25-20012012",
    "sourceModelId": "nissan-caravan",
    "make": "Nissan",
    "model": "Caravan",
    "generation": "E25",
    "chassisCodes": [
      "E25"
    ],
    "years": "2001-2012",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-nissan-caravan-e26-2021",
    "sourceModelId": "nissan-caravan",
    "make": "Nissan",
    "model": "Caravan",
    "generation": "E26",
    "chassisCodes": [
      "E26"
    ],
    "years": "2021-н.в.",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-nissan-cedric-230-19711975",
    "sourceModelId": "nissan-cedric",
    "make": "Nissan",
    "model": "Cedric",
    "generation": "230",
    "chassisCodes": [
      "230"
    ],
    "years": "1971-1975",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-nissan-cedric-330-19751979",
    "sourceModelId": "nissan-cedric",
    "make": "Nissan",
    "model": "Cedric",
    "generation": "330",
    "chassisCodes": [
      "330"
    ],
    "years": "1975-1979",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-nissan-cedric-430-19791983",
    "sourceModelId": "nissan-cedric",
    "make": "Nissan",
    "model": "Cedric",
    "generation": "430",
    "chassisCodes": [
      "430"
    ],
    "years": "1979-1983",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-nissan-cedric-y30-19831987",
    "sourceModelId": "nissan-cedric",
    "make": "Nissan",
    "model": "Cedric",
    "generation": "Y30",
    "chassisCodes": [
      "Y30"
    ],
    "years": "1983-1987",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-nissan-cedric-y31-19872014",
    "sourceModelId": "nissan-cedric",
    "make": "Nissan",
    "model": "Cedric",
    "generation": "Y31",
    "chassisCodes": [
      "Y31"
    ],
    "years": "1987-2014",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-nissan-cedric-y32-19911995",
    "sourceModelId": "nissan-cedric",
    "make": "Nissan",
    "model": "Cedric",
    "generation": "Y32",
    "chassisCodes": [
      "Y32"
    ],
    "years": "1991-1995",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-nissan-cedric-y33-19951999",
    "sourceModelId": "nissan-cedric",
    "make": "Nissan",
    "model": "Cedric",
    "generation": "Y33",
    "chassisCodes": [
      "Y33"
    ],
    "years": "1995-1999",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-nissan-cedric-y34-19992004",
    "sourceModelId": "nissan-cedric",
    "make": "Nissan",
    "model": "Cedric",
    "generation": "Y34",
    "chassisCodes": [
      "Y34"
    ],
    "years": "1999-2004",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-nissan-cefiro-a31-19881994",
    "sourceModelId": "nissan-cefiro",
    "make": "Nissan",
    "model": "Cefiro",
    "generation": "A31",
    "chassisCodes": [
      "A31"
    ],
    "years": "1988-1994",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-nissan-cefiro-a32-19942000",
    "sourceModelId": "nissan-cefiro",
    "make": "Nissan",
    "model": "Cefiro",
    "generation": "A32",
    "chassisCodes": [
      "A32"
    ],
    "years": "1994-2000",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-nissan-cefiro-a33-19982003",
    "sourceModelId": "nissan-cefiro",
    "make": "Nissan",
    "model": "Cefiro",
    "generation": "A33",
    "chassisCodes": [
      "A33"
    ],
    "years": "1998-2003",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-nissan-cefiro-j31-20032008",
    "sourceModelId": "nissan-cefiro",
    "make": "Nissan",
    "model": "Cefiro",
    "generation": "J31",
    "chassisCodes": [
      "J31"
    ],
    "years": "2003-2008",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-nissan-cube-z10-19982002",
    "sourceModelId": "nissan-cube",
    "make": "Nissan",
    "model": "Cube",
    "generation": "Z10",
    "chassisCodes": [
      "Z10"
    ],
    "years": "1998-2002",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-nissan-cube-z11-20022008",
    "sourceModelId": "nissan-cube",
    "make": "Nissan",
    "model": "Cube",
    "generation": "Z11",
    "chassisCodes": [
      "Z11"
    ],
    "years": "2002-2008",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-nissan-cube-z12-20082019",
    "sourceModelId": "nissan-cube",
    "make": "Nissan",
    "model": "Cube",
    "generation": "Z12",
    "chassisCodes": [
      "Z12"
    ],
    "years": "2008-2019",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-nissan-elgrand-e50-19972002",
    "sourceModelId": "nissan-elgrand",
    "make": "Nissan",
    "model": "Elgrand",
    "generation": "E50",
    "chassisCodes": [
      "E50"
    ],
    "years": "1997-2002",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-nissan-elgrand-e51-20022010",
    "sourceModelId": "nissan-elgrand",
    "make": "Nissan",
    "model": "Elgrand",
    "generation": "E51",
    "chassisCodes": [
      "E51"
    ],
    "years": "2002-2010",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-nissan-elgrand-e52-20102026",
    "sourceModelId": "nissan-elgrand",
    "make": "Nissan",
    "model": "Elgrand",
    "generation": "E52",
    "chassisCodes": [
      "E52"
    ],
    "years": "2010-2026",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-nissan-fairlady-z-s30-19691978",
    "sourceModelId": "nissan-fairlady-z",
    "make": "Nissan",
    "model": "Fairlady Z",
    "generation": "S30",
    "chassisCodes": [
      "S30"
    ],
    "years": "1969-1978",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-nissan-fairlady-z-z31-19831989",
    "sourceModelId": "nissan-fairlady-z",
    "make": "Nissan",
    "model": "Fairlady Z",
    "generation": "Z31",
    "chassisCodes": [
      "Z31"
    ],
    "years": "1983-1989",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-nissan-fairlady-z-z32-19892000",
    "sourceModelId": "nissan-fairlady-z",
    "make": "Nissan",
    "model": "Fairlady Z",
    "generation": "Z32",
    "chassisCodes": [
      "Z32"
    ],
    "years": "1989-2000",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-nissan-fairlady-z-z33-20022008",
    "sourceModelId": "nissan-fairlady-z",
    "make": "Nissan",
    "model": "Fairlady Z",
    "generation": "Z33",
    "chassisCodes": [
      "Z33"
    ],
    "years": "2002-2008",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-nissan-fairlady-z-z34-20082021",
    "sourceModelId": "nissan-fairlady-z",
    "make": "Nissan",
    "model": "Fairlady Z",
    "generation": "Z34",
    "chassisCodes": [
      "Z34"
    ],
    "years": "2008-2021",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-nissan-fairlady-z-rz34-2022",
    "sourceModelId": "nissan-fairlady-z",
    "make": "Nissan",
    "model": "Fairlady Z",
    "generation": "RZ34",
    "chassisCodes": [
      "RZ34"
    ],
    "years": "2022-н.в.",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-nissan-figaro-fk10-19911992",
    "sourceModelId": "nissan-figaro",
    "make": "Nissan",
    "model": "Figaro",
    "generation": "FK10",
    "chassisCodes": [
      "FK10"
    ],
    "years": "1991-1992",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-nissan-fuga-y50-20042009",
    "sourceModelId": "nissan-fuga",
    "make": "Nissan",
    "model": "Fuga",
    "generation": "Y50",
    "chassisCodes": [
      "Y50"
    ],
    "years": "2004-2009",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-nissan-fuga-y51-20092022",
    "sourceModelId": "nissan-fuga",
    "make": "Nissan",
    "model": "Fuga",
    "generation": "Y51",
    "chassisCodes": [
      "Y51"
    ],
    "years": "2009-2022",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-nissan-gt-r-r35-20072025",
    "sourceModelId": "nissan-gt-r",
    "make": "Nissan",
    "model": "GT-R",
    "generation": "R35",
    "chassisCodes": [
      "R35"
    ],
    "years": "2007-2025",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-nissan-juke-f15-yf15-20102020",
    "sourceModelId": "nissan-juke",
    "make": "Nissan",
    "model": "Juke",
    "generation": "F15, YF15",
    "chassisCodes": [
      "F15",
      "YF15"
    ],
    "years": "2010-2020",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-nissan-juke-f16-2019",
    "sourceModelId": "nissan-juke",
    "make": "Nissan",
    "model": "Juke",
    "generation": "F16",
    "chassisCodes": [
      "F16"
    ],
    "years": "2019-н.в.",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-nissan-kicks-p15-2016",
    "sourceModelId": "nissan-kicks",
    "make": "Nissan",
    "model": "Kicks",
    "generation": "P15",
    "chassisCodes": [
      "P15"
    ],
    "years": "2016-н.в.",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-nissan-kicks-p16-2024",
    "sourceModelId": "nissan-kicks",
    "make": "Nissan",
    "model": "Kicks",
    "generation": "P16",
    "chassisCodes": [
      "P16"
    ],
    "years": "2024-н.в.",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-nissan-murano-z50-20022009",
    "sourceModelId": "nissan-murano",
    "make": "Nissan",
    "model": "Murano",
    "generation": "Z50",
    "chassisCodes": [
      "Z50"
    ],
    "years": "2002-2009",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-nissan-murano-z51-20072016",
    "sourceModelId": "nissan-murano",
    "make": "Nissan",
    "model": "Murano",
    "generation": "Z51",
    "chassisCodes": [
      "Z51"
    ],
    "years": "2007-2016",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-nissan-murano-z52-20142024",
    "sourceModelId": "nissan-murano",
    "make": "Nissan",
    "model": "Murano",
    "generation": "Z52",
    "chassisCodes": [
      "Z52"
    ],
    "years": "2014-2024",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-nissan-note-e11-20052013",
    "sourceModelId": "nissan-note",
    "make": "Nissan",
    "model": "Note",
    "generation": "E11",
    "chassisCodes": [
      "E11"
    ],
    "years": "2005-2013",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-nissan-note-e12-20122020",
    "sourceModelId": "nissan-note",
    "make": "Nissan",
    "model": "Note",
    "generation": "E12",
    "chassisCodes": [
      "E12"
    ],
    "years": "2012-2020",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-nissan-note-e13-2020",
    "sourceModelId": "nissan-note",
    "make": "Nissan",
    "model": "Note",
    "generation": "E13",
    "chassisCodes": [
      "E13"
    ],
    "years": "2020-н.в.",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-nissan-pathfinder-wd21-19851995",
    "sourceModelId": "nissan-pathfinder",
    "make": "Nissan",
    "model": "Pathfinder",
    "generation": "WD21",
    "chassisCodes": [
      "WD21"
    ],
    "years": "1985-1995",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-nissan-pathfinder-r50-19952004",
    "sourceModelId": "nissan-pathfinder",
    "make": "Nissan",
    "model": "Pathfinder",
    "generation": "R50",
    "chassisCodes": [
      "R50"
    ],
    "years": "1995-2004",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-nissan-pathfinder-r51-20042014",
    "sourceModelId": "nissan-pathfinder",
    "make": "Nissan",
    "model": "Pathfinder",
    "generation": "R51",
    "chassisCodes": [
      "R51"
    ],
    "years": "2004-2014",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-nissan-pathfinder-r52-20122021",
    "sourceModelId": "nissan-pathfinder",
    "make": "Nissan",
    "model": "Pathfinder",
    "generation": "R52",
    "chassisCodes": [
      "R52"
    ],
    "years": "2012-2021",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-nissan-pathfinder-r53-2021",
    "sourceModelId": "nissan-pathfinder",
    "make": "Nissan",
    "model": "Pathfinder",
    "generation": "R53",
    "chassisCodes": [
      "R53"
    ],
    "years": "2021-н.в.",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-nissan-patrol-60-19601984",
    "sourceModelId": "nissan-patrol",
    "make": "Nissan",
    "model": "Patrol",
    "generation": "60",
    "chassisCodes": [
      "60"
    ],
    "years": "1960-1984",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-nissan-patrol-k160-19791994",
    "sourceModelId": "nissan-patrol",
    "make": "Nissan",
    "model": "Patrol",
    "generation": "K160",
    "chassisCodes": [
      "K160"
    ],
    "years": "1979-1994",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-nissan-patrol-y60-19871997",
    "sourceModelId": "nissan-patrol",
    "make": "Nissan",
    "model": "Patrol",
    "generation": "Y60",
    "chassisCodes": [
      "Y60"
    ],
    "years": "1987-1997",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-nissan-patrol-y61-19972024",
    "sourceModelId": "nissan-patrol",
    "make": "Nissan",
    "model": "Patrol",
    "generation": "Y61",
    "chassisCodes": [
      "Y61"
    ],
    "years": "1997-2024",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-nissan-patrol-y62-20102024",
    "sourceModelId": "nissan-patrol",
    "make": "Nissan",
    "model": "Patrol",
    "generation": "Y62",
    "chassisCodes": [
      "Y62"
    ],
    "years": "2010-2024",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-nissan-patrol-y63-2024",
    "sourceModelId": "nissan-patrol",
    "make": "Nissan",
    "model": "Patrol",
    "generation": "Y63",
    "chassisCodes": [
      "Y63"
    ],
    "years": "2024-н.в.",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-nissan-qashqai-j10-20062013",
    "sourceModelId": "nissan-qashqai",
    "make": "Nissan",
    "model": "Qashqai",
    "generation": "J10",
    "chassisCodes": [
      "J10"
    ],
    "years": "2006-2013",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-nissan-qashqai-j11-20132021",
    "sourceModelId": "nissan-qashqai",
    "make": "Nissan",
    "model": "Qashqai",
    "generation": "J11",
    "chassisCodes": [
      "J11"
    ],
    "years": "2013-2021",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-nissan-qashqai-j12-2021",
    "sourceModelId": "nissan-qashqai",
    "make": "Nissan",
    "model": "Qashqai",
    "generation": "J12",
    "chassisCodes": [
      "J12"
    ],
    "years": "2021-н.в.",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-nissan-silvia-s10-19751979",
    "sourceModelId": "nissan-silvia",
    "make": "Nissan",
    "model": "Silvia",
    "generation": "S10",
    "chassisCodes": [
      "S10"
    ],
    "years": "1975-1979",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-nissan-silvia-s12-19831988",
    "sourceModelId": "nissan-silvia",
    "make": "Nissan",
    "model": "Silvia",
    "generation": "S12",
    "chassisCodes": [
      "S12"
    ],
    "years": "1983-1988",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-nissan-silvia-s13-19881993",
    "sourceModelId": "nissan-silvia",
    "make": "Nissan",
    "model": "Silvia",
    "generation": "S13",
    "chassisCodes": [
      "S13"
    ],
    "years": "1988-1993",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-nissan-silvia-s14-19931998",
    "sourceModelId": "nissan-silvia",
    "make": "Nissan",
    "model": "Silvia",
    "generation": "S14",
    "chassisCodes": [
      "S14"
    ],
    "years": "1993-1998",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-nissan-silvia-s15-19992002",
    "sourceModelId": "nissan-silvia",
    "make": "Nissan",
    "model": "Silvia",
    "generation": "S15",
    "chassisCodes": [
      "S15"
    ],
    "years": "1999-2002",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-nissan-skyline-r32-19891994",
    "sourceModelId": "nissan-skyline",
    "make": "Nissan",
    "model": "Skyline",
    "generation": "R32",
    "chassisCodes": [
      "R32"
    ],
    "years": "1989-1994",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-nissan-skyline-r33-19931998",
    "sourceModelId": "nissan-skyline",
    "make": "Nissan",
    "model": "Skyline",
    "generation": "R33",
    "chassisCodes": [
      "R33"
    ],
    "years": "1993-1998",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-nissan-skyline-r34-19982002",
    "sourceModelId": "nissan-skyline",
    "make": "Nissan",
    "model": "Skyline",
    "generation": "R34",
    "chassisCodes": [
      "R34"
    ],
    "years": "1998-2002",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-nissan-skyline-v35-20012007",
    "sourceModelId": "nissan-skyline",
    "make": "Nissan",
    "model": "Skyline",
    "generation": "V35",
    "chassisCodes": [
      "V35"
    ],
    "years": "2001-2007",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-nissan-skyline-v36-20062014",
    "sourceModelId": "nissan-skyline",
    "make": "Nissan",
    "model": "Skyline",
    "generation": "V36",
    "chassisCodes": [
      "V36"
    ],
    "years": "2006-2014",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-nissan-skyline-v37-2014",
    "sourceModelId": "nissan-skyline",
    "make": "Nissan",
    "model": "Skyline",
    "generation": "V37",
    "chassisCodes": [
      "V37"
    ],
    "years": "2014-н.в.",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-nissan-stagea-wc34-19962001",
    "sourceModelId": "nissan-stagea",
    "make": "Nissan",
    "model": "Stagea",
    "generation": "WC34",
    "chassisCodes": [
      "WC34"
    ],
    "years": "1996-2001",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-nissan-stagea-m35-20012007",
    "sourceModelId": "nissan-stagea",
    "make": "Nissan",
    "model": "Stagea",
    "generation": "M35",
    "chassisCodes": [
      "M35"
    ],
    "years": "2001-2007",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-nissan-x-trail-t30-20002007",
    "sourceModelId": "nissan-x-trail",
    "make": "Nissan",
    "model": "X-Trail",
    "generation": "T30",
    "chassisCodes": [
      "T30"
    ],
    "years": "2000-2007",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-nissan-x-trail-t31-20072014",
    "sourceModelId": "nissan-x-trail",
    "make": "Nissan",
    "model": "X-Trail",
    "generation": "T31",
    "chassisCodes": [
      "T31"
    ],
    "years": "2007-2014",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-nissan-x-trail-t32-20132022",
    "sourceModelId": "nissan-x-trail",
    "make": "Nissan",
    "model": "X-Trail",
    "generation": "T32",
    "chassisCodes": [
      "T32"
    ],
    "years": "2013-2022",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-nissan-x-trail-t33-2021",
    "sourceModelId": "nissan-x-trail",
    "make": "Nissan",
    "model": "X-Trail",
    "generation": "T33",
    "chassisCodes": [
      "T33"
    ],
    "years": "2021-н.в.",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-daihatsu-boon-m700-20162023",
    "sourceModelId": "daihatsu-boon",
    "make": "Daihatsu",
    "model": "Boon",
    "generation": "M700",
    "chassisCodes": [
      "M700"
    ],
    "years": "2016-2023",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-daihatsu-cast--20152023",
    "sourceModelId": "daihatsu-cast",
    "make": "Daihatsu",
    "model": "Cast",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "2015-2023",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-daihatsu-charade-g100-19871992",
    "sourceModelId": "daihatsu-charade",
    "make": "Daihatsu",
    "model": "Charade",
    "generation": "G100",
    "chassisCodes": [
      "G100"
    ],
    "years": "1987-1992",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-daihatsu-charade-g200-19932000",
    "sourceModelId": "daihatsu-charade",
    "make": "Daihatsu",
    "model": "Charade",
    "generation": "G200",
    "chassisCodes": [
      "G200"
    ],
    "years": "1993-2000",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-daihatsu-charade-p90-20112013",
    "sourceModelId": "daihatsu-charade",
    "make": "Daihatsu",
    "model": "Charade",
    "generation": "P90",
    "chassisCodes": [
      "P90"
    ],
    "years": "2011-2013",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-daihatsu-charmant-a35-a55-19811988",
    "sourceModelId": "daihatsu-charmant",
    "make": "Daihatsu",
    "model": "Charmant",
    "generation": "A35/A55",
    "chassisCodes": [
      "A35/A55"
    ],
    "years": "1981-1988",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-daihatsu-cuore-l276-20072012",
    "sourceModelId": "daihatsu-cuore",
    "make": "Daihatsu",
    "model": "Cuore",
    "generation": "L276",
    "chassisCodes": [
      "L276"
    ],
    "years": "2007-2012",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-daihatsu-cuore-l7-19992003",
    "sourceModelId": "daihatsu-cuore",
    "make": "Daihatsu",
    "model": "Cuore",
    "generation": "L7",
    "chassisCodes": [
      "L7"
    ],
    "years": "1999-2003",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-daihatsu-esse--20052011",
    "sourceModelId": "daihatsu-esse",
    "make": "Daihatsu",
    "model": "Esse",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "2005-2011",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-daihatsu-hijet-s100-s110-19941998",
    "sourceModelId": "daihatsu-hijet",
    "make": "Daihatsu",
    "model": "Hijet",
    "generation": "S100/S110",
    "chassisCodes": [
      "S100/S110"
    ],
    "years": "1994-1998",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-daihatsu-hijet-s200-s210-19992004",
    "sourceModelId": "daihatsu-hijet",
    "make": "Daihatsu",
    "model": "Hijet",
    "generation": "S200/S210",
    "chassisCodes": [
      "S200/S210"
    ],
    "years": "1999-2004",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-daihatsu-hijet-s320-s330-20042021",
    "sourceModelId": "daihatsu-hijet",
    "make": "Daihatsu",
    "model": "Hijet",
    "generation": "S320/S330",
    "chassisCodes": [
      "S320/S330"
    ],
    "years": "2004-2021",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-daihatsu-hijet-s700-s710-2021",
    "sourceModelId": "daihatsu-hijet",
    "make": "Daihatsu",
    "model": "Hijet",
    "generation": "S700/S710",
    "chassisCodes": [
      "S700/S710"
    ],
    "years": "2021-н.в.",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-daihatsu-hijet-s80-s81-19861993",
    "sourceModelId": "daihatsu-hijet",
    "make": "Daihatsu",
    "model": "Hijet",
    "generation": "S80/S81",
    "chassisCodes": [
      "S80/S81"
    ],
    "years": "1986-1993",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-daihatsu-materia--20072010",
    "sourceModelId": "daihatsu-materia",
    "make": "Daihatsu",
    "model": "Materia",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "2007-2010",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-daihatsu-mira-l200-19901994",
    "sourceModelId": "daihatsu-mira",
    "make": "Daihatsu",
    "model": "Mira",
    "generation": "L200",
    "chassisCodes": [
      "L200"
    ],
    "years": "1990-1994",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-daihatsu-mira-l250-20022006",
    "sourceModelId": "daihatsu-mira",
    "make": "Daihatsu",
    "model": "Mira",
    "generation": "L250",
    "chassisCodes": [
      "L250"
    ],
    "years": "2002-2006",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-daihatsu-mira-l275-20062018",
    "sourceModelId": "daihatsu-mira",
    "make": "Daihatsu",
    "model": "Mira",
    "generation": "L275",
    "chassisCodes": [
      "L275"
    ],
    "years": "2006-2018",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-daihatsu-mira-l500-19941998",
    "sourceModelId": "daihatsu-mira",
    "make": "Daihatsu",
    "model": "Mira",
    "generation": "L500",
    "chassisCodes": [
      "L500"
    ],
    "years": "1994-1998",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-daihatsu-mira-l55-19801985",
    "sourceModelId": "daihatsu-mira",
    "make": "Daihatsu",
    "model": "Mira",
    "generation": "L55",
    "chassisCodes": [
      "L55"
    ],
    "years": "1980-1985",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-daihatsu-mira-l70-71-19851990",
    "sourceModelId": "daihatsu-mira",
    "make": "Daihatsu",
    "model": "Mira",
    "generation": "L70/71",
    "chassisCodes": [
      "L70/71"
    ],
    "years": "1985-1990",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-daihatsu-mira-l700-19982002",
    "sourceModelId": "daihatsu-mira",
    "make": "Daihatsu",
    "model": "Mira",
    "generation": "L700",
    "chassisCodes": [
      "L700"
    ],
    "years": "1998-2002",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-daihatsu-mira-e-s--20112017",
    "sourceModelId": "daihatsu-mira-e-s",
    "make": "Daihatsu",
    "model": "Mira e:S",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "2011-2017",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-daihatsu-mira-e-s--2017",
    "sourceModelId": "daihatsu-mira-e-s",
    "make": "Daihatsu",
    "model": "Mira e:S",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "2017-н.в.",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-daihatsu-move--19951999",
    "sourceModelId": "daihatsu-move",
    "make": "Daihatsu",
    "model": "Move",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "1995-1999",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-daihatsu-move--19982002",
    "sourceModelId": "daihatsu-move",
    "make": "Daihatsu",
    "model": "Move",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "1998-2002",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-daihatsu-move--20022006",
    "sourceModelId": "daihatsu-move",
    "make": "Daihatsu",
    "model": "Move",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "2002-2006",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-daihatsu-move--20062010",
    "sourceModelId": "daihatsu-move",
    "make": "Daihatsu",
    "model": "Move",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "2006-2010",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-daihatsu-move--20102014",
    "sourceModelId": "daihatsu-move",
    "make": "Daihatsu",
    "model": "Move",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "2010-2014",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-daihatsu-move--20142023",
    "sourceModelId": "daihatsu-move",
    "make": "Daihatsu",
    "model": "Move",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "2014-2023",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-daihatsu-move--2025",
    "sourceModelId": "daihatsu-move",
    "make": "Daihatsu",
    "model": "Move",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "2025-н.в.",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-daihatsu-move-canbus--20162022",
    "sourceModelId": "daihatsu-move-canbus",
    "make": "Daihatsu",
    "model": "Move Canbus",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "2016-2022",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-daihatsu-move-canbus--2022",
    "sourceModelId": "daihatsu-move-canbus",
    "make": "Daihatsu",
    "model": "Move Canbus",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "2022-н.в.",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-daihatsu-move-conte--20082017",
    "sourceModelId": "daihatsu-move-conte",
    "make": "Daihatsu",
    "model": "Move Conte",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "2008-2017",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-daihatsu-rocky--19842002",
    "sourceModelId": "daihatsu-rocky",
    "make": "Daihatsu",
    "model": "Rocky",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "1984-2002",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-daihatsu-rocky--2019",
    "sourceModelId": "daihatsu-rocky",
    "make": "Daihatsu",
    "model": "Rocky",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "2019-н.в.",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-daihatsu-sirion-m100-19982004",
    "sourceModelId": "daihatsu-sirion",
    "make": "Daihatsu",
    "model": "Sirion",
    "generation": "M100",
    "chassisCodes": [
      "M100"
    ],
    "years": "1998-2004",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-daihatsu-sirion-m300-20042013",
    "sourceModelId": "daihatsu-sirion",
    "make": "Daihatsu",
    "model": "Sirion",
    "generation": "M300",
    "chassisCodes": [
      "M300"
    ],
    "years": "2004-2013",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-daihatsu-taft--2020",
    "sourceModelId": "daihatsu-taft",
    "make": "Daihatsu",
    "model": "Taft",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "2020-н.в.",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-daihatsu-tanto--20032007",
    "sourceModelId": "daihatsu-tanto",
    "make": "Daihatsu",
    "model": "Tanto",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "2003-2007",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-daihatsu-tanto--20072013",
    "sourceModelId": "daihatsu-tanto",
    "make": "Daihatsu",
    "model": "Tanto",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "2007-2013",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-daihatsu-tanto--20132019",
    "sourceModelId": "daihatsu-tanto",
    "make": "Daihatsu",
    "model": "Tanto",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "2013-2019",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-daihatsu-tanto--2019",
    "sourceModelId": "daihatsu-tanto",
    "make": "Daihatsu",
    "model": "Tanto",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "2019-н.в.",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-daihatsu-terios-j100-19972006",
    "sourceModelId": "daihatsu-terios",
    "make": "Daihatsu",
    "model": "Terios",
    "generation": "J100",
    "chassisCodes": [
      "J100"
    ],
    "years": "1997-2006",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-daihatsu-terios-j200-20062014",
    "sourceModelId": "daihatsu-terios",
    "make": "Daihatsu",
    "model": "Terios",
    "generation": "J200",
    "chassisCodes": [
      "J200"
    ],
    "years": "2006-2014",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-daihatsu-terios-kid--19982012",
    "sourceModelId": "daihatsu-terios-kid",
    "make": "Daihatsu",
    "model": "Terios Kid",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "1998-2012",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mazda-bongo--19661975",
    "sourceModelId": "mazda-bongo",
    "make": "Mazda",
    "model": "Bongo",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "1966-1975",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mazda-bongo-ba1-19771983",
    "sourceModelId": "mazda-bongo",
    "make": "Mazda",
    "model": "Bongo",
    "generation": "BA1",
    "chassisCodes": [
      "BA1"
    ],
    "years": "1977-1983",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mazda-bongo-brawny--19831999",
    "sourceModelId": "mazda-bongo-brawny",
    "make": "Mazda",
    "model": "Bongo Brawny",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "1983-1999",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mazda-bongo-brawny-sk-19992010",
    "sourceModelId": "mazda-bongo-brawny",
    "make": "Mazda",
    "model": "Bongo Brawny",
    "generation": "SK",
    "chassisCodes": [
      "SK"
    ],
    "years": "1999-2010",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mazda-bongo-friendee-sg-19952005",
    "sourceModelId": "mazda-bongo-friendee",
    "make": "Mazda",
    "model": "Bongo Friendee",
    "generation": "SG",
    "chassisCodes": [
      "SG"
    ],
    "years": "1995-2005",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mazda-bongo-sk-19992020",
    "sourceModelId": "mazda-bongo",
    "make": "Mazda",
    "model": "Bongo",
    "generation": "SK",
    "chassisCodes": [
      "SK"
    ],
    "years": "1999-2020",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mazda-cx-3-dk-20142026",
    "sourceModelId": "mazda-cx-3",
    "make": "Mazda",
    "model": "CX-3",
    "generation": "DK",
    "chassisCodes": [
      "DK"
    ],
    "years": "2014-2026",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mazda-cx-5-ke-20112017",
    "sourceModelId": "mazda-cx-5",
    "make": "Mazda",
    "model": "CX-5",
    "generation": "KE",
    "chassisCodes": [
      "KE"
    ],
    "years": "2011-2017",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mazda-cx-5-kf-2016",
    "sourceModelId": "mazda-cx-5",
    "make": "Mazda",
    "model": "CX-5",
    "generation": "KF",
    "chassisCodes": [
      "KF"
    ],
    "years": "2016-н.в.",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mazda-cx-5-ki-km-2025",
    "sourceModelId": "mazda-cx-5",
    "make": "Mazda",
    "model": "CX-5",
    "generation": "KI, KM",
    "chassisCodes": [
      "KI",
      "KM"
    ],
    "years": "2025-н.в.",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mazda-cx-7-er-20062012",
    "sourceModelId": "mazda-cx-7",
    "make": "Mazda",
    "model": "CX-7",
    "generation": "ER",
    "chassisCodes": [
      "ER"
    ],
    "years": "2006-2012",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mazda-cx-9-tb-20072015",
    "sourceModelId": "mazda-cx-9",
    "make": "Mazda",
    "model": "CX-9",
    "generation": "TB",
    "chassisCodes": [
      "TB"
    ],
    "years": "2007-2015",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mazda-cx-9-tc-2015",
    "sourceModelId": "mazda-cx-9",
    "make": "Mazda",
    "model": "CX-9",
    "generation": "TC",
    "chassisCodes": [
      "TC"
    ],
    "years": "2015-н.в.",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mazda-capella-cg-19941997",
    "sourceModelId": "mazda-capella",
    "make": "Mazda",
    "model": "Capella",
    "generation": "CG",
    "chassisCodes": [
      "CG"
    ],
    "years": "1994-1997",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mazda-capella-gc-19821987",
    "sourceModelId": "mazda-capella",
    "make": "Mazda",
    "model": "Capella",
    "generation": "GC",
    "chassisCodes": [
      "GC"
    ],
    "years": "1982-1987",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mazda-capella-gd-gv-19871997",
    "sourceModelId": "mazda-capella",
    "make": "Mazda",
    "model": "Capella",
    "generation": "GD, GV",
    "chassisCodes": [
      "GD",
      "GV"
    ],
    "years": "1987-1997",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mazda-capella-gf-gw-19972002",
    "sourceModelId": "mazda-capella",
    "make": "Mazda",
    "model": "Capella",
    "generation": "GF, GW",
    "chassisCodes": [
      "GF",
      "GW"
    ],
    "years": "1997-2002",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mazda-carol-aa5pa-aa6pa-19891995",
    "sourceModelId": "mazda-carol",
    "make": "Mazda",
    "model": "Carol",
    "generation": "AA5PA/AA6PA",
    "chassisCodes": [
      "AA5PA/AA6PA"
    ],
    "years": "1989-1995",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mazda-carol-hb12s-22s-19982004",
    "sourceModelId": "mazda-carol",
    "make": "Mazda",
    "model": "Carol",
    "generation": "HB12S/22S",
    "chassisCodes": [
      "HB12S/22S"
    ],
    "years": "1998-2004",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mazda-carol-hb24s-20042009",
    "sourceModelId": "mazda-carol",
    "make": "Mazda",
    "model": "Carol",
    "generation": "HB24S",
    "chassisCodes": [
      "HB24S"
    ],
    "years": "2004-2009",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mazda-carol-hb25s-35s-20092014",
    "sourceModelId": "mazda-carol",
    "make": "Mazda",
    "model": "Carol",
    "generation": "HB25S/35S",
    "chassisCodes": [
      "HB25S/35S"
    ],
    "years": "2009-2014",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mazda-carol-hb36s-20152021",
    "sourceModelId": "mazda-carol",
    "make": "Mazda",
    "model": "Carol",
    "generation": "HB36S",
    "chassisCodes": [
      "HB36S"
    ],
    "years": "2015-2021",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mazda-carol-hb37s-97s-2021",
    "sourceModelId": "mazda-carol",
    "make": "Mazda",
    "model": "Carol",
    "generation": "HB37S/97S",
    "chassisCodes": [
      "HB37S/97S"
    ],
    "years": "2021-н.в.",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mazda-cosmo-hb-19811990",
    "sourceModelId": "mazda-cosmo",
    "make": "Mazda",
    "model": "Cosmo",
    "generation": "HB",
    "chassisCodes": [
      "HB"
    ],
    "years": "1981-1990",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mazda-cronos-ge-19911995",
    "sourceModelId": "mazda-cronos",
    "make": "Mazda",
    "model": "Cronos",
    "generation": "GE",
    "chassisCodes": [
      "GE"
    ],
    "years": "1991-1995",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mazda-demio-dw-19962002",
    "sourceModelId": "mazda-demio",
    "make": "Mazda",
    "model": "Demio",
    "generation": "DW",
    "chassisCodes": [
      "DW"
    ],
    "years": "1996-2002",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mazda-demio-dy-20022007",
    "sourceModelId": "mazda-demio",
    "make": "Mazda",
    "model": "Demio",
    "generation": "DY",
    "chassisCodes": [
      "DY"
    ],
    "years": "2002-2007",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mazda-demio-de-20072014",
    "sourceModelId": "mazda-demio",
    "make": "Mazda",
    "model": "Demio",
    "generation": "DE",
    "chassisCodes": [
      "DE"
    ],
    "years": "2007-2014",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mazda-demio-dj-20142019",
    "sourceModelId": "mazda-demio",
    "make": "Mazda",
    "model": "Demio",
    "generation": "DJ",
    "chassisCodes": [
      "DJ"
    ],
    "years": "2014-2019",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mazda-familia-bd-19801985",
    "sourceModelId": "mazda-familia",
    "make": "Mazda",
    "model": "Familia",
    "generation": "BD",
    "chassisCodes": [
      "BD"
    ],
    "years": "1980-1985",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mazda-familia-bf-19851994",
    "sourceModelId": "mazda-familia",
    "make": "Mazda",
    "model": "Familia",
    "generation": "BF",
    "chassisCodes": [
      "BF"
    ],
    "years": "1985-1994",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mazda-familia-bg-19891996",
    "sourceModelId": "mazda-familia",
    "make": "Mazda",
    "model": "Familia",
    "generation": "BG",
    "chassisCodes": [
      "BG"
    ],
    "years": "1989-1996",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mazda-familia-bh-y10-19941999",
    "sourceModelId": "mazda-familia",
    "make": "Mazda",
    "model": "Familia",
    "generation": "BH, Y10",
    "chassisCodes": [
      "BH",
      "Y10"
    ],
    "years": "1994-1999",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mazda-familia-fa3-19731977",
    "sourceModelId": "mazda-familia",
    "make": "Mazda",
    "model": "Familia",
    "generation": "FA3",
    "chassisCodes": [
      "FA3"
    ],
    "years": "1973-1977",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mazda-familia-fa4-19771985",
    "sourceModelId": "mazda-familia",
    "make": "Mazda",
    "model": "Familia",
    "generation": "FA4",
    "chassisCodes": [
      "FA4"
    ],
    "years": "1977-1985",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mazda-familia-s-wagon-bj-19982004",
    "sourceModelId": "mazda-familia-s-wagon",
    "make": "Mazda",
    "model": "Familia S-Wagon",
    "generation": "BJ",
    "chassisCodes": [
      "BJ"
    ],
    "years": "1998-2004",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mazda-mpv-lv-19881999",
    "sourceModelId": "mazda-mpv",
    "make": "Mazda",
    "model": "MPV",
    "generation": "LV",
    "chassisCodes": [
      "LV"
    ],
    "years": "1988-1999",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mazda-mpv-lw-19992006",
    "sourceModelId": "mazda-mpv",
    "make": "Mazda",
    "model": "MPV",
    "generation": "LW",
    "chassisCodes": [
      "LW"
    ],
    "years": "1999-2006",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mazda-mpv-ly-20062016",
    "sourceModelId": "mazda-mpv",
    "make": "Mazda",
    "model": "MPV",
    "generation": "LY",
    "chassisCodes": [
      "LY"
    ],
    "years": "2006-2016",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mazda-mx-3-ec-19911998",
    "sourceModelId": "mazda-mx-3",
    "make": "Mazda",
    "model": "MX-3",
    "generation": "EC",
    "chassisCodes": [
      "EC"
    ],
    "years": "1991-1998",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mazda-mx-5-nb-19982005",
    "sourceModelId": "mazda-mx-5",
    "make": "Mazda",
    "model": "MX-5",
    "generation": "NB",
    "chassisCodes": [
      "NB"
    ],
    "years": "1998-2005",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mazda-mx-5-nc-20052015",
    "sourceModelId": "mazda-mx-5",
    "make": "Mazda",
    "model": "MX-5",
    "generation": "NC",
    "chassisCodes": [
      "NC"
    ],
    "years": "2005-2015",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mazda-mx-5-nd-2015",
    "sourceModelId": "mazda-mx-5",
    "make": "Mazda",
    "model": "MX-5",
    "generation": "ND",
    "chassisCodes": [
      "ND"
    ],
    "years": "2015-н.в.",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mazda-mx-6-ge-19921998",
    "sourceModelId": "mazda-mx-6",
    "make": "Mazda",
    "model": "MX-6",
    "generation": "GE",
    "chassisCodes": [
      "GE"
    ],
    "years": "1992-1998",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mazda-mazda2-dy-20022007",
    "sourceModelId": "mazda-mazda2",
    "make": "Mazda",
    "model": "Mazda2",
    "generation": "DY",
    "chassisCodes": [
      "DY"
    ],
    "years": "2002-2007",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mazda-mazda2-de-20072015",
    "sourceModelId": "mazda-mazda2",
    "make": "Mazda",
    "model": "Mazda2",
    "generation": "DE",
    "chassisCodes": [
      "DE"
    ],
    "years": "2007-2015",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mazda-mazda2-dj-2014",
    "sourceModelId": "mazda-mazda2",
    "make": "Mazda",
    "model": "Mazda2",
    "generation": "DJ",
    "chassisCodes": [
      "DJ"
    ],
    "years": "2014-н.в.",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mazda-mazda3-bk-20032009",
    "sourceModelId": "mazda-mazda3",
    "make": "Mazda",
    "model": "Mazda3",
    "generation": "BK",
    "chassisCodes": [
      "BK"
    ],
    "years": "2003-2009",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mazda-mazda3-bl-20082013",
    "sourceModelId": "mazda-mazda3",
    "make": "Mazda",
    "model": "Mazda3",
    "generation": "BL",
    "chassisCodes": [
      "BL"
    ],
    "years": "2008-2013",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mazda-mazda3-bm-20132019",
    "sourceModelId": "mazda-mazda3",
    "make": "Mazda",
    "model": "Mazda3",
    "generation": "BM",
    "chassisCodes": [
      "BM"
    ],
    "years": "2013-2019",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mazda-mazda3-bp-2018",
    "sourceModelId": "mazda-mazda3",
    "make": "Mazda",
    "model": "Mazda3",
    "generation": "BP",
    "chassisCodes": [
      "BP"
    ],
    "years": "2018-н.в.",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mazda-mazda3-mps-bk-20062009",
    "sourceModelId": "mazda-mazda3-mps",
    "make": "Mazda",
    "model": "Mazda3 MPS",
    "generation": "BK",
    "chassisCodes": [
      "BK"
    ],
    "years": "2006-2009",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mazda-mazda3-mps-bl-20092013",
    "sourceModelId": "mazda-mazda3-mps",
    "make": "Mazda",
    "model": "Mazda3 MPS",
    "generation": "BL",
    "chassisCodes": [
      "BL"
    ],
    "years": "2009-2013",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mazda-mazda5-cr-20042011",
    "sourceModelId": "mazda-mazda5",
    "make": "Mazda",
    "model": "Mazda5",
    "generation": "CR",
    "chassisCodes": [
      "CR"
    ],
    "years": "2004-2011",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mazda-mazda5-cw-20102015",
    "sourceModelId": "mazda-mazda5",
    "make": "Mazda",
    "model": "Mazda5",
    "generation": "CW",
    "chassisCodes": [
      "CW"
    ],
    "years": "2010-2015",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mazda-mazda6-gg-20022008",
    "sourceModelId": "mazda-mazda6",
    "make": "Mazda",
    "model": "Mazda6",
    "generation": "GG",
    "chassisCodes": [
      "GG"
    ],
    "years": "2002-2008",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mazda-mazda6-gh-20072012",
    "sourceModelId": "mazda-mazda6",
    "make": "Mazda",
    "model": "Mazda6",
    "generation": "GH",
    "chassisCodes": [
      "GH"
    ],
    "years": "2007-2012",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mazda-mazda6-gj-2012",
    "sourceModelId": "mazda-mazda6",
    "make": "Mazda",
    "model": "Mazda6",
    "generation": "GJ",
    "chassisCodes": [
      "GJ"
    ],
    "years": "2012-н.в.",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mazda-premacy-cp-19992005",
    "sourceModelId": "mazda-premacy",
    "make": "Mazda",
    "model": "Premacy",
    "generation": "CP",
    "chassisCodes": [
      "CP"
    ],
    "years": "1999-2005",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mazda-premacy-cr-20052010",
    "sourceModelId": "mazda-premacy",
    "make": "Mazda",
    "model": "Premacy",
    "generation": "CR",
    "chassisCodes": [
      "CR"
    ],
    "years": "2005-2010",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mazda-premacy-cw-20102018",
    "sourceModelId": "mazda-premacy",
    "make": "Mazda",
    "model": "Premacy",
    "generation": "CW",
    "chassisCodes": [
      "CW"
    ],
    "years": "2010-2018",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mitsubishi-fto--19942001",
    "sourceModelId": "mitsubishi-fto",
    "make": "Mitsubishi",
    "model": "FTO",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "1994-2001",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mitsubishi-gto--19902001",
    "sourceModelId": "mitsubishi-gto",
    "make": "Mitsubishi",
    "model": "GTO",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "1990-2001",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mitsubishi-galant--19761980",
    "sourceModelId": "mitsubishi-galant",
    "make": "Mitsubishi",
    "model": "Galant",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "1976-1980",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mitsubishi-galant--19801984",
    "sourceModelId": "mitsubishi-galant",
    "make": "Mitsubishi",
    "model": "Galant",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "1980-1984",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mitsubishi-galant--19831999",
    "sourceModelId": "mitsubishi-galant",
    "make": "Mitsubishi",
    "model": "Galant",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "1983-1999",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mitsubishi-galant--19871992",
    "sourceModelId": "mitsubishi-galant",
    "make": "Mitsubishi",
    "model": "Galant",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "1987-1992",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mitsubishi-galant--19921996",
    "sourceModelId": "mitsubishi-galant",
    "make": "Mitsubishi",
    "model": "Galant",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "1992-1996",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mitsubishi-galant--20032012",
    "sourceModelId": "mitsubishi-galant",
    "make": "Mitsubishi",
    "model": "Galant",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "2003-2012",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mitsubishi-galant-ea0-19962005",
    "sourceModelId": "mitsubishi-galant",
    "make": "Mitsubishi",
    "model": "Galant",
    "generation": "EA0",
    "chassisCodes": [
      "EA0"
    ],
    "years": "1996-2005",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mitsubishi-galant-fortis-cx-cy-20072015",
    "sourceModelId": "mitsubishi-galant-fortis",
    "make": "Mitsubishi",
    "model": "Galant Fortis",
    "generation": "CX, CY",
    "chassisCodes": [
      "CX",
      "CY"
    ],
    "years": "2007-2015",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mitsubishi-grandis--20032009",
    "sourceModelId": "mitsubishi-grandis",
    "make": "Mitsubishi",
    "model": "Grandis",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "2003-2009",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mitsubishi-l200-k00-k10-k20-k30-19861996",
    "sourceModelId": "mitsubishi-l200",
    "make": "Mitsubishi",
    "model": "L200",
    "generation": "K00/K10/K20/K30",
    "chassisCodes": [
      "K00/K10/K20/K30"
    ],
    "years": "1986-1996",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mitsubishi-l200-k50-k60-k70-19962006",
    "sourceModelId": "mitsubishi-l200",
    "make": "Mitsubishi",
    "model": "L200",
    "generation": "K50/K60/K70",
    "chassisCodes": [
      "K50/K60/K70"
    ],
    "years": "1996-2006",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mitsubishi-l200-ka-kb-20062016",
    "sourceModelId": "mitsubishi-l200",
    "make": "Mitsubishi",
    "model": "L200",
    "generation": "KA/KB",
    "chassisCodes": [
      "KA/KB"
    ],
    "years": "2006-2016",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mitsubishi-l200-kj-kk-kl-2015",
    "sourceModelId": "mitsubishi-l200",
    "make": "Mitsubishi",
    "model": "L200",
    "generation": "KJ/KK/KL",
    "chassisCodes": [
      "KJ/KK/KL"
    ],
    "years": "2015-н.в.",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mitsubishi-lancer-ca-19881991",
    "sourceModelId": "mitsubishi-lancer",
    "make": "Mitsubishi",
    "model": "Lancer",
    "generation": "CA",
    "chassisCodes": [
      "CA"
    ],
    "years": "1988-1991",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mitsubishi-lancer-cb-cd-19912001",
    "sourceModelId": "mitsubishi-lancer",
    "make": "Mitsubishi",
    "model": "Lancer",
    "generation": "CB, CD",
    "chassisCodes": [
      "CB",
      "CD"
    ],
    "years": "1991-2001",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mitsubishi-lancer-ck-cm-19952000",
    "sourceModelId": "mitsubishi-lancer",
    "make": "Mitsubishi",
    "model": "Lancer",
    "generation": "CK, CM",
    "chassisCodes": [
      "CK",
      "CM"
    ],
    "years": "1995-2000",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mitsubishi-lancer-cs-20002010",
    "sourceModelId": "mitsubishi-lancer",
    "make": "Mitsubishi",
    "model": "Lancer",
    "generation": "CS",
    "chassisCodes": [
      "CS"
    ],
    "years": "2000-2010",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mitsubishi-lancer-cy-20072017",
    "sourceModelId": "mitsubishi-lancer",
    "make": "Mitsubishi",
    "model": "Lancer",
    "generation": "CY",
    "chassisCodes": [
      "CY"
    ],
    "years": "2007-2017",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mitsubishi-lancer-cedia--20002003",
    "sourceModelId": "mitsubishi-lancer-cedia",
    "make": "Mitsubishi",
    "model": "Lancer Cedia",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "2000-2003",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mitsubishi-lancer-ex--20092017",
    "sourceModelId": "mitsubishi-lancer-ex",
    "make": "Mitsubishi",
    "model": "Lancer EX",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "2009-2017",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mitsubishi-lancer-evolution--19921993",
    "sourceModelId": "mitsubishi-lancer-evolution",
    "make": "Mitsubishi",
    "model": "Lancer Evolution",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "1992-1993",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mitsubishi-lancer-evolution--19951996",
    "sourceModelId": "mitsubishi-lancer-evolution",
    "make": "Mitsubishi",
    "model": "Lancer Evolution",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "1995-1996",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mitsubishi-lancer-evolution--19961997",
    "sourceModelId": "mitsubishi-lancer-evolution",
    "make": "Mitsubishi",
    "model": "Lancer Evolution",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "1996-1997",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mitsubishi-lancer-evolution--19981998",
    "sourceModelId": "mitsubishi-lancer-evolution",
    "make": "Mitsubishi",
    "model": "Lancer Evolution",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "1998-1998",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mitsubishi-lancer-evolution--19992001",
    "sourceModelId": "mitsubishi-lancer-evolution",
    "make": "Mitsubishi",
    "model": "Lancer Evolution",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "1999-2001",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mitsubishi-lancer-evolution--20012002",
    "sourceModelId": "mitsubishi-lancer-evolution",
    "make": "Mitsubishi",
    "model": "Lancer Evolution",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "2001-2002",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mitsubishi-lancer-evolution--20032006",
    "sourceModelId": "mitsubishi-lancer-evolution",
    "make": "Mitsubishi",
    "model": "Lancer Evolution",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "2003-2006",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mitsubishi-lancer-evolution--20052008",
    "sourceModelId": "mitsubishi-lancer-evolution",
    "make": "Mitsubishi",
    "model": "Lancer Evolution",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "2005-2008",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mitsubishi-lancer-evolution--20072017",
    "sourceModelId": "mitsubishi-lancer-evolution",
    "make": "Mitsubishi",
    "model": "Lancer Evolution",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "2007-2017",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mitsubishi-legnum--19962002",
    "sourceModelId": "mitsubishi-legnum",
    "make": "Mitsubishi",
    "model": "Legnum",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "1996-2002",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mitsubishi-libero--19922002",
    "sourceModelId": "mitsubishi-libero",
    "make": "Mitsubishi",
    "model": "Libero",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "1992-2002",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mitsubishi-minica--19891993",
    "sourceModelId": "mitsubishi-minica",
    "make": "Mitsubishi",
    "model": "Minica",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "1989-1993",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mitsubishi-minica--19931998",
    "sourceModelId": "mitsubishi-minica",
    "make": "Mitsubishi",
    "model": "Minica",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "1993-1998",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mitsubishi-minica--19982011",
    "sourceModelId": "mitsubishi-minica",
    "make": "Mitsubishi",
    "model": "Minica",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "1998-2011",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mitsubishi-minicab--19761984",
    "sourceModelId": "mitsubishi-minicab",
    "make": "Mitsubishi",
    "model": "Minicab",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "1976-1984",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mitsubishi-minicab--19841990",
    "sourceModelId": "mitsubishi-minicab",
    "make": "Mitsubishi",
    "model": "Minicab",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "1984-1990",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mitsubishi-minicab--19911999",
    "sourceModelId": "mitsubishi-minicab",
    "make": "Mitsubishi",
    "model": "Minicab",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "1991-1999",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mitsubishi-minicab--19992014",
    "sourceModelId": "mitsubishi-minicab",
    "make": "Mitsubishi",
    "model": "Minicab",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "1999-2014",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mitsubishi-mirage--19781983",
    "sourceModelId": "mitsubishi-mirage",
    "make": "Mitsubishi",
    "model": "Mirage",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "1978-1983",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mitsubishi-mirage--19831992",
    "sourceModelId": "mitsubishi-mirage",
    "make": "Mitsubishi",
    "model": "Mirage",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "1983-1992",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mitsubishi-mirage--19911995",
    "sourceModelId": "mitsubishi-mirage",
    "make": "Mitsubishi",
    "model": "Mirage",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "1991-1995",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mitsubishi-mirage--19952002",
    "sourceModelId": "mitsubishi-mirage",
    "make": "Mitsubishi",
    "model": "Mirage",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "1995-2002",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mitsubishi-mirage--2012",
    "sourceModelId": "mitsubishi-mirage",
    "make": "Mitsubishi",
    "model": "Mirage",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "2012-н.в.",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mitsubishi-outlander-cu0w-20022009",
    "sourceModelId": "mitsubishi-outlander",
    "make": "Mitsubishi",
    "model": "Outlander",
    "generation": "CU0W",
    "chassisCodes": [
      "CU0W"
    ],
    "years": "2002-2009",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mitsubishi-outlander-cw0w-20052012",
    "sourceModelId": "mitsubishi-outlander",
    "make": "Mitsubishi",
    "model": "Outlander",
    "generation": "CW0W",
    "chassisCodes": [
      "CW0W"
    ],
    "years": "2005-2012",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mitsubishi-outlander-gf0w-gg0w-20122022",
    "sourceModelId": "mitsubishi-outlander",
    "make": "Mitsubishi",
    "model": "Outlander",
    "generation": "GF0W, GG0W",
    "chassisCodes": [
      "GF0W",
      "GG0W"
    ],
    "years": "2012-2022",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mitsubishi-outlander-gn0w-2021",
    "sourceModelId": "mitsubishi-outlander",
    "make": "Mitsubishi",
    "model": "Outlander",
    "generation": "GN0W",
    "chassisCodes": [
      "GN0W"
    ],
    "years": "2021-н.в.",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mitsubishi-pajero-l040-19811990",
    "sourceModelId": "mitsubishi-pajero",
    "make": "Mitsubishi",
    "model": "Pajero",
    "generation": "L040",
    "chassisCodes": [
      "L040"
    ],
    "years": "1981-1990",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mitsubishi-pajero-mini--19941998",
    "sourceModelId": "mitsubishi-pajero-mini",
    "make": "Mitsubishi",
    "model": "Pajero Mini",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "1994-1998",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mitsubishi-pajero-mini--19982012",
    "sourceModelId": "mitsubishi-pajero-mini",
    "make": "Mitsubishi",
    "model": "Pajero Mini",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "1998-2012",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mitsubishi-pajero-pinin--19992005",
    "sourceModelId": "mitsubishi-pajero-pinin",
    "make": "Mitsubishi",
    "model": "Pajero Pinin",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "1999-2005",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mitsubishi-pajero-sport--19962009",
    "sourceModelId": "mitsubishi-pajero-sport",
    "make": "Mitsubishi",
    "model": "Pajero Sport",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "1996-2009",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mitsubishi-pajero-sport--20082017",
    "sourceModelId": "mitsubishi-pajero-sport",
    "make": "Mitsubishi",
    "model": "Pajero Sport",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "2008-2017",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mitsubishi-pajero-sport--2015",
    "sourceModelId": "mitsubishi-pajero-sport",
    "make": "Mitsubishi",
    "model": "Pajero Sport",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "2015-н.в.",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mitsubishi-pajero-v30-v40-v20-19912005",
    "sourceModelId": "mitsubishi-pajero",
    "make": "Mitsubishi",
    "model": "Pajero",
    "generation": "V30/V40, V20",
    "chassisCodes": [
      "V30/V40",
      "V20"
    ],
    "years": "1991-2005",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mitsubishi-pajero-v70-v60-19992006",
    "sourceModelId": "mitsubishi-pajero",
    "make": "Mitsubishi",
    "model": "Pajero",
    "generation": "V70, V60",
    "chassisCodes": [
      "V70",
      "V60"
    ],
    "years": "1999-2006",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mitsubishi-pajero-v90-v80-20062023",
    "sourceModelId": "mitsubishi-pajero",
    "make": "Mitsubishi",
    "model": "Pajero",
    "generation": "V90, V80",
    "chassisCodes": [
      "V90",
      "V80"
    ],
    "years": "2006-2023",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mitsubishi-pajero-io--19982007",
    "sourceModelId": "mitsubishi-pajero-io",
    "make": "Mitsubishi",
    "model": "Pajero iO",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "1998-2007",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mitsubishi-rvr--19911997",
    "sourceModelId": "mitsubishi-rvr",
    "make": "Mitsubishi",
    "model": "RVR",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "1991-1997",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mitsubishi-rvr--19972002",
    "sourceModelId": "mitsubishi-rvr",
    "make": "Mitsubishi",
    "model": "RVR",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "1997-2002",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mitsubishi-rvr--20102024",
    "sourceModelId": "mitsubishi-rvr",
    "make": "Mitsubishi",
    "model": "RVR",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "2010-2024",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mitsubishi-space-gear--19942007",
    "sourceModelId": "mitsubishi-space-gear",
    "make": "Mitsubishi",
    "model": "Space Gear",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "1994-2007",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mitsubishi-space-runner--19911999",
    "sourceModelId": "mitsubishi-space-runner",
    "make": "Mitsubishi",
    "model": "Space Runner",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "1991-1999",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mitsubishi-space-runner--19992002",
    "sourceModelId": "mitsubishi-space-runner",
    "make": "Mitsubishi",
    "model": "Space Runner",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "1999-2002",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mitsubishi-space-star--19982005",
    "sourceModelId": "mitsubishi-space-star",
    "make": "Mitsubishi",
    "model": "Space Star",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "1998-2005",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mitsubishi-space-star--2012",
    "sourceModelId": "mitsubishi-space-star",
    "make": "Mitsubishi",
    "model": "Space Star",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "2012-н.в.",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mitsubishi-i-miev-ha-20092021",
    "sourceModelId": "mitsubishi-i-miev",
    "make": "Mitsubishi",
    "model": "i-MiEV",
    "generation": "HA",
    "chassisCodes": [
      "HA"
    ],
    "years": "2009-2021",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-subaru-alcyone-ax-19851991",
    "sourceModelId": "subaru-alcyone",
    "make": "Subaru",
    "model": "Alcyone",
    "generation": "AX",
    "chassisCodes": [
      "AX"
    ],
    "years": "1985-1991",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-subaru-alcyone-cx-19911997",
    "sourceModelId": "subaru-alcyone",
    "make": "Subaru",
    "model": "Alcyone",
    "generation": "CX",
    "chassisCodes": [
      "CX"
    ],
    "years": "1991-1997",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-subaru-ascent-wm-2017",
    "sourceModelId": "subaru-ascent",
    "make": "Subaru",
    "model": "Ascent",
    "generation": "WM",
    "chassisCodes": [
      "WM"
    ],
    "years": "2017-н.в.",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-subaru-b9-tribeca-wx-w10-20042008",
    "sourceModelId": "subaru-b9-tribeca",
    "make": "Subaru",
    "model": "B9 Tribeca",
    "generation": "WX/W10",
    "chassisCodes": [
      "WX/W10"
    ],
    "years": "2004-2008",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-subaru-brz-zc-z10-zc6-20122021",
    "sourceModelId": "subaru-brz",
    "make": "Subaru",
    "model": "BRZ",
    "generation": "ZC/Z10, ZC6",
    "chassisCodes": [
      "ZC/Z10",
      "ZC6"
    ],
    "years": "2012-2021",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-subaru-brz-zd8-2021",
    "sourceModelId": "subaru-brz",
    "make": "Subaru",
    "model": "BRZ",
    "generation": "ZD8",
    "chassisCodes": [
      "ZD8"
    ],
    "years": "2021-н.в.",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-subaru-baja-bt-b12-20022006",
    "sourceModelId": "subaru-baja",
    "make": "Subaru",
    "model": "Baja",
    "generation": "BT/B12",
    "chassisCodes": [
      "BT/B12"
    ],
    "years": "2002-2006",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-subaru-crosstrek-gp-20122017",
    "sourceModelId": "subaru-crosstrek",
    "make": "Subaru",
    "model": "Crosstrek",
    "generation": "GP",
    "chassisCodes": [
      "GP"
    ],
    "years": "2012-2017",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-subaru-crosstrek-gt-20172023",
    "sourceModelId": "subaru-crosstrek",
    "make": "Subaru",
    "model": "Crosstrek",
    "generation": "GT",
    "chassisCodes": [
      "GT"
    ],
    "years": "2017-2023",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-subaru-crosstrek-gu-2022",
    "sourceModelId": "subaru-crosstrek",
    "make": "Subaru",
    "model": "Crosstrek",
    "generation": "GU",
    "chassisCodes": [
      "GU"
    ],
    "years": "2022-н.в.",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-subaru-exiga-ya-y10-20082015",
    "sourceModelId": "subaru-exiga",
    "make": "Subaru",
    "model": "Exiga",
    "generation": "YA/Y10",
    "chassisCodes": [
      "YA/Y10"
    ],
    "years": "2008-2015",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-subaru-forester-sf-s10-19972002",
    "sourceModelId": "subaru-forester",
    "make": "Subaru",
    "model": "Forester",
    "generation": "SF/S10",
    "chassisCodes": [
      "SF/S10"
    ],
    "years": "1997-2002",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-subaru-forester-sg-s11-20022008",
    "sourceModelId": "subaru-forester",
    "make": "Subaru",
    "model": "Forester",
    "generation": "SG/S11",
    "chassisCodes": [
      "SG/S11"
    ],
    "years": "2002-2008",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-subaru-forester-sh-s12-20072013",
    "sourceModelId": "subaru-forester",
    "make": "Subaru",
    "model": "Forester",
    "generation": "SH/S12",
    "chassisCodes": [
      "SH/S12"
    ],
    "years": "2007-2013",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-subaru-forester-sj-s13-20122019",
    "sourceModelId": "subaru-forester",
    "make": "Subaru",
    "model": "Forester",
    "generation": "SJ/S13",
    "chassisCodes": [
      "SJ/S13"
    ],
    "years": "2012-2019",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-subaru-forester-sk-s14-2018",
    "sourceModelId": "subaru-forester",
    "make": "Subaru",
    "model": "Forester",
    "generation": "SK/S14",
    "chassisCodes": [
      "SK/S14"
    ],
    "years": "2018-н.в.",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-subaru-impreza--2022",
    "sourceModelId": "subaru-impreza",
    "make": "Subaru",
    "model": "Impreza",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "2022-н.в.",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-subaru-impreza-gc-g10-gm-gc-gf-gf-g10-19922000",
    "sourceModelId": "subaru-impreza",
    "make": "Subaru",
    "model": "Impreza",
    "generation": "GC/G10, GM, GC, GF, GF/G10",
    "chassisCodes": [
      "GC/G10",
      "GM",
      "GC",
      "GF",
      "GF/G10"
    ],
    "years": "1992-2000",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-subaru-impreza-gd-gd-g11-gg-gg-g11-20002007",
    "sourceModelId": "subaru-impreza",
    "make": "Subaru",
    "model": "Impreza",
    "generation": "GD, GD/G11, GG, GG/G11",
    "chassisCodes": [
      "GD",
      "GD/G11",
      "GG",
      "GG/G11"
    ],
    "years": "2000-2007",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-subaru-impreza-ge-gv-g12-g22-gh-gr-g12-g22-20072011",
    "sourceModelId": "subaru-impreza",
    "make": "Subaru",
    "model": "Impreza",
    "generation": "GE, GV/G12/G22, GH, GR/G12/G22",
    "chassisCodes": [
      "GE",
      "GV/G12/G22",
      "GH",
      "GR/G12/G22"
    ],
    "years": "2007-2011",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-subaru-impreza-gk-gt-gk-g14-2016",
    "sourceModelId": "subaru-impreza",
    "make": "Subaru",
    "model": "Impreza",
    "generation": "GK, GT, GK/G14",
    "chassisCodes": [
      "GK",
      "GT",
      "GK/G14"
    ],
    "years": "2016-н.в.",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-subaru-impreza-gp-gp-g23-gj-gj-g13-20112017",
    "sourceModelId": "subaru-impreza",
    "make": "Subaru",
    "model": "Impreza",
    "generation": "GP, GP/G23, GJ, GJ/G13",
    "chassisCodes": [
      "GP",
      "GP/G23",
      "GJ",
      "GJ/G13"
    ],
    "years": "2011-2017",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-subaru-impreza-wrx-gd-g11-gg-g11-20002007",
    "sourceModelId": "subaru-impreza-wrx",
    "make": "Subaru",
    "model": "Impreza WRX",
    "generation": "GD/G11, GG/G11",
    "chassisCodes": [
      "GD/G11",
      "GG/G11"
    ],
    "years": "2000-2007",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-subaru-impreza-wrx-gf-g10-gc-g10-19922000",
    "sourceModelId": "subaru-impreza-wrx",
    "make": "Subaru",
    "model": "Impreza WRX",
    "generation": "GF/G10, GC/G10",
    "chassisCodes": [
      "GF/G10",
      "GC/G10"
    ],
    "years": "1992-2000",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-subaru-impreza-wrx-gh-gr-g12-g22-ge-gv-g12-g22-20072014",
    "sourceModelId": "subaru-impreza-wrx",
    "make": "Subaru",
    "model": "Impreza WRX",
    "generation": "GH, GR/G12/G22, GE, GV/G12/G22",
    "chassisCodes": [
      "GH",
      "GR/G12/G22",
      "GE",
      "GV/G12/G22"
    ],
    "years": "2007-2014",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-subaru-impreza-wrx-sti-gc-g10-gf-g10-19942000",
    "sourceModelId": "subaru-impreza-wrx-sti",
    "make": "Subaru",
    "model": "Impreza WRX STI",
    "generation": "GC/G10, GF/G10",
    "chassisCodes": [
      "GC/G10",
      "GF/G10"
    ],
    "years": "1994-2000",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-subaru-impreza-wrx-sti-gd-g11-gg-g11-20002007",
    "sourceModelId": "subaru-impreza-wrx-sti",
    "make": "Subaru",
    "model": "Impreza WRX STI",
    "generation": "GD/G11, GG/G11",
    "chassisCodes": [
      "GD/G11",
      "GG/G11"
    ],
    "years": "2000-2007",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-subaru-impreza-wrx-sti-gh-gr-g12-g22-ge-gv-g12-g22-20072014",
    "sourceModelId": "subaru-impreza-wrx-sti",
    "make": "Subaru",
    "model": "Impreza WRX STI",
    "generation": "GH, GR/G12/G22, GE, GV/G12/G22",
    "chassisCodes": [
      "GH",
      "GR/G12/G22",
      "GE",
      "GV/G12/G22"
    ],
    "years": "2007-2014",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-subaru-impreza-wrx-sti-va-v10-20142021",
    "sourceModelId": "subaru-impreza-wrx-sti",
    "make": "Subaru",
    "model": "Impreza WRX STI",
    "generation": "VA/V10",
    "chassisCodes": [
      "VA/V10"
    ],
    "years": "2014-2021",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-subaru-legacy-b4-be-19982003",
    "sourceModelId": "subaru-legacy-b4",
    "make": "Subaru",
    "model": "Legacy B4",
    "generation": "BE",
    "chassisCodes": [
      "BE"
    ],
    "years": "1998-2003",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-subaru-legacy-b4-bl-20032009",
    "sourceModelId": "subaru-legacy-b4",
    "make": "Subaru",
    "model": "Legacy B4",
    "generation": "BL",
    "chassisCodes": [
      "BL"
    ],
    "years": "2003-2009",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-subaru-legacy-b4-bm-20092014",
    "sourceModelId": "subaru-legacy-b4",
    "make": "Subaru",
    "model": "Legacy B4",
    "generation": "BM",
    "chassisCodes": [
      "BM"
    ],
    "years": "2009-2014",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-subaru-legacy-b4-bn-20142020",
    "sourceModelId": "subaru-legacy-b4",
    "make": "Subaru",
    "model": "Legacy B4",
    "generation": "BN",
    "chassisCodes": [
      "BN"
    ],
    "years": "2014-2020",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-subaru-legacy-bc-b10-bj-bf-b10-19891994",
    "sourceModelId": "subaru-legacy",
    "make": "Subaru",
    "model": "Legacy",
    "generation": "BC/B10, BJ, BF/B10",
    "chassisCodes": [
      "BC/B10",
      "BJ",
      "BF/B10"
    ],
    "years": "1989-1994",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-subaru-legacy-bd-b11-bg-bk-b11-19931998",
    "sourceModelId": "subaru-legacy",
    "make": "Subaru",
    "model": "Legacy",
    "generation": "BD/B11, BG, BK/B11",
    "chassisCodes": [
      "BD/B11",
      "BG",
      "BK/B11"
    ],
    "years": "1993-1998",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-subaru-legacy-be-b12-bh-b12-19982003",
    "sourceModelId": "subaru-legacy",
    "make": "Subaru",
    "model": "Legacy",
    "generation": "BE/B12, BH/B12",
    "chassisCodes": [
      "BE/B12",
      "BH/B12"
    ],
    "years": "1998-2003",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-subaru-legacy-bl-b13-bp-b13-20032009",
    "sourceModelId": "subaru-legacy",
    "make": "Subaru",
    "model": "Legacy",
    "generation": "BL/B13, BP/B13",
    "chassisCodes": [
      "BL/B13",
      "BP/B13"
    ],
    "years": "2003-2009",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-subaru-legacy-bm-b14-br-b14-20092015",
    "sourceModelId": "subaru-legacy",
    "make": "Subaru",
    "model": "Legacy",
    "generation": "BM/B14, BR/B14",
    "chassisCodes": [
      "BM/B14",
      "BR/B14"
    ],
    "years": "2009-2015",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-subaru-legacy-bn-b15-20142021",
    "sourceModelId": "subaru-legacy",
    "make": "Subaru",
    "model": "Legacy",
    "generation": "BN/B15",
    "chassisCodes": [
      "BN/B15"
    ],
    "years": "2014-2021",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-subaru-outback-bg-bk-b11-19941999",
    "sourceModelId": "subaru-outback",
    "make": "Subaru",
    "model": "Outback",
    "generation": "BG, BK/B11",
    "chassisCodes": [
      "BG",
      "BK/B11"
    ],
    "years": "1994-1999",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-subaru-outback-bh-b12-19982004",
    "sourceModelId": "subaru-outback",
    "make": "Subaru",
    "model": "Outback",
    "generation": "BH/B12",
    "chassisCodes": [
      "BH/B12"
    ],
    "years": "1998-2004",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-subaru-outback-bp-20032009",
    "sourceModelId": "subaru-outback",
    "make": "Subaru",
    "model": "Outback",
    "generation": "BP",
    "chassisCodes": [
      "BP"
    ],
    "years": "2003-2009",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-subaru-outback-br-b14-20092015",
    "sourceModelId": "subaru-outback",
    "make": "Subaru",
    "model": "Outback",
    "generation": "BR/B14",
    "chassisCodes": [
      "BR/B14"
    ],
    "years": "2009-2015",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-subaru-outback-bs-b15-20142021",
    "sourceModelId": "subaru-outback",
    "make": "Subaru",
    "model": "Outback",
    "generation": "BS/B15",
    "chassisCodes": [
      "BS/B15"
    ],
    "years": "2014-2021",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-subaru-outback-bt-20192025",
    "sourceModelId": "subaru-outback",
    "make": "Subaru",
    "model": "Outback",
    "generation": "BT",
    "chassisCodes": [
      "BT"
    ],
    "years": "2019-2025",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-subaru-outback-bu-2025",
    "sourceModelId": "subaru-outback",
    "make": "Subaru",
    "model": "Outback",
    "generation": "BU",
    "chassisCodes": [
      "BU"
    ],
    "years": "2025-н.в.",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-subaru-pleo-ra-rv-r13-19982010",
    "sourceModelId": "subaru-pleo",
    "make": "Subaru",
    "model": "Pleo",
    "generation": "RA, RV/R13",
    "chassisCodes": [
      "RA",
      "RV/R13"
    ],
    "years": "1998-2010",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-subaru-r1-rj-r24-20042010",
    "sourceModelId": "subaru-r1",
    "make": "Subaru",
    "model": "R1",
    "generation": "RJ/R24",
    "chassisCodes": [
      "RJ/R24"
    ],
    "years": "2004-2010",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-subaru-r2-rc-r14-20032010",
    "sourceModelId": "subaru-r2",
    "make": "Subaru",
    "model": "R2",
    "generation": "RC/R14",
    "chassisCodes": [
      "RC/R14"
    ],
    "years": "2003-2010",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-subaru-wrx-va-v10-20142021",
    "sourceModelId": "subaru-wrx",
    "make": "Subaru",
    "model": "WRX",
    "generation": "VA/V10",
    "chassisCodes": [
      "VA/V10"
    ],
    "years": "2014-2021",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-subaru-wrx-vb-2021",
    "sourceModelId": "subaru-wrx",
    "make": "Subaru",
    "model": "WRX",
    "generation": "VB",
    "chassisCodes": [
      "VB"
    ],
    "years": "2021-н.в.",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-suzuki-landy-sc25-20072010",
    "sourceModelId": "suzuki-landy",
    "make": "Suzuki",
    "model": "Landy",
    "generation": "SC25",
    "chassisCodes": [
      "SC25"
    ],
    "years": "2007-2010",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-suzuki-landy-sc26-20102016",
    "sourceModelId": "suzuki-landy",
    "make": "Suzuki",
    "model": "Landy",
    "generation": "SC26",
    "chassisCodes": [
      "SC26"
    ],
    "years": "2010-2016",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-suzuki-landy-sc27-20162022",
    "sourceModelId": "suzuki-landy",
    "make": "Suzuki",
    "model": "Landy",
    "generation": "SC27",
    "chassisCodes": [
      "SC27"
    ],
    "years": "2016-2022",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-suzuki-liana--20012007",
    "sourceModelId": "suzuki-liana",
    "make": "Suzuki",
    "model": "Liana",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "2001-2007",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-suzuki-mr-wagon--20012005",
    "sourceModelId": "suzuki-mr-wagon",
    "make": "Suzuki",
    "model": "MR Wagon",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "2001-2005",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-suzuki-mr-wagon--20062010",
    "sourceModelId": "suzuki-mr-wagon",
    "make": "Suzuki",
    "model": "MR Wagon",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "2006-2010",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-suzuki-mr-wagon--20112016",
    "sourceModelId": "suzuki-mr-wagon",
    "make": "Suzuki",
    "model": "MR Wagon",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "2011-2016",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-suzuki-palette--20082013",
    "sourceModelId": "suzuki-palette",
    "make": "Suzuki",
    "model": "Palette",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "2008-2013",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-suzuki-s-presso--2019",
    "sourceModelId": "suzuki-s-presso",
    "make": "Suzuki",
    "model": "S-Presso",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "2019-н.в.",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-suzuki-sx4-sx4-new-20132021",
    "sourceModelId": "suzuki-sx4",
    "make": "Suzuki",
    "model": "SX4",
    "generation": "SX4 New",
    "chassisCodes": [
      "SX4 New"
    ],
    "years": "2013-2021",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-suzuki-sx4-sx4-sx4-classic-20062016",
    "sourceModelId": "suzuki-sx4",
    "make": "Suzuki",
    "model": "SX4",
    "generation": "SX4, SX4 Classic",
    "chassisCodes": [
      "SX4",
      "SX4 Classic"
    ],
    "years": "2006-2016",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-suzuki-samurai-sj-19852003",
    "sourceModelId": "suzuki-samurai",
    "make": "Suzuki",
    "model": "Samurai",
    "generation": "SJ",
    "chassisCodes": [
      "SJ"
    ],
    "years": "1985-2003",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-suzuki-sidekick--19881999",
    "sourceModelId": "suzuki-sidekick",
    "make": "Suzuki",
    "model": "Sidekick",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "1988-1999",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-suzuki-solio--20052010",
    "sourceModelId": "suzuki-solio",
    "make": "Suzuki",
    "model": "Solio",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "2005-2010",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-suzuki-solio--20102015",
    "sourceModelId": "suzuki-solio",
    "make": "Suzuki",
    "model": "Solio",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "2010-2015",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-suzuki-solio--20152020",
    "sourceModelId": "suzuki-solio",
    "make": "Suzuki",
    "model": "Solio",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "2015-2020",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-suzuki-solio--2020",
    "sourceModelId": "suzuki-solio",
    "make": "Suzuki",
    "model": "Solio",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "2020-н.в.",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-suzuki-spacia--20132017",
    "sourceModelId": "suzuki-spacia",
    "make": "Suzuki",
    "model": "Spacia",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "2013-2017",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-suzuki-spacia--2017",
    "sourceModelId": "suzuki-spacia",
    "make": "Suzuki",
    "model": "Spacia",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "2017-н.в.",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-suzuki-spacia--2023",
    "sourceModelId": "suzuki-spacia",
    "make": "Suzuki",
    "model": "Spacia",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "2023-н.в.",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-suzuki-splash--20072015",
    "sourceModelId": "suzuki-splash",
    "make": "Suzuki",
    "model": "Splash",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "2007-2015",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-suzuki-swift--19892004",
    "sourceModelId": "suzuki-swift",
    "make": "Suzuki",
    "model": "Swift",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "1989-2004",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-suzuki-swift-aa-19832005",
    "sourceModelId": "suzuki-swift",
    "make": "Suzuki",
    "model": "Swift",
    "generation": "AA",
    "chassisCodes": [
      "AA"
    ],
    "years": "1983-2005",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-suzuki-swift-fz-nz-azg-20102018",
    "sourceModelId": "suzuki-swift",
    "make": "Suzuki",
    "model": "Swift",
    "generation": "FZ/NZ, AZG",
    "chassisCodes": [
      "FZ/NZ",
      "AZG"
    ],
    "years": "2010-2018",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-suzuki-swift-rz-az-a2l-20162024",
    "sourceModelId": "suzuki-swift",
    "make": "Suzuki",
    "model": "Swift",
    "generation": "RZ/AZ, A2L",
    "chassisCodes": [
      "RZ/AZ",
      "A2L"
    ],
    "years": "2016-2024",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-suzuki-vitara--19881999",
    "sourceModelId": "suzuki-vitara",
    "make": "Suzuki",
    "model": "Vitara",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "1988-1999",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-suzuki-vitara--19992004",
    "sourceModelId": "suzuki-vitara",
    "make": "Suzuki",
    "model": "Vitara",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "1999-2004",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-suzuki-vitara--2014",
    "sourceModelId": "suzuki-vitara",
    "make": "Suzuki",
    "model": "Vitara",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "2014-н.в.",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-suzuki-wagon-r--19931998",
    "sourceModelId": "suzuki-wagon-r",
    "make": "Suzuki",
    "model": "Wagon R",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "1993-1998",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-camry-xv40-20062011",
    "sourceModelId": "toyota-camry",
    "make": "Toyota",
    "model": "Camry",
    "generation": "XV40",
    "chassisCodes": [
      "XV40"
    ],
    "years": "2006-2011",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-camry-xv50-20112018",
    "sourceModelId": "toyota-camry",
    "make": "Toyota",
    "model": "Camry",
    "generation": "XV50",
    "chassisCodes": [
      "XV50"
    ],
    "years": "2011-2018",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-camry-xv70-20172024",
    "sourceModelId": "toyota-camry",
    "make": "Toyota",
    "model": "Camry",
    "generation": "XV70",
    "chassisCodes": [
      "XV70"
    ],
    "years": "2017-2024",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-camry-xv80-2023",
    "sourceModelId": "toyota-camry",
    "make": "Toyota",
    "model": "Camry",
    "generation": "XV80",
    "chassisCodes": [
      "XV80"
    ],
    "years": "2023-н.в.",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-carina--19701977",
    "sourceModelId": "toyota-carina",
    "make": "Toyota",
    "model": "Carina",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "1970-1977",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-carina-a40-19771981",
    "sourceModelId": "toyota-carina",
    "make": "Toyota",
    "model": "Carina",
    "generation": "A40",
    "chassisCodes": [
      "A40"
    ],
    "years": "1977-1981",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-carina-a60-19811988",
    "sourceModelId": "toyota-carina",
    "make": "Toyota",
    "model": "Carina",
    "generation": "A60",
    "chassisCodes": [
      "A60"
    ],
    "years": "1981-1988",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-carina-e-t190-19921997",
    "sourceModelId": "toyota-carina-e",
    "make": "Toyota",
    "model": "Carina E",
    "generation": "T190",
    "chassisCodes": [
      "T190"
    ],
    "years": "1992-1997",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-carina-ed-st160-19851989",
    "sourceModelId": "toyota-carina-ed",
    "make": "Toyota",
    "model": "Carina ED",
    "generation": "ST160",
    "chassisCodes": [
      "ST160"
    ],
    "years": "1985-1989",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-carina-ed-t180-19891993",
    "sourceModelId": "toyota-carina-ed",
    "make": "Toyota",
    "model": "Carina ED",
    "generation": "T180",
    "chassisCodes": [
      "T180"
    ],
    "years": "1989-1993",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-carina-ed-t200-19931998",
    "sourceModelId": "toyota-carina-ed",
    "make": "Toyota",
    "model": "Carina ED",
    "generation": "T200",
    "chassisCodes": [
      "T200"
    ],
    "years": "1993-1998",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-carina-ii-t150-19831987",
    "sourceModelId": "toyota-carina-ii",
    "make": "Toyota",
    "model": "Carina II",
    "generation": "T150",
    "chassisCodes": [
      "T150"
    ],
    "years": "1983-1987",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-carina-ii-t170-19871992",
    "sourceModelId": "toyota-carina-ii",
    "make": "Toyota",
    "model": "Carina II",
    "generation": "T170",
    "chassisCodes": [
      "T170"
    ],
    "years": "1987-1992",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-carina-t150-t160-19841988",
    "sourceModelId": "toyota-carina",
    "make": "Toyota",
    "model": "Carina",
    "generation": "T150, T160",
    "chassisCodes": [
      "T150",
      "T160"
    ],
    "years": "1984-1988",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-carina-t170-19881992",
    "sourceModelId": "toyota-carina",
    "make": "Toyota",
    "model": "Carina",
    "generation": "T170",
    "chassisCodes": [
      "T170"
    ],
    "years": "1988-1992",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-carina-t190-19921996",
    "sourceModelId": "toyota-carina",
    "make": "Toyota",
    "model": "Carina",
    "generation": "T190",
    "chassisCodes": [
      "T190"
    ],
    "years": "1992-1996",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-carina-t210-19962001",
    "sourceModelId": "toyota-carina",
    "make": "Toyota",
    "model": "Carina",
    "generation": "T210",
    "chassisCodes": [
      "T210"
    ],
    "years": "1996-2001",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-celica-a40-a50-19771981",
    "sourceModelId": "toyota-celica",
    "make": "Toyota",
    "model": "Celica",
    "generation": "A40, A50",
    "chassisCodes": [
      "A40",
      "A50"
    ],
    "years": "1977-1981",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-celica-a60-19811985",
    "sourceModelId": "toyota-celica",
    "make": "Toyota",
    "model": "Celica",
    "generation": "A60",
    "chassisCodes": [
      "A60"
    ],
    "years": "1981-1985",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-celica-t160-19851990",
    "sourceModelId": "toyota-celica",
    "make": "Toyota",
    "model": "Celica",
    "generation": "T160",
    "chassisCodes": [
      "T160"
    ],
    "years": "1985-1990",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-celica-t180-19891993",
    "sourceModelId": "toyota-celica",
    "make": "Toyota",
    "model": "Celica",
    "generation": "T180",
    "chassisCodes": [
      "T180"
    ],
    "years": "1989-1993",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-celica-t200-19931999",
    "sourceModelId": "toyota-celica",
    "make": "Toyota",
    "model": "Celica",
    "generation": "T200",
    "chassisCodes": [
      "T200"
    ],
    "years": "1993-1999",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-celica-t230-19992006",
    "sourceModelId": "toyota-celica",
    "make": "Toyota",
    "model": "Celica",
    "generation": "T230",
    "chassisCodes": [
      "T230"
    ],
    "years": "1999-2006",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-celsior-xf10-19891994",
    "sourceModelId": "toyota-celsior",
    "make": "Toyota",
    "model": "Celsior",
    "generation": "XF10",
    "chassisCodes": [
      "XF10"
    ],
    "years": "1989-1994",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-celsior-xf20-19942000",
    "sourceModelId": "toyota-celsior",
    "make": "Toyota",
    "model": "Celsior",
    "generation": "XF20",
    "chassisCodes": [
      "XF20"
    ],
    "years": "1994-2000",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-celsior-xf30-20002006",
    "sourceModelId": "toyota-celsior",
    "make": "Toyota",
    "model": "Celsior",
    "generation": "XF30",
    "chassisCodes": [
      "XF30"
    ],
    "years": "2000-2006",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-century-g50-19972017",
    "sourceModelId": "toyota-century",
    "make": "Toyota",
    "model": "Century",
    "generation": "G50",
    "chassisCodes": [
      "G50"
    ],
    "years": "1997-2017",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-century-grg75-g60-2017",
    "sourceModelId": "toyota-century",
    "make": "Toyota",
    "model": "Century",
    "generation": "GRG75, G60",
    "chassisCodes": [
      "GRG75",
      "G60"
    ],
    "years": "2017-н.в.",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-chaser-x30-40-19771980",
    "sourceModelId": "toyota-chaser",
    "make": "Toyota",
    "model": "Chaser",
    "generation": "X30/40",
    "chassisCodes": [
      "X30/40"
    ],
    "years": "1977-1980",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-chaser-x60-19801984",
    "sourceModelId": "toyota-chaser",
    "make": "Toyota",
    "model": "Chaser",
    "generation": "X60",
    "chassisCodes": [
      "X60"
    ],
    "years": "1980-1984",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-chaser-x70-19841988",
    "sourceModelId": "toyota-chaser",
    "make": "Toyota",
    "model": "Chaser",
    "generation": "X70",
    "chassisCodes": [
      "X70"
    ],
    "years": "1984-1988",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-chaser-x80-19881992",
    "sourceModelId": "toyota-chaser",
    "make": "Toyota",
    "model": "Chaser",
    "generation": "X80",
    "chassisCodes": [
      "X80"
    ],
    "years": "1988-1992",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-chaser-x90-19921996",
    "sourceModelId": "toyota-chaser",
    "make": "Toyota",
    "model": "Chaser",
    "generation": "X90",
    "chassisCodes": [
      "X90"
    ],
    "years": "1992-1996",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-chaser-x100-19962001",
    "sourceModelId": "toyota-chaser",
    "make": "Toyota",
    "model": "Chaser",
    "generation": "X100",
    "chassisCodes": [
      "X100"
    ],
    "years": "1996-2001",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-corolla-e10-19661970",
    "sourceModelId": "toyota-corolla",
    "make": "Toyota",
    "model": "Corolla",
    "generation": "E10",
    "chassisCodes": [
      "E10"
    ],
    "years": "1966-1970",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-corolla-e70-19791987",
    "sourceModelId": "toyota-corolla",
    "make": "Toyota",
    "model": "Corolla",
    "generation": "E70",
    "chassisCodes": [
      "E70"
    ],
    "years": "1979-1987",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-corolla-e80-19831987",
    "sourceModelId": "toyota-corolla",
    "make": "Toyota",
    "model": "Corolla",
    "generation": "E80",
    "chassisCodes": [
      "E80"
    ],
    "years": "1983-1987",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-corolla-e90-19871991",
    "sourceModelId": "toyota-corolla",
    "make": "Toyota",
    "model": "Corolla",
    "generation": "E90",
    "chassisCodes": [
      "E90"
    ],
    "years": "1987-1991",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-corolla-e100-19912000",
    "sourceModelId": "toyota-corolla",
    "make": "Toyota",
    "model": "Corolla",
    "generation": "E100",
    "chassisCodes": [
      "E100"
    ],
    "years": "1991-2000",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-corolla-e110-19952001",
    "sourceModelId": "toyota-corolla",
    "make": "Toyota",
    "model": "Corolla",
    "generation": "E110",
    "chassisCodes": [
      "E110"
    ],
    "years": "1995-2001",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-corolla-e120-e130-20002006",
    "sourceModelId": "toyota-corolla",
    "make": "Toyota",
    "model": "Corolla",
    "generation": "E120, E130",
    "chassisCodes": [
      "E120",
      "E130"
    ],
    "years": "2000-2006",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-corolla-e140-e150-20062013",
    "sourceModelId": "toyota-corolla",
    "make": "Toyota",
    "model": "Corolla",
    "generation": "E140, E150",
    "chassisCodes": [
      "E140",
      "E150"
    ],
    "years": "2006-2013",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-corolla-e170-e180-20122022",
    "sourceModelId": "toyota-corolla",
    "make": "Toyota",
    "model": "Corolla",
    "generation": "E170, E180",
    "chassisCodes": [
      "E170",
      "E180"
    ],
    "years": "2012-2022",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-corolla-e210-2018",
    "sourceModelId": "toyota-corolla",
    "make": "Toyota",
    "model": "Corolla",
    "generation": "E210",
    "chassisCodes": [
      "E210"
    ],
    "years": "2018-н.в.",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-corolla-axio-e140-20062012",
    "sourceModelId": "toyota-corolla-axio",
    "make": "Toyota",
    "model": "Corolla Axio",
    "generation": "E140",
    "chassisCodes": [
      "E140"
    ],
    "years": "2006-2012",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-corolla-axio-e160-20122025",
    "sourceModelId": "toyota-corolla-axio",
    "make": "Toyota",
    "model": "Corolla Axio",
    "generation": "E160",
    "chassisCodes": [
      "E160"
    ],
    "years": "2012-2025",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-corolla-fielder-e120-20002006",
    "sourceModelId": "toyota-corolla-fielder",
    "make": "Toyota",
    "model": "Corolla Fielder",
    "generation": "E120",
    "chassisCodes": [
      "E120"
    ],
    "years": "2000-2006",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-corolla-fielder-e140-20062012",
    "sourceModelId": "toyota-corolla-fielder",
    "make": "Toyota",
    "model": "Corolla Fielder",
    "generation": "E140",
    "chassisCodes": [
      "E140"
    ],
    "years": "2006-2012",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-corolla-fielder-e160-20122025",
    "sourceModelId": "toyota-corolla-fielder",
    "make": "Toyota",
    "model": "Corolla Fielder",
    "generation": "E160",
    "chassisCodes": [
      "E160"
    ],
    "years": "2012-2025",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-corolla-levin-e80-19831987",
    "sourceModelId": "toyota-corolla-levin",
    "make": "Toyota",
    "model": "Corolla Levin",
    "generation": "E80",
    "chassisCodes": [
      "E80"
    ],
    "years": "1983-1987",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-corolla-levin-e90-19871991",
    "sourceModelId": "toyota-corolla-levin",
    "make": "Toyota",
    "model": "Corolla Levin",
    "generation": "E90",
    "chassisCodes": [
      "E90"
    ],
    "years": "1987-1991",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-corolla-levin-e100-19911995",
    "sourceModelId": "toyota-corolla-levin",
    "make": "Toyota",
    "model": "Corolla Levin",
    "generation": "E100",
    "chassisCodes": [
      "E100"
    ],
    "years": "1991-1995",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-corolla-levin-e110-19952000",
    "sourceModelId": "toyota-corolla-levin",
    "make": "Toyota",
    "model": "Corolla Levin",
    "generation": "E110",
    "chassisCodes": [
      "E110"
    ],
    "years": "1995-2000",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-corsa-l10-19781982",
    "sourceModelId": "toyota-corsa",
    "make": "Toyota",
    "model": "Corsa",
    "generation": "L10",
    "chassisCodes": [
      "L10"
    ],
    "years": "1978-1982",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-corsa-l20-19821989",
    "sourceModelId": "toyota-corsa",
    "make": "Toyota",
    "model": "Corsa",
    "generation": "L20",
    "chassisCodes": [
      "L20"
    ],
    "years": "1982-1989",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-corsa-l30-19861990",
    "sourceModelId": "toyota-corsa",
    "make": "Toyota",
    "model": "Corsa",
    "generation": "L30",
    "chassisCodes": [
      "L30"
    ],
    "years": "1986-1990",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-corsa-l40-19901994",
    "sourceModelId": "toyota-corsa",
    "make": "Toyota",
    "model": "Corsa",
    "generation": "L40",
    "chassisCodes": [
      "L40"
    ],
    "years": "1990-1994",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-corsa-l50-19941999",
    "sourceModelId": "toyota-corsa",
    "make": "Toyota",
    "model": "Corsa",
    "generation": "L50",
    "chassisCodes": [
      "L50"
    ],
    "years": "1994-1999",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-cressida-x30-19761980",
    "sourceModelId": "toyota-cressida",
    "make": "Toyota",
    "model": "Cressida",
    "generation": "X30",
    "chassisCodes": [
      "X30"
    ],
    "years": "1976-1980",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-cresta-x50-19801984",
    "sourceModelId": "toyota-cresta",
    "make": "Toyota",
    "model": "Cresta",
    "generation": "X50",
    "chassisCodes": [
      "X50"
    ],
    "years": "1980-1984",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-cresta-x70-19841988",
    "sourceModelId": "toyota-cresta",
    "make": "Toyota",
    "model": "Cresta",
    "generation": "X70",
    "chassisCodes": [
      "X70"
    ],
    "years": "1984-1988",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-cresta-x80-19881992",
    "sourceModelId": "toyota-cresta",
    "make": "Toyota",
    "model": "Cresta",
    "generation": "X80",
    "chassisCodes": [
      "X80"
    ],
    "years": "1988-1992",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-cresta-x90-19921996",
    "sourceModelId": "toyota-cresta",
    "make": "Toyota",
    "model": "Cresta",
    "generation": "X90",
    "chassisCodes": [
      "X90"
    ],
    "years": "1992-1996",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-cresta-x100-19962001",
    "sourceModelId": "toyota-cresta",
    "make": "Toyota",
    "model": "Cresta",
    "generation": "X100",
    "chassisCodes": [
      "X100"
    ],
    "years": "1996-2001",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-crown-s110-19791983",
    "sourceModelId": "toyota-crown",
    "make": "Toyota",
    "model": "Crown",
    "generation": "S110",
    "chassisCodes": [
      "S110"
    ],
    "years": "1979-1983",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-crown-s120-19831987",
    "sourceModelId": "toyota-crown",
    "make": "Toyota",
    "model": "Crown",
    "generation": "S120",
    "chassisCodes": [
      "S120"
    ],
    "years": "1983-1987",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-crown-s130-19871999",
    "sourceModelId": "toyota-crown",
    "make": "Toyota",
    "model": "Crown",
    "generation": "S130",
    "chassisCodes": [
      "S130"
    ],
    "years": "1987-1999",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-crown-s140-19911995",
    "sourceModelId": "toyota-crown",
    "make": "Toyota",
    "model": "Crown",
    "generation": "S140",
    "chassisCodes": [
      "S140"
    ],
    "years": "1991-1995",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-crown-s150-xs10-19952001",
    "sourceModelId": "toyota-crown",
    "make": "Toyota",
    "model": "Crown",
    "generation": "S150, XS10",
    "chassisCodes": [
      "S150",
      "XS10"
    ],
    "years": "1995-2001",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-crown-s170-xs10-19992007",
    "sourceModelId": "toyota-crown",
    "make": "Toyota",
    "model": "Crown",
    "generation": "S170, XS10",
    "chassisCodes": [
      "S170",
      "XS10"
    ],
    "years": "1999-2007",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-crown-s180-20032008",
    "sourceModelId": "toyota-crown",
    "make": "Toyota",
    "model": "Crown",
    "generation": "S180",
    "chassisCodes": [
      "S180"
    ],
    "years": "2003-2008",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-crown-s200-20082012",
    "sourceModelId": "toyota-crown",
    "make": "Toyota",
    "model": "Crown",
    "generation": "S200",
    "chassisCodes": [
      "S200"
    ],
    "years": "2008-2012",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-crown-s210-20122020",
    "sourceModelId": "toyota-crown",
    "make": "Toyota",
    "model": "Crown",
    "generation": "S210",
    "chassisCodes": [
      "S210"
    ],
    "years": "2012-2020",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-crown-s220-20172022",
    "sourceModelId": "toyota-crown",
    "make": "Toyota",
    "model": "Crown",
    "generation": "S220",
    "chassisCodes": [
      "S220"
    ],
    "years": "2017-2022",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-estima-ahr10-xr30-xr40-20002005",
    "sourceModelId": "toyota-estima",
    "make": "Toyota",
    "model": "Estima",
    "generation": "AHR10, XR30, XR40",
    "chassisCodes": [
      "AHR10",
      "XR30",
      "XR40"
    ],
    "years": "2000-2005",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-estima-ahr20-xr50-20062019",
    "sourceModelId": "toyota-estima",
    "make": "Toyota",
    "model": "Estima",
    "generation": "AHR20, XR50",
    "chassisCodes": [
      "AHR20",
      "XR50"
    ],
    "years": "2006-2019",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-estima-emina-xr10-xr20-19921999",
    "sourceModelId": "toyota-estima-emina",
    "make": "Toyota",
    "model": "Estima Emina",
    "generation": "XR10, XR20",
    "chassisCodes": [
      "XR10",
      "XR20"
    ],
    "years": "1992-1999",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-estima-lucida-xr10-xr20-19921999",
    "sourceModelId": "toyota-estima-lucida",
    "make": "Toyota",
    "model": "Estima Lucida",
    "generation": "XR10, XR20",
    "chassisCodes": [
      "XR10",
      "XR20"
    ],
    "years": "1992-1999",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-fj-cruiser-j15-20052022",
    "sourceModelId": "toyota-fj-cruiser",
    "make": "Toyota",
    "model": "FJ Cruiser",
    "generation": "J15",
    "chassisCodes": [
      "J15"
    ],
    "years": "2005-2022",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-fortuner-an50-an60-20042015",
    "sourceModelId": "toyota-fortuner",
    "make": "Toyota",
    "model": "Fortuner",
    "generation": "AN50, AN60",
    "chassisCodes": [
      "AN50",
      "AN60"
    ],
    "years": "2004-2015",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-fortuner-an160-2015",
    "sourceModelId": "toyota-fortuner",
    "make": "Toyota",
    "model": "Fortuner",
    "generation": "AN160",
    "chassisCodes": [
      "AN160"
    ],
    "years": "2015-н.в.",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-harrier-xu10-19972003",
    "sourceModelId": "toyota-harrier",
    "make": "Toyota",
    "model": "Harrier",
    "generation": "XU10",
    "chassisCodes": [
      "XU10"
    ],
    "years": "1997-2003",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-harrier-xu30-20032013",
    "sourceModelId": "toyota-harrier",
    "make": "Toyota",
    "model": "Harrier",
    "generation": "XU30",
    "chassisCodes": [
      "XU30"
    ],
    "years": "2003-2013",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-harrier-xu60-20132020",
    "sourceModelId": "toyota-harrier",
    "make": "Toyota",
    "model": "Harrier",
    "generation": "XU60",
    "chassisCodes": [
      "XU60"
    ],
    "years": "2013-2020",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-harrier-xu80-2020",
    "sourceModelId": "toyota-harrier",
    "make": "Toyota",
    "model": "Harrier",
    "generation": "XU80",
    "chassisCodes": [
      "XU80"
    ],
    "years": "2020-н.в.",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-hiace-h10-19671977",
    "sourceModelId": "toyota-hiace",
    "make": "Toyota",
    "model": "Hiace",
    "generation": "H10",
    "chassisCodes": [
      "H10"
    ],
    "years": "1967-1977",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-hiace-h20-h30-h40-19771982",
    "sourceModelId": "toyota-hiace",
    "make": "Toyota",
    "model": "Hiace",
    "generation": "H20, H30, H40",
    "chassisCodes": [
      "H20",
      "H30",
      "H40"
    ],
    "years": "1977-1982",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-hiace-h200-20042019",
    "sourceModelId": "toyota-hiace",
    "make": "Toyota",
    "model": "Hiace",
    "generation": "H200",
    "chassisCodes": [
      "H200"
    ],
    "years": "2004-2019",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-hiace-h300-20192022",
    "sourceModelId": "toyota-hiace",
    "make": "Toyota",
    "model": "Hiace",
    "generation": "H300",
    "chassisCodes": [
      "H300"
    ],
    "years": "2019-2022",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-mark-ii-x70-19841988",
    "sourceModelId": "toyota-mark-ii",
    "make": "Toyota",
    "model": "Mark II",
    "generation": "X70",
    "chassisCodes": [
      "X70"
    ],
    "years": "1984-1988",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-mark-ii-x80-19881992",
    "sourceModelId": "toyota-mark-ii",
    "make": "Toyota",
    "model": "Mark II",
    "generation": "X80",
    "chassisCodes": [
      "X80"
    ],
    "years": "1988-1992",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-mark-ii-x90-19921996",
    "sourceModelId": "toyota-mark-ii",
    "make": "Toyota",
    "model": "Mark II",
    "generation": "X90",
    "chassisCodes": [
      "X90"
    ],
    "years": "1992-1996",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-mark-ii-x100-19962000",
    "sourceModelId": "toyota-mark-ii",
    "make": "Toyota",
    "model": "Mark II",
    "generation": "X100",
    "chassisCodes": [
      "X100"
    ],
    "years": "1996-2000",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-mark-ii-x110-20002004",
    "sourceModelId": "toyota-mark-ii",
    "make": "Toyota",
    "model": "Mark II",
    "generation": "X110",
    "chassisCodes": [
      "X110"
    ],
    "years": "2000-2004",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-mark-x-x120-20042009",
    "sourceModelId": "toyota-mark-x",
    "make": "Toyota",
    "model": "Mark X",
    "generation": "X120",
    "chassisCodes": [
      "X120"
    ],
    "years": "2004-2009",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-mark-x-x130-20092019",
    "sourceModelId": "toyota-mark-x",
    "make": "Toyota",
    "model": "Mark X",
    "generation": "X130",
    "chassisCodes": [
      "X130"
    ],
    "years": "2009-2019",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-noah-r60-20012007",
    "sourceModelId": "toyota-noah",
    "make": "Toyota",
    "model": "Noah",
    "generation": "R60",
    "chassisCodes": [
      "R60"
    ],
    "years": "2001-2007",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-noah-r70-20072013",
    "sourceModelId": "toyota-noah",
    "make": "Toyota",
    "model": "Noah",
    "generation": "R70",
    "chassisCodes": [
      "R70"
    ],
    "years": "2007-2013",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-noah-r80-20142021",
    "sourceModelId": "toyota-noah",
    "make": "Toyota",
    "model": "Noah",
    "generation": "R80",
    "chassisCodes": [
      "R80"
    ],
    "years": "2014-2021",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-noah-r90-2022",
    "sourceModelId": "toyota-noah",
    "make": "Toyota",
    "model": "Noah",
    "generation": "R90",
    "chassisCodes": [
      "R90"
    ],
    "years": "2022-н.в.",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-prius-nhw10-19972003",
    "sourceModelId": "toyota-prius",
    "make": "Toyota",
    "model": "Prius",
    "generation": "NHW10",
    "chassisCodes": [
      "NHW10"
    ],
    "years": "1997-2003",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-prius-nhw20-xw20-20032011",
    "sourceModelId": "toyota-prius",
    "make": "Toyota",
    "model": "Prius",
    "generation": "NHW20, XW20",
    "chassisCodes": [
      "NHW20",
      "XW20"
    ],
    "years": "2003-2011",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-prius-xw30-zvw30-20092016",
    "sourceModelId": "toyota-prius",
    "make": "Toyota",
    "model": "Prius",
    "generation": "XW30, ZVW30",
    "chassisCodes": [
      "XW30",
      "ZVW30"
    ],
    "years": "2009-2016",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-prius-xw50-zvw50-20152023",
    "sourceModelId": "toyota-prius",
    "make": "Toyota",
    "model": "Prius",
    "generation": "XW50, ZVW50",
    "chassisCodes": [
      "XW50",
      "ZVW50"
    ],
    "years": "2015-2023",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-prius-xw60-zvw60-mxwh60-2022",
    "sourceModelId": "toyota-prius",
    "make": "Toyota",
    "model": "Prius",
    "generation": "XW60, ZVW60/MXWH60",
    "chassisCodes": [
      "XW60",
      "ZVW60/MXWH60"
    ],
    "years": "2022-н.в.",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-rav4-xa10-19942000",
    "sourceModelId": "toyota-rav4",
    "make": "Toyota",
    "model": "RAV4",
    "generation": "XA10",
    "chassisCodes": [
      "XA10"
    ],
    "years": "1994-2000",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-rav4-xa20-20002005",
    "sourceModelId": "toyota-rav4",
    "make": "Toyota",
    "model": "RAV4",
    "generation": "XA20",
    "chassisCodes": [
      "XA20"
    ],
    "years": "2000-2005",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-rav4-xa30-20052013",
    "sourceModelId": "toyota-rav4",
    "make": "Toyota",
    "model": "RAV4",
    "generation": "XA30",
    "chassisCodes": [
      "XA30"
    ],
    "years": "2005-2013",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-rav4-xa40-20122019",
    "sourceModelId": "toyota-rav4",
    "make": "Toyota",
    "model": "RAV4",
    "generation": "XA40",
    "chassisCodes": [
      "XA40"
    ],
    "years": "2012-2019",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-rav4-xa50-2018",
    "sourceModelId": "toyota-rav4",
    "make": "Toyota",
    "model": "RAV4",
    "generation": "XA50",
    "chassisCodes": ["AXAA54","MXAA52","MXAA54","AXAH52","AXAH54","AXAP54"],
    "years": "2018-н.в.",
    "bodyStyles": ["5-дверный SUV"],
    "engineFamilies": ["M20A-FKS 2.0 бензин (1986 см³): Россия 149 л.с.; Япония 171 л.с.; Европа 175 л.с. — мощность зависит от рынка","A25A-FKS 2.5 бензин (2487 см³), 199 л.с. — Россия, отдельные версии","A25A-FXS 2.5 Hybrid (2487 см³): 177–185 л.с. в каталогах Drom по рынкам; передний/полный привод"],
    "transmissionFamilies": ["6MT — отдельные версии 2.0, рынок-зависимо","CVT — 2.0 M20A-FKS и гибридные 2.5 A25A-FXS по рынку","8AT — 2.5 A25A-FKS, отдельные рынки (например, Россия/США)"],
    "drivetrainNotes": "Подтверждённые Drom сочетания: Россия — M20A-FKS 2.0 (149 л.с., 6MT/CVT, FWD/4WD) и A25A-FKS 2.5 (199 л.с., 8AT, 4WD); Япония — M20A-FKS 2.0 (171 л.с., CVT, FWD/4WD) и A25A-FXS 2.5 Hybrid (177–178 л.с., CVT, FWD/4WD); Европа — M20A-FKS 2.0 (175 л.с., 6MT) и A25A-FXS Hybrid (178–185 л.с., CVT). Auto.ru подтверждает XA50 как отдельное поколение с 2018 года. Не переносить мощность, КПП и привод между рынками; коды агрегатов и точные комплектации сверять по VIN.",
    "verification": "separated-needs-verification",
    "nextDataTasks": ["Разнести M20A-FKS, A25A-FKS и A25A-FXS по конкретным рынкам, годам и кузовным кодам","Уточнить точные коды CVT/8AT и передаточные числа по заводским документам","Добавить внешние/внутренние размеры и колёсные параметры отдельно для каждой модификации","Сверить гибридные версии и тип привода по рынку и VIN"],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-rav4-xa60-2025",
    "sourceModelId": "toyota-rav4",
    "make": "Toyota",
    "model": "RAV4",
    "generation": "XA60",
    "chassisCodes": ["AXAN64","AXAP64","AXAH62","AXAH64","MXAH60","MXAH62","MXAH65"],
    "years": "2025-н.в.",
    "bodyStyles": ["5-дверный SUV"],
    "engineFamilies": ["A25A-FXS 2.5 Hybrid (2487 см³): Япония — 186 л.с.; Европа — 176 л.с. по данным Drom"],
    "transmissionFamilies": ["Гибридная e-CVT/вариаторная трансмиссия — Drom указывает CVT; точный код трансмиссии и редуктора зависит от рынка"],
    "drivetrainNotes": "Drom подтверждает для Японии A25A-FXS 2.5 Hybrid (186 л.с.) с CVT и 4WD; для Европы — A25A-FXS 2.5 Hybrid (176 л.с.) с CVT и FWD/4WD. Индекс кузова и оснащение различаются по рынкам (Япония, Китай, Европа, США, СНГ). Auto.ru также относит модель к VI поколению XA60 с 2025 года, но приводит более широкий набор китайских комплектаций; эти данные не объединяются с японскими и европейскими версиями без проверки.",
    "verification": "separated-needs-verification",
    "nextDataTasks": ["Добавить отдельно китайские, американские и СНГ-версии после сверки точных двигателей и гибридных систем","Подтвердить код гибридной трансмиссии/редуктора и привод по каждому рынку","Добавить габариты кузова, салона, багажника и колёсные параметры по кузовным кодам","Сверить спецификации с заводскими руководствами для каждого рынка"],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-rush-j200-20062016",
    "sourceModelId": "toyota-rush",
    "make": "Toyota",
    "model": "Rush",
    "generation": "J200",
    "chassisCodes": [
      "J200"
    ],
    "years": "2006-2016",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-sequoia-xk30-xk40-20002007",
    "sourceModelId": "toyota-sequoia",
    "make": "Toyota",
    "model": "Sequoia",
    "generation": "XK30, XK40",
    "chassisCodes": [
      "XK30",
      "XK40"
    ],
    "years": "2000-2007",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-sequoia-xk60-20072022",
    "sourceModelId": "toyota-sequoia",
    "make": "Toyota",
    "model": "Sequoia",
    "generation": "XK60",
    "chassisCodes": [
      "XK60"
    ],
    "years": "2007-2022",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-sequoia-xk80-2022",
    "sourceModelId": "toyota-sequoia",
    "make": "Toyota",
    "model": "Sequoia",
    "generation": "XK80",
    "chassisCodes": [
      "XK80"
    ],
    "years": "2022-н.в.",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-sienna-xl10-19972003",
    "sourceModelId": "toyota-sienna",
    "make": "Toyota",
    "model": "Sienna",
    "generation": "XL10",
    "chassisCodes": [
      "XL10"
    ],
    "years": "1997-2003",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-sienna-xl20-20032009",
    "sourceModelId": "toyota-sienna",
    "make": "Toyota",
    "model": "Sienna",
    "generation": "XL20",
    "chassisCodes": [
      "XL20"
    ],
    "years": "2003-2009",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-sienna-xl30-20102020",
    "sourceModelId": "toyota-sienna",
    "make": "Toyota",
    "model": "Sienna",
    "generation": "XL30",
    "chassisCodes": [
      "XL30"
    ],
    "years": "2010-2020",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-sienna-xl40-2020",
    "sourceModelId": "toyota-sienna",
    "make": "Toyota",
    "model": "Sienna",
    "generation": "XL40",
    "chassisCodes": [
      "XL40"
    ],
    "years": "2020-н.в.",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-soarer-z10-19811985",
    "sourceModelId": "toyota-soarer",
    "make": "Toyota",
    "model": "Soarer",
    "generation": "Z10",
    "chassisCodes": [
      "Z10"
    ],
    "years": "1981-1985",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-soarer-z30-19912001",
    "sourceModelId": "toyota-soarer",
    "make": "Toyota",
    "model": "Soarer",
    "generation": "Z30",
    "chassisCodes": [
      "Z30"
    ],
    "years": "1991-2001",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-soarer-z40-20012005",
    "sourceModelId": "toyota-soarer",
    "make": "Toyota",
    "model": "Soarer",
    "generation": "Z40",
    "chassisCodes": [
      "Z40"
    ],
    "years": "2001-2005",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-sprinter-e60-e40-19741979",
    "sourceModelId": "toyota-sprinter",
    "make": "Toyota",
    "model": "Sprinter",
    "generation": "E60, E40",
    "chassisCodes": [
      "E60",
      "E40"
    ],
    "years": "1974-1979",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-sprinter-e70-19791983",
    "sourceModelId": "toyota-sprinter",
    "make": "Toyota",
    "model": "Sprinter",
    "generation": "E70",
    "chassisCodes": [
      "E70"
    ],
    "years": "1979-1983",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-sprinter-e80-19831987",
    "sourceModelId": "toyota-sprinter",
    "make": "Toyota",
    "model": "Sprinter",
    "generation": "E80",
    "chassisCodes": [
      "E80"
    ],
    "years": "1983-1987",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-sprinter-e90-ae91-19871991",
    "sourceModelId": "toyota-sprinter",
    "make": "Toyota",
    "model": "Sprinter",
    "generation": "E90, AE91",
    "chassisCodes": [
      "E90",
      "AE91"
    ],
    "years": "1987-1991",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-sprinter-e100-19911995",
    "sourceModelId": "toyota-sprinter",
    "make": "Toyota",
    "model": "Sprinter",
    "generation": "E100",
    "chassisCodes": [
      "E100"
    ],
    "years": "1991-1995",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-sprinter-e110-19952000",
    "sourceModelId": "toyota-sprinter",
    "make": "Toyota",
    "model": "Sprinter",
    "generation": "E110",
    "chassisCodes": [
      "E110"
    ],
    "years": "1995-2000",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-sprinter-trueno-e80-19831987",
    "sourceModelId": "toyota-sprinter-trueno",
    "make": "Toyota",
    "model": "Sprinter Trueno",
    "generation": "E80",
    "chassisCodes": [
      "E80"
    ],
    "years": "1983-1987",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-sprinter-trueno-e90-19871991",
    "sourceModelId": "toyota-sprinter-trueno",
    "make": "Toyota",
    "model": "Sprinter Trueno",
    "generation": "E90",
    "chassisCodes": [
      "E90"
    ],
    "years": "1987-1991",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-sprinter-trueno-e100-19911995",
    "sourceModelId": "toyota-sprinter-trueno",
    "make": "Toyota",
    "model": "Sprinter Trueno",
    "generation": "E100",
    "chassisCodes": [
      "E100"
    ],
    "years": "1991-1995",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-sprinter-trueno-e110-19952000",
    "sourceModelId": "toyota-sprinter-trueno",
    "make": "Toyota",
    "model": "Sprinter Trueno",
    "generation": "E110",
    "chassisCodes": [
      "E110"
    ],
    "years": "1995-2000",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-starlet-p60-19781984",
    "sourceModelId": "toyota-starlet",
    "make": "Toyota",
    "model": "Starlet",
    "generation": "P60",
    "chassisCodes": [
      "P60"
    ],
    "years": "1978-1984",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-starlet-p70-19841989",
    "sourceModelId": "toyota-starlet",
    "make": "Toyota",
    "model": "Starlet",
    "generation": "P70",
    "chassisCodes": [
      "P70"
    ],
    "years": "1984-1989",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-starlet-p80-19891995",
    "sourceModelId": "toyota-starlet",
    "make": "Toyota",
    "model": "Starlet",
    "generation": "P80",
    "chassisCodes": [
      "P80"
    ],
    "years": "1989-1995",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-starlet-p90-19951999",
    "sourceModelId": "toyota-starlet",
    "make": "Toyota",
    "model": "Starlet",
    "generation": "P90",
    "chassisCodes": [
      "P90"
    ],
    "years": "1995-1999",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-supra-a70-19861993",
    "sourceModelId": "toyota-supra",
    "make": "Toyota",
    "model": "Supra",
    "generation": "A70",
    "chassisCodes": [
      "A70"
    ],
    "years": "1986-1993",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-supra-a80-19932002",
    "sourceModelId": "toyota-supra",
    "make": "Toyota",
    "model": "Supra",
    "generation": "A80",
    "chassisCodes": [
      "A80"
    ],
    "years": "1993-2002",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-supra-a90-db-2018",
    "sourceModelId": "toyota-supra",
    "make": "Toyota",
    "model": "Supra",
    "generation": "A90, DB",
    "chassisCodes": [
      "A90",
      "DB"
    ],
    "years": "2018-н.в.",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-tank--20162020",
    "sourceModelId": "toyota-tank",
    "make": "Toyota",
    "model": "Tank",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "2016-2020",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-tercel-l20-19821989",
    "sourceModelId": "toyota-tercel",
    "make": "Toyota",
    "model": "Tercel",
    "generation": "L20",
    "chassisCodes": [
      "L20"
    ],
    "years": "1982-1989",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-tercel-l30-19861990",
    "sourceModelId": "toyota-tercel",
    "make": "Toyota",
    "model": "Tercel",
    "generation": "L30",
    "chassisCodes": [
      "L30"
    ],
    "years": "1986-1990",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-tercel-l40-19901994",
    "sourceModelId": "toyota-tercel",
    "make": "Toyota",
    "model": "Tercel",
    "generation": "L40",
    "chassisCodes": [
      "L40"
    ],
    "years": "1990-1994",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-tercel-l50-19941999",
    "sourceModelId": "toyota-tercel",
    "make": "Toyota",
    "model": "Tercel",
    "generation": "L50",
    "chassisCodes": [
      "L50"
    ],
    "years": "1994-1999",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-tundra-xk30-xk40-19992007",
    "sourceModelId": "toyota-tundra",
    "make": "Toyota",
    "model": "Tundra",
    "generation": "XK30, XK40",
    "chassisCodes": [
      "XK30",
      "XK40"
    ],
    "years": "1999-2007",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-tundra-xk50-20062022",
    "sourceModelId": "toyota-tundra",
    "make": "Toyota",
    "model": "Tundra",
    "generation": "XK50",
    "chassisCodes": [
      "XK50"
    ],
    "years": "2006-2022",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-tundra-xk70-2021",
    "sourceModelId": "toyota-tundra",
    "make": "Toyota",
    "model": "Tundra",
    "generation": "XK70",
    "chassisCodes": [
      "XK70"
    ],
    "years": "2021-н.в.",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-vellfire-h20-20082015",
    "sourceModelId": "toyota-vellfire",
    "make": "Toyota",
    "model": "Vellfire",
    "generation": "H20",
    "chassisCodes": [
      "H20"
    ],
    "years": "2008-2015",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-vellfire-h30-20152023",
    "sourceModelId": "toyota-vellfire",
    "make": "Toyota",
    "model": "Vellfire",
    "generation": "H30",
    "chassisCodes": [
      "H30"
    ],
    "years": "2015-2023",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-toyota-vellfire-h40-2023",
    "sourceModelId": "toyota-vellfire",
    "make": "Toyota",
    "model": "Vellfire",
    "generation": "H40",
    "chassisCodes": [
      "H40"
    ],
    "years": "2023-н.в.",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-lexus-es300-xv10-19911996",
    "sourceModelId": "lexus-es300",
    "make": "Lexus",
    "model": "ES300",
    "generation": "XV10",
    "chassisCodes": [
      "XV10"
    ],
    "years": "1991-1996",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-lexus-es300-xv20-19962001",
    "sourceModelId": "lexus-es300",
    "make": "Lexus",
    "model": "ES300",
    "generation": "XV20",
    "chassisCodes": [
      "XV20"
    ],
    "years": "1996-2001",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-lexus-es300-xv30-20012006",
    "sourceModelId": "lexus-es300",
    "make": "Lexus",
    "model": "ES300",
    "generation": "XV30",
    "chassisCodes": [
      "XV30"
    ],
    "years": "2001-2006",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-lexus-es300h-xv60-20122018",
    "sourceModelId": "lexus-es300h",
    "make": "Lexus",
    "model": "ES300h",
    "generation": "XV60",
    "chassisCodes": [
      "XV60"
    ],
    "years": "2012-2018",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-lexus-es350-xv40-20062012",
    "sourceModelId": "lexus-es350",
    "make": "Lexus",
    "model": "ES350",
    "generation": "XV40",
    "chassisCodes": [
      "XV40"
    ],
    "years": "2006-2012",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-lexus-es350-xv60-20122018",
    "sourceModelId": "lexus-es350",
    "make": "Lexus",
    "model": "ES350",
    "generation": "XV60",
    "chassisCodes": [
      "XV60"
    ],
    "years": "2012-2018",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-lexus-gs300-s140-19931997",
    "sourceModelId": "lexus-gs300",
    "make": "Lexus",
    "model": "GS300",
    "generation": "S140",
    "chassisCodes": [
      "S140"
    ],
    "years": "1993-1997",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-lexus-gs300-s160-19972005",
    "sourceModelId": "lexus-gs300",
    "make": "Lexus",
    "model": "GS300",
    "generation": "S160",
    "chassisCodes": [
      "S160"
    ],
    "years": "1997-2005",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-lexus-gs300-s190-20052012",
    "sourceModelId": "lexus-gs300",
    "make": "Lexus",
    "model": "GS300",
    "generation": "S190",
    "chassisCodes": [
      "S190"
    ],
    "years": "2005-2012",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-lexus-gs350-s190-20052011",
    "sourceModelId": "lexus-gs350",
    "make": "Lexus",
    "model": "GS350",
    "generation": "S190",
    "chassisCodes": [
      "S190"
    ],
    "years": "2005-2011",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-lexus-gs400-s160-19971999",
    "sourceModelId": "lexus-gs400",
    "make": "Lexus",
    "model": "GS400",
    "generation": "S160",
    "chassisCodes": [
      "S160"
    ],
    "years": "1997-1999",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-lexus-gs430-s160-20002005",
    "sourceModelId": "lexus-gs430",
    "make": "Lexus",
    "model": "GS430",
    "generation": "S160",
    "chassisCodes": [
      "S160"
    ],
    "years": "2000-2005",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-lexus-gs430-s190-20052007",
    "sourceModelId": "lexus-gs430",
    "make": "Lexus",
    "model": "GS430",
    "generation": "S190",
    "chassisCodes": [
      "S190"
    ],
    "years": "2005-2007",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-lexus-gx460-j150-20092023",
    "sourceModelId": "lexus-gx460",
    "make": "Lexus",
    "model": "GX460",
    "generation": "J150",
    "chassisCodes": [
      "J150"
    ],
    "years": "2009-2023",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-lexus-gx470-j120-20022009",
    "sourceModelId": "lexus-gx470",
    "make": "Lexus",
    "model": "GX470",
    "generation": "J120",
    "chassisCodes": [
      "J120"
    ],
    "years": "2002-2009",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-lexus-gx550-j250-2023",
    "sourceModelId": "lexus-gx550",
    "make": "Lexus",
    "model": "GX550",
    "generation": "J250",
    "chassisCodes": [
      "J250"
    ],
    "years": "2023-н.в.",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-lexus-hs250h-f10-20092018",
    "sourceModelId": "lexus-hs250h",
    "make": "Lexus",
    "model": "HS250h",
    "generation": "F10",
    "chassisCodes": [
      "F10"
    ],
    "years": "2009-2018",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-lexus-is200-xe10-19982005",
    "sourceModelId": "lexus-is200",
    "make": "Lexus",
    "model": "IS200",
    "generation": "XE10",
    "chassisCodes": [
      "XE10"
    ],
    "years": "1998-2005",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-lexus-is250-xe20-20052013",
    "sourceModelId": "lexus-is250",
    "make": "Lexus",
    "model": "IS250",
    "generation": "XE20",
    "chassisCodes": [
      "XE20"
    ],
    "years": "2005-2013",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-lexus-is250-xe30-20132016",
    "sourceModelId": "lexus-is250",
    "make": "Lexus",
    "model": "IS250",
    "generation": "XE30",
    "chassisCodes": [
      "XE30"
    ],
    "years": "2013-2016",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-lexus-is300-xe10-19992005",
    "sourceModelId": "lexus-is300",
    "make": "Lexus",
    "model": "IS300",
    "generation": "XE10",
    "chassisCodes": [
      "XE10"
    ],
    "years": "1999-2005",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-lexus-is300-xe20-20062013",
    "sourceModelId": "lexus-is300",
    "make": "Lexus",
    "model": "IS300",
    "generation": "XE20",
    "chassisCodes": [
      "XE20"
    ],
    "years": "2006-2013",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-lexus-is300-xe30-2015",
    "sourceModelId": "lexus-is300",
    "make": "Lexus",
    "model": "IS300",
    "generation": "XE30",
    "chassisCodes": [
      "XE30"
    ],
    "years": "2015-н.в.",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-lexus-is350-xe20-20052013",
    "sourceModelId": "lexus-is350",
    "make": "Lexus",
    "model": "IS350",
    "generation": "XE20",
    "chassisCodes": [
      "XE20"
    ],
    "years": "2005-2013",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-lexus-is350-xe30-2013",
    "sourceModelId": "lexus-is350",
    "make": "Lexus",
    "model": "IS350",
    "generation": "XE30",
    "chassisCodes": [
      "XE30"
    ],
    "years": "2013-н.в.",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-lexus-ls400-xf10-19891994",
    "sourceModelId": "lexus-ls400",
    "make": "Lexus",
    "model": "LS400",
    "generation": "XF10",
    "chassisCodes": [
      "XF10"
    ],
    "years": "1989-1994",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-lexus-ls400-xf20-19942000",
    "sourceModelId": "lexus-ls400",
    "make": "Lexus",
    "model": "LS400",
    "generation": "XF20",
    "chassisCodes": [
      "XF20"
    ],
    "years": "1994-2000",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-lexus-ls430-xf30-20002006",
    "sourceModelId": "lexus-ls430",
    "make": "Lexus",
    "model": "LS430",
    "generation": "XF30",
    "chassisCodes": [
      "XF30"
    ],
    "years": "2000-2006",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-lexus-ls460-xf40-20062017",
    "sourceModelId": "lexus-ls460",
    "make": "Lexus",
    "model": "LS460",
    "generation": "XF40",
    "chassisCodes": [
      "XF40"
    ],
    "years": "2006-2017",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-lexus-ls500-xf50-2017",
    "sourceModelId": "lexus-ls500",
    "make": "Lexus",
    "model": "LS500",
    "generation": "XF50",
    "chassisCodes": [
      "XF50"
    ],
    "years": "2017-н.в.",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-lexus-lx450-j80-19951997",
    "sourceModelId": "lexus-lx450",
    "make": "Lexus",
    "model": "LX450",
    "generation": "J80",
    "chassisCodes": [
      "J80"
    ],
    "years": "1995-1997",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-lexus-lx470-j100-19982007",
    "sourceModelId": "lexus-lx470",
    "make": "Lexus",
    "model": "LX470",
    "generation": "J100",
    "chassisCodes": [
      "J100"
    ],
    "years": "1998-2007",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-lexus-lx570-j200-20072022",
    "sourceModelId": "lexus-lx570",
    "make": "Lexus",
    "model": "LX570",
    "generation": "J200",
    "chassisCodes": [
      "J200"
    ],
    "years": "2007-2022",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-lexus-lx600-j300-2021",
    "sourceModelId": "lexus-lx600",
    "make": "Lexus",
    "model": "LX600",
    "generation": "J300",
    "chassisCodes": [
      "J300"
    ],
    "years": "2021-н.в.",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-lexus-nx200-az10-z10-20142021",
    "sourceModelId": "lexus-nx200",
    "make": "Lexus",
    "model": "NX200",
    "generation": "AZ10, Z10",
    "chassisCodes": [
      "AZ10",
      "Z10"
    ],
    "years": "2014-2021",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-lexus-nx200-az20-2021",
    "sourceModelId": "lexus-nx200",
    "make": "Lexus",
    "model": "NX200",
    "generation": "AZ20",
    "chassisCodes": [
      "AZ20"
    ],
    "years": "2021-н.в.",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-lexus-nx300-az10-z10-20172021",
    "sourceModelId": "lexus-nx300",
    "make": "Lexus",
    "model": "NX300",
    "generation": "AZ10, Z10",
    "chassisCodes": [
      "AZ10",
      "Z10"
    ],
    "years": "2017-2021",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-lexus-nx300h-z10-20142021",
    "sourceModelId": "lexus-nx300h",
    "make": "Lexus",
    "model": "NX300h",
    "generation": "Z10",
    "chassisCodes": [
      "Z10"
    ],
    "years": "2014-2021",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-lexus-rx300-xu10-19982003",
    "sourceModelId": "lexus-rx300",
    "make": "Lexus",
    "model": "RX300",
    "generation": "XU10",
    "chassisCodes": [
      "XU10"
    ],
    "years": "1998-2003",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-lexus-rx300-xu30-20032006",
    "sourceModelId": "lexus-rx300",
    "make": "Lexus",
    "model": "RX300",
    "generation": "XU30",
    "chassisCodes": [
      "XU30"
    ],
    "years": "2003-2006",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-lexus-rx330-xu30-20032006",
    "sourceModelId": "lexus-rx330",
    "make": "Lexus",
    "model": "RX330",
    "generation": "XU30",
    "chassisCodes": [
      "XU30"
    ],
    "years": "2003-2006",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-lexus-rx350-xu30-20062009",
    "sourceModelId": "lexus-rx350",
    "make": "Lexus",
    "model": "RX350",
    "generation": "XU30",
    "chassisCodes": [
      "XU30"
    ],
    "years": "2006-2009",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-lexus-rx350-al10-20082015",
    "sourceModelId": "lexus-rx350",
    "make": "Lexus",
    "model": "RX350",
    "generation": "AL10",
    "chassisCodes": [
      "AL10"
    ],
    "years": "2008-2015",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-lexus-rx350-al20-20152022",
    "sourceModelId": "lexus-rx350",
    "make": "Lexus",
    "model": "RX350",
    "generation": "AL20",
    "chassisCodes": [
      "AL20"
    ],
    "years": "2015-2022",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-lexus-rx350-al30-ala10-2022",
    "sourceModelId": "lexus-rx350",
    "make": "Lexus",
    "model": "RX350",
    "generation": "AL30, ALA10",
    "chassisCodes": [
      "AL30",
      "ALA10"
    ],
    "years": "2022-н.в.",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-lexus-rx400h-xu30-20052009",
    "sourceModelId": "lexus-rx400h",
    "make": "Lexus",
    "model": "RX400h",
    "generation": "XU30",
    "chassisCodes": [
      "XU30"
    ],
    "years": "2005-2009",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-lexus-rx450h-al10-20092015",
    "sourceModelId": "lexus-rx450h",
    "make": "Lexus",
    "model": "RX450h",
    "generation": "AL10",
    "chassisCodes": [
      "AL10"
    ],
    "years": "2009-2015",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-lexus-rx450h-al20-20152022",
    "sourceModelId": "lexus-rx450h",
    "make": "Lexus",
    "model": "RX450h",
    "generation": "AL20",
    "chassisCodes": [
      "AL20"
    ],
    "years": "2015-2022",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-lexus-sc400-z30-19912000",
    "sourceModelId": "lexus-sc400",
    "make": "Lexus",
    "model": "SC400",
    "generation": "Z30",
    "chassisCodes": [
      "Z30"
    ],
    "years": "1991-2000",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-lexus-sc430-z40-20012010",
    "sourceModelId": "lexus-sc430",
    "make": "Lexus",
    "model": "SC430",
    "generation": "Z40",
    "chassisCodes": [
      "Z40"
    ],
    "years": "2001-2010",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mitsuoka-galue--19992005",
    "sourceModelId": "mitsuoka-galue",
    "make": "Mitsuoka",
    "model": "Galue",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "1999-2005",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mitsuoka-nouera--20032008",
    "sourceModelId": "mitsuoka-nouera",
    "make": "Mitsuoka",
    "model": "Nouera",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "2003-2008",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  },
  {
    "id": "drom-gen-mitsuoka-ryoga--19982001",
    "sourceModelId": "mitsuoka-ryoga",
    "make": "Mitsuoka",
    "model": "Ryoga",
    "generation": "Код кузова не указан",
    "chassisCodes": [],
    "years": "1998-2001",
    "bodyStyles": [],
    "engineFamilies": [],
    "transmissionFamilies": [],
    "drivetrainNotes": "Поколение и период выпуска перенесены из индекса Drom. Тип кузова, двигатели, коробки и привод необходимо уточнять по странице конкретной модификации и рынку.",
    "verification": "seeded-needs-verification",
    "nextDataTasks": [
      "Подтвердить типы кузова и коды модификаций по карточке поколения",
      "Разнести двигатели и КПП по годам и рынкам",
      "Добавить точные габариты, колёсные параметры и характеристики салона",
      "Сверить применимость по FRAME/VIN и заводской документации"
    ],
    "source": "Drom"
  }
];
