# PR #205 — factual review, batch 05 (records 201–250)

Date: 2026-11-09  
PR: https://github.com/sadist57rus/Nippon-Drive/pull/205  
Reviewed source snapshot: `src/data/packs/drom-verified-batch-01.json`, 513 variants; records 201–250 (array slice 200–249).  
Review basis: source snapshot at HEAD `dffaee353912735fccf0347acb85c89f56554f54`; limitation-only follow-up commits: `78e5126511b98bedd0abb6eea0ec7266698f9dcf` and `c9a10a70d50786047f7682bfbfb4d3c54c0d6356`.

## Scope and method

Reviewed all 50 records as one batch against the market-separated Drom Toyota Land Cruiser 2002 catalog page. Expanded the additional Japan-market trim list before checking records 213–234 and 249–250. Checked that market, chassis code, engine, transmission type, grade and production period match the appropriate Drom section. Drom remains a secondary reference; matching a catalog row does not replace Toyota primary documentation or VIN-specific confirmation.

No vehicle specification, variant ID, model ID or generation ID was changed. All 50 records remain `partially-verified`.

## Batch composition

| Records | Market / configuration | Count |
|---|---|---:|
| 201–207 | Russia, 2001–2002 HZJ105 / HDJ100 / UZJ100 | 7 |
| 208–212 | Japan, 2002–2003 KR-HDJ101K / GH-UZJ100W | 5 |
| 213–234 | Japan, 2000–2002 KG-HDJ101K / GF-UZJ100W | 22 |
| 235–236 | USA, UZJ100 4.7 AT | 2 |
| 237–248 | UAE, HZJ105 / FZJ100 / UZJ100 | 12 |
| 249–250 | Japan, KG-HDJ101K 4.2 AT | 2 |
| **Total** | | **50** |

## Findings

### 201–207 — Russia, 2001–2002

Drom's Russia section lists the matching pre-facelift variants for 11.2001–07.2002:
- HZJ105 4.2 MT STD R1 / GX R1 / GX R2, engine `1HZ-Z`, 131 hp.
- HDJ100 4.2 MT VX R2, `1HD-FTE`, 204 hp.
- HDJ100 4.2 AT VX R2 / VX 50, `1HD-FTE`, 204 hp.
- UZJ100 4.7 AT VX R2 / VX 50, `2UZ-FE`, 235 hp.

The engine and grade mapping, body codes, transmission type and model period match the Drom catalog section. The `1HZ-Z` suffix is intentionally retained: Drom explicitly uses that designation for the 2001–2002 HZJ105 rows. Do not normalize it to `1HZ` without VIN-specific or Toyota parts-catalog evidence.

### 208–212 — Japan, 2002–2003

Drom's Japan section lists:
- KR-HDJ101K 4.2 VX Limited G Selection / VX Limited, `1HD-FTE`, 196 hp, AT, 08.2002–07.2003.
- GH-UZJ100W 4.7 100 VX / VX Limited / VX Limited G Selection, `2UZ-FE`, 235 hp, AT, 08.2002–07.2003.

All five records match the listed body code, engine, transmission, grade and production window.

### 213–234 — Japan, 2000–2002

The expanded Japan-market list supports the KG-HDJ101K 4.2 `1HD-FTE` variants at 205 hp, including the manual VX / Active Vacation grades and automatic VX Limited / 50th Anniversary / G Selection / Active Vacation grades. It also lists GF-UZJ100W 4.7 `2UZ-FE` variants at 235 hp with the corresponding VX, VX Limited, G Selection, 50th Anniversary and Active Vacation grade names.

The 22 records correspond to the market-specific Drom entries. Keep the trim distinctions: e.g. VX and VX Limited, or Active Vacation and Limited Active Vacation, are not interchangeable. Their common chassis/engine does not make them duplicate variants.

### 235–236 — USA

Drom separates the US UZJ100 4.7 AT variants:
- 09.2002–01.2005: 235 hp.
- 01.1998–08.2002: 230 hp.

The two records preserve the different output and production periods. Do not merge them into one US-market 2UZ-FE entry.

### 237–248 — UAE

Drom's UAE section supports:
- HZJ105 4.2 MT GX-R, `1HZ`, 131 hp.
- FZJ100 4.5 MT GX-R / MT G / AT GX-R, `1FZ-FE`, 211 hp.
- UZJ100 4.7 MT VX-R / AT VX-R, `2UZ-FE`, 238 hp.

Both the 08.2002–03.2005 facelift entries and 01.1998–07.2002 earlier entries are represented. The batch preserves market and transmission differences.

### 249–250 — Japan, 2000–2002

The expanded Drom list includes the KG-HDJ101K 4.2 VX diesel turbo and VX Active Vacation Type A automatic variants, `1HD-FTE`, 205 hp, 05.2000–07.2002. These are separate from the VX Limited / Limited Active Vacation variants in records 219–220; the trim names differ and should remain separate.

## Data-quality and limitation updates

All 50 records have no dimensions, tyre sizes, wheel fitments, wiper sizes or the five service-fluid specifications/capacities. Existing limitations already covered dimensions, tyres and wheel fitments. The following missing fields had no limitation and are now explicitly marked:

| Field | Missing in batch | Limitation added |
|---|---:|---:|
| Wiper blade sizes | 50 | 50 |
| Engine torque | 50 | 50 |
| Engine oil specification/capacity | 50 | 50 |
| Transmission fluid specification/capacity | 50 | 50 |
| Transfer-case fluid specification/capacity | 50 | 50 |
| Differential fluid specification/capacity | 50 | 50 |
| Coolant specification/capacity | 50 | 50 |
| Steering position | 21 unknown | 21 |

No values were invented. Steering position remains `unknown` for the Russia, USA and UAE entries where the cited catalog row does not establish LHD/RHD. Japan-market records retain their existing RHD designation.

## Source and verification status

Primary source for the factual cross-check:
- Drom, Toyota Land Cruiser 2002 catalog, market-separated Russia/Japan/USA/UAE sections: https://www.drom.ru/catalog/toyota/land_cruiser/2002/
- Drom, Toyota Land Cruiser engine capacity tables: https://www.drom.ru/catalog/toyota/land_cruiser/specs/engine_capacity/
- Drom, Toyota Land Cruiser torque tables: https://www.drom.ru/catalog/toyota/land_cruiser/specs/engine_torque/

The catalog page supports the market/grade/engine/transmission/year mapping, but these remain secondary references. The 50 records still have no primary-source metadata attached, so none is upgraded to `verified`. The Drom page does not supply exact gearbox codes, dimensions, wheel fitments, wiper sizes or variant-specific service-fluid data. The `powerHp` field currently follows Drom's displayed `л.с.`; the project-wide distinction between metric PS and mechanical hp still needs a single explicit unit convention. Do not convert values piecemeal.

## Structural checks

- Records reviewed: **50 / 50** (201–250).
- Verification status: all 50 remain `partially-verified`.
- Sources: all 50 use `secondary-reference`; no primary-source upgrade.
- Duplicate IDs in the full 513-record package: **0**.
- Duplicate exact identities using the importer's current key (including body style and steering position): **0**.
- Generated TypeScript catalog: byte-for-byte matches the JSON pack output.
- Model IDs, generation IDs and variant IDs: unchanged.
- Technical values: unchanged; only field-level limitations were added.

## Result

The batch's Drom market/grade/engine/transmission/year mapping is cross-checked across all four markets. It is not OEM-verified. The outstanding work is primary-source/VIN verification, a consistent power-unit convention, and exact maintenance/fitment data. PR remains Draft and must not be merged until the complete audit and current-HEAD CI are green and the user separately authorizes merge.
