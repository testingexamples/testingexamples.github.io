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
    learnMoreHeading: 'Learn More',
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
      whatIsCodeEditors: "Code editors — e.g. Visual Studio Code",
      whatIsVersionControl: "Version control — git and GitHub",
      whatIsAgileDiscovery: "Agile and working with users — discovery",
      whatIsUnixShell: "Unix commands — the command line",
      whatIsCloudHosting: "Cloud hosting for testing"
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
    learnMoreHeading: 'Dysgu Mwy',
    kindsHeading: "Mathau o brofion",
    relatedHeading: "Cysyniadau cysylltiedig",
    links: {
      whatIsAutomaticTesting: "Beth yw profi awtomatig?",
      whatIsThePurpose: 'Beth yw diben profi awtomatig?',
      whatIsTheTestingPyramid: 'Beth yw pyramid profi awtomatig?',
      whatIsBrowserAutomation: 'Beth yw profi awtomatig porwr?',
      howToStartLearning: 'Sut i ddechrau dysgu profi awtomatig?',
      howDoesAiHelp: "Sut mae deallusrwydd artiffisial yn helpu profi awtomatig?",
      whatIsContinuousIntegration: 'Beth yw profi integreiddio parhaus awtomatig?',
      whatIsDevOps: 'Beth yw DevOps ar gyfer profi awtomatig?',
      whatAreFlowMetrics: "Pa fetrigau sy'n helpu profi awtomatig?",
      whatIsLeanSixSigma: 'Sut mae Six Sigma yn arwain profi â llaw at brofi awtomatig?',
      whatIsGherkin: "Beth yw Gherkin?",
      shiftLeft: "Symud i’r chwith ar gyfer profi awtomatig",
      whatIsUnitTest: "Beth yw prawf uned?",
      whatIsBrowserTest: "Beth yw prawf sy’n seiliedig ar borwr?",
      whatIsCodeEditors: "Golygyddion cod — e.e. Visual Studio Code",
      whatIsVersionControl: "Rheoli fersiynau — git a GitHub",
      whatIsAgileDiscovery: "Ystwyth a gweithio gyda defnyddwyr — darganfod",
      whatIsUnixShell: "Gorchmynion Unix — y llinell orchymyn",
      whatIsCloudHosting: "Cynnal ar y cwmwl ar gyfer profi"
    }
  };

  const ZH: Messages = {
    title: '学习',
    metaDescription:
      '了解什么是自动化测试，以及如何开始使用 Selenium、WebdriverIO 和 Playwright 等浏览器自动化工具。',
    heading: '学习',
    learnHeading: '学习',
    learnMoreHeading: '延伸学习',
    kindsHeading: "测试的种类",
    relatedHeading: "相关概念",
    links: {
      whatIsAutomaticTesting: '什么是自动化测试？',
      whatIsThePurpose: '自动化测试的目的是什么？',
      whatIsTheTestingPyramid: '什么是自动化测试金字塔？',
      whatIsBrowserAutomation: '什么是浏览器自动化测试？',
      howToStartLearning: '如何开始学习自动化测试？',
      howDoesAiHelp: '人工智能如何帮助自动化测试？',
      whatIsContinuousIntegration: '什么是持续集成自动化测试？',
      whatIsDevOps: '什么是自动化测试的 DevOps？',
      whatAreFlowMetrics: '哪些指标有助于自动化测试？',
      whatIsLeanSixSigma: '六西格玛如何引导人工测试进入自动化测试？',
      whatIsGherkin: "什么是 Gherkin？",
      shiftLeft: "自动化测试的左移",
      whatIsUnitTest: "什么是单元测试？",
      whatIsBrowserTest: "什么是基于浏览器的测试？",
      whatIsCodeEditors: "代码编辑器——例如 Visual Studio Code",
      whatIsVersionControl: "版本控制——git 和 GitHub",
      whatIsAgileDiscovery: "敏捷与用户协作——探索",
      whatIsUnixShell: "Unix 命令——命令行",
      whatIsCloudHosting: "用于测试的云托管"
    }
  };

  const AR: Messages = {
    title: 'تعلّم',
    metaDescription:
      'تعرّف على ماهية الاختبار الآلي وكيف تبدأ مع أدوات أتمتة المتصفح مثل Selenium وWebdriverIO وPlaywright.',
    heading: 'تعلّم',
    learnHeading: 'تعلّم',
    learnMoreHeading: 'تعلّم المزيد',
    kindsHeading: "أنواع الاختبارات",
    relatedHeading: "مفاهيم ذات صلة",
    links: {
      whatIsAutomaticTesting: 'ما هو الاختبار الآلي؟',
      whatIsThePurpose: 'ما الغرض من الاختبار الآلي؟',
      whatIsTheTestingPyramid: 'ما هو هرم الاختبار الآلي؟',
      whatIsBrowserAutomation: 'ما هو اختبار أتمتة المتصفح؟',
      howToStartLearning: 'كيف تبدأ تعلم الاختبار الآلي؟',
      howDoesAiHelp: 'كيف يساعد الذكاء الاصطناعي في الاختبار الآلي؟',
      whatIsContinuousIntegration: 'ما هو اختبار التكامل المستمر؟',
      whatIsDevOps: 'ما هو DevOps للاختبار الآلي؟',
      whatAreFlowMetrics: 'ما المقاييس التي تفيد الاختبار الآلي؟',
      whatIsLeanSixSigma: 'كيف يقود Six Sigma الاختبار اليدوي إلى الاختبار الآلي؟',
      whatIsGherkin: "ما هو Gherkin؟",
      shiftLeft: "الانتقال لليسار في الاختبار الآلي",
      whatIsUnitTest: "ما هو اختبار الوحدة؟",
      whatIsBrowserTest: "ما هو الاختبار القائم على المتصفح؟",
      whatIsCodeEditors: "محررات الكود — مثل Visual Studio Code",
      whatIsVersionControl: "التحكم في الإصدارات — git وGitHub",
      whatIsAgileDiscovery: "الرشاقة والعمل مع المستخدمين — الاستكشاف",
      whatIsUnixShell: "أوامر Unix — سطر الأوامر",
      whatIsCloudHosting: "الاستضافة السحابية للاختبار"
    }
  };

  const KO: Messages = {
    title: '학습',
    metaDescription:
      '자동화 테스트가 무엇인지, 그리고 Selenium, WebdriverIO, Playwright 같은 브라우저 자동화 도구로 시작하는 방법을 알아보세요.',
    heading: '학습',
    learnHeading: '학습',
    learnMoreHeading: '더 알아보기',
    kindsHeading: "테스트의 종류",
    relatedHeading: "관련 개념",
    links: {
      whatIsAutomaticTesting: '자동화 테스트란 무엇인가?',
      whatIsThePurpose: '자동화 테스트의 목적은 무엇인가?',
      whatIsTheTestingPyramid: '자동화 테스트 피라미드란 무엇인가?',
      whatIsBrowserAutomation: '브라우저 자동화 테스트란 무엇인가?',
      howToStartLearning: '자동화 테스트 학습은 어떻게 시작하나요?',
      howDoesAiHelp: '인공지능은 자동화 테스트를 어떻게 돕는가?',
      whatIsContinuousIntegration: '지속적 통합 테스트란 무엇인가?',
      whatIsDevOps: '자동화 테스트를 위한 DevOps란 무엇인가?',
      whatAreFlowMetrics: '자동화 테스트에 도움이 되는 지표는 무엇인가?',
      whatIsLeanSixSigma: 'Six Sigma는 수동 테스트를 어떻게 자동화 테스트로 이끄는가?',
      whatIsGherkin: "Gherkin이란 무엇인가?",
      shiftLeft: "자동화 테스트의 시프트 레프트",
      whatIsUnitTest: "단위 테스트란 무엇인가?",
      whatIsBrowserTest: "브라우저 기반 테스트란 무엇인가?",
      whatIsCodeEditors: "코드 에디터 — 예: Visual Studio Code",
      whatIsVersionControl: "버전 관리 — git과 GitHub",
      whatIsAgileDiscovery: "애자일과 사용자와 함께 일하기 — 디스커버리",
      whatIsUnixShell: "Unix 명령어 — 명령줄",
      whatIsCloudHosting: "테스트를 위한 클라우드 호스팅"
    }
  };

  const FR: Messages = {
    title: 'Apprendre',
    metaDescription:
      "Découvrez ce qu'est le test automatisé et comment démarrer avec des outils d'automatisation de navigateur comme Selenium, WebdriverIO et Playwright.",
    heading: 'Apprendre',
    learnHeading: 'Apprendre',
    learnMoreHeading: 'En savoir plus',
    kindsHeading: "Types de tests",
    relatedHeading: "Concepts liés",
    links: {
      whatIsAutomaticTesting: "Qu'est-ce que le test automatisé ?",
      whatIsThePurpose: "Quel est le but des tests automatisés ?",
      whatIsTheTestingPyramid: "Qu'est-ce que la pyramide des tests automatisés ?",
      whatIsBrowserAutomation: "Qu'est-ce que le test automatisé de navigateur ?",
      howToStartLearning: "Comment commencer à apprendre les tests automatisés ?",
      howDoesAiHelp: "Comment l'intelligence artificielle aide-t-elle les tests automatisés ?",
      whatIsContinuousIntegration: "Qu'est-ce que le test automatisé d'intégration continue ?",
      whatIsDevOps: "Qu'est-ce que DevOps pour les tests automatisés ?",
      whatAreFlowMetrics: "Quelles métriques aident les tests automatisés ?",
      whatIsLeanSixSigma: "Comment Six Sigma mène-t-il des tests manuels aux tests automatisés ?",
      whatIsGherkin: "Qu'est-ce que Gherkin ?",
      shiftLeft: "Le shift left pour les tests automatisés",
      whatIsUnitTest: "Qu'est-ce qu'un test unitaire ?",
      whatIsBrowserTest: "Qu'est-ce qu'un test basé sur le navigateur ?",
      whatIsCodeEditors: "Éditeurs de code — par exemple Visual Studio Code",
      whatIsVersionControl: "Gestion de versions — git et GitHub",
      whatIsAgileDiscovery: "Agilité et travail avec les utilisateurs — la découverte",
      whatIsUnixShell: "Commandes Unix — la ligne de commande",
      whatIsCloudHosting: "L'hébergement dans le cloud pour les tests"
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
