import { test, expect } from '@playwright/test';
import { LOCALES } from '../src/lib/i18n/locales';
import { DEMO_REPOS, DEMO_REPOS_URL } from '../src/lib/demos';

// "Examples as repositories": one link per demo-* repository on each
// locale's home page (spec/index.md).

test('the demo repository list is non-empty, unique, and all demo-*', () => {
  expect(DEMO_REPOS.length).toBeGreaterThan(0);
  expect(new Set(DEMO_REPOS).size).toBe(DEMO_REPOS.length);
  for (const repo of DEMO_REPOS) expect(repo).toMatch(/^demo-/);
});

for (const locale of LOCALES) {
  test(`${locale}: the home page lists every demo repository as a link`, async ({ page }) => {
    await page.goto(`/${locale}/`);
    for (const repo of DEMO_REPOS) {
      await expect(page.locator(`a[href="${DEMO_REPOS_URL}${repo}"]`)).toHaveCount(1);
    }
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
