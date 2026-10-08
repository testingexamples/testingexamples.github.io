import { test, expect } from '@playwright/test';
import { LOCALES } from '../src/lib/i18n/locales';
import { slugForTopic } from '../src/lib/i18n/topics';

// The ten source-code examples live on each locale's home page (see
// tests/home-examples.spec.ts), not on this page.

for (const locale of LOCALES) {
  test(`${locale}: the Given-When-Then page has the Gherkin scenario and no source-code examples`, async ({ page }) => {
    await page.goto(`/${locale}/${slugForTopic(locale, 'given-when-then')}/`);
    await expect(page.locator('main pre', { hasText: 'Given I am on https://google.com' })).toHaveCount(1);
    await expect(page.locator('details')).toHaveCount(0);
  });
}
