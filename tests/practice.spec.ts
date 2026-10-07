import { test, expect } from '@playwright/test';
import { LOCALES } from '../src/lib/i18n/locales';
import { slugForTopic, TOPICS } from '../src/lib/i18n/topics';

// The fixture section lives on each locale's Practice page, not on its home
// page (spec/locales/index.md, "The home page fixture contract").

test('the English practice page is /locales/en-001/practice/', () => {
  expect(slugForTopic('en-001', 'practice')).toBe('practice');
  expect(TOPICS.practice).toBeDefined();
});

for (const locale of LOCALES) {
  test.describe(locale, () => {
    test('the practice page has the fixtures', async ({ page }) => {
      await page.goto(`/locales/${locale}/${slugForTopic(locale, 'practice')}/`);
      await expect(page.locator('#id-example-1')).toBeVisible();
      await expect(page.locator('#select-example-1-id')).toBeVisible();
    });

    test('the home page no longer has the fixtures, and links to practice', async ({ page }) => {
      await page.goto(`/locales/${locale}/`);
      await expect(page.locator('#id-example-1')).toHaveCount(0);
      await expect(page.locator(`a[href="/locales/${locale}/${slugForTopic(locale, 'practice')}/"]`)).toHaveCount(1);
    });
  });
}
