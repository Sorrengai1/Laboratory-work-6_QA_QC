const { test, expect } = require('@playwright/test');

// Тест 1: Порівняння скріншота всієї сторінки
test('Перевірка змін сторінки за скріншотом', async ({ page }) => {
  await page.goto('http://localhost:3000');
  expect(await page.screenshot()).toMatchSnapshot('screenshots/local-page/index-page.png');
});

// Тест 2: Порівняння скріншота окремого елемента (заголовка h1)
test('Порівняння скріншота елемента', async ({ page }) => {
  await page.goto('http://localhost:3000');
  const element = page.locator('h1');
  expect(await element.screenshot()).toMatchSnapshot('screenshots/local-page/index-page-element-h1.png');
});
// Тести для сторінки about.html
test('Перевірка сторінки "Про нас" за скріншотом', async ({ page }) => {
  await page.goto('http://localhost:3000/about.html');
  expect(await page.screenshot()).toMatchSnapshot('screenshots/about-page/about-page.png');
});

test('Порівняння скріншота елемента h1 на сторінці "Про нас"', async ({ page }) => {
  await page.goto('http://localhost:3000/about.html');
  const element = page.locator('h1');
  expect(await element.screenshot()).toMatchSnapshot('screenshots/about-page/about-page-element-h1.png');
});
