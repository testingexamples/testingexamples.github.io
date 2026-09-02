// Facts about this project that more than one page needs.
//
// Sibling repo URLs were confirmed against each repo's own git remote
// (`git remote -v`) or, where no remote is configured locally, against that
// repo's own `CITATION.cff` `repository-code:` field. See AGENTS.md.

export const SITE_NAME = 'Testing Examples';
export const REPO = 'https://github.com/testingexamples/testingexamples.github.io';

// See LICENSE.md at this repo's root (and each sibling demo repo's own
// LICENSE.md) for the full multi-license text and SPDX expression.
export const LICENSE = 'MIT OR Apache-2.0 OR GPL-2.0-only OR GPL-3.0-only OR BSD-3-Clause';

/** One sibling demo repo, grouped by which real site it targets. */
export type SiblingRepo = {
  name: string;
  url: string;
  description: string;
};

/**
 * The five generic locator-strategy walkthroughs. Each one drives a browser
 * against THIS site (testingexamples.github.io) and demonstrates finding
 * elements by id, name, class, link text, and XPath, plus interacting with
 * form inputs. These are the repos whose selectors this site's home page
 * fixture markup is a contract for — see AGENTS.md and spec/index.md.
 */
export const GENERIC_DEMO_REPOS: SiblingRepo[] = [
  {
    name: 'demo-playwright-javascript',
    url: 'https://github.com/testingexamples/demo-playwright-javascript',
    description: 'Playwright browser automation walkthrough, written in JavaScript.'
  },
  {
    name: 'demo-playwright-python',
    url: 'https://github.com/testingexamples/demo-playwright-python',
    description: 'Playwright browser automation walkthrough, written in Python.'
  },
  {
    name: 'demo-playwright-typescript',
    url: 'https://github.com/testingexamples/demo-playwright-typescript',
    description: 'Playwright browser automation walkthrough, written in TypeScript.'
  },
  {
    name: 'demo-selenium-javascript',
    url: 'https://github.com/joelparkerhenderson/demo-selenium-javascript',
    description: 'Selenium WebDriver browser automation walkthrough, written in JavaScript.'
  },
  {
    name: 'demo-webdriver-javascript',
    url: 'https://github.com/joelparkerhenderson/demo-webdriver-javascript',
    description:
      'WebdriverIO test suite with real Mocha assertions (not just a console.log walkthrough), written in JavaScript.'
  }
];

/**
 * The six NHS Wales real-world demos. Each one drives a browser against
 * https://www.nhs.wales/ instead of this site, so none of them depend on
 * this site's fixture markup.
 */
export const NHS_WALES_DEMO_REPOS: SiblingRepo[] = [
  {
    name: 'demo-playwright-javascript-for-nhs-wales',
    url: 'https://github.com/joelparkerhenderson/demo-playwright-javascript-for-nhs-wales',
    description: 'Playwright browser automation against nhs.wales, written in JavaScript.'
  },
  {
    name: 'demo-playwright-python-for-nhs-wales',
    url: 'https://github.com/joelparkerhenderson/demo-playwright-python-for-nhs-wales',
    description: 'Playwright browser automation against nhs.wales, written in Python.'
  },
  {
    name: 'demo-selenium-javascript-for-nhs-wales',
    url: 'https://github.com/joelparkerhenderson/demo-selenium-javascript-for-nhs-wales',
    description: 'Selenium WebDriver browser automation against nhs.wales, written in JavaScript.'
  },
  {
    name: 'demo-selenium-python-for-nhs-wales',
    url: 'https://github.com/joelparkerhenderson/demo-selenium-python-for-nhs-wales',
    description: 'Selenium WebDriver browser automation against nhs.wales, written in Python.'
  },
  {
    name: 'demo-webdriver-javascript-for-nhs-wales',
    url: 'https://github.com/joelparkerhenderson/demo-webdriver-javascript-for-nhs-wales',
    description: 'WebdriverIO browser automation against nhs.wales, written in JavaScript.'
  },
  {
    name: 'demo-webdriver-python-for-nhs-wales',
    url: 'https://github.com/joelparkerhenderson/demo-webdriver-python-for-nhs-wales',
    description: 'WebdriverIO-style browser automation against nhs.wales, written in Python.'
  }
];

/** All eleven sibling demo repos, generic family first, then NHS Wales family. */
export const SIBLING_DEMO_REPOS: SiblingRepo[] = [...GENERIC_DEMO_REPOS, ...NHS_WALES_DEMO_REPOS];
