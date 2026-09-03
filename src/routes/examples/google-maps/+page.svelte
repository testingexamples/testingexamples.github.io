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
    content="Six interactions with Google Maps — visit, search, click a result, scroll, zoom, and toggle a layer — implemented nine ways: Selenium, WebdriverIO, and Playwright, each in JavaScript, Python, and Rust."
  />
</svelte:head>

<div class="page-header">
  <h1>Google Maps Examples</h1>
  <p>
    This page shows six interactions with Google Maps — visit, search, click a link or result,
    scroll, zoom, and toggle a layer — implemented nine ways: three browser-automation tools
    (Selenium, WebdriverIO, Playwright) times three languages (JavaScript, Python, Rust).
  </p>
</div>

<section class="section prose">
  <SectionHeading
    class="section-heading-start"
    eyebrow="Read first"
    heading="Two things to know before you start"
    level={2}
  />

  <InformationCallout label="Before you run any of this">
    <p>
      Google's <a href="https://www.google.com/policies/terms/">Terms of Service</a> restrict
      automated querying of its services. The code below teaches <em>patterns</em> — locator
      strategies and interaction techniques — not scripts meant to run repeatedly against the
      live Google Maps.
    </p>
    <p>
      Google Maps is also a much harder automation target than a typical page. Most of the map
      itself renders to a <code>&lt;canvas&gt;</code> element (or WebGL), so you generally cannot
      "find" a street or a pin the way you find a paragraph of text — you interact with the
      <em>canvas</em> via coordinates and mouse events (click at an x/y position, scroll-wheel
      over the canvas element) rather than finding a DOM element for it. The UI chrome around the
      canvas — search box, zoom buttons, layers menu — is regular DOM, and usefully, Google gives
      most of that chrome real, relatively stable <code>aria-label</code> attributes for
      accessibility. That makes accessible-name locators (<code>[aria-label="..."]</code>) a much
      better choice than generated or hashed CSS class names, which change on every Maps deploy.
      This is the single most transferable lesson on this page: <strong
        >prefer accessible-name locators over class-name locators whenever a site's markup isn't a
        public API you control</strong
      > — that is good practice everywhere, not just here.
    </p>
  </InformationCallout>
</section>

<Separator label="Section break" />

<section class="section prose">
  <SectionHeading
    class="section-heading-start"
    eyebrow="Defined once"
    heading="The six interactions"
    level={2}
  />

  <p>
    Every example below implements the same six steps. They are defined once here rather than
    repeated in each code sample:
  </p>

  <ol>
    <li><strong>Visit</strong> — navigate to <code>https://www.google.com/maps</code>.</li>
    <li>
      <strong>Search</strong> — locate the search box (has
      <code>aria-label="Search Google Maps"</code> in current Google Maps markup — note this may
      drift over time like any third-party site) and type a query, e.g.
      <code>"Cardiff Castle"</code>, then submit (Enter, or the search button, which typically has
      <code>aria-label="Search"</code>).
    </li>
    <li>
      <strong>Click a link/result</strong> — click the first search result in the results panel
      (results are normally DOM list items, not canvas — findable by role or text even though the
      map itself is canvas).
    </li>
    <li>
      <strong>Scroll</strong> — simulate a scroll/pan over the map canvas: for tools with a real
      mouse-wheel/scroll API, dispatch a wheel event or scroll gesture over the canvas element's
      bounding box, not over the whole page.
    </li>
    <li>
      <strong>Zoom</strong> — click the zoom-in button (<code>aria-label="Zoom in"</code>) or
      zoom-out button (<code>aria-label="Zoom out"</code>) — a much more reliable approach than
      trying to pinch or scroll-zoom the canvas programmatically, and worth calling out as the
      pragmatic choice.
    </li>
    <li>
      <strong>Activate a layer</strong> — open the Layers panel (button
      <code>aria-label="Layers"</code>), then choose a layer such as "Traffic" (typically a
      labelled option or button once the panel is open — described below as "the traffic layer
      toggle" without overclaiming an exact stable selector).
    </li>
  </ol>
</section>

<Separator label="Section break" />

<section class="section prose">
  <SectionHeading class="section-heading-start" eyebrow="Tool 1 of 3" heading="Selenium" level={2} />

  <p>
    All three languages below use aria-label-based locators throughout, per the lesson above. The
    Rust example uses <a href="https://crates.io/crates/thirtyfour"><code>thirtyfour</code></a>,
    the de facto Selenium/WebDriver client for Rust — there is no official one, and its name nods
    to selenium's atomic number, 34.
  </p>

  <Details summary="Selenium — JavaScript (selenium-webdriver)">
    <CodeBlock label="selenium-webdriver, JavaScript">
      <pre><code
          >{`const { Builder, By, Key, until } = require('selenium-webdriver');

(async function googleMapsWalkthrough() {
  const driver = await new Builder().forBrowser('chrome').build();

  try {
    // 1. Visit
    await driver.get('https://www.google.com/maps');

    // 2. Search
    const searchBox = await driver.findElement(By.css('[aria-label="Search Google Maps"]'));
    await searchBox.sendKeys('Cardiff Castle', Key.RETURN);

    // 3. Click the first result
    const firstResult = await driver.wait(
      until.elementLocated(By.css('[role="feed"] a')),
      10000
    );
    await firstResult.click();

    // 4. Scroll: dispatch a synthetic wheel event over the map canvas.
    // (selenium-webdriver's newer driver.actions().scroll() API works
    // too; this executeScript fallback is shown because it works across
    // more selenium-webdriver versions.)
    const canvas = await driver.findElement(By.css('canvas'));
    await driver.executeScript((el) => {
      const rect = el.getBoundingClientRect();
      el.dispatchEvent(
        new WheelEvent('wheel', {
          deltaY: 200,
          clientX: rect.x + rect.width / 2,
          clientY: rect.y + rect.height / 2,
          bubbles: true
        })
      );
    }, canvas);

    // 5. Zoom in
    const zoomIn = await driver.findElement(By.css('[aria-label="Zoom in"]'));
    await zoomIn.click();

    // 6. Toggle the traffic layer
    const layersButton = await driver.findElement(By.css('[aria-label="Layers"]'));
    await layersButton.click();
    const trafficOption = await driver.wait(
      until.elementLocated(By.xpath("//*[contains(text(), 'Traffic')]")),
      5000
    );
    await trafficOption.click();
  } finally {
    await driver.quit();
  }
})();
`}</code
        ></pre>
    </CodeBlock>
  </Details>

  <Details summary="Selenium — Python (selenium)">
    <CodeBlock label="selenium, Python">
      <pre><code
          >{`from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

driver = webdriver.Chrome()

try:
    # 1. Visit
    driver.get('https://www.google.com/maps')

    # 2. Search
    search_box = driver.find_element(By.CSS_SELECTOR, '[aria-label="Search Google Maps"]')
    search_box.send_keys('Cardiff Castle')
    search_box.send_keys(Keys.RETURN)

    # 3. Click the first result
    first_result = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.CSS_SELECTOR, '[role="feed"] a'))
    )
    first_result.click()

    # 4. Scroll: dispatch a synthetic wheel event over the map canvas,
    # mirroring the JavaScript example's executeScript fallback above.
    # (ActionChains.scroll_to_element / scroll_by_amount is a real
    # alternative on recent selenium versions.)
    canvas = driver.find_element(By.CSS_SELECTOR, 'canvas')
    driver.execute_script(
        """
        const rect = arguments[0].getBoundingClientRect();
        arguments[0].dispatchEvent(new WheelEvent('wheel', {
            deltaY: 200,
            clientX: rect.x + rect.width / 2,
            clientY: rect.y + rect.height / 2,
            bubbles: true
        }));
        """,
        canvas
    )

    # 5. Zoom in
    driver.find_element(By.CSS_SELECTOR, '[aria-label="Zoom in"]').click()

    # 6. Toggle the traffic layer
    driver.find_element(By.CSS_SELECTOR, '[aria-label="Layers"]').click()
    traffic_option = WebDriverWait(driver, 5).until(
        EC.presence_of_element_located((By.XPATH, "//*[contains(text(), 'Traffic')]"))
    )
    traffic_option.click()
finally:
    driver.quit()
`}</code
        ></pre>
    </CodeBlock>
  </Details>

  <Details summary="Selenium — Rust (thirtyfour)">
    <CodeBlock label="thirtyfour, Rust">
      <pre><code
          >{`use thirtyfour::prelude::*;

#[tokio::main]
async fn main() -> anyhow::Result<()> {
    let caps = DesiredCapabilities::chrome();
    let driver = WebDriver::new("http://localhost:9515", caps).await?;

    // 1. Visit
    driver.goto("https://www.google.com/maps").await?;

    // 2. Search
    let search_box = driver
        .query(By::Css("[aria-label='Search Google Maps']"))
        .desc("Maps search box")
        .single()
        .await?;
    search_box.send_keys("Cardiff Castle\\u{E007}").await?;

    // 3. Click the first result. Results are ordinary DOM list items, not
    // canvas, so they are findable like any other element.
    let first_result = driver
        .query(By::Css("[role='feed'] a"))
        .desc("first search result")
        .single()
        .await?;
    first_result.click().await?;

    // 4. Scroll: dispatch a synthetic wheel event over the map canvas.
    // thirtyfour has no dedicated scroll gesture, so this mirrors the
    // execute-script fallback used in the JavaScript and Python examples.
    driver
        .execute(
            r#"const el = document.querySelector('canvas');
               const rect = el.getBoundingClientRect();
               el.dispatchEvent(new WheelEvent('wheel', {
                   deltaY: 200,
                   clientX: rect.x + rect.width / 2,
                   clientY: rect.y + rect.height / 2,
                   bubbles: true
               }));"#,
            Vec::new(),
        )
        .await?;

    // 5. Zoom in
    let zoom_in = driver
        .query(By::Css("[aria-label='Zoom in']"))
        .desc("Zoom in button")
        .single()
        .await?;
    zoom_in.click().await?;

    // 6. Toggle the traffic layer
    let layers_button = driver
        .query(By::Css("[aria-label='Layers']"))
        .desc("Layers button")
        .single()
        .await?;
    layers_button.click().await?;

    let traffic_option = driver
        .query(By::XPath("//*[contains(text(), 'Traffic')]"))
        .desc("traffic layer toggle")
        .single()
        .await?;
    traffic_option.click().await?;

    driver.quit().await?;
    Ok(())
}
`}</code
        ></pre>
    </CodeBlock>
  </Details>
</section>

<Separator label="Section break" />

<section class="section prose">
  <SectionHeading
    class="section-heading-start"
    eyebrow="Tool 2 of 3"
    heading="WebdriverIO"
    level={2}
  />

  <p>
    WebdriverIO itself is JavaScript/Node.js only. Following the same convention as this project's
    own sibling repo <code>demo-webdriver-python-for-nhs-wales</code>, the Python and Rust examples
    below use the closest real equivalent — a plain WebDriver protocol client — structured as a
    real assertion-based test rather than a plain walkthrough.
  </p>

  <Details summary="WebdriverIO — JavaScript (webdriverio)">
    <CodeBlock label="webdriverio, JavaScript">
      <pre><code
          >{`describe('Google Maps', () => {
  it('searches, opens a result, zooms in, and toggles traffic', async () => {
    // 1. Visit
    await browser.url('https://www.google.com/maps');

    // 2. Search
    const searchBox = await $('[aria-label="Search Google Maps"]');
    await searchBox.setValue('Cardiff Castle');
    await browser.keys('Enter');

    // 3. Click the first result
    const firstResult = await $('[role="feed"] a');
    await firstResult.waitForClickable();
    await firstResult.click();

    // 4. Scroll: pan the map with WebdriverIO's multi-action wheel API,
    // scrolling over the canvas element's bounding box rather than the
    // whole page. execute() dispatching a synthetic wheel event (see the
    // Selenium examples above) is the documented fallback on older
    // WebdriverIO versions.
    const canvas = await $('canvas');
    await browser
      .action('wheel')
      .scroll({ origin: canvas, deltaY: 200, duration: 200 })
      .perform();

    // 5. Zoom in
    await $('[aria-label="Zoom in"]').click();

    // 6. Toggle the traffic layer
    await $('[aria-label="Layers"]').click();
    const trafficOption = await $('*=Traffic');
    await trafficOption.click();
  });
});
`}</code
        ></pre>
    </CodeBlock>
  </Details>

  <Details summary="WebdriverIO equivalent — Python (selenium + pytest)">
    <CodeBlock label="selenium + pytest, Python">
      <pre><code
          >{`"""
WebDriver-protocol equivalent of the WebdriverIO JavaScript example above.
There is no direct Python equivalent to the JavaScript "webdriverio"
package, so — following demo-webdriver-python-for-nhs-wales — this uses
the \`selenium\` package structured as a real pytest suite: a \`driver\`
fixture (see conftest.py) and real assert statements, rather than a plain
walkthrough script.
"""

from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys


def test_search_opens_cardiff_castle(driver):
    """Visit Google Maps, search for Cardiff Castle, and open the first
    result."""

    driver.get('https://www.google.com/maps')

    search_box = driver.find_element(By.CSS_SELECTOR, '[aria-label="Search Google Maps"]')
    search_box.send_keys('Cardiff Castle')
    search_box.send_keys(Keys.RETURN)

    first_result = driver.find_element(By.CSS_SELECTOR, '[role="feed"] a')
    first_result.click()

    assert 'Cardiff Castle' in driver.title


def test_zoom_in_button_is_present(driver):
    """The zoom-in control has a stable aria-label, unlike the canvas map
    it sits beside."""

    driver.get('https://www.google.com/maps')

    zoom_in = driver.find_element(By.CSS_SELECTOR, '[aria-label="Zoom in"]')
    assert zoom_in.is_displayed()
    zoom_in.click()


def test_traffic_layer_toggle_is_reachable(driver):
    """Open the Layers panel and confirm the traffic layer toggle can be
    found and clicked."""

    driver.get('https://www.google.com/maps')

    driver.find_element(By.CSS_SELECTOR, '[aria-label="Layers"]').click()
    traffic_option = driver.find_element(By.XPATH, "//*[contains(text(), 'Traffic')]")

    assert traffic_option.is_displayed()
    traffic_option.click()
`}</code
        ></pre>
    </CodeBlock>
  </Details>

  <Details summary="WebdriverIO equivalent — Rust (fantoccini)">
    <CodeBlock label="fantoccini, Rust">
      <pre><code
          >{`use fantoccini::{ClientBuilder, Locator};

#[tokio::test]
async fn search_zoom_and_toggle_traffic() -> Result<(), fantoccini::error::CmdError> {
    let c = ClientBuilder::native()
        .connect("http://localhost:4444")
        .await
        .expect("failed to connect to WebDriver");

    // 1. Visit
    c.goto("https://www.google.com/maps").await?;

    // 2. Search, then submit with Enter to open the first result
    c.find(Locator::Css("[aria-label='Search Google Maps']"))
        .await?
        .send_keys("Cardiff Castle\\n")
        .await?;

    // 4. Scroll: dispatch a synthetic wheel event over the map canvas,
    // mirroring the execute-script fallback used elsewhere on this page.
    c.execute(
        r#"const el = document.querySelector('canvas');
           const rect = el.getBoundingClientRect();
           el.dispatchEvent(new WheelEvent('wheel', {
               deltaY: 200,
               clientX: rect.x + rect.width / 2,
               clientY: rect.y + rect.height / 2,
               bubbles: true
           }));"#,
        vec![],
    )
    .await?;

    // 5. Zoom in (the pragmatic, reliable choice over pinch/scroll-zoom)
    c.find(Locator::Css("[aria-label='Zoom in']"))
        .await?
        .click()
        .await?;

    // 6. Toggle the traffic layer
    c.find(Locator::Css("[aria-label='Layers']")).await?.click().await?;
    let traffic = c
        .find(Locator::XPath("//*[contains(text(), 'Traffic')]"))
        .await?;
    traffic.click().await?;

    let url = c.current_url().await?;
    assert!(url.as_str().contains("google.com/maps"));

    c.close().await
}
`}</code
        ></pre>
    </CodeBlock>
  </Details>
</section>

<Separator label="Section break" />

<section class="section prose">
  <SectionHeading
    class="section-heading-start"
    eyebrow="Tool 3 of 3"
    heading="Playwright"
    level={2}
  />

  <p>
    Playwright ships official bindings for JavaScript, Python, .NET, and Java. Rust is community-maintained:
    <a href="https://github.com/padamson/playwright-rust"><code>playwright-rs</code></a>
    (actively developed by <code>padamson/playwright-rust</code>, pre-1.0) is the example below.
    The older <code>octaltree/playwright-rust</code> crate, published on crates.io as
    <code>playwright</code>, has been abandoned since 2022.
  </p>

  <Details summary="Playwright — JavaScript (playwright)">
    <CodeBlock label="playwright, JavaScript">
      <pre><code
          >{`const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // 1. Visit
  await page.goto('https://www.google.com/maps');

  // 2. Search
  await page.fill('[aria-label="Search Google Maps"]', 'Cardiff Castle');
  await page.keyboard.press('Enter');

  // 3. Click the first result
  await page.locator('[role="feed"] a').first().click();

  // 4. Scroll: Playwright has a real, clean API for this — hover the
  // canvas, then dispatch a mouse-wheel gesture over it. Far more
  // ergonomic than the executeScript-wheel-event fallback the other
  // tools needed.
  await page.hover('canvas');
  await page.mouse.wheel(0, 200);

  // 5. Zoom in
  await page.click('[aria-label="Zoom in"]');

  // 6. Toggle the traffic layer
  await page.click('[aria-label="Layers"]');
  await page.click('text=Traffic');

  await browser.close();
})();
`}</code
        ></pre>
    </CodeBlock>
  </Details>

  <Details summary="Playwright — Python (playwright)">
    <CodeBlock label="playwright, Python">
      <pre><code
          >{`from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page()

    # 1. Visit
    page.goto('https://www.google.com/maps')

    # 2. Search
    page.fill('[aria-label="Search Google Maps"]', 'Cardiff Castle')
    page.keyboard.press('Enter')

    # 3. Click the first result
    page.locator('[role="feed"] a').first.click()

    # 4. Scroll: hover the canvas, then dispatch a mouse-wheel gesture —
    # Playwright's real advantage here over the other tools' fallbacks.
    page.hover('canvas')
    page.mouse.wheel(0, 200)

    # 5. Zoom in
    page.click('[aria-label="Zoom in"]')

    # 6. Toggle the traffic layer
    page.click('[aria-label="Layers"]')
    page.click('text=Traffic')

    browser.close()
`}</code
        ></pre>
    </CodeBlock>
  </Details>

  <Details summary="Playwright — Rust (playwright-rs)">
    <CodeBlock label="playwright-rs, Rust">
      <pre><code
          >{`use playwright_rs::Playwright;

#[tokio::main]
async fn main() -> anyhow::Result<()> {
    let pw = Playwright::launch().await?;
    let browser = pw.chromium().launch().await?;
    let page = browser.new_page().await?;

    // 1. Visit
    page.goto("https://www.google.com/maps", None).await?;

    // 2. Search, then submit
    let search_box = page.locator("[aria-label='Search Google Maps']");
    search_box.fill("Cardiff Castle", None).await?;
    search_box.press("Enter", None).await?;

    // 3. Click the first result
    let first_result = page.locator("[role='feed'] a");
    first_result.click(None).await?;

    // 4. Scroll: omitted here. playwright-rs is pre-1.0 and, unlike the
    // JavaScript and Python bindings above, does not yet expose an
    // ergonomic mouse-wheel API — see the JavaScript example for the
    // pattern (hover the canvas, then page.mouse.wheel) this crate is
    // expected to grow into.

    // 5. Zoom in
    let zoom_in = page.locator("[aria-label='Zoom in']");
    zoom_in.click(None).await?;

    // 6. Toggle the traffic layer
    let layers_button = page.locator("[aria-label='Layers']");
    layers_button.click(None).await?;
    let traffic_option = page.locator("text=Traffic");
    traffic_option.click(None).await?;

    browser.close().await?;
    Ok(())
}
`}</code
        ></pre>
    </CodeBlock>
  </Details>
</section>

<Separator label="Section break" />

<section class="section prose">
  <p style="display: flex; gap: 1rem; flex-wrap: wrap;">
    <CallToAction class="button button-primary" href="/examples/">Back to Examples</CallToAction>
    <CallToAction class="button button-secondary" href="/examples/google-search/"
      >Google Search Examples</CallToAction
    >
  </p>
</section>
