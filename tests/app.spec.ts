import { test, expect } from '@playwright/test';

// Exercises the interactive demo app at /app/: the simulated sign-in, the
// post-sign-in nav bar and search box, and the three-tab panel. Unlike
// tests/fixtures.spec.ts (which mechanically enforces the home page's
// fixture contract for the five sibling repos), this suite is this repo's
// own functional check that /app/'s behaviour matches what it advertises.

test.describe('Demo app sign-in', () => {
  test('an incorrect username/password shows a failure message and stays signed out', async ({
    page
  }) => {
    await page.goto('/app/');
    await page.locator('#username-input').fill('wrong');
    await page.locator('#password-input').fill('wrong');
    await page.locator('#sign-in-submit').click();

    await expect(page.locator('#app-message')).toHaveText('Sign in failure.');
    await expect(page.locator('#sign-in-form')).toBeVisible();
  });

  test('the correct username/password shows a success message and reveals the app', async ({
    page
  }) => {
    await page.goto('/app/');
    await page.locator('#username-input').fill('guest');
    await page.locator('#password-input').fill('guest');
    await page.locator('#sign-in-submit').click();

    await expect(page.locator('#app-message')).toHaveText('Sign in success.');
    await expect(page.locator('#sign-in-form')).toHaveCount(0);
    await expect(page.locator('#nav-home-button')).toBeVisible();
  });
});

test.describe('Demo app nav bar', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/app/');
    await page.locator('#username-input').fill('guest');
    await page.locator('#password-input').fill('guest');
    await page.locator('#sign-in-submit').click();
  });

  test('clicking Home shows "Home Page"', async ({ page }) => {
    await page.locator('#nav-home-button').click();
    await expect(page.locator('#app-message')).toHaveText('Home Page');
  });

  test('clicking Settings shows "Settings Page"', async ({ page }) => {
    await page.locator('#nav-settings-button').click();
    await expect(page.locator('#app-message')).toHaveText('Settings Page');
  });

  test('clicking Sign Out shows "Sign Out" and signs the user out', async ({ page }) => {
    await page.locator('#nav-sign-out-button').click();
    await expect(page.locator('#app-message')).toHaveText('Sign Out');
    await expect(page.locator('#sign-in-form')).toBeVisible();
  });

  test('the search box accepts a query and reports a result', async ({ page }) => {
    const search = page.locator('#app-search');
    await search.locator('input').fill('testing examples');
    await search.locator('button').click();
    await expect(page.locator('#app-message')).toHaveText('Search results for "testing examples".');
  });
});

test.describe('Demo app tab bar', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/app/');
    await page.locator('#username-input').fill('guest');
    await page.locator('#password-input').fill('guest');
    await page.locator('#sign-in-submit').click();
  });

  test('Alfa is the default selected tab', async ({ page }) => {
    await expect(page.locator('#panel-alfa')).toBeVisible();
    await expect(page.locator('#panel-alfa')).toHaveText('Alfa tab panel');
    await expect(page.locator('#panel-bravo')).toBeHidden();
    await expect(page.locator('#panel-charlie')).toBeHidden();
  });

  test('clicking Bravo shows the Bravo tab panel', async ({ page }) => {
    await page.locator('#tab-bravo').click();
    await expect(page.locator('#panel-bravo')).toBeVisible();
    await expect(page.locator('#panel-bravo')).toHaveText('Bravo tab panel');
    await expect(page.locator('#panel-alfa')).toBeHidden();
  });

  test('clicking Charlie shows the Charlie tab panel', async ({ page }) => {
    await page.locator('#tab-charlie').click();
    await expect(page.locator('#panel-charlie')).toBeVisible();
    await expect(page.locator('#panel-charlie')).toHaveText('Charlie tab panel');
    await expect(page.locator('#panel-alfa')).toBeHidden();
  });
});
