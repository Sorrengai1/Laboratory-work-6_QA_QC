const { test, expect } = require('@playwright/test');

// Пропускаємо тести Розетки в CI, оскільки сайт блокує хмарні IP
test.skip(!!process.env.CI, 'Розетка блокує запити з GitHub Actions');

test('Перевірка завантаження головної сторінки Розетки', async ({ page }) => {
  const response = await page.goto('https://rozetka.com.ua/');
  expect(response.status()).toBe(200);
  await expect(page).toHaveTitle(/ROZETKA/i);
});

test('Перевірка наявності поля пошуку', async ({ page }) => {
  await page.goto('https://rozetka.com.ua/');
  const searchInput = page.locator('input[name="search"]');
  await expect(searchInput).toBeVisible();
});

test('Перевірка наявності каталогу товарів', async ({ page }) => {
  await page.goto('https://rozetka.com.ua/');
  const catalogButton = page.locator('button:has-text("Каталог")').or(page.locator('a:has-text("Каталог")'));
  await expect(catalogButton.first()).toBeVisible();
});
