const { test, expect } = require('@playwright/test');

test('Перевірка сторінки "Про нас"', async ({ page }) => {
  await page.goto('http://localhost:3000/about.html');
  await expect(page).toHaveTitle(/Про нас/);
  await expect(page.locator('h1')).toHaveText('Про нашу компанію');
});