# PR #205 — structural re-audit of the 513-variant pack

Audit date: 2026-11-19  
Data snapshot reviewed: `955e3ddee89b800ae08d305be6745dfabe87f72c`  
Pack blob: `4f8a5e403d5e5d5dc846bae5ed7c8170f5dad7b4`  
Generated output blob: `8697607974243652353a8e9156aec3e169756c52`

This report replaces the stale 2026-11-09 structural audit. The complete JSON blob was retrieved and parsed directly; the generated TypeScript blob was retrieved separately and compared with the importer output reconstructed from the JSON.

## 1. Package and source status

| Metric | Result |
|---|---:|
| Variants | 513 |
| `partially-verified` | 513 |
| `verified` | 0 |
| `unverified` | 0 |
| Source references | 725 |
| `secondary-reference` sources | 707 |
| `oem-service-manual` sources | 10 |
| `oem-bulletin` sources | 8 |

OEM manuals cover only the fields and variants explicitly supported by those documents. Their presence does not verify every field of a record. No record was promoted to `verified`.

## 2. Structural checks on the reviewed snapshot

| Check | Result |
|---|---:|
| Duplicate variant IDs | **0** |
| Duplicate exact identities using the importer key | **0** |
| Schema validation errors | **0** |
| Non-positive or non-finite supplied dimension values | **0** |
| Missing market limitation for unresolved market evidence | **0** |
| JSON-to-generated TypeScript output exact match | **Yes** |

The exact identity key used was copied from `scripts/importVehicleVariants.ts`: model ID, generation ID, market, model-year and production-month bounds, body code/style, trim/grade, engine code, transmission code/type, drivetrain, and steering position. This avoids the false duplicate matches produced by a simplified key that omits identity dimensions.

Schema validation was checked against `validateVehicleVariant` in `src/data/vehicleVariantSchema.ts`, including required identity fields, year/month ranges, unresolved-market limitations, engine/transmission/drivetrain limitations, source metadata, positive numeric values, wheel/tire/wiper entries, and verification-source requirements.

The generated output comparison reconstructed the importer’s exact header and `JSON.stringify(variants, null, 2)` output and compared it with the generated TypeScript blob; the contents matched exactly.

These are structural/data-contract checks. They do not establish that every vehicle specification is OEM-confirmed or that every model/generation assignment is historically correct for every market.

## 3. Sales-market status — corrected count

The previous 2026-11-09 report stated 73 unresolved markets. A direct recount found 75. After matching 34 records to explicit market-separated secondary catalog pages, those 34 `variant.market` fields were assigned with attached sources and explicit limitations. **41 records remain unresolved**. No market has been inferred from an assembly country.

The 75 unresolved records break down as follows:

| Market label | Records |
|---|---:|
| `не указан в карточке Drom` | 26 |
| `не указан в источнике` | 40 |
| `не установлен по источнику` | 3 |
| `не уточнён; Drom указывает сборку Япония/США` | 1 |
| `не указан; страна сборки Япония` | 1 |
| `рынок сбыта не указан; Drom указывает сборку Япония/Малайзия` | 1 |
| `рынок не уточнён; Drom указывает сборку Япония/Россия/Малайзия` | 1 |
| `рынок сбыта не указан; страна сборки Япония` | 2 |
| **Total** | **75** |

Records 501–513 are broad family/generation index entries, not exact repair-ready variants. They are included in the 75 because their market is explicitly unspecified. Their notes and limitations prohibit using them as exact service/fitment records.

This audit does **not** resolve the 75 markets. A Drom page that identifies an assembly location is not proof of the sales market. Each case still requires market-specific OEM documentation or another reliable source that identifies the destination market.

## 4. Source-market text differences

There are **35 records** where at least one `source.market` string differs textually from `variant.market`. This is expected for records whose original source explicitly omitted the sales market or described assembly countries, while a separate market-specific catalog source now supports a market assignment. Every such record has an explicit `market` limitation preserving the provenance and the distinction between sales market and assembly.

The separate [market evidence audit](pr-205-market-evidence-audit-2026-11-19.md) lists all 34 market assignments and the 41 unresolved records. The original source labels were retained rather than rewritten to imply that a generic source had identified a market.


## 5. Family-level index entries

Records 501–513 are broad family/generation index entries, not exact repair-ready vehicle variants. Their notes and limitations require exact market, trim, frame/type code, model-year applicability, transmission, drivetrain, steering position, fitment and service-fluid data to be established from VIN/frame and primary documentation. Keep them visibly distinct from exact trim-level variants in user-facing selection and maintenance workflows.

## 6. Factual verification status and remaining work

The package remains partially verified. The structural audit confirms uniqueness, schema compliance, explicit market limitations, and generated-file synchronization. It does **not** replace a case-by-case source review.

Still unresolved:
- determine whether any of the 75 market labels can be resolved from market-specific OEM documentation;
- review the five source-market text differences, especially the scope of the Russia-specific Lancer torque source;
- obtain OEM-level confirmation for variant-specific technical data where currently supported only by secondary catalogs;
- verify exact transmission codes and service/fitment specifications against the precise market and vehicle/frame.

Do not promote a record to `verified`, infer a sales market from country of assembly, or fill missing technical values without supporting documentation.

## 7. CI status

At the reviewed data snapshot `920be2cc47f1839502dba4f2ace3a432b69345e1`:
- [Build and typecheck](https://github.com/sadist57rus/Nippon-Drive/actions/runs/42665937452) — success.
- [Nippon-Drive Android APK](https://github.com/sadist57rus/Nippon-Drive/actions/runs/42665937674) — success; typecheck, catalog audit, web build, Android sync, debug APK build and artifact upload completed.

These original runs are associated with the reviewed data snapshot. The audit-document correction was later checked again on commit `98c55d71deaf5754fb07165979abbac0750ebb2d`:
- [Build and typecheck](https://github.com/sadist57rus/Nippon-Drive/actions/runs/44496674074) — success.
- [Nippon-Drive Android APK](https://github.com/sadist57rus/Nippon-Drive/actions/runs/44496674058) — success; typecheck, catalog audit, web build, Android sync, debug APK build and artifact upload completed.
The separate market-evidence audit added after `98c55d7` still requires CI on its resulting HEAD.

## 8. Merge decision

PR #205 remains Draft and must not be merged solely on the basis of this structural audit. The 75 unresolved market cases and the remaining factual-source questions are explicit outstanding work. Merge only after those questions are either resolved with reliable evidence or explicitly accepted as non-blocking, with the limitations retained in the data and UI.


## 9. Market evidence follow-up (2026-11-19)

A separate case-by-case market-source check is recorded in [the market evidence audit](pr-205-market-evidence-audit-2026-11-19.md).

- The JSON still contains **75 unresolved `variant.market` fields**.
- **34** of those records now have an exact market-separated Drom catalog match (USA, Russia, South Korea, Europe or UAE). These are secondary-source matches only; no market fields were changed and no record was promoted to OEM-confirmed status.
- **41** remain unresolved at the required confidence level: record 4 (Camry SE, strong USA candidate but year-span reconciliation pending), 27 broad/mixed-market records from 473 and 475–500, and 13 family index records 501–513.
- Nissan Middle East OEM material supports the UAE-market Patrol Super Safari 4.8L/280hp relaunch in 2017. However, rows 180, 182, 183 and 184 currently start in 2004 while the market-specific catalog lists 280hp variants from February 2017. Correct their applicability dates or justify them with exact OEM documentation before merge. Row 180's manual-transmission applicability also needs reconciliation against Nissan Middle East's 2017 3-door launch announcement, which specifies a 5-speed automatic.
- Do not treat country of assembly as sales market. Do not alter the pack's market fields until the market-specific scope is supported and the evidence is recorded.
## 9. Market evidence follow-up (2026-11-19)

A separate case-by-case market-source check is recorded in [the market evidence audit](pr-205-market-evidence-audit-2026-11-19.md).

- **34** market fields are now assigned from exact market-separated Drom catalog pages (USA, Russia, South Korea, Europe or UAE). Matching sources are attached to each record. These are secondary-source assignments; all 513 records remain `partially-verified`.
- **41** market fields remain unresolved: record 4 (Camry SE, strong USA candidate but year-span reconciliation pending), 27 broad/mixed-market records from 473 and 475–500, and 13 family index records 501–513.
- Four Patrol Y61 TB48DE 280 hp rows (180, 182, 183, 184) have had their model-year ranges corrected from 2004–2017 to 2017–2024, based on the UAE-specific catalog and Nissan Middle East relaunch evidence. Exact gearbox applicability remains limited for rows 180, 183 and 184.
- Total source references are now **725**: 707 secondary references, 10 OEM service manuals and 8 OEM bulletins.
- 35 records have source-market text differences; all have explicit limitations preserving source scope.
- Do not treat country of assembly as sales market. Do not promote any record to `verified` without field-specific primary-source confirmation.
