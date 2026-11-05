/**
 * Broad Japanese model-family directory for Nippon-Drive.
 * Names are imported as an inventory seed; generation/chassis/trim completeness is tracked separately.
 * This file deliberately avoids asserting that each family has already been exhaustively verified.
 */
export interface JapaneseModelFamily {
  id: string;
  make: string;
  model: string;
  recordStatus: 'model-family-seeded-generation-import-pending';
  note: string;
  source?: 'Drom' | 'Auto.ru';
}
export const JAPANESE_MODEL_FAMILIES: JapaneseModelFamily[] = [
  {
    "id": "toyota-aqua-1",
    "make": "Toyota",
    "model": "Aqua",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "toyota-alphard-2",
    "make": "Toyota",
    "model": "Alphard",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "toyota-altezza-3",
    "make": "Toyota",
    "model": "Altezza",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "toyota-aristo-4",
    "make": "Toyota",
    "model": "Aristo",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "toyota-aurion-5",
    "make": "Toyota",
    "model": "Aurion",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "toyota-avensis-6",
    "make": "Toyota",
    "model": "Avensis",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "toyota-bb-7",
    "make": "Toyota",
    "model": "bB",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "toyota-belta-8",
    "make": "Toyota",
    "model": "Belta",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "toyota-blade-9",
    "make": "Toyota",
    "model": "Blade",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "toyota-c-hr-10",
    "make": "Toyota",
    "model": "C-HR",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "toyota-caldina-11",
    "make": "Toyota",
    "model": "Caldina",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "toyota-camry-12",
    "make": "Toyota",
    "model": "Camry",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "toyota-carina-13",
    "make": "Toyota",
    "model": "Carina",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "toyota-celica-14",
    "make": "Toyota",
    "model": "Celica",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "toyota-century-15",
    "make": "Toyota",
    "model": "Century",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "toyota-chaser-16",
    "make": "Toyota",
    "model": "Chaser",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "toyota-crown-17",
    "make": "Toyota",
    "model": "Crown",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "toyota-crown-athlete-18",
    "make": "Toyota",
    "model": "Crown Athlete",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "toyota-crown-majesta-19",
    "make": "Toyota",
    "model": "Crown Majesta",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "toyota-corolla-20",
    "make": "Toyota",
    "model": "Corolla",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "toyota-corolla-axio-21",
    "make": "Toyota",
    "model": "Corolla Axio",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "toyota-corolla-fielder-22",
    "make": "Toyota",
    "model": "Corolla Fielder",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "toyota-corolla-levin-23",
    "make": "Toyota",
    "model": "Corolla Levin",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "toyota-corolla-runx-24",
    "make": "Toyota",
    "model": "Corolla RunX",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "toyota-corolla-sport-25",
    "make": "Toyota",
    "model": "Corolla Sport",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "toyota-corolla-touring-26",
    "make": "Toyota",
    "model": "Corolla Touring",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "toyota-corolla-cross-27",
    "make": "Toyota",
    "model": "Corolla Cross",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "toyota-corsa-28",
    "make": "Toyota",
    "model": "Corsa",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "toyota-cresta-29",
    "make": "Toyota",
    "model": "Cresta",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "toyota-cynos-30",
    "make": "Toyota",
    "model": "Cynos",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "toyota-estima-31",
    "make": "Toyota",
    "model": "Estima",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "toyota-fj-cruiser-32",
    "make": "Toyota",
    "model": "FJ Cruiser",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "toyota-fortuner-33",
    "make": "Toyota",
    "model": "Fortuner",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "toyota-gaia-34",
    "make": "Toyota",
    "model": "Gaia",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "toyota-gr86-35",
    "make": "Toyota",
    "model": "GR86",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "toyota-gr-yaris-36",
    "make": "Toyota",
    "model": "GR Yaris",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "toyota-harrier-37",
    "make": "Toyota",
    "model": "Harrier",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "toyota-hiace-38",
    "make": "Toyota",
    "model": "Hiace",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "toyota-hilux-39",
    "make": "Toyota",
    "model": "Hilux",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "toyota-ipsum-40",
    "make": "Toyota",
    "model": "Ipsum",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "toyota--ist-41",
    "make": "Toyota",
    "model": " ist",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "toyota-kluger-42",
    "make": "Toyota",
    "model": "Kluger",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "toyota-land-cruiser-43",
    "make": "Toyota",
    "model": "Land Cruiser",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "toyota-land-cruiser-prado-44",
    "make": "Toyota",
    "model": "Land Cruiser Prado",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "toyota-liteace-45",
    "make": "Toyota",
    "model": "LiteAce",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "toyota-mark-ii-46",
    "make": "Toyota",
    "model": "Mark II",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "toyota-mark-x-47",
    "make": "Toyota",
    "model": "Mark X",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "toyota-mirai-48",
    "make": "Toyota",
    "model": "Mirai",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "toyota-mr-s-49",
    "make": "Toyota",
    "model": "MR-S",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "toyota-mr2-50",
    "make": "Toyota",
    "model": "MR2",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "toyota-noah-51",
    "make": "Toyota",
    "model": "Noah",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "toyota-paseo-52",
    "make": "Toyota",
    "model": "Paseo",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "toyota-passo-53",
    "make": "Toyota",
    "model": "Passo",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "toyota-pixis-54",
    "make": "Toyota",
    "model": "Pixis",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "toyota-platz-55",
    "make": "Toyota",
    "model": "Platz",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "toyota-porte-56",
    "make": "Toyota",
    "model": "Porte",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "toyota-premio-57",
    "make": "Toyota",
    "model": "Premio",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "toyota-prius-58",
    "make": "Toyota",
    "model": "Prius",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "toyota-prius-alpha-59",
    "make": "Toyota",
    "model": "Prius Alpha",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "toyota-probox-60",
    "make": "Toyota",
    "model": "Probox",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "toyota-ractis-61",
    "make": "Toyota",
    "model": "Ractis",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "toyota-raize-62",
    "make": "Toyota",
    "model": "Raize",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "toyota-rav4-63",
    "make": "Toyota",
    "model": "RAV4",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "toyota-regiusace-64",
    "make": "Toyota",
    "model": "RegiusAce",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "toyota-roomy-65",
    "make": "Toyota",
    "model": "Roomy",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "toyota-rush-66",
    "make": "Toyota",
    "model": "Rush",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "toyota-sera-67",
    "make": "Toyota",
    "model": "Sera",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "toyota-sienta-68",
    "make": "Toyota",
    "model": "Sienta",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "toyota-soarer-69",
    "make": "Toyota",
    "model": "Soarer",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "toyota-sprinter-70",
    "make": "Toyota",
    "model": "Sprinter",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "toyota-starlet-71",
    "make": "Toyota",
    "model": "Starlet",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "toyota-succeed-72",
    "make": "Toyota",
    "model": "Succeed",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "toyota-supra-73",
    "make": "Toyota",
    "model": "Supra",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "toyota-tank-74",
    "make": "Toyota",
    "model": "Tank",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "toyota-townace-75",
    "make": "Toyota",
    "model": "TownAce",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "toyota-vanguard-76",
    "make": "Toyota",
    "model": "Vanguard",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "toyota-vellfire-77",
    "make": "Toyota",
    "model": "Vellfire",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "toyota-verossa-78",
    "make": "Toyota",
    "model": "Verossa",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "toyota-vitz-yaris-79",
    "make": "Toyota",
    "model": "Vitz / Yaris",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "toyota-voxy-80",
    "make": "Toyota",
    "model": "Voxy",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "toyota-will-vs-81",
    "make": "Toyota",
    "model": "WiLL VS",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "toyota-wish-82",
    "make": "Toyota",
    "model": "Wish",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "toyota-yaris-cross-83",
    "make": "Toyota",
    "model": "Yaris Cross",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "nissan-180sx-84",
    "make": "Nissan",
    "model": "180SX",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "nissan-200sx-85",
    "make": "Nissan",
    "model": "200SX",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "nissan-240sx-86",
    "make": "Nissan",
    "model": "240SX",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "nissan-300zx-87",
    "make": "Nissan",
    "model": "300ZX",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "nissan-350z-88",
    "make": "Nissan",
    "model": "350Z",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "nissan-370z-89",
    "make": "Nissan",
    "model": "370Z",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "nissan-ad-90",
    "make": "Nissan",
    "model": "AD",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "nissan-almera-91",
    "make": "Nissan",
    "model": "Almera",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "nissan-altima-92",
    "make": "Nissan",
    "model": "Altima",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "nissan-atlas-93",
    "make": "Nissan",
    "model": "Atlas",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "nissan-bluebird-94",
    "make": "Nissan",
    "model": "Bluebird",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "nissan-caravan-95",
    "make": "Nissan",
    "model": "Caravan",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "nissan-cedric-96",
    "make": "Nissan",
    "model": "Cedric",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "nissan-cefiro-97",
    "make": "Nissan",
    "model": "Cefiro",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "nissan-cima-98",
    "make": "Nissan",
    "model": "Cima",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "nissan-cube-99",
    "make": "Nissan",
    "model": "Cube",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "nissan-dualis-qashqai-100",
    "make": "Nissan",
    "model": "Dualis / Qashqai",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "nissan-elgrand-101",
    "make": "Nissan",
    "model": "Elgrand",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "nissan-fairlady-z-102",
    "make": "Nissan",
    "model": "Fairlady Z",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "nissan-fuga-103",
    "make": "Nissan",
    "model": "Fuga",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "nissan-gloria-104",
    "make": "Nissan",
    "model": "Gloria",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "nissan-gt-r-105",
    "make": "Nissan",
    "model": "GT-R",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "nissan-juke-106",
    "make": "Nissan",
    "model": "Juke",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "nissan-kicks-107",
    "make": "Nissan",
    "model": "Kicks",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "nissan-lafesta-108",
    "make": "Nissan",
    "model": "Lafesta",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "nissan-laurel-109",
    "make": "Nissan",
    "model": "Laurel",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "nissan-leaf-110",
    "make": "Nissan",
    "model": "Leaf",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "nissan-liberty-111",
    "make": "Nissan",
    "model": "Liberty",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "nissan-march-micra-112",
    "make": "Nissan",
    "model": "March / Micra",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "nissan-maxima-113",
    "make": "Nissan",
    "model": "Maxima",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "nissan-mistral-114",
    "make": "Nissan",
    "model": "Mistral",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "nissan-murano-115",
    "make": "Nissan",
    "model": "Murano",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "nissan-navara-116",
    "make": "Nissan",
    "model": "Navara",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "nissan-note-117",
    "make": "Nissan",
    "model": "Note",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "nissan-nv200-118",
    "make": "Nissan",
    "model": "NV200",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "nissan-pathfinder-119",
    "make": "Nissan",
    "model": "Pathfinder",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "nissan-patrol-120",
    "make": "Nissan",
    "model": "Patrol",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "nissan-pino-121",
    "make": "Nissan",
    "model": "Pino",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "nissan-pulsar-122",
    "make": "Nissan",
    "model": "Pulsar",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "nissan-r-nessa-123",
    "make": "Nissan",
    "model": "R'nessa",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "nissan-rasheen-124",
    "make": "Nissan",
    "model": "Rasheen",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "nissan-rogue-125",
    "make": "Nissan",
    "model": "Rogue",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "nissan-safari-126",
    "make": "Nissan",
    "model": "Safari",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "nissan-serena-127",
    "make": "Nissan",
    "model": "Serena",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "nissan-silvia-128",
    "make": "Nissan",
    "model": "Silvia",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "nissan-skyline-129",
    "make": "Nissan",
    "model": "Skyline",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "nissan-stagea-130",
    "make": "Nissan",
    "model": "Stagea",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "nissan-sunny-131",
    "make": "Nissan",
    "model": "Sunny",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "nissan-teana-132",
    "make": "Nissan",
    "model": "Teana",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "nissan-terrano-133",
    "make": "Nissan",
    "model": "Terrano",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "nissan-tiida-134",
    "make": "Nissan",
    "model": "Tiida",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "nissan-tino-135",
    "make": "Nissan",
    "model": "Tino",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "nissan-titan-136",
    "make": "Nissan",
    "model": "Titan",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "nissan-vanette-137",
    "make": "Nissan",
    "model": "Vanette",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "nissan-wingroad-138",
    "make": "Nissan",
    "model": "Wingroad",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "nissan-x-trail-139",
    "make": "Nissan",
    "model": "X-Trail",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "honda-accord-140",
    "make": "Honda",
    "model": "Accord",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "honda-airwave-141",
    "make": "Honda",
    "model": "Airwave",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "honda-ascot-142",
    "make": "Honda",
    "model": "Ascot",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "honda-avancier-143",
    "make": "Honda",
    "model": "Avancier",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "honda-beat-144",
    "make": "Honda",
    "model": "Beat",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "honda-capa-145",
    "make": "Honda",
    "model": "Capa",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "honda-city-146",
    "make": "Honda",
    "model": "City",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "honda-civic-147",
    "make": "Honda",
    "model": "Civic",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "honda-civic-type-r-148",
    "make": "Honda",
    "model": "Civic Type R",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "honda-clarity-149",
    "make": "Honda",
    "model": "Clarity",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "honda-cr-v-150",
    "make": "Honda",
    "model": "CR-V",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "honda-cr-x-151",
    "make": "Honda",
    "model": "CR-X",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "honda-cr-z-152",
    "make": "Honda",
    "model": "CR-Z",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "honda-crossroad-153",
    "make": "Honda",
    "model": "Crossroad",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "honda-domani-154",
    "make": "Honda",
    "model": "Domani",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "honda-edix-155",
    "make": "Honda",
    "model": "Edix",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "honda-element-156",
    "make": "Honda",
    "model": "Element",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "honda-elysion-157",
    "make": "Honda",
    "model": "Elysion",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "honda-fit-jazz-158",
    "make": "Honda",
    "model": "Fit / Jazz",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "honda-freed-159",
    "make": "Honda",
    "model": "Freed",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "honda-grace-160",
    "make": "Honda",
    "model": "Grace",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "honda-hr-v-vezel-161",
    "make": "Honda",
    "model": "HR-V / Vezel",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "honda-insight-162",
    "make": "Honda",
    "model": "Insight",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "honda-inspire-163",
    "make": "Honda",
    "model": "Inspire",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "honda-integra-164",
    "make": "Honda",
    "model": "Integra",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "honda-jade-165",
    "make": "Honda",
    "model": "Jade",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "honda-legend-166",
    "make": "Honda",
    "model": "Legend",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "honda-life-167",
    "make": "Honda",
    "model": "Life",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "honda-logo-168",
    "make": "Honda",
    "model": "Logo",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "honda-mdx-169",
    "make": "Honda",
    "model": "MDX",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "honda-mobilio-170",
    "make": "Honda",
    "model": "Mobilio",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "honda-n-box-171",
    "make": "Honda",
    "model": "N-BOX",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "honda-n-one-172",
    "make": "Honda",
    "model": "N-ONE",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "honda-n-van-173",
    "make": "Honda",
    "model": "N-VAN",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "honda-n-wgn-174",
    "make": "Honda",
    "model": "N-WGN",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "honda-nsx-175",
    "make": "Honda",
    "model": "NSX",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "honda-odyssey-176",
    "make": "Honda",
    "model": "Odyssey",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "honda-orthia-177",
    "make": "Honda",
    "model": "Orthia",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "honda-partner-178",
    "make": "Honda",
    "model": "Partner",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "honda-passport-179",
    "make": "Honda",
    "model": "Passport",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "honda-pilot-180",
    "make": "Honda",
    "model": "Pilot",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "honda-prelude-181",
    "make": "Honda",
    "model": "Prelude",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "honda-ridgeline-182",
    "make": "Honda",
    "model": "Ridgeline",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "honda-s-mx-183",
    "make": "Honda",
    "model": "S-MX",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "honda-s2000-184",
    "make": "Honda",
    "model": "S2000",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "honda-shuttle-185",
    "make": "Honda",
    "model": "Shuttle",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "honda-stepwgn-186",
    "make": "Honda",
    "model": "Stepwgn",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "honda-stream-187",
    "make": "Honda",
    "model": "Stream",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "honda-that-s-188",
    "make": "Honda",
    "model": "That’s",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "honda-today-189",
    "make": "Honda",
    "model": "Today",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "honda-vamos-190",
    "make": "Honda",
    "model": "Vamos",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "honda-zest-191",
    "make": "Honda",
    "model": "Zest",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "mazda-2-demio-192",
    "make": "Mazda",
    "model": "2 / Demio",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "mazda-3-axela-193",
    "make": "Mazda",
    "model": "3 / Axela",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "mazda-6-atenza-194",
    "make": "Mazda",
    "model": "6 / Atenza",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "mazda-323-195",
    "make": "Mazda",
    "model": "323",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "mazda-626-196",
    "make": "Mazda",
    "model": "626",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "mazda-929-197",
    "make": "Mazda",
    "model": "929",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "mazda-atenza-198",
    "make": "Mazda",
    "model": "Atenza",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "mazda-autozam-az-1-199",
    "make": "Mazda",
    "model": "Autozam AZ-1",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "mazda-biante-200",
    "make": "Mazda",
    "model": "Biante",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "mazda-bongo-201",
    "make": "Mazda",
    "model": "Bongo",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "mazda-bt-50-202",
    "make": "Mazda",
    "model": "BT-50",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "mazda-capella-203",
    "make": "Mazda",
    "model": "Capella",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "mazda-carol-204",
    "make": "Mazda",
    "model": "Carol",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "mazda-cosmo-205",
    "make": "Mazda",
    "model": "Cosmo",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "mazda-cx-3-206",
    "make": "Mazda",
    "model": "CX-3",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "mazda-cx-30-207",
    "make": "Mazda",
    "model": "CX-30",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "mazda-cx-5-208",
    "make": "Mazda",
    "model": "CX-5",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "mazda-cx-50-209",
    "make": "Mazda",
    "model": "CX-50",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "mazda-cx-60-210",
    "make": "Mazda",
    "model": "CX-60",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "mazda-cx-7-211",
    "make": "Mazda",
    "model": "CX-7",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "mazda-cx-8-212",
    "make": "Mazda",
    "model": "CX-8",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "mazda-cx-9-213",
    "make": "Mazda",
    "model": "CX-9",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "mazda-cx-90-214",
    "make": "Mazda",
    "model": "CX-90",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "mazda-efini-rx-7-215",
    "make": "Mazda",
    "model": "Efini RX-7",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "mazda-familia-216",
    "make": "Mazda",
    "model": "Familia",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "mazda-lantis-217",
    "make": "Mazda",
    "model": "Lantis",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "mazda-laputa-218",
    "make": "Mazda",
    "model": "Laputa",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "mazda-luce-219",
    "make": "Mazda",
    "model": "Luce",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "mazda-mazda5-premacy-220",
    "make": "Mazda",
    "model": "Mazda5 / Premacy",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "mazda-mazda8-221",
    "make": "Mazda",
    "model": "Mazda8",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "mazda-millenia-222",
    "make": "Mazda",
    "model": "Millenia",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "mazda-mpv-223",
    "make": "Mazda",
    "model": "MPV",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "mazda-mx-3-224",
    "make": "Mazda",
    "model": "MX-3",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "mazda-mx-5-roadster-225",
    "make": "Mazda",
    "model": "MX-5 / Roadster",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "mazda-mx-6-226",
    "make": "Mazda",
    "model": "MX-6",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "mazda-proceed-227",
    "make": "Mazda",
    "model": "Proceed",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "mazda-protege-228",
    "make": "Mazda",
    "model": "Protege",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "mazda-rx-7-229",
    "make": "Mazda",
    "model": "RX-7",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "mazda-rx-8-230",
    "make": "Mazda",
    "model": "RX-8",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "mazda-scrum-231",
    "make": "Mazda",
    "model": "Scrum",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "mazda-tribute-232",
    "make": "Mazda",
    "model": "Tribute",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "mazda-verisa-233",
    "make": "Mazda",
    "model": "Verisa",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "mitsubishi-airtrek-234",
    "make": "Mitsubishi",
    "model": "Airtrek",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "mitsubishi-asx-rvr-235",
    "make": "Mitsubishi",
    "model": "ASX / RVR",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "mitsubishi-carisma-236",
    "make": "Mitsubishi",
    "model": "Carisma",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "mitsubishi-challenger-pajero-sport-237",
    "make": "Mitsubishi",
    "model": "Challenger / Pajero Sport",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "mitsubishi-chariot-238",
    "make": "Mitsubishi",
    "model": "Chariot",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "mitsubishi-colt-239",
    "make": "Mitsubishi",
    "model": "Colt",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "mitsubishi-delica-d-2-240",
    "make": "Mitsubishi",
    "model": "Delica D:2",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "mitsubishi-delica-d-5-241",
    "make": "Mitsubishi",
    "model": "Delica D:5",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "mitsubishi-diamante-242",
    "make": "Mitsubishi",
    "model": "Diamante",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "mitsubishi-dingo-243",
    "make": "Mitsubishi",
    "model": "Dingo",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "mitsubishi-eclipse-244",
    "make": "Mitsubishi",
    "model": "Eclipse",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "mitsubishi-eclipse-cross-245",
    "make": "Mitsubishi",
    "model": "Eclipse Cross",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "mitsubishi-ek-wagon-246",
    "make": "Mitsubishi",
    "model": "eK Wagon",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "mitsubishi-ek-x-247",
    "make": "Mitsubishi",
    "model": "eK X",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "mitsubishi-fto-248",
    "make": "Mitsubishi",
    "model": "FTO",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "mitsubishi-galant-249",
    "make": "Mitsubishi",
    "model": "Galant",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "mitsubishi-grandis-250",
    "make": "Mitsubishi",
    "model": "Grandis",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "mitsubishi-i-miev-251",
    "make": "Mitsubishi",
    "model": "i-MiEV",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "mitsubishi-l200-triton-252",
    "make": "Mitsubishi",
    "model": "L200 / Triton",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "mitsubishi-lancer-253",
    "make": "Mitsubishi",
    "model": "Lancer",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "mitsubishi-lancer-evolution-254",
    "make": "Mitsubishi",
    "model": "Lancer Evolution",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "mitsubishi-legnum-255",
    "make": "Mitsubishi",
    "model": "Legnum",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "mitsubishi-minica-256",
    "make": "Mitsubishi",
    "model": "Minica",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "mitsubishi-mirage-257",
    "make": "Mitsubishi",
    "model": "Mirage",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "mitsubishi-outlander-258",
    "make": "Mitsubishi",
    "model": "Outlander",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "mitsubishi-pajero-montero-259",
    "make": "Mitsubishi",
    "model": "Pajero / Montero",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "mitsubishi-pajero-io-pinin-260",
    "make": "Mitsubishi",
    "model": "Pajero iO / Pinin",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "mitsubishi-pajero-mini-261",
    "make": "Mitsubishi",
    "model": "Pajero Mini",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "mitsubishi-pajero-junior-262",
    "make": "Mitsubishi",
    "model": "Pajero Junior",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "mitsubishi-proudia-263",
    "make": "Mitsubishi",
    "model": "Proudia",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "mitsubishi-rosa-264",
    "make": "Mitsubishi",
    "model": "Rosa",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "mitsubishi-space-gear-265",
    "make": "Mitsubishi",
    "model": "Space Gear",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "mitsubishi-space-runner-266",
    "make": "Mitsubishi",
    "model": "Space Runner",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "mitsubishi-space-star-267",
    "make": "Mitsubishi",
    "model": "Space Star",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "mitsubishi-toppo-268",
    "make": "Mitsubishi",
    "model": "Toppo",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "mitsubishi-town-box-269",
    "make": "Mitsubishi",
    "model": "Town Box",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "subaru-alcyone-svx-270",
    "make": "Subaru",
    "model": "Alcyone SVX",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "subaru-ascent-271",
    "make": "Subaru",
    "model": "Ascent",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "subaru-baja-272",
    "make": "Subaru",
    "model": "Baja",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "subaru-brz-273",
    "make": "Subaru",
    "model": "BRZ",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "subaru-crosstrek-xv-274",
    "make": "Subaru",
    "model": "Crosstrek / XV",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "subaru-dex-275",
    "make": "Subaru",
    "model": "Dex",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "subaru-dias-wagon-276",
    "make": "Subaru",
    "model": "Dias Wagon",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "subaru-exiga-277",
    "make": "Subaru",
    "model": "Exiga",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "subaru-forester-278",
    "make": "Subaru",
    "model": "Forester",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "subaru-impreza-279",
    "make": "Subaru",
    "model": "Impreza",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "subaru-impreza-wrx-280",
    "make": "Subaru",
    "model": "Impreza WRX",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "subaru-justy-281",
    "make": "Subaru",
    "model": "Justy",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "subaru-legacy-282",
    "make": "Subaru",
    "model": "Legacy",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "subaru-leone-283",
    "make": "Subaru",
    "model": "Leone",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "subaru-levorg-284",
    "make": "Subaru",
    "model": "Levorg",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "subaru-lucra-285",
    "make": "Subaru",
    "model": "Lucra",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "subaru-outback-286",
    "make": "Subaru",
    "model": "Outback",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "subaru-pleo-287",
    "make": "Subaru",
    "model": "Pleo",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "subaru-r1-288",
    "make": "Subaru",
    "model": "R1",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "subaru-r2-289",
    "make": "Subaru",
    "model": "R2",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "subaru-rex-290",
    "make": "Subaru",
    "model": "Rex",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "subaru-sambar-291",
    "make": "Subaru",
    "model": "Sambar",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "subaru-stella-292",
    "make": "Subaru",
    "model": "Stella",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "subaru-svx-293",
    "make": "Subaru",
    "model": "SVX",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "subaru-traviq-294",
    "make": "Subaru",
    "model": "Traviq",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "subaru-trezia-295",
    "make": "Subaru",
    "model": "Trezia",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "subaru-tribeca-296",
    "make": "Subaru",
    "model": "Tribeca",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "subaru-vivio-297",
    "make": "Subaru",
    "model": "Vivio",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "subaru-wrx-298",
    "make": "Subaru",
    "model": "WRX",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "subaru-wrx-sti-299",
    "make": "Subaru",
    "model": "WRX STI",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "suzuki-alto-300",
    "make": "Suzuki",
    "model": "Alto",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "suzuki-baleno-301",
    "make": "Suzuki",
    "model": "Baleno",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "suzuki-cappuccino-302",
    "make": "Suzuki",
    "model": "Cappuccino",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "suzuki-carry-303",
    "make": "Suzuki",
    "model": "Carry",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "suzuki-celerio-304",
    "make": "Suzuki",
    "model": "Celerio",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "suzuki-cervo-305",
    "make": "Suzuki",
    "model": "Cervo",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "suzuki-cultus-306",
    "make": "Suzuki",
    "model": "Cultus",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "suzuki-escudo-vitara-307",
    "make": "Suzuki",
    "model": "Escudo / Vitara",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "suzuki-every-308",
    "make": "Suzuki",
    "model": "Every",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "suzuki-fronte-309",
    "make": "Suzuki",
    "model": "Fronte",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "suzuki-grand-vitara-310",
    "make": "Suzuki",
    "model": "Grand Vitara",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "suzuki-hustler-311",
    "make": "Suzuki",
    "model": "Hustler",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "suzuki-ignis-312",
    "make": "Suzuki",
    "model": "Ignis",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "suzuki-jimny-313",
    "make": "Suzuki",
    "model": "Jimny",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "suzuki-kei-314",
    "make": "Suzuki",
    "model": "Kei",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "suzuki-kizashi-315",
    "make": "Suzuki",
    "model": "Kizashi",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "suzuki-landy-316",
    "make": "Suzuki",
    "model": "Landy",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "suzuki-lapin-317",
    "make": "Suzuki",
    "model": "Lapin",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "suzuki-mr-wagon-318",
    "make": "Suzuki",
    "model": "MR Wagon",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "suzuki-palette-319",
    "make": "Suzuki",
    "model": "Palette",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "suzuki-solio-320",
    "make": "Suzuki",
    "model": "Solio",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "suzuki-spacia-321",
    "make": "Suzuki",
    "model": "Spacia",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "suzuki-splash-322",
    "make": "Suzuki",
    "model": "Splash",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "suzuki-swift-323",
    "make": "Suzuki",
    "model": "Swift",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "suzuki-sx4-324",
    "make": "Suzuki",
    "model": "SX4",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "suzuki-twin-325",
    "make": "Suzuki",
    "model": "Twin",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "suzuki-wagon-r-326",
    "make": "Suzuki",
    "model": "Wagon R",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "suzuki-x-90-327",
    "make": "Suzuki",
    "model": "X-90",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "suzuki-xl7-328",
    "make": "Suzuki",
    "model": "XL7",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "daihatsu-altis-329",
    "make": "Daihatsu",
    "model": "Altis",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "daihatsu-applause-330",
    "make": "Daihatsu",
    "model": "Applause",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "daihatsu-atrai-331",
    "make": "Daihatsu",
    "model": "Atrai",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "daihatsu-be-go-332",
    "make": "Daihatsu",
    "model": "Be-go",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "daihatsu-boon-333",
    "make": "Daihatsu",
    "model": "Boon",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "daihatsu-cast-334",
    "make": "Daihatsu",
    "model": "Cast",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "daihatsu-copen-335",
    "make": "Daihatsu",
    "model": "Copen",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "daihatsu-cuore-336",
    "make": "Daihatsu",
    "model": "Cuore",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "daihatsu-esse-337",
    "make": "Daihatsu",
    "model": "Esse",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "daihatsu-feroza-338",
    "make": "Daihatsu",
    "model": "Feroza",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "daihatsu-hijet-339",
    "make": "Daihatsu",
    "model": "Hijet",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "daihatsu-leeza-340",
    "make": "Daihatsu",
    "model": "Leeza",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "daihatsu-mebius-341",
    "make": "Daihatsu",
    "model": "Mebius",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "daihatsu-mira-342",
    "make": "Daihatsu",
    "model": "Mira",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "daihatsu-move-343",
    "make": "Daihatsu",
    "model": "Move",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "daihatsu-naked-344",
    "make": "Daihatsu",
    "model": "Naked",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "daihatsu-opti-345",
    "make": "Daihatsu",
    "model": "Opti",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "daihatsu-rocky-346",
    "make": "Daihatsu",
    "model": "Rocky",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "daihatsu-sirion-347",
    "make": "Daihatsu",
    "model": "Sirion",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "daihatsu-sonica-348",
    "make": "Daihatsu",
    "model": "Sonica",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "daihatsu-storia-349",
    "make": "Daihatsu",
    "model": "Storia",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "daihatsu-taft-350",
    "make": "Daihatsu",
    "model": "Taft",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "daihatsu-tanto-351",
    "make": "Daihatsu",
    "model": "Tanto",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "daihatsu-terios-352",
    "make": "Daihatsu",
    "model": "Terios",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "daihatsu-thor-353",
    "make": "Daihatsu",
    "model": "Thor",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "daihatsu-trevis-354",
    "make": "Daihatsu",
    "model": "Trevis",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "daihatsu-wake-355",
    "make": "Daihatsu",
    "model": "Wake",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "daihatsu-yrv-356",
    "make": "Daihatsu",
    "model": "YRV",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "lexus-ct-357",
    "make": "Lexus",
    "model": "CT",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "lexus-es-358",
    "make": "Lexus",
    "model": "ES",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "lexus-gs-359",
    "make": "Lexus",
    "model": "GS",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "lexus-gx-360",
    "make": "Lexus",
    "model": "GX",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "lexus-hs-361",
    "make": "Lexus",
    "model": "HS",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "lexus-is-362",
    "make": "Lexus",
    "model": "IS",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "lexus-lc-363",
    "make": "Lexus",
    "model": "LC",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "lexus-lfa-364",
    "make": "Lexus",
    "model": "LFA",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "lexus-lm-365",
    "make": "Lexus",
    "model": "LM",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "lexus-ls-366",
    "make": "Lexus",
    "model": "LS",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "lexus-lx-367",
    "make": "Lexus",
    "model": "LX",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "lexus-nx-368",
    "make": "Lexus",
    "model": "NX",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "lexus-rc-369",
    "make": "Lexus",
    "model": "RC",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "lexus-rx-370",
    "make": "Lexus",
    "model": "RX",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "lexus-rz-371",
    "make": "Lexus",
    "model": "RZ",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "lexus-sc-372",
    "make": "Lexus",
    "model": "SC",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "lexus-ux-373",
    "make": "Lexus",
    "model": "UX",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "infiniti-ex-374",
    "make": "Infiniti",
    "model": "EX",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "infiniti-fx-375",
    "make": "Infiniti",
    "model": "FX",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "infiniti-g-376",
    "make": "Infiniti",
    "model": "G",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "infiniti-i-377",
    "make": "Infiniti",
    "model": "I",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "infiniti-j-378",
    "make": "Infiniti",
    "model": "J",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "infiniti-jx-379",
    "make": "Infiniti",
    "model": "JX",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "infiniti-m-380",
    "make": "Infiniti",
    "model": "M",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "infiniti-q30-381",
    "make": "Infiniti",
    "model": "Q30",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "infiniti-q40-382",
    "make": "Infiniti",
    "model": "Q40",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "infiniti-q45-383",
    "make": "Infiniti",
    "model": "Q45",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "infiniti-q50-384",
    "make": "Infiniti",
    "model": "Q50",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "infiniti-q60-385",
    "make": "Infiniti",
    "model": "Q60",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "infiniti-q70-386",
    "make": "Infiniti",
    "model": "Q70",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "infiniti-qx30-387",
    "make": "Infiniti",
    "model": "QX30",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "infiniti-qx4-388",
    "make": "Infiniti",
    "model": "QX4",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "infiniti-qx50-389",
    "make": "Infiniti",
    "model": "QX50",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "infiniti-qx55-390",
    "make": "Infiniti",
    "model": "QX55",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "infiniti-qx56-391",
    "make": "Infiniti",
    "model": "QX56",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "infiniti-qx60-392",
    "make": "Infiniti",
    "model": "QX60",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "infiniti-qx70-393",
    "make": "Infiniti",
    "model": "QX70",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "infiniti-qx80-394",
    "make": "Infiniti",
    "model": "QX80",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "isuzu-amigo-395",
    "make": "Isuzu",
    "model": "Amigo",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "isuzu-aska-396",
    "make": "Isuzu",
    "model": "Aska",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "isuzu-bighorn-trooper-397",
    "make": "Isuzu",
    "model": "Bighorn / Trooper",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "isuzu-d-max-398",
    "make": "Isuzu",
    "model": "D-Max",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "isuzu-fargo-399",
    "make": "Isuzu",
    "model": "Fargo",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "isuzu-gemini-400",
    "make": "Isuzu",
    "model": "Gemini",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "isuzu-mu-wizard-401",
    "make": "Isuzu",
    "model": "MU / Wizard",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "isuzu-piazza-402",
    "make": "Isuzu",
    "model": "Piazza",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "isuzu-rodeo-403",
    "make": "Isuzu",
    "model": "Rodeo",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "isuzu-vehicross-404",
    "make": "Isuzu",
    "model": "VehiCROSS",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "mitsuoka-buddy-405",
    "make": "Mitsuoka",
    "model": "Buddy",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "mitsuoka-galue-406",
    "make": "Mitsuoka",
    "model": "Galue",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "mitsuoka-himiko-407",
    "make": "Mitsuoka",
    "model": "Himiko",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "mitsuoka-le-seyde-408",
    "make": "Mitsuoka",
    "model": "Le-Seyde",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "mitsuoka-like-409",
    "make": "Mitsuoka",
    "model": "Like",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "mitsuoka-mc-1-410",
    "make": "Mitsuoka",
    "model": "MC-1",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "mitsuoka-orochi-411",
    "make": "Mitsuoka",
    "model": "Orochi",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "mitsuoka-ray-412",
    "make": "Mitsuoka",
    "model": "Ray",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "mitsuoka-ryoga-413",
    "make": "Mitsuoka",
    "model": "Ryoga",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "mitsuoka-viewt-414",
    "make": "Mitsuoka",
    "model": "Viewt",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "mitsuoka-yuga-415",
    "make": "Mitsuoka",
    "model": "Yuga",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "mitsuoka-zero1-416",
    "make": "Mitsuoka",
    "model": "Zero1",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "acura-cl-417",
    "make": "Acura",
    "model": "CL",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "acura-csx-418",
    "make": "Acura",
    "model": "CSX",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "acura-ilx-419",
    "make": "Acura",
    "model": "ILX",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "acura-integra-420",
    "make": "Acura",
    "model": "Integra",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "acura-legend-421",
    "make": "Acura",
    "model": "Legend",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "acura-mdx-422",
    "make": "Acura",
    "model": "MDX",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "acura-nsx-423",
    "make": "Acura",
    "model": "NSX",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "acura-rdx-424",
    "make": "Acura",
    "model": "RDX",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "acura-rl-425",
    "make": "Acura",
    "model": "RL",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "acura-rlx-426",
    "make": "Acura",
    "model": "RLX",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "acura-rsx-427",
    "make": "Acura",
    "model": "RSX",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "acura-tl-428",
    "make": "Acura",
    "model": "TL",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "acura-tlx-429",
    "make": "Acura",
    "model": "TLX",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "acura-tsx-430",
    "make": "Acura",
    "model": "TSX",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "acura-zdx-431",
    "make": "Acura",
    "model": "ZDX",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "scion-fr-s-432",
    "make": "Scion",
    "model": "FR-S",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "scion-ia-433",
    "make": "Scion",
    "model": "iA",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "scion-im-434",
    "make": "Scion",
    "model": "iM",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "scion-iq-435",
    "make": "Scion",
    "model": "iQ",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "scion-tc-436",
    "make": "Scion",
    "model": "tC",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "scion-xa-437",
    "make": "Scion",
    "model": "xA",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "scion-xb-438",
    "make": "Scion",
    "model": "xB",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  },
  {
    "id": "scion-xd-439",
    "make": "Scion",
    "model": "xD",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Разнести поколения, кузова, годы и модификации по рынкам; сверить список с полным индексом."
  }
] as JapaneseModelFamily[];
export const JAPANESE_MODEL_FAMILY_MAKES = Array.from(new Set(JAPANESE_MODEL_FAMILIES.map(item => item.make))).sort();

/**
 * Дополнение полного модельного перечня по каталогам Drom и Auto.ru.
 * Сами названия перенесены офлайн; внешние URL в пользовательские данные не добавляются.
 */
const importedCatalogModels: JapaneseModelFamily[] = [
  {
    "id": "toyota-drom-2000gt",
    "make": "Toyota",
    "model": "2000GT",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-4runner",
    "make": "Toyota",
    "model": "4Runner",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-allex",
    "make": "Toyota",
    "model": "Allex",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-allion",
    "make": "Toyota",
    "model": "Allion",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-auris",
    "make": "Toyota",
    "model": "Auris",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-avalon",
    "make": "Toyota",
    "model": "Avalon",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-avanza",
    "make": "Toyota",
    "model": "Avanza",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-avensisverso",
    "make": "Toyota",
    "model": "Avensis Verso",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-aygo",
    "make": "Toyota",
    "model": "Aygo",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-blizzard",
    "make": "Toyota",
    "model": "Blizzard",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-brevis",
    "make": "Toyota",
    "model": "Brevis",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-bz",
    "make": "Toyota",
    "model": "bZ",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-bzwoodland",
    "make": "Toyota",
    "model": "bZ Woodland",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-bz3",
    "make": "Toyota",
    "model": "bZ3",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-bz3x",
    "make": "Toyota",
    "model": "bZ3X",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-bz4x",
    "make": "Toyota",
    "model": "bZ4X",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-bz4xtouring",
    "make": "Toyota",
    "model": "bZ4X Touring",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-bz5",
    "make": "Toyota",
    "model": "bZ5",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-bz7",
    "make": "Toyota",
    "model": "bZ7",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-cpod",
    "make": "Toyota",
    "model": "C+pod",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-cami",
    "make": "Toyota",
    "model": "Cami",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-camrygracia",
    "make": "Toyota",
    "model": "Camry Gracia",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-camryprominent",
    "make": "Toyota",
    "model": "Camry Prominent",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-carinae",
    "make": "Toyota",
    "model": "Carina E",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-carinaed",
    "make": "Toyota",
    "model": "Carina ED",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-carinaii",
    "make": "Toyota",
    "model": "Carina II",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-cavalier",
    "make": "Toyota",
    "model": "Cavalier",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-celsior",
    "make": "Toyota",
    "model": "Celsior",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-classic",
    "make": "Toyota",
    "model": "Classic",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-comfort",
    "make": "Toyota",
    "model": "Comfort",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-coms",
    "make": "Toyota",
    "model": "COMS",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-copen",
    "make": "Toyota",
    "model": "Copen",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-corollaaltis",
    "make": "Toyota",
    "model": "Corolla Altis",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-corollaceres",
    "make": "Toyota",
    "model": "Corolla Ceres",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-corollafx",
    "make": "Toyota",
    "model": "Corolla FX",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-corollaii",
    "make": "Toyota",
    "model": "Corolla II",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-corollaim",
    "make": "Toyota",
    "model": "Corolla iM",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-corollarumion",
    "make": "Toyota",
    "model": "Corolla Rumion",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-corollaspacio",
    "make": "Toyota",
    "model": "Corolla Spacio",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-corollaverso",
    "make": "Toyota",
    "model": "Corolla Verso",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-corona",
    "make": "Toyota",
    "model": "Corona",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-coronaexiv",
    "make": "Toyota",
    "model": "Corona Exiv",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-coronapremio",
    "make": "Toyota",
    "model": "Corona Premio",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-coronasf",
    "make": "Toyota",
    "model": "Corona SF",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-cressida",
    "make": "Toyota",
    "model": "Cressida",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-crownkluger",
    "make": "Toyota",
    "model": "Crown Kluger",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-crownsignia",
    "make": "Toyota",
    "model": "Crown Signia",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-crownvellfire",
    "make": "Toyota",
    "model": "Crown Vellfire",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-curren",
    "make": "Toyota",
    "model": "Curren",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-duet",
    "make": "Toyota",
    "model": "Duet",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-echo",
    "make": "Toyota",
    "model": "Echo",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-esquire",
    "make": "Toyota",
    "model": "Esquire",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-estimaemina",
    "make": "Toyota",
    "model": "Estima Emina",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-estimalucida",
    "make": "Toyota",
    "model": "Estima Lucida",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-etios",
    "make": "Toyota",
    "model": "Etios",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-etioscross",
    "make": "Toyota",
    "model": "Etios Cross",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-frontlander",
    "make": "Toyota",
    "model": "Frontlander",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-funcargo",
    "make": "Toyota",
    "model": "Funcargo",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-grcorolla",
    "make": "Toyota",
    "model": "GR Corolla",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-granace",
    "make": "Toyota",
    "model": "GranAce",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-grandhiace",
    "make": "Toyota",
    "model": "Grand Hiace",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-grandhighlander",
    "make": "Toyota",
    "model": "Grand Highlander",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-granvia",
    "make": "Toyota",
    "model": "Granvia",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-gt86",
    "make": "Toyota",
    "model": "GT 86",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-hiaceregius",
    "make": "Toyota",
    "model": "Hiace Regius",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-highlander",
    "make": "Toyota",
    "model": "Highlander",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-hiluxchamp",
    "make": "Toyota",
    "model": "Hilux Champ",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-hiluxsurf",
    "make": "Toyota",
    "model": "Hilux Surf",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-iq",
    "make": "Toyota",
    "model": "iQ",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-isis",
    "make": "Toyota",
    "model": "Isis",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-izoa",
    "make": "Toyota",
    "model": "Izoa",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-jpntaxi",
    "make": "Toyota",
    "model": "JPN TAXI",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-klugerv",
    "make": "Toyota",
    "model": "Kluger V",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-landcruisercygnus",
    "make": "Toyota",
    "model": "Land Cruiser Cygnus",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-landcruiserfj",
    "make": "Toyota",
    "model": "Land Cruiser FJ",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-levin",
    "make": "Toyota",
    "model": "Levin",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-liteacenoah",
    "make": "Toyota",
    "model": "Lite Ace Noah",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-markiiwagonblit",
    "make": "Toyota",
    "model": "Mark II Wagon Blit",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-markiiwagonqualis",
    "make": "Toyota",
    "model": "Mark II Wagon Qualis",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-markxzio",
    "make": "Toyota",
    "model": "Mark X Zio",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-masteracesurf",
    "make": "Toyota",
    "model": "Master Ace Surf",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-matrix",
    "make": "Toyota",
    "model": "Matrix",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-megacruiser",
    "make": "Toyota",
    "model": "Mega Cruiser",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-modelf",
    "make": "Toyota",
    "model": "Model F",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-nadia",
    "make": "Toyota",
    "model": "Nadia",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-opa",
    "make": "Toyota",
    "model": "Opa",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-origin",
    "make": "Toyota",
    "model": "Origin",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-passosette",
    "make": "Toyota",
    "model": "Passo Sette",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-picnic",
    "make": "Toyota",
    "model": "Picnic",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-pixisepoch",
    "make": "Toyota",
    "model": "Pixis Epoch",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-pixisjoy",
    "make": "Toyota",
    "model": "Pixis Joy",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-pixismega",
    "make": "Toyota",
    "model": "Pixis Mega",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-pixisspace",
    "make": "Toyota",
    "model": "Pixis Space",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-pixisvan",
    "make": "Toyota",
    "model": "Pixis Van",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-previa",
    "make": "Toyota",
    "model": "Previa",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-priusc",
    "make": "Toyota",
    "model": "Prius C",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-priusphv",
    "make": "Toyota",
    "model": "Prius PHV",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-priusplus",
    "make": "Toyota",
    "model": "Prius Plus",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-priusprime",
    "make": "Toyota",
    "model": "Prius Prime",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-priusv",
    "make": "Toyota",
    "model": "Prius v",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-proace",
    "make": "Toyota",
    "model": "Proace",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-proacecity",
    "make": "Toyota",
    "model": "Proace City",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-proaceverso",
    "make": "Toyota",
    "model": "Proace Verso",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-progres",
    "make": "Toyota",
    "model": "Progres",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-pronard",
    "make": "Toyota",
    "model": "Pronard",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-publica",
    "make": "Toyota",
    "model": "Publica",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-raum",
    "make": "Toyota",
    "model": "Raum",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-regius",
    "make": "Toyota",
    "model": "Regius",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-reiz",
    "make": "Toyota",
    "model": "Reiz",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-sai",
    "make": "Toyota",
    "model": "Sai",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-scepter",
    "make": "Toyota",
    "model": "Scepter",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-sd",
    "make": "Toyota",
    "model": "SD",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-sequoia",
    "make": "Toyota",
    "model": "Sequoia",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-sf",
    "make": "Toyota",
    "model": "SF",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-sienna",
    "make": "Toyota",
    "model": "Sienna",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-solara",
    "make": "Toyota",
    "model": "Solara",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-soluna",
    "make": "Toyota",
    "model": "Soluna",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-spade",
    "make": "Toyota",
    "model": "Spade",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-sparky",
    "make": "Toyota",
    "model": "Sparky",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-sprintercarib",
    "make": "Toyota",
    "model": "Sprinter Carib",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-sprintermarino",
    "make": "Toyota",
    "model": "Sprinter Marino",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-sprintertrueno",
    "make": "Toyota",
    "model": "Sprinter Trueno",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-t100",
    "make": "Toyota",
    "model": "T100",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-tacoma",
    "make": "Toyota",
    "model": "Tacoma",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-tamaraw",
    "make": "Toyota",
    "model": "Tamaraw",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-tercel",
    "make": "Toyota",
    "model": "Tercel",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-touringhiace",
    "make": "Toyota",
    "model": "Touring Hiace",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-townacenoah",
    "make": "Toyota",
    "model": "Town Ace Noah",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-tundra",
    "make": "Toyota",
    "model": "Tundra",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-urbancruiser",
    "make": "Toyota",
    "model": "Urban Cruiser",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-veloz",
    "make": "Toyota",
    "model": "Veloz",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-venza",
    "make": "Toyota",
    "model": "Venza",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-verso",
    "make": "Toyota",
    "model": "Verso",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-versos",
    "make": "Toyota",
    "model": "Verso-S",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-vios",
    "make": "Toyota",
    "model": "Vios",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-vista",
    "make": "Toyota",
    "model": "Vista",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-vistaardeo",
    "make": "Toyota",
    "model": "Vista Ardeo",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-voltz",
    "make": "Toyota",
    "model": "Voltz",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-wigo",
    "make": "Toyota",
    "model": "Wigo",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-wildlander",
    "make": "Toyota",
    "model": "Wildlander",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-willcypha",
    "make": "Toyota",
    "model": "WiLL Cypha",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-willvi",
    "make": "Toyota",
    "model": "WiLL Vi",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-windom",
    "make": "Toyota",
    "model": "Windom",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-xa",
    "make": "Toyota",
    "model": "xA",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-yarisativ",
    "make": "Toyota",
    "model": "Yaris Ativ",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-yarisia",
    "make": "Toyota",
    "model": "Yaris iA",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-yarisl",
    "make": "Toyota",
    "model": "Yaris L",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "toyota-drom-yarisverso",
    "make": "Toyota",
    "model": "Yaris Verso",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "honda-drom-145",
    "make": "Honda",
    "model": "145",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "honda-drom-1300",
    "make": "Honda",
    "model": "1300",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "honda-drom-accordinspire",
    "make": "Honda",
    "model": "Accord Inspire",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "honda-drom-acty",
    "make": "Honda",
    "model": "Acty",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "honda-drom-ascotinnova",
    "make": "Honda",
    "model": "Ascot Innova",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "honda-drom-ballade",
    "make": "Honda",
    "model": "Ballade",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "honda-drom-breeze",
    "make": "Honda",
    "model": "Breeze",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "honda-drom-civicferio",
    "make": "Honda",
    "model": "Civic Ferio",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "honda-drom-civicshuttle",
    "make": "Honda",
    "model": "Civic Shuttle",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "honda-drom-concerto",
    "make": "Honda",
    "model": "Concerto",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "honda-drom-crxdelsol",
    "make": "Honda",
    "model": "CR-X del Sol",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "honda-drom-crider",
    "make": "Honda",
    "model": "Crider",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "honda-drom-crosstour",
    "make": "Honda",
    "model": "Crosstour",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "honda-drom-e",
    "make": "Honda",
    "model": "e",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "honda-drom-enp1",
    "make": "Honda",
    "model": "e:NP1",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "honda-drom-enp2",
    "make": "Honda",
    "model": "e:NP2",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "honda-drom-ens1",
    "make": "Honda",
    "model": "e:NS1",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "honda-drom-ens2",
    "make": "Honda",
    "model": "e:NS2",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "honda-drom-eny1",
    "make": "Honda",
    "model": "e:NY1",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "honda-drom-everusve1",
    "make": "Honda",
    "model": "Everus VE-1",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "honda-drom-fitaria",
    "make": "Honda",
    "model": "Fit Aria",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "honda-drom-fitshuttle",
    "make": "Honda",
    "model": "Fit Shuttle",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "honda-drom-frv",
    "make": "Honda",
    "model": "FR-V",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "honda-drom-freedspike",
    "make": "Honda",
    "model": "Freed Spike",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "honda-drom-horizon",
    "make": "Honda",
    "model": "Horizon",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "honda-drom-integrasj",
    "make": "Honda",
    "model": "Integra SJ",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "honda-drom-lagreat",
    "make": "Honda",
    "model": "Lagreat",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "honda-drom-lifedunk",
    "make": "Honda",
    "model": "Life Dunk",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "honda-drom-mnv",
    "make": "Honda",
    "model": "M-NV",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "honda-drom-mobiliospike",
    "make": "Honda",
    "model": "Mobilio Spike",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "honda-drom-nboxslash",
    "make": "Honda",
    "model": "N-BOX Slash",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "honda-drom-p7",
    "make": "Honda",
    "model": "P7",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "honda-drom-quint",
    "make": "Honda",
    "model": "Quint",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "honda-drom-rafaga",
    "make": "Honda",
    "model": "Rafaga",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "honda-drom-saber",
    "make": "Honda",
    "model": "Saber",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "honda-drom-s660",
    "make": "Honda",
    "model": "S660",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "honda-drom-s7",
    "make": "Honda",
    "model": "S7",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "honda-drom-street",
    "make": "Honda",
    "model": "Street",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "honda-drom-superone",
    "make": "Honda",
    "model": "Super-ONE",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "honda-drom-torneo",
    "make": "Honda",
    "model": "Torneo",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "honda-drom-urv",
    "make": "Honda",
    "model": "UR-V",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "honda-drom-vamoshobio",
    "make": "Honda",
    "model": "Vamos Hobio",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "honda-drom-vigor",
    "make": "Honda",
    "model": "Vigor",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "honda-drom-wrv",
    "make": "Honda",
    "model": "WR-V",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "honda-drom-xnv",
    "make": "Honda",
    "model": "X-NV",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "honda-drom-xrv",
    "make": "Honda",
    "model": "XR-V",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "honda-drom-z",
    "make": "Honda",
    "model": "Z",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "honda-drom-zrv",
    "make": "Honda",
    "model": "ZR-V",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mazda-drom-121",
    "make": "Mazda",
    "model": "121",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mazda-drom-1500",
    "make": "Mazda",
    "model": "1500",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mazda-drom-323c",
    "make": "Mazda",
    "model": "323C",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mazda-drom-323f",
    "make": "Mazda",
    "model": "323F",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mazda-drom-616",
    "make": "Mazda",
    "model": "616",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mazda-drom-818",
    "make": "Mazda",
    "model": "818",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mazda-drom-autozamaz3",
    "make": "Mazda",
    "model": "Autozam AZ-3",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mazda-drom-autozamclef",
    "make": "Mazda",
    "model": "Autozam Clef",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mazda-drom-axela",
    "make": "Mazda",
    "model": "Axela",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mazda-drom-azoffroad",
    "make": "Mazda",
    "model": "AZ-Offroad",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mazda-drom-azwagon",
    "make": "Mazda",
    "model": "AZ-Wagon",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mazda-drom-bongobrawny",
    "make": "Mazda",
    "model": "Bongo Brawny",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mazda-drom-bongofriendee",
    "make": "Mazda",
    "model": "Bongo Friendee",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mazda-drom-chantez",
    "make": "Mazda",
    "model": "Chantez",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mazda-drom-cronos",
    "make": "Mazda",
    "model": "Cronos",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mazda-drom-cx4",
    "make": "Mazda",
    "model": "CX-4",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mazda-drom-cx6e",
    "make": "Mazda",
    "model": "CX-6e",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mazda-drom-cx70",
    "make": "Mazda",
    "model": "CX-70",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mazda-drom-cx80",
    "make": "Mazda",
    "model": "CX-80",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mazda-drom-efinimpv",
    "make": "Mazda",
    "model": "Efini MPV",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mazda-drom-efinims6",
    "make": "Mazda",
    "model": "Efini MS-6",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mazda-drom-efinims8",
    "make": "Mazda",
    "model": "Efini MS-8",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mazda-drom-efinims9",
    "make": "Mazda",
    "model": "Efini MS-9",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mazda-drom-etude",
    "make": "Mazda",
    "model": "Etude",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mazda-drom-eunos100",
    "make": "Mazda",
    "model": "Eunos 100",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mazda-drom-eunos300",
    "make": "Mazda",
    "model": "Eunos 300",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mazda-drom-eunos500",
    "make": "Mazda",
    "model": "Eunos 500",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mazda-drom-eunos800",
    "make": "Mazda",
    "model": "Eunos 800",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mazda-drom-eunoscargo",
    "make": "Mazda",
    "model": "Eunos Cargo",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mazda-drom-eunoscosmo",
    "make": "Mazda",
    "model": "Eunos Cosmo",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mazda-drom-eunospresso",
    "make": "Mazda",
    "model": "Eunos Presso",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mazda-drom-eunosroadster",
    "make": "Mazda",
    "model": "Eunos Roadster",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mazda-drom-ez6",
    "make": "Mazda",
    "model": "EZ-6",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mazda-drom-ez60",
    "make": "Mazda",
    "model": "EZ-60",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mazda-drom-familiaswagon",
    "make": "Mazda",
    "model": "Familia S-Wagon",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mazda-drom-flair",
    "make": "Mazda",
    "model": "Flair",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mazda-drom-flaircrossover",
    "make": "Mazda",
    "model": "Flair Crossover",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mazda-drom-flairwagon",
    "make": "Mazda",
    "model": "Flair Wagon",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mazda-drom-grandfamilia",
    "make": "Mazda",
    "model": "Grand Familia",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mazda-drom-mazda3mps",
    "make": "Mazda",
    "model": "Mazda3 MPS",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mazda-drom-mazda6mps",
    "make": "Mazda",
    "model": "Mazda6 MPS",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mazda-drom-mazda6e",
    "make": "Mazda",
    "model": "Mazda6e",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mazda-drom-miata",
    "make": "Mazda",
    "model": "Miata",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mazda-drom-navajo",
    "make": "Mazda",
    "model": "Navajo",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mazda-drom-persona",
    "make": "Mazda",
    "model": "Persona",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mazda-drom-proceedlevante",
    "make": "Mazda",
    "model": "Proceed Levante",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mazda-drom-proceedmarvie",
    "make": "Mazda",
    "model": "Proceed Marvie",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mazda-drom-revue",
    "make": "Mazda",
    "model": "Revue",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mazda-drom-roadpacer",
    "make": "Mazda",
    "model": "Roadpacer",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mazda-drom-roadster",
    "make": "Mazda",
    "model": "Roadster",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mazda-drom-rx5",
    "make": "Mazda",
    "model": "RX-5",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mazda-drom-savanna",
    "make": "Mazda",
    "model": "Savanna",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mazda-drom-savannarx7",
    "make": "Mazda",
    "model": "Savanna RX-7",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mazda-drom-sentia",
    "make": "Mazda",
    "model": "Sentia",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mazda-drom-spiano",
    "make": "Mazda",
    "model": "Spiano",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mazda-drom-xedos6",
    "make": "Mazda",
    "model": "Xedos 6",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mazda-drom-xedos9",
    "make": "Mazda",
    "model": "Xedos 9",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mitsubishi-drom-3000gt",
    "make": "Mitsubishi",
    "model": "3000GT",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mitsubishi-drom-aspire",
    "make": "Mitsubishi",
    "model": "Aspire",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mitsubishi-drom-attrage",
    "make": "Mitsubishi",
    "model": "Attrage",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mitsubishi-drom-bravo",
    "make": "Mitsubishi",
    "model": "Bravo",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mitsubishi-drom-celeste",
    "make": "Mitsubishi",
    "model": "Celeste",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mitsubishi-drom-challenger",
    "make": "Mitsubishi",
    "model": "Challenger",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mitsubishi-drom-chariotgrandis",
    "make": "Mitsubishi",
    "model": "Chariot Grandis",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mitsubishi-drom-coltplus",
    "make": "Mitsubishi",
    "model": "Colt Plus",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mitsubishi-drom-cordia",
    "make": "Mitsubishi",
    "model": "Cordia",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mitsubishi-drom-debonair",
    "make": "Mitsubishi",
    "model": "Debonair",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mitsubishi-drom-delicad3",
    "make": "Mitsubishi",
    "model": "Delica D:3",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mitsubishi-drom-delicamini",
    "make": "Mitsubishi",
    "model": "Delica Mini",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mitsubishi-drom-destinator",
    "make": "Mitsubishi",
    "model": "Destinator",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mitsubishi-drom-dignity",
    "make": "Mitsubishi",
    "model": "Dignity",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mitsubishi-drom-dion",
    "make": "Mitsubishi",
    "model": "Dion",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mitsubishi-drom-eclipsesportback",
    "make": "Mitsubishi",
    "model": "Eclipse Sportback",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mitsubishi-drom-ekactive",
    "make": "Mitsubishi",
    "model": "eK Active",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mitsubishi-drom-ekclassy",
    "make": "Mitsubishi",
    "model": "eK Classy",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mitsubishi-drom-ekcustom",
    "make": "Mitsubishi",
    "model": "eK Custom",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mitsubishi-drom-ekspace",
    "make": "Mitsubishi",
    "model": "eK Space",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mitsubishi-drom-eksport",
    "make": "Mitsubishi",
    "model": "eK Sport",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mitsubishi-drom-ekxev",
    "make": "Mitsubishi",
    "model": "eK X EV",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mitsubishi-drom-emeraude",
    "make": "Mitsubishi",
    "model": "Emeraude",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mitsubishi-drom-endeavor",
    "make": "Mitsubishi",
    "model": "Endeavor",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mitsubishi-drom-eterna",
    "make": "Mitsubishi",
    "model": "Eterna",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mitsubishi-drom-expo",
    "make": "Mitsubishi",
    "model": "Expo",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mitsubishi-drom-freeca",
    "make": "Mitsubishi",
    "model": "Freeca",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mitsubishi-drom-galantfortis",
    "make": "Mitsubishi",
    "model": "Galant Fortis",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mitsubishi-drom-grunder",
    "make": "Mitsubishi",
    "model": "Grunder",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mitsubishi-drom-gto",
    "make": "Mitsubishi",
    "model": "GTO",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mitsubishi-drom-i",
    "make": "Mitsubishi",
    "model": "i",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mitsubishi-drom-jeep",
    "make": "Mitsubishi",
    "model": "Jeep",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mitsubishi-drom-l200",
    "make": "Mitsubishi",
    "model": "L200",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mitsubishi-drom-l300",
    "make": "Mitsubishi",
    "model": "L300",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mitsubishi-drom-l400",
    "make": "Mitsubishi",
    "model": "L400",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mitsubishi-drom-lancercedia",
    "make": "Mitsubishi",
    "model": "Lancer Cedia",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mitsubishi-drom-lancerex",
    "make": "Mitsubishi",
    "model": "Lancer EX",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mitsubishi-drom-lancerfortis",
    "make": "Mitsubishi",
    "model": "Lancer Fortis",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mitsubishi-drom-libero",
    "make": "Mitsubishi",
    "model": "Libero",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mitsubishi-drom-minicatoppo",
    "make": "Mitsubishi",
    "model": "Minica Toppo",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mitsubishi-drom-minicab",
    "make": "Mitsubishi",
    "model": "Minicab",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mitsubishi-drom-minicabmiev",
    "make": "Mitsubishi",
    "model": "Minicab MiEV",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mitsubishi-drom-miragedingo",
    "make": "Mitsubishi",
    "model": "Mirage Dingo",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mitsubishi-drom-montero",
    "make": "Mitsubishi",
    "model": "Montero",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mitsubishi-drom-monterosport",
    "make": "Mitsubishi",
    "model": "Montero Sport",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mitsubishi-drom-outlandersport",
    "make": "Mitsubishi",
    "model": "Outlander Sport",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mitsubishi-drom-pajeropinin",
    "make": "Mitsubishi",
    "model": "Pajero Pinin",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mitsubishi-drom-pistachio",
    "make": "Mitsubishi",
    "model": "Pistachio",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mitsubishi-drom-raider",
    "make": "Mitsubishi",
    "model": "Raider",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mitsubishi-drom-sapporo",
    "make": "Mitsubishi",
    "model": "Sapporo",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mitsubishi-drom-savrin",
    "make": "Mitsubishi",
    "model": "Savrin",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mitsubishi-drom-sigma",
    "make": "Mitsubishi",
    "model": "Sigma",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mitsubishi-drom-spacewagon",
    "make": "Mitsubishi",
    "model": "Space Wagon",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mitsubishi-drom-starion",
    "make": "Mitsubishi",
    "model": "Starion",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mitsubishi-drom-strada",
    "make": "Mitsubishi",
    "model": "Strada",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mitsubishi-drom-toppobj",
    "make": "Mitsubishi",
    "model": "Toppo BJ",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mitsubishi-drom-toppobjwide",
    "make": "Mitsubishi",
    "model": "Toppo BJ Wide",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mitsubishi-drom-townboxwide",
    "make": "Mitsubishi",
    "model": "Town Box Wide",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mitsubishi-drom-tredia",
    "make": "Mitsubishi",
    "model": "Tredia",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mitsubishi-drom-triton",
    "make": "Mitsubishi",
    "model": "Triton",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mitsubishi-drom-xforce",
    "make": "Mitsubishi",
    "model": "Xforce",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mitsubishi-drom-xpander",
    "make": "Mitsubishi",
    "model": "Xpander",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mitsubishi-drom-xpandercross",
    "make": "Mitsubishi",
    "model": "Xpander Cross",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "nissan-drom-100nx",
    "make": "Nissan",
    "model": "100NX",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "nissan-drom-almeraclassic",
    "make": "Nissan",
    "model": "Almera Classic",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "nissan-drom-ariya",
    "make": "Nissan",
    "model": "Ariya",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "nissan-drom-armada",
    "make": "Nissan",
    "model": "Armada",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "nissan-drom-aura",
    "make": "Nissan",
    "model": "Aura",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "nissan-drom-auster",
    "make": "Nissan",
    "model": "Auster",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "nissan-drom-avenir",
    "make": "Nissan",
    "model": "Avenir",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "nissan-drom-avenirsalut",
    "make": "Nissan",
    "model": "Avenir Salut",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "nissan-drom-bassara",
    "make": "Nissan",
    "model": "Bassara",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "nissan-drom-be1",
    "make": "Nissan",
    "model": "BE-1",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "nissan-drom-bluebirdmaxima",
    "make": "Nissan",
    "model": "Bluebird Maxima",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "nissan-drom-bluebirdsylphy",
    "make": "Nissan",
    "model": "Bluebird Sylphy",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "nissan-drom-caravanelgrand",
    "make": "Nissan",
    "model": "Caravan Elgrand",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "nissan-drom-cedriccima",
    "make": "Nissan",
    "model": "Cedric Cima",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "nissan-drom-cherry",
    "make": "Nissan",
    "model": "Cherry",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "nissan-drom-clipper",
    "make": "Nissan",
    "model": "Clipper",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "nissan-drom-crew",
    "make": "Nissan",
    "model": "Crew",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "nissan-drom-cubecubic",
    "make": "Nissan",
    "model": "Cube Cubic",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "nissan-drom-dayz",
    "make": "Nissan",
    "model": "DAYZ",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "nissan-drom-dayzroox",
    "make": "Nissan",
    "model": "DAYZ Roox",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "nissan-drom-env200",
    "make": "Nissan",
    "model": "e-NV200",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "nissan-drom-exa",
    "make": "Nissan",
    "model": "Exa",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "nissan-drom-expert",
    "make": "Nissan",
    "model": "Expert",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "nissan-drom-figaro",
    "make": "Nissan",
    "model": "Figaro",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "nissan-drom-frontier",
    "make": "Nissan",
    "model": "Frontier",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "nissan-drom-frontierpro",
    "make": "Nissan",
    "model": "Frontier Pro",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "nissan-drom-gloriacima",
    "make": "Nissan",
    "model": "Gloria Cima",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "nissan-drom-homy",
    "make": "Nissan",
    "model": "Homy",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "nissan-drom-homyelgrand",
    "make": "Nissan",
    "model": "Homy Elgrand",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "nissan-drom-hypermini",
    "make": "Nissan",
    "model": "Hypermini",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "nissan-drom-kait",
    "make": "Nissan",
    "model": "Kait",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "nissan-drom-kix",
    "make": "Nissan",
    "model": "Kix",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "nissan-drom-langley",
    "make": "Nissan",
    "model": "Langley",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "nissan-drom-lannia",
    "make": "Nissan",
    "model": "Lannia",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "nissan-drom-largo",
    "make": "Nissan",
    "model": "Largo",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "nissan-drom-latio",
    "make": "Nissan",
    "model": "Latio",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "nissan-drom-laurelspirit",
    "make": "Nissan",
    "model": "Laurel Spirit",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "nissan-drom-leopard",
    "make": "Nissan",
    "model": "Leopard",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "nissan-drom-libertavilla",
    "make": "Nissan",
    "model": "Liberta Villa",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "nissan-drom-livina",
    "make": "Nissan",
    "model": "Livina",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "nissan-drom-lucino",
    "make": "Nissan",
    "model": "Lucino",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "nissan-drom-magnite",
    "make": "Nissan",
    "model": "Magnite",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "nissan-drom-marchbox",
    "make": "Nissan",
    "model": "March Box",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "nissan-drom-micracc",
    "make": "Nissan",
    "model": "Micra C+C",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "nissan-drom-moco",
    "make": "Nissan",
    "model": "Moco",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "nissan-drom-n6",
    "make": "Nissan",
    "model": "N6",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "nissan-drom-n7",
    "make": "Nissan",
    "model": "N7",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "nissan-drom-navarapro",
    "make": "Nissan",
    "model": "Navara Pro",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "nissan-drom-np300",
    "make": "Nissan",
    "model": "NP300",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "nissan-drom-nv100clipper",
    "make": "Nissan",
    "model": "NV100 Clipper",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "nissan-drom-nv300",
    "make": "Nissan",
    "model": "NV300",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "nissan-drom-nv350caravan",
    "make": "Nissan",
    "model": "NV350 Caravan",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "nissan-drom-nxcoupe",
    "make": "Nissan",
    "model": "NX-Coupe",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "nissan-drom-nx7",
    "make": "Nissan",
    "model": "NX7",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "nissan-drom-nx8",
    "make": "Nissan",
    "model": "NX8",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "nissan-drom-otti",
    "make": "Nissan",
    "model": "Otti",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "nissan-drom-pao",
    "make": "Nissan",
    "model": "Pao",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "nissan-drom-pixo",
    "make": "Nissan",
    "model": "Pixo",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "nissan-drom-prairie",
    "make": "Nissan",
    "model": "Prairie",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "nissan-drom-prairiejoy",
    "make": "Nissan",
    "model": "Prairie Joy",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "nissan-drom-presage",
    "make": "Nissan",
    "model": "Presage",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "nissan-drom-presea",
    "make": "Nissan",
    "model": "Presea",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "nissan-drom-president",
    "make": "Nissan",
    "model": "President",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "nissan-drom-primastar",
    "make": "Nissan",
    "model": "Primastar",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "nissan-drom-primeracamino",
    "make": "Nissan",
    "model": "Primera Camino",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "nissan-drom-qashqai2",
    "make": "Nissan",
    "model": "Qashqai+2",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "nissan-drom-quest",
    "make": "Nissan",
    "model": "Quest",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "nissan-drom-roguepluginhybrid",
    "make": "Nissan",
    "model": "Rogue Plug-in Hybrid",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "nissan-drom-roguesport",
    "make": "Nissan",
    "model": "Rogue Sport",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "nissan-drom-roox",
    "make": "Nissan",
    "model": "Roox",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "nissan-drom-scargo",
    "make": "Nissan",
    "model": "S-Cargo",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "nissan-drom-sakura",
    "make": "Nissan",
    "model": "Sakura",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "nissan-drom-sentra",
    "make": "Nissan",
    "model": "Sentra",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "nissan-drom-skylinecrossover",
    "make": "Nissan",
    "model": "Skyline Crossover",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "nissan-drom-skylinegtr",
    "make": "Nissan",
    "model": "Skyline GT-R",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "nissan-drom-stanza",
    "make": "Nissan",
    "model": "Stanza",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "nissan-drom-sunnycalifornia",
    "make": "Nissan",
    "model": "Sunny California",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "nissan-drom-sunnyrz1",
    "make": "Nissan",
    "model": "Sunny RZ-1",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "nissan-drom-sylphy",
    "make": "Nissan",
    "model": "Sylphy",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "nissan-drom-tekton",
    "make": "Nissan",
    "model": "Tekton",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "nissan-drom-terra",
    "make": "Nissan",
    "model": "Terra",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "nissan-drom-terranoii",
    "make": "Nissan",
    "model": "Terrano II",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "nissan-drom-terranoregulus",
    "make": "Nissan",
    "model": "Terrano Regulus",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "nissan-drom-tiidalatio",
    "make": "Nissan",
    "model": "Tiida Latio",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "nissan-drom-urvan",
    "make": "Nissan",
    "model": "Urvan",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "nissan-drom-vanetteserena",
    "make": "Nissan",
    "model": "Vanette Serena",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "nissan-drom-versa",
    "make": "Nissan",
    "model": "Versa",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "nissan-drom-versanote",
    "make": "Nissan",
    "model": "Versa Note",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "nissan-drom-violet",
    "make": "Nissan",
    "model": "Violet",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "nissan-drom-volkswagensantana",
    "make": "Nissan",
    "model": "Volkswagen Santana",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "nissan-drom-xterra",
    "make": "Nissan",
    "model": "Xterra",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "nissan-drom-z",
    "make": "Nissan",
    "model": "Z",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "subaru-drom-brat",
    "make": "Subaru",
    "model": "Brat",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "subaru-drom-chiffon",
    "make": "Subaru",
    "model": "Chiffon",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "subaru-drom-domingo",
    "make": "Subaru",
    "model": "Domingo",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "subaru-drom-exigacrossover7",
    "make": "Subaru",
    "model": "Exiga Crossover 7",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "subaru-drom-getaway",
    "make": "Subaru",
    "model": "Getaway",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "subaru-drom-imprezawrxsti",
    "make": "Subaru",
    "model": "Impreza WRX STI",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "subaru-drom-imprezaxv",
    "make": "Subaru",
    "model": "Impreza XV",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "subaru-drom-layback",
    "make": "Subaru",
    "model": "Layback",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "subaru-drom-legacyb4",
    "make": "Subaru",
    "model": "Legacy B4",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "subaru-drom-legacylancaster",
    "make": "Subaru",
    "model": "Legacy Lancaster",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "subaru-drom-pleoplus",
    "make": "Subaru",
    "model": "Pleo Plus",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "subaru-drom-solterra",
    "make": "Subaru",
    "model": "Solterra",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "subaru-drom-trailseeker",
    "make": "Subaru",
    "model": "Trailseeker",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "subaru-drom-uncharted",
    "make": "Subaru",
    "model": "Uncharted",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "subaru-drom-xt",
    "make": "Subaru",
    "model": "XT",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "suzuki-drom-across",
    "make": "Suzuki",
    "model": "Across",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "suzuki-drom-aerio",
    "make": "Suzuki",
    "model": "Aerio",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "suzuki-drom-alivio",
    "make": "Suzuki",
    "model": "Alivio",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "suzuki-drom-altolapin",
    "make": "Suzuki",
    "model": "Alto Lapin",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "suzuki-drom-cara",
    "make": "Suzuki",
    "model": "Cara",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "suzuki-drom-carryvan",
    "make": "Suzuki",
    "model": "Carry Van",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "suzuki-drom-ciaz",
    "make": "Suzuki",
    "model": "Ciaz",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "suzuki-drom-eevery",
    "make": "Suzuki",
    "model": "e Every",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "suzuki-drom-esky",
    "make": "Suzuki",
    "model": "e Sky",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "suzuki-drom-evitara",
    "make": "Suzuki",
    "model": "e Vitara",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "suzuki-drom-eeco",
    "make": "Suzuki",
    "model": "Eeco",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "suzuki-drom-equator",
    "make": "Suzuki",
    "model": "Equator",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "suzuki-drom-ertiga",
    "make": "Suzuki",
    "model": "Ertiga",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "suzuki-drom-esteem",
    "make": "Suzuki",
    "model": "Esteem",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "suzuki-drom-forenza",
    "make": "Suzuki",
    "model": "Forenza",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "suzuki-drom-fronx",
    "make": "Suzuki",
    "model": "Fronx",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "suzuki-drom-grandescudo",
    "make": "Suzuki",
    "model": "Grand Escudo",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "suzuki-drom-grandvitaraxl7",
    "make": "Suzuki",
    "model": "Grand Vitara XL-7",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "suzuki-drom-jimnysierra",
    "make": "Suzuki",
    "model": "Jimny Sierra",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "suzuki-drom-jimnywide",
    "make": "Suzuki",
    "model": "Jimny Wide",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "suzuki-drom-mightyboy",
    "make": "Suzuki",
    "model": "Mighty Boy",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "suzuki-drom-reno",
    "make": "Suzuki",
    "model": "Reno",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "suzuki-drom-scross",
    "make": "Suzuki",
    "model": "S-Cross",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "suzuki-drom-spresso",
    "make": "Suzuki",
    "model": "S-Presso",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "suzuki-drom-samurai",
    "make": "Suzuki",
    "model": "Samurai",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "suzuki-drom-sidekick",
    "make": "Suzuki",
    "model": "Sidekick",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "suzuki-drom-swace",
    "make": "Suzuki",
    "model": "Swace",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "suzuki-drom-verona",
    "make": "Suzuki",
    "model": "Verona",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "suzuki-drom-wagonrplus",
    "make": "Suzuki",
    "model": "Wagon R Plus",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "suzuki-drom-wagonrsmile",
    "make": "Suzuki",
    "model": "Wagon R Smile",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "suzuki-drom-wagonrsolio",
    "make": "Suzuki",
    "model": "Wagon R Solio",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "suzuki-drom-wagonrwide",
    "make": "Suzuki",
    "model": "Wagon R Wide",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "suzuki-drom-works",
    "make": "Suzuki",
    "model": "Works",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "suzuki-drom-xbee",
    "make": "Suzuki",
    "model": "Xbee",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "acura-drom-adx",
    "make": "Acura",
    "model": "ADX",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "acura-drom-cdx",
    "make": "Acura",
    "model": "CDX",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "acura-drom-el",
    "make": "Acura",
    "model": "EL",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "acura-drom-slx",
    "make": "Acura",
    "model": "SLX",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "acura-drom-vigor",
    "make": "Acura",
    "model": "Vigor",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "datsun-drom-cross",
    "make": "Datsun",
    "model": "Cross",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "datsun-drom-go",
    "make": "Datsun",
    "model": "Go",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "infiniti-drom-esq",
    "make": "Infiniti",
    "model": "ESQ",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "infiniti-drom-ex25",
    "make": "Infiniti",
    "model": "EX25",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "infiniti-drom-ex30d",
    "make": "Infiniti",
    "model": "EX30d",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "infiniti-drom-ex35",
    "make": "Infiniti",
    "model": "EX35",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "infiniti-drom-ex37",
    "make": "Infiniti",
    "model": "EX37",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "infiniti-drom-fx30d",
    "make": "Infiniti",
    "model": "FX30d",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "infiniti-drom-fx45",
    "make": "Infiniti",
    "model": "FX45",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "infiniti-drom-fx50",
    "make": "Infiniti",
    "model": "FX50",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "infiniti-drom-g20",
    "make": "Infiniti",
    "model": "G20",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "infiniti-drom-i30",
    "make": "Infiniti",
    "model": "I30",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "infiniti-drom-i35",
    "make": "Infiniti",
    "model": "I35",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "infiniti-drom-j30",
    "make": "Infiniti",
    "model": "J30",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "infiniti-drom-jx35",
    "make": "Infiniti",
    "model": "JX35",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "infiniti-drom-m25",
    "make": "Infiniti",
    "model": "M25",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "infiniti-drom-m30",
    "make": "Infiniti",
    "model": "M30",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "infiniti-drom-m30d",
    "make": "Infiniti",
    "model": "M30d",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "infiniti-drom-m35",
    "make": "Infiniti",
    "model": "M35",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "infiniti-drom-m35h",
    "make": "Infiniti",
    "model": "M35h",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "infiniti-drom-m37",
    "make": "Infiniti",
    "model": "M37",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "infiniti-drom-m45",
    "make": "Infiniti",
    "model": "M45",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "infiniti-drom-m56",
    "make": "Infiniti",
    "model": "M56",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "infiniti-drom-qx65",
    "make": "Infiniti",
    "model": "QX65",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "isuzu-drom-117coupe",
    "make": "Isuzu",
    "model": "117 Coupe",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "isuzu-drom-axiom",
    "make": "Isuzu",
    "model": "Axiom",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "isuzu-drom-como",
    "make": "Isuzu",
    "model": "Como",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "isuzu-drom-fargofilly",
    "make": "Isuzu",
    "model": "Fargo Filly",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "isuzu-drom-faster",
    "make": "Isuzu",
    "model": "Faster",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "isuzu-drom-filly",
    "make": "Isuzu",
    "model": "Filly",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "isuzu-drom-florian",
    "make": "Isuzu",
    "model": "Florian",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "isuzu-drom-imark",
    "make": "Isuzu",
    "model": "I-Mark",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "isuzu-drom-lingtuo",
    "make": "Isuzu",
    "model": "Lingtuo",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "isuzu-drom-midi",
    "make": "Isuzu",
    "model": "Midi",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "isuzu-drom-mux",
    "make": "Isuzu",
    "model": "MU-X",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "isuzu-drom-panero",
    "make": "Isuzu",
    "model": "Pa Nero",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "isuzu-drom-piazzanero",
    "make": "Isuzu",
    "model": "Piazza Nero",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "isuzu-drom-remaxruimai",
    "make": "Isuzu",
    "model": "RE-MAX Ruimai",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "isuzu-drom-t30explorer",
    "make": "Isuzu",
    "model": "T30 Explorer",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mitsuoka-drom-galueclassic",
    "make": "Mitsuoka",
    "model": "Galue Classic",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mitsuoka-drom-galueconvertible",
    "make": "Mitsuoka",
    "model": "Galue Convertible",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mitsuoka-drom-galue204",
    "make": "Mitsuoka",
    "model": "Galue204",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mitsuoka-drom-la1",
    "make": "Mitsuoka",
    "model": "LA1",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mitsuoka-drom-m55",
    "make": "Mitsuoka",
    "model": "M55",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mitsuoka-drom-microcar",
    "make": "Mitsuoka",
    "model": "Micro Car",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mitsuoka-drom-nouera",
    "make": "Mitsuoka",
    "model": "Nouera",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mitsuoka-drom-rockstar",
    "make": "Mitsuoka",
    "model": "Rock Star",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "mitsuoka-drom-ryugi",
    "make": "Mitsuoka",
    "model": "Ryugi",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "daihatsu-drom-bee",
    "make": "Daihatsu",
    "model": "Bee",
    "source": "Auto.ru",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Auto.ru; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "daihatsu-drom-boonluminas",
    "make": "Daihatsu",
    "model": "Boon Luminas",
    "source": "Auto.ru",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Auto.ru; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "daihatsu-drom-ceria",
    "make": "Daihatsu",
    "model": "Ceria",
    "source": "Auto.ru",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Auto.ru; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "daihatsu-drom-charade",
    "make": "Daihatsu",
    "model": "Charade",
    "source": "Auto.ru",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Auto.ru; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "daihatsu-drom-charmant",
    "make": "Daihatsu",
    "model": "Charmant",
    "source": "Auto.ru",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Auto.ru; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "daihatsu-drom-coo",
    "make": "Daihatsu",
    "model": "Coo",
    "source": "Auto.ru",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Auto.ru; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "daihatsu-drom-deltawagon",
    "make": "Daihatsu",
    "model": "Delta Wagon",
    "source": "Auto.ru",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Auto.ru; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "daihatsu-drom-extol",
    "make": "Daihatsu",
    "model": "Extol",
    "source": "Auto.ru",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Auto.ru; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "daihatsu-drom-fellow",
    "make": "Daihatsu",
    "model": "Fellow",
    "source": "Auto.ru",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Auto.ru; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "daihatsu-drom-granmove",
    "make": "Daihatsu",
    "model": "Gran Move",
    "source": "Auto.ru",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Auto.ru; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "daihatsu-drom-hijetcaddie",
    "make": "Daihatsu",
    "model": "Hijet Caddie",
    "source": "Auto.ru",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Auto.ru; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "daihatsu-drom-materia",
    "make": "Daihatsu",
    "model": "Materia",
    "source": "Auto.ru",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Auto.ru; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "daihatsu-drom-max",
    "make": "Daihatsu",
    "model": "MAX",
    "source": "Auto.ru",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Auto.ru; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "daihatsu-drom-midget",
    "make": "Daihatsu",
    "model": "Midget",
    "source": "Auto.ru",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Auto.ru; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "daihatsu-drom-miracocoa",
    "make": "Daihatsu",
    "model": "Mira Cocoa",
    "source": "Auto.ru",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Auto.ru; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "daihatsu-drom-miraes",
    "make": "Daihatsu",
    "model": "Mira e:S",
    "source": "Auto.ru",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Auto.ru; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "daihatsu-drom-miragino",
    "make": "Daihatsu",
    "model": "Mira Gino",
    "source": "Auto.ru",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Auto.ru; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "daihatsu-drom-miratocot",
    "make": "Daihatsu",
    "model": "Mira Tocot",
    "source": "Auto.ru",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Auto.ru; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "daihatsu-drom-movecanbus",
    "make": "Daihatsu",
    "model": "Move Canbus",
    "source": "Auto.ru",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Auto.ru; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "daihatsu-drom-moveconte",
    "make": "Daihatsu",
    "model": "Move Conte",
    "source": "Auto.ru",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Auto.ru; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "daihatsu-drom-movelatte",
    "make": "Daihatsu",
    "model": "Move Latte",
    "source": "Auto.ru",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Auto.ru; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "daihatsu-drom-pyzar",
    "make": "Daihatsu",
    "model": "Pyzar",
    "source": "Auto.ru",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Auto.ru; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "daihatsu-drom-rugger",
    "make": "Daihatsu",
    "model": "Rugger",
    "source": "Auto.ru",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Auto.ru; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "daihatsu-drom-tantoexe",
    "make": "Daihatsu",
    "model": "Tanto Exe",
    "source": "Auto.ru",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Auto.ru; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "daihatsu-drom-wildcat",
    "make": "Daihatsu",
    "model": "Wildcat",
    "source": "Auto.ru",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Auto.ru; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "daihatsu-drom-xenia",
    "make": "Daihatsu",
    "model": "Xenia",
    "source": "Auto.ru",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Auto.ru; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "datsun-drom-mi-do",
    "make": "Datsun",
    "model": "mi-Do",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  },
  {
    "id": "datsun-drom-on-do",
    "make": "Datsun",
    "model": "on-DO",
    "source": "Drom",
    "recordStatus": "model-family-seeded-generation-import-pending",
    "note": "Модель перенесена из каталога Drom; поколения, кузова, годы и модификации требуют отдельной сверки."
  }
];
const familyKeys = new Set(JAPANESE_MODEL_FAMILIES.map((item) => item.make + '|' + item.model.toLocaleLowerCase('en').replace(/[^a-z0-9]/g, '')));
for (const item of importedCatalogModels) {
  const key = item.make + '|' + item.model.toLocaleLowerCase('en').replace(/[^a-z0-9]/g, '');
  if (familyKeys.has(key)) continue;
  familyKeys.add(key);
  JAPANESE_MODEL_FAMILIES.push(item);
}
