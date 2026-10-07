import { test, expect } from '@playwright/test';
import { LOCALES, isLocale } from '../src/lib/i18n/locales';

// Every locale code is <language>-<region> in lowercase (spec/index.md,
// "Locale directory names"); `en-gb-oxendict` is the one with a variant subtag.
const FORM = /^[a-z]{2}-([a-z]{2}|\d{3})(-[a-z]+)?$/;

test.describe('locale codes', () => {
  for (const locale of LOCALES) {
    test(`${locale} is <language>-<region>`, () => {
      expect(locale).toMatch(FORM);
    });
  }

  test('a bare language is not a locale', () => {
    for (const bare of ['en', 'cy', 'zh', 'ar', 'ko', 'fr']) {
      expect(isLocale(bare)).toBe(false);
    }
  });

  test('a bare-language route 404s', async ({ request }) => {
    const response = await request.get('/en/', { failOnStatusCode: false });
    expect(response.status()).toBe(404);
  });

  test('the old /locales/ prefix is gone', async ({ request }) => {
    const response = await request.get('/locales/en-001/', { failOnStatusCode: false });
    expect(response.status()).toBe(404);
  });
});
