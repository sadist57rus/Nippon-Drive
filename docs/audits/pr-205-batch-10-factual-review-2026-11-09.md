# PR #205 — factual review, batch 10 (records 451–500)

Date: 2026-11-09  
PR: https://github.com/sadist57rus/Nippon-Drive/pull/205  
Reviewed records: 451–500 (50 variants).  
Data commit: `527f836ddcf84a4733a20192a175fd48a04d9518`; generated catalog sync: `b81c54a7ba4a5a39854d18889bdb33ee585c87c7`.

## Scope

The batch includes 11 Honda Fit GE 1.5 variants, two Toyota Prius ZVW30 variants and 37 curated Japanese-car records from Toyota, Nissan, Mitsubishi, Honda, Mazda, Subaru, Suzuki, Daihatsu and Lexus. Reviewed the source records and checked high-risk engine/transmission/drive mappings; this is not a complete re-verification of every source page in the 37-record curated set.

## 451–461 — Honda Fit GE 1.5 (11 records)

The Drom Fit torque table lists **145 Nm** for the L15A 1,496 cm³ / 120 hp engine across the relevant MT FWD, CVT FWD and AT 4WD versions. The value was added to all 11 records, with the torque-table source attached. The existing body, trim, transmission and drivetrain distinctions were preserved.

Source:
- Drom Honda Fit engine torque: https://www.drom.ru/catalog/honda/fit/specs/engine_torque/

## 462–463 — Toyota Prius ZVW30 (2 records)

The two Russian-market ZVW30 records use 2ZR-FXE, 1,798 cm³, 99 hp. Drom's engine-torque table supports **142 Nm**, now recorded.

Toyota's 2009 launch material identifies 99 PS for the gasoline engine, 82 PS for the electric motor and 136 PS for the complete hybrid system. The current schema stores engine output in `engine.powerHp` but has no separate combined-system-power field. The records now explicitly say that 99 hp is engine-only; the 82 hp motor and 136 PS system rating must not be summed or substituted for engine output.

Sources:
- Drom Prius engine torque: https://www.drom.ru/catalog/toyota/prius/specs/engine_torque/
- Toyota Global, 2009 Prius launch: https://global.toyota/en/detail/308252

## 464–500 — curated source-backed variants (37 records)

Targeted source review found and addressed these points:

- **Record 469 — Toyota Altezza RS200:** the previous GAZOO URL was replaced with the working Toyota official U-Car RS200 1998.10 / 5AT page. The source confirms 3S-GE, 200 PS, 215.7 Nm, FR and 5-speed automatic. `transmissionType` is now AT. The current source pages do not establish the entire 1998–2005 range; a model-year limitation was added for the unsupported tail.
- **Record 471 — Toyota Corolla Levin AE101 GT APEX:** Toyota's 1992.05 catalog entry confirms 4A-GE, 160 PS, FWD and 5-speed manual. `transmissionType` is now MT. The source is one 1992.05 specification, not proof of every year from 1991–1995; year-range limitations were added.
- **Record 476 — Nissan Note 15S:** the Nissan Heritage entry identifies the 2WD 15S with CR14DE 1,386 cm³, 98 PS and 137 Nm. The engine code is consistent; 2WD is normalized to FWD. Transmission remains unfilled because the cited record does not establish the exact gearbox.
- **Record 477 — Mitsubishi Lancer IX Wagon CS:** the prior torque value **3 Nm** was invalid. It has been corrected to **150 Nm** for 4G18 1,584 cm³ / 98 hp, supported by the Drom torque table. The CS3W service manual identifies the wagon as 2WD, so drivetrain is FWD. The manual lists both 5MT and 4AT; exact transmission remains unresolved and is explicitly limited.
- **Record 500 — Lexus LS430:** 278 mechanical hp is consistent with conversion from the source's 281 DIN PS. The value was not changed; unit semantics remain a project-wide issue because the catalog's `powerHp` field mixes source `PS/л.с.` and mechanical-hp conversions.

Other curated records were not assigned transmission or drivetrain values merely because a model family commonly uses one. Missing/ambiguous values remain limited instead of guessed.

Sources:
- Toyota Altezza RS200 official U-Car catalog: https://toyota.jp/ucar/catalog/brand-TOYOTA/car-ALTEZZA/199810/1003926/
- Toyota Corolla Levin AE101 GT APEX official U-Car catalog: https://toyota.jp/ucar/catalog/brand-TOYOTA/car-COROLLA_LEVIN/199205/10047148/
- Nissan Note 2WD 15S Heritage Collection: https://www.nissan-global.com/EN/HERITAGE_COLLECTION/479_note_2wd_15s.html
- Mitsubishi Lancer CS service manual: https://zinref.ru/avtomobili/Mitsubishi/201_010_00_Mitsubishi_Lancer_2006_year_manual_english/001.htm
- Drom Mitsubishi Lancer engine torque: https://www.drom.ru/catalog/mitsubishi/lancer/specs/engine_torque/

## Related torque corrections and additions

The same source checks support these values in earlier records:
- Prius NHW20 records 364–408: 1NZ-FXE 76 hp / **110 Nm**.
- Prius NHW20 records 409–420: 1NZ-FXE 77 hp / **115 Nm**.
- Honda Fit GE L15A records 451–461: **145 Nm**.
- Prius ZVW30 records 462–463: **142 Nm**.
- Prius XW10 record 486: 1NZ-FXE 58 hp / **102 Nm**.
- Lancer CS3W record 477: **150 Nm**.

The Prius XW10/XW30/XW50 entries also carry a hybrid-system limitation where the source's engine output must not be mistaken for total system output.

## Missing-data limitations

Records 451–500 now have explicit field-level limitations for missing wiper sizes, induction type, engine oil, transmission fluid, coolant, transfer-case applicability/specification and differential-fluid data. Missing tyre sizes are explicitly limited where the previous curated notes did not provide a field-level limitation. Unknown steering positions are limited. Missing torque remains limited for records where no supporting torque source was found.

FWD variants are marked as having no separate transfer case. AWD/4WD variants retain an unverified transfer-unit specification. If drivetrain is unknown, applicability is left unresolved rather than guessed.

## Structural checks

- Records reviewed: **50 / 50**.
- Prius NHW20 torque values were added for records 364–420; 2005–2006 output remains 77 hp and 2007+ output remains 76 hp.
- Honda Fit L15A torque added to records 451–461.
- Prius ZVW30 torque added to records 462–463.
- Lancer CS3W invalid 3 Nm corrected to 150 Nm.
- Full package: 513 variants, **0 duplicate IDs**, **0 duplicate exact identities** using the importer key including body style and steering position.
- Generated TypeScript catalog matches JSON byte-for-byte.
- No model IDs, generation IDs or variant IDs changed.
- All records remain `partially-verified`; no unsupported value was promoted to `verified`.

## Result

The obvious 3 Nm Lancer error is corrected; Teana/Civic/Fit/Prius torque values are now filled where the cited torque tables support them. Prius hybrid outputs remain separate. Several curated records still need exact transmission/drive and year-specific evidence. PR remains Draft and is not merged.
