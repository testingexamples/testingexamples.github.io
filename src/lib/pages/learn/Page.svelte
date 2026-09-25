<script lang="ts">
  import { localeHref } from '$lib/i18n/paths';
  import type { Locale } from '$lib/i18n/locales';

  let { locale }: { locale: Locale } = $props();

  type Messages = {
    title: string;
    metaDescription: string;
    heading: string;
    intro: string;
    whatIsLinkText: string;
    whatIsDesc: string;
    purposeLinkText: string;
    purposeDesc: string;
    pyramidLinkText: string;
    pyramidDesc: string;
    browserLinkText: string;
    browserDesc: string;
    ciLinkText: string;
    ciDesc: string;
    howToStartLinkText: string;
    howToStartDesc: string;
    aiLinkText: string;
    aiDesc: string;
    relatedConceptsLinkText: string;
    relatedConceptsDesc: string;
  };

  const EN_001: Messages = {
    title: 'Learn',
    metaDescription:
      'Learn what automatic testing is and how to get started with browser automation tools like Selenium, WebdriverIO, and Playwright.',
    heading: 'Learn',
    intro:
      "Eight short articles: what automatic testing is and why it's worth doing, the automatic testing pyramid and where browser automation fits in it, the trade-offs of browser tests, how continuous integration runs those tests automatically, a practical path for getting hands-on with browser automation yourself, where AI fits into all of that today, and the everyday tools and practices that surround it.",
    whatIsLinkText: 'What is automatic testing?',
    whatIsDesc: ' — what automatic testing is, and how it differs from and complements manual testing.',
    purposeLinkText: 'What is the purpose of automatic testing?',
    purposeDesc:
      ' — what a team actually gets back for the effort of writing automatic tests: earlier bugs, tireless repetition, and the confidence to release often.',
    pyramidLinkText: 'What is the automatic testing pyramid?',
    pyramidDesc:
      ' — the three layers of automatic tests, from fast, cheap unit tests at the base to realistic end-to-end browser tests at the top.',
    browserLinkText: 'What is browser automatic testing?',
    browserDesc:
      ' — what it is, and the trade-offs that come with its realism: slower, more brittle, and harder to diagnose than a unit test.',
    ciLinkText: 'What is continuous integration automatic testing?',
    ciDesc:
      ' — running your automatic test suite automatically on every change, so broken code is caught before it merges rather than after.',
    howToStartLinkText: 'How to start learning automatic testing?',
    howToStartDesc:
      ' — a step-by-step path: pick a language, pick a tool, run your first script against this site, then practice on real worked examples.',
    aiLinkText: 'How does artificial intelligence help automatic testing?',
    aiDesc:
      ' — how and why AI shows up in writing tests, CI/CD, and agile discovery today, and the one caveat that applies to all three.',
    relatedConceptsLinkText: 'What are related concepts for automatic testing?',
    relatedConceptsDesc:
      ' — friendly introductions to code editors, version control (git and GitHub), and agile discovery.'
  };

  // No British/American/Oxford spelling divergence occurs in this page's
  // vocabulary, so all four English locales share one copy. See
  // spec/locales/index.md.
  const CY: Messages = {
    title: 'Dysgu',
    metaDescription:
      "Dysgwch beth yw profi awtomatig a sut i ddechrau gydag offer awtomeiddio porwr fel Selenium, WebdriverIO, a Playwright.",
    heading: 'Dysgu',
    intro:
      "Wyth erthygl fer: beth yw profi awtomatig a pham mae'n werth ei wneud, pyramid profi awtomatig a ble mae awtomeiddio porwr yn ffitio ynddo, cyfaddawdau profion porwr, sut mae integreiddio parhaus yn rhedeg y profion hynny'n awtomatig, llwybr ymarferol i chi gael profiad ymarferol o awtomeiddio porwr eich hun, ble mae AI yn ffitio i mewn i hynny i gyd heddiw, a'r offer a'r arferion bob dydd sydd o'i amgylch.",
    whatIsLinkText: 'Beth yw profi awtomatig?',
    whatIsDesc: " — beth yw profi awtomatig, a sut mae'n wahanol i brofi â llaw ac yn ei ategu.",
    purposeLinkText: 'Beth yw diben profi awtomatig?',
    purposeDesc:
      " — beth mae tîm wir yn ei gael yn ôl am yr ymdrech o ysgrifennu profion awtomatig: namau'n cael eu darganfod yn gynt, ailadrodd diflino, a'r hyder i ryddhau'n aml.",
    pyramidLinkText: 'Beth yw pyramid profi awtomatig?',
    pyramidDesc:
      " — tair haen o brofion awtomatig, o brofion uned cyflym, rhad ar y gwaelod i brofion porwr penben-i-benagos realistig ar y brig.",
    browserLinkText: 'Beth yw profi awtomatig porwr?',
    browserDesc:
      " — beth ydyw, a'r cyfaddawdau sy'n dod gyda'i realaeth: arafach, mwy bregus, ac anos ei ddiagnosio na phrawf uned.",
    ciLinkText: 'Beth yw profi awtomatig integreiddio parhaus?',
    ciDesc:
      " — rhedeg eich set brofion awtomatig yn awtomatig ar bob newid, fel bod cod diffygiol yn cael ei ddal cyn iddo uno yn hytrach nag wedyn.",
    howToStartLinkText: 'Sut i ddechrau dysgu profi awtomatig?',
    howToStartDesc:
      " — llwybr cam wrth gam: dewiswch iaith, dewiswch offeryn, rhedwch eich sgript gyntaf yn erbyn y safle hwn, yna ymarferwch ar enghreifftiau go iawn wedi'u gweithio.",
    aiLinkText: 'Sut mae deallusrwydd artiffisial yn helpu profi awtomatig?',
    aiDesc:
      " — sut a pham mae AI yn ymddangos wrth ysgrifennu profion, CI/CD, a darganfod ystwyth heddiw, a'r un rhybudd sy'n berthnasol i'r tri.",
    relatedConceptsLinkText: 'Beth yw cysyniadau cysylltiedig ar gyfer profi awtomatig?',
    relatedConceptsDesc:
      " — cyflwyniadau cyfeillgar i olygyddion cod, rheoli fersiynau (git a GitHub), a darganfod ystwyth."
  };

  const ZH: Messages = {
    title: '学习',
    metaDescription:
      '了解什么是自动化测试，以及如何开始使用 Selenium、WebdriverIO 和 Playwright 等浏览器自动化工具。',
    heading: '学习',
    intro:
      '八篇简短文章：什么是自动化测试以及为什么值得去做、自动化测试金字塔以及浏览器自动化在其中的位置、浏览器测试的取舍、持续集成如何自动运行这些测试、一条让你亲自上手浏览器自动化的实用路径、如今 AI 在这一切中扮演的角色，以及围绕这些内容的日常工具与实践。',
    whatIsLinkText: '什么是自动化测试？',
    whatIsDesc: '——什么是自动化测试，以及它与人工测试有何不同又如何互补。',
    purposeLinkText: '自动化测试的目的是什么？',
    purposeDesc:
      '——团队为编写自动化测试所付出的努力实际能换来什么：更早发现缺陷、不知疲倦的重复，以及频繁发布的信心。',
    pyramidLinkText: '什么是自动化测试金字塔？',
    pyramidDesc:
      '——自动化测试的三个层级，从底层快速、廉价的单元测试，到顶层贴近真实的端到端浏览器测试。',
    browserLinkText: '什么是浏览器自动化测试？',
    browserDesc:
      '——它是什么，以及它的真实感所带来的取舍：比单元测试更慢、更脆弱、也更难诊断。',
    ciLinkText: '什么是持续集成自动化测试？',
    ciDesc: '——在每次改动时自动运行你的自动化测试套件，以便在合并之前而不是之后发现有问题的代码。',
    howToStartLinkText: '如何开始学习自动化测试？',
    howToStartDesc:
      '——一条循序渐进的路径：选一门语言，选一个工具，对本站运行你的第一个脚本，然后在真实的示例上练习。',
    aiLinkText: '人工智能如何帮助自动化测试？',
    aiDesc:
      '——如今 AI 是如何以及为何出现在编写测试、CI/CD 和敏捷探索中的，以及适用于这三者的同一个注意事项。',
    relatedConceptsLinkText: '自动化测试的相关概念是什么？',
    relatedConceptsDesc: '——对代码编辑器、版本控制（git 和 GitHub）以及敏捷探索的友好入门介绍。'
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
  <p>
    <a href={localeHref(locale, 'what-is-automatic-testing')}>{m.whatIsLinkText}</a>{m.whatIsDesc}
  </p>
  <p>
    <a href={localeHref(locale, 'what-is-the-purpose-of-automatic-testing')}>{m.purposeLinkText}</a
    >{m.purposeDesc}
  </p>
  <p>
    <a href={localeHref(locale, 'what-is-the-testing-pyramid')}>{m.pyramidLinkText}</a>{m.pyramidDesc}
  </p>
  <p>
    <a href={localeHref(locale, 'what-is-browser-automation-testing')}>{m.browserLinkText}</a
    >{m.browserDesc}
  </p>
  <p>
    <a href={localeHref(locale, 'what-is-continuous-integration-testing')}>{m.ciLinkText}</a>{m.ciDesc}
  </p>
  <p>
    <a href={localeHref(locale, 'how-to-start-learning-automatic-testing')}>{m.howToStartLinkText}</a
    >{m.howToStartDesc}
  </p>
  <p>
    <a href={localeHref(locale, 'how-does-artificial-intelligence-help-automatic-testing')}
      >{m.aiLinkText}</a
    >{m.aiDesc}
  </p>
  <p>
    <a href={localeHref(locale, 'what-are-related-concepts-for-automatic-testing')}
      >{m.relatedConceptsLinkText}</a
    >{m.relatedConceptsDesc}
  </p>
</section>
