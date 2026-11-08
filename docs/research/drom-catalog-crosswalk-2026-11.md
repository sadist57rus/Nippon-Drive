# Drom → Nippon-Drive crosswalk review

Дата проверки: 2026-11-08  
Вход: ограниченная выгрузка Drom из GitHub Actions, 200 modification rows.  
Назначение: исследовательское сопоставление с уже существующими карточками; **не импорт**.

## Итог

| Решение | Строк |
|---|---:|
| Предварительный кандидат на существующий modelId | 13 |
| Неоднозначное сопоставление — не привязывать автоматически | 3 |
| Нет уверенного совпадения с существующей карточкой | 184 |
| Всего | 200 |

Статус candidate означает только совпадение семейства/кода по текущим данным. Он не означает OEM-верификацию всех параметров, рынка, двигателя, КПП или комплектации.

## Предварительные кандидаты

| Drom make/model | Код из Drom | Существующий modelId | Комментарий |
|---|---|---|---|
| Mitsubishi Airtrek | CU2W | `outlander-1` | Совпадает с `mitsubishi-outlander-cu` (CU2W/CU4W/CU5W/CU0W); OEM-подтверждение конкретного исполнения ещё требуется |
| Honda Acty | HH5 | `honda-acty-hh5` | Это Acty Van, не Acty Truck; Honda archive отдельно перечисляет Van и Truck |
| Daihatsu Be-go | CBA-J200G | `daihatsu-terios` | В карточке явно указано Terios / Be-go (J200); официальный каталог Daihatsu подтверждает CBA-J200G |
| Isuzu Elf | NMR85E | `isuzu-elf-n-series` | Кандидат на семейство Elf/N-Series; нужна заводская таблица применимости по серии/году |
| Infiniti FX35 / FX37 | S51 | `infiniti-fx-35-37` | Совпадает с `infiniti-fx-s51`; двигатель, grade и рынок сверить отдельно |
| Mitsubishi Canter | FBA00 | `fuso-canter` | Семейство совпадает; подтвердить серию FBA/FEA/FEB и рыночную спецификацию |
| Daihatsu Cast | LA250S | `daihatsu-cast-la250` | Код соответствует карточке LA250; требуется первичный каталог для конкретной модификации |
| Suzuki Escudo / Grand Vitara | TDA4W / JT | `suzuki-grand-vitara-jt-suv` | Совпадает семейство JT; рынок и тип кузова проверить отдельно |
| Daihatsu Copen | LA400K | `daihatsu-copen-la400` | Код соответствует карточке LA400; подтвердить год и grade |
| Toyota bB | NCP30 | `toyota-bb-ncp30` | Код NCP30 подтверждён записью Toyota; не объединять с QNC20 |

## Неоднозначные — оставить без автоматической привязки

- **Isuzu D-Max RT85**: семейство D-Max найдено, но существующая запись `isuzu-dmax-rt50` указывает период 2012–2019, тогда как Drom-страница охватывает период до 2021. Нужна проверка перехода поколений/рынка. Не назначать generation-body record.
- **Daihatsu Hijet Cargo S321/S331**: код поколения похож на существующую карточку S321V/S331V, но Drom body code `HAD-S320V` не совпадает буквально. До расшифровки полного type code не привязывать.
- Две строки D-Max в выгрузке остаются отдельными строками исходного набора; это не основание создавать дубликаты вариантов.

## Не сопоставлять с текущими карточками

- **Hijet Truck S100/S110 (1994–1998)** не совпадает с имеющейся карточкой Hijet Truck S500P/S510P.
- **Suzuki Alto CN11S (1988–1990)** старше имеющихся карточек HA24/HA25/HA36/HA37.
- **Suzuki Every DA51V (1990–1991)** не совпадает с карточками DA64 или DA17.
- **Toyota Altezza XE10 / TA-GXE10** нельзя привязывать к карточке `toyota-altezza-sxe10-rs200`: последняя специфична для SXE10 RS200.
- Honda Acty Van HH5 нельзя смешивать с Acty Truck: это отдельные кузова и отдельные архивные линейки Honda.

## Первичные источники, использованные для контроля различий

- Honda Acty Van — официальный архив Honda: https://www.honda.co.jp/auto-archive/actyvan/
- Honda Acty Truck — отдельный официальный архив Honda: https://www.honda.co.jp/auto-archive/actytruck/
- Honda recycle/type table — HH5/HH6 для Acty Van: https://www.honda.co.jp/auto-recycle/tariff/acty_van_street.html
- Daihatsu Be-go — официальный каталог с CBA-J200G: https://aws.u-catch.daihatsu.co.jp/catalog/BEGO/MODEL__200601/
- Toyota bB — официальная таблица Toyota с кодами NCP30/NCP31/NCP35 и QNC20/QNC21/QNC25: https://toyota.jp/recall/campaign/120517.html
- Daihatsu Hijet Truck — официальное руководство, где S500P/S510P — более поздняя серия: https://www.daihatsu.co.jp/service/torisetu/truck/pdf/hijet_truck_full_2603.pdf

Официальный источник, подтверждающий точную модификацию, двигатель, рынок и применимость, ещё не найден для каждого кандидата. Drom остаётся вторичным источником. Страна сборки не используется как рынок продажи.

## Ограничения схемы и импорта

- В `VehicleVariant` нет поля `generationId`; его не создавать и не выдумывать.
- `generationBodyRecordId` — это отдельный индекс существующих записей `generationBodyCatalog.ts`, а не поле `VehicleVariant`.
- Не присваивать `verified` на основании Drom. Не заполнять неизвестный рынок.
- Не создавать новые modelId/generation IDs в рамках этого crosswalk.
- В каталог приложения эти 200 строк не импортировались.
