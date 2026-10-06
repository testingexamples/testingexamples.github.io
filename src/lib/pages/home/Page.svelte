<script lang="ts">
  import { SectionHeading } from 'lily-design-system-svelte-headless';
  import SiteFixtures from '#lib/components/SiteFixtures.svelte';
  import { SITE_NAME } from '#lib/site.js';
  import { localeHref } from '#lib/i18n/paths.js';
  import type { Locale } from '#lib/i18n/locales.js';

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

  const AR: Messages = {
    metaDescription:
      'تجهيزات HTML مجانية ومفتوحة المصدر للتدرب على أتمتة المتصفح: ابحث عن العناصر بالمعرّف (id) والاسم والفئة ونص الرابط وXPath، وتفاعل مع مدخلات النماذج.',
    heading: `مرحبًا بك في ${SITE_NAME}`,
    intro: `إن كنت جديدًا على أتمتة المتصفح، فأنت في المكان الصحيح. ${SITE_NAME} موقع صغير ومجاني ومفتوح المصدر، بُني لكل من يتعلم جعل المتصفح يؤدي المهام تلقائيًا — النقر والكتابة والبحث والانتظار والتحقق — سواء لم تكتب سطر كود من قبل أو كنت تعرف الأساسيات وتريد مرجعًا سريعًا أو مكانًا موثوقًا لتجربة شيء ما.`,
    learnHeading: 'تعلّم',
    learnMoreHeading: 'تعلّم المزيد',
    examplesHeading: 'أمثلة',
    practiceHeading: 'تدرّب على هذه الصفحة',
    practiceBody:
      'كل ما في الأسفل ملعب تجهيزات ثابت: معرّفات وأسماء وفئات ونصوص ثابتة تستطيع أدوات الأتمتة العثور عليها بموثوقية في كل مرة، وهذا بالضبط ما يجعله مفيدًا للتدرب عليه مباشرةً — وجّه السكربت إليه، واعثر على عنصر، وتفاعل معه، وشاهد ما يحدث. والعقد الدقيق الذي تلتزم به هذه الصفحة موثّق في ملف',
    links: {
      whatIsAutomaticTesting: 'ما هو الاختبار الآلي؟',
      whatIsThePurpose: 'ما الغرض من الاختبار الآلي؟',
      whatIsTheTestingPyramid: 'ما هو هرم الاختبار الآلي؟',
      whatIsBrowserAutomation: 'ما هو اختبار أتمتة المتصفح؟',
      howToStartLearning: 'كيف تبدأ تعلم الاختبار الآلي؟',
      whatAreRelatedConcepts: 'ما هي المفاهيم ذات الصلة بالاختبار الآلي؟',
      howDoesAiHelp: 'كيف يساعد الذكاء الاصطناعي في الاختبار الآلي؟',
      whatIsContinuousIntegration: 'ما هو اختبار التكامل المستمر؟',
      whatIsDevOps: 'ما هو DevOps للاختبار الآلي؟',
      whatAreFlowMetrics: 'ما المقاييس التي تفيد الاختبار الآلي؟',
      whatIsLeanSixSigma: 'كيف يقود Six Sigma الاختبار اليدوي إلى الاختبار الآلي؟',
      googleSearchExamples: 'أمثلة Google Search',
      googleMapsExamples: 'أمثلة Google Maps',
      givenWhenThenExamples: 'أمثلة Given-When-Then',
      demoApp: 'تطبيق تجريبي',
      demoAppSuffix: 'تسجيل دخول وأيقونات تنقل وبحث وعلامات تبويب للتدرب عليها'
    }
  };

  const KO: Messages = {
    metaDescription:
      '브라우저 자동화를 연습하기 위한 무료 오픈 소스 HTML 픽스처: id, name, class, 링크 텍스트, XPath로 요소를 찾고 양식 입력과 상호작용해 보세요.',
    heading: `${SITE_NAME}에 오신 것을 환영합니다`,
    intro: `브라우저 자동화가 처음이라면 잘 찾아오셨습니다. ${SITE_NAME}은(는) 브라우저가 클릭, 입력, 검색, 대기, 단언 같은 일을 자동으로 하게 만드는 법을 배우는 모든 사람을 위해 만든 작은 무료 오픈 소스 사이트입니다. 코드를 한 줄도 써 본 적이 없든, 이미 요령을 알고 빠른 참고 자료나 믿을 만한 연습 장소가 필요하든 상관없습니다.`,
    learnHeading: '학습',
    learnMoreHeading: '더 알아보기',
    examplesHeading: '예제',
    practiceHeading: '이 페이지에서 연습하기',
    practiceBody:
      '아래의 모든 것은 안정적인 픽스처 놀이터입니다. 자동화 도구가 매번 안정적으로 찾을 수 있는 고정된 id, name, class, 텍스트로 이루어져 있어서, 스크립트를 여기에 겨누고 요소를 찾고 상호작용하며 무슨 일이 일어나는지 보는 식으로 직접 연습하기에 딱 좋습니다. 이 페이지가 지키는 정확한 계약은 이 저장소의 다음 문서에 정리되어 있습니다:',
    links: {
      whatIsAutomaticTesting: '자동화 테스트란 무엇인가?',
      whatIsThePurpose: '자동화 테스트의 목적은 무엇인가?',
      whatIsTheTestingPyramid: '자동화 테스트 피라미드란 무엇인가?',
      whatIsBrowserAutomation: '브라우저 자동화 테스트란 무엇인가?',
      howToStartLearning: '자동화 테스트 학습은 어떻게 시작하나요?',
      whatAreRelatedConcepts: '자동화 테스트와 관련된 개념은 무엇인가?',
      howDoesAiHelp: '인공지능은 자동화 테스트를 어떻게 돕는가?',
      whatIsContinuousIntegration: '지속적 통합 테스트란 무엇인가?',
      whatIsDevOps: '자동화 테스트를 위한 DevOps란 무엇인가?',
      whatAreFlowMetrics: '자동화 테스트에 도움이 되는 지표는 무엇인가?',
      whatIsLeanSixSigma: 'Six Sigma는 수동 테스트를 어떻게 자동화 테스트로 이끄는가?',
      googleSearchExamples: 'Google Search 예제',
      googleMapsExamples: 'Google Maps 예제',
      givenWhenThenExamples: 'Given-When-Then 예제',
      demoApp: '데모 앱',
      demoAppSuffix: '연습할 수 있는 로그인, 내비게이션 아이콘, 검색, 탭'
    }
  };

  const MESSAGES: Record<Locale, Messages> = {
    'en-001': EN_001,
    'en-gb': EN_001,
    'en-gb-oxendict': EN_001,
    'en-us': EN_US,
    'cy-gb': CY,
    'cy-001': CY,
    'zh-cn': ZH,
    'ar-001': AR,
    'ko-001': KO
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
    padding-inline-start: 1.5rem;
  }
  .repo-list li {
    padding: 0.2rem 0;
    border-bottom: none;
  }
</style>
