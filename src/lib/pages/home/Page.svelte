<script lang="ts">
  import { SITE_NAME } from '#lib/site.js';
  import { localeHref } from '#lib/i18n/paths.js';
  import { DEMO_REPOS, DEMO_REPOS_URL } from '#lib/demos.js';
  import type { Locale } from '#lib/i18n/locales.js';

  let { locale }: { locale: Locale } = $props();

  type Messages = {
    metaDescription: string;
    heading: string;
    intro: string;
    examplesHeading: string;
    reposHeading: string;
    links: {
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
    examplesHeading: 'Examples',
    reposHeading: 'Examples as repositories',
    links: {
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
    examplesHeading: 'Enghreifftiau',
    reposHeading: 'Enghreifftiau fel storfeydd',
    links: {
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
    examplesHeading: '示例',
    reposHeading: '以代码仓库形式提供的示例',
    links: {
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
    examplesHeading: 'أمثلة',
    reposHeading: 'أمثلة كمستودعات',
    links: {
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
    examplesHeading: '예제',
    reposHeading: '저장소로 된 예제',
    links: {
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
    examplesHeading: 'Exemples',
    reposHeading: 'Exemples sous forme de dépôts',
    links: {
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

  <h3>{m.examplesHeading}</h3>
  <ul class="repo-list">
    <li><a href={localeHref(locale, 'examples-google-search')}>{m.links.googleSearchExamples}</a></li>
    <li><a href={localeHref(locale, 'examples-google-maps')}>{m.links.googleMapsExamples}</a></li>
    <li><a href={localeHref(locale, 'given-when-then')}>{m.links.givenWhenThenExamples}</a></li>
    <li><a href={localeHref(locale, 'app')}>{m.links.demoApp}</a> — {m.links.demoAppSuffix}</li>
    <li><a href={localeHref(locale, 'practice')}>{m.links.practice}</a> — {m.links.practiceSuffix}</li>
  </ul>

  <h3>{m.reposHeading}</h3>
  <ul class="repo-list">
    {#each DEMO_REPOS as repo (repo)}
      <li><a href={DEMO_REPOS_URL + repo}>{repo}</a></li>
    {/each}
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
