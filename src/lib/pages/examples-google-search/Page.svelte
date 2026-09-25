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
    scenarioPre: string;
    strongBrowse: string;
    scenarioMid1: string;
    strongFollow: string;
    scenarioMid2: string;
    strongSearch: string;
    scenarioMid3: string;
    strongClick: string;
    scenarioPost: string;
    calloutLabel: string;
    readBeforePre: string;
    tosLinkText: string;
    readBeforeMid1: string;
    patternsLabel: string;
    readBeforeMid2: string;
    readBeforeMid3: string;
    homePageLinkText: string;
    readBeforePost: string;
    fourInteractionsHeading: string;
    fourInteractionsIntro: string;
    item1Strong: string;
    item1Pre: string;
    item1Post: string;
    item2Strong: string;
    item2Pre: string;
    item2Post: string;
    item3Strong: string;
    item3Rest: string;
    item4Strong: string;
    item4Rest: string;
    caveatA: string;
    caveatB: string;
    caveatC: string;
    caveatD: string;
    caveatE: string;
    caveatF: string;
    caveatG: string;
    caveatH: string;
    seleniumIntro: string;
    seleniumRustA: string;
    seleniumRustB: string;
    seleniumRustC: string;
    playwrightIntro: string;
    pwRustA: string;
    pwRustB: string;
    pwRustC: string;
    pwRustD: string;
    pwRustE: string;
    backToExamples: string;
    googleMapsExamplesLinkText: string;
  };

  const EN_001: Messages = {
    title: 'Google Search Examples',
    metaDescription:
      'The same browse, search, submit, and follow-link interactions against Google Search, implemented six ways: Selenium and Playwright, each in JavaScript, Python, and Rust.',
    heading: 'Google Search Examples',
    intro:
      'One familiar scenario — browse to a site, use its search box, submit the search, follow a result link — implemented six ways.',
    section1Heading: 'The same four interactions, six implementations',
    scenarioPre: 'This page shows one scenario — ',
    strongBrowse: 'browse to the site',
    scenarioMid1: ', ',
    strongFollow: 'follow a link',
    scenarioMid2: ', ',
    strongSearch: 'use the search box',
    scenarioMid3: ', and ',
    strongClick: 'click a button',
    scenarioPost:
      " — implemented six ways: two browser-automation tools (Selenium and Playwright), each in three languages (JavaScript, Python, Rust). The target for all six is Google Search, because it is a search box and results page that almost every reader already knows how to use, which makes it easy to see what each tool's syntax is doing without having to first learn the page itself.",
    calloutLabel: 'Read before running any of these',
    readBeforePre: "Google's ",
    tosLinkText: 'Terms of Service',
    readBeforeMid1:
      ' restrict automated querying of Google Search. These six examples exist to show the syntax and interaction ',
    patternsLabel: 'patterns',
    readBeforeMid2:
      ' of each tool side by side — they are not meant to be run repeatedly, or at all, against the live ',
    readBeforeMid3: '. If you want to practise these same patterns hands-on, point them at ',
    homePageLinkText: "this site's own home page",
    readBeforePost:
      " instead, which was built exactly for that: stable ids, names, classes, and text that don't shift under you.",
    fourInteractionsHeading: 'The four interactions, defined once',
    fourInteractionsIntro: 'Rather than repeat these per example, here is what each of the six scripts below does:',
    item1Strong: 'Browse to the site',
    item1Pre: ' — navigate to ',
    item1Post: '.',
    item2Strong: 'Use the search box',
    item2Pre: ' — locate the search input and type a query, e.g. ',
    item2Post: '.',
    item3Strong: 'Click a button / submit',
    item3Rest: ' — press Enter, or find the submit button and click it.',
    item4Strong: 'Follow a link',
    item4Rest: ' — after results load, find and click the first organic result link.',
    caveatA:
      "A caveat worth stating plainly rather than glossing over: Google's exact markup for the search box has drifted over time, and will likely keep drifting. It has historically been an ",
    caveatB: ' and is currently often a ',
    caveatC: ', but in both cases it has commonly carried ',
    caveatD: ', so the examples below locate it with a selector like ',
    caveatE: ' (or, for tools with a typed-attribute locator, ',
    caveatF:
      '). That is a real illustration of why name/tag selectors are brittle: they can silently stop matching when a site’s markup changes underneath them. Where a tool supports locating by accessible role and name instead (for example a ',
    caveatG:
      ' with a visible "Search" label), that is the more robust choice, and is noted in the relevant example. The submit button has historically carried ',
    caveatH:
      ', but it can be obscured by autocomplete suggestions the moment the search box gains focus, which is one reason pressing Enter after typing is generally more reliable than trying to click it.',
    seleniumIntro:
      "Selenium is the longest-established cross-language browser automation project — its WebDriver protocol is the same one several of the other tools on this page speak underneath.",
    seleniumRustA: "There's no official Rust binding from the Selenium project itself — ",
    seleniumRustB:
      " (whose name nods to selenium's atomic number, 34) is the de facto Selenium/WebDriver client for Rust. It needs a running ",
    seleniumRustC:
      ' (or similar) at the given URL, the same way the two examples above need a local driver/browser too.',
    playwrightIntro:
      'Playwright has official bindings in JavaScript, Python, .NET, and Java; Rust support is community-maintained rather than official.',
    pwRustA: 'Be careful which crate you install. ',
    pwRustB: ' (',
    pwRustC:
      ") is actively maintained but still pre-1.0 and stabilising its API — it's the one used below. The older crate published on crates.io simply as ",
    pwRustD: ' (',
    pwRustE: ") has been abandoned since 2022; don't reach for that one.",
    backToExamples: 'Back to examples',
    googleMapsExamplesLinkText: 'Google Maps examples'
  };

  // en-us: "practise" (verb) → "practice", and the -ise/-ize pair
  // "stabilising" → "stabilizing". en-gb-oxendict: only the -ise/-ize pair
  // differs ("stabilising" → "stabilizing"); "practise" is unaffected by
  // the Oxford -ize preference, since verb/noun practise/practice is a
  // different spelling distinction. See spec/locales/index.md.
  const EN_US: Messages = {
    ...EN_001,
    readBeforeMid3: '. If you want to practice these same patterns hands-on, point them at ',
    pwRustC:
      ") is actively maintained but still pre-1.0 and stabilizing its API — it's the one used below. The older crate published on crates.io simply as "
  };

  const EN_GB_OXENDICT: Messages = {
    ...EN_001,
    pwRustC:
      ") is actively maintained but still pre-1.0 and stabilizing its API — it's the one used below. The older crate published on crates.io simply as "
  };

  const CY: Messages = {
    title: 'Enghreifftiau Chwilio Google',
    metaDescription:
      "Yr un rhyngweithiadau pori, chwilio, cyflwyno, a dilyn-dolen yn erbyn Google Search, wedi'u gweithredu chwe ffordd: Selenium a Playwright, pob un yn JavaScript, Python, a Rust.",
    heading: 'Enghreifftiau Chwilio Google',
    intro:
      "Un senario gyfarwydd — pori i safle, defnyddio'i flwch chwilio, cyflwyno'r chwiliad, dilyn dolen canlyniad — wedi'i gweithredu chwe ffordd.",
    section1Heading: 'Yr un pedwar rhyngweithiad, chwe gweithrediad',
    scenarioPre: "Mae'r dudalen hon yn dangos un senario — ",
    strongBrowse: "pori i'r safle",
    scenarioMid1: ', ',
    strongFollow: 'dilyn dolen',
    scenarioMid2: ', ',
    strongSearch: "defnyddio'r blwch chwilio",
    scenarioMid3: ', a ',
    strongClick: 'chlicio botwm',
    scenarioPost:
      " — wedi'u gweithredu chwe ffordd: dau offeryn awtomeiddio porwr (Selenium a Playwright), pob un mewn tair iaith (JavaScript, Python, Rust). Y targed ar gyfer y chwech yw Google Search, gan ei fod yn flwch chwilio a thudalen canlyniadau y mae bron pob darllenydd eisoes yn gwybod sut i'w defnyddio, sy'n ei gwneud hi'n hawdd gweld beth mae cystrawen pob offeryn yn ei wneud heb orfod dysgu'r dudalen ei hun yn gyntaf.",
    calloutLabel: "Darllenwch cyn rhedeg unrhyw un o'r rhain",
    readBeforePre: 'Mae ',
    tosLinkText: 'Telerau Gwasanaeth',
    readBeforeMid1:
      " Google yn cyfyngu ymholi awtomataidd o Google Search. Mae'r chwe enghraifft hyn yn bodoli i ddangos cystrawen a ",
    patternsLabel: 'phatrymau',
    readBeforeMid2:
      " rhyngweithio pob offeryn ochr yn ochr — dydyn nhw ddim wedi'u bwriadu i gael eu rhedeg dro ar ôl tro, nac o gwbl, yn erbyn y ",
    readBeforeMid3: " byw. Os hoffech ymarfer yr un patrymau hyn yn ymarferol, anelwch nhw at ",
    homePageLinkText: 'hafan y safle hwn ei hun',
    readBeforePost:
      " yn lle hynny, a adeiladwyd yn union ar gyfer hynny: ids, names, classes, a thestun sefydlog nad ydynt yn newid oddi tanoch.",
    fourInteractionsHeading: "Y pedwar rhyngweithiad, wedi'u diffinio unwaith",
    fourInteractionsIntro:
      "Yn hytrach na'u hailadrodd ym mhob enghraifft, dyma beth mae pob un o'r chwe sgript isod yn ei wneud:",
    item1Strong: "Pori i'r safle",
    item1Pre: ' — llywio i ',
    item1Post: '.',
    item2Strong: "Defnyddio'r blwch chwilio",
    item2Pre: " — lleoli'r mewnbwn chwilio a theipio ymholiad, e.e. ",
    item2Post: '.',
    item3Strong: 'Clicio botwm / cyflwyno',
    item3Rest: " — pwyswch Enter, neu ddod o hyd i'r botwm cyflwyno a'i glicio.",
    item4Strong: 'Dilyn dolen',
    item4Rest: " — ar ôl i'r canlyniadau lwytho, dewch o hyd i ddolen y canlyniad organig cyntaf a'i chlicio.",
    caveatA:
      "Mae'n werth nodi rhybudd yn blaen yn hytrach na'i anwybyddu: mae marcio union Google ar gyfer y blwch chwilio wedi drifftio dros amser, ac mae'n debygol o barhau i ddrifftio. Yn hanesyddol, mae wedi bod yn ",
    caveatB: ' ac ar hyn o bryd mae’n aml yn ',
    caveatC: ', ond yn y ddau achos mae wedi cario ',
    caveatD: " yn gyffredin, felly mae'r enghreifftiau isod yn ei leoli â dewisydd fel ",
    caveatE: " (neu, ar gyfer offer sydd â lleolydd priodoledd wedi'i deipio, ",
    caveatF:
      "). Mae hynny'n enghraifft go iawn o pam mae dewiswyr enw/tag yn fregus: gallant stopio cydweddu'n dawel pan fydd marcio safle'n newid oddi tanynt. Lle mae offeryn yn cefnogi lleoli yn ôl rôl ac enw hygyrch yn lle hynny (er enghraifft ",
    caveatG:
      ' ag arwydd "Search" gweladwy), dyna’r dewis mwy cadarn, ac fe’i nodir yn yr enghraifft berthnasol. Mae’r botwm cyflwyno wedi hanesyddol gario ',
    caveatH:
      ", ond gall gael ei guddio gan awgrymiadau awtogwblhau'r eiliad y bydd y blwch chwilio'n cael ffocws, sy'n un rheswm pam mae pwyso Enter ar ôl teipio fel arfer yn fwy dibynadwy na cheisio'i glicio.",
    seleniumIntro:
      "Selenium yw'r prosiect awtomeiddio porwr traws-iaith hynaf sydd wedi'i sefydlu — mae ei brotocol WebDriver yr un peth ag y mae sawl un o'r offer eraill ar y dudalen hon yn ei siarad oddi tano.",
    seleniumRustA: "Does dim rhwymiad Rust swyddogol gan brosiect Selenium ei hun — ",
    seleniumRustB:
      " (mae ei enw'n cyfeirio at rif atomig selenium, 34) yw'r cleient Selenium/WebDriver de facto ar gyfer Rust. Mae angen ",
    seleniumRustC:
      " (neu rywbeth tebyg) yn rhedeg ar y URL a roddwyd, yr un ffordd ag y mae angen gyrrwr/porwr lleol ar y ddwy enghraifft uchod hefyd.",
    playwrightIntro:
      "Mae gan Playwright rwymiadau swyddogol yn JavaScript, Python, .NET, a Java; cynhelir cefnogaeth Rust gan y gymuned yn hytrach nag yn swyddogol.",
    pwRustA: "Byddwch yn ofalus pa grât rydych chi'n ei osod. ",
    pwRustB: ' (',
    pwRustC:
      " sy'n cael ei gynnal yn weithredol ond sy'n dal cyn-1.0 ac yn sefydlogi ei API — dyna'r un a ddefnyddir isod. Mae'r crât hŷn, a gyhoeddwyd ar crates.io yn syml fel ",
    pwRustD: ' (',
    pwRustE: ") wedi'i adael ers 2022; peidiwch â mynd am hwnnw.",
    backToExamples: "Yn ôl i'r enghreifftiau",
    googleMapsExamplesLinkText: 'enghreifftiau Mapiau Google'
  };

  const ZH: Messages = {
    title: '谷歌搜索示例',
    metaDescription:
      '针对谷歌搜索的同样的浏览、搜索、提交和跟踪链接交互，用六种方式实现：Selenium 和 Playwright，各自使用 JavaScript、Python 和 Rust。',
    heading: '谷歌搜索示例',
    intro: '一个熟悉的场景——浏览到一个网站、使用它的搜索框、提交搜索、跟踪一个结果链接——用六种方式实现。',
    section1Heading: '同样的四个交互，六种实现',
    scenarioPre: '这个页面展示一个场景——',
    strongBrowse: '浏览到网站',
    scenarioMid1: '、',
    strongFollow: '跟踪一个链接',
    scenarioMid2: '、',
    strongSearch: '使用搜索框',
    scenarioMid3: '，以及',
    strongClick: '点击一个按钮',
    scenarioPost:
      '——用六种方式实现：两种浏览器自动化工具（Selenium 和 Playwright），各自使用三种语言（JavaScript、Python、Rust）。这六个示例的目标都是谷歌搜索，因为它是一个几乎每位读者都已经知道怎么用的搜索框和结果页面，这样就能更容易看清每种工具的语法在做什么，而不必先去学习这个页面本身。',
    calloutLabel: '运行这些示例之前请先阅读',
    readBeforePre: '谷歌的',
    tosLinkText: '服务条款',
    readBeforeMid1: '限制对谷歌搜索进行自动化查询。这六个示例的存在是为了并排展示每种工具的语法和交互',
    patternsLabel: '模式',
    readBeforeMid2: '——它们不打算被反复运行，甚至根本不应该针对真实的',
    readBeforeMid3: '运行。如果你想亲自动手练习这些同样的模式，请把它们指向',
    homePageLinkText: '本站自己的主页',
    readBeforePost: '，它正是为此而建：稳定的 id、name、class 和文字，不会在你脚下发生变化。',
    fourInteractionsHeading: '四个交互，统一定义一次',
    fourInteractionsIntro: '为了避免在每个示例中重复，下面说明下方六个脚本各自做了什么：',
    item1Strong: '浏览到网站',
    item1Pre: '——导航到',
    item1Post: '。',
    item2Strong: '使用搜索框',
    item2Pre: '——找到搜索输入框并输入查询内容，例如',
    item2Post: '。',
    item3Strong: '点击按钮 / 提交',
    item3Rest: '——按下回车键，或者找到提交按钮并点击它。',
    item4Strong: '跟踪一个链接',
    item4Rest: '——结果加载完成后，找到并点击第一个自然搜索结果的链接。',
    caveatA:
      '有一点需要直白地说明，而不是含糊带过：谷歌搜索框的确切标记会随时间漂移，而且很可能会继续漂移。它在历史上曾经是一个',
    caveatB: '，目前则常常是一个',
    caveatC: '，但无论哪种情况，它通常都带有',
    caveatD: '，因此下面的示例用类似',
    caveatE: '这样的选择器来定位它（或者，对于支持带类型属性定位器的工具，则用',
    caveatF:
      '）。这正好说明了为什么按 name/标签选择器不够可靠：当网站的标记在其下发生变化时，它们可能会悄无声息地不再匹配。如果某个工具支持改用可访问性角色和名称来定位（例如一个带有可见“Search”标签的',
    caveatG: '），那是更稳健的选择，相关示例中也会加以说明。提交按钮在历史上通常带有',
    caveatH:
      '，但它一旦被自动补全建议遮挡（这在搜索框获得焦点的瞬间就可能发生），就很难点击到，这也是为什么输入完成后按回车键通常比尝试点击它更可靠的原因之一。',
    seleniumIntro:
      'Selenium 是历史最悠久的跨语言浏览器自动化项目——它的 WebDriver 协议正是本页其他几个工具在底层所使用的同一套协议。',
    seleniumRustA: 'Selenium 项目本身并没有官方的 Rust 绑定——',
    seleniumRustB: '（其名字致敬了硒的原子序数 34）是事实上的 Rust 版 Selenium/WebDriver 客户端。它需要在指定的 URL 上运行一个',
    seleniumRustC: '（或类似的东西），就像上面两个示例也需要本地驱动/浏览器一样。',
    playwrightIntro: 'Playwright 提供官方的 JavaScript、Python、.NET 和 Java 绑定；Rust 支持则由社区维护，而非官方提供。',
    pwRustA: '请留意你安装的是哪个 crate。',
    pwRustB: '（',
    pwRustC: '）目前正在积极维护，但仍处于 1.0 之前、API 尚在稳定阶段——下面用的就是这一个。旧的那个直接以',
    pwRustD: '（',
    pwRustE: '）发布在 crates.io 上的 crate 自 2022 年以来已被放弃维护；请不要选用那一个。',
    backToExamples: '返回示例',
    googleMapsExamplesLinkText: '谷歌地图示例'
  };

  const MESSAGES: Record<Locale, Messages> = {
    'en-001': EN_001,
    'en-gb': EN_001,
    'en-gb-oxendict': EN_GB_OXENDICT,
    'en-us': EN_US,
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

  <p>
    {m.scenarioPre}<strong>{m.strongBrowse}</strong>{m.scenarioMid1}<strong>{m.strongFollow}</strong
    >{m.scenarioMid2}<strong>{m.strongSearch}</strong>{m.scenarioMid3}<strong>{m.strongClick}</strong
    >{m.scenarioPost}
  </p>

  <InformationCallout label={m.calloutLabel}>
    <p>
      {m.readBeforePre}<a href="https://www.google.com/policies/terms/">{m.tosLinkText}</a
      >{m.readBeforeMid1}<em>{m.patternsLabel}</em>{m.readBeforeMid2}<code>google.com</code
      >{m.readBeforeMid3}<a href={localeHref(locale, 'home')}>{m.homePageLinkText}</a>{m.readBeforePost}
    </p>
  </InformationCallout>

  <h3>{m.fourInteractionsHeading}</h3>
  <p>{m.fourInteractionsIntro}</p>
  <ol>
    <li><strong>{m.item1Strong}</strong>{m.item1Pre}<code>https://www.google.com</code>{m.item1Post}</li>
    <li><strong>{m.item2Strong}</strong>{m.item2Pre}<code>"testing examples"</code>{m.item2Post}</li>
    <li><strong>{m.item3Strong}</strong>{m.item3Rest}</li>
    <li><strong>{m.item4Strong}</strong>{m.item4Rest}</li>
  </ol>

  <p>
    {m.caveatA}<code>&lt;input&gt;</code>{m.caveatB}<code>&lt;textarea&gt;</code>{m.caveatC}<code
      >name="q"</code
    >{m.caveatD}<code>[name="q"]</code>{m.caveatE}<code>By.name("q")</code>{m.caveatF}<code
      >role="combobox"</code
    >{m.caveatG}<code>name="btnK"</code>{m.caveatH}
  </p>
</section>

<Separator label="Section break" />

<section class="section prose">
  <SectionHeading class="section-heading-start" heading="Selenium" level={2} />

  <p>{m.seleniumIntro}</p>

  <Details summary="Selenium + JavaScript" open>
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

  <Details summary="Selenium + Python">
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

  <Details summary="Selenium + Rust">
    <p>
      {m.seleniumRustA}<code>thirtyfour</code>{m.seleniumRustB}<code>chromedriver</code>{m.seleniumRustC}
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
  <SectionHeading class="section-heading-start" heading="Playwright" level={2} />

  <p>{m.playwrightIntro}</p>

  <Details summary="Playwright + JavaScript" open>
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

  <Details summary="Playwright + Python">
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

  <Details summary="Playwright + Rust">
    <p>
      {m.pwRustA}<code>playwright-rs</code>{m.pwRustB}<code>padamson/playwright-rust</code
      >{m.pwRustC}<code>playwright</code>{m.pwRustD}<code>octaltree/playwright-rust</code>{m.pwRustE}
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
    <CallToAction class="button button-primary" href={localeHref(locale, 'examples')}>{m.backToExamples}</CallToAction>
    <CallToAction class="button button-secondary" href={localeHref(locale, 'examples-google-maps')}
      >{m.googleMapsExamplesLinkText}</CallToAction
    >
  </p>
</section>
