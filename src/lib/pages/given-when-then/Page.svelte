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

  // Given-When-Then / Gherkin is BDD vocabulary, not ordinary prose, so
  // it — and every code sample below, comments included — stays in
  // English for every locale. See spec/locales/index.md.
  type Messages = {
    title: string;
    metaDescription: string;
    heading: string;
    intro: string;
    whatHeading: string;
    whatIsLabel: string;
    whatP1: string;
    whatP2: string;
    scenarioHeading: string;
    scenarioIntro: string;
    scenarioBody: string;
    readNotRunLabel: string;
    readNotRunPre: string;
    googleSearchExamplesLinkText: string;
    readNotRunPost: string;
    seleniumHeading: string;
    playwrightHeading: string;
    backHome: string;
    seeMoreExamples: string;
  };

  const EN_001: Messages = {
    title: 'Given-When-Then Examples',
    metaDescription:
      'One scenario written as a Given-When-Then (Gherkin) sentence, then shown as the equivalent Selenium and Playwright code in JavaScript and Python.',
    heading: 'Given-When-Then Examples',
    intro:
      'One plain-language scenario, written the way a non-programmer would describe it, next to the actual code that carries it out — in four combinations of tool and language.',
    whatHeading: 'What is Given-When-Then?',
    whatIsLabel: 'is a way of writing a test scenario in plain sentences instead of code:',
    whatP1:
      'some starting state, When something happens, Then some outcome is true. It comes from behaviour-driven development (BDD), and the specific plain-text syntax for it is usually called Gherkin.',
    whatP2:
      'The point isn’t to replace real test code — it’s to give a team a shared sentence everyone can agree on before anyone writes the automation for it: a product owner, a tester, and a developer can all read "Given I am on the site, When I search, Then I see results" and agree that’s the behaviour that matters, without any of them needing to read JavaScript or Python first. The code underneath — however it’s written, in whichever tool — is what actually proves that sentence stays true.',
    scenarioHeading: 'The scenario',
    scenarioIntro: 'One scenario, written in Gherkin:',
    scenarioBody:
      'Below, the same three lines are carried out four ways: two browser automation tools (Selenium and Playwright), each in two languages (JavaScript and Python). Each line of code is commented with which Given/When/Then step it belongs to, so you can trace the plain sentence straight into the code that implements it.',
    readNotRunLabel: "Read, don't repeatedly run",
    readNotRunPre: 'These four examples target google.com, the same as this site’s ',
    googleSearchExamplesLinkText: 'Google Search examples',
    readNotRunPost:
      ' — and the same caution applies: Google’s Terms of Service restrict automated querying of Google Search, so treat the code below as reading material for the pattern, not as scripts to run repeatedly against the live site. If you want to try this same Given/When/Then shape hands-on, point the same steps at this site’s own home page instead.',
    seleniumHeading: 'Selenium',
    playwrightHeading: 'Playwright',
    backHome: 'Back to home',
    seeMoreExamples: 'See more examples'
  };

  const CY: Messages = {
    title: 'Enghreifftiau Given-When-Then',
    metaDescription:
      "Un senario wedi'i hysgrifennu fel brawddeg Given-When-Then (Gherkin), yna ei dangos fel y cod Selenium a Playwright cyfatebol mewn JavaScript a Python.",
    heading: 'Enghreifftiau Given-When-Then',
    intro:
      "Un senario iaith blaen, wedi'i hysgrifennu fel y byddai rhywun nad yw'n rhaglennydd yn ei disgrifio, wrth ymyl y cod gwirioneddol sy'n ei chyflawni — mewn pedwar cyfuniad o offeryn ac iaith.",
    whatHeading: 'Beth yw Given-When-Then?',
    whatIsLabel: "yw ffordd o ysgrifennu senario prawf mewn brawddegau plaen yn lle cod: Given",
    whatP1:
      "(o gyflwr cychwynnol penodol), When (mae rhywbeth yn digwydd), Then (mae canlyniad penodol yn wir). Daw o ddatblygiad wedi'i yrru gan ymddygiad (BDD), a gelwir y gystrawen testun plaen benodol ar ei chyfer fel arfer yn Gherkin.",
    whatP2:
      "Nid y bwriad yw disodli cod prawf go iawn — y bwriad yw rhoi i dîm frawddeg gyffredin y gall pawb gytuno arni cyn i unrhyw un ysgrifennu'r awtomeiddio ar ei chyfer: gall perchennog cynnyrch, profwr, a datblygwr i gyd ddarllen \"Given I am on the site, When I search, Then I see results\" a chytuno mai dyna'r ymddygiad sy'n bwysig, heb i'r un ohonynt orfod darllen JavaScript na Python yn gyntaf. Y cod oddi tano — sut bynnag y'i hysgrifennir, ym mha offeryn bynnag — yw'r hyn sy'n profi mewn gwirionedd bod y frawddeg honno'n aros yn wir.",
    scenarioHeading: "Y senario",
    scenarioIntro: 'Un senario, wedi’i hysgrifennu yn Gherkin:',
    scenarioBody:
      "Isod, cyflawnir yr un tair llinell bedair ffordd: dau offeryn awtomeiddio porwr (Selenium a Playwright), pob un mewn dwy iaith (JavaScript a Python). Mae pob llinell o god wedi'i hanodi â pha gam Given/When/Then y mae'n perthyn iddo, fel y gallwch olrhain y frawddeg blaen yn syth i mewn i'r cod sy'n ei gweithredu.",
    readNotRunLabel: "Darllenwch, peidiwch â rhedeg dro ar ôl tro",
    readNotRunPre: "Mae'r pedair enghraifft hyn yn targedu google.com, yr un peth ag ",
    googleSearchExamplesLinkText: 'enghreifftiau Chwilio Google',
    readNotRunPost:
      " y safle hwn — ac mae'r un rhybudd yn berthnasol: mae Telerau Gwasanaeth Google yn cyfyngu ymholi awtomataidd o Google Search, felly trinwch y cod isod fel deunydd darllen ar gyfer y patrwm, nid fel sgriptiau i'w rhedeg dro ar ôl tro yn erbyn y safle byw. Os hoffech roi cynnig ymarferol ar yr un siâp Given/When/Then, anelwch yr un camau at dudalen gartref y safle hwn ei hun yn lle hynny.",
    seleniumHeading: 'Selenium',
    playwrightHeading: 'Playwright',
    backHome: "Yn ôl i'r hafan",
    seeMoreExamples: 'Gweld mwy o enghreifftiau'
  };

  const ZH: Messages = {
    title: 'Given-When-Then 示例',
    metaDescription:
      '一个场景先写成 Given-When-Then（Gherkin）句子，再展示为等价的 JavaScript 和 Python 版本的 Selenium 与 Playwright 代码。',
    heading: 'Given-When-Then 示例',
    intro:
      '一个用通俗语言描述的场景，写成非程序员会使用的方式，与真正执行它的代码并排展示——涵盖四种工具与语言的组合。',
    whatHeading: '什么是 Given-When-Then？',
    whatIsLabel: '是一种用通俗句子而不是代码来编写测试场景的方式：Given',
    whatP1:
      '（某个初始状态），When（发生了某件事），Then（某个结果为真）。它源自行为驱动开发（BDD），其特定的纯文本语法通常被称为 Gherkin。',
    whatP2:
      '这样做的目的不是取代真正的测试代码——而是在任何人为它编写自动化之前，给团队一个大家都能认同的共同句子：产品负责人、测试人员和开发者都能读懂 "Given I am on the site, When I search, Then I see results"，并认同这就是重要的行为，而不需要任何人先去读 JavaScript 或 Python。而底层的代码——不论用什么方式、哪种工具写成——才是真正证明这句话始终成立的东西。',
    scenarioHeading: '场景',
    scenarioIntro: '一个用 Gherkin 写成的场景：',
    scenarioBody:
      '下面用四种方式实现了同样的三行内容：两种浏览器自动化工具（Selenium 和 Playwright），各自使用两种语言（JavaScript 和 Python）。每一行代码都注明了它属于哪个 Given/When/Then 步骤，方便你把这句通俗的话直接对应到实现它的代码上。',
    readNotRunLabel: '请阅读，不要反复运行',
    readNotRunPre: '这四个示例的目标是 google.com，与本站的',
    googleSearchExamplesLinkText: '谷歌搜索示例',
    readNotRunPost:
      '相同——同样的注意事项也适用：谷歌的服务条款限制对谷歌搜索进行自动化查询，因此请把下面的代码当作了解模式的阅读材料，而不是反复对真实网站运行的脚本。如果你想亲自动手体验同样的 Given/When/Then 结构，可以把同样的步骤指向本站自己的主页。',
    seleniumHeading: 'Selenium',
    playwrightHeading: 'Playwright',
    backHome: '返回首页',
    seeMoreExamples: '查看更多示例'
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
  <SectionHeading class="section-heading-start" heading={m.whatHeading} level={2} />

  <p>
    <strong>Given-When-Then</strong> {m.whatIsLabel} <strong>{m.whatP1}</strong>
  </p>

  <p>{m.whatP2}</p>
</section>

<Separator label="Section break" />

<section class="section prose">
  <SectionHeading class="section-heading-start" heading={m.scenarioHeading} level={2} />

  <p>{m.scenarioIntro}</p>

  <CodeBlock label="Gherkin">
    <pre><code>{`Given I am on https://google.com
When I type in the search box and click submit
Then I see search results
`}</code></pre>
  </CodeBlock>

  <p>{m.scenarioBody}</p>

  <InformationCallout label={m.readNotRunLabel}>
    <p>
      {m.readNotRunPre}<a href={localeHref(locale, 'examples-google-search')}
        >{m.googleSearchExamplesLinkText}</a
      >{m.readNotRunPost}
    </p>
  </InformationCallout>
</section>

<Separator label="Section break" />

<section class="section prose">
  <SectionHeading class="section-heading-start" heading={m.seleniumHeading} level={2} />

  <Details summary="Selenium + JavaScript" open>
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

  <Details summary="Selenium + Python">
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
  <SectionHeading class="section-heading-start" heading={m.playwrightHeading} level={2} />

  <Details summary="Playwright + JavaScript" open>
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

  <Details summary="Playwright + Python">
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
    <CallToAction class="button button-primary" href={localeHref(locale, 'home')}
      >{m.backHome}</CallToAction
    >
    <CallToAction class="button button-secondary" href={localeHref(locale, 'examples')}
      >{m.seeMoreExamples}</CallToAction
    >
  </p>
</section>
