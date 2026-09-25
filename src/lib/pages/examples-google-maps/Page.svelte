<script lang="ts">
  import {
    SectionHeading,
    Separator,
    InformationCallout,
    CallToAction,
    CodeBlock,
    Details
  } from 'lily-design-system-svelte-headless';
  import { localeHref } from '$lib/i18n/paths';
  import type { Locale } from '$lib/i18n/locales';

  let { locale }: { locale: Locale } = $props();

  // Code samples (including code comments) are never translated, in any
  // locale — see spec/locales/index.md and src/lib/pages/given-when-then/Page.svelte.
  type Messages = {
    title: string;
    metaDescription: string;
    heading: string;
    intro: string;
    section1Heading: string;
    calloutLabel: string;
    calloutP1Pre: string;
    tosLinkText: string;
    calloutP1Mid: string;
    patternsLabel: string;
    calloutP1Post: string;
    calloutP2A: string;
    calloutP2B: string;
    calloutP2C: string;
    calloutP2D: string;
    calloutP2E: string;
    strongLessonLabel: string;
    calloutP2F: string;
    section2Heading: string;
    section2Intro: string;
    item1Strong: string;
    item1Pre: string;
    item1Post: string;
    item2Strong: string;
    item2A: string;
    item2B: string;
    item2C: string;
    item2D: string;
    item3Strong: string;
    item3Rest: string;
    item4Strong: string;
    item4Rest: string;
    item5Strong: string;
    item5A: string;
    item5B: string;
    item5C: string;
    item6Strong: string;
    item6A: string;
    item6B: string;
    seleniumIntroA: string;
    seleniumIntroB: string;
    playwrightIntroA: string;
    playwrightIntroB: string;
    playwrightIntroC: string;
    playwrightIntroD: string;
    playwrightIntroE: string;
    backToExamples: string;
    googleSearchExamplesLinkText: string;
  };

  const EN_001: Messages = {
    title: 'Google Maps Examples',
    metaDescription:
      'Six interactions with Google Maps — visit, search, click a result, scroll, zoom, and toggle a layer — implemented six ways: Selenium and Playwright, each in JavaScript, Python, and Rust.',
    heading: 'Google Maps Examples',
    intro:
      'This page shows six interactions with Google Maps — visit, search, click a link or result, scroll, zoom, and toggle a layer — implemented six ways: two browser-automation tools (Selenium and Playwright) times three languages (JavaScript, Python, Rust).',
    section1Heading: 'Two things to know before you start',
    calloutLabel: 'Before you run any of this',
    calloutP1Pre: "Google's ",
    tosLinkText: 'Terms of Service',
    calloutP1Mid: ' restrict automated querying of its services. The code below teaches ',
    patternsLabel: 'patterns',
    calloutP1Post:
      ' — locator strategies and interaction techniques — not scripts meant to run repeatedly against the live Google Maps.',
    calloutP2A:
      'Google Maps is also a much harder automation target than a typical page. Most of the map itself renders to a ',
    calloutP2B:
      ' element (or WebGL), so you generally cannot "find" a street or a pin the way you find a paragraph of text — you interact with the ',
    calloutP2C:
      ' via coordinates and mouse events (click at an x/y position, scroll-wheel over the canvas element) rather than finding a DOM element for it. The UI chrome around the canvas — search box, zoom buttons, layers menu — is regular DOM, and usefully, Google gives most of that chrome real, relatively stable ',
    calloutP2D: ' attributes for accessibility. That makes accessible-name locators (',
    calloutP2E:
      ') a much better choice than generated or hashed CSS class names, which change on every Maps deploy. This is the single most transferable lesson on this page: ',
    strongLessonLabel:
      "prefer accessible-name locators over class-name locators whenever a site's markup isn't a public API you control",
    calloutP2F: ' — that is good practice everywhere, not just here.',
    section2Heading: 'The six interactions',
    section2Intro:
      'Every example below implements the same six steps. They are defined once here rather than repeated in each code sample:',
    item1Strong: 'Visit',
    item1Pre: ' — navigate to ',
    item1Post: '.',
    item2Strong: 'Search',
    item2A: ' — locate the search box (has ',
    item2B:
      ' in current Google Maps markup — note this may drift over time like any third-party site) and type a query, e.g. ',
    item2C: ', then submit (Enter, or the search button, which typically has ',
    item2D: ').',
    item3Strong: 'Click a link/result',
    item3Rest:
      ' — click the first search result in the results panel (results are normally DOM list items, not canvas — findable by role or text even though the map itself is canvas).',
    item4Strong: 'Scroll',
    item4Rest:
      " — simulate a scroll/pan over the map canvas: for tools with a real mouse-wheel/scroll API, dispatch a wheel event or scroll gesture over the canvas element's bounding box, not over the whole page.",
    item5Strong: 'Zoom',
    item5A: ' — click the zoom-in button (',
    item5B: ') or zoom-out button (',
    item5C:
      ') — a much more reliable approach than trying to pinch or scroll-zoom the canvas programmatically, and worth calling out as the pragmatic choice.',
    item6Strong: 'Activate a layer',
    item6A: ' — open the Layers panel (button ',
    item6B:
      '), then choose a layer such as "Traffic" (typically a labelled option or button once the panel is open — described below as "the traffic layer toggle" without overclaiming an exact stable selector).',
    seleniumIntroA:
      'All three languages below use aria-label-based locators throughout, per the lesson above. The Rust example uses ',
    seleniumIntroB:
      ", the de facto Selenium/WebDriver client for Rust — there is no official one, and its name nods to selenium's atomic number, 34.",
    playwrightIntroA:
      'Playwright ships official bindings for JavaScript, Python, .NET, and Java. Rust is community-maintained: ',
    playwrightIntroB: ' (actively developed by ',
    playwrightIntroC: ', pre-1.0) is the example below. The older ',
    playwrightIntroD: ' crate, published on crates.io as ',
    playwrightIntroE: ', has been abandoned since 2022.',
    backToExamples: 'Back to Examples',
    googleSearchExamplesLinkText: 'Google Search Examples'
  };

  // No British/American/Oxford spelling divergence occurs in this page's
  // vocabulary, so all four English locales share one copy. See
  // spec/locales/index.md.
  const CY: Messages = {
    title: 'Enghreifftiau Mapiau Google',
    metaDescription:
      "Chwe rhyngweithiad â Mapiau Google — ymweld, chwilio, clicio canlyniad, sgrolio, chwyddo, a newid haen — wedi'u gweithredu chwe ffordd: Selenium a Playwright, pob un yn JavaScript, Python, a Rust.",
    heading: 'Enghreifftiau Mapiau Google',
    intro:
      "Mae'r dudalen hon yn dangos chwe rhyngweithiad â Mapiau Google — ymweld, chwilio, clicio dolen neu ganlyniad, sgrolio, chwyddo, a newid haen — wedi'u gweithredu chwe ffordd: dau offeryn awtomeiddio porwr (Selenium a Playwright) wedi'u lluosi â thair iaith (JavaScript, Python, Rust).",
    section1Heading: "Dau beth i'w gwybod cyn i chi ddechrau",
    calloutLabel: 'Cyn i chi redeg unrhyw beth o hyn',
    calloutP1Pre: 'Mae ',
    tosLinkText: 'Telerau Gwasanaeth',
    calloutP1Mid: " Google yn cyfyngu ymholi awtomataidd o'i wasanaethau. Mae'r cod isod yn dysgu ",
    patternsLabel: 'patrymau',
    calloutP1Post:
      " — strategaethau lleoli a thechnegau rhyngweithio — nid sgriptiau i'w rhedeg dro ar ôl tro yn erbyn Mapiau Google byw.",
    calloutP2A:
      "Mae Mapiau Google hefyd yn darged awtomeiddio llawer anoddach na thudalen nodweddiadol. Mae'r rhan fwyaf o'r map ei hun yn rendro i elfen ",
    calloutP2B:
      ' (neu WebGL), felly fel arfer ni allwch "ddod o hyd" i stryd neu bin fel y byddech yn dod o hyd i baragraff o destun — rydych yn rhyngweithio â\'r ',
    calloutP2C:
      " drwy gyfesurynnau a digwyddiadau llygoden (clicio ar safle x/y, olwyn sgrolio dros yr elfen canfas) yn hytrach na dod o hyd i elfen DOM ar ei chyfer. Mae'r cregyn UI o amgylch y canfas — blwch chwilio, botymau chwyddo, dewislen haenau — yn DOM cyffredin, ac yn ddefnyddiol, mae Google yn rhoi priodoleddau ",
    calloutP2D:
      " go iawn, cymharol sefydlog i'r rhan fwyaf o'r cregyn hwnnw ar gyfer hygyrchedd. Mae hynny'n gwneud lleolyddion enw-hygyrch (",
    calloutP2E:
      ") yn ddewis llawer gwell nag enwau dosbarth CSS a gynhyrchwyd neu a hashiwyd, sy'n newid ar bob defnydd o Maps. Dyma'r wers fwyaf trosglwyddadwy ar y dudalen hon: ",
    strongLessonLabel:
      "ffafriwch leolyddion enw-hygyrch dros leolyddion enw-dosbarth pryd bynnag nad yw marcio safle'n API cyhoeddus rydych chi'n ei reoli",
    calloutP2F: " — mae hynny'n arfer da ym mhobman, nid dim ond yma.",
    section2Heading: 'Y chwe rhyngweithiad',
    section2Intro:
      "Mae pob enghraifft isod yn gweithredu'r un chwe cham. Fe'u diffinnir unwaith yma yn hytrach na'u hailadrodd ym mhob sampl cod:",
    item1Strong: 'Ymweld',
    item1Pre: ' — llywiwch i ',
    item1Post: '.',
    item2Strong: 'Chwilio',
    item2A: ' — lleolwch y blwch chwilio (mae ganddo ',
    item2B:
      " ym marcio presennol Mapiau Google — sylwer y gallai hyn ddrifftio dros amser fel unrhyw safle trydydd parti) a theipiwch ymholiad, e.e. ",
    item2C: ", yna cyflwynwch (Enter, neu'r botwm chwilio, sydd fel arfer â ",
    item2D: ').',
    item3Strong: 'Clicio dolen/canlyniad',
    item3Rest:
      " — cliciwch ar y canlyniad chwilio cyntaf yn y panel canlyniadau (mae canlyniadau fel arfer yn eitemau rhestr DOM, nid canfas — y gellir dod o hyd iddynt yn ôl rôl neu destun er bod y map ei hun yn ganfas).",
    item4Strong: 'Sgrolio',
    item4Rest:
      " — efelychwch sgrolio/panio dros ganfas y map: ar gyfer offer sydd ag API olwyn-llygoden/sgrolio go iawn, anfonwch ddigwyddiad olwyn neu ystum sgrolio dros flwch ffiniol elfen y canfas, nid dros y dudalen gyfan.",
    item5Strong: 'Chwyddo',
    item5A: ' — cliciwch y botwm chwyddo-i-mewn (',
    item5B: ") neu'r botwm chwyddo-allan (",
    item5C:
      ") — dull llawer mwy dibynadwy na cheisio pinsio neu sgrolio-chwyddo'r canfas yn rhaglenedig, ac yn werth ei nodi fel y dewis pragmatig.",
    item6Strong: 'Actifadu haen',
    item6A: ' — agorwch y panel Haenau (botwm ',
    item6B:
      '), yna dewiswch haen fel "Traffic" (fel arfer opsiwn neu fotwm wedi’i labelu unwaith y bydd y panel ar agor — a ddisgrifir isod fel "switsh yr haen draffig" heb honni gormod am ddewisydd union sefydlog).',
    seleniumIntroA:
      "Mae'r tair iaith isod i gyd yn defnyddio lleolyddion sy'n seiliedig ar aria-label, yn unol â'r wers uchod. Mae'r enghraifft Rust yn defnyddio ",
    seleniumIntroB:
      ", y cleient Selenium/WebDriver de facto ar gyfer Rust — does dim un swyddogol, ac mae ei enw'n cyfeirio at rif atomig selenium, 34.",
    playwrightIntroA:
      "Mae Playwright yn cludo rhwymiadau swyddogol ar gyfer JavaScript, Python, .NET, a Java. Cynhelir Rust gan y gymuned: ",
    playwrightIntroB: " (wedi'i ddatblygu'n weithredol gan ",
    playwrightIntroC: ", cyn-1.0) yw'r enghraifft isod. Mae'r crât hŷn ",
    playwrightIntroD: ', a gyhoeddwyd ar crates.io fel ',
    playwrightIntroE: ", wedi'i adael ers 2022.",
    backToExamples: "Yn ôl i'r Enghreifftiau",
    googleSearchExamplesLinkText: 'Enghreifftiau Chwilio Google'
  };

  const ZH: Messages = {
    title: '谷歌地图示例',
    metaDescription:
      '与谷歌地图的六种交互——访问、搜索、点击结果、滚动、缩放，以及切换图层——用六种方式实现：Selenium 和 Playwright，各自使用 JavaScript、Python 和 Rust。',
    heading: '谷歌地图示例',
    intro:
      '这个页面展示与谷歌地图的六种交互——访问、搜索、点击链接或结果、滚动、缩放，以及切换图层——用六种方式实现：两种浏览器自动化工具（Selenium 和 Playwright）乘以三种语言（JavaScript、Python、Rust）。',
    section1Heading: '开始之前需要了解的两件事',
    calloutLabel: '在运行这些代码之前',
    calloutP1Pre: '谷歌的',
    tosLinkText: '服务条款',
    calloutP1Mid: '限制对其服务进行自动化查询。下面的代码讲解的是',
    patternsLabel: '模式',
    calloutP1Post: '——定位策略和交互技巧——而不是打算反复针对真实谷歌地图运行的脚本。',
    calloutP2A: '谷歌地图也是一个比典型页面难得多的自动化目标。地图本身大部分渲染在一个',
    calloutP2B:
      '元素（或 WebGL）上，因此你通常无法像查找一段文字那样“找到”一条街道或一个图钉——你是通过坐标和鼠标事件（在某个 x/y 坐标上点击、在画布元素上滚动鼠标滚轮）与',
    calloutP2C: '交互，而不是为它查找一个 DOM 元素。画布周围的 UI 外壳——搜索框、缩放按钮、图层菜单——则是普通的 DOM，而且很实用的是，谷歌为这套外壳中的大多数部分都提供了真实、相对稳定的',
    calloutP2D: '属性以支持无障碍访问。这使得基于可访问名称的定位器（',
    calloutP2E:
      '）比生成或哈希化的 CSS 类名更好，因为后者在地图每次部署时都会改变。这是这个页面上最具通用性的一条经验：',
    strongLessonLabel: '只要一个网站的标记不是你能控制的公共 API，就优先使用基于可访问名称的定位器，而不是基于类名的定位器',
    calloutP2F: '——这是一个在任何地方都适用的良好实践，不仅限于这里。',
    section2Heading: '六种交互',
    section2Intro: '下面的每个示例都实现了同样的六个步骤。这里统一定义一次，而不是在每份代码示例中重复：',
    item1Strong: '访问',
    item1Pre: '——导航到',
    item1Post: '。',
    item2Strong: '搜索',
    item2A: '——找到搜索框（在当前的谷歌地图标记中带有',
    item2B: '——注意这一点可能会像任何第三方网站一样随时间漂移），并输入查询内容，例如',
    item2C: '，然后提交（回车键，或搜索按钮，通常带有',
    item2D: '）。',
    item3Strong: '点击链接/结果',
    item3Rest:
      '——点击结果面板中的第一个搜索结果（结果通常是 DOM 列表项，而不是画布——即使地图本身是画布，也可以按角色或文字找到它们）。',
    item4Strong: '滚动',
    item4Rest:
      '——在地图画布上模拟滚动/平移操作：对于拥有真实鼠标滚轮/滚动 API 的工具，向画布元素的边界框（而不是整个页面）派发一个滚轮事件或滚动手势。',
    item5Strong: '缩放',
    item5A: '——点击放大按钮（',
    item5B: '）或缩小按钮（',
    item5C: '）——这比试图以编程方式对画布进行双指缩放或滚轮缩放要可靠得多，值得作为务实的选择单独指出。',
    item6Strong: '激活一个图层',
    item6A: '——打开图层面板（按钮',
    item6B:
      '），然后选择一个图层，例如“Traffic”（面板打开后通常是一个带标签的选项或按钮——下文将其描述为“交通图层开关”，而不去过度声称一个确切、稳定的选择器）。',
    seleniumIntroA: '按照上面的经验，下面所有三种语言都统一使用基于 aria-label 的定位器。Rust 示例使用',
    seleniumIntroB: '，这是事实上的 Rust 版 Selenium/WebDriver 客户端——并没有官方版本，它的名字致敬了硒的原子序数 34。',
    playwrightIntroA: 'Playwright 提供官方的 JavaScript、Python、.NET 和 Java 绑定。Rust 版由社区维护：',
    playwrightIntroB: '（由',
    playwrightIntroC: '积极开发，尚在 1.0 之前）是下面用到的示例。较旧的',
    playwrightIntroD: ' crate，以',
    playwrightIntroE: '发布在 crates.io 上，自 2022 年以来已被放弃维护。',
    backToExamples: '返回示例',
    googleSearchExamplesLinkText: '谷歌搜索示例'
  };

  const MESSAGES: Record<Locale, Messages> = {
    'en-001': EN_001,
    'en-gb': EN_001,
    'en-gb-oxendict': EN_001,
    'en-us': EN_001,
    'cy-gb': CY,
    'cy-001': CY,
    'zh-cn': ZH
  };

  const m = $derived(MESSAGES[locale]);
</script>

<svelte:head>
  <title>{m.title} — Testing Examples</title>
  <meta name="description" content={m.metaDescription} />
</svelte:head>

<div class="page-header">
  <h1>{m.heading}</h1>
  <p>{m.intro}</p>
</div>

<section class="section prose">
  <SectionHeading class="section-heading-start" heading={m.section1Heading} level={2} />

  <InformationCallout label={m.calloutLabel}>
    <p>
      {m.calloutP1Pre}<a href="https://www.google.com/policies/terms/">{m.tosLinkText}</a
      >{m.calloutP1Mid}<em>{m.patternsLabel}</em>{m.calloutP1Post}
    </p>
    <p>
      {m.calloutP2A}<code>&lt;canvas&gt;</code>{m.calloutP2B}<em>canvas</em>{m.calloutP2C}<code
        >aria-label</code
      >{m.calloutP2D}<code>[aria-label="..."]</code>{m.calloutP2E}<strong>{m.strongLessonLabel}</strong
      >{m.calloutP2F}
    </p>
  </InformationCallout>
</section>

<Separator label="Section break" />

<section class="section prose">
  <SectionHeading class="section-heading-start" heading={m.section2Heading} level={2} />

  <p>{m.section2Intro}</p>

  <ol>
    <li>
      <strong>{m.item1Strong}</strong>{m.item1Pre}<code>https://www.google.com/maps</code>{m.item1Post}
    </li>
    <li>
      <strong>{m.item2Strong}</strong>{m.item2A}<code>aria-label="Search Google Maps"</code
      >{m.item2B}<code>"Cardiff Castle"</code>{m.item2C}<code>aria-label="Search"</code>{m.item2D}
    </li>
    <li><strong>{m.item3Strong}</strong>{m.item3Rest}</li>
    <li><strong>{m.item4Strong}</strong>{m.item4Rest}</li>
    <li>
      <strong>{m.item5Strong}</strong>{m.item5A}<code>aria-label="Zoom in"</code>{m.item5B}<code
        >aria-label="Zoom out"</code
      >{m.item5C}
    </li>
    <li>
      <strong>{m.item6Strong}</strong>{m.item6A}<code>aria-label="Layers"</code>{m.item6B}
    </li>
  </ol>
</section>

<Separator label="Section break" />

<section class="section prose">
  <SectionHeading class="section-heading-start" heading="Selenium" level={2} />

  <p>
    {m.seleniumIntroA}<a href="https://crates.io/crates/thirtyfour"><code>thirtyfour</code></a
    >{m.seleniumIntroB}
  </p>

  <Details summary="Selenium + JavaScript">
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

  <Details summary="Selenium + Python">
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

  <Details summary="Selenium + Rust">
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
    heading="Playwright"
    level={2}
  />

  <p>
    {m.playwrightIntroA}<a href="https://github.com/padamson/playwright-rust"><code>playwright-rs</code></a
    >{m.playwrightIntroB}<code>padamson/playwright-rust</code>{m.playwrightIntroC}<code
      >octaltree/playwright-rust</code
    >{m.playwrightIntroD}<code>playwright</code>{m.playwrightIntroE}
  </p>

  <Details summary="Playwright + JavaScript">
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

  <Details summary="Playwright + Python">
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

  <Details summary="Playwright + Rust">
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
    <CallToAction class="button button-primary" href={localeHref(locale, 'examples')}>{m.backToExamples}</CallToAction>
    <CallToAction class="button button-secondary" href={localeHref(locale, 'examples-google-search')}
      >{m.googleSearchExamplesLinkText}</CallToAction
    >
  </p>
</section>
