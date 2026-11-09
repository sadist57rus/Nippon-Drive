# PR #205 — factual review, batch 07 (records 301–350)

Date: 2026-11-09  
PR: https://github.com/sadist57rus/Nippon-Drive/pull/205  
Reviewed records: 301–350 (50 variants).  
Data update: `8bfc16f46a9e8a6a637c5ac60f7b2e947b681ada`; generated catalog sync: `4efd8d3ba16afb7669f057b6e89c1284da3f1673`.

## Scope

This batch contains the end of the European pre-facelift Mazda6 GH liftback list, Mazda6 GH facelift variants for Russia and Europe, and four Russian Nissan Teana J32 variants. Checked the exact Drom market/body/trim/engine/transmission/production-period entries.

## 301–315 — Mazda6 GH pre-facelift, European liftback

The Drom liftback page supports:
- RF7J 2.0CD 140 hp, MT, trims Comfort/Exclusive/Dynamic/Top, 08.2007–11.2008 (record 301).
- LF17 2.0 petrol 147 hp, MT/AT, Exclusive/Dynamic, 08.2007–11.2010 (records 302–305).
- R2BF 2.2CD 125 hp, MT, Comfort/Exclusive/Dynamic, 11.2009–04.2010 (records 306–308).
- R2AA 2.2CD 163 hp, MT, Exclusive/Dynamic/Top (records 309–311).
- R2AA 2.2CD 185 hp, MT, Dynamic/Top, 01.2009–04.2010 (records 312–313).
- L5-VE 2.5 petrol 170 hp, MT, Dynamic/Top, 08.2007–11.2010 (records 314–315).

The exact trim periods were retained or aligned with the Drom trim rows. For records 309–311, Drom's table gives 08.2007–11.2010, but the same page narrative says the 2.2 MZR-CD range appeared in 2009. The period fields are therefore explicitly limited pending Mazda primary documentation; no replacement date was guessed.

Source:
- Drom Mazda6 GH liftback: https://www.drom.ru/catalog/mazda/mazda6/g_2007_7362/

## 316–325 — Mazda6 GH facelift, Russia, sedan

Drom identifies the Russian-market facelift sedan, model period 12.2009–07.2012, with these trim groups:
- L813 1.8 MT Direct / Touring / Touring Plus, 120 hp.
- LF17 2.0 MT Touring Plus / Sport and AT Touring Plus / Impulse Line / Sport, 147 hp.
- L5-VE 2.5 MT / AT Sport, 170 hp.

The exact trim production period shown by Drom is 03.2010–07.2012. The records' market, body style, engine family, transmission and power values match that page.

Source:
- Drom Mazda6 GH facelift sedan, Russia: https://www.drom.ru/catalog/mazda/mazda6/g_2009_4076/

## 326–346 — Mazda6 GH facelift, Europe, estate/wagon

Drom identifies the European facelift estate/wagon, model period 12.2009–07.2012. It supports:
- L813 1.8 MT 120 hp, Prime-Line / Center-Line / Exclusive-Line / Sondermodell Active / Sports-Line.
- LF-DE 2.0 DISI 155 hp, MT and AT, Prime-Line / Center-Line / Exclusive-Line / Sondermodell Active / Sports-Line.
- R2BF 2.2CD 129 hp, MT.
- R2AA 2.2CD 163 hp, MT.
- R2AA 2.2CD 180 hp, MT.
- L5-VE 2.5 MT 170 hp, Sports-Line.

The listed trim periods are 03.2010–07.2012. The 21 records preserve the European market and estate/wagon body style; they are not merged with the Russian sedan or pre-facelift variants.

Source:
- Drom Mazda6 GH facelift estate/wagon, Europe: https://www.drom.ru/catalog/mazda/mazda6/g_2009_4080/

## 347–350 — Nissan Teana J32, Russia

All four records match Drom's Russian-market J32 2.5 CVT 4WD section:
- QR25DE, 2,488 cm³, 167 hp.
- Elegance + Four, Luxury Four, Luxury + Four, Premium Four.
- Production period 07.2010–08.2011.
- CVT, 4WD, LHD.

Source:
- Drom Nissan Teana J32, Russia: https://www.drom.ru/catalog/nissan/teana/g_2008_5258/

## Field-level limitations

All 50 records now have explicit limitations for:
- wiper blade sizes;
- engine torque;
- induction / aspiration type;
- engine oil, transmission fluid, transfer-case fluid, differential fluids and coolant.

The 46 Mazda6 records whose steering position is not established by the cited market-specific row have an explicit steering-position limitation. The four Teana records retain LHD.

Existing limitations already cover missing dimensions, tyre sizes, wheel fitments and transmission codes. Records 309–311 additionally have production-period limitations due to the Drom table/narrative conflict.

No missing technical values were filled by inference.

## Structural checks

- Records reviewed: **50 / 50**.
- All records remain `partially-verified`; the sources are secondary Drom catalog pages.
- Duplicate IDs in the full 513-record package: **0**.
- Duplicate exact identities using the importer's key (including body style and steering position): **0**.
- Generated TypeScript catalog matches JSON byte-for-byte.
- Model IDs, generation IDs and variant IDs unchanged.
- Technical values were not changed in this batch; six source scopes for the preceding Mazda6 GH liftback records were made explicit to match the Drom trim periods.

## Result

The market, body-style, engine, trim and transmission mappings for records 301–350 are cross-checked against the cited Drom pages. Records 309–311 retain an explicit unresolved production-period conflict. The batch is not fully OEM-verified. PR remains Draft and is not merged.
