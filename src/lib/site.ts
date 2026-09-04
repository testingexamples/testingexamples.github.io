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
    url: 'https://github.com/joelparkerhenderson/demo-playwright-javascript',
    description: 'Playwright browser automation walkthrough, written in JavaScript.'
  },
  {
    name: 'demo-playwright-python',
    url: 'https://github.com/joelparkerhenderson/demo-playwright-python',
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
    name: 'demo-webdriverio-javascript',
    url: 'https://github.com/joelparkerhenderson/demo-webdriverio-javascript',
    description:
      'WebdriverIO test suite with real Mocha assertions (not just a console.log walkthrough), written in JavaScript.'
  }
];

/**
 * A deliberately minimal four-repo subset — two tools (Playwright,
 * Selenium) times two languages (JavaScript, Python), no WebdriverIO and
 * no TypeScript — used only by `/learn/getting-started/` as the simplest
 * possible "practice on real examples" starting point for a beginner.
 * `GENERIC_DEMO_REPOS` above remains the authoritative five-repo
 * fixture-contract list (see AGENTS.md and spec/index.md) and is what
 * `/about/` still shows in full; this narrower list is just a friendlier
 * first stop, not a replacement for that contract.
 */
export const GETTING_STARTED_DEMO_REPOS: SiblingRepo[] = [
  {
    name: 'demo-playwright-javascript',
    url: 'https://github.com/joelparkerhenderson/demo-playwright-javascript',
    description: 'Demonstration of Playwright automation and JavaScript language.'
  },
  {
    name: 'demo-playwright-python',
    url: 'https://github.com/joelparkerhenderson/demo-playwright-python',
    description: 'Demonstration of Playwright automation and Python language.'
  },
  {
    name: 'demo-selenium-javascript',
    url: 'https://github.com/joelparkerhenderson/demo-selenium-javascript',
    description: 'Demonstration of Selenium automation and JavaScript language.'
  },
  {
    name: 'demo-selenium-python',
    url: 'https://github.com/testingexamples/demo-selenium-python',
    description: 'Demonstration of Selenium automation and Python language.'
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
    name: 'demo-webdriverio-javascript-for-nhs-wales',
    url: 'https://github.com/joelparkerhenderson/demo-webdriverio-javascript-for-nhs-wales',
    description: 'WebdriverIO browser automation against nhs.wales, written in JavaScript.'
  },
  {
    name: 'demo-webdriverio-python-for-nhs-wales',
    url: 'https://github.com/joelparkerhenderson/demo-webdriverio-python-for-nhs-wales',
    description: 'WebdriverIO-style browser automation against nhs.wales, written in Python.'
  }
];

/**
 * These eleven were this project's original sibling repos, kept as their
 * own constants because /learn/getting-started/ and
 * /learn/artificial-intelligence/ each reference this specific, smaller
 * set for a specific reason (the five fixture-contract-bearing repos; one
 * concrete NHS Wales worked example) — not because they're the complete
 * repo family any more. For the complete, current family (46 repos as of
 * this writing), see DEMO_MATRIX below, which /about/ renders in full.
 */
export const SIBLING_DEMO_REPOS: SiblingRepo[] = [...GENERIC_DEMO_REPOS, ...NHS_WALES_DEMO_REPOS];

/**
 * The complete demo repo family: three browser-automation tools, times up
 * to four languages each, times up to four targets each (this site's own
 * fixture page; a real NHS Wales government site; and two illustrative,
 * deliberately-never-executed repos against Google Search and Google Maps
 * — see AGENTS.md and each such repo's own AGENTS.md for why). Two cells
 * are deliberately absent (Selenium TypeScript and WebdriverIO TypeScript
 * have no NHS Wales variant) rather than padded out to a full 4x4x3 grid.
 *
 * `org` varies per repo, not per family: repos already at
 * github.com/joelparkerhenderson/... before this family grew stayed
 * there; every repo created new goes under github.com/testingexamples/...
 * (see AGENTS.md's "Where facts live"-style note, if present, or this
 * repo's own git history for why the split isn't uniform).
 */
export type DemoFamilyEntry = { name: string; org: string };
export type DemoFamily = {
  tool: string;
  language: string;
  generic?: DemoFamilyEntry;
  googleSearch?: DemoFamilyEntry;
  googleMaps?: DemoFamilyEntry;
  nhsWales?: DemoFamilyEntry;
};

export function demoRepoUrl(entry: DemoFamilyEntry): string {
  return `https://github.com/${entry.org}/${entry.name}`;
}

export const DEMO_MATRIX: DemoFamily[] = [
  {
    tool: 'Playwright',
    language: 'JavaScript',
    generic: { name: 'demo-playwright-javascript', org: 'joelparkerhenderson' },
    googleSearch: { name: 'demo-playwright-javascript-for-google-search', org: 'testingexamples' },
    googleMaps: { name: 'demo-playwright-javascript-for-google-maps', org: 'testingexamples' },
    nhsWales: { name: 'demo-playwright-javascript-for-nhs-wales', org: 'joelparkerhenderson' },
  },
  {
    tool: 'Playwright',
    language: 'Python',
    generic: { name: 'demo-playwright-python', org: 'joelparkerhenderson' },
    googleSearch: { name: 'demo-playwright-python-for-google-search', org: 'testingexamples' },
    googleMaps: { name: 'demo-playwright-python-for-google-maps', org: 'testingexamples' },
    nhsWales: { name: 'demo-playwright-python-for-nhs-wales', org: 'joelparkerhenderson' },
  },
  {
    tool: 'Playwright',
    language: 'Rust',
    generic: { name: 'demo-playwright-rust', org: 'testingexamples' },
    googleSearch: { name: 'demo-playwright-rust-for-google-search', org: 'testingexamples' },
    googleMaps: { name: 'demo-playwright-rust-for-google-maps', org: 'testingexamples' },
    nhsWales: { name: 'demo-playwright-rust-for-nhs-wales', org: 'testingexamples' },
  },
  {
    tool: 'Playwright',
    language: 'TypeScript',
    generic: { name: 'demo-playwright-typescript', org: 'testingexamples' },
    googleSearch: { name: 'demo-playwright-typescript-for-google-search', org: 'testingexamples' },
    googleMaps: { name: 'demo-playwright-typescript-for-google-maps', org: 'testingexamples' },
    nhsWales: { name: 'demo-playwright-typescript-for-nhs-wales', org: 'testingexamples' },
  },
  {
    tool: 'Selenium',
    language: 'JavaScript',
    generic: { name: 'demo-selenium-javascript', org: 'joelparkerhenderson' },
    googleSearch: { name: 'demo-selenium-javascript-for-google-search', org: 'testingexamples' },
    googleMaps: { name: 'demo-selenium-javascript-for-google-maps', org: 'testingexamples' },
    nhsWales: { name: 'demo-selenium-javascript-for-nhs-wales', org: 'joelparkerhenderson' },
  },
  {
    tool: 'Selenium',
    language: 'Python',
    generic: { name: 'demo-selenium-python', org: 'testingexamples' },
    googleSearch: { name: 'demo-selenium-python-for-google-search', org: 'testingexamples' },
    googleMaps: { name: 'demo-selenium-python-for-google-maps', org: 'testingexamples' },
    nhsWales: { name: 'demo-selenium-python-for-nhs-wales', org: 'joelparkerhenderson' },
  },
  {
    tool: 'Selenium',
    language: 'Rust',
    generic: { name: 'demo-selenium-rust', org: 'testingexamples' },
    googleSearch: { name: 'demo-selenium-rust-for-google-search', org: 'testingexamples' },
    googleMaps: { name: 'demo-selenium-rust-for-google-maps', org: 'testingexamples' },
    nhsWales: { name: 'demo-selenium-rust-for-nhs-wales', org: 'testingexamples' },
  },
  {
    tool: 'Selenium',
    language: 'TypeScript',
    generic: { name: 'demo-selenium-typescript', org: 'testingexamples' },
    googleSearch: { name: 'demo-selenium-typescript-for-google-search', org: 'testingexamples' },
    googleMaps: { name: 'demo-selenium-typescript-for-google-maps', org: 'testingexamples' },
  },
  {
    tool: 'WebdriverIO',
    language: 'JavaScript',
    generic: { name: 'demo-webdriverio-javascript', org: 'joelparkerhenderson' },
    googleSearch: { name: 'demo-webdriverio-javascript-for-google-search', org: 'testingexamples' },
    googleMaps: { name: 'demo-webdriverio-javascript-for-google-maps', org: 'testingexamples' },
    nhsWales: { name: 'demo-webdriverio-javascript-for-nhs-wales', org: 'joelparkerhenderson' },
  },
  {
    tool: 'WebdriverIO',
    language: 'Python',
    generic: { name: 'demo-webdriverio-python', org: 'testingexamples' },
    googleSearch: { name: 'demo-webdriverio-python-for-google-search', org: 'testingexamples' },
    googleMaps: { name: 'demo-webdriverio-python-for-google-maps', org: 'testingexamples' },
    nhsWales: { name: 'demo-webdriverio-python-for-nhs-wales', org: 'joelparkerhenderson' },
  },
  {
    tool: 'WebdriverIO',
    language: 'Rust',
    generic: { name: 'demo-webdriverio-rust', org: 'testingexamples' },
    googleSearch: { name: 'demo-webdriverio-rust-for-google-search', org: 'testingexamples' },
    googleMaps: { name: 'demo-webdriverio-rust-for-google-maps', org: 'testingexamples' },
    nhsWales: { name: 'demo-webdriverio-rust-for-nhs-wales', org: 'testingexamples' },
  },
  {
    tool: 'WebdriverIO',
    language: 'TypeScript',
    generic: { name: 'demo-webdriverio-typescript', org: 'testingexamples' },
    googleSearch: { name: 'demo-webdriverio-typescript-for-google-search', org: 'testingexamples' },
    googleMaps: { name: 'demo-webdriverio-typescript-for-google-maps', org: 'testingexamples' },
  },
];

/** Total repos in DEMO_MATRIX — computed, not hand-counted, so it can't drift. */
export const DEMO_MATRIX_COUNT: number = DEMO_MATRIX.reduce(
  (n, f) => n + [f.generic, f.googleSearch, f.googleMaps, f.nhsWales].filter(Boolean).length,
  0
);
