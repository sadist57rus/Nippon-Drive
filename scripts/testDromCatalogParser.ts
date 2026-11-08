import assert from 'node:assert/strict';
import { parseComplectationHtml, parseSpecificationHtml, parseIndividualModificationHtml } from './parseDromHtmlSamples.js';

const html = `
<h2>Для Японии</h2>
<h3>рестайлинг, 12 поколение, 10.2022 - н.в., Универсал</h3>
<table class="drom-table complectation-table">
  <tr><th>Комплектация</th><th>Период выпуска</th><th>Цена</th><th>Марка двигателя</th><th>Марка кузова</th></tr>
  <tr><td colspan="5">1.8 л, 98 л.с., Бензин, Вариатор, Передний (FF), гибрид</td></tr>
  <tr><td>Touring 1.8 Hybrid G</td><td>05.2025 - 04.2026</td><td>2 762 100 йен</td><td>2ZR-FXE</td><td>6AA-ZWE219W</td></tr>
</table>
<h2>Россия</h2>
<h3>Трансмиссия Toyota Corolla 2018, седан, 12 поколение, E210</h3>
<table class="b-table-cmp">
  <tr><th>Модификации</th><th>Тип трансмиссии</th></tr>
  <tr><td>1.6 л, 122 л.с., бензин, передний привод</td><td>МКПП 6</td></tr>
</table>`;

const url = 'https://www.drom.ru/catalog/toyota/corolla/2026/';
const parsed = parseComplectationHtml(html, url);
assert.equal(parsed.length, 1);
assert.equal(parsed[0].market, 'Япония');
assert.equal(parsed[0].generationNumber, 12);
assert.equal(parsed[0].generationProductionFrom, '2022-10');
assert.equal(parsed[0].bodyStyle, 'Универсал');
assert.equal(parsed[0].trimOrGrade, 'Touring 1.8 Hybrid G');
assert.equal(parsed[0].productionMonthFrom, '2025-05');
assert.equal(parsed[0].productionMonthTo, '2026-04');
assert.equal(parsed[0].engineCode, '2ZR-FXE');
assert.equal(parsed[0].bodyCode, '6AA-ZWE219W');
assert.equal(parsed[0].displacementCc, 1800);
assert.equal(parsed[0].powerHp, 98);
assert.equal(parsed[0].transmissionType, 'CVT');
assert.equal(parsed[0].drivetrain, 'FWD');
assert.equal(parsed[0].hybrid, true);
assert.equal(parsed[0].verificationStatus, 'partially-verified');

const specs = parseSpecificationHtml(html, url);
assert.equal(specs.length, 1);
assert.equal(specs[0].market, 'Россия');
assert.equal(specs[0].specificationName, 'Тип трансмиссии');
assert.equal(specs[0].value, 'МКПП 6');
assert.equal(specs[0].modificationLabel, '1.6 л, 122 л.с., бензин, передний привод');
console.log('Drom parser fixtures: OK');

const individualHtml = `
<h1>Mazda Autozam Clef 2.0 (05.1992 - 03.1994) - технические характеристики</h1>
<a href="/catalog/mazda/autozam_clef/g_1992_211/">1992, седан, 1 поколение, GE 05.1992 - 03.1994</a>
<table class="b-table b-table_mobile-size-s">
<tr><td>Основные параметры</td></tr>
<tr><td>Название комплектации</td><td>2.0</td></tr>
<tr><td>Период выпуска</td><td>1992 - 1994</td></tr>
<tr><td>Тип привода</td><td>Передний</td></tr>
<tr><td>Тип кузова</td><td>Седан</td></tr>
<tr><td>Тип трансмиссии</td><td>АКПП 4</td></tr>
<tr><td>Объем двигателя, куб.см</td><td>1995</td></tr>
<tr><td>Марка кузова</td><td>E-GEEPA</td></tr>
<tr><td>Страна сборки</td><td>Япония</td></tr>
<tr><td>Марка двигателя</td><td>KF-ZE</td></tr>
<tr><td>Максимальная мощность, л.с. (кВт) при об./мин.</td><td>160 (118) / 6500</td></tr>
<tr><td>Максимальный крутящий момент, Н*м (кг*м) при об./мин.</td><td>180 (18) / 5500</td></tr>
<tr><td>Объем топливного бака, л</td><td>60</td></tr>
</table>`;
const individual = parseIndividualModificationHtml(individualHtml, 'https://www.drom.ru/catalog/mazda/autozam_clef/6338/');
assert.ok(individual);
assert.equal(individual.variant.makeSlug, 'mazda');
assert.equal(individual.variant.modelSlug, 'autozam_clef');
assert.equal(individual.variant.generationNumber, 1);
assert.equal(individual.variant.generationCode, 'GE');
assert.equal(individual.variant.generationPath, '/catalog/mazda/autozam_clef/g_1992_211/');
assert.equal(individual.variant.modelYearFrom, 1992);
assert.equal(individual.variant.modelYearTo, 1994);
assert.equal(individual.variant.bodyCode, 'E-GEEPA');
assert.equal(individual.variant.engineCode, 'KF-ZE');
assert.equal(individual.variant.displacementCc, 1995);
assert.equal(individual.variant.powerHp, 160);
assert.equal(individual.variant.torqueNm, 180);
assert.equal(individual.variant.transmissionType, 'AT');
assert.equal(individual.variant.drivetrain, 'FWD');
assert.equal(individual.variant.assemblyCountry, 'Япония');
assert.equal(individual.specificationRows.length, 12);
console.log('Drom individual modification fixture: OK');
