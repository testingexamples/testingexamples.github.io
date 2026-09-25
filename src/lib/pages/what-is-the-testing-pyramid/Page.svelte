<script lang="ts">
  import { CallToAction } from 'lily-design-system-svelte-headless';
  import { localeHref } from '$lib/i18n/paths';
  import type { Locale } from '$lib/i18n/locales';

  let { locale }: { locale: Locale } = $props();

  type Messages = {
    title: string;
    metaDescription: string;
    heading: string;
    intro: string;
    unitHeading: string;
    unitP: string;
    integrationHeading: string;
    integrationP: string;
    e2eHeading: string;
    e2eP: string;
    askAiHeading: string;
    askAi: string[];
    nextLabel: string;
  };

  const EN_001: Messages = {
    title: 'What is the automatic testing pyramid?',
    metaDescription:
      'What the automatic testing pyramid is: unit tests at the base, integration tests in the middle, and end-to-end browser tests at the top — and why a healthy project has more of the fast layers and fewer of the slow ones.',
    heading: 'What is the automatic testing pyramid?',
    intro:
      'Automatic tests come in layers, usually drawn as a pyramid because of how many of each kind a healthy project tends to have — many small, fast tests at the bottom, and progressively fewer, slower, broader tests toward the top.',
    unitHeading: 'Unit tests (the base)',
    unitP:
      "A unit test checks one small piece of code — a single function or class — in isolation, with no real database, network, or browser involved. Unit tests are fast (thousands can run in seconds), cheap to write, and pinpoint failures precisely. A healthy project has a lot of these.",
    integrationHeading: 'Integration tests (the middle)',
    integrationP:
      "An integration test checks that several pieces work correctly together — a function that talks to a real database, or two internal services calling each other. These catch problems unit tests can't see (the pieces individually work, but not together), at the cost of being slower and a bit more involved to set up.",
    e2eHeading: 'End-to-end / browser (UI) tests (the top)',
    e2eP:
      "An end-to-end test drives a real browser exactly the way a real user would: it opens a page, clicks buttons, fills in forms, and checks that the page responds correctly. This is what browser automation tools like Selenium WebDriver, WebdriverIO, and Playwright do — and it's what every example on this site demonstrates. These tests sit at the top of the pyramid: there are fewer of them, but each one gives high confidence, because it exercises a real user journey through the real, assembled application — front end, back end, and everything wired together — rather than one isolated piece of it.",
    askAiHeading: 'Ask AI ideas',
    askAi: [
      "Can you explain the automatic testing pyramid simply — what's the actual difference between a unit test, an integration test, and an end-to-end test?",
      'My project has plenty of end-to-end browser tests but almost no unit tests — is that actually a problem, and how would I start fixing the balance?',
      'How do I decide, for a specific new feature, which layer of the pyramid a new test belongs in rather than defaulting to another end-to-end test?'
    ],
    nextLabel: 'Next: what is browser automatic testing? →'
  };

  // No British/American/Oxford spelling divergence occurs in this page's
  // vocabulary, so all four English locales share one copy. See
  // spec/locales/index.md.
  const CY: Messages = {
    title: 'Beth yw pyramid profi awtomatig?',
    metaDescription:
      "Beth yw pyramid profi awtomatig: profion uned yn y gwaelod, profion integreiddio yn y canol, a phrofion porwr o'r dechrau i'r diwedd ar y brig — a pham mae gan brosiect iach fwy o'r haenau cyflym a llai o'r rhai araf.",
    heading: 'Beth yw pyramid profi awtomatig?',
    intro:
      "Mae profion awtomatig yn dod mewn haenau, wedi'u llunio fel arfer fel pyramid oherwydd faint o bob math sydd gan brosiect iach fel rheol — llawer o brofion bach, cyflym ar y gwaelod, a chynyddol lai, arafach, ehangach tuag at y brig.",
    unitHeading: 'Profion uned (y gwaelod)',
    unitP:
      "Mae prawf uned yn gwirio un darn bach o god — un ffwythiant neu ddosbarth — ar wahân, heb unrhyw gronfa ddata, rhwydwaith, na phorwr go iawn yn gysylltiedig. Mae profion uned yn gyflym (gall miloedd redeg mewn eiliadau), yn rhad i'w hysgrifennu, ac yn nodi methiannau'n union. Mae gan brosiect iach lawer o'r rhain.",
    integrationHeading: 'Profion integreiddio (y canol)',
    integrationP:
      "Mae prawf integreiddio'n gwirio bod sawl darn yn gweithio'n gywir gyda'i gilydd — ffwythiant sy'n siarad â chronfa ddata go iawn, neu ddau wasanaeth mewnol yn galw ei gilydd. Mae'r rhain yn dal problemau na all profion uned eu gweld (mae'r darnau'n gweithio'n unigol, ond nid gyda'i gilydd), ar draul bod yn arafach ac ychydig yn fwy cymhleth i'w sefydlu.",
    e2eHeading: "Profion o'r dechrau i'r diwedd / porwr (UI) (y brig)",
    e2eP:
      "Mae prawf o'r dechrau i'r diwedd yn gyrru porwr go iawn yn union fel y byddai defnyddiwr go iawn: mae'n agor tudalen, yn clicio botymau, yn llenwi ffurflenni, ac yn gwirio bod y dudalen yn ymateb yn gywir. Dyma beth mae offer awtomeiddio porwr fel Selenium WebDriver, WebdriverIO, a Playwright yn ei wneud — a dyna mae pob enghraifft ar y safle hwn yn ei ddangos. Mae'r profion hyn yn eistedd ar frig y pyramid: mae llai ohonynt, ond mae pob un yn rhoi hyder uchel, gan ei fod yn ymarfer taith defnyddiwr go iawn drwy'r cymhwysiad gwirioneddol, wedi'i gydosod — blaen, cefn, a phopeth wedi'i gysylltu gyda'i gilydd — yn hytrach nag un darn ynysig ohono.",
    askAiHeading: 'Syniadau gofyn i AI',
    askAi: [
      "Allwch chi esbonio pyramid profi awtomatig yn syml — beth yw'r gwahaniaeth gwirioneddol rhwng prawf uned, prawf integreiddio, a phrawf o'r dechrau i'r diwedd?",
      "Mae gan fy mhrosiect ddigon o brofion porwr o'r dechrau i'r diwedd ond bron dim profion uned — a yw hynny'n broblem go iawn, a sut fyddwn i'n dechrau cywiro'r cydbwysedd?",
      "Sut ydw i'n penderfynu, ar gyfer nodwedd newydd benodol, pa haen o'r pyramid y mae prawf newydd yn perthyn iddi yn lle troi'n ddiofyn at brawf o'r dechrau i'r diwedd arall?"
    ],
    nextLabel: 'Nesaf: beth yw profi awtomeiddio porwr? →'
  };

  const ZH: Messages = {
    title: '什么是自动化测试金字塔？',
    metaDescription:
      '什么是自动化测试金字塔：底层是单元测试，中间是集成测试，顶层是端到端浏览器测试——以及为什么健康的项目应该有更多快速的底层测试和更少缓慢的顶层测试。',
    heading: '什么是自动化测试金字塔？',
    intro:
      '自动化测试分为若干层级，通常画成金字塔的形状，因为健康的项目里各层测试的数量往往如此——底部是大量小而快的测试，越往顶部测试就越少、越慢、覆盖范围也越广。',
    unitHeading: '单元测试（底层）',
    unitP:
      '单元测试独立检查一小段代码——单个函数或类——不涉及真实的数据库、网络或浏览器。单元测试速度快（数千个可以在几秒内运行完），编写成本低，而且能精确定位失败原因。健康的项目会有大量这样的测试。',
    integrationHeading: '集成测试（中间层）',
    integrationP:
      '集成测试检查多个部分能否正确协同工作——比如一个与真实数据库交互的函数，或者两个相互调用的内部服务。这些测试能捕捉到单元测试看不到的问题（各部分单独运行正常，但放在一起就不行了），代价是运行更慢、搭建起来也更复杂一些。',
    e2eHeading: '端到端 / 浏览器（UI）测试（顶层）',
    e2eP:
      '端到端测试会像真实用户一样驱动一个真实的浏览器：打开一个页面、点击按钮、填写表单，并检查页面是否正确响应。这正是 Selenium WebDriver、WebdriverIO 和 Playwright 等浏览器自动化工具所做的事情——也是本站每一个示例所展示的内容。这类测试位于金字塔的顶端：数量较少，但每一个都能带来很高的信心，因为它演练的是贯穿真实、完整组装好的应用——前端、后端以及所有部分连接在一起——的真实用户旅程，而不是其中孤立的一部分。',
    askAiHeading: '向 AI 提问的想法',
    askAi: [
      '能不能简单解释一下自动化测试金字塔——单元测试、集成测试和端到端测试之间的实际区别是什么？',
      '我的项目有很多端到端浏览器测试，但几乎没有单元测试——这真的是个问题吗？我该如何开始调整这个比例？',
      '对于某个具体的新功能，我该如何判断一个新测试应该属于金字塔的哪一层，而不是默认再写一个端到端测试？'
    ],
    nextLabel: '下一步：什么是浏览器自动化测试？→'
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
  <h3>{m.unitHeading}</h3>
  <p>{m.unitP}</p>

  <h3>{m.integrationHeading}</h3>
  <p>{m.integrationP}</p>

  <h3>{m.e2eHeading}</h3>
  <p>{m.e2eP}</p>

  <h3>{m.askAiHeading}</h3>
  <ul>
    {#each m.askAi as question (question)}
      <li>{question}</li>
    {/each}
  </ul>

  <p style="margin-top: 2rem;">
    <CallToAction
      class="button button-primary"
      href={localeHref(locale, 'what-is-browser-automation-testing')}
      >{m.nextLabel}</CallToAction
    >
  </p>
</section>
