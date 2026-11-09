# PR #205 — factual review, batch 09 (records 401–450)

Date: 2026-11-09  
PR: https://github.com/sadist57rus/Nippon-Drive/pull/205  
Reviewed records: 401–450 (50 variants).  
Data update: `e9e8bd8bffa74e6913bdb3c4ba69b4eba9005c39`; generated catalog sync: `7160974ab9e92cc1201957cda6eff326ddf91d37`.

## Scope

The batch contains the final 20 Toyota Prius NHW20 variants and 30 Japanese Honda Fit GE 1.3 variants. The Drom generation pages and trim periods were checked, including engine output, body/type codes, market, drivetrain and transmission.

## 401–420 — Toyota Prius NHW20, Japan (20 records)

All entries are Japan-market, RHD, FWD hybrid liftbacks with 1NZ-FXE 1,496 cm³, CVT and a separately listed 68 hp electric motor.

**Records 401–408:** 1.5 G/S and Welcab / touring / anniversary variants, 01.2007–08.2007. The Drom page lists 76 hp for the gasoline engine; these values remain unchanged.

**Records 409–414:** 1.5 S/G standard and touring variants, 11.2005–12.2006. Drom's NHW20 table lists **77 hp**, not 76 hp, for this earlier period. These six records were corrected from 76 to **77 hp**. Production periods, engine code, body code and IDs were not changed.

**Records 415–420:** 1.5 S/G and Touring Selection variants, 09.2003–10.2005; premium Touring Selection variants, 08.2004–10.2005. Drom lists the 1NZ-FXE at 77 hp and identifies both `ZA-NHW20` and `DAA-NHW20` as body/type codes for the generation, but does not separate the exact code by trim. The records retain the generic chassis code `NHW20` and now carry an explicit body-code limitation rather than an unsupported choice between ZA and DAA.

For all 20 Prius records, the data keeps ICE output separate from electric-motor output. No combined system output was inferred by adding 76/77 hp and 68 hp. The schema has no confirmed combined-system-power field; this is explicitly marked as a limitation.

Sources:
- Drom Toyota Prius NHW20 2005–2011, Japan, RHD: https://www.drom.ru/catalog/toyota/prius/g_2005_1218/
- Drom Toyota Prius 2003–2005, Japan, RHD: https://www.drom.ru/catalog/toyota/prius/g_2003_4915/
- Drom Toyota Prius 2008 market/trim rows: https://www.drom.ru/catalog/toyota/prius/2008/

## 421–450 — Honda Fit GE, Japan (30 records)

The Drom GE generation page confirms the Japanese market, RHD, 1.3-litre L13A engine, 1,339 cm³ and 100 hp. The batch covers:
- GE6 FWD, manual transmission, G / G Smart Selection (records 421–422).
- GE7 4WD, automatic transmission, G / L / Welcab rotating-seat / Smart Selection / Highway Edition / Smart Style Edition / She's / Sporty Edition (records 423–436).
- GE6 FWD, CVT, G / L / Welcab rotating-seat / Smart Selection / Highway Edition / Smart Style Edition / She's / Sporty Edition (records 437–450).

The source page distinguishes GE6 FWD from GE7 4WD and lists the exact trim periods represented in the records: 10.2007–10.2009, 06.2008–10.2009, 05.2009–10.2009, 11.2009–09.2010 and 05.2010–09.2010.

Drom's Honda Fit torque table lists **127 Nm** for the 1.3-litre 100 hp L13A engine across MT FWD, CVT FWD and AT 4WD variants. That torque value was added to all 30 Fit records, with the torque-table source attached.

Sources:
- Drom Honda Fit GE, Japan: https://www.drom.ru/catalog/honda/fit/g_2007_1029/
- Drom Honda Fit engine torque: https://www.drom.ru/catalog/honda/fit/specs/engine_torque/

## Field-level limitations

For all 50 records, explicit limitations cover wiper sizes, induction type, engine oil, transmission fluid and coolant. Transfer-case and differential limitations distinguish FWD from 4WD:
- FWD Prius/Fit variants: no separate transfer case is applicable; no separate differential-fluid quantity is inferred.
- Fit GE7 4WD variants: transfer-unit and rear-differential fluid specifications remain unconfirmed.

For Prius records 401–420, limitations state that the gasoline-engine output and 68 hp electric-motor output are separate, that total hybrid-system output is not represented by a confirmed value, and that the generic NHW20 body code in records 415–420 needs frame/type-code confirmation.

Existing limitations already cover dimensions, tyres, wheel fitments and transmission codes.

## Structural checks

- Records reviewed: **50 / 50**.
- Prius records 409–414 corrected from 76 to 77 hp using the period-specific Drom row.
- Prius records 415–420 retain generic `NHW20` with a body-code limitation; no unsupported ZA/DAA selection.
- Honda Fit torque **127 Nm** added to all 30 GE6/GE7 variants.
- All 50 records remain `partially-verified`; sources are secondary Drom catalog pages.
- Full package: 513 variants, **0 duplicate IDs**, **0 duplicate exact identities** using the importer key including body style and steering position.
- Generated TypeScript catalog matches the JSON pack byte-for-byte.
- Model IDs, generation IDs and variant IDs unchanged.

## Result

The Prius power difference between 2005–2006 (77 hp) and 2007+ (76 hp) is now reflected. The NHW20 type-code ambiguity remains explicit. Honda Fit GE 1.3 torque is supported by the Drom torque table. No unverified maintenance or fitment values were added. PR remains Draft and is not merged.
