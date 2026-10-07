import { test, expect } from '@playwright/test';

// The site root `/` redirects visitors to the locale matching their browser
// language, but never a browser under automation (navigator.webdriver is true
// there, and the sibling repos depend on `/`). Playwright sets webdriver to
// true, so the redirecting cases switch it off to behave like a person.

const asPerson = () =>
  Object.defineProperty(Navigator.prototype, 'webdriver', { get: () => false });

test.describe('language redirect on /', () => {
  test.describe('a person', () => {
    test.beforeEach(async ({ page }) => {
      await page.addInitScript(asPerson);
    });

    test.describe('with cy-GB', () => {
      test.use({ locale: 'cy-GB' });
      test('is sent to /cy-gb/', async ({ page }) => {
        await page.goto('/');
        await expect(page).toHaveURL(/\/cy-gb\/$/);
      });
    });

    test.describe('with fr-CA (no exact locale)', () => {
      test.use({ locale: 'fr-CA' });
      test('falls back to the French locale', async ({ page }) => {
        await page.goto('/');
        await expect(page).toHaveURL(/\/fr-001\/$/);
      });
    });

    test.describe('with en-US', () => {
      test.use({ locale: 'en-US' });
      test('is sent to /en-us/', async ({ page }) => {
        await page.goto('/');
        await expect(page).toHaveURL(/\/en-us\/$/);
      });
    });

    test.describe('with a language the site does not have', () => {
      test.use({ locale: 'de-DE' });
      test('stays on /', async ({ page }) => {
        await page.goto('/');
        await page.waitForTimeout(500);
        expect(new URL(page.url()).pathname).toBe('/');
      });
    });
  });

  test.describe('a browser under automation', () => {
    test.use({ locale: 'cy-GB' });
    test('stays on / so the fixture contract holds', async ({ page }) => {
      await page.goto('/');
      await page.waitForTimeout(500);
      expect(new URL(page.url()).pathname).toBe('/');
      await expect(page.locator('#id-example-1')).toBeVisible();
    });
  });
});
