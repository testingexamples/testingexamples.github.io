import { test, expect } from '@playwright/test';
import { LOCALES } from '../src/lib/i18n/locales';

// Sixteen code examples (two tools times eight languages) under one section of
// each locale's home page. They were moved here from the Given-When-Then page.
const SUMMARIES = [
  'Selenium + JavaScript',
  'Selenium + Python',
  'Selenium + Rust',
  'Selenium + C#',
  'Selenium + Java',
  'Selenium + Elixir',
  'Selenium + Go',
  'Selenium + Kotlin',
  'Playwright + JavaScript',
  'Playwright + Python',
  'Playwright + Rust',
  'Playwright + C#',
  'Playwright + Java',
  'Playwright + Elixir',
  'Playwright + Go',
  'Playwright + Kotlin'
];

for (const locale of LOCALES) {
  test(`${locale}: the home page has all sixteen source-code examples in one section`, async ({ page }) => {
    await page.goto(`/${locale}/`);
    for (const summary of SUMMARIES) {
      // Match the whole summary text: 'Selenium + Java' is a prefix of 'Selenium + JavaScript'.
      const exact = new RegExp(`^\\s*${summary.replace(/[+#]/g, '\\$&')}\\s*$`);
      await expect(page.locator('summary', { hasText: exact })).toHaveCount(1);
    }
    // One section holds them all: the sixteen <details> share one parent.
    const parents = await page.locator('details').evaluateAll((els) => new Set(els.map((e) => e.parentElement)).size);
    expect(parents).toBe(1);
    // The Rust and C# examples carry the Given/When/Then comments.
    await expect(page.locator('pre', { hasText: 'thirtyfour' }).first()).toContainText('// Then I see search results');
  });
}
