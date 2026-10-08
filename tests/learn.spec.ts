import { test, expect } from '@playwright/test';
import { LOCALES } from '../src/lib/i18n/locales';
import { slugForTopic } from '../src/lib/i18n/topics';

// The Learn and Learn More lists live on /<locale>/learn/, not on the
// locale's home page (spec/index.md).

const ARTICLES = [
  'what-is-automatic-testing',
  'what-is-the-purpose-of-automatic-testing',
  'what-is-the-testing-pyramid',
  'what-is-browser-automation-testing',
  'how-to-start-learning-automatic-testing',
  'what-are-related-concepts-for-automatic-testing',
  'how-does-artificial-intelligence-help-automatic-testing',
  'what-is-continuous-integration-testing',
  'what-is-devops-for-automatic-testing',
  'what-are-flow-metrics-for-automatic-testing',
  'what-is-lean-six-sigma-for-automatic-testing',
  'learn-gherkin'
] as const;

for (const locale of LOCALES) {
  test(`${locale}: the Learn page has the Learn and Learn More lists`, async ({ page }) => {
    await page.goto(`/${locale}/${slugForTopic(locale, 'learn')}/`);
    await expect(page.locator('main h2')).toHaveCount(2);
    for (const topic of ARTICLES) {
      const href = `/${locale}/${slugForTopic(locale, topic)}/`;
      await expect(page.locator(`main a[href="${href}"]`)).toHaveCount(1);
    }
  });

  test(`${locale}: the home page no longer has the Learn lists`, async ({ page }) => {
    await page.goto(`/${locale}/`);
    for (const topic of ARTICLES) {
      const href = `/${locale}/${slugForTopic(locale, topic)}/`;
      await expect(page.locator(`main a[href="${href}"]`)).toHaveCount(0);
    }
  });
}

for (const locale of LOCALES) {
  test(`${locale}: the Gherkin page explains the keywords and links to Given-When-Then`, async ({ page }) => {
    await page.goto(`/${locale}/${slugForTopic(locale, 'learn-gherkin')}/`);
    await expect(page.locator('main h1')).toHaveCount(1);
    for (const keyword of ['Feature', 'Scenario', 'Given', 'When', 'Then']) {
      await expect(page.locator('main li strong', { hasText: new RegExp(`^${keyword}$`) })).toHaveCount(1);
    }
    await expect(page.locator('main pre')).toContainText('Given I am on https://google.com');
    const gwt = `/${locale}/${slugForTopic(locale, 'given-when-then')}/`;
    await expect(page.locator(`main a[href="${gwt}"]`)).toHaveCount(1);
  });
}
