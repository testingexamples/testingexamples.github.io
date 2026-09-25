<script lang="ts">
  import { CallToAction } from 'lily-design-system-svelte-headless';
  import { localeHref } from '$lib/i18n/paths';
  import type { Locale } from '$lib/i18n/locales';

  let { locale }: { locale: Locale } = $props();

  type Messages = {
    title: string;
    metaDescription: string;
    heading: string;
    introPre: string;
    introLinkText: string;
    introPost: string;
    p1: string;
    p2: string;
    askAiHeading: string;
    askAi: string[];
    nextLabel: string;
  };

  const EN_001: Messages = {
    title: 'What is browser automatic testing?',
    metaDescription:
      "What browser automatic testing is, and the trade-offs that come with it: why it's the most realistic layer of the automatic testing pyramid, and when to reach for it instead of a unit or integration test.",
    heading: 'What is browser automatic testing?',
    introPre:
      "Browser automatic testing (also called end-to-end or UI testing) drives a real browser exactly the way a real user would — opening pages, clicking buttons, filling in forms — using tools like Selenium WebDriver, WebdriverIO, and Playwright. It's the most realistic layer of ",
    introLinkText: 'the automatic testing pyramid',
    introPost: ', but that realism has a cost.',
    p1: "They are slower than unit tests, sometimes by orders of magnitude, because they involve starting a real browser, loading real pages, and waiting for real rendering and network activity. They are more brittle: a UI test can break simply because a button's label changed or an element moved on the page, even though the underlying feature still works fine. They need real browsers available to run, which adds setup and infrastructure that a unit test never requires. And when a browser test fails, it can be harder to tell exactly why — was it a real bug, a timing issue, or just a cosmetic change to the page? — compared to a unit test's precise, one-function failure.",
    p2: 'The practical answer is not to avoid browser tests, but to use them for what they are uniquely good at: verifying that real, critical user journeys — signing up, searching, checking out — actually work end to end. Push everything else down the pyramid into faster, cheaper, more precise unit and integration tests, and reserve browser automation for the handful of flows where only a real browser, doing what a real user does, will tell you the truth.',
    askAiHeading: 'Ask AI ideas',
    askAi: [
      'Why are browser tests slower and more fragile than other kinds of automatic tests, in plain terms?',
      'My browser test suite has gotten flaky and slow — what are the first things worth checking to make it more reliable?',
      'How do I decide which user journeys genuinely deserve a browser test versus being covered lower down the pyramid instead?'
    ],
    nextLabel: 'Next: what is continuous integration automatic testing? →'
  };

  // No British/American/Oxford spelling divergence occurs in this page's
  // vocabulary, so all four English locales share one copy. See
  // spec/locales/index.md.
  const CY: Messages = {
    title: 'Beth yw profi awtomeiddio porwr?',
    metaDescription:
      "Beth yw profi awtomeiddio porwr, a'r cymrodedd sy'n dod gydag ef: pam mai dyma'r haen fwyaf realistig o'r pyramid profi awtomatig, a phryd i droi ato yn lle prawf uned neu integreiddio.",
    heading: 'Beth yw profi awtomeiddio porwr?',
    introPre:
      "Mae profi awtomeiddio porwr (a elwir hefyd yn brofi o'r dechrau i'r diwedd neu'n brofi UI) yn gyrru porwr go iawn yn union fel y byddai defnyddiwr go iawn — agor tudalennau, clicio botymau, llenwi ffurflenni — gan ddefnyddio offer fel Selenium WebDriver, WebdriverIO, a Playwright. Dyma'r haen fwyaf realistig o ",
    introLinkText: "y pyramid profi awtomatig",
    introPost: ", ond mae gan y realaeth honno gost.",
    p1: "Maent yn arafach na phrofion uned, weithiau o urddau maint, oherwydd eu bod yn golygu cychwyn porwr go iawn, llwytho tudalennau go iawn, ac aros am rendro a gweithgarwch rhwydwaith go iawn. Maent yn fwy bregus: gall prawf UI dorri dim ond oherwydd bod label botwm wedi newid neu elfen wedi symud ar y dudalen, hyd yn oed pan fo'r nodwedd sylfaenol yn dal i weithio'n iawn. Mae angen porwyr go iawn ar gael i redeg, sy'n ychwanegu sefydlu a seilwaith nad oes byth angen ar brawf uned. A phan fydd prawf porwr yn methu, gall fod yn anos dweud yn union pam — ai gwall go iawn ydoedd, mater amseru, neu ddim ond newid cosmetig i'r dudalen? — o gymharu â methiant manwl, un ffwythiant, prawf uned.",
    p2: "Nid osgoi profion porwr yw'r ateb ymarferol, ond eu defnyddio ar gyfer yr hyn y maent yn arbennig o dda amdano: cadarnhau bod teithiau defnyddiwr go iawn, hanfodol — cofrestru, chwilio, talu — wir yn gweithio o'r dechrau i'r diwedd. Gwthiwch bopeth arall i lawr y pyramid i mewn i brofion uned ac integreiddio cyflymach, rhatach, mwy manwl, a chadwch awtomeiddio porwr ar gyfer y llond dwrn o lifau lle mai dim ond porwr go iawn, yn gwneud yr hyn y mae defnyddiwr go iawn yn ei wneud, a fydd yn dweud y gwir wrthych.",
    askAiHeading: 'Syniadau gofyn i AI',
    askAi: [
      "Pam mae profion porwr yn arafach ac yn fwy bregus na mathau eraill o brofion awtomatig, mewn termau plaen?",
      "Mae fy nghyfres profion porwr wedi mynd yn ansefydlog ac yn araf — beth yw'r pethau cyntaf sy'n werth eu gwirio i'w gwneud yn fwy dibynadwy?",
      "Sut ydw i'n penderfynu pa deithiau defnyddiwr sy'n haeddu prawf porwr go iawn yn hytrach na chael eu cwmpasu'n is i lawr y pyramid?"
    ],
    nextLabel: 'Nesaf: beth yw profi integreiddio parhaus awtomatig? →'
  };

  const ZH: Messages = {
    title: '什么是浏览器自动化测试？',
    metaDescription:
      '什么是浏览器自动化测试，以及它带来的取舍：为什么它是自动化测试金字塔中最贴近真实的一层，以及什么时候该选择它而不是单元测试或集成测试。',
    heading: '什么是浏览器自动化测试？',
    introPre:
      '浏览器自动化测试（也称为端到端测试或 UI 测试）会像真实用户一样驱动一个真实的浏览器——打开页面、点击按钮、填写表单——使用 Selenium WebDriver、WebdriverIO 和 Playwright 之类的工具。它是',
    introLinkText: '自动化测试金字塔',
    introPost: '中最贴近真实的一层，但这种真实感是有代价的。',
    p1: '它们比单元测试慢，有时慢上几个数量级，因为它们需要启动一个真实的浏览器、加载真实的页面，并等待真实的渲染和网络活动完成。它们也更脆弱：一个 UI 测试可能仅仅因为按钮的标签变了或页面上某个元素移动了位置就失败，即使底层功能其实运行良好。它们需要有真实的浏览器可供运行，这会带来单元测试从不需要的搭建和基础设施工作。而当浏览器测试失败时，往往更难判断确切原因——是真正的错误，还是时序问题，或者只是页面上的外观改动？——相比之下，单元测试的失败通常精确地指向某一个函数。',
    p2: '实际可行的做法不是回避浏览器测试，而是把它们用在其真正擅长的地方：验证真实、关键的用户旅程——注册、搜索、结账——确实能够端到端地正常工作。把其余的一切都下沉到金字塔中更快、更便宜、更精确的单元测试和集成测试里，只为那少数几个唯有真实浏览器、像真实用户那样操作才能告诉你真相的流程保留浏览器自动化。',
    askAiHeading: '向 AI 提问的想法',
    askAi: [
      '用简单的话说，为什么浏览器测试比其他类型的自动化测试更慢、更脆弱？',
      '我的浏览器测试套件变得不稳定又缓慢——有哪些首先值得检查的地方可以让它更可靠？',
      '我该如何判断哪些用户旅程真正值得用浏览器测试来覆盖，而不是放到金字塔更下层去覆盖？'
    ],
    nextLabel: '下一步：什么是持续集成自动化测试？→'
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
  <p>
    {m.introPre}<a href={localeHref(locale, 'what-is-the-testing-pyramid')}
      >{m.introLinkText}</a
    >{m.introPost}
  </p>
</div>

<section class="section prose">
  <p>{m.p1}</p>

  <p>{m.p2}</p>

  <h3>{m.askAiHeading}</h3>
  <ul>
    {#each m.askAi as question (question)}
      <li>{question}</li>
    {/each}
  </ul>

  <p style="margin-top: 2rem;">
    <CallToAction
      class="button button-primary"
      href={localeHref(locale, 'what-is-continuous-integration-testing')}
      >{m.nextLabel}</CallToAction
    >
  </p>
</section>
