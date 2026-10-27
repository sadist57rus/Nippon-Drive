# Baseline Nippon-drive — 2026-10-27

- Repository: `sadist57rus/Nippon-Drive`; baseline `main`: `4f9c0b57ad2903300d876db7dd32dfc0bc5d3915`.
- Access is through GitHub repository APIs; no local checkout or shell execution is available in this work session.
- Therefore local `git status`, `git log`, `npm ci`, and local bundle-size measurements have not been run here.
- `package.json` exposes `lint`, `build`, `audit:catalog`, `audit:branding`, `check`, and `test:smoke`.
- `check` runs lint, build, catalog audit, and branding audit; CI also runs Playwright smoke tests.
- `src/data/vehicleCatalog.ts` side-effect imports three supplemental model files and mutates the imported brand list during deduplication.
- `src/data/expandedJapaneseModels.ts` is 371,968 bytes; `expandedKeiCars.ts` is 84,211 bytes; `expandedMazdaSuzukiModels.ts` is 16,854 bytes.
- Only two scripts are present at baseline: `scripts/auditCatalog.ts` and `scripts/auditProjectBranding.ts`.
- `GarageLogbook.tsx` seeds three fabricated Outlander history entries for the first vehicle when storage is empty.
- `FuelMonitor.tsx` initializes calculator and new-entry fields with sample-looking values, including odometer and station.
- `MaintenanceHub.tsx` hardcodes a 60 L tank and Outlander-specific consumption comments.
- `android-apk.yml` has broad `contents: write` permission and refreshes the lockfile during CI; release behavior requires a dedicated workflow review.
- `release-retention.yml` must be reviewed to ensure tagged `v*` releases are never removed.
- No local test output or bundle measurement is claimed; PR CI will be the executable verification for submitted changes.
- Assumption: existing stored user records must be preserved; removing automatic sample seeds must not delete existing storage.
