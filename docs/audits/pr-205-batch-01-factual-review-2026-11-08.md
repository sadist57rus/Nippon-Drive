# PR #205 — фактическая сверка партии 1–50 из 513

Дата: 2026-11-08  
Ветка: `data/drom-technical-specs-t31-cu5w-01`  
Проверенный диапазон: первые 50 записей `src/data/packs/drom-verified-batch-01.json`  
Метод: сопоставление записей с официальными материалами производителя/дистрибьютора. Вторичные каталоги используются только как навигация и не считаются достаточным основанием для статуса `verified`.

## Объём

- Проверено записей: **50 из 513**.
- Моделей приложения: **10**.
- Все 50 записей имеют статус `partially-verified`; все исходные ссылки в этой партии относятся к Drom (`secondary-reference`).
- Данные JSON не изменялись. Этот документ фиксирует результаты и блокирующие несоответствия; неподтверждённые поля не заполнялись.

## Результаты по моделям

| modelId | Записей | Результат сверки |
|---|---:|---|
| `outlander-1` | 1 | Mitsubishi workshop manual подтверждает CU5W, двигатель 4G69 и объём 2 378 см³; часть габаритов/массы/трансмиссий также есть в руководстве. Рынок конкретной комплектации по использованному источнику не установлен. Мощность/момент и конкретный XLS FWD требуют отдельного первичного подтверждения. |
| `nissan-xtrail-t31` | 28 | Nissan FAQ подтверждает поколение T31 (08.2007–02.2015), варианты двигателей MR20DE/M9R/QR25DE и применяемость ряда шин/дисков по годам и комплектациям. Но таблица не подтверждает автоматически каждую из 28 строк: требуется сопоставление каждой комплектации и привода с конкретным столбцом OEM-матрицы. Не переносить один размер колёс на все варианты. |
| `toyota-rav4-3` | 3 | Toyota archive подтверждает для японского RAV4 ACA31W 2AZ-FE 2 362 см³, 170 PS и 4WD. Две строки с ZSA30/3ZR-FAE (2010–2013) этим источником не подтверждены. Для них рынок и исходный тип мощности (PS или hp) не установлены; требуется отдельная OEM-спецификация нужного рынка/года. |
| `toyota-camry-40` | 1 | Toyota archive для ACV40 подтверждает 2AZ-FE 2 362 см³ и 167 PS. В записи указано 158 hp. Это не совпадает при простом переводе единиц; вероятно, смешаны рыночные спецификации/калибровки. Строка содержит неопределённый рынок («Япония/США — сборка»), который не является рынком продаж. Не менять значение до определения рынка и точной версии. |
| `subaru-forester-sg-sh` | 3 | Официальный каталог Subaru подтверждает SH5 и варианты 2.0 X (148 PS/191 Н·м) и 2.0 XT (230 PS/319 Н·м), а также годы/массу по отдельным версиям. В каталоге в поле двигателя указан EJ20, поэтому точные суффиксы EJ204/EJ205 из записей этим источником отдельно не подтверждены. Нужна привязка к точному рынку и трансмиссии каждой версии. |
| `honda-cr-v-3` | 1 | **Блокирующее противоречие.** Honda Japan Fact Book для кузовов RE3/RE4 указывает двигатель K24A и 5AT; запись содержит K24Z1 и неустановленный рынок. K24Z1 встречается в североамериканской спецификации CR-V, но текущая запись не содержит достаточной идентификации рынка/подтипа. Не исправлять автоматически: установить рынок и полный код кузова/версии. |
| `mazda-cx5-ke-kf` | 4 | Mazda Newsroom для японского CX-5 2012 подтверждает PE-VPS 2.0 (155 PS) и SH-VPTS 2.2D (175 PS/420 Н·м), а также соответствующие варианты трансмиссий/привода. В пакете встречаются 150 hp для PE-VPS и обозначения SHY1/SHY4 вместо SH-VPTS. Это требует уточнения рынка, кода двигателя и единиц мощности; источник 2012 года не подтверждает автоматически комплектации 2015–2017. |
| `suzuki-grand-vitara-2` | 2 | Suzuki archive подтверждает двигатель J24B 2 393 см³ на Escudo третьего поколения с 06.2008. Для 5-дверной японской версии официальный каталог указывает CBA-TDA4W, а не `TD_4`. Код `TAA4V` у 3-дверной строки не подтверждён; нельзя переносить на неё 5-дверные данные J24B без документа для конкретного рынка/кузова. |
| `lexus-rx-350` | 1 | Toyota archive подтверждает GGL15W AWD, 2GR-FE 3 456 см³, 280 PS и основные габариты. В JSON мощность записана как 280 hp; момент 348 Н·м не подтверждён открытым первичным источником в этой проверке. Нужны единицы и источник для момента. |
| `suzuki-swift-323` | 6 | Suzuki Digital Library подтверждает DBA-ZC72S, K12B 1 242 см³ и 91 PS. Но это не подтверждает автоматически все шесть grade/year ranges и CVT; каждую строку нужно привязать к соответствующей таблице модели/грейда. В поле `powerHp` единица PS/hp требует нормализации без подмены исходного значения. |

## Приоритетные исправления до импорта

1. **Honda CR-V RE / K24Z1:** приостановить строку до определения рынка. Японская OEM-спецификация указывает K24A для RE3/RE4; текущая запись смешивает признаки разных рынков.
2. **Suzuki Grand Vitara:** проверить `TAA4V` и `TD_4`; второй код не является полным кодом кузова, первый пока не подтверждён. Не объединять 3- и 5-дверные версии.
3. **Toyota Camry ACV40:** развести рынок продаж и страну сборки; сверить 158 hp с OEM-значением 167 PS для японского ACV40.
4. **Toyota RAV4 ZSA30 / 3ZR-FAE:** найти OEM-спецификацию для точного рынка и модельного года; текущий источник Toyota покрывает ACA31W/2AZ-FE, а не эти две строки.
5. **Mazda CX-5 KE:** уточнить коды SHY1/SHY4 против SH-VPTS и разницу 150/155 для PE-VPS с учётом рынка и единиц.
6. **Nissan X-Trail T31:** провести табличную сверку всех 28 строк с Nissan FAQ/каталогом по году, двигателю, приводу, grade, шинам и дискам.
7. Для остальных записей сохранить `partially-verified`, пока первичный источник не подтверждает конкретную комбинацию кузова, двигателя, рынка и комплектации.

## Использованные первичные/официальные источники

- Mitsubishi workshop manual, Outlander CU2W/CU5W: https://faq.out-club.ru/download/outlander/maintenance/Workshop_Manual_Nov2006/WM/GR00005400-00.pdf
- Nissan FAQ, X-Trail T31 — шины/диски и таблицы по двигателю/приводу: https://faq2.nissan.co.jp/faq/show/24783
- Toyota Global, RAV4 ACA31W/ACA36W: https://www.toyota-global.com/company/history_of_toyota/75years/vehicle_lineage/car/id60012608/index.html
- Toyota Global, Camry ACV40/ACV45: https://www.toyota-global.com/company/history_of_toyota/75years/vehicle_lineage/car/id60002185/index.html
- Subaru official catalog, Forester SH5 2.0 X / XT: https://ucar.subaru.jp/php/catalog/grade.php?cat_id=10053551 ; https://ucar.subaru.jp/php/catalog/grade.php?cat_id=10065707
- Honda Fact Book, CR-V RE3/RE4: https://www.honda.co.jp/factbook/auto/CR-V/200610/19.html
- Honda official 2009 archive specifications: https://www.honda.co.jp/auto-archive/cr-v/2009/grade-data/spec.pdf
- Mazda Newsroom, CX-5 launch specifications: https://newsroom.mazda.com/en/publicity/release/2012/201202/120216a.html
- Suzuki Digital Library, J24B and Escudo engine fitment: https://www.suzuki.co.jp/suzuki_digital_library/7_engine/4-j.html
- Suzuki official digital archive, Swift ZC72S: https://www.suzuki.co.jp/suzuki_digital_library/1_auto/swift.html
- Suzuki official 2009 environmental report, Escudo CBA-TDA4W/J24B: https://www.globalsuzuki.com/corporate/environmental/report/pdf/2009_enve_all.pdf
- Toyota Global, Lexus RX350 GGL15W: https://www.toyota-global.com/company/history_of_toyota/75years/vehicle_lineage/car/id60000818A/index.html

## Ограничения

Это фактическая сверка первой партии, а не подтверждение всех 50 строк. Часть официальных материалов подтверждает модель/двигатель или отдельную комплектацию, но не каждую строку пакета. Там, где рынок, код кузова, единицы мощности или применяемость не доказаны, запись остаётся частично подтверждённой. Ни один параметр не был автоматически заменён на основании близкой версии.

## Перечень 50 записей партии

### outlander-1 — 1 записей
- 1. `mitsubishi-outlander-cu5w-24-at-xls-fwd-2002-2006`

### nissan-xtrail-t31 — 28 записей
- 2. `nissan-xtrail-t31-mr20de-cvt-se-4wd-2007-2011`
- 12. `nissan-xtrail-t31-mr20de-cvt-le-high-4wd-2012-2015`
- 25. `nissan-xtrail-t31-mr20de-mt-se-4wd-2007-2011`
- 26. `nissan-xtrail-t31-mr20de-cvt-le-4wd-2007-2011`
- 27. `nissan-xtrail-t31-m9r-mt-se-4wd-2007-2011`
- 28. `nissan-xtrail-t31-m9r-at-se-4wd-2007-2011`
- 29. `nissan-xtrail-t31-m9r-at-le-4wd-2007-2011`
- 30. `nissan-xtrail-t31-qr25de-mt-se-4wd-2007-2011`
- 31. `nissan-xtrail-t31-qr25de-cvt-se-4wd-2007-2011`
- 32. `nissan-xtrail-t31-qr25de-cvt-siv-4wd-2007-2011`
- 33. `nissan-xtrail-t31-qr25de-cvt-le-4wd-2007-2011`
- 34. `nissan-xtrail-t31-facelift-mr20de-mt-xe-2010-2012`
- 35. `nissan-xtrail-t31-facelift-mr20de-mt-se-2010-2012`
- 36. `nissan-xtrail-t31-facelift-mr20de-mt-xe-2012-2015`
- 37. `nissan-xtrail-t31-facelift-mr20de-mt-se-mid-2012-2015`
- 38. `nissan-xtrail-t31-facelift-mr20de-mt-se-base-2014-2015`
- 39. `nissan-xtrail-t31-facelift-mr20de-cvt-xe-2010-2012`
- 40. `nissan-xtrail-t31-facelift-mr20de-cvt-se-2010-2012`
- 41. `nissan-xtrail-t31-facelift-mr20de-cvt-le-2010-2012`
- 42. `nissan-xtrail-t31-facelift-mr20de-cvt-xe-2012-2015`
- 43. `nissan-xtrail-t31-facelift-mr20de-cvt-se-mid-2012-2015`
- 44. `nissan-xtrail-t31-facelift-mr20de-cvt-le-base-2012-2015`
- 45. `nissan-xtrail-t31-facelift-mr20de-cvt-le-high-2012-2015`
- 46. `nissan-xtrail-t31-facelift-m9r-mt-se-2010-2012`
- 47. `nissan-xtrail-t31-facelift-m9r-at-se-2010-2012`
- 48. `nissan-xtrail-t31-facelift-m9r-at-le-2010-2012`
- 49. `nissan-xtrail-t31-facelift-m9r-at-se-mid-2012-2015`
- 50. `nissan-xtrail-t31-facelift-qr25de-cvt-se-base-2012-2015`

### toyota-rav4-3 — 3 записей
- 3. `toyota-rav4-xa30-2azfe-24-at-sol-4wd-2006-2008`
- 10. `toyota-rav4-xa30-zsa30-3zrfae-20-cvt-4wd-2010-2011`
- 11. `toyota-rav4-xa30-zsa30-3zrfae-20-cvt-4wd-2011-2013`

### toyota-camry-40 — 1 записей
- 4. `toyota-camry-xv40-2azfe-24-at-se-fwd-2006-2008`

### subaru-forester-sg-sh — 3 записей
- 5. `subaru-forester-sh5-ej205-20-xt-4wd-5mt-2010-2012`
- 16. `subaru-forester-sh5-ej204-20-x-4wd-5mt-2009-2010`
- 17. `subaru-forester-sh5-ej204-20-xs-4wd-4at-2009-2010`

### honda-cr-v-3 — 1 записей
- 6. `honda-crv-re-24-at-4wd-2007-2009`

### mazda-cx5-ke-kf — 4 записей
- 7. `mazda-cx5-ke-pevps-20-mt-sport-fwd-2012-2015`
- 8. `mazda-cx5-ke-pevps-20-at-drive-fwd-2014-2015`
- 9. `mazda-cx5-ke-shy1-22d-mt-sports-line-4wd-2015-2017`
- 15. `mazda-cx5-ke-shy1-22d-at-sports-line-4wd-2015-2017`

### suzuki-grand-vitara-2 — 2 записей
- 13. `suzuki-grand-vitara-jt-j24b-24-at-3door-4wd-2008-2012`
- 14. `suzuki-grand-vitara-jt-j24b-24-at-5door-4wd-2008-2012`

### lexus-rx-350 — 1 записей
- 18. `lexus-rx-al10-2grfe-35-at-4wd-rhd-2009-2012`

### suzuki-swift-323 — 6 записей
- 19. `suzuki-swift-zc72s-k12b-12-cvt-xl-2010-2013`
- 20. `suzuki-swift-zc72s-k12b-12-cvt-style-2014-2016`
- 21. `suzuki-swift-zc72s-k12b-12-cvt-xs-dje-2013-2016`
- 22. `suzuki-swift-zc72s-k12b-12-cvt-xg-dje-2013-2016`
- 23. `suzuki-swift-zc72s-k12b-12-cvt-style-dje-2014-2016`
- 24. `suzuki-swift-zc72s-k12b-12-cvt-xg-2013-2016`
