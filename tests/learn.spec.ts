import { test, expect } from '@playwright/test';
import { LOCALES } from '../src/lib/i18n/locales';
import { slugForTopic } from '../src/lib/i18n/topics';

// The Learn, Learn More, Kinds of tests, and Related concepts lists live on /<locale>/topics/, not on the
// locale's home page (spec/index.md).

const ARTICLES = [
  'what-is-automatic-testing',
  'what-is-the-purpose-of-automatic-testing',
  'what-is-the-testing-pyramid',
  'what-is-browser-automation-testing',
  'how-to-start-learning-automatic-testing',
  'how-does-artificial-intelligence-help-automatic-testing',
  'what-is-continuous-integration-testing',
  'what-is-devops-for-automatic-testing',
  'what-are-flow-metrics-for-automatic-testing',
  'what-is-lean-six-sigma-for-automatic-testing',
  'learn-gherkin',
  'learn-unit-test',
  'learn-browser-test',
  'learn-regression-test',
  'learn-integration-test',
  'learn-benchmark-test',
  'learn-shift-left',
  'related-code-editors',
  'related-version-control',
  'related-agile-discovery',
  'related-unix-shell',
  'related-cloud-hosting'
] as const;

for (const locale of LOCALES) {
  test(`${locale}: the Learn page has the Learn and Learn More lists`, async ({ page }) => {
    await page.goto(`/${locale}/${slugForTopic(locale, 'learn')}/`);
    await expect(page.locator('main h2')).toHaveCount(4);
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

for (const locale of LOCALES) {
  test(`${locale}: the unit test page has the traits, an example, and links to the testing pyramid`, async ({ page }) => {
    await page.goto(`/${locale}/${slugForTopic(locale, 'learn-unit-test')}/`);
    await expect(page.locator('main h1')).toHaveCount(1);
    await expect(page.locator('main li strong')).toHaveCount(4);
    await expect(page.locator('main pre')).toContainText('expect(result).toBe(5);');
    const pyramid = `/${locale}/${slugForTopic(locale, 'what-is-the-testing-pyramid')}/`;
    await expect(page.locator(`main a[href="${pyramid}"]`)).toHaveCount(1);
  });
}

for (const locale of LOCALES) {
  test(`${locale}: the browser-based test page lists the tools and links to practice and code`, async ({ page }) => {
    await page.goto(`/${locale}/${slugForTopic(locale, 'learn-browser-test')}/`);
    await expect(page.locator('main h1')).toHaveCount(1);
    for (const tool of ['Selenium', 'Playwright', 'WebdriverIO', 'Cypress', 'Puppeteer', 'TestCafe']) {
      await expect(page.locator('main li strong', { hasText: new RegExp(`^${tool}$`) })).toHaveCount(1);
    }
    for (const topic of ['practice', 'code'] as const) {
      await expect(page.locator(`main a[href="/${locale}/${slugForTopic(locale, topic)}/"]`)).toHaveCount(1);
    }
  });
}

const RELATED = [
  'related-code-editors',
  'related-version-control',
  'related-agile-discovery',
  'related-unix-shell',
  'related-cloud-hosting'
] as const;

for (const locale of LOCALES) {
  for (const topic of RELATED) {
    test(`${locale}: the ${topic} page has one heading and links back to the topics hub`, async ({ page }) => {
      await page.goto(`/${locale}/${slugForTopic(locale, topic)}/`);
      await expect(page.locator('main h1')).toHaveCount(1);
      await expect(page.locator('main h1')).not.toBeEmpty();
      await expect(page.locator(`main a[href="/${locale}/${slugForTopic(locale, 'learn')}/"]`)).toHaveCount(1);
    });
  }

}

for (const locale of LOCALES) {
  test(`${locale}: the shift left page has the practices and links to devops and the pyramid`, async ({ page }) => {
    await page.goto(`/${locale}/${slugForTopic(locale, 'learn-shift-left')}/`);
    await expect(page.locator('main h1')).toHaveCount(1);
    await expect(page.locator('main li strong')).toHaveCount(4);
    await expect(page.locator('main pre')).toContainText('shift left');
    for (const topic of ['what-is-devops-for-automatic-testing', 'what-is-the-testing-pyramid'] as const) {
      await expect(page.locator(`main a[href="/${locale}/${slugForTopic(locale, topic)}/"]`)).toHaveCount(1);
    }
  });
}

const KINDS = ['learn-regression-test', 'learn-integration-test', 'learn-benchmark-test'] as const;

for (const locale of LOCALES) {
  for (const topic of KINDS) {
    test(`${locale}: the ${topic} page has four traits, an example, and one related link`, async ({ page }) => {
      await page.goto(`/${locale}/${slugForTopic(locale, topic)}/`);
      await expect(page.locator('main h1')).toHaveCount(1);
      await expect(page.locator('main li strong')).toHaveCount(4);
      await expect(page.locator('main pre code')).not.toBeEmpty();
      await expect(page.locator('main p a')).toHaveCount(1);
    });
  }
}
