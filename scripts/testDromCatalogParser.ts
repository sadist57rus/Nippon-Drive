import assert from 'node:assert/strict';
import { parseComplectationHtml, parseSpecificationHtml } from './parseDromHtmlSamples.js';

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
