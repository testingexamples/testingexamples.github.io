<script lang="ts">
  import {
    SectionHeading,
    Separator,
    InformationCallout,
    CallToAction,
    CodeBlock,
    Details
  } from 'lily-design-system-svelte-headless';
  import type { PageData } from './$types';

  let { data }: { data: PageData } = $props();
</script>

<svelte:head>
  <title>{data.title}</title>
  <meta
    name="description"
    content="One scenario written as a Given-When-Then (Gherkin) sentence, then shown as the equivalent Selenium and Playwright code in JavaScript and Python."
  />
</svelte:head>

<div class="page-header">
  <h1>Given-When-Then Examples</h1>
  <p>
    One plain-language scenario, written the way a non-programmer would describe it, next to the
    actual code that carries it out — in four combinations of tool and language.
  </p>
</div>

<section class="section prose">
  <SectionHeading class="section-heading-start" heading="What is Given-When-Then?" level={2} />

  <p>
    <strong>Given-When-Then</strong> is a way of writing a test scenario in plain sentences instead
    of code: <strong>Given</strong> some starting state, <strong>When</strong> something happens,
    <strong>Then</strong> some outcome is true. It comes from behaviour-driven development (BDD),
    and the specific plain-text syntax for it is usually called
    <strong>Gherkin</strong>.
  </p>

  <p>
    The point isn't to replace real test code — it's to give a team a shared sentence everyone can
    agree on <em>before</em> anyone writes the automation for it: a product owner, a tester, and a
    developer can all read "Given I am on the site, When I search, Then I see results" and agree
    that's the behaviour that matters, without any of them needing to read JavaScript or Python
    first. The code underneath — however it's written, in whichever tool — is what actually proves
    that sentence stays true.
  </p>
</section>

<Separator label="Section break" />

<section class="section prose">
  <SectionHeading class="section-heading-start" heading="The scenario" level={2} />

  <p>One scenario, written in Gherkin:</p>

  <CodeBlock label="Gherkin">
    <pre><code>{`Given I am on https://google.com
When I type in the search box and click submit
Then I see search results
`}</code></pre>
  </CodeBlock>

  <p>
    Below, the same three lines are carried out four ways: two browser automation tools (Selenium
    and Playwright), each in two languages (JavaScript and Python). Each line of code is commented
    with which Given/When/Then step it belongs to, so you can trace the plain sentence straight
    into the code that implements it.
  </p>

  <InformationCallout label="Read, don't repeatedly run">
    <p>
      These four examples target <code>google.com</code>, the same as this site's
      <a href="/examples/google-search/">Google Search examples</a> — and the same caution applies:
      Google's <a href="https://www.google.com/policies/terms/">Terms of Service</a> restrict
      automated querying of Google Search, so treat the code below as reading material for the
      <em>pattern</em>, not as scripts to run repeatedly against the live site. If you want to try
      this same Given/When/Then shape hands-on, point the same steps at
      <a href="/">this site's own home page</a> instead.
    </p>
  </InformationCallout>
</section>

<Separator label="Section break" />

<section class="section prose">
  <SectionHeading class="section-heading-start" heading="Selenium" level={2} />

  <Details summary="JavaScript — selenium-webdriver" open>
    <CodeBlock label="Selenium · JavaScript · selenium-webdriver (npm)">
      <pre><code>{`import { Builder, By, Key } from 'selenium-webdriver';

async function demo() {
  const driver = await new Builder().forBrowser('chrome').build();

  try {
    // Given I am on https://google.com
    await driver.get('https://google.com');

    // When I type in the search box and click submit
    // Google's search input has commonly carried name="q".
    const searchBox = await driver.findElement(By.name('q'));
    await searchBox.sendKeys('testing examples', Key.RETURN);

    // Then I see search results
    const results = await driver.findElements(By.css('#search'));
    if (results.length === 0) {
      throw new Error('Expected to see search results, but none were found.');
    }
  } finally {
    await driver.quit();
  }
}

demo().catch((err) => console.error(err));
`}</code></pre>
    </CodeBlock>
  </Details>

  <Details summary="Python — selenium">
    <CodeBlock label="Selenium · Python · selenium (PyPI)">
      <pre><code>{`from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys

driver = webdriver.Chrome()

try:
    # Given I am on https://google.com
    driver.get("https://google.com")

    # When I type in the search box and click submit
    # Google's search input has commonly carried name="q".
    search_box = driver.find_element(By.NAME, "q")
    search_box.send_keys("testing examples", Keys.RETURN)

    # Then I see search results
    results = driver.find_elements(By.CSS_SELECTOR, "#search")
    assert len(results) > 0, "Expected to see search results, but none were found."
finally:
    driver.quit()
`}</code></pre>
    </CodeBlock>
  </Details>
</section>

<Separator label="Section break" />

<section class="section prose">
  <SectionHeading class="section-heading-start" heading="Playwright" level={2} />

  <Details summary="JavaScript — playwright" open>
    <CodeBlock label="Playwright · JavaScript · playwright (npm)">
      <pre><code>{`import { chromium } from 'playwright';

const browser = await chromium.launch();

try {
  const page = await browser.newPage();

  // Given I am on https://google.com
  await page.goto('https://google.com');

  // When I type in the search box and click submit
  // Google's search input has commonly carried name="q".
  await page.fill('[name="q"]', 'testing examples');
  await page.keyboard.press('Enter');

  // Then I see search results
  await page.waitForSelector('#search');
} finally {
  await browser.close();
}
`}</code></pre>
    </CodeBlock>
  </Details>

  <Details summary="Python — playwright">
    <CodeBlock label="Playwright · Python · playwright (PyPI)">
      <pre><code>{`from playwright.sync_api import sync_playwright


def demo() -> None:
    """Search Google and check that results appear."""

    with sync_playwright() as p:
        browser = p.chromium.launch()

        try:
            page = browser.new_page()

            # Given I am on https://google.com
            page.goto("https://google.com")

            # When I type in the search box and click submit
            # Google's search input has commonly carried name="q".
            page.fill('[name="q"]', "testing examples")
            page.keyboard.press("Enter")

            # Then I see search results
            page.wait_for_selector("#search")
        finally:
            browser.close()


if __name__ == "__main__":
    demo()
`}</code></pre>
    </CodeBlock>
  </Details>
</section>

<Separator label="Section break" />

<section class="section prose">
  <p style="margin-top: 0; display: flex; gap: 1rem; flex-wrap: wrap;">
    <CallToAction class="button button-primary" href="/">Back to home</CallToAction>
    <CallToAction class="button button-secondary" href="/examples/">See more examples</CallToAction>
  </p>
</section>
