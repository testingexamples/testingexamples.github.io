<script lang="ts">
  import { SectionHeading } from 'lily-design-system-svelte-headless';
  import SiteFixtures from '$lib/components/SiteFixtures.svelte';
  import { SITE_NAME } from '$lib/site';
  import { localeHref } from '$lib/i18n/paths';
  import type { Locale } from '$lib/i18n/locales';

  let { locale }: { locale: Locale } = $props();

  type Messages = {
    metaDescription: string;
    heading: string;
    intro: string;
    learnHeading: string;
    learnMoreHeading: string;
    examplesHeading: string;
    practiceHeading: string;
    practiceBody: string;
    links: {
      whatIsAutomaticTesting: string;
      whatIsThePurpose: string;
      whatIsTheTestingPyramid: string;
      whatIsBrowserAutomation: string;
      howToStartLearning: string;
      whatAreRelatedConcepts: string;
      howDoesAiHelp: string;
      whatIsContinuousIntegration: string;
      whatIsDevOps: string;
      whatAreFlowMetrics: string;
      whatIsLeanSixSigma: string;
      googleSearchExamples: string;
      googleMapsExamples: string;
      givenWhenThenExamples: string;
      demoApp: string;
      demoAppSuffix: string;
    };
  };

  const EN_001: Messages = {
    metaDescription:
      'Free open source HTML fixtures for practising browser automation: find elements by id, name, class, link text, and XPath, and interact with form inputs.',
    heading: `Welcome to ${SITE_NAME}`,
    intro: `If you're new to browser automation, you're in the right place. ${SITE_NAME} is a small, free, open source site built for anyone learning to make a browser do things automatically — click, type, search, wait, assert — whether you've never written a line of code or you already know the ropes and just want a quick reference or somewhere reliable to try something out.`,
    learnHeading: 'Learn',
    learnMoreHeading: 'Learn More',
    examplesHeading: 'Examples',
    practiceHeading: 'Practise on this page',
    practiceBody:
      'Everything below is a stable fixture playground: fixed ids, names, classes, and text that automation tools can reliably find every time, which is exactly what makes it useful to practise on directly — point your script at it, find an element, interact with it, and see what happens. The exact contract this page keeps is documented in this repo’s',
    links: {
      whatIsAutomaticTesting: 'What is automatic testing?',
      whatIsThePurpose: 'What is the purpose of automatic testing?',
      whatIsTheTestingPyramid: 'What is the automatic testing pyramid?',
      whatIsBrowserAutomation: 'What is browser automatic testing?',
      howToStartLearning: 'How to start learning automatic testing?',
      whatAreRelatedConcepts: 'What are related concepts for automatic testing?',
      howDoesAiHelp: 'How does artificial intelligence help automatic testing?',
      whatIsContinuousIntegration: 'What is continuous integration automatic testing?',
      whatIsDevOps: 'What is DevOps for automatic testing?',
      whatAreFlowMetrics: 'What metrics help automatic testing?',
      whatIsLeanSixSigma: 'How does Six Sigma lead manual testing into automatic testing?',
      googleSearchExamples: 'Google Search Examples',
      googleMapsExamples: 'Google Maps Examples',
      givenWhenThenExamples: 'Given-When-Then Examples',
      demoApp: 'Demo App',
      demoAppSuffix: 'sign in, nav icons, search, and tabs to practise on'
    }
  };

  const EN_US: Messages = {
    ...EN_001,
    metaDescription:
      'Free open source HTML fixtures for practicing browser automation: find elements by id, name, class, link text, and XPath, and interact with form inputs.',
    practiceHeading: 'Practice on this page',
    practiceBody:
      'Everything below is a stable fixture playground: fixed ids, names, classes, and text that automation tools can reliably find every time, which is exactly what makes it useful to practice on directly — point your script at it, find an element, interact with it, and see what happens. The exact contract this page keeps is documented in this repo’s',
    links: {
      ...EN_001.links,
      demoAppSuffix: 'sign in, nav icons, search, and tabs to practice on'
    }
  };

  const CY: Messages = {
    metaDescription:
      "Ffwythiannau HTML rhad ac am ddim, yn ffynhonnell agored, ar gyfer ymarfer awtomeiddio porwr: dod o hyd i elfennau yn ôl id, name, class, ac XPath, a rhyngweithio â mewnbynnau ffurflen.",
    heading: `Croeso i ${SITE_NAME}`,
    intro: `Os ydych chi'n newydd i awtomeiddio porwr, rydych chi yn y lle iawn. Mae ${SITE_NAME} yn safle bach, rhad ac am ddim ac yn ffynhonnell agored, wedi'i adeiladu ar gyfer unrhyw un sy'n dysgu sut i wneud i borwr wneud pethau'n awtomatig — clicio, teipio, chwilio, aros, cadarnhau — pa un a ydych erioed wedi ysgrifennu llinell o god, neu eisoes yn gwybod y rhychwant ac eisiau cyfeirnod cyflym neu rywle dibynadwy i roi cynnig ar rywbeth.`,
    learnHeading: 'Dysgu',
    learnMoreHeading: 'Dysgu Mwy',
    examplesHeading: 'Enghreifftiau',
    practiceHeading: "Ymarfer ar y dudalen hon",
    practiceBody:
      "Mae popeth isod yn faes chwarae ffwythiant sefydlog: ids, names, classes, a thestun sefydlog y gall offer awtomeiddio ddod o hyd iddynt yn ddibynadwy bob tro, sef yn union beth sy'n ei gwneud yn ddefnyddiol i ymarfer arno'n uniongyrchol — anelwch eich sgript ato, dewch o hyd i elfen, rhyngweithiwch â hi, a gweld beth sy'n digwydd. Mae'r cytundeb union y mae'r dudalen hon yn ei gadw wedi'i ddogfennu yn",
    links: {
      whatIsAutomaticTesting: "Beth yw profi awtomatig?",
      whatIsThePurpose: 'Beth yw diben profi awtomatig?',
      whatIsTheTestingPyramid: 'Beth yw pyramid profi awtomatig?',
      whatIsBrowserAutomation: "Beth yw profi awtomeiddio porwr?",
      howToStartLearning: 'Sut i ddechrau dysgu profi awtomatig?',
      whatAreRelatedConcepts: 'Beth yw cysyniadau cysylltiedig ar gyfer profi awtomatig?',
      howDoesAiHelp: "Sut mae deallusrwydd artiffisial yn helpu profi awtomatig?",
      whatIsContinuousIntegration: 'Beth yw profi integreiddio parhaus?',
      whatIsDevOps: 'Beth yw DevOps ar gyfer profi awtomatig?',
      whatAreFlowMetrics: "Pa fetrigau sy'n helpu profi awtomatig?",
      whatIsLeanSixSigma: "Sut mae Lean Six Sigma yn arwain profi â llaw i mewn i brofi awtomatig?",
      googleSearchExamples: 'Enghreifftiau Chwilio Google',
      googleMapsExamples: 'Enghreifftiau Mapiau Google',
      givenWhenThenExamples: 'Enghreifftiau Given-When-Then',
      demoApp: 'Ap Arddangos',
      demoAppSuffix: 'mewngofnodi, eiconau llywio, chwilio, a thabiau i ymarfer arnynt'
    }
  };

  const ZH: Messages = {
    metaDescription:
      '免费开源的 HTML 测试夹具，用于练习浏览器自动化：通过 id、name、class、链接文字和 XPath 查找元素，并与表单输入交互。',
    heading: `欢迎来到 ${SITE_NAME}`,
    intro: `如果你刚接触浏览器自动化，这里正是你该来的地方。${SITE_NAME} 是一个小巧、免费、开源的网站，专为任何想学习让浏览器自动完成操作——点击、输入、搜索、等待、断言——的人打造，无论你从未写过一行代码，还是已经很熟悉，只是想找一个快速参考或一个可靠的地方试试手。`,
    learnHeading: '学习',
    learnMoreHeading: '延伸学习',
    examplesHeading: '示例',
    practiceHeading: '在这个页面上练习',
    practiceBody:
      '下面的内容是一个稳定的测试夹具练习场：固定的 id、name、class 和文字，自动化工具每次都能可靠地找到它们，这正是它适合直接拿来练习的原因——把你的脚本指向它，找到一个元素，与它交互，看看会发生什么。这个页面所遵守的确切约定记录在本仓库的',
    links: {
      whatIsAutomaticTesting: '什么是自动化测试？',
      whatIsThePurpose: '自动化测试的目的是什么？',
      whatIsTheTestingPyramid: '什么是自动化测试金字塔？',
      whatIsBrowserAutomation: '什么是浏览器自动化测试？',
      howToStartLearning: '如何开始学习自动化测试？',
      whatAreRelatedConcepts: '自动化测试的相关概念是什么？',
      howDoesAiHelp: '人工智能如何帮助自动化测试？',
      whatIsContinuousIntegration: '什么是持续集成自动化测试？',
      whatIsDevOps: '什么是自动化测试的 DevOps？',
      whatAreFlowMetrics: '哪些指标有助于自动化测试？',
      whatIsLeanSixSigma: '六西格玛如何引导人工测试进入自动化测试？',
      googleSearchExamples: '谷歌搜索示例',
      googleMapsExamples: '谷歌地图示例',
      givenWhenThenExamples: 'Given-When-Then 示例',
      demoApp: '演示应用',
      demoAppSuffix: '登录、导航图标、搜索和标签页，供你练习'
    }
  };

  const MESSAGES: Record<Locale, Messages> = {
    'en-001': EN_001,
    'en-gb': EN_001,
    'en-gb-oxendict': EN_001,
    'en-us': EN_US,
    'cy-gb': CY,
    'cy-001': CY,
    'zh-cn': ZH
  };

  const m = $derived(MESSAGES[locale]);
</script>

<svelte:head>
  <title>{SITE_NAME}</title>
  <meta name="description" content={m.metaDescription} />
</svelte:head>

<div class="page-header">
  <h1>{m.heading}</h1>
</div>

<section class="section prose">
  <p>{m.intro}</p>

  <h3>{m.learnHeading}</h3>
  <ul class="repo-list">
    <li><a href={localeHref(locale, 'what-is-automatic-testing')}>{m.links.whatIsAutomaticTesting}</a></li>
    <li><a href={localeHref(locale, 'what-is-the-purpose-of-automatic-testing')}>{m.links.whatIsThePurpose}</a></li>
    <li><a href={localeHref(locale, 'what-is-the-testing-pyramid')}>{m.links.whatIsTheTestingPyramid}</a></li>
    <li><a href={localeHref(locale, 'what-is-browser-automation-testing')}>{m.links.whatIsBrowserAutomation}</a></li>
    <li><a href={localeHref(locale, 'how-to-start-learning-automatic-testing')}>{m.links.howToStartLearning}</a></li>
  </ul>

  <h3>{m.learnMoreHeading}</h3>
  <ul class="repo-list">
    <li><a href={localeHref(locale, 'what-are-related-concepts-for-automatic-testing')}>{m.links.whatAreRelatedConcepts}</a></li>
    <li><a href={localeHref(locale, 'how-does-artificial-intelligence-help-automatic-testing')}>{m.links.howDoesAiHelp}</a></li>
    <li><a href={localeHref(locale, 'what-is-continuous-integration-testing')}>{m.links.whatIsContinuousIntegration}</a></li>
    <li><a href={localeHref(locale, 'what-is-devops-for-automatic-testing')}>{m.links.whatIsDevOps}</a></li>
    <li><a href={localeHref(locale, 'what-are-flow-metrics-for-automatic-testing')}>{m.links.whatAreFlowMetrics}</a></li>
    <li><a href={localeHref(locale, 'what-is-lean-six-sigma-for-automatic-testing')}>{m.links.whatIsLeanSixSigma}</a></li>
  </ul>

  <h3>{m.examplesHeading}</h3>
  <ul class="repo-list">
    <li><a href={localeHref(locale, 'examples-google-search')}>{m.links.googleSearchExamples}</a></li>
    <li><a href={localeHref(locale, 'examples-google-maps')}>{m.links.googleMapsExamples}</a></li>
    <li><a href={localeHref(locale, 'given-when-then')}>{m.links.givenWhenThenExamples}</a></li>
    <li><a href={localeHref(locale, 'app')}>{m.links.demoApp}</a> — {m.links.demoAppSuffix}</li>
  </ul>
</section>

<section class="section prose">
  <SectionHeading class="section-heading-start" heading={m.practiceHeading} level={2} />
  <p>
    {m.practiceBody}
    <code>spec/index.md</code>.
  </p>
</section>

<hr />

<SiteFixtures />

<style>
  /* Override the shared .repo-list rule (static/assets/style.css) for this
     page only: bullet points instead of the border-bottom line separator
     between items. Scoped to this component, so /about/, /app/, and
     /how-to-start-learning-automatic-testing/ keep the line-separator style. */
  .repo-list {
    list-style: disc;
    padding-left: 1.5rem;
  }
  .repo-list li {
    padding: 0.2rem 0;
    border-bottom: none;
  }
</style>
