# PR #205 — factual review, batch 03 (records 101–150)

Date: 2026-11-08  
PR: https://github.com/sadist57rus/Nippon-Drive/pull/205  
Reviewed source snapshot: `src/data/packs/drom-verified-batch-01.json`, 513 variants; records 101–150 (array slice 100–149).  
PR HEAD observed before this report: `716c177bd44c1cde60664d2743ad58f1af0db72b`.

## Scope and method

Reviewed all 50 records as one batch, grouped by vehicle family. Compared the available Drom-derived values with manufacturer documentation/catalog material found for the relevant model families. Drom remains a secondary reference; a family-level document does not prove every market, trim, production month, transmission or drivetrain combination. No JSON/catalog values were changed. No record was upgraded to `verified`.

All 50 records remain `partially-verified`. The findings below distinguish direct corroboration from unresolved exact-fitment questions.

## Batch composition

| Records | Family | Count |
|---|---|---:|
| 101–104 | Mazda CX-5 KE, 2.2D and 2.5 | 4 |
| 105–114 | Suzuki Grand Vitara JT, J20A/J24B | 10 |
| 115–141 | Subaru Forester SH/SH5/SH9, EJ20/EJ253/EJ255 | 27 |
| 142–145 | Mitsubishi Outlander CU4W, 4G64 | 4 |
| 146–150 | Suzuki Swift ZC72S/ZD72S, K12B | 5 |
| **Total** | | **50** |

## Findings

### 101–104 — Mazda CX-5 KE (4 records)

Manufacturer newsroom specification for the first-generation CX-5 confirms the SH-VPTS 2.2 diesel at 2,188 cc, 175 PS and 420 Nm, and the PE-VPS 2.0 petrol at 1,997 cc, 155 PS and 196 Nm. It also lists 2WD/4WD variants and tyre/wheel packages by grade. This supports the 2.2 diesel engine family and nominal 175 PS output in records 101–102, but does not independently establish the Russian-market grade mapping or every production interval.

The 2.5 petrol records 103–104 list 2,488 cc and 192 hp. Later Mazda owner documentation confirms the 2.5 engine displacement, but the located manufacturer material is market-specific and does not establish the exact Russian 2013–2015 Active+/Supreme grades or the record's power unit. Do not treat a later GCC specification as proof of the Russian calibration.

Outstanding: torque for all four entries is already marked as limited; exact grade/year applicability, wheel fitments, tyre indices, dimensions and wiper sizes remain unverified.

Sources:
- Mazda newsroom, CX-5 launch specifications: https://newsroom.mazda.com/en/publicity/release/2012/201202/120216a.html
- Mazda owner-manual specifications, CX-5 engines: https://owners-manual.mazda.com/gen/en/cx-5/cx-5_8fy4ee17e/contents/10020101.html

### 105–114 — Suzuki Grand Vitara JT (10 records)

Suzuki's Digital Library identifies J20A as a 1,995 cc engine and lists it in the third-generation Escudo from 2005 to 2008. It identifies J24B as 2,393 cc and lists it in the third-generation Escudo from June 2008 to April 2017. This supports the engine-family chronology and J24B displacement for records 110–114.

Important discrepancy to resolve: records 105–109 encode J20A displacement as 1,998 cc, whereas Suzuki's manufacturer library specifies 1,995 cc. Do not silently edit the values or IDs; retain the discrepancy for a source-specific correction decision. The official page does not prove the Russian 2012–2016 JLX-A/JLX-E/Exclusive grade names or the exact output/torque/transmission combinations. J24B's displacement is supported, but the Russian-market grade mapping and 169 hp field still need a matching market brochure or homologation document.

Outstanding: exact Russian-market applicability, torque, transmission/grade mapping, dimensions, tyres, wheels and wipers.

Sources:
- Suzuki Digital Library, J20A and J24B engine data: https://www.suzuki.co.jp/suzuki_digital_library/7_engine/4-j.html
- Suzuki Escudo third-generation overview: https://www.suzuki.co.jp/suzuki_digital_library/1_auto/escudo.html

### 115–141 — Subaru Forester SH / SH5 / SH9 (27 records)

**Japanese SH5 records 115–122 and 135–136.** Subaru's official Japanese catalog pages for 2007–2009 SH5 2.0 X/XS variants show the vehicle type DBA-SH5, EJ20 engine family, 1,994 cc, 148 PS and 191 Nm. This broadly supports the 2.0 naturally aspirated family and output. The pages identify the engine as EJ20, not the more specific EJ204 suffix; the suffix is therefore not independently proven by the located manufacturer catalog. The two 2.0 X manual/automatic records (135–136) share the broad catalog family, but the exact transmission-specific grade and production months still require exact source matching.

**Russian-market SH entries 115–134.** The records use SH body code and list 2.0 EJ204, 2.5 EJ253 and 2.5 turbo EJ255 families with multiple internal trim/package labels (SR, 4R, 4Q, IN, RR, 61/62/63, VR/VQ/2S). The Japanese SH5 catalog cannot be used as evidence for Russian-market 2.5 engines or package codes. Subaru's North American 2009 brochure supports the broad US-market 2.5X naturally aspirated 170 hp and 2.5XT turbo 224 hp families, but it does not validate the Russian-market package suffixes or the exact power values in this set. These records must remain market-specific and partially verified.

**US SH9 records 137–141.** The 2009 US brochure supports 2.5X at 170 hp and 2.5XT at 224 hp, with market-specific manual/automatic availability. It supports the broad 2.5X engine family in records 137–141, but exact trim/gearbox pairings and all listed production windows should be checked against the US catalog by model year. The records' 170 hp value is consistent with the brochure's US hp notation; do not convert it to PS without an explicit unit policy.

Outstanding: exact engine suffixes (especially EJ204), market-specific engine calibration, package-code identity, gearbox pairing for each grade, and exact production windows. The 27 records are not fully verified by one family brochure.

Sources:
- Subaru official used-car catalog, 2007–2008 Forester 2.0XS: https://ucar.subaru.jp/php/catalog/grade.php?cat_id=10045168
- Subaru official used-car catalog, 2008 Forester 2.0XS Black Leather Limited: https://ucar.subaru.jp/php/catalog/grade.php?baitai=iphone&cat_id=10049805
- Subaru official used-car catalog, 2008 Forester 2.0XT Black Leather Limited: https://ucar.subaru.jp/php/catalog/grade.php?cat_id=10049807
- Subaru US 2009 Forester brochure (archived brochure copy): https://www.auto-brochures.com/makes/Subaru/Forester/Subaru_US%20Forester_2009.pdf

### 142–145 — Mitsubishi Outlander CU4W (4 records)

The four records describe CU4W 2.4 AT LS/XLS variants, both FWD and 4WD, with engine code 4G64 and 2,351 cc. The available manufacturer-level evidence gathered in this batch was insufficient to establish the exact CU4W 4G64 power/torque, LS/XLS grade mapping, FWD/4WD availability and 2002–2006 production intervals for the relevant sales market. A US-market third-party archive distinguishes CU4W/4G64 from later CU5W/4G69, but it is not a primary source and cannot validate the record's specifications.

No technical correction is proposed from this evidence. Keep market, exact output, torque, dimensions, fuel capacity and fitments unverified until a matching Mitsubishi brochure, workshop manual or market homologation source is located.

Secondary cross-reference only:
- ImportArchive, US-market Outlander 2003–2006: https://importarchive.com/mitsubishi/outlander/2003-2006

### 146–150 — Suzuki Swift ZC72S / ZD72S (5 records)

Suzuki's FY2011 environmental report identifies ZC72S and ZD72S with the K12B 1,242 cc engine, 67 kW / 91 PS and 118 Nm. Suzuki's Digital Library independently lists the K12B in the 2010 Swift generation. This supports the engine family and displacement for the five records, and the ZD72S 4WD body code is consistent with the 4WD record.

Discrepancy: records 146–150 store `powerHp: 94`; the manufacturer source specifies 91 PS. These are not interchangeable units: 91 PS is approximately 89.7 mechanical hp, not 94 hp. The stored value therefore needs unit/source reconciliation, not an automatic replacement. The exact Club/Comfort grade labels and the 2010–2013 date range are not established for every transmission by the cited environmental report.

Sources:
- Suzuki FY2011 environmental report, Swift ZC72S/ZD72S specifications: https://www.globalsuzuki.com/corporate/environmental/report/pdf/2012_enve_all.pdf
- Suzuki Digital Library, Swift K12B application: https://www.suzuki.co.jp/suzuki_digital_library/engin_index.html

## Issues to carry forward

1. **Suzuki Grand Vitara J20A displacement:** 1,998 cc in records 105–109 vs Suzuki's 1,995 cc.
2. **Suzuki Swift power field:** 94 hp in records 146–150 vs Suzuki's 91 PS; unit mismatch requires a project-wide power-unit convention.
3. **Subaru engine suffixes and markets:** manufacturer catalogs often identify EJ20 rather than EJ204; Japanese SH5, Russian SH and US SH9 records must not be cross-validated as one market.
4. **Mazda CX-5 2.5 output/grade mapping:** manufacturer sources located do not yet establish the exact Russian 2013–2015 calibration and Active+/Supreme pairing.
5. **Mitsubishi Outlander CU4W:** no sufficient primary source located for exact power, torque and grade/drivetrain mapping in this pass.

## Result

- Records reviewed: **50 / 50** (101–150).
- Primary-source coverage: partial and model/market-specific; no blanket confirmation of all fields.
- Catalog JSON changed: **no**.
- Verification statuses changed: **no**; all remain `partially-verified`.
- Automatic corrections: **none**. The two explicit numeric/unit discrepancies above are recorded for a separate decision.
- PR remains a Draft and must not be merged until the complete audit, duplicate/link checks and required CI on the final HEAD are green and the user separately authorizes merge.
