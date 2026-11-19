# PR #205 — factual review, batch 06 (records 251–300)

Date: 2026-11-09  
PR: https://github.com/sadist57rus/Nippon-Drive/pull/205  
Reviewed records: 251–300 (50 variants).  
Final data commit for this batch: `f90d931a9db430e0777ba57f1e49f1dd7345f54b`; generated catalog sync: `ed7c3e6ccaec28a4ce14a13dcbe2632e1252c919`.

## Scope

The batch contains one final Japan-market Land Cruiser 100 entry, 12 European Accord VII entries and 37 European Mazda6 GH entries. All 50 records were checked against their cited Drom catalog pages; Honda CL7/CL9 engine codes were additionally compared with the 2003 Honda Electronic Service Manual (ESM).

## 251 — Toyota Land Cruiser 100

Record 251 is the Japan-market KG-HDJ101K 4.2 VX Active Vacation Type B, 1HD-FTE, 205 hp, AT, 4WD, 05.2000–07.2002. It matches the Japan section of the Drom Land Cruiser 2002 catalog. It remains partially verified because the variant still lacks primary-source confirmation for every specification and service item.

## 252–263 — Honda Accord VII CL (12 records)

The Drom Europe page lists the CL7 2.0 Comfort/Sport/Executive, MT and AT, at 155 hp, and CL9 2.4 Executive/Type-S, MT and AT, at 190 hp. It also lists CN1 2.2 i-CTDi Sport/Executive at 140 hp.

**Confirmed engine-code discrepancy — records 252–257.** Drom's 2002–2005 CL7 page labels the 2.0 engine `K20Z2`. The Honda 2003 ESM's VIN/engine-number section identifies the CL7 as `ACCORD/K20A6` and the engine number as `K20A6`. The records now use **K20A6** for this 2002–2005 pre-facelift group, with the Honda ESM attached as an OEM service-manual source. The original Drom reference is retained so the conflict remains visible. Variant IDs, market, grades, power, displacement, gearbox type and production dates were not changed.

Records 260–263 already use K24A3; the Honda ESM also identifies CL9 as K24A3, so that primary source was attached to those four records.

Records 258–259 retain N22A1 from the Drom entry; no Honda primary source for that diesel variant was added in this pass. All Accord entries remain `partially-verified`, not fully verified.

Sources:
- Honda Accord 2003 ESM, VIN / Engine / Transmission Numbers (4D): https://jdmfsm.info/Auto/Japan/Honda/Accord/Honda%20Accord%20ESM%202003/site/a-2003/sea3ep00000000k0011baat00.html
- Drom, Accord CL, Europe, 10.2002–12.2005: https://www.drom.ru/catalog/honda/accord/g_2002_22307/
- Drom, Accord engine capacity: https://www.drom.ru/catalog/honda/accord/specs/engine_capacity/

## 264–300 — Mazda6 GH (37 records)

The records cover three separate European body styles and were kept separate:
- Sedan: records 264–275.
- Estate/wagon: records 276–294.
- Liftback: records 295–300.

Drom's body-specific pages confirm the model period 08.2007–11.2010 and the listed engine/grade families:
- L813 1.8 petrol, 120 hp.
- RF7J 2.0 diesel, 140 hp.
- LF17 2.0 petrol, 147 hp, MT and AT.
- L5-VE 2.5 petrol, 170 hp.
- R2BF 2.2 diesel, 125 hp.
- R2AA 2.2 diesel, 163 and 185 hp.

Production month ranges were set from the specific trim rows where the Drom page supplies them:
- 1.8 / LF17 / L5-VE: 08.2007–11.2010.
- RF7J: 08.2007–11.2008.
- R2BF 125 hp: 11.2009–04.2010.
- R2AA 185 hp: 01.2009–04.2010.

**Open source inconsistency — records 290–292.** Drom's 163 hp R2AA trim rows show 08.2007–11.2010, while the same Drom page's narrative says the 2.2 MZR-CD range appeared in 2009. The current period remains marked with explicit limitations and must not be treated as fully confirmed until checked against Mazda primary documentation. No guessed date was substituted.

Sources:
- Drom Mazda6 GH sedan: https://www.drom.ru/catalog/mazda/mazda6/g_2007_7364/
- Drom Mazda6 GH estate/wagon: https://www.drom.ru/catalog/mazda/mazda6/g_2007_7363/
- Drom Mazda6 GH liftback: https://www.drom.ru/catalog/mazda/mazda6/g_2007_7362/
- Drom Mazda6 engine capacity: https://www.drom.ru/catalog/mazda/mazda6/specs/engine_capacity/

## Field-level limitations

For all 50 records, explicit limitations now cover:
- engine torque;
- induction / aspiration type;
- wiper blade sizes;
- engine oil;
- transmission fluid;
- transfer-case fluid;
- differential fluids;
- coolant.

For the 49 records whose steering position is still unknown, an explicit steering-position limitation was added. Record 251 retains RHD.

Existing limitations already covered missing dimensions, tyres, wheel fitments and transmission codes. For records 290–292, limitations were also added for the unresolved production-period start/end.

No service-fluid, torque, wiper, tyre or wheel values were invented.

## Structural checks

- Records reviewed: **50 / 50**.
- Honda CL7 pre-facelift engine code corrected from K20Z2 to K20A6 using Honda ESM evidence; no IDs changed.
- Honda CL9 K24A3 received an OEM service-manual source.
- Mazda GH production months and source scopes aligned with trim-specific Drom rows where available; R2AA 163 hp period conflict explicitly flagged.
- All 50 records remain `partially-verified`.
- Full package: 513 variants, 0 duplicate IDs, 0 duplicate exact identities using the importer's key including body style and steering position.
- Generated TypeScript catalog matches JSON byte-for-byte.
- Model IDs, generation IDs and variant IDs unchanged.

## Result

The Honda CL7 engine-code discrepancy has been corrected in favor of the Honda ESM. The Mazda6 GH trim/engine/body mappings are cross-checked against Drom's separate sedan, wagon and liftback pages; the R2AA 163 hp production-period conflict remains unresolved. The batch is not fully OEM-verified. PR remains Draft and is not merged.
