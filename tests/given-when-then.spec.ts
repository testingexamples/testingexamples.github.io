import { test, expect } from '@playwright/test';
import { LOCALES } from '../src/lib/i18n/locales';
import { slugForTopic } from '../src/lib/i18n/topics';

// Eight code examples (two tools times four languages) under one section.
const SUMMARIES = [
  'Selenium + JavaScript',
  'Selenium + Python',
  'Selenium + Rust',
  'Selenium + C#',
  'Playwright + JavaScript',
  'Playwright + Python',
  'Playwright + Rust',
  'Playwright + C#'
];

for (const locale of LOCALES) {
  test(`${locale}: the Given-When-Then page has all eight examples in one section`, async ({ page }) => {
    await page.goto(`/locales/${locale}/${slugForTopic(locale, 'given-when-then')}/`);
    for (const summary of SUMMARIES) {
      await expect(page.locator('summary', { hasText: summary })).toHaveCount(1);
    }
    // One section holds them all: the eight <details> share one parent.
    const parents = await page.locator('details').evaluateAll((els) => new Set(els.map((e) => e.parentElement)).size);
    expect(parents).toBe(1);
    // The Rust and C# examples carry the Given/When/Then comments.
    await expect(page.locator('pre', { hasText: 'thirtyfour' }).first()).toContainText('// Then I see search results');
  });
}
