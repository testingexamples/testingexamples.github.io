<script lang="ts">
  import {
    SectionHeading,
    Separator,
    InformationCallout,
    CallToAction,
    CodeBlock,
    Details
  } from 'lily-design-system-svelte-headless';
  import { localeHref } from '#lib/i18n/paths.js';
  import type { Locale } from '#lib/i18n/locales.js';

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
    sourceCodeHeading: string;
    backHome: string;
    seeMoreExamples: string;
  };

  const EN_001: Messages = {
    title: 'Given-When-Then Examples',
    metaDescription:
      'One scenario written as a Given-When-Then (Gherkin) sentence, then shown as the equivalent Selenium and Playwright code in JavaScript, Python, Rust, and C#.',
    heading: 'Given-When-Then Examples',
    intro:
      'One plain-language scenario, written the way a non-programmer would describe it, next to the actual code that carries it out — in eight combinations of tool and language.',
    whatHeading: 'What is Given-When-Then?',
    whatIsLabel: 'is a way of writing a test scenario in plain sentences instead of code:',
    whatP1:
      'some starting state, When something happens, Then some outcome is true. It comes from behaviour-driven development (BDD), and the specific plain-text syntax for it is usually called Gherkin.',
    whatP2:
      'The point isn’t to replace real test code — it’s to give a team a shared sentence everyone can agree on before anyone writes the automation for it: a product owner, a tester, and a developer can all read "Given I am on the site, When I search, Then I see results" and agree that’s the behaviour that matters, without any of them needing to read JavaScript or Python first. The code underneath — however it’s written, in whichever tool — is what actually proves that sentence stays true.',
    scenarioHeading: 'The scenario',
    scenarioIntro: 'One scenario, written in Gherkin:',
    scenarioBody:
      'Below, the same three lines are carried out eight ways: two browser automation tools (Selenium and Playwright), each in four languages (JavaScript, Python, Rust, and C#). Each line of code is commented with which Given/When/Then step it belongs to, so you can trace the plain sentence straight into the code that implements it.',
    readNotRunLabel: "Read, don't repeatedly run",
    readNotRunPre: 'These four examples target google.com, the same as this site’s ',
    googleSearchExamplesLinkText: 'Google Search examples',
    readNotRunPost:
      ' — and the same caution applies: Google’s Terms of Service restrict automated querying of Google Search, so treat the code below as reading material for the pattern, not as scripts to run repeatedly against the live site. If you want to try this same Given/When/Then shape hands-on, point the same steps at this site’s own practice page instead.',
    sourceCodeHeading: 'Examples of source code',
    backHome: 'Back to home',
    seeMoreExamples: 'See more examples'
  };

  const CY: Messages = {
    title: 'Enghreifftiau Given-When-Then',
    metaDescription:
      "Un senario wedi'i hysgrifennu fel brawddeg Given-When-Then (Gherkin), yna ei dangos fel y cod Selenium a Playwright cyfatebol mewn JavaScript, Python, Rust a C#.",
    heading: 'Enghreifftiau Given-When-Then',
    intro:
      "Un senario mewn iaith syml, wedi'i hysgrifennu fel y byddai rhywun nad yw'n rhaglennydd yn ei disgrifio, wrth ymyl y cod gwirioneddol sy'n ei chyflawni — mewn wyth cyfuniad o offeryn ac iaith.",
    whatHeading: 'Beth yw Given-When-Then?',
    whatIsLabel: "yw ffordd o ysgrifennu senario prawf mewn brawddegau plaen yn lle cod: Given",
    whatP1:
      "(o gyflwr cychwynnol penodol), When (mae rhywbeth yn digwydd), Then (mae canlyniad penodol yn wir). Daw o ddatblygiad wedi'i yrru gan ymddygiad (BDD), a gelwir y gystrawen testun plaen benodol ar ei chyfer fel arfer yn Gherkin.",
    whatP2:
      "Nid y bwriad yw disodli cod prawf go iawn — y bwriad yw rhoi i dîm frawddeg gyffredin y gall pawb gytuno arni cyn i unrhyw un ysgrifennu'r awtomatiaeth ar ei chyfer: gall perchennog cynnyrch, profwr, a datblygwr i gyd ddarllen \"Given I am on the site, When I search, Then I see results\" a chytuno mai dyna'r ymddygiad sy'n bwysig, heb i'r un ohonynt orfod darllen JavaScript na Python yn gyntaf. Y cod oddi tano — sut bynnag y'i hysgrifennir, ym mha offeryn bynnag — yw'r hyn sy'n profi mewn gwirionedd fod y frawddeg honno'n aros yn wir.",
    scenarioHeading: "Y senario",
    scenarioIntro: 'Un senario, wedi’i hysgrifennu yn Gherkin:',
    scenarioBody:
      "Isod, cyflawnir yr un tair llinell mewn wyth ffordd: dau offeryn awtomatiaeth porwr (Selenium a Playwright), pob un mewn pedair iaith (JavaScript, Python, Rust a C#). Mae pob llinell o god wedi'i hanodi â pha gam Given/When/Then y mae'n perthyn iddo, fel y gallwch olrhain y frawddeg syml yn syth i mewn i'r cod sy'n ei gweithredu.",
    readNotRunLabel: "Darllenwch, peidiwch â rhedeg dro ar ôl tro",
    readNotRunPre: "Mae'r pedair enghraifft hyn yn targedu google.com, yr un peth ag ",
    googleSearchExamplesLinkText: 'enghreifftiau Chwilio Google',
    readNotRunPost:
      " y wefan hon — ac mae'r un rhybudd yn berthnasol: mae Telerau Gwasanaeth Google yn cyfyngu ar ymholi awtomatig ar Google Search, felly trinwch y cod isod fel deunydd darllen ar gyfer y patrwm, nid fel sgriptiau i'w rhedeg dro ar ôl tro yn erbyn y wefan fyw. Os hoffech roi cynnig ymarferol ar yr un siâp Given/When/Then, anelwch yr un camau at dudalen ymarfer y wefan hon ei hun yn lle hynny.",
    sourceCodeHeading: 'Enghreifftiau o god ffynhonnell',
    backHome: "Yn ôl i'r hafan",
    seeMoreExamples: 'Gweld mwy o enghreifftiau'
  };

  const ZH: Messages = {
    title: 'Given-When-Then 示例',
    metaDescription:
      '一个场景先写成 Given-When-Then（Gherkin）句子，再展示为等价的 JavaScript、Python、Rust 和 C# 版本的 Selenium 与 Playwright 代码。',
    heading: 'Given-When-Then 示例',
    intro:
      '一个用通俗语言描述的场景，写成非程序员会使用的方式，与真正执行它的代码并排展示——涵盖八种工具与语言的组合。',
    whatHeading: '什么是 Given-When-Then？',
    whatIsLabel: '是一种用通俗句子而不是代码来编写测试场景的方式：Given',
    whatP1:
      '（某个初始状态），When（发生了某件事），Then（某个结果为真）。它源自行为驱动开发（BDD），其特定的纯文本语法通常被称为 Gherkin。',
    whatP2:
      '这样做的目的不是取代真正的测试代码——而是在任何人为它编写自动化之前，给团队一个大家都能认同的共同句子：产品负责人、测试人员和开发者都能读懂 "Given I am on the site, When I search, Then I see results"，并认同这就是重要的行为，而不需要任何人先去读 JavaScript 或 Python。而底层的代码——不论用什么方式、哪种工具写成——才是真正证明这句话始终成立的东西。',
    scenarioHeading: '场景',
    scenarioIntro: '一个用 Gherkin 写成的场景：',
    scenarioBody:
      '下面用八种方式实现了同样的三行内容：两种浏览器自动化工具（Selenium 和 Playwright），各自使用四种语言（JavaScript、Python、Rust 和 C#）。每一行代码都注明了它属于哪个 Given/When/Then 步骤，方便你把这句通俗的话直接对应到实现它的代码上。',
    readNotRunLabel: '请阅读，不要反复运行',
    readNotRunPre: '这四个示例的目标是 google.com，与本站的',
    googleSearchExamplesLinkText: '谷歌搜索示例',
    readNotRunPost:
      '相同——同样的注意事项也适用：谷歌的服务条款限制对谷歌搜索进行自动化查询，因此请把下面的代码当作了解模式的阅读材料，而不是反复对真实网站运行的脚本。如果你想亲自动手体验同样的 Given/When/Then 结构，可以把同样的步骤指向本站自己的练习页面。',
    sourceCodeHeading: '源代码示例',
    backHome: '返回首页',
    seeMoreExamples: '查看更多示例'
  };

  const AR: Messages = {
    title: 'أمثلة Given-When-Then',
    metaDescription:
      'سيناريو واحد مكتوب بصيغة Given-When-Then (Gherkin)، ثم معروضًا بما يعادله من كود Selenium وPlaywright بلغات JavaScript وPython وRust وC#.',
    heading: 'أمثلة Given-When-Then',
    intro:
      'سيناريو واحد بلغة بسيطة، مكتوب بالطريقة التي يصفه بها غير المبرمج، إلى جانب الكود الفعلي الذي ينفّذه — في ثماني توليفات من الأداة واللغة.',
    whatHeading: 'ما هو Given-When-Then؟',
    whatIsLabel: 'هو طريقة لكتابة سيناريو اختبار بجمل بسيطة بدلًا من الكود: Given',
    whatP1:
      '(حالة بدء ما)، وWhen (يحدث شيء ما)، وThen (تصبح نتيجة ما صحيحة). وهي مستمدة من التطوير الموجَّه بالسلوك (BDD)، ويُسمّى الصيغة النصية البسيطة المحددة لها عادةً Gherkin.',
    whatP2:
      'ليس المقصود استبدال كود الاختبار الحقيقي — بل منح الفريق جملة مشتركة يتفق عليها الجميع قبل أن يكتب أحد الأتمتة لها: يستطيع مالك المنتج والمختبِر والمطوّر جميعًا قراءة "Given I am on the site, When I search, Then I see results" والاتفاق على أن هذا هو السلوك المهم، دون أن يحتاج أي منهم إلى قراءة JavaScript أو Python أولًا. أما الكود الكامن تحتها — مهما كُتب وبأي أداة — فهو ما يثبت فعلًا أن هذه الجملة تبقى صحيحة.',
    scenarioHeading: 'السيناريو',
    scenarioIntro: 'سيناريو واحد مكتوب بلغة Gherkin:',
    scenarioBody:
      'في ما يلي، تُنفَّذ الأسطر الثلاثة نفسها بثماني طرق: أداتان لأتمتة المتصفح (Selenium وPlaywright)، كل منهما بأربع لغات (JavaScript وPython وRust وC#). وقد وُضع على كل سطر من الكود تعليق يبيّن أي خطوة من Given/When/Then ينتمي إليها، لتتتبع الجملة البسيطة مباشرةً إلى الكود الذي ينفّذها.',
    readNotRunLabel: 'اقرأ ولا تكرّر التشغيل',
    readNotRunPre: 'تستهدف هذه الأمثلة الأربعة google.com، مثل ',
    googleSearchExamplesLinkText: 'أمثلة Google Search',
    readNotRunPost:
      ' في هذا الموقع — وينطبق التحذير نفسه: تقيّد شروط خدمة Google الاستعلام الآلي عن Google Search، لذا تعامل مع الكود أدناه كمادة للقراءة لفهم النمط، لا كسكربتات تُشغَّل مرارًا على الموقع الحي. وإن أردت تجربة صيغة Given/When/Then نفسها عمليًا، فوجّه الخطوات نفسها إلى صفحة التدريب في هذا الموقع.',
    sourceCodeHeading: 'أمثلة على الشيفرة المصدرية',
    backHome: 'العودة إلى الرئيسية',
    seeMoreExamples: 'عرض المزيد من الأمثلة'
  };

  const KO: Messages = {
    title: 'Given-When-Then 예제',
    metaDescription:
      '하나의 시나리오를 Given-When-Then(Gherkin) 문장으로 작성한 다음, 그에 해당하는 JavaScript, Python, Rust, C#의 Selenium 및 Playwright 코드로 보여 줍니다.',
    heading: 'Given-When-Then 예제',
    intro:
      '프로그래머가 아닌 사람이 설명할 법한 방식으로 쓴 하나의 평이한 시나리오를, 그것을 실제로 수행하는 코드와 나란히 보여 줍니다. 도구와 언어의 여덟 가지 조합으로 제시합니다.',
    whatHeading: 'Given-When-Then이란 무엇인가?',
    whatIsLabel: '은 테스트 시나리오를 코드가 아닌 평이한 문장으로 작성하는 방식입니다: Given',
    whatP1:
      '(어떤 초기 상태), When(어떤 일이 일어남), Then(어떤 결과가 참임). 이는 행동 주도 개발(BDD)에서 유래했으며, 이를 위한 구체적인 일반 텍스트 문법을 보통 Gherkin이라고 부릅니다.',
    whatP2:
      '목적은 실제 테스트 코드를 대체하는 것이 아니라, 누군가 자동화를 작성하기 전에 모두가 동의할 수 있는 공통의 문장을 팀에 주는 것입니다. 제품 책임자, 테스터, 개발자 모두가 "Given I am on the site, When I search, Then I see results"를 읽고 그것이 중요한 동작이라는 데 동의할 수 있으며, 누구도 먼저 JavaScript나 Python을 읽을 필요가 없습니다. 그 밑에 있는 코드는 — 어떤 방식으로, 어떤 도구로 작성되었든 — 그 문장이 계속 참임을 실제로 증명하는 것입니다.',
    scenarioHeading: '시나리오',
    scenarioIntro: 'Gherkin으로 작성한 하나의 시나리오:',
    scenarioBody:
      '아래에서는 같은 세 줄을 여덟 가지 방식으로 수행합니다. 브라우저 자동화 도구 두 가지(Selenium과 Playwright)를 각각 네 가지 언어(JavaScript, Python, Rust, C#)로 사용합니다. 코드의 각 줄에는 어느 Given/When/Then 단계에 속하는지 주석이 달려 있어, 평이한 문장에서 그것을 구현하는 코드까지 바로 따라갈 수 있습니다.',
    readNotRunLabel: '읽기만 하고, 반복 실행하지 마세요',
    readNotRunPre: '이 네 가지 예제는 이 사이트의 ',
    googleSearchExamplesLinkText: 'Google Search 예제',
    readNotRunPost:
      '와 마찬가지로 google.com을 대상으로 하며, 같은 주의가 적용됩니다. Google의 서비스 약관은 Google Search에 대한 자동화된 쿼리를 제한하므로, 아래 코드는 실제 사이트를 상대로 반복 실행할 스크립트가 아니라 패턴을 이해하기 위한 읽을거리로 다루세요. 같은 Given/When/Then 형태를 직접 해 보고 싶다면, 같은 단계를 이 사이트의 연습 페이지에 적용해 보세요.',
    sourceCodeHeading: '소스 코드 예시',
    backHome: '홈으로 돌아가기',
    seeMoreExamples: '더 많은 예제 보기'
  };

  const FR: Messages = {
    title: 'Exemples Given-When-Then',
    metaDescription:
      "Un scénario écrit sous forme de phrase Given-When-Then (Gherkin), puis présenté sous forme de code Selenium et Playwright équivalent en JavaScript, Python, Rust et C#.",
    heading: 'Exemples Given-When-Then',
    intro:
      "Un scénario en langage clair, écrit comme le décrirait une personne qui ne programme pas, à côté du code réel qui l'exécute — selon huit combinaisons d'outil et de langage.",
    whatHeading: "Qu'est-ce que Given-When-Then ?",
    whatIsLabel: "est une manière d'écrire un scénario de test en phrases simples plutôt qu'en code : Given",
    whatP1:
      "(un état de départ), When (quelque chose se produit), Then (un résultat est vrai). Cela vient du développement piloté par le comportement (BDD), et la syntaxe en texte brut correspondante s'appelle généralement Gherkin.",
    whatP2:
      "L'objectif n'est pas de remplacer le vrai code de test — c'est de donner à une équipe une phrase commune sur laquelle tout le monde peut s'accorder avant que quiconque n'écrive l'automatisation correspondante : un responsable produit, un testeur et un développeur peuvent tous lire « Given I am on the site, When I search, Then I see results » et convenir que c'est bien le comportement qui compte, sans avoir besoin de lire d'abord du JavaScript ou du Python. Le code sous-jacent — quelle que soit la façon dont il est écrit, dans quelque outil que ce soit — est ce qui prouve réellement que cette phrase reste vraie.",
    scenarioHeading: 'Le scénario',
    scenarioIntro: 'Un scénario, écrit en Gherkin :',
    scenarioBody:
      "Ci-dessous, les trois mêmes lignes sont exécutées de huit façons : deux outils d'automatisation de navigateur (Selenium et Playwright), chacun dans quatre langages (JavaScript, Python, Rust et C#). Chaque ligne de code est commentée avec l'étape Given/When/Then à laquelle elle appartient, afin que vous puissiez suivre la phrase simple jusqu'au code qui l'implémente.",
    readNotRunLabel: "À lire, pas à exécuter à répétition",
    readNotRunPre: "Ces quatre exemples ciblent google.com, comme les ",
    googleSearchExamplesLinkText: 'exemples de Recherche Google',
    readNotRunPost:
      " de ce site — et la même prudence s'applique : les conditions d'utilisation de Google limitent les requêtes automatisées sur Google Search ; considérez donc le code ci-dessous comme de la documentation à lire pour le schéma, et non comme des scripts à exécuter à répétition sur le site réel. Si vous voulez essayer cette même structure Given/When/Then en pratique, dirigez plutôt les mêmes étapes vers la page d'exercices de ce site.",
    sourceCodeHeading: 'Exemples de code source',
    backHome: "Retour à l'accueil",
    seeMoreExamples: "Voir d'autres exemples"
  };

  const MESSAGES: Record<Locale, Messages> = {
    'en-001': EN_001,
    'en-gb': EN_001,
    'en-gb-oxendict': EN_001,
    'en-us': EN_001,
    'cy-gb': CY,
    'cy-001': CY,
    'zh-cn': ZH,
    'ar-001': AR,
    'ko-001': KO,
    'fr-001': FR
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
  <SectionHeading class="section-heading-start" heading={m.sourceCodeHeading} level={2} />

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

  <Details summary="Selenium + Rust">
    <CodeBlock label="Selenium · Rust · thirtyfour (crates.io)">
      <pre><code>{`use std::time::Duration;

use thirtyfour::prelude::*;

#[tokio::main]
async fn main() -> anyhow::Result<()> {
    // chromedriver must already be listening, e.g. \`chromedriver --port=9515\`.
    let driver = WebDriver::new("http://localhost:9515", DesiredCapabilities::chrome()).await?;

    // Run the scenario, but always quit the browser afterward.
    let result = scenario(&driver).await;
    driver.quit().await?;
    result
}

async fn scenario(driver: &WebDriver) -> anyhow::Result<()> {
    // Given I am on https://google.com
    driver.goto("https://google.com").await?;

    // When I type in the search box and click submit
    // Google's search input has commonly carried name="q". thirtyfour has
    // no By::Name, so use a CSS attribute selector. "\\u{E007}" is the
    // WebDriver Enter key.
    let search_box = driver.query(By::Css("[name='q']")).single().await?;
    search_box.send_keys("testing examples\\u{E007}").await?;

    // Then I see search results
    let found = driver
        .query(By::Css("#search"))
        .wait(Duration::from_secs(10), Duration::from_millis(250))
        .exists()
        .await?;
    assert!(found, "Expected to see search results, but none were found.");
    Ok(())
}
`}</code></pre>
    </CodeBlock>
  </Details>

  <Details summary="Selenium + C#">
    <CodeBlock label="Selenium · C# · Selenium.WebDriver (NuGet)">
      <pre><code>{`using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using OpenQA.Selenium.Support.UI;

// Selenium Manager finds or downloads a matching chromedriver.
// \`using\` quits the browser even if the check below throws.
using IWebDriver driver = new ChromeDriver();

// Given I am on https://google.com
driver.Navigate().GoToUrl("https://google.com");

// When I type in the search box and click submit
// Google's search input has commonly carried name="q".
var searchBox = driver.FindElement(By.Name("q"));
searchBox.SendKeys("testing examples" + Keys.Return);

// Then I see search results
var wait = new WebDriverWait(driver, TimeSpan.FromSeconds(10))
{
    Message = "Expected to see search results, but none were found."
};
wait.Until(d => d.FindElements(By.CssSelector("#search")).Count > 0);
`}</code></pre>
    </CodeBlock>
  </Details>

  <Details summary="Playwright + JavaScript">
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

  <Details summary="Playwright + Rust">
    <CodeBlock label="Playwright · Rust · playwright-rs (crates.io)">
      <pre><code>{`use playwright_rs::{Page, Playwright, WaitUntil};

#[tokio::main]
async fn main() -> anyhow::Result<()> {
    let pw = Playwright::launch().await?;
    let browser = pw.chromium().launch().await?;
    let page = browser.new_page().await?;

    // Run the scenario, but always close the browser afterward.
    let result = scenario(&page).await;
    browser.close().await?;
    result
}

async fn scenario(page: &Page) -> anyhow::Result<()> {
    // Given I am on https://google.com
    page.goto("https://google.com", None).await?;

    // When I type in the search box and click submit
    // Google's search input has commonly carried name="q".
    let search_box = page.locator("[name=\\"q\\"]");
    search_box.fill("testing examples", None).await?;
    search_box.press("Enter", None).await?;
    page.wait_for_load_state(Some(WaitUntil::Load)).await?;

    // Then I see search results
    let count = page.locator("#search").count().await?;
    assert!(count > 0, "Expected to see search results, but none were found.");
    Ok(())
}
`}</code></pre>
    </CodeBlock>
  </Details>

  <Details summary="Playwright + C#">
    <CodeBlock label="Playwright · C# · Microsoft.Playwright (NuGet)">
      <pre><code>{`using Microsoft.Playwright;

using var playwright = await Playwright.CreateAsync();
await using var browser = await playwright.Chromium.LaunchAsync();
var page = await browser.NewPageAsync();

// Given I am on https://google.com
await page.GotoAsync("https://google.com");

// When I type in the search box and click submit
// Google's search input has commonly carried name="q".
await page.FillAsync("[name=\\"q\\"]", "testing examples");
await page.Keyboard.PressAsync("Enter");

// Then I see search results
await page.WaitForSelectorAsync("#search");
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
