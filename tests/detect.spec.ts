import { test, expect } from '@playwright/test';
import { localeForTag, preferredLocale } from '../src/lib/i18n/detect';

// Pure matching rules behind the language redirect on `/`.

test.describe('localeForTag', () => {
  test('matches exactly, ignoring case and treating _ like -', () => {
    expect(localeForTag('cy-GB')).toBe('cy-gb');
    expect(localeForTag('cy_GB')).toBe('cy-gb');
    expect(localeForTag('CY-gb')).toBe('cy-gb');
    expect(localeForTag('en-GB')).toBe('en-gb');
    expect(localeForTag('en-US')).toBe('en-us');
    expect(localeForTag('zh-CN')).toBe('zh-cn');
  });

  test('falls back to the first locale with the same language', () => {
    expect(localeForTag('cy')).toBe('cy-001');
    expect(localeForTag('fr-CA')).toBe('fr-001');
    expect(localeForTag('en-AU')).toBe('en-001');
    expect(localeForTag('ar-EG')).toBe('ar-001');
    expect(localeForTag('ko-KR')).toBe('ko-001');
  });

  test('does not serve Traditional Chinese with Simplified', () => {
    expect(localeForTag('zh')).toBe('zh-cn');
    expect(localeForTag('zh-TW')).toBeUndefined();
    expect(localeForTag('zh-HK')).toBeUndefined();
    expect(localeForTag('zh-Hant')).toBeUndefined();
  });

  test('has nothing for other languages or empty tags', () => {
    expect(localeForTag('de')).toBeUndefined();
    expect(localeForTag('*')).toBeUndefined();
    expect(localeForTag('')).toBeUndefined();
  });
});

test.describe('preferredLocale', () => {
  test('takes the first preference the site has a locale for', () => {
    expect(preferredLocale(['de', 'fr-FR'])).toBe('fr-001');
    expect(preferredLocale(['cy-GB', 'en-GB'])).toBe('cy-gb');
  });

  test('is undefined when none match', () => {
    expect(preferredLocale(['de', 'it'])).toBeUndefined();
    expect(preferredLocale([])).toBeUndefined();
  });
});
