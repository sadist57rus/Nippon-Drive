# PR #205 — market evidence audit

Date: 2026-11-19  
Data snapshot: `955e3ddee89b800ae08d305be6745dfabe87f72c`  
Pack blob: `501c1937b23ce9abf670f0dd72e317cb7531b6b6`

## Scope and result

The original pack contained 75 unresolved `variant.market` fields. A direct case-by-case comparison with market-separated Drom catalog pages produced 34 exact configuration matches. Those 34 market fields have now been assigned in the JSON and generated TypeScript, with the matching secondary-source pages attached to each record. They remain `partially-verified`; no record was promoted to `verified`.

The pack now contains **41 unresolved market fields**:
- row 4 — Toyota Camry XV40 SE: strong USA evidence for the 2007 model year, but the row spans 2006–2008 and the full range still needs reconciliation;
- rows 473 and 475–500 — 27 broad or mixed-market model/family entries;
- rows 501–513 — 13 family/generation index entries, not exact repair-ready variants.

The 34 assignments use explicit Drom sales-market sections, not country-of-assembly labels. Drom is a secondary catalog, so the records remain partially verified and retain a market limitation explaining the evidence level.

## 1. Market assignments applied — 34 rows

| Pack row | Assigned sales market | Matching configuration | Attached market-specific source |
|---:|---|---|---|
| 1 | США | Outlander CU5W, 4G69, 2.4 AT XLS, FWD, 160 hp | [Outlander 2004 — USA section](https://www.drom.ru/catalog/mitsubishi/outlander/2004/) |
| 2 | Россия | X-Trail T31, MR20DE, 2.0 CVT SE, 4WD | [X-Trail 2007 — Russia section](https://www.drom.ru/catalog/nissan/x-trail/2007/) |
| 3 | Россия | RAV4 ACA31, 2AZ-FE, 2.4 AT Sol, 4WD, 170 hp | [RAV4 2007 — Russia section](https://www.drom.ru/catalog/toyota/rav4/2007/) |
| 6 | Южная Корея | CR-V RE, K24Z1, 2.4 AT 4WD, 170 hp | [CR-V 2008 — South Korea section](https://www.drom.ru/catalog/honda/cr-v/2008/) |
| 7 | США | CX-5 KE, PE-VPS, 2.0 MT Sport FWD, 155 hp | [CX-5 2014 — USA section](https://www.drom.ru/catalog/mazda/cx-5/2014/) |
| 8 | Россия | CX-5 KE, PE-VPS, 2.0 AT Drive FWD, 150 hp | [CX-5 2014 — Russia section](https://www.drom.ru/catalog/mazda/cx-5/2014/) |
| 9 | Европа | CX-5 KE, SHY1/SHY4, 2.2D 175 hp Sports-Line 4WD MT | [CX-5 2016 — Europe section](https://www.drom.ru/catalog/mazda/cx-5/2016/) |
| 10 | Россия | RAV4 ZSA30, 3ZR-FAE, 2.0 CVT Standard 4WD, 158 hp | [RAV4 2010 — Russia section](https://www.drom.ru/catalog/toyota/rav4/2010/) |
| 11 | Россия | RAV4 ZSA30, 3ZR-FAE, 2.0 CVT Standard 4WD, 148 hp | [RAV4 2011 — Russia section](https://www.drom.ru/catalog/toyota/rav4/2011/) |
| 13 | Европа | Grand Vitara TAA4V, J24B, 2.4 AT Comfort 3-door 4WD, 166 hp | [Grand Vitara 2008 — Europe section](https://www.drom.ru/catalog/suzuki/grand_vitara/2008/) |
| 14 | Европа | Grand Vitara TD_4, J24B, 2.4 AT Comfort 5-door 4WD, 169 hp | [Grand Vitara 2008 — Europe section](https://www.drom.ru/catalog/suzuki/grand_vitara/2008/) |
| 142–145 | США | Outlander CU4W, 4G64, 2.4 AT LS/XLS, FWD/4WD, 142 hp | [Outlander 2004 — USA section](https://www.drom.ru/catalog/mitsubishi/outlander/2004/) |
| 166–171 | ОАЭ | Patrol Y61 facelift 2001, 5-door; TB42S, TD42, TB45E and TB48DE | [Patrol Y61 2001 — UAE 5-door catalog](https://www.drom.ru/catalog/nissan/patrol/g_2001_20689/) |
| 172–177 | ОАЭ | Patrol Y61 facelift 2004, 5-door; ZD30DDTi, TD42, TB45E and TB48DE | [Patrol Y61 2004 — UAE 5-door catalog](https://www.drom.ru/catalog/nissan/patrol/g_2004_12613/) |
| 178–182 | ОАЭ | Patrol Y61 facelift 2004, 3-door; TB45E and TB48DE | [Patrol Y61 2004 — UAE 3-door catalog](https://www.drom.ru/catalog/nissan/patrol/g_2004_12960/) |
| 183–184 | ОАЭ | Patrol Y61 facelift 2004, 5-door; TB48DE 280 hp | [Patrol Y61 2004 — UAE 5-door catalog](https://www.drom.ru/catalog/nissan/patrol/g_2004_12613/) |

The 34 assignments are recorded as secondary evidence in the `sources` array. The original source labels that omitted the sales market or only mentioned assembly country were retained for provenance; the field-level `market` limitations explain the distinction.

## 2. Patrol Y61 — corrected 280 hp applicability range

Rows **180, 182, 183 and 184** were previously marked as 2004–2017 despite describing TB48DE 280 hp variants. The UAE-specific Drom pages list 280 hp variants from **February 2017 through April 2024**, while 245 hp variants start in October 2004.

The four rows have been corrected to:
- `modelYearFrom: 2017`
- `modelYearTo: 2024`

They remain `partially-verified`, with explicit limitations for exact production/gearbox applicability.

OEM cross-checks:
- [Nissan Middle East — 3-door Super Safari relaunch, 12 July 2017](https://www.nissan-me.com/experience-nissan/news-and-events/latestnews/Nissan_Patrol_Y61-3_Door.html): confirms UAE/Gulf relaunch, 4.8L, 280 hp, 451 Nm and a 5-speed automatic.
- [Nissan Middle East — 2022 Super Safari](https://www.nissan-me.com/experience-nissan/news-and-events/latestnews/nissan-patrol-safari-2022.html): confirms 4.8L, 280 hp, 451 Nm and 5-speed automatic or manual availability in the Middle East.

Remaining transmission qualifications:
- Row 180 (3-door, 280 hp, MT): Drom lists a manual variant from 2017, but Nissan's 2017 3-door launch announcement specifies a 5-speed automatic. The later 2022 Nissan announcement mentions manual/automatic availability generally. Exact first year and 3-door manual applicability remain unconfirmed.
- Rows 183–184 (5-door, 280 hp, MT/AT): Drom lists both from 2017; Nissan confirms the 5-door relaunch in 2017 and later confirms manual/automatic Super Safari availability generally, but an exact 5-door 280 hp OEM grade/gearbox document is still needed.
- Row 182 (3-door, 280 hp, AT): the 2017 OEM launch announcement directly supports the 4.8L/280 hp/5-speed automatic configuration.

## 3. Row 4 — Toyota Camry SE remains unresolved

Toyota USA's official 2007 parts catalog lists an SE Sedan 2WD 2.4L 4-cylinder 5AT, and Toyota USA's official archive groups 2007–2009 Camry SE models:
- [Toyota USA 2007 Camry parts catalog](https://autoparts.toyota.com/models/camry/2007)
- [Toyota USA 2007–2009 Camry archive](https://pressroom.toyota.com/album/2007-2009-toyota-camry-sixth-6th-generation/)

This strongly supports USA for the SE configuration, but the pack row spans 2006–2008. The complete production/model-year interval still needs reconciliation, so the field remains unresolved and unchanged.

## 4. Remaining unresolved rows — 41

### Row 4
Toyota Camry XV40, 2.4 AT SE: likely USA; the 2006–2008 interval still needs exact OEM reconciliation.

### Rows 473 and 475–500 — 27 broad or mixed-market entries
- 473 — Nissan Skyline GT-R BNR34 M-spec Nür: Nissan Heritage confirms the model, but the cited page does not establish the market of the data row.
- 475 — Honda Civic FD: Honda Japan factbook/archive sources cover a Japanese-market version; the broad FD family row is not restricted to that market.
- 476 — Nissan Note E11: Nissan Heritage Collection identifies a Japanese 15S variant, but the generic E11 row does not establish one market for the whole range.
- 477 — Mitsubishi Lancer CS Wagon: source scope is mixed; a Russia-labelled torque reference does not establish the market for the whole vehicle record.
- 478 — Mitsubishi Pajero iO / Pinin H6/H7: the cited independent catalog does not resolve a single market.
- 479 — Toyota Camry XV40: Japanese used-car catalog and global launch references do not resolve the generic global generation record.
- 480 — Toyota Land Cruiser Prado J120: current sources are not sufficient OEM market documentation.
- 481 — Toyota Yaris / Vitz XP90: Japanese Toyota catalog sources are mixed with a left-hand-drive parts-application reference; market scope is not singular.
- 482 — Toyota RAV4 XA30: Japanese Toyota catalog pages do not resolve the full cross-market generation record.
- 483 — Toyota Hilux AN120/AN130: global Toyota and UK brochure references do not establish one market for the full record.
- 484 — Toyota Yaris / Vitz XP10: global vehicle-lineage source does not establish a single market.
- 485 — Toyota Yaris / Vitz XP130: Japanese Vitz catalog sources exist, but the row is a broad family entry rather than a specific domestic trim.
- 486 — Toyota Prius XW10: global lineage reference does not establish one market.
- 487 — Toyota Prius XW50: Japanese catalog and global press sources do not resolve the generic generation record.
- 488 — Toyota Estima XR50: Japanese Toyota history source supports the model lineage, but the broad record still needs exact market applicability.
- 489 — Nissan Skyline V35: Japanese specification/heritage sources do not establish that the broad row is limited to one sales market.
- 490 — Nissan Skyline V36: Japanese specification sources do not establish the market scope of the whole generation record.
- 491 — Nissan March K12: Japanese grade/spec source exists, but the row also groups March/Micra and needs market-specific scoping.
- 492 — Honda Fit / Jazz GD: Honda Japan factbook source is domestic, but the generic Fit/Jazz row is not restricted to Japan.
- 493 — Mazda Demio / Mazda2 DY: Mazda Japan launch source confirms the Japanese model launch, not the full mixed-name family row's market scope.
- 494 — Mazda Demio / Mazda2 DE: Mazda Japan launch sources confirm the domestic launch, not the full cross-market family row.
- 495 — Subaru Legacy BP/BL: Japanese and UK references are both present; no single market applies to the broad row.
- 496 — Subaru Legacy BM/BR: body-style and engine-source scope need review; BM is a sedan code while the row is labelled wagon, and EJ253 does not align cleanly with the cited Japanese B4 catalog.
- 497 — Suzuki Swift ZC72/ZD72: Japanese Suzuki/MLIT references exist, but the broad row needs a specific market/trim boundary.
- 498 — Suzuki Alto HA25: Japanese Suzuki/Gazoo references support a domestic kei-car version; add an exact OEM applicability reference before assigning the market.
- 499 — Daihatsu Mira L275: Daihatsu U-Catch Japanese catalog source exists; exact OEM applicability and row scope still need confirmation.
- 500 — Lexus LS XF30: Lexus UK launch references do not establish that the generic LS430 row is UK-only.

### Rows 501–513 — 13 family indexes

These are family/generation indexes, not exact repair-ready variants. Their sales markets should remain unresolved until an exact model/trim/year/market configuration is selected.

## 5. Structural state after these changes

- 513 variants; all remain `partially-verified`.
- 34 market fields assigned from explicit market-separated secondary catalogs.
- 41 market fields remain unresolved.
- 725 source references: 707 `secondary-reference`, 10 `oem-service-manual`, 8 `oem-bulletin`.
- 35 records have at least one source-market label that differs from `variant.market`; every such record has an explicit `market` limitation preserving the source scope and the reason for the difference.
- No sales market was inferred from country of assembly.
