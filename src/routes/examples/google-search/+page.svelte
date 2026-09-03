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
    content="The same browse, search, submit, and follow-link interactions against Google Search, implemented nine ways: Selenium, WebdriverIO, and Playwright, each in JavaScript, Python, and Rust."
  />
</svelte:head>

<div class="page-header">
  <h1>Google Search Examples</h1>
  <p>
    One familiar scenario — browse to a site, use its search box, submit the
    search, follow a result link — implemented nine ways.
  </p>
</div>

<section class="section prose">
  <SectionHeading
    class="section-heading-start"
    eyebrow="What this page is"
    heading="The same four interactions, nine implementations"
    level={2}
  />

  <p>
    This page shows one scenario — <strong>browse to the site</strong>, <strong
      >follow a link</strong
    >, <strong>use the search box</strong>, and <strong>click a button</strong>
    — implemented nine ways: three browser-automation tools (Selenium, WebdriverIO,
    Playwright), each in three languages (JavaScript, Python, Rust). The target
    for all nine is Google Search, because it is a search box and results page
    that almost every reader already knows how to use, which makes it easy to
    see what each tool's syntax is doing without having to first learn the page
    itself.
  </p>

  <InformationCallout label="Read before running any of these">
    <p>
      Google's <a href="https://www.google.com/policies/terms/">Terms of Service</a
      > restrict automated querying of Google Search. These nine examples exist
      to show the syntax and interaction <em>patterns</em> of each tool side by
      side — they are not meant to be run repeatedly, or at all, against the live
      <code>google.com</code>. If you want to practise these same patterns hands-on,
      point them at <a href="/">this site's own home page</a> instead, which was
      built exactly for that: stable ids, names, classes, and text that don't shift
      under you.
    </p>
  </InformationCallout>

  <h3>The four interactions, defined once</h3>
  <p>
    Rather than repeat these per example, here is what each of the nine
    scripts below does:
  </p>
  <ol>
    <li><strong>Browse to the site</strong> — navigate to <code>https://www.google.com</code>.</li>
    <li>
      <strong>Use the search box</strong> — locate the search input and type a
      query, e.g. <code>"testing examples"</code>.
    </li>
    <li>
      <strong>Click a button / submit</strong> — press Enter, or find the submit
      button and click it.
    </li>
    <li>
      <strong>Follow a link</strong> — after results load, find and click the
      first organic result link.
    </li>
  </ol>

  <p>
    A caveat worth stating plainly rather than glossing over: Google's exact
    markup for the search box has drifted over time, and will likely keep
    drifting. It has historically been an <code>&lt;input&gt;</code> and is
    currently often a <code>&lt;textarea&gt;</code>, but in both cases it has
    commonly carried <code>name="q"</code>, so the examples below locate it
    with a selector like <code>[name="q"]</code> (or, for tools with a
    typed-attribute locator, <code>By.name("q")</code>). That is a real
    illustration of why name/tag selectors are brittle: they can silently
    stop matching when a site's markup changes underneath them. Where a tool
    supports locating by accessible role and name instead (for example a
    <code>role="combobox"</code> with a visible "Search" label), that is the
    more robust choice, and is noted in the relevant example. The submit
    button has historically carried <code>name="btnK"</code>, but it can be
    obscured by autocomplete suggestions the moment the search box gains
    focus, which is one reason pressing Enter after typing is generally more
    reliable than trying to click it.
  </p>
</section>

<Separator label="Section break" />

<section class="section prose">
  <SectionHeading class="section-heading-start" eyebrow="Tool 1 of 3" heading="Selenium" level={2} />

  <p>
    Selenium is the longest-established cross-language browser automation
    project — its WebDriver protocol is the same one several of the other
    tools on this page speak underneath.
  </p>

  <Details summary="JavaScript — selenium-webdriver" open>
    <CodeBlock label="Selenium · JavaScript · selenium-webdriver (npm)">
      <pre><code>{`import { Builder, By, Key } from 'selenium-webdriver';

async function demo() {
  const driver = await new Builder().forBrowser('chrome').build();

  try {
    // 1. Browse to the site.
    await driver.get('https://www.google.com');

    // 2. Use the search box.
    // Google's search input has drifted between <input> and <textarea>
    // over the years, but has commonly carried name="q".
    const searchBox = await driver.findElement(By.name('q'));
    await searchBox.sendKeys('testing examples');

    // 3. Click a button / submit.
    // Pressing Enter is generally more reliable than locating the submit
    // button, which autocomplete suggestions can obscure.
    await searchBox.sendKeys(Key.RETURN);

    // 4. Follow a link.
    const firstResult = await driver.findElement(By.css('a'));
    await firstResult.click();
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
    # 1. Browse to the site.
    driver.get("https://www.google.com")

    # 2. Use the search box.
    # Google's search input has drifted between <input> and <textarea>
    # over the years, but has commonly carried name="q".
    search_box = driver.find_element(By.NAME, "q")
    search_box.send_keys("testing examples")

    # 3. Click a button / submit.
    # Pressing Enter is generally more reliable than locating the submit
    # button, which autocomplete suggestions can obscure.
    search_box.send_keys(Keys.RETURN)

    # 4. Follow a link.
    first_result = driver.find_element(By.CSS_SELECTOR, "a")
    first_result.click()
finally:
    driver.quit()
`}</code></pre>
    </CodeBlock>
  </Details>

  <Details summary="Rust — thirtyfour">
    <p>
      There's no official Rust binding from the Selenium project itself —
      <code>thirtyfour</code> (whose name nods to selenium's atomic number,
      34) is the de facto Selenium/WebDriver client for Rust. It needs a
      running <code>chromedriver</code> (or similar) at the given URL, the
      same way the two examples above need a local driver/browser too.
    </p>
    <CodeBlock label="Selenium (WebDriver) · Rust · thirtyfour (crates.io)">
      <pre><code>{`use thirtyfour::prelude::*;

#[tokio::main]
async fn main() -> anyhow::Result<()> {
    let caps = DesiredCapabilities::chrome();
    let driver = WebDriver::new("http://localhost:9515", caps).await?;

    // 1. Browse to the site.
    driver.goto("https://www.google.com").await?;

    // 2. Use the search box.
    // Google's search input has drifted between <input> and <textarea>
    // over the years, but has commonly carried name="q".
    let search_box = driver
        .query(By::Name("q"))
        .desc("Google search box")
        .single()
        .await?;

    // 3. Click a button / submit.
    // \\u{E007} is the WebDriver "Enter" key; sending it is generally more
    // reliable than locating the submit button, which autocomplete
    // suggestions can obscure.
    search_box.send_keys("testing examples\\u{E007}").await?;

    // 4. Follow a link.
    let first_result = driver
        .query(By::Css("a"))
        .desc("First result link")
        .first()
        .await?;
    first_result.click().await?;

    driver.quit().await?;
    Ok(())
}
`}</code></pre>
    </CodeBlock>
  </Details>
</section>

<Separator label="Section break" />

<section class="section prose">
  <SectionHeading class="section-heading-start" eyebrow="Tool 2 of 3" heading="WebdriverIO" level={2} />

  <p>
    WebdriverIO itself is a JavaScript/Node.js project only — there is no
    WebdriverIO for Python or Rust. This page follows the same convention as
    its own sibling repo,
    <code>demo-webdriver-python-for-nhs-wales</code>: the JavaScript example
    below is real WebdriverIO, and the Python and Rust examples use the
    closest real equivalent — a plain WebDriver protocol client — structured
    as a real assertion-based test, matching WebdriverIO's own test-framework
    style rather than a bare walkthrough script.
  </p>

  <Details summary="JavaScript — WebdriverIO" open>
    <CodeBlock label="WebdriverIO · JavaScript · webdriverio + Mocha">
      <pre><code>{`describe('Google Search', () => {
  before(async () => {
    // 1. Browse to the site.
    await browser.url('https://www.google.com');
  });

  it('should search and follow the first result', async () => {
    // 2. Use the search box.
    // Google's search input has drifted between <input> and <textarea>
    // over the years, but has commonly carried name="q".
    const searchBox = await $('[name="q"]');
    await searchBox.setValue('testing examples');

    // 3. Click a button / submit.
    // Pressing Enter is generally more reliable than locating the submit
    // button, which autocomplete suggestions can obscure.
    await browser.keys('Enter');

    // 4. Follow a link.
    const firstResult = await $('a');
    await firstResult.click();

    await expect(browser).toHaveTitle(expect.stringContaining('testing examples'));
  });
});
`}</code></pre>
    </CodeBlock>
  </Details>

  <Details summary="Python — selenium + pytest (WebDriver equivalent, not WebdriverIO)">
    <CodeBlock label="WebDriver equivalent · Python · selenium + pytest">
      <pre><code>{`import pytest
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys


@pytest.fixture
def driver():
    d = webdriver.Chrome()
    yield d
    d.quit()


def test_search(driver):
    """Search Google and follow the first result."""

    # 1. Browse to the site.
    driver.get("https://www.google.com")

    # 2. Use the search box.
    # Google's search input has drifted between <input> and <textarea>
    # over the years, but has commonly carried name="q".
    search_box = driver.find_element(By.NAME, "q")
    search_box.send_keys("testing examples")

    # 3. Click a button / submit.
    # Pressing Enter is generally more reliable than locating the submit
    # button, which autocomplete suggestions can obscure.
    search_box.send_keys(Keys.RETURN)

    assert "testing examples" in driver.title.lower()

    # 4. Follow a link.
    first_result = driver.find_element(By.CSS_SELECTOR, "a")
    first_result.click()
`}</code></pre>
    </CodeBlock>
  </Details>

  <Details summary="Rust — fantoccini (WebDriver equivalent, not WebdriverIO)">
    <CodeBlock label="WebDriver equivalent · Rust · fantoccini (crates.io)">
      <pre><code>{`use fantoccini::{ClientBuilder, Locator};

#[tokio::test]
async fn search_google() -> Result<(), fantoccini::error::CmdError> {
    let c = ClientBuilder::native()
        .connect("http://localhost:4444")
        .await
        .expect("failed to connect to WebDriver");

    // 1. Browse to the site.
    c.goto("https://www.google.com").await?;

    // 2. Use the search box.
    // Google's search input has drifted between <input> and <textarea>
    // over the years, but has commonly carried name="q".
    // 3. Click a button / submit.
    // A trailing "\\n" submits, which is generally more reliable than
    // locating the submit button, which autocomplete suggestions can
    // obscure.
    c.find(Locator::Css("[name='q']"))
        .await?
        .send_keys("testing examples\\n")
        .await?;

    let title = c.title().await?;
    assert!(title.to_lowercase().contains("testing examples"));

    // 4. Follow a link.
    c.find(Locator::Css("a")).await?.click().await?;

    c.close().await
}
`}</code></pre>
    </CodeBlock>
  </Details>
</section>

<Separator label="Section break" />

<section class="section prose">
  <SectionHeading class="section-heading-start" eyebrow="Tool 3 of 3" heading="Playwright" level={2} />

  <p>
    Playwright has official bindings in JavaScript, Python, .NET, and Java;
    Rust support is community-maintained rather than official.
  </p>

  <Details summary="JavaScript — playwright" open>
    <CodeBlock label="Playwright · JavaScript · playwright (npm)">
      <pre><code>{`import { chromium } from 'playwright';

const browser = await chromium.launch();

try {
  const page = await browser.newPage();

  // 1. Browse to the site.
  await page.goto('https://www.google.com');

  // 2. Use the search box.
  // Google's search input has drifted between <input> and <textarea>
  // over the years, but has commonly carried name="q".
  await page.fill('[name="q"]', 'testing examples');

  // 3. Click a button / submit.
  // Pressing Enter is generally more reliable than locating the submit
  // button, which autocomplete suggestions can obscure.
  await page.keyboard.press('Enter');

  // 4. Follow a link.
  await page.click('a');
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
    """Search Google and follow the first result."""

    with sync_playwright() as p:
        browser = p.chromium.launch()

        try:
            page = browser.new_page()

            # 1. Browse to the site.
            page.goto("https://www.google.com")

            # 2. Use the search box.
            # Google's search input has drifted between <input> and
            # <textarea> over the years, but has commonly carried name="q".
            page.fill('[name="q"]', "testing examples")

            # 3. Click a button / submit.
            # Pressing Enter is generally more reliable than locating the
            # submit button, which autocomplete suggestions can obscure.
            page.keyboard.press("Enter")

            # 4. Follow a link.
            page.click("a")
        finally:
            browser.close()


if __name__ == "__main__":
    demo()
`}</code></pre>
    </CodeBlock>
  </Details>

  <Details summary="Rust — playwright-rs">
    <p>
      Be careful which crate you install. <code>playwright-rs</code>
      (<code>padamson/playwright-rust</code>) is actively maintained but
      still pre-1.0 and stabilising its API — it's the one used below. The
      older crate published on crates.io simply as <code>playwright</code>
      (<code>octaltree/playwright-rust</code>) has been abandoned since
      2022; don't reach for that one.
    </p>
    <CodeBlock label="Playwright · Rust · playwright-rs (crates.io)">
      <pre><code>{`use playwright_rs::Playwright;

#[tokio::main]
async fn main() -> anyhow::Result<()> {
    let pw = Playwright::launch().await?;
    let browser = pw.chromium().launch().await?;
    let page = browser.new_page().await?;

    // 1. Browse to the site.
    page.goto("https://www.google.com", None).await?;

    // 2. Use the search box.
    // Google's search input has drifted between <input> and <textarea>
    // over the years, but has commonly carried name="q".
    let search_box = page.locator("[name='q']");
    search_box.fill("testing examples", None).await?;

    // 3. Click a button / submit.
    // Pressing Enter is generally more reliable than locating the submit
    // button, which autocomplete suggestions can obscure.
    search_box.press("Enter", None).await?;

    // 4. Follow a link.
    let first_result = page.locator("a").first();
    first_result.click(None).await?;

    browser.close().await?;
    Ok(())
}
`}</code></pre>
    </CodeBlock>
  </Details>
</section>

<Separator label="Section break" />

<section class="section prose">
  <p style="margin-top: 0; display: flex; gap: 1rem; flex-wrap: wrap;">
    <CallToAction class="button button-primary" href="/examples/">Back to examples</CallToAction>
    <CallToAction class="button button-secondary" href="/examples/google-maps/"
      >Google Maps examples</CallToAction
    >
  </p>
</section>
