import { test, expect } from '@playwright/test';
import { LOCALES } from '../src/lib/i18n/locales';
import { slugForTopic } from '../src/lib/i18n/topics';
import { DEMO_REPOS, DEMO_REPOS_URL } from '../src/lib/demos';

// Every demo-* repository is listed on each locale's Code page (not its home
// page) and, unchanged, on the site root (spec/index.md).

test('the demo repository list is non-empty, unique, and all demo-*', () => {
  expect(DEMO_REPOS.length).toBeGreaterThan(0);
  expect(new Set(DEMO_REPOS).size).toBe(DEMO_REPOS.length);
  for (const repo of DEMO_REPOS) expect(repo).toMatch(/^demo-/);
});

for (const locale of LOCALES) {
  test(`${locale}: the Code page lists every demo repository as a link`, async ({ page }) => {
    await page.goto(`/${locale}/${slugForTopic(locale, 'code')}/`);
    for (const repo of DEMO_REPOS) {
      await expect(page.locator(`a[href="${DEMO_REPOS_URL}${repo}"]`)).toHaveCount(1);
    }
  });

  test(`${locale}: the home page has Learn, Practice, and Code hero buttons and no repository list`, async ({ page }) => {
    await page.goto(`/${locale}/`);
    for (const topic of ['learn', 'practice', 'code'] as const) {
      const href = `/${locale}/${slugForTopic(locale, topic)}/`;
      await expect(page.locator(`.hero-actions a.button[href="${href}"]`)).toHaveCount(1);
    }
    await expect(page.locator(`main a[href^="${DEMO_REPOS_URL}"]`)).toHaveCount(0);
    // The buttons sit below the intro paragraph and have no underline.
    const order = await page.locator('main p').evaluateAll((ps) => ps.findIndex((p) => p.classList.contains('hero-actions')));
    expect(order).toBe(1);
    const decoration = await page.locator('.hero-actions a.button').first().evaluate((a) => getComputedStyle(a).textDecorationLine);
    expect(decoration).toBe('none');
  });
}

test('the site root lists every demo repository as a link', async ({ page }) => {
  // Browsers under automation are never redirected away from `/`.
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'Examples as repositories' })).toBeVisible();
  for (const repo of DEMO_REPOS) {
    await expect(page.locator(`a[href="${DEMO_REPOS_URL}${repo}"]`)).toHaveCount(1);
  }
});
