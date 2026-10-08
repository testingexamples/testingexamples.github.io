import { test, expect } from '@playwright/test';
import { LOCALES } from '../src/lib/i18n/locales';
import { slugForTopic, TOPICS } from '../src/lib/i18n/topics';

const INPUT_TYPES = [
  'color', 'date', 'datetime-local', 'email', 'file', 'hidden', 'image', 'month', 'number',
  'password', 'range', 'search', 'tel', 'time', 'url', 'week', 'button', 'reset'
];

// The fixture section lives on each locale's Practice page, not on its home
// page (spec/index.md, "The home page fixture contract").

test('the English practice page is /en-001/practice/', () => {
  expect(slugForTopic('en-001', 'practice')).toBe('practice');
  expect(TOPICS.practice).toBeDefined();
});

for (const locale of LOCALES) {
  test.describe(locale, () => {
    test('the practice page has the fixtures', async ({ page }) => {
      await page.goto(`/${locale}/${slugForTopic(locale, 'practice')}/`);
      await expect(page.locator('#id-example-1')).toBeVisible();
      await expect(page.locator('#select-example-1-id')).toBeVisible();
    });

    test('the practice page has the Select Multiple example after the Select example', async ({ page }) => {
      await page.goto(`/${locale}/${slugForTopic(locale, 'practice')}/`);
      const headings = await page.locator('.site-fixtures h2').allTextContents();
      expect(headings.indexOf('Input Select Multiple Example')).toBe(headings.indexOf('Input Select Example') + 1);
      await page.locator('#select-multiple-example-1-id').selectOption(['a', 'b']);
      await expect(page.locator('#select-multiple-example-1-id')).toHaveValues(['a', 'b']);
    });

    test('the practice page has an example for each input type, all before Submit', async ({ page }) => {
      await page.goto(`/${locale}/${slugForTopic(locale, 'practice')}/`);
      for (const type of INPUT_TYPES) {
        const input = page.locator(`#${type}-example-1-id`);
        await expect(input).toHaveCount(1);
        await expect(input).toHaveAttribute('type', type);
        await expect(input).toHaveAttribute('name', `${type}-example-1-name`);
      }
      const headings = await page.locator('.site-fixtures h2').allTextContents();
      expect(headings.at(-1)).toBe('Input Submit Example');
      expect(headings.at(-2)).toBe('Input Reset Example');
      await page.locator('#range-example-1-id').fill('75');
      await expect(page.locator('#range-example-1-id')).toHaveValue('75');
      await page.locator('#date-example-1-id').fill('2026-02-20');
      await expect(page.locator('#date-example-1-id')).toHaveValue('2026-02-20');
    });

    test('the home page no longer has the fixtures, and links to practice', async ({ page }) => {
      await page.goto(`/${locale}/`);
      await expect(page.locator('#id-example-1')).toHaveCount(0);
      // Two links: the "Practice" hero button and the Examples list entry.
      await expect(page.locator(`a[href="/${locale}/${slugForTopic(locale, 'practice')}/"]`)).toHaveCount(2);
    });
  });
}
