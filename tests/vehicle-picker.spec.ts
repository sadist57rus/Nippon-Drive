import { expect, test, type Page } from '@playwright/test';

async function openOnboardingPicker(page: Page) {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.addInitScript(() => {
    if (!sessionStorage.getItem('__picker_spec_initialized')) {
      localStorage.clear();
      sessionStorage.setItem('__picker_spec_initialized', 'yes');
    }
  });
  await page.goto('/');
  const orientationHeading = page.getByRole('heading', { name: /Выберите ориентацию экрана/i });
  if (await orientationHeading.isVisible().catch(() => false)) {
    await page.getByRole('button', { name: /Телефон/i }).click();
  }
  await expect(page.getByRole('heading', { name: /Добавим вашу машину/i })).toBeVisible();
  await page.getByTestId('onboarding-open-picker').click();
  await expect(page.getByTestId('vehicle-picker')).toBeVisible();
}

/** Марка → первая модель → первое поколение (если шаг есть) до экрана «Уточните модификацию». */
async function walkToModification(page: Page, brandId: string) {
  await page.getByTestId(`picker-brand-${brandId}`).click();
  const families = page.locator('[data-testid^="picker-family-"]');
  await expect(families.first()).toBeVisible();
  expect(await families.count(), 'на шаге модели не больше 8 карточек').toBeLessThanOrEqual(8);
  await families.first().click();
  const generations = page.locator('[data-testid^="picker-model-"]');
  if (await generations.count()) {
    expect(await generations.count(), 'на шаге поколения не больше 8 карточек').toBeLessThanOrEqual(8);
    await generations.first().click();
  }
  await expect(page.getByTestId('picker-next')).toBeVisible();
}

/** Нажимает «Не знаю» в каждой группе, выбирает год и сохраняет. */
async function completeAndSave(page: Page) {
  for (const group of ['engine', 'transmission', 'drivetrain']) {
    const unknown = page.getByTestId(`picker-${group}-unknown`);
    if (await unknown.count()) await unknown.click();
  }
  await page.getByTestId('picker-next').click();
  const yearInput = page.getByTestId('picker-year-input');
  if (await yearInput.count()) {
    await yearInput.fill('2010');
  } else {
    const band = page.locator('[data-testid^="picker-band-"]').first();
    if (await band.count()) await band.click();
    await page.locator('[data-testid^="picker-yearchip-"]').first().click();
  }
  await page.getByTestId('picker-save').click();
}

async function openBrandsHub(page: Page) {
  await page.getByTestId('phone-more-trigger').click();
  await page.getByTestId('more-nav-item-brands').click();
}

test('мастер проводит от марки до сохранения без длинных списков', async ({ page }) => {
  await openOnboardingPicker(page);
  await walkToModification(page, 'toyota');
  await completeAndSave(page);
  await expect(page.getByTestId('phone-bottom-navigation')).toBeVisible();
  await expect(page.locator('main')).toContainText('Toyota');
});

test('поиск понимает русский и английский и ведёт сразу к модификации', async ({ page }) => {
  await openOnboardingPicker(page);
  await page.getByTestId('picker-search-toggle').click();
  const input = page.getByTestId('picker-search-input');
  await expect(input).toBeFocused();

  await input.fill('тойота');
  await expect(page.getByTestId('picker-result-brand-toyota')).toBeVisible();

  const modelResults = page.locator('[data-testid^="picker-result-model-"]');
  await input.fill('outlander');
  await expect(modelResults.first()).toBeVisible();
  await input.fill('аутлендер');
  await expect(modelResults.first()).toBeVisible();

  await input.fill('zzzzqq');
  await expect(page.getByText(/Ничего не нашли/)).toBeVisible();

  await input.fill('outlander');
  await modelResults.first().click();
  await expect(page.getByTestId('picker-next')).toBeVisible();
});

test('просмотр справочника не меняет вашу машину, а «Это моя машина» добавляет новую', async ({ page }) => {
  await openOnboardingPicker(page);
  await walkToModification(page, 'toyota');
  await completeAndSave(page);
  await expect(page.getByTestId('phone-bottom-navigation')).toBeVisible();

  await openBrandsHub(page);
  await page.getByRole('button', { name: /Honda/i }).first().click();
  await expect(page.getByTestId('make-mine-bar')).toBeVisible();

  await page.getByTestId('phone-nav-item-overview').click();
  await expect(page.locator('main')).toContainText('Toyota');
  await expect(page.locator('main')).not.toContainText('Honda');

  await openBrandsHub(page);
  await expect(page.getByTestId('make-mine-bar')).toBeVisible();
  await page.getByTestId('make-mine-button').click();
  await expect(page.getByTestId('picker-next')).toBeVisible();
  await completeAndSave(page);

  await expect(page.getByTestId('phone-bottom-navigation')).toBeVisible();
  await expect(page.locator('main')).toContainText('Honda');
});
