# PR #205 — factual review, batch 11 (records 501–513)

Date: 2026-11-09  
PR: https://github.com/sadist57rus/Nippon-Drive/pull/205  
Reviewed records: 501–513 (13 entries).  
Data update: `562ef4faf60bd6bb01f78a30c81f44afdbf802ea`; generated catalog sync: `259cbb68f586ff5813eeb3b3752cc6bc945b5956`.

## Scope and classification

These 13 entries are explicitly family/generation index records, not exact vehicle variants. Their notes already state that they are for catalog coverage only and must not be used as repair instructions. They are retained as `partially-verified`, but now carry field-level limitations for market, exact grade, full body/frame code, model-year applicability, transmission, drivetrain, steering, maintenance fluids and fitment data.

## Corrected factual errors

- **Record 507 — Nissan X-Trail T30, QR20DE:** torque was stored as 30 Nm. Drom's exact T30 2.0 specification lists 140 hp and **192 Nm**. Corrected to 192 Nm and attached the Drom engine-torque reference.
- **Record 508 — Nissan X-Trail T31, MR20DE:** torque was stored as 31 Nm. Drom and Nissan dealer technical data list 141 hp and **196 Nm**. Corrected to 196 Nm and attached the Drom engine-torque reference.

Sources:
- Drom Nissan X-Trail engine torque: https://www.drom.ru/catalog/nissan/x-trail/specs/engine_torque/
- Drom T30 QR20DE 2.0 specification: https://www.drom.ru/catalog/nissan/x-trail/509921/
- Nissan dealer archive specifications for T31 MR20DE: https://www.major-nissan.ru/model/archive/x-trail/features/

## Other family records

The following remain broad family entries, not exact trim-level records:
- 501–504: Corolla E100/E120 and Camry XV30/XV40.
- 505–506: Hilux N50–N70 and HiAce H200.
- 509: Serena C25.
- 510–512: Accord CF, Odyssey RA and CR-V RD.
- 513: Mazda BT-50 UP/UR.

Engine families and broad output values are retained from their cited manufacturer/history/catalog sources. Missing torque remains explicitly limited for records 501–504 and 510. The 513 BT-50 entry is GCC-specific; other markets can have different 2.2/3.2 diesel calibrations, so its engine code and output must be matched to the VIN/market.

## Field-level limitations added

For all 13 family entries, limitations now state that:
- sales market is not established by the family source;
- exact grade/trim and full frame/type code require VIN/frame identification;
- family model-year range does not prove each engine/gearbox combination for every year;
- transmission type/code and drivetrain are not established for the exact vehicle;
- steering position is unknown;
- engine induction, wipers, tyres, wheel fitments, dimensions and service-fluid specifications/capacities are not established;
- transfer-case and differential applicability depends on the exact drivetrain.

No transmission, drivetrain, steering, market or service-fluid value was guessed.

## Structural checks

- Records reviewed: **13 / 13**.
- X-Trail torque errors corrected: 30 → 192 Nm and 31 → 196 Nm.
- Full package remains 513 variants.
- No model IDs, generation IDs or variant IDs changed.
- All 13 entries remain `partially-verified`.
- Generated TypeScript catalog synchronized with the JSON pack.

## Result

The last 13 entries are now explicitly classified as family-level indexes, not repair-ready variants. The two truncated X-Trail torque values are corrected. Exact market/trim/transmission/drivetrain and VIN-specific data remain outstanding. PR remains Draft and is not merged.
