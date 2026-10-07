<script lang="ts">
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
      practice: string;
      practiceSuffix: string;
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
      demoAppSuffix: 'sign in, nav icons, search, and tabs to practise on',
      practice: 'Practice',
      practiceSuffix: 'stable ids, names, classes, and text to find and interact with'
    }
  };

  const EN_US: Messages = {
    ...EN_001,
    metaDescription:
      'Free open source HTML fixtures for practicing browser automation: find elements by id, name, class, link text, and XPath, and interact with form inputs.',
    links: {
      ...EN_001.links,
      demoAppSuffix: 'sign in, nav icons, search, and tabs to practice on'
    }
  };

  const CY: Messages = {
    metaDescription:
      "Cynnwys HTML sefydlog, cod agored ac am ddim, ar gyfer ymarfer awtomatiaeth porwr: dewch o hyd i elfennau yn ôl id, name, class, testun dolen ac XPath, a rhyngweithiwch â mewnbynnau ffurflen.",
    heading: `Croeso i ${SITE_NAME}`,
    intro: `Os ydych chi'n newydd i awtomatiaeth porwr, rydych chi yn y lle iawn. Mae ${SITE_NAME} yn wefan fach, cod agored ac am ddim, a adeiladwyd ar gyfer unrhyw un sy'n dysgu sut i wneud i borwr wneud pethau'n awtomatig — clicio, teipio, chwilio, aros, gwirio — boed nad ydych erioed wedi ysgrifennu llinell o god, neu eich bod eisoes yn gyfarwydd â'r pethau sylfaenol ac eisiau deunydd cyfeirio cyflym neu rywle dibynadwy i roi cynnig ar rywbeth.`,
    learnHeading: 'Dysgu',
    learnMoreHeading: 'Dysgu Mwy',
    examplesHeading: 'Enghreifftiau',
    links: {
      whatIsAutomaticTesting: "Beth yw profi awtomatig?",
      whatIsThePurpose: 'Beth yw diben profi awtomatig?',
      whatIsTheTestingPyramid: 'Beth yw pyramid profi awtomatig?',
      whatIsBrowserAutomation: 'Beth yw profi awtomatig porwr?',
      howToStartLearning: 'Sut i ddechrau dysgu profi awtomatig?',
      whatAreRelatedConcepts: 'Beth yw cysyniadau cysylltiedig ar gyfer profi awtomatig?',
      howDoesAiHelp: "Sut mae deallusrwydd artiffisial yn helpu profi awtomatig?",
      whatIsContinuousIntegration: 'Beth yw profi integreiddio parhaus awtomatig?',
      whatIsDevOps: 'Beth yw DevOps ar gyfer profi awtomatig?',
      whatAreFlowMetrics: "Pa fetrigau sy'n helpu profi awtomatig?",
      whatIsLeanSixSigma: 'Sut mae Six Sigma yn arwain profi â llaw at brofi awtomatig?',
      googleSearchExamples: 'Enghreifftiau Chwilio Google',
      googleMapsExamples: 'Enghreifftiau Mapiau Google',
      givenWhenThenExamples: 'Enghreifftiau Given-When-Then',
      demoApp: 'Ap Arddangos',
      demoAppSuffix: 'mewngofnodi, eiconau llywio, chwilio, a thabiau i ymarfer arnynt',
      practice: 'Ymarfer',
      practiceSuffix: "ids, names, classes, a thestun sefydlog i ddod o hyd iddynt a rhyngweithio â nhw"
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
      demoAppSuffix: '登录、导航图标、搜索和标签页，供你练习',
      practice: '练习',
      practiceSuffix: '稳定的 id、name、class 和文字，供查找与交互'
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
      demoAppSuffix: 'تسجيل دخول وأيقونات تنقل وبحث وعلامات تبويب للتدرب عليها',
      practice: 'التدريب',
      practiceSuffix: 'معرّفات وأسماء وفئات ونصوص ثابتة للعثور عليها والتفاعل معها'
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
      demoAppSuffix: '연습할 수 있는 로그인, 내비게이션 아이콘, 검색, 탭',
      practice: '연습',
      practiceSuffix: '찾고 상호작용해 볼 수 있는 안정적인 id, name, class, 텍스트'
    }
  };

  const FR: Messages = {
    metaDescription:
      "Contenu HTML stable, gratuit et open source, pour s'exercer à l'automatisation de navigateur : trouver des éléments par id, name, class, texte de lien et XPath, et interagir avec des champs de formulaire.",
    heading: `Bienvenue sur ${SITE_NAME}`,
    intro: `Si l'automatisation de navigateur est nouvelle pour vous, vous êtes au bon endroit. ${SITE_NAME} est un petit site gratuit et open source, conçu pour toute personne qui apprend à faire exécuter des actions automatiquement à un navigateur — cliquer, saisir, rechercher, attendre, vérifier — que vous n'ayez jamais écrit une ligne de code ou que vous connaissiez déjà les bases et cherchiez simplement une référence rapide ou un endroit fiable pour essayer quelque chose.`,
    learnHeading: 'Apprendre',
    learnMoreHeading: 'En savoir plus',
    examplesHeading: 'Exemples',
    links: {
      whatIsAutomaticTesting: "Qu'est-ce que le test automatisé ?",
      whatIsThePurpose: "Quel est le but des tests automatisés ?",
      whatIsTheTestingPyramid: "Qu'est-ce que la pyramide des tests automatisés ?",
      whatIsBrowserAutomation: "Qu'est-ce que le test automatisé de navigateur ?",
      howToStartLearning: "Comment commencer à apprendre les tests automatisés ?",
      whatAreRelatedConcepts: "Quels sont les concepts liés aux tests automatisés ?",
      howDoesAiHelp: "Comment l'intelligence artificielle aide-t-elle les tests automatisés ?",
      whatIsContinuousIntegration: "Qu'est-ce que le test automatisé d'intégration continue ?",
      whatIsDevOps: "Qu'est-ce que DevOps pour les tests automatisés ?",
      whatAreFlowMetrics: "Quelles métriques aident les tests automatisés ?",
      whatIsLeanSixSigma: "Comment Six Sigma mène-t-il des tests manuels aux tests automatisés ?",
      googleSearchExamples: 'Exemples de Recherche Google',
      googleMapsExamples: 'Exemples de Google Maps',
      givenWhenThenExamples: 'Exemples Given-When-Then',
      demoApp: 'Application de démonstration',
      demoAppSuffix: "connexion, icônes de navigation, recherche et onglets pour s'exercer",
      practice: "S'exercer",
      practiceSuffix: "ids, names, classes et textes stables à trouver et avec lesquels interagir"
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
    'ko-001': KO,
    'fr-001': FR
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
    <li><a href={localeHref(locale, 'practice')}>{m.links.practice}</a> — {m.links.practiceSuffix}</li>
  </ul>
</section>

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
