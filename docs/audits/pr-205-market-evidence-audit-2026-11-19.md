# PR #205 — market evidence audit for unresolved-market records

Date: 2026-11-19  
Reviewed data snapshot: `920be2cc47f1839502dba4f2ace3a432b69345e1`  
Pack blob: `4f8a5e403d5e5d5dc846bae5ed7c8170f5dad7b4`

## Scope and conclusion

The current pack contains **75 records** whose `variant.market` is unresolved. The previous structural audit's count of 73 was incorrect.

A direct match against market-separated Drom catalog pages provides **34 secondary-source market matches**. These are useful evidence, but Drom is not an OEM source. The JSON market fields have deliberately **not** been changed in this audit: a secondary match alone is not being promoted to OEM-confirmed status.

The other **41 records remain unresolved at the required confidence level**:
- record 4 — Camry XV40 SE: strong Toyota USA evidence for the 2007 model year, but the data row spans 2006–2008 and needs exact year-range reconciliation;
- records 473 and 475–500 — 27 broad or mixed-market family/model entries; several have Japanese OEM documents, but those documents do not establish that the entire generic record belongs to one sales market;
- records 501–513 — 13 family/generation index entries, explicitly not exact repair-ready variants.

No market was inferred from a country of assembly.

## 1. Secondary catalog matches — 34 records

The following Drom pages explicitly separate markets and contain a matching body/engine/trim/drivetrain/time-period combination. This is a **secondary-source match**, not OEM verification.

| Pack row | Candidate sales market | Matching configuration | Market-specific catalog |
|---:|---|---|---|
| 1 | USA | Outlander CU5W, 4G69, 2.4 AT XLS, FWD, 160 hp | [Outlander 2004 — USA section](https://www.drom.ru/catalog/mitsubishi/outlander/2004/) |
| 2 | Russia | X-Trail T31, MR20DE, 2.0 CVT SE, 4WD, 141 hp | [X-Trail 2007 — Russia section](https://www.drom.ru/catalog/nissan/x-trail/2007/) |
| 3 | Russia | RAV4 ACA31, 2AZ-FE, 2.4 AT Sol, 4WD, 170 hp | [RAV4 2007 — Russia section](https://www.drom.ru/catalog/toyota/rav4/2007/) |
| 6 | South Korea | CR-V RE, K24Z1, 2.4 AT 4WD, 170 hp | [CR-V 2008 — South Korea section](https://www.drom.ru/catalog/honda/cr-v/2008/) |
| 7 | USA | CX-5 KE, PE-VPS, 2.0 MT Sport FWD, 155 hp | [CX-5 2014 — USA section](https://www.drom.ru/catalog/mazda/cx-5/2014/) |
| 8 | Russia | CX-5 KE, PE-VPS, 2.0 AT Drive FWD, 150 hp | [CX-5 2014 — Russia section](https://www.drom.ru/catalog/mazda/cx-5/2014/) |
| 9 | Europe | CX-5 KE, SHY1/SHY4, 2.2D 175 hp Sports-Line 4WD MT | [CX-5 2016 — Europe section](https://www.drom.ru/catalog/mazda/cx-5/2016/) |
| 10 | Russia | RAV4 ZSA30, 3ZR-FAE, 2.0 CVT Standard 4WD, 158 hp | [RAV4 2010 — Russia section](https://www.drom.ru/catalog/toyota/rav4/2010/) |
| 11 | Russia | RAV4 ZSA30, 3ZR-FAE, 2.0 CVT Standard 4WD, 148 hp | [RAV4 2011 — Russia section](https://www.drom.ru/catalog/toyota/rav4/2011/) |
| 13 | Europe | Grand Vitara TAA4V, J24B, 2.4 AT Comfort 3-door 4WD, 166 hp | [Grand Vitara 2008 — Europe section](https://www.drom.ru/catalog/suzuki/grand_vitara/2008/) |
| 14 | Europe | Grand Vitara TD_4, J24B, 2.4 AT Comfort 5-door 4WD, 169 hp | [Grand Vitara 2008 — Europe section](https://www.drom.ru/catalog/suzuki/grand_vitara/2008/) |
| 142–145 | USA | Outlander CU4W, 4G64, 2.4 AT LS/XLS, FWD/4WD, 142 hp | [Outlander 2004 — USA section](https://www.drom.ru/catalog/mitsubishi/outlander/2004/) |
| 166–171 | UAE | Patrol Y61, 2001 facelift, 5-door; TB42S, TD42, TB45E and TB48DE variants | [Patrol Y61 2001 — UAE 5-door catalog](https://www.drom.ru/catalog/nissan/patrol/g_2001_20689/) |
| 172–177 | UAE | Patrol Y61, 2004 facelift, 5-door; ZD30DDTi, TD42, TB45E and TB48DE variants | [Patrol Y61 2004 — UAE 5-door catalog](https://www.drom.ru/catalog/nissan/patrol/g_2004_12613/) |
| 178–182 | UAE | Patrol Y61, 2004 facelift, 3-door; TB45E and TB48DE variants | [Patrol Y61 2004 — UAE 3-door catalog](https://www.drom.ru/catalog/nissan/patrol/g_2004_12960/) |
| 183–184 | UAE | Patrol Y61, 2004 facelift, 5-door; TB48DE 280 hp variants | [Patrol Y61 2004 — UAE 5-door catalog](https://www.drom.ru/catalog/nissan/patrol/g_2004_12613/) |

The count is 11 individual rows in the first group, 4 Outlander rows, and 19 Patrol rows: **34 total**.

## 2. OEM cross-checks and Patrol discrepancies

Nissan Middle East's official 12 July 2017 announcement says the Y61 Patrol Super Safari 3-door was relaunched in the UAE/Gulf region. It identifies the 4.8L inline-six at 280 hp and 451 Nm, and specifies a 5-speed automatic transmission with manual mode: [Nissan Middle East — 3-door Super Safari, 2017](https://www.nissan-me.com/experience-nissan/news-and-events/latestnews/Nissan_Patrol_Y61-3_Door.html).

Nissan Middle East's 2022 Super Safari announcement confirms the 4.8L 280 hp / 451 Nm engine and states that the model is available with a 5-speed automatic or manual transmission across the Middle East: [Nissan Middle East — 2022 Super Safari](https://www.nissan-me.com/experience-nissan/news-and-events/latestnews/nissan-patrol-safari-2022.html).

This OEM evidence supports the UAE market and the 280 hp Super Safari configuration, but does not by itself establish every model-year/gearbox combination in the pack.

### Four Patrol rows requiring correction or OEM reconciliation

Rows **180, 182, 183 and 184** currently describe 280 hp TB48DE vehicles as beginning in 2004. The market-separated Drom catalog lists the 280 hp variants only from **02.2017**; the 245 hp variants begin in 10.2004. Nissan Middle East's 2017 announcement also dates the Super Safari relaunch to 2017.

Therefore, the current 2004 start year for those four 280 hp records is not supported by the cited market-specific catalog and must be corrected or explicitly justified before merge. Do not change these dates until the intended model-year/production-range convention is reconciled against the OEM source.

For row 180 (3-door, 280 hp, MT), the 2017 OEM launch announcement describes the reintroduced 3-door model with a 5-speed automatic; a later Nissan Middle East source mentions both manual and automatic availability for the Super Safari generally. The exact year/grade/gearbox combination remains to be checked. Rows 183–184 (5-door, 280 hp) also need the 2017 5-door relaunch specification or an equivalent OEM document.

## 3. Record 4 — Toyota Camry SE

The generic Drom entry does not specify the sales market. Toyota USA's official 2007 parts catalog lists **SE Sedan 2WD 2.4L 4-cylinder 5AT**, and Toyota USA's official vehicle archive groups 2007–2009 Camry SE models. This strongly supports the USA as the candidate market for the SE configuration:
- [Toyota USA 2007 Camry parts catalog](https://autoparts.toyota.com/models/camry/2007)
- [Toyota USA 2007–2009 Camry archive](https://pressroom.toyota.com/album/2007-2009-toyota-camry-sixth-6th-generation/)

The pack row spans 2006–2008, so the exact production/model-year boundaries still need reconciliation. Leave the market field unchanged until that check is complete.

## 4. Remaining unresolved rows — 41

### Record 4
- Toyota Camry XV40, 2.4 AT SE: likely USA, but the complete 2006–2008 interval needs exact OEM reconciliation.

### Records 473, 475–500 — 27 broad or mixed-market entries
- 473 — Nissan Skyline GT-R BNR34 M-spec Nür: Nissan Heritage confirms the model, but the cited page does not establish the market of the data row.
- 475 — Honda Civic FD: Honda Japan factbook/archive sources cover a Japanese-market version; the broad FD family record is not restricted to that market.
- 476 — Nissan Note E11: Nissan Heritage Collection source identifies a Japanese 15S variant, but the generic E11 row does not establish one sales market for the whole range.
- 477 — Mitsubishi Lancer CS Wagon: source scope is mixed; a Russia-labelled torque reference does not establish the market for the whole vehicle record.
- 478 — Mitsubishi Pajero iO / Pinin H6/H7: the cited independent catalog does not resolve a single market.
- 479 — Toyota Camry XV40: Japanese used-car catalog and global launch references do not resolve the generic global generation record.
- 480 — Toyota Land Cruiser Prado J120: current sources are not sufficient OEM market documentation.
- 481 — Toyota Yaris / Vitz XP90: Japanese Toyota catalog sources are mixed with a left-hand-drive parts-application reference; market scope is not singular.
- 482 — Toyota RAV4 XA30: Japanese Toyota catalog pages do not resolve the full cross-market generation record.
- 483 — Toyota Hilux AN120/AN130: global Toyota and UK brochure references do not establish one market for the full record.
- 484 — Toyota Yaris / Vitz XP10: global vehicle-lineage source does not establish a single market.
- 485 — Toyota Yaris / Vitz XP130: Japanese Vitz catalog sources exist, but the record is a broad family entry rather than a specific domestic trim.
- 486 — Toyota Prius XW10: global lineage reference does not establish one market.
- 487 — Toyota Prius XW50: Japanese catalog and global press sources do not resolve the generic generation record.
- 488 — Toyota Estima XR50: Japanese Toyota history source supports the model lineage, but the broad record still needs exact market applicability.
- 489 — Nissan Skyline V35: Japanese specification/heritage sources do not establish that the broad record is limited to one sales market.
- 490 — Nissan Skyline V36: Japanese specification sources do not establish the market scope of the whole generation record.
- 491 — Nissan March K12: Japanese grade/spec source exists, but the record also groups March/Micra and needs market-specific scoping.
- 492 — Honda Fit / Jazz GD: Honda Japan factbook source is domestic, but the generic Fit/Jazz row is not restricted to Japan.
- 493 — Mazda Demio / Mazda2 DY: Mazda Japan launch source confirms the Japanese model launch, not the full mixed-name family record's market scope.
- 494 — Mazda Demio / Mazda2 DE: Mazda Japan launch sources confirm the domestic launch, not the full cross-market family record.
- 495 — Subaru Legacy BP/BL: Japanese and UK references are both present; no single market applies to the broad row.
- 496 — Subaru Legacy BM/BR: body-style and engine-source scope need review; BM is a sedan code while the row is labelled wagon, and EJ253 does not align cleanly with the cited Japanese B4 catalog.
- 497 — Suzuki Swift ZC72/ZD72: Japanese Suzuki/MLIT references exist, but the broad record needs a specific market/trim boundary.
- 498 — Suzuki Alto HA25: Japanese Suzuki/Gazoo references support a domestic kei-car version; add an exact OEM applicability reference before assigning the market.
- 499 — Daihatsu Mira L275: Daihatsu U-Catch Japanese catalog source exists; exact OEM applicability and record scope still need confirmation.
- 500 — Lexus LS XF30: Lexus UK launch references do not establish that the generic LS430 record is UK-only.

### Records 501–513 — 13 family indexes
These are family/generation indexes, not exact repair-ready variants. Their sales markets should remain unresolved until an exact model/trim/year/market configuration is selected.

## 5. Decision

- Do not infer sales market from assembly country.
- Do not change the 75 market fields solely on the basis of this secondary-source cross-check.
- Add the exact market-separated pages as secondary evidence, then obtain OEM/official distributor evidence where available.
- Correct/reconcile Patrol rows 180, 182, 183 and 184 before merge.
- Keep all 513 rows `partially-verified`; no record is promoted to `verified` by this audit.
