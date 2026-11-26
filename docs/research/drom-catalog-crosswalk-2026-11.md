# Drom → Nippon-Drive crosswalk review

Дата проверки: 2026-11-08  
Вход: ограниченная выгрузка Drom из GitHub Actions, 200 modification rows.  
Назначение: исследовательское сопоставление с уже существующими карточками; **не импорт**.

## Итог

| Решение | Строк |
|---|---:|
| Предварительный кандидат на существующий modelId | 13 |
| Неоднозначное сопоставление — не привязывать автоматически | 7 |
| Нет уверенного совпадения с существующей карточкой | 180 |
| Всего | 200 |

Статус candidate означает только предварительное совпадение семейства/кода по текущему индексу. Это не OEM-верификация модификации, двигателя, рынка, КПП или комплектации и не разрешение на импорт. В исходной матрице 13 candidate-строк, которые ниже раскрыты отдельно; ранее они были сгруппированы в 10 строк таблицы по семействам.

## Предварительные кандидаты — все 13 строк исходной матрицы

| Индекс CSV | Drom make/model и исполнение | Код кузова / шасси Drom | Существующий modelId | Статус и оговорка |
|---:|---|---|---|---|
| 21 | Mitsubishi Airtrek, 2.0 20E | LA-CU2W | `outlander-1` | CU2W входит в семейство CU; точное исполнение и рынок требуют OEM-проверки. [Drom](https://www.drom.ru/catalog/mitsubishi/airtrek/111763/) |
| 30 | Honda Acty Van, 660 SDX | EBD-HH5 | `honda-acty-hh5` | HH5 относится к Acty Van, не к Acty Truck. [Drom](https://www.drom.ru/catalog/honda/acty/184801/) |
| 43 | Daihatsu Be-go, 1.5 CL | CBA-J200G | `daihatsu-terios-j200-suv` | J200-family candidate; сверить точный кузов и рынок. Не заменять ID на общий `daihatsu-terios`. [Drom](https://www.drom.ru/catalog/daihatsu/be-go/160330/) |
| 46 | Isuzu Elf, 3.0 MT 4x2 Short 3.5т | NMR85E | `isuzu-elf-n-series` | Только кандидат на семейство Elf/N-Series; нужна заводская применимость по серии и году. [Drom](https://www.drom.ru/catalog/lcv/isuzu/elf/282329/) |
| 59 | Infiniti FX35, Drom grade 3.7 AT AWD Premium | S51 | `infiniti-fx-35-37` | S51 family candidate; обозначение FX35 и указанный Drom двигатель/grade требуют отдельной проверки. [Drom](https://www.drom.ru/catalog/infiniti/fx35/122968/) |
| 73 | Infiniti FX37, 3.7 AT AWD Sport | S51 | `infiniti-fx-35-37` | S51 family candidate; двигатель, grade и рынок сверить по первичным данным. [Drom](https://www.drom.ru/catalog/infiniti/fx37/103130/) |
| 91 | Mitsubishi Fuso Canter, 3.0 Single Cab 1.5t | 2TG-FBA00 | `fuso-canter` | Кандидат на семейство Canter; подтвердить серию FBA/FEA/FEB и рыночную спецификацию. [Drom](https://www.drom.ru/catalog/lcv/mitsubishi/canter/285406/) |
| 99 | Daihatsu Cast Activa, 660 G Turbo SAII | DBA-LA250S | `daihatsu-cast-la250` | LA250-family candidate; точное исполнение требует первичного каталога. [Drom](https://www.drom.ru/catalog/daihatsu/cast/152886/) |
| 138 | Suzuki Escudo, 2.4 XE 4WD | CBA-TDA4W | `suzuki-grand-vitara-jt-suv` | JT-family candidate; отдельно проверить рынок и тип кузова. [Drom](https://www.drom.ru/catalog/suzuki/escudo/125817/) |
| 155 | Daihatsu Copen Robe, 660 | DBA-LA400K | `daihatsu-copen-la400` | LA400K-family candidate; подтвердить год и grade. [Drom](https://www.drom.ru/catalog/daihatsu/copen/119794/) |
| 158 | Isuzu Elf, 3.0 SAT 4x2 Short 3.5т | NMR85E | `isuzu-elf-n-series` | Отдельная строка/трансмиссия в исходной выгрузке; та же оговорка по серии и году, что у строки 46. [Drom](https://www.drom.ru/catalog/lcv/isuzu/elf/282330/) |
| 167 | Toyota bB, 1.3 S | UA-NCP30 | `toyota-bb-ncp30` | NCP30-family candidate; не смешивать с QNC20 и другими кузовами. [Drom](https://www.drom.ru/catalog/toyota/bb/129052/) |
| 180 | Suzuki Grand Vitara, 2.4 AT SE Exclusive | JT | `suzuki-grand-vitara-jt-suv` | JT-family candidate; сверить точный кузов, рынок и комплектацию. [Drom](https://www.drom.ru/catalog/suzuki/grand_vitara/125846/) |

Итого: 13 исходных строк, 10 семейств/групп modelId. Повторяющиеся modelId не означают, что разные Drom-строки можно объединить в один вариант: в частности, две строки Elf различаются трансмиссией, а FX35/FX37 и Escudo/Grand Vitara требуют сохранения исходной идентичности и отдельной проверки.

## Неоднозначные — оставить без автоматической привязки

- **Isuzu D-Max RT85 (индексы 32 и 144 исходной CSV)**: две отдельные модификации Terra и Aqua; семейство D-Max найдено, но существующая запись `isuzu-dmax-rt50` указывает период 2012–2019, тогда как Drom-страница охватывает период до 2021. Нужна проверка перехода поколений/рынка. Не назначать generation-body record.
- **Daihatsu Hijet Cargo S321/S331**: код поколения похож на существующую карточку S321V/S331V, но Drom body code `HAD-S320V` не совпадает буквально. До расшифровки полного type code не привязывать.
- **Toyota Altezza XE10 / TA-GXE10**: нельзя привязывать к карточке `toyota-altezza-sxe10-rs200`; исходная строка относится к AS200/GXE10, а карточка — к SXE10 RS200.
- **Suzuki Alto CN11S**: старый кузов не совпадает с имеющимися HA24/HA25/HA36/HA37.
- **Suzuki Every DA51V**: не совпадает с карточками DA64 или DA17.
- **Daihatsu Hijet Truck S100/S110 (1994–1998)**: не совпадает с имеющейся карточкой S500P/S510P; остаётся неоднозначной строкой, а не подтверждённым совпадением.

## Не сопоставлять с текущими карточками

- **Honda Acty Truck GBD-HA6** нельзя смешивать с Acty Van HH5/HH6: это отдельные кузова и отдельные архивные линейки Honda.
- **Mazda Bongo / Bongo Friendee / Bongo Brawny**, Nissan Atlas, Isuzu Fargo/Midi: точной существующей карточки в рассмотренном индексе не найдено. Не подменять их Mazda MPV или другими похожими моделями.
- Прочие 180 строк остаются без уверенного совпадения; отсутствие совпадения в текущем индексе не означает, что модель не существует.

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
- `generationBodyRecordId` — отдельный индекс существующих записей `generationBodyCatalog.ts`, а не поле `VehicleVariant`.
- Не присваивать `verified` на основании Drom. Не заполнять неизвестный рынок.
- Не создавать новые modelId/generation IDs в рамках этого crosswalk.
- В каталог приложения эти 200 строк не импортировались.
