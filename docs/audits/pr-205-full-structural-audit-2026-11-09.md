# PR #205 — full structural audit of the 513-variant pack

Date: 2026-11-09  
Reviewed HEAD: `18a49a4cc27b69ecc7bfd5a4a41e13cae98f6d3e`  
Pack: `src/data/packs/drom-verified-batch-01.json`  
Generated output: `src/data/vehicleVariantPacks.generated.ts`

This report supersedes the preliminary machine audit dated 2026-11-08. It re-evaluates the full pack after factual reviews of batches 01–11 and the later source/limitation updates.

## 1. Package and source status

| Metric | Result |
|---|---:|
| Variants | 513 |
| Verification status: `partially-verified` | 513 |
| Verification status: `verified` | 0 |
| Verification status: `unverified` | 0 |
| Source references | 683 |
| `secondary-reference` sources | 673 |
| `oem-service-manual` sources | 10 |

The presence of an OEM manual for a subset of a variant's data does not automatically verify every field of that variant. No record was promoted to `verified`.

## 2. Structural checks

| Check | Result |
|---|---:|
| Duplicate variant IDs | **0** |
| Duplicate exact identities using importer key | **0** |
| Production-month ranges outside model-year bounds or invalid month order | **0** |
| Missing model IDs in vehicle catalog | **0** |
| Unknown generation IDs | **0** |
| Generation linked to a different model ID | **0** |
| JSON/generated TypeScript exact match | **Yes** |

The importer checks that each `modelId` exists, each `generationId` exists and belongs to that model, IDs are unique, and the exact identity key is unique. These are structural link checks; they do not by themselves prove that a generation assignment is historically correct for every market and body.

## 3. Missing fields and limitation coverage

A missing value is acceptable only when its absence is explicitly explained in the record's `limitations` array. All checked missing fields now have a matching field-level limitation.

| Field | Missing | Missing without matching limitation |
|---|---:|---:|
| Dimensions | 439 | 0 |
| Transmission type | 40 | 0 |
| Drivetrain | 35 | 0 |
| Wheel fitments | 506 | 0 |
| Tyres | 513 | 0 |
| Wiper blade sizes | 513 | 0 |
| Engine torque | 290 | 0 |
| Engine induction / aspiration | 498 | 0 |
| Engine oil | 513 | 0 |
| Transmission fluid | 513 | 0 |
| Coolant | 513 | 0 |
| Transfer-case fluid | 513 | 0 |
| Differential fluid | 513 | 0 |

The transfer-case and differential limitations must be interpreted with the exact drivetrain: a FWD record may not have a separate transfer case, while AWD/4WD applicability and fluid requirements need exact vehicle documentation. Limitations do not imply that every listed component exists on every variant.

## 4. Market metadata

- **73 records** have an explicitly unresolved or unspecified sales-market value.
- **5 records** have a text-level mismatch between `variant.market` and one of their `source.market` labels.

The five mismatches are:
1. Mazda CX-5 KE, record 7: sales market is unspecified; source label also mentions Japan/Malaysia as assembly locations.
2. Mazda CX-5 KE, record 8: sales market is unspecified; source label also mentions Japan/Russia/Malaysia as assembly locations.
3. Suzuki Grand Vitara JT, record 13: sales market is unspecified; source label says assembly in Japan.
4. Suzuki Grand Vitara JT, record 14: same distinction as record 13.
5. Mitsubishi Lancer CS Wagon, record 477: variant market is unspecified, while one attached source reference is labelled Russia.

These are not automatically treated as data errors: the first four distinguish sales market from assembly country, while the Lancer reference requires source-by-source review. Do not infer a sales market from the country of assembly.

## 5. Family-level index entries

Records 501–513 are broad family/generation index entries, not exact repair-ready vehicle variants. Their notes and limitations state that exact market, trim, full frame/type code, model-year applicability, transmission, drivetrain, steering position, fitment and service-fluid data require VIN/frame and primary documentation. Keep them visibly distinct from exact trim-level variants in any future user-facing selection or maintenance workflow.

## 6. Factual review coverage

The package has factual review documents for all 513 records, in eleven contiguous batches:
- 1–50, 51–100, 101–150;
- 151–200, 201–250, 251–300, 301–350;
- 351–400, 401–450, 451–500;
- 501–513.

These reviews use Drom as a secondary catalog reference and attach OEM/service-manual evidence only where it was actually checked. Known unresolved conflicts—such as Jimny JB64/K15B, Prius body/type-code ambiguity, market labels and incomplete trim-year applicability—remain explicitly limited rather than silently normalized.

## 7. Current CI

At the reviewed HEAD `18a49a4cc27b69ecc7bfd5a4a41e13cae98f6d3e`:
- [Build and typecheck](https://github.com/sadist57rus/Nippon-Drive/actions/runs/42665352580) — success.
- [Nippon-Drive Android APK](https://github.com/sadist57rus/Nippon-Drive/actions/runs/42665353834) — success; debug APK built and uploaded as an artifact.

The successful workflows confirm the automated checks and build at this exact commit. They do not convert secondary-source vehicle data into OEM-verified specifications.

## 8. Remaining work / decision

The structural pack audit is clean: no duplicate IDs, no duplicate exact identities, no invalid production windows, all missing fields have matching limitations, and generated output is synchronized. The remaining factual risks are market resolution for 73 records, five source-market label differences, OEM-level confirmation of most variant data, exact transmission codes and maintenance/fitment specifications.

PR #205 remains Draft. This audit does not authorize merging.
