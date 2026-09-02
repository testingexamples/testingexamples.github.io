import { test, expect } from '@playwright/test';

// This suite is the mechanical enforcement of spec/index.md's Acceptance
// criteria: every selector the five sibling repos use against this site's
// home page must keep resolving, with the exact ids/names/classes/text
// documented there. See AGENTS.md for why this matters and which repos
// depend on it.

test.describe('Id, name, class, and link examples', () => {
  test('elements are found by id', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('#id-example-1')).toHaveText('Id Example 1');
    await expect(page.locator('#id-example-2')).toHaveText('Id Example 2');
    await expect(page.locator('#id-example-3')).toHaveText('Id Example 3');
  });

  test('an element is found by name attribute', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('[name="name-example-1"]')).toHaveText('Name Example 1');
  });

  test('an element is found by class name', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('.class-example-1')).toHaveText('Class Example 1');
  });

  test('a link is found by its text and has the expected href', async ({ page }) => {
    await page.goto('/');
    const link = page.locator('a', { hasText: 'Link Example 1' });
    await expect(link).toBeVisible();
    await expect(link).toHaveAttribute('href', 'https://1.example.com');
  });

  test('the submit input is found by XPath / attribute selector', async ({ page }) => {
    await page.goto('/');
    const byXPath = page.locator('xpath=//input[@type="submit"]');
    await expect(byXPath).toHaveCount(1);
    const byCss = page.locator('input[type="submit"]');
    await expect(byCss).toHaveAttribute('value', 'Submit');
  });
});

test.describe('Form input examples', () => {
  test('the text input is fillable', async ({ page }) => {
    await page.goto('/');
    const text = page.locator('#text-example-1-id');
    await expect(text).toHaveAttribute('name', 'text-example-1-name');
    await text.fill('hello');
    await expect(text).toHaveValue('hello');
  });

  test('the checkbox is checkable', async ({ page }) => {
    await page.goto('/');
    const checkbox = page.locator('#checkbox-example-1-id');
    await checkbox.check();
    await expect(checkbox).toBeChecked();
  });

  test('the radio buttons are checkable and share one group', async ({ page }) => {
    await page.goto('/');
    const radio1 = page.locator('#radio-example-1-option-1-id');
    const radio2 = page.locator('#radio-example-1-option-2-id');
    const radio3 = page.locator('#radio-example-1-option-3-id');
    await expect(radio1).toHaveAttribute('name', 'radio-example-1-name');
    await expect(radio2).toHaveAttribute('name', 'radio-example-1-name');
    await expect(radio3).toHaveAttribute('name', 'radio-example-1-name');
    await radio1.check();
    await expect(radio1).toBeChecked();
  });

  test('the select has the expected first option', async ({ page }) => {
    await page.goto('/');
    const select = page.locator('#select-example-1-id');
    await expect(select).toHaveAttribute('name', 'select-example-1-name');
    const firstOption = select.locator('option').first();
    await expect(firstOption).toHaveAttribute('value', 'a');
    await expect(firstOption).toHaveText('alfa');
    await select.selectOption({ index: 0 });
    await expect(select).toHaveValue('a');
  });
});

test.describe('Ordered and unordered list examples', () => {
  test('the ordered list items have distinct ids', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('#ol-example-1-li-1')).toHaveText('alfa');
    await expect(page.locator('#ol-example-1-li-2')).toHaveText('bravo');
    await expect(page.locator('#ol-example-1-li-3')).toHaveText('charlie');
  });

  test('the unordered list no longer has a duplicate id (charlie is now ul-example-1-li-3)', async ({
    page
  }) => {
    await page.goto('/');
    await expect(page.locator('#ul-example-1-li-1')).toHaveText('alfa');
    await expect(page.locator('#ul-example-1-li-2')).toHaveText('bravo');
    await expect(page.locator('#ul-example-1-li-3')).toHaveText('charlie');
    // Each id must resolve to exactly one element — the old bug had two
    // <li> elements sharing id="ul-example-1-li-2".
    await expect(page.locator('#ul-example-1-li-2')).toHaveCount(1);
    await expect(page.locator('#ul-example-1-li-3')).toHaveCount(1);
  });
});
