<script lang="ts">
  import { localeHref } from '#lib/i18n/paths.js';
  import type { Locale } from '#lib/i18n/locales.js';

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
      "Dysgwch beth yw profi awtomatig a sut i ddechrau gydag offer awtomatiaeth porwr fel Selenium, WebdriverIO, a Playwright.",
    heading: 'Dysgu',
    intro:
      "Wyth erthygl fer: beth yw profi awtomatig a pham mae'n werth ei wneud, pyramid profi awtomatig a ble mae awtomatiaeth porwr yn ffitio ynddo, cyfaddawdau profion porwr, sut mae integreiddio parhaus yn rhedeg y profion hynny'n awtomatig, llwybr ymarferol i chi ddechrau arni ag awtomatiaeth porwr eich hun, ble mae deallusrwydd artiffisial yn ffitio i mewn i hynny i gyd heddiw, a'r offer a'r arferion bob dydd sydd o'i amgylch.",
    whatIsLinkText: 'Beth yw profi awtomatig?',
    whatIsDesc: " — beth yw profi awtomatig, a sut mae'n wahanol i brofi â llaw ac yn ei ategu.",
    purposeLinkText: 'Beth yw diben profi awtomatig?',
    purposeDesc:
      " — beth mae tîm wir yn ei gael yn ôl am yr ymdrech o ysgrifennu profion awtomatig: bygiau'n cael eu darganfod yn gynt, ailadrodd diflino, a'r hyder i ryddhau'n aml.",
    pyramidLinkText: 'Beth yw pyramid profi awtomatig?',
    pyramidDesc:
      " — tair haen o brofion awtomatig, o brofion uned cyflym, rhad ar y gwaelod i brofion porwr o'r dechrau i'r diwedd realistig ar y brig.",
    browserLinkText: 'Beth yw profi awtomatig porwr?',
    browserDesc:
      " — beth ydyw, a'r cyfaddawdau sy'n dod gyda'i realaeth: arafach, mwy bregus, ac anos ei ddiagnosio na phrawf uned.",
    ciLinkText: 'Beth yw profi integreiddio parhaus awtomatig?',
    ciDesc:
      " — rhedeg eich set brofion awtomatig yn awtomatig ar bob newid, fel bod cod toredig yn cael ei ddal cyn iddo uno yn hytrach nag wedyn.",
    howToStartLinkText: 'Sut i ddechrau dysgu profi awtomatig?',
    howToStartDesc:
      " — llwybr cam wrth gam: dewiswch iaith, dewiswch offeryn, rhedwch eich sgript gyntaf yn erbyn y wefan hon, yna ymarferwch ar enghreifftiau ymarferol go iawn.",
    aiLinkText: 'Sut mae deallusrwydd artiffisial yn helpu profi awtomatig?',
    aiDesc:
      " — sut a pham mae deallusrwydd artiffisial yn ymddangos wrth ysgrifennu profion, CI/CD, a darganfod ystwyth heddiw, a'r un rhybudd sy'n berthnasol i'r tri.",
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

  const AR: Messages = {
    title: 'تعلّم',
    metaDescription:
      'تعرّف على ماهية الاختبار الآلي وكيف تبدأ مع أدوات أتمتة المتصفح مثل Selenium وWebdriverIO وPlaywright.',
    heading: 'تعلّم',
    intro:
      'ثماني مقالات قصيرة: ما هو الاختبار الآلي ولماذا يستحق العناء، وهرم الاختبار الآلي وموقع أتمتة المتصفح فيه، ومقايضات اختبارات المتصفح، وكيف يشغّل التكامل المستمر هذه الاختبارات تلقائيًا، ومسار عملي للتجربة المباشرة مع أتمتة المتصفح بنفسك، وموقع الذكاء الاصطناعي من كل ذلك اليوم، والأدوات والممارسات اليومية المحيطة به.',
    whatIsLinkText: 'ما هو الاختبار الآلي؟',
    whatIsDesc: ' — ما هو الاختبار الآلي، وبماذا يختلف عن الاختبار اليدوي وكيف يكمّله.',
    purposeLinkText: 'ما الغرض من الاختبار الآلي؟',
    purposeDesc:
      ' — ما الذي يجنيه الفريق فعلًا مقابل جهد كتابة الاختبارات الآلية: اكتشاف الأخطاء مبكرًا، وتكرارًا لا يعرف الكلل، والثقة في الإصدار المتكرر.',
    pyramidLinkText: 'ما هو هرم الاختبار الآلي؟',
    pyramidDesc:
      ' — الطبقات الثلاث للاختبارات الآلية، من اختبارات الوحدة السريعة والرخيصة في القاعدة إلى اختبارات المتصفح الواقعية من البداية إلى النهاية في القمة.',
    browserLinkText: 'ما هو اختبار أتمتة المتصفح؟',
    browserDesc:
      ' — ما هو، وما المقايضات المرتبطة بواقعيته: فهو أبطأ وأكثر هشاشة وأصعب تشخيصًا من اختبار الوحدة.',
    ciLinkText: 'ما هو اختبار التكامل المستمر؟',
    ciDesc:
      ' — تشغيل مجموعة اختباراتك الآلية تلقائيًا مع كل تغيير، فيُكتشف الكود المعطوب قبل دمجه لا بعده.',
    howToStartLinkText: 'كيف تبدأ تعلم الاختبار الآلي؟',
    howToStartDesc:
      ' — مسار خطوة بخطوة: اختر لغة، واختر أداة، وشغّل أول سكربت لك على هذا الموقع، ثم تدرّب على أمثلة عملية حقيقية.',
    aiLinkText: 'كيف يساعد الذكاء الاصطناعي في الاختبار الآلي؟',
    aiDesc:
      ' — كيف ولماذا يظهر الذكاء الاصطناعي اليوم في كتابة الاختبارات وCI/CD والاستكشاف الرشيق، والتحفظ الوحيد الذي ينطبق على الثلاثة.',
    relatedConceptsLinkText: 'ما هي المفاهيم ذات الصلة بالاختبار الآلي؟',
    relatedConceptsDesc:
      ' — مقدمات ودّية عن محررات الكود والتحكم في الإصدارات (git وGitHub) والاستكشاف الرشيق.'
  };

  const KO: Messages = {
    title: '학습',
    metaDescription:
      '자동화 테스트가 무엇인지, 그리고 Selenium, WebdriverIO, Playwright 같은 브라우저 자동화 도구로 시작하는 방법을 알아보세요.',
    heading: '학습',
    intro:
      '짧은 글 여덟 편으로 구성되어 있습니다. 자동화 테스트가 무엇이며 왜 할 만한 가치가 있는지, 자동화 테스트 피라미드와 그 안에서 브라우저 자동화가 차지하는 위치, 브라우저 테스트의 장단점, 지속적 통합이 이러한 테스트를 자동으로 실행하는 방법, 직접 브라우저 자동화를 체험해 보는 실용적인 경로, 오늘날 AI가 이 모든 것에서 차지하는 위치, 그리고 이를 둘러싼 일상적인 도구와 관행을 다룹니다.',
    whatIsLinkText: '자동화 테스트란 무엇인가?',
    whatIsDesc: ' — 자동화 테스트가 무엇이며, 수동 테스트와 어떻게 다르고 어떻게 보완하는지 설명합니다.',
    purposeLinkText: '자동화 테스트의 목적은 무엇인가?',
    purposeDesc:
      ' — 자동화 테스트를 작성하는 노력의 대가로 팀이 실제로 얻는 것: 더 이른 버그 발견, 지칠 줄 모르는 반복, 그리고 자주 릴리스할 수 있는 자신감.',
    pyramidLinkText: '자동화 테스트 피라미드란 무엇인가?',
    pyramidDesc:
      ' — 빠르고 저렴한 단위 테스트가 있는 바닥에서부터 현실적인 엔드 투 엔드 브라우저 테스트가 있는 꼭대기까지, 자동화 테스트의 세 가지 계층.',
    browserLinkText: '브라우저 자동화 테스트란 무엇인가?',
    browserDesc:
      ' — 그것이 무엇이며, 현실성에 따르는 트레이드오프: 단위 테스트보다 느리고, 더 깨지기 쉽고, 원인을 진단하기 더 어렵습니다.',
    ciLinkText: '지속적 통합 테스트란 무엇인가?',
    ciDesc:
      ' — 변경이 있을 때마다 자동화 테스트 스위트를 자동으로 실행하여, 깨진 코드를 병합 후가 아니라 병합 전에 잡아냅니다.',
    howToStartLinkText: '자동화 테스트 학습은 어떻게 시작하나요?',
    howToStartDesc:
      ' — 단계별 경로: 언어를 고르고, 도구를 고르고, 이 사이트를 대상으로 첫 스크립트를 실행한 다음, 실제 예제로 연습합니다.',
    aiLinkText: '인공지능은 자동화 테스트를 어떻게 돕는가?',
    aiDesc:
      ' — 오늘날 AI가 테스트 작성, CI/CD, 애자일 디스커버리에서 어떻게, 왜 활용되는지, 그리고 세 가지 모두에 해당하는 한 가지 유의점.',
    relatedConceptsLinkText: '자동화 테스트와 관련된 개념은 무엇인가?',
    relatedConceptsDesc:
      ' — 코드 에디터, 버전 관리(git과 GitHub), 애자일 디스커버리에 대한 친절한 입문.'
  };

  const FR: Messages = {
    title: 'Apprendre',
    metaDescription:
      "Découvrez ce qu'est le test automatisé et comment démarrer avec des outils d'automatisation de navigateur comme Selenium, WebdriverIO et Playwright.",
    heading: 'Apprendre',
    intro:
      "Huit courts articles : ce qu'est le test automatisé et pourquoi il vaut la peine, la pyramide des tests automatisés et la place qu'y occupe l'automatisation de navigateur, les compromis des tests de navigateur, comment l'intégration continue exécute ces tests automatiquement, un parcours pratique pour vous initier vous-même à l'automatisation de navigateur, la place de l'IA dans tout cela aujourd'hui, et les outils et pratiques du quotidien qui l'entourent.",
    whatIsLinkText: "Qu'est-ce que le test automatisé ?",
    whatIsDesc: " — ce qu'est le test automatisé, en quoi il diffère du test manuel et le complète.",
    purposeLinkText: "Quel est le but des tests automatisés ?",
    purposeDesc:
      " — ce qu'une équipe obtient réellement en retour de l'effort d'écrire des tests automatisés : des bugs détectés plus tôt, une répétition infatigable et la confiance nécessaire pour livrer souvent.",
    pyramidLinkText: "Qu'est-ce que la pyramide des tests automatisés ?",
    pyramidDesc:
      " — les trois couches de tests automatisés, des tests unitaires rapides et peu coûteux à la base aux tests de navigateur de bout en bout réalistes au sommet.",
    browserLinkText: "Qu'est-ce que le test automatisé de navigateur ?",
    browserDesc:
      " — ce que c'est, et les compromis qu'implique son réalisme : plus lent, plus fragile et plus difficile à diagnostiquer qu'un test unitaire.",
    ciLinkText: "Qu'est-ce que le test automatisé d'intégration continue ?",
    ciDesc:
      " — exécuter automatiquement votre suite de tests automatisés à chaque modification, afin que le code défectueux soit détecté avant sa fusion plutôt qu'après.",
    howToStartLinkText: "Comment commencer à apprendre les tests automatisés ?",
    howToStartDesc:
      " — un parcours pas à pas : choisir un langage, choisir un outil, exécuter votre premier script sur ce site, puis vous exercer sur de vrais exemples concrets.",
    aiLinkText: "Comment l'intelligence artificielle aide-t-elle les tests automatisés ?",
    aiDesc:
      " — comment et pourquoi l'intelligence artificielle intervient aujourd'hui dans l'écriture des tests, le CI/CD et la découverte agile, et la mise en garde qui s'applique aux trois.",
    relatedConceptsLinkText: "Quels sont les concepts liés aux tests automatisés ?",
    relatedConceptsDesc:
      " — des introductions accessibles aux éditeurs de code, à la gestion de versions (git et GitHub) et à la découverte agile."
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
