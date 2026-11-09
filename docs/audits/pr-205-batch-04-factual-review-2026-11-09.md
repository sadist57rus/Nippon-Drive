# PR #205 — factual review, batch 04 (records 151–200)

Date: 2026-11-09  
PR: https://github.com/sadist57rus/Nippon-Drive/pull/205  
Reviewed source snapshot: `src/data/packs/drom-verified-batch-01.json`, 513 variants; records 151–200 (array slice 150–199).  
Review basis: PR HEAD before this report `3480cdbf6fe8a616d08cdb2ea6044fb1c7ee92f7`; JSON-only follow-up commit: `b8b2057fbfa87c07bfe3c7f2ef90a9709dcd1763`.

## Scope and method

Reviewed all 50 records as one batch, grouped by vehicle family. Compared Drom-derived entries with the available manufacturer material and Drom catalog pages. Drom is treated as a secondary reference; it does not replace an OEM manual, market brochure, parts catalogue or VIN-specific evidence. No record was upgraded to `verified`. No engine, gearbox, market, power, dimension or fitment value was silently changed.

## Batch composition

| Records | Family | Count |
|---|---|---:|
| 151–165 | Suzuki Jimny JB43 / JB64, M13A / G13BB / K9K / K15B | 15 |
| 166–193 | Nissan Patrol Y61, SUV and pickup, TB42S / TD42 / TB45E / TB48DE / ZD30DDTi | 28 |
| 194–200 | Toyota Land Cruiser 100, HZJ105 / HDJ100 / UZJ100 | 7 |
| **Total** | | **50** |

## Findings

### 151–165 — Suzuki Jimny (15 records)

**Records 151–152 require a source-conflict flag.** The imported records describe a 2018–2022 JB64 with K15B, 1,462 cc and 102 hp. Drom's engine-capacity table currently presents this combination under the JB64 heading for Russia and Europe. However, Suzuki's own 2018 launch release distinguishes the standard Jimny, equipped with the R06A turbo engine, from the Jimny Sierra, equipped with the 1.5-litre K15B. Suzuki's Digital Library identifies the JB64W as R06A, 658 cc, 64 PS. Drom's table therefore conflicts with the manufacturer's chassis/engine mapping. The records must remain partially verified. The catalog now explicitly flags the body-code/engine pairing as unresolved; no automatic change from JB64 to JB74 was made because the exact vehicle/frame and market evidence has not been established.

**Records 153–159 — Russian JB43.** Drom's Jimny engine table supports the listed M13A and G13BB engine families and their displacement/power combinations across the relevant year groups. Exact gearbox pairing, especially the 1998–2005 M13A automatic entry, still needs checking against the corresponding transmission table or a market-specific brochure. Do not infer gearbox codes from MT/AT labels.

**Records 160–165 — European JB43.** Drom lists M13A 1,328 cc / 86 hp and K9K 266 1,461 cc / 86 hp for the relevant European JB43 periods. This supports the broad engine-family data, but not every trim/market combination or exact transmission code. The engine suffix, emissions calibration and market-specific equipment still require primary documentation.

Sources:
- Suzuki, 2018 Jimny and Jimny Sierra launch release: https://www.suzuki.co.jp/release/a/2018/0705/
- Suzuki Digital Library, four-wheel vehicles / Jimny: https://www.suzuki.co.jp/suzuki_digital_library/1_auto/jimny.html
- Suzuki official JB64 history/specifications: https://www.suzuki.co.jp/car/jimny/special/history/jb64.html
- Drom, Jimny engine capacity by market and chassis: https://www.drom.ru/catalog/suzuki/jimny/specs/engine_capacity/
- Drom, Jimny transmission: https://www.drom.ru/catalog/suzuki/jimny/specs/transmission/

### 166–193 — Nissan Patrol Y61 (28 records)

The Drom engine-capacity and torque tables support the broad engine families and many listed output/torque values: TB42S 4,169 cc / 200 hp / 320 Nm; TD42 4,169 cc / 145 hp / 331 Nm in the earlier specification and 135 hp / 285 Nm in the later one; TB45E 4,478 cc with 200 or 230 hp depending on the listed period/market; TB48DE 4,758 cc with 245 or 280 hp; and ZD30DDTi 2,953 cc / 160 hp / 380 Nm. These are source-table values, not proof that every body style, market and gearbox pairing in the batch is correct.

**Records 166–184:** the source records do not establish one sales market consistently. Drom's year pages separate Russia, Europe and UAE into distinct sections; several engine/body combinations in this batch appear in the UAE section, while other source references are generic engine/transmission tables. Keep the market limitation in place until the exact market and grade are tied to a market-specific Drom card or primary document. In particular, do not use an engine-capacity table alone to infer sales market.

**Records 185–193:** the UAE assignment is consistent with Drom's 2001 catalog page. That page lists the relevant UAE-market 5-door SUV engines, the 3-door 4.8 AT variant and the pickup variants, with the listed production periods. This is a useful market-specific secondary cross-check, but it does not independently establish VIN-level gearbox codes or maintenance specifications.

**Records 178–184:** the 3-door/5-door TB45E and TB48DE combinations and 245/280 hp variants need exact trim/year matching. The same engine family appears in several body styles and markets; keep body style separate and do not collapse these records merely because their Y61 body code and engine are shared.

Sources:
- Drom, Nissan Patrol engine capacity: https://www.drom.ru/catalog/nissan/patrol/specs/engine_capacity/
- Drom, Nissan Patrol engine torque: https://www.drom.ru/catalog/nissan/patrol/specs/engine_torque/
- Drom, Nissan Patrol 2001 market-specific catalog: https://www.drom.ru/catalog/nissan/patrol/2001/
- Drom, Nissan Patrol 2004 market-specific catalog: https://www.drom.ru/catalog/nissan/patrol/2004/
- Drom, Nissan Patrol 2007 catalog: https://www.drom.ru/catalog/nissan/patrol/2007/

### 194–200 — Toyota Land Cruiser 100 (7 records)

Drom's 2001 catalog explicitly lists HZJ105 4.2 MT STD R1 / GX R1 / GX R2 with engine designation `1HZ-Z`, and production windows including 11.2001–07.2002. Therefore, the `1HZ-Z` designation in record 200 is not treated as a typo and was not normalized to `1HZ`. The same Drom catalog distinguishes HZJ105 / 1HZ-Z, HDJ100 / 1HD-FTE and UZJ100 / 2UZ-FE. Records 194–199 use the later 2002-market catalog reference and remain secondary-reference entries pending matching Toyota market brochures, service documentation or VIN-specific parts data.

The exact gearbox codes, dimensions for each grade, tyre/wheel fitments and service-fluid specifications remain unverified. Do not reuse a general LC100 specification across HZJ105, HDJ100 and UZJ100 without checking the frame, market and transmission.

Sources:
- Drom, Toyota Land Cruiser 2001 catalog: https://www.drom.ru/catalog/toyota/land_cruiser/2001/
- Drom, Toyota Land Cruiser 2002 catalog: https://www.drom.ru/catalog/toyota/land_cruiser/2002/

## Missing-data limitations added

The 50 records had no values for tyres, wheel fitments, wiper sizes or the five service-fluid groups below. Explicit field-level limitations were added where absent; no values were guessed or filled.

| Field | Missing in batch | Limitation status after update |
|---|---:|---|
| Dimensions | 50 | Already limited in all 50 |
| Tyres | 50 | Limited in all 50 |
| Wheel fitments | 50 | Limited in all 50 |
| Wiper blade sizes | 50 | Limited in all 50 |
| Engine oil | 50 | Limited in all 50 |
| Transmission fluid | 50 | Limited in all 50 |
| Transfer-case fluid | 50 | Limited in all 50 |
| Differential fluid | 50 | Limited in all 50 |
| Coolant | 50 | Limited in all 50 |

The new limitations state that tyre sizes/indices, wheel PCD/DIA/ET, wiper sizes and exact service-fluid specifications/capacities are not confirmed for the specific variant. They require OEM documentation or VIN-specific confirmation.

## Structural checks

- Records reviewed: **50 / 50** (151–200).
- Verification status: all 50 remain `partially-verified`.
- Sources: all 50 currently cite secondary references; none is promoted to primary-source verification.
- Duplicate IDs in the full 513-record package: **0**.
- Duplicate exact identities using the importer's current key (including body style and steering position): **0**.
- Existing model IDs and generation IDs: unchanged.
- Technical values and variant IDs: unchanged.
- Catalog JSON changes in this follow-up: limitations only.

## Result

The batch is reviewed, but not fully verified. The JB64/K15B conflict is explicitly recorded for later resolution from a frame/VIN or market-specific primary source. Patrol market and body-style pairings still need exact matching. Land Cruiser `1HZ-Z` is retained because Drom's catalog uses that designation for the HZJ105 entries.

PR remains Draft. This review does not authorize merging.
