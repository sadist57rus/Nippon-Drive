# PR triage — dry-run (2026-10-27)

> **Read-only decision report.** No PR was merged or closed. No ruleset was changed.
>
> Snapshot: main = 4f9c0b57ad2903300d876db7dd32dfc0bc5d3915. Ahead/behind counts are relative to this main snapshot from GitHub compare API.
>
> **Execution limitation:** this environment could not run the requested local Git commands (git fetch origin --prune, git merge-base --is-ancestor, git rev-list, git diff, git log) because the clone attempt failed. GitHub REST PR metadata, compare endpoints, commit endpoints and check-runs were used as the available equivalent. Exact local Git output and full merge-conflict markers are unavailable and are not invented.

## PR matrix

Checks: ✓ success; ✗ failure; C cancelled; — skipped; ∅ no check-runs returned for that head SHA. “prepare” = Prepare web and native project.

| PR | title | baseRefName | headRefName | isDraft | mergeable / mergeStateStatus | checks (name: conclusion) | changed_files | additions/deletions | ahead/behind main | updatedAt | decision |
|---:|---|---|---|---|---|---|---:|---:|---:|---|---|
| #168 | Не переносить параметры старой модели при смене автомобиля | main | fix/clear-stale-engine-on-model-change | false | true / clean | verify ✓; prepare ✓; Build debug APK (artifact only) ✓; Build signed APK — | 1 | 3/3 | 3/0 | 2026-10-27 09:00Z | fix-ci |
| #167 | Не подставлять параметры Outlander при миграции гаража | main | fix/legacy-garage-migration-no-fake-outlander-defaults | false | true / clean | verify ✓; prepare ✓; debug APK ✓; signed APK — | 2 | 24/1 | 3/0 | 2026-10-27 09:00Z | fix-ci |
| #166 | Убрать VIN из URL каталога запчастей | main | fix/remove-vin-from-source-url | false | true / clean | verify ✓; prepare ✓; debug APK ✓; signed APK — | 1 | 1/1 | 1/0 | 2026-10-27 08:58Z | merge-now |
| #165 | Восстанавливать вкладку и убрать мёртвый выбор ориентации | main | fix/restore-tab-history-remove-dead-orientation | false | true / clean | verify ✓; prepare ✓; debug APK ✓; signed APK — | 1 | 8/30 | 1/0 | 2026-10-27 08:58Z | merge-now |
| #164 | Не удалять пользовательские данные при ошибке раздела | main | fix/error-boundary-preserve-user-data | false | true / clean | verify ✓; prepare ✓; debug APK ✓; signed APK — | 1 | 1/1 | 1/0 | 2026-10-27 08:58Z | merge-now |
| #163 | Скрыть нулевые заглушки габаритов и объёма бака | main | fix/hide-unknown-zero-dimensions | false | true / clean | verify ✓; prepare ✓; debug APK ✓; signed APK — | 1 | 18/12 | 1/0 | 2026-10-27 08:58Z | merge-now |
| #162 | Защитить релизы и исправить метаданные проекта | main | fix/release-safety-and-project-metadata | false | true / clean | verify ✓; prepare ✓; debug APK ✓; signed APK — | 6 | 34/791 | 7/0 | 2026-10-27 09:01Z | needs-decision |
| #161 | Убрать неподтверждённые нормы Outlander из калькулятора ТО | main | fix/remove-outlander-maintenance-defaults | false | true / clean | verify ✓; prepare ✓; debug APK ✓; signed APK — | 1 | 35/69 | 2/0 | 2026-10-27 08:58Z | merge-now |
| #160 | Убрать фиктивные записи и значения топлива | main | fix/remove-fake-vehicle-history | false | true / clean | verify ✓; prepare ✓; debug APK ✓; signed APK — | 3 | 34/174 | 4/0 | 2026-10-27 08:58Z | merge-now |
| #159 | Исправить задержку открытия главного экрана | main | fix/home-dashboard-lazy-load | false | true / clean | verify ✓; prepare ✓; debug APK ✓; signed APK — | 1 | 1/1 | 1/0 | 2026-10-27 08:58Z | rebase |
| #158 | Свернуть справочник OBD и тексты ремонтных статей | main | ui/collapsed-diagnostic-articles | false | true / clean | verify ✓; prepare ✓; debug APK ✓; signed APK — | 3 | 50/24 | 4/0 | 2026-10-27 08:58Z | merge-now |
| #157 | Цветовые варианты Mitsubishi Outlander и Lancer по реальным фото | fix/vehicle-model-images | ui/vehicle-color-selector | false | false / dirty | ∅ no check-runs returned for head SHA | 2 | 106/9 | 25/0 | 2026-10-27 08:58Z | rebase |
| #156 | Дополнить технические карточки десяти kei-моделей | main | catalog/kei-specs-batch-06 | false | true / unstable | verify ✗; prepare ✓; debug APK ✓; signed APK — | 1 | 10/10 | 3/0 | 2026-10-27 08:58Z | fix-ci |
| #155 | Убрать выдуманные силуэты и привязать фото к точной модели | main | fix/vehicle-model-images | false | true / clean | verify ✓; prepare ✓; debug APK ✓; signed APK —; materialize ✓ | 24 | 240/40 | 27/0 | 2026-10-27 08:58Z | merge-now |
| #149 | Исправить прокрутку стартового выбора автомобиля | main | fix/vehicle-setup-scroll | false | false / dirty | verify ✓; prepare ✓; debug APK ✓; signed APK — (old base) | 2 | 27/1 | 2/7 | 2026-10-27 08:58Z | rebase |
| #148 | Удалить метаданные Google AI Studio | main | chore/remove-ai-studio-metadata | false | true / unstable | verify ✗; prepare ✓; debug APK ✓; signed APK — (old base) | 1 | 1/2 | 1/8 | 2026-10-27 08:59Z | rebase |
| #146 | Исправить английские названия и полноэкранное меню выбора марки | main | ui/fix-english-fullscreen-vehicle-menu | false | true / unstable | verify ✗; prepare ✓; debug APK ✓; signed APK — | 1 | 16/16 | 2/8 | 2026-10-27 08:59Z | needs-decision |
| #145 | Заполнить технические карточки Mitsubishi Lancer IX и X | main | catalog/lancer-ix-x-data | false | true / unstable | verify C; prepare ✓; debug APK ✓; signed APK — | 1 | 21/18 | 1/14 | 2026-10-27 08:59Z | fix-ci |
| #131 | Добавить двигатели и КПП для пятой десятки японских моделей | data/powertrain-kei-batch-04 | data/powertrain-kei-batch-05 | false | true / clean | verify ✓ | 3 | 50/59 | 37/29 | 2026-10-27 08:59Z | rebuild |
| #130 | Добавить двигатели и КПП для четвёртой десятки японских моделей | data/powertrain-kei-batch-03 | data/powertrain-kei-batch-04 | false | true / clean | verify ✓ | 1 | 10/10 | 32/29 | 2026-10-27 08:59Z | rebuild |
| #125 | Исправить иконку Android и убрать нижний информационный блок | main | fix/android-app-icon-remove-footer | false | false / dirty | verify ✓; prepare ✓; debug APK ✓; signed APK — (old base) | 6 | 32/33 | 8/29 | 2026-10-27 08:59Z | rebase |

## Порядок merge

### Волна 1 — узкие изменения с зелёным CI
1. #166 — убрать VIN из URL; один файл.
2. #163 — не показывать нули как подтверждённые размеры/объём бака.
3. #164 — error boundary не удаляет пользовательские данные.
4. #161 — убрать неподтверждённые нормы обслуживания.
5. #160 — убрать фиктивные записи и значения топлива; убедиться, что полезные пользовательские данные не теряются.
6. #158 — свернуть длинные OBD/ремонтные тексты.
7. #155 — исправление изображений, базовый PR для #157.
8. #165 — восстановление вкладки и удаление неработающего выбора ориентации.
9. #167 — после проверки валидности старых engine/transmission относительно выбранной модели.

Gate per PR: fresh verify and Build debug APK (artifact only) green on the current head and review diff against current main. Build signed APK is skipped on PR and is not a required PR gate.

### Волна 2 — после обновления базы/решений
- #168 after #167: fix behavior first. Current diff sets engine and transmission to “не указан(а)” for every model change instead of selecting/representing confirmed catalog options; that contradicts the PR description. Define whether one catalog option is preselected or the user must explicitly choose one. Add tests for both a model with catalog options and a model without them; drivetrain must never be guessed.
- #159 after #165/#164: same src/App.tsx area; verify dashboard lazy-load does not restore the removed orientation screen or break error boundary.
- #149 after #165: rebase; keep both scroll-to-save test and active-tab/navigation restore tests.
- #148 after #162 or as a separate tiny PR: check if the remaining metadata removal is still needed, then rerun verify.
- #145 rebase to current main and rerun verify; cancelled is not a failure.
- #156 diagnose verify failure, fix, rerun all PR gates.
- #157 only after #155: rebase/cherry-pick feature changes onto current #155; retest photo/color mapping.
- #146 only after a language decision; recommended to retain Russian strings and the useful fullscreen scrolling.
- #162 only after decisions on APK release behavior, license and minimum Android version.
- #125 after #162/#165: rebase, eliminate duplicate asset generation and preserve required icon/manifest/service-worker behavior and keyboard APK-dialog test.

### Волна 3 — rebuild catalog data
#130/#131 must not be merged independently into main. Rebuild one fresh batch on current main, preserving current catalog rows and moving only verified unique model rows. Keep batches of 10; run npx tsc --noEmit and npm run audit:catalog. If sequential dependencies are retained, represent them as explicit PRs whose base is main, not a stale branch chain.

## Не мержить as-is

- **#162:** disables the Android APK workflow on pushes to main and removes automatic publication of test-build APK releases. Also deletes bun.lock (742 lines), changes README minimum from Android 8+ to Android 7 / minSdk 24, and adds MIT LICENSE. Green CI does not resolve these product decisions. The release-retention workflow becomes safer by only deleting old test-build releases, but APK delivery from main changes.
- **#157:** base is not an ancestor of head. Compare #155 head a33e7a7… to #157 head 3800a8d… is diverged: 12 commits ahead and 14 behind from merge-base fed64e3…. Rebase onto current #155 and review only unique Garage.tsx and VehicleIllustration.tsx changes.
- **#156:** verify failed; fix before merge.
- **#149:** dirty/conflicting, 7 commits behind main. Rebase and resolve smoke.spec.ts; preserve both scroll test and active-tab restore/navigation coverage.
- **#148:** verify failed and base is 8 commits behind main. It is not fully covered by #162: #162 sets majorCapabilities to an empty array; #148 removes the field. Recheck after #162 and rerun verify.
- **#146:** English title, subtitle, placeholder, aria-labels and labels in the Russian-language app are a likely product regression. Fullscreen scroll is useful; don't accept English strings without owner decision.
- **#145:** verify conclusion is cancelled, not failed. CI is not proven green.
- **#130/#131:** base refs point to old data branches, not main. Compare to current main shows both 29 commits behind. Rebuild the unique rows on fresh main and audit; do not merge the historical branch chain.
- **#125:** old base and dirty state; workflow runs @capacitor/assets generation twice. Select one canonical icon/splash source and generate once. Preserve icon/manifest/service-worker changes and keyboard navigation test; do not restore the orientation screen removed in #165.
- **#167:** migration preserves any non-empty legacy engine/transmission strings without validating that they belong to the resolved model. Validate them against the selected model catalog; otherwise use the same unknown fallback. Add migration tests for valid, invalid and absent legacy values.
- **#168:** CI is green but current diff sets engine and transmission to “не указан(а)” on every model change, even when catalog options exist. This conflicts with its description (“выбираются из каталога”). Decide whether a catalog option should be preselected or the user must choose explicitly, then add tests for models with and without options.

## Product decisions

1. #162 — should every successful main build still publish a test APK in GitHub Releases? Current PR removes this path. Decide before merge.
2. #162 — confirm whether MIT is the intended license for the repository.
3. #162 — confirm Android 7 / minSdk 24 wording versus the previously stated Android 8+ target.
4. #146 — default language should remain Russian unless owner explicitly approves English UI.
5. #167/#168 — unified policy: never reuse previous vehicle values or inject Outlander defaults. During legacy migration preserve engine/transmission only if valid for the resolved model; otherwise show “не указан” / “не указана”. On model change, either explicitly require the user to select an engine/gearbox from the new model's catalog, or document a deterministic default-selection rule; do not silently mark a model with known catalog options as having no data. Never guess drivetrain; reset it to neutral ALL unless a verified mapping exists.
6. #125 — pick one source of truth for launcher icon and splash; run Android asset generation once.

## Ruleset 666 — read-only result and proposed diff

GET /repos/sadist57rus/Nippon-Drive/rulesets/666 returned **404 Not Found**. The ruleset list contains an active ruleset named “666”, numeric ID 25714959. Read-only inspection of ID 25714959 showed deletion and non-fast-forward rules, but no required checks.

Proposed diff for discussion only (not applied): add required_status_checks for exactly verify and Build debug APK (artifact only), with strict_required_status_checks_policy false. Do not require Build signed APK because it is skipped on PR. Enable strict “branch up to date” only after Wave 1, not now.

~~~json
{
  "name": "666",
  "target": "branch",
  "enforcement": "active",
  "conditions": {
    "ref_name": {
      "include": ["refs/heads/main"],
      "exclude": []
    }
  },
  "rules": [
    { "type": "deletion" },
    { "type": "non_fast_forward" },
    {
      "type": "required_status_checks",
      "parameters": {
        "strict_required_status_checks_policy": false,
        "do_not_enforce_on_create": false,
        "required_status_checks": [
          { "context": "verify", "integration_id": 15368 },
          { "context": "Build debug APK (artifact only)", "integration_id": 15368 }
        ]
      }
    }
  ]
}
~~~

This is a proposal, not an apply-ready command. Verify current ruleset schema and exact check contexts before applying; owner approval is required.

## Post-merge проверки

1. On each merge commit, verify and Build debug APK (artifact only) must pass.
2. For catalog changes run npx tsc --noEmit and npm run audit:catalog; unknown data must not be represented as zero.
3. For #125/#155/#157 manually check exact model/generation photos, offline cache, launcher icon/splash and single asset-generation step.
4. For #149/#165 smoke-check scrolling to save, active-tab restore, Back/Escape.
5. For #167/#168 test legacy garage migration and brand/model change without carrying previous vehicle parameters.
6. Verify Releases contain the promised APK asset; a debug artifact is not the same as a signed release APK.
7. After Wave 1, revisit strict required checks/up-to-date policy.

## Owners and next action

Owner for each PR: repository author (sadist57rus). Next action date: 2026-10-27, after owner review of this dry-run. No merge, close, or ruleset changes were performed.
