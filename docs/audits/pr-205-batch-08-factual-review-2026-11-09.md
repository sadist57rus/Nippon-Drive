# PR #205 — factual review, batch 08 (records 351–400)

Date: 2026-11-09  
PR: https://github.com/sadist57rus/Nippon-Drive/pull/205  
Reviewed records: 351–400 (50 variants).  
Data update: `d6edd5a8dedd24634e2a86ffd361cf985fe5ae71`; generated catalog sync: `8962e0600666747aab712c61154c549a01864c0b`.

## Scope

This batch contains eight remaining Russian Nissan Teana J32 variants, five Honda Civic variants and 37 Japanese Toyota Prius NHW20 variants. The matching Drom market/trim pages were checked, and Drom engine-torque tables were used where they provide exact torque values.

## 351–358 — Nissan Teana J32, Russia (8 records)

The Drom J32 page confirms:
- VQ25DE 2.5 CVT FWD, 182 hp, Elegance / Elegance + / Luxury / Luxury + / Premium, 02.2008–08.2011.
- VQ35DE 3.5 CVT FWD, 249 hp, Luxury / Luxury + / Premium, 02.2008–08.2011.

The Drom torque table gives:
- VQ25DE: **228 Nm**.
- VQ35DE: **326 Nm**.

These torque values were added to records 351–358. The same torque source also confirms QR25DE 2.5 CVT 4WD at **240 Nm** for records 347–350, so those four earlier Teana entries were updated in the same commit.

Sources:
- Drom Nissan Teana J32, Russia: https://www.drom.ru/catalog/nissan/teana/g_2008_5258/
- Drom Nissan Teana engine torque: https://www.drom.ru/catalog/nissan/teana/specs/engine_torque/

## 359–362 — Honda Civic FK2/FN1, Russia (4 records)

The Drom 2009 facelift hatchback page confirms 1.8 R18A2, 140 hp, front-wheel drive, MT Sport / AT Sport / AT Executive / AT Glass Roof, 05.2009–03.2012.

Drom's torque table confirms **174 Nm** for both MT and AT R18A2 versions. This value was added to all four records.

Sources:
- Drom Honda Civic FK/FN facelift, Russia: https://www.drom.ru/catalog/honda/civic/g_2009_1412/
- Drom Honda Civic engine torque: https://www.drom.ru/catalog/honda/civic/specs/engine_torque/

## 363 — Honda Civic FB, UAE (1 record)

The Drom UAE section confirms 2011–2013 FB sedan, 1.8 AT LXi, R18A1, 139 hp, FWD, 07.2011–04.2013. Drom's torque table lists **174 Nm** for the 2011 FB 1.8 R18A1. That value was added.

Source:
- Drom Honda Civic FB, UAE: https://www.drom.ru/catalog/honda/civic/g_2011_25045/
- Drom Honda Civic engine torque: https://www.drom.ru/catalog/honda/civic/specs/engine_torque/

## 364–400 — Toyota Prius NHW20, Japan (37 records)

The Drom NHW20 generation page identifies Japan as the market and right-hand drive. It lists the 1NZ-FXE 1.5-litre hybrid with:
- gasoline engine output: **76 hp**;
- electric motor output: **68 hp**;
- CVT and FWD;
- body designation `DAA-NHW20`.

The 37 entries map to the exact trim groups and production periods:
- 09.2008–04.2009: 15 variants (records 364–378).
- 09.2007–08.2008: 15 variants (records 379–393).
- 01.2007–08.2007: 7 variants (records 394–400).

The Drom table lists gasoline-engine and electric-motor output separately. The 76 hp value remains in `engine.powerHp` as the internal-combustion engine output. The 68 hp motor value was not added to it; the combined hybrid-system output is not represented by the current schema and cannot be calculated by simply summing the two numbers. A `hybridSystemPower` limitation and an explanatory note were added to all 37 Prius records.

Source:
- Drom Toyota Prius NHW20, Japan, 52 variants: https://www.drom.ru/catalog/toyota/prius/g_2005_1218/
- Drom Toyota Prius 2008 market/trim list: https://www.drom.ru/catalog/toyota/prius/2008/
- Drom Toyota Prius 2007 market/trim list: https://www.drom.ru/catalog/toyota/prius/2007/

## Field-level limitations

All 50 records now have explicit limitations for wiper sizes, induction type, engine oil, transmission fluid, coolant and differential-fluid data. Transfer-case handling is distinguished by drivetrain:
- FWD variants: a separate transfer case is not applicable.
- Teana 4WD variants (records 347–350): transfer-case/transfer-unit fluid specification is not confirmed.

For the 37 Prius records, limitations explicitly state that the 76 hp figure is the gasoline engine output, the 68 hp electric motor is separate, and total hybrid-system output is not represented. Torque remains unconfirmed for these Prius variants.

Dimensions, tyre sizes, wheel fitments and transmission-code limitations were already present. Steering position is known for all 50 records in this batch: 13 LHD and 37 RHD.

## Structural checks

- Records reviewed: **50 / 50**.
- Confirmed torque values added: records 347–363 (17 total; four Teana records were included as a related follow-up).
- All 37 Prius records retain 76 hp as ICE output and explicitly distinguish the 68 hp electric motor.
- All records remain `partially-verified`; Drom remains a secondary source.
- Full package: 513 variants, **0 duplicate IDs**, **0 duplicate exact identities** using the importer key including body style and steering position.
- Generated TypeScript catalog matches the JSON pack byte-for-byte.
- Model IDs, generation IDs and variant IDs unchanged.

## Result

The Teana and Civic torque values are now supported by Drom's engine-torque tables. Prius engine and electric-motor outputs are kept separate, with no invented combined output. No unsupported service or fitment values were added. PR remains Draft and is not merged.
