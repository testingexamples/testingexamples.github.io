<script lang="ts">
  import { localeHref } from '#lib/i18n/paths.js';
  import type { Locale } from '#lib/i18n/locales.js';

  let { locale }: { locale: Locale } = $props();

  type Messages = {
    title: string;
    metaDescription: string;
    heading: string;
    learnHeading: string;
    learnMoreHeading: string;
    kindsHeading: string;
    relatedHeading: string;
    links: {
      whatIsAutomaticTesting: string;
      whatIsThePurpose: string;
      whatIsTheTestingPyramid: string;
      whatIsBrowserAutomation: string;
      howToStartLearning: string;
      howDoesAiHelp: string;
      whatIsContinuousIntegration: string;
      whatIsDevOps: string;
      whatAreFlowMetrics: string;
      whatIsLeanSixSigma: string;
      whatIsGherkin: string;
      shiftLeft: string;
      whatIsUnitTest: string;
      whatIsBrowserTest: string;
      regressionTest: string;
      integrationTest: string;
      benchmarkTest: string;
      whatIsCodeEditors: string;
      whatIsVersionControl: string;
      whatIsAgileDiscovery: string;
      whatIsUnixShell: string;
      whatIsCloudHosting: string;
    };
  };

  const EN_001: Messages = {
    title: 'Learn',
    metaDescription:
      'Learn what automatic testing is and how to get started with browser automation tools like Selenium, WebdriverIO, and Playwright.',
    heading: 'Learn',
    learnHeading: 'Learn',
    learnMoreHeading: "Related concepts",
    kindsHeading: "Kinds of tests",
    relatedHeading: "Related concepts",
    links: {
      whatIsAutomaticTesting: 'What is automatic testing?',
      whatIsThePurpose: 'What is the purpose of automatic testing?',
      whatIsTheTestingPyramid: 'What is the automatic testing pyramid?',
      whatIsBrowserAutomation: 'What is browser testing?',
      howToStartLearning: 'How to start learning automatic testing?',
      howDoesAiHelp: 'Artificial intelligence for automatic testing',
      whatIsContinuousIntegration: 'Continuous integration for automatic testing',
      whatIsDevOps: 'Devops for automatic testing',
      whatAreFlowMetrics: 'Metrics for automatic testing',
      whatIsLeanSixSigma: 'Lean Six Sigma for automatic testing',
      whatIsGherkin: "Gherkin syntax for automatic testing",
      shiftLeft: "Shift left for automatic testing",
      whatIsUnitTest: "Unit test",
      whatIsBrowserTest: "Browser test",
      regressionTest: "Regression test",
      integrationTest: "Integration test",
      benchmarkTest: "Benchmark test",
      whatIsCodeEditors: "Code editors such as Visual Studio Code",
      whatIsVersionControl: "Version control systems such as Git and GitHub",
      whatIsAgileDiscovery: "Agile and working with users — discovery",
      whatIsUnixShell: "Unix commands such as for file browsing",
      whatIsCloudHosting: "Cloud hosting such as for servers"
    }
  };

  // No British/American/Oxford spelling divergence occurs in this page's
  // vocabulary, so all four English locales share one copy. See
  // spec/locales/index.md.
  const CY: Messages = {
    title: 'Dysgu',
    metaDescription:
      "Dysgwch beth yw profi awtomatig a sut i ddechrau gydag offer awtomatiaeth porwr fel Selenium, WebdriverIO, a Playwright.",
    heading: 'Dysgu',
    learnHeading: 'Dysgu',
    learnMoreHeading: "Cysyniadau cysylltiedig",
    kindsHeading: "Mathau o brofion",
    relatedHeading: "Cysyniadau cysylltiedig",
    links: {
      whatIsAutomaticTesting: "Beth yw profi awtomatig?",
      whatIsThePurpose: 'Beth yw diben profi awtomatig?',
      whatIsTheTestingPyramid: 'Beth yw pyramid profi awtomatig?',
      whatIsBrowserAutomation: 'Beth yw profi porwr?',
      howToStartLearning: 'Sut i ddechrau dysgu profi awtomatig?',
      howDoesAiHelp: "Deallusrwydd artiffisial ar gyfer profi awtomatig",
      whatIsContinuousIntegration: 'Integreiddio parhaus ar gyfer profi awtomatig',
      whatIsDevOps: 'Devops ar gyfer profi awtomatig',
      whatAreFlowMetrics: "Metrigau ar gyfer profi awtomatig",
      whatIsLeanSixSigma: 'Lean Six Sigma ar gyfer profi awtomatig',
      whatIsGherkin: "Cystrawen Gherkin ar gyfer profi awtomatig",
      shiftLeft: "Symud i’r chwith ar gyfer profi awtomatig",
      whatIsUnitTest: "Prawf uned",
      whatIsBrowserTest: "Prawf porwr",
      regressionTest: "Prawf atchweliad",
      integrationTest: "Prawf integreiddio",
      benchmarkTest: "Prawf meincnod",
      whatIsCodeEditors: "Golygyddion cod fel Visual Studio Code",
      whatIsVersionControl: "Systemau rheoli fersiynau fel Git a GitHub",
      whatIsAgileDiscovery: "Ystwyth a gweithio gyda defnyddwyr — darganfod",
      whatIsUnixShell: "Gorchmynion Unix fel rhai ar gyfer pori ffeiliau",
      whatIsCloudHosting: "Cynnal ar y cwmwl fel ar gyfer gweinyddion"
    }
  };

  const ZH: Messages = {
    title: '学习',
    metaDescription:
      '了解什么是自动化测试，以及如何开始使用 Selenium、WebdriverIO 和 Playwright 等浏览器自动化工具。',
    heading: '学习',
    learnHeading: '学习',
    learnMoreHeading: "相关概念",
    kindsHeading: "测试的种类",
    relatedHeading: "相关概念",
    links: {
      whatIsAutomaticTesting: '什么是自动化测试？',
      whatIsThePurpose: '自动化测试的目的是什么？',
      whatIsTheTestingPyramid: '什么是自动化测试金字塔？',
      whatIsBrowserAutomation: '什么是浏览器测试？',
      howToStartLearning: '如何开始学习自动化测试？',
      howDoesAiHelp: '自动化测试中的人工智能',
      whatIsContinuousIntegration: '自动化测试的持续集成',
      whatIsDevOps: '自动化测试的 devops',
      whatAreFlowMetrics: '自动化测试的指标',
      whatIsLeanSixSigma: '自动化测试的精益六西格玛',
      whatIsGherkin: "自动化测试的 Gherkin 语法",
      shiftLeft: "自动化测试的左移",
      whatIsUnitTest: "单元测试",
      whatIsBrowserTest: "浏览器测试",
      regressionTest: "回归测试",
      integrationTest: "集成测试",
      benchmarkTest: "基准测试",
      whatIsCodeEditors: "代码编辑器，例如 Visual Studio Code",
      whatIsVersionControl: "Git 和 GitHub 等版本控制系统",
      whatIsAgileDiscovery: "敏捷与用户协作——探索",
      whatIsUnixShell: "Unix 命令，例如用于浏览文件的命令",
      whatIsCloudHosting: "云托管，例如用于服务器"
    }
  };

  const AR: Messages = {
    title: 'تعلّم',
    metaDescription:
      'تعرّف على ماهية الاختبار الآلي وكيف تبدأ مع أدوات أتمتة المتصفح مثل Selenium وWebdriverIO وPlaywright.',
    heading: 'تعلّم',
    learnHeading: 'تعلّم',
    learnMoreHeading: "مفاهيم ذات صلة",
    kindsHeading: "أنواع الاختبارات",
    relatedHeading: "مفاهيم ذات صلة",
    links: {
      whatIsAutomaticTesting: 'ما هو الاختبار الآلي؟',
      whatIsThePurpose: 'ما الغرض من الاختبار الآلي؟',
      whatIsTheTestingPyramid: 'ما هو هرم الاختبار الآلي؟',
      whatIsBrowserAutomation: 'ما هو اختبار المتصفح؟',
      howToStartLearning: 'كيف تبدأ تعلم الاختبار الآلي؟',
      howDoesAiHelp: 'الذكاء الاصطناعي للاختبار الآلي',
      whatIsContinuousIntegration: 'التكامل المستمر للاختبار الآلي',
      whatIsDevOps: 'Devops للاختبار الآلي',
      whatAreFlowMetrics: 'المقاييس للاختبار الآلي',
      whatIsLeanSixSigma: 'Lean Six Sigma للاختبار الآلي',
      whatIsGherkin: "صيغة Gherkin للاختبار الآلي",
      shiftLeft: "الانتقال لليسار في الاختبار الآلي",
      whatIsUnitTest: "اختبار الوحدة",
      whatIsBrowserTest: "اختبار المتصفح",
      regressionTest: "اختبار الانحدار",
      integrationTest: "اختبار التكامل",
      benchmarkTest: "اختبار الأداء المرجعي",
      whatIsCodeEditors: "محررات الكود مثل Visual Studio Code",
      whatIsVersionControl: "أنظمة التحكم في الإصدارات مثل Git وGitHub",
      whatIsAgileDiscovery: "الرشاقة والعمل مع المستخدمين — الاستكشاف",
      whatIsUnixShell: "أوامر Unix مثل أوامر تصفح الملفات",
      whatIsCloudHosting: "الاستضافة السحابية مثل استضافة الخوادم"
    }
  };

  const KO: Messages = {
    title: '학습',
    metaDescription:
      '자동화 테스트가 무엇인지, 그리고 Selenium, WebdriverIO, Playwright 같은 브라우저 자동화 도구로 시작하는 방법을 알아보세요.',
    heading: '학습',
    learnHeading: '학습',
    learnMoreHeading: "관련 개념",
    kindsHeading: "테스트의 종류",
    relatedHeading: "관련 개념",
    links: {
      whatIsAutomaticTesting: '자동화 테스트란 무엇인가?',
      whatIsThePurpose: '자동화 테스트의 목적은 무엇인가?',
      whatIsTheTestingPyramid: '자동화 테스트 피라미드란 무엇인가?',
      whatIsBrowserAutomation: '브라우저 테스트란 무엇인가?',
      howToStartLearning: '자동화 테스트 학습은 어떻게 시작하나요?',
      howDoesAiHelp: '자동화 테스트를 위한 인공지능',
      whatIsContinuousIntegration: '자동화 테스트를 위한 지속적 통합',
      whatIsDevOps: '자동화 테스트를 위한 devops',
      whatAreFlowMetrics: '자동화 테스트를 위한 지표',
      whatIsLeanSixSigma: '자동화 테스트를 위한 린 식스 시그마',
      whatIsGherkin: "자동화 테스트를 위한 Gherkin 문법",
      shiftLeft: "자동화 테스트의 시프트 레프트",
      whatIsUnitTest: "단위 테스트",
      whatIsBrowserTest: "브라우저 테스트",
      regressionTest: "회귀 테스트",
      integrationTest: "통합 테스트",
      benchmarkTest: "벤치마크 테스트",
      whatIsCodeEditors: "Visual Studio Code 같은 코드 에디터",
      whatIsVersionControl: "Git과 GitHub 같은 버전 관리 시스템",
      whatIsAgileDiscovery: "애자일과 사용자와 함께 일하기 — 디스커버리",
      whatIsUnixShell: "파일 탐색용 명령 같은 Unix 명령어",
      whatIsCloudHosting: "서버용 같은 클라우드 호스팅"
    }
  };

  const FR: Messages = {
    title: 'Apprendre',
    metaDescription:
      "Découvrez ce qu'est le test automatisé et comment démarrer avec des outils d'automatisation de navigateur comme Selenium, WebdriverIO et Playwright.",
    heading: 'Apprendre',
    learnHeading: 'Apprendre',
    learnMoreHeading: "Concepts liés",
    kindsHeading: "Types de tests",
    relatedHeading: "Concepts liés",
    links: {
      whatIsAutomaticTesting: "Qu'est-ce que le test automatisé ?",
      whatIsThePurpose: "Quel est le but des tests automatisés ?",
      whatIsTheTestingPyramid: "Qu'est-ce que la pyramide des tests automatisés ?",
      whatIsBrowserAutomation: "Qu'est-ce que le test de navigateur ?",
      howToStartLearning: "Comment commencer à apprendre les tests automatisés ?",
      howDoesAiHelp: "L'intelligence artificielle pour les tests automatisés",
      whatIsContinuousIntegration: "L'intégration continue pour les tests automatisés",
      whatIsDevOps: "Le devops pour les tests automatisés",
      whatAreFlowMetrics: "Les métriques pour les tests automatisés",
      whatIsLeanSixSigma: "Lean Six Sigma pour les tests automatisés",
      whatIsGherkin: "La syntaxe Gherkin pour les tests automatisés",
      shiftLeft: "Le shift left pour les tests automatisés",
      whatIsUnitTest: "Test unitaire",
      whatIsBrowserTest: "Test de navigateur",
      regressionTest: "Test de régression",
      integrationTest: "Test d'intégration",
      benchmarkTest: "Test de benchmark",
      whatIsCodeEditors: "Les éditeurs de code comme Visual Studio Code",
      whatIsVersionControl: "Les systèmes de gestion de versions comme Git et GitHub",
      whatIsAgileDiscovery: "Agilité et travail avec les utilisateurs — la découverte",
      whatIsUnixShell: "Les commandes Unix comme celles pour parcourir les fichiers",
      whatIsCloudHosting: "L'hébergement cloud, par exemple pour des serveurs"
    }
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
</div>

<section class="section prose">
  <h2>{m.learnHeading}</h2>
  <ul class="repo-list">
    <li><a href={localeHref(locale, 'what-is-automatic-testing')}>{m.links.whatIsAutomaticTesting}</a></li>
    <li><a href={localeHref(locale, 'what-is-the-purpose-of-automatic-testing')}>{m.links.whatIsThePurpose}</a></li>
    <li><a href={localeHref(locale, 'what-is-the-testing-pyramid')}>{m.links.whatIsTheTestingPyramid}</a></li>
    <li><a href={localeHref(locale, 'what-is-browser-automation-testing')}>{m.links.whatIsBrowserAutomation}</a></li>
    <li><a href={localeHref(locale, 'how-to-start-learning-automatic-testing')}>{m.links.howToStartLearning}</a></li>
  </ul>

  <h2>{m.learnMoreHeading}</h2>
  <ul class="repo-list">
    <li><a href={localeHref(locale, 'how-does-artificial-intelligence-help-automatic-testing')}>{m.links.howDoesAiHelp}</a></li>
    <li><a href={localeHref(locale, 'what-is-continuous-integration-testing')}>{m.links.whatIsContinuousIntegration}</a></li>
    <li><a href={localeHref(locale, 'what-is-devops-for-automatic-testing')}>{m.links.whatIsDevOps}</a></li>
    <li><a href={localeHref(locale, 'what-are-flow-metrics-for-automatic-testing')}>{m.links.whatAreFlowMetrics}</a></li>
    <li><a href={localeHref(locale, 'what-is-lean-six-sigma-for-automatic-testing')}>{m.links.whatIsLeanSixSigma}</a></li>
    <li><a href={localeHref(locale, 'learn-gherkin')}>{m.links.whatIsGherkin}</a></li>
    <li><a href={localeHref(locale, 'learn-shift-left')}>{m.links.shiftLeft}</a></li>
  </ul>

  <h2>{m.kindsHeading}</h2>
  <ul class="repo-list">
    <li><a href={localeHref(locale, 'learn-unit-test')}>{m.links.whatIsUnitTest}</a></li>
    <li><a href={localeHref(locale, 'learn-browser-test')}>{m.links.whatIsBrowserTest}</a></li>
    <li><a href={localeHref(locale, 'learn-regression-test')}>{m.links.regressionTest}</a></li>
    <li><a href={localeHref(locale, 'learn-integration-test')}>{m.links.integrationTest}</a></li>
    <li><a href={localeHref(locale, 'learn-benchmark-test')}>{m.links.benchmarkTest}</a></li>
  </ul>

  <h2>{m.relatedHeading}</h2>
  <ul class="repo-list">
    <li><a href={localeHref(locale, 'related-code-editors')}>{m.links.whatIsCodeEditors}</a></li>
    <li><a href={localeHref(locale, 'related-version-control')}>{m.links.whatIsVersionControl}</a></li>
    <li><a href={localeHref(locale, 'related-agile-discovery')}>{m.links.whatIsAgileDiscovery}</a></li>
    <li><a href={localeHref(locale, 'related-unix-shell')}>{m.links.whatIsUnixShell}</a></li>
    <li><a href={localeHref(locale, 'related-cloud-hosting')}>{m.links.whatIsCloudHosting}</a></li>
  </ul>
</section>

<style>
  /* Bullet points instead of the shared .repo-list border-bottom line
     separator (static/assets/style.css), scoped to this component. */
  .repo-list {
    list-style: disc;
    padding-inline-start: 1.5rem;
  }
  .repo-list li {
    padding: 0.2rem 0;
    border-bottom: none;
  }
</style>
