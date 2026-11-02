import { expect, test, type Page } from '@playwright/test';

const viewports = [
  { width: 360, height: 800, name: 'phone-360x800' },
  { width: 390, height: 844, name: 'phone-390x844' },
  { width: 800, height: 480, name: 'tablet-800x480' },
  { width: 1280, height: 720, name: 'head-unit-1280x720' },
  { width: 1024, height: 600, name: 'head-unit-1024x600' },
];

async function openGarage(page: Page) {
  const phoneNav = page.getByTestId('phone-bottom-navigation');
  if (await phoneNav.isVisible().catch(() => false)) {
    await page.getByTestId('phone-nav-item-garage').click();
  } else {
    await page.getByTestId('wide-nav-item-garage').click();
  }
}

test('подпись фото и действия гаража не перекрываются на разных экранах и при масштабе 150%', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.addInitScript(() => {
    localStorage.clear();
    sessionStorage.clear();
  });
  await page.goto('/');
  const orientation = page.getByRole('heading', { name: /Выберите ориентацию экрана/i });
  if (await orientation.isVisible().catch(() => false)) {
    await page.getByRole('button', { name: /Телефон/i }).click();
  }
  const setup = page.getByRole('heading', { name: /Добавим вашу машину/i });
  if (await setup.isVisible().catch(() => false)) {
    await page.locator('select').first().selectOption({ value: 'mitsubishi' });
    await page.getByRole('button', { name: /Сохранить автомобиль и открыть приложение/i }).click();
  }
  await expect(page.getByRole('heading', { name: 'Главная', exact: true })).toBeVisible();
  await openGarage(page);
  await expect(page.getByRole('heading', { name: 'Гараж' })).toBeVisible();

  const article = page.locator('article').filter({ has: page.getByRole('button', { name: 'Сделать активной' }) }).first();
  await expect(article.locator('figure img')).toBeVisible();
  await expect(article.locator('figcaption')).toContainText('Wikimedia Commons');
  await expect(article.locator('figcaption')).toContainText('CC BY-SA');
  await expect(article.locator('figcaption a')).toHaveText('Источник фото');

  for (const viewport of viewports) {
    for (const scale of [1, 1.5]) {
      await page.setViewportSize({ width: viewport.width, height: viewport.height });
      await page.evaluate(({ scale, width }) => {\n        document.documentElement.style.fontSize = scale + '%';\n        document.documentElement.dataset.uiMode = width >= 800 ? 'wide' : 'phone';\n      }, { scale: scale * 100, width: viewport.width });
      await expect.poll(() => page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);

      const geometry = await article.evaluate(element => {
        const image = element.querySelector('figure img');
        const caption = element.querySelector('figcaption');
        const buttons = [...element.querySelectorAll<HTMLButtonElement>('button')].filter(button =>
          ['Сделать активной', 'Изменить', 'Удалить'].includes((button.textContent || '').trim()),
        );
        const rect = (node: Element) => {
          const box = node.getBoundingClientRect();
          return { top: box.top, bottom: box.bottom, width: box.width, height: box.height };
        };
        return {
          image: image ? rect(image) : null,
          caption: caption ? rect(caption) : null,
          buttons: buttons.map(rect),
        };
      });

      expect(geometry.image, viewport.name + ': photo exists').not.toBeNull();
      expect(geometry.caption, viewport.name + ': credit exists').not.toBeNull();
      expect(geometry.buttons, viewport.name + ': all action buttons exist').toHaveLength(3);
      expect(geometry.image!.bottom).toBeLessThanOrEqual(geometry.caption!.top + 1);
      expect(geometry.caption!.bottom).toBeLessThanOrEqual(Math.min(...geometry.buttons.map(button => button.top)) + 1);
      for (const button of geometry.buttons) {
        expect(button.height, viewport.name + ': action height').toBeGreaterThanOrEqual(56);
        expect(button.width, viewport.name + ': action width').toBeGreaterThanOrEqual(56);
      }

      await page.screenshot({
        path: 'test-results/garage-photo-layout-' + viewport.name + (scale === 1.5 ? '-font-150' : '') + '.png',
        fullPage: true,
      });
    }
  }
});
