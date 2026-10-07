<script lang="ts">
  import { SectionHeading } from 'lily-design-system-svelte-headless';
  import SiteFixtures from '#lib/components/SiteFixtures.svelte';
  import type { Locale } from '#lib/i18n/locales.js';

  let { locale }: { locale: Locale } = $props();

  type Messages = {
    title: string;
    metaDescription: string;
    sectionHeading: string;
    body: string;
  };

  const EN_001: Messages = {
    title: 'Practice',
    metaDescription: 'Free open source HTML fixtures for practising browser automation: find elements by id, name, class, link text, and XPath, and interact with form inputs.',
    sectionHeading: 'Practise on this page',
    body:
      'Everything below is a stable fixture playground: fixed ids, names, classes, and text that automation tools can reliably find every time, which is exactly what makes it useful to practise on directly — point your script at it, find an element, interact with it, and see what happens. The exact contract this page keeps is documented in this repo’s'
  };

  const EN_US: Messages = {
    ...EN_001,
    metaDescription: 'Free open source HTML fixtures for practicing browser automation: find elements by id, name, class, link text, and XPath, and interact with form inputs.',
    sectionHeading: 'Practice on this page',
    body:
      'Everything below is a stable fixture playground: fixed ids, names, classes, and text that automation tools can reliably find every time, which is exactly what makes it useful to practice on directly — point your script at it, find an element, interact with it, and see what happens. The exact contract this page keeps is documented in this repo’s'
  };

  const CY: Messages = {
    title: 'Ymarfer',
    metaDescription: "Cynnwys HTML sefydlog, cod agored ac am ddim, ar gyfer ymarfer awtomatiaeth porwr: dewch o hyd i elfennau yn ôl id, name, class, testun dolen ac XPath, a rhyngweithiwch â mewnbynnau ffurflen.",
    sectionHeading: "Ymarfer ar y dudalen hon",
    body:
      "Mae popeth isod yn faes chwarae sefydlog: ids, names, classes a thestun penodedig y gall offer awtomatiaeth ddod o hyd iddynt yn ddibynadwy bob tro, a dyna'n union sy'n ei wneud yn ddefnyddiol i ymarfer arno'n uniongyrchol — anelwch eich sgript ato, dewch o hyd i elfen, rhyngweithiwch â hi, a gwelwch beth sy'n digwydd. Mae'r cytundeb manwl y mae'r dudalen hon yn cadw ato wedi'i ddogfennu yn yr ystorfa hon, yn y ffeil"
  };

  const ZH: Messages = {
    title: '练习',
    metaDescription: '免费开源的 HTML 测试夹具，用于练习浏览器自动化：通过 id、name、class、链接文字和 XPath 查找元素，并与表单输入交互。',
    sectionHeading: '在这个页面上练习',
    body:
      '下面的内容是一个稳定的测试夹具练习场：固定的 id、name、class 和文字，自动化工具每次都能可靠地找到它们，这正是它适合直接拿来练习的原因——把你的脚本指向它，找到一个元素，与它交互，看看会发生什么。这个页面所遵守的确切约定记录在本仓库的'
  };

  const AR: Messages = {
    title: 'التدريب',
    metaDescription: 'تجهيزات HTML مجانية ومفتوحة المصدر للتدرب على أتمتة المتصفح: ابحث عن العناصر بالمعرّف (id) والاسم والفئة ونص الرابط وXPath، وتفاعل مع مدخلات النماذج.',
    sectionHeading: 'تدرّب على هذه الصفحة',
    body:
      'كل ما في الأسفل ملعب تجهيزات ثابت: معرّفات وأسماء وفئات ونصوص ثابتة تستطيع أدوات الأتمتة العثور عليها بموثوقية في كل مرة، وهذا بالضبط ما يجعله مفيدًا للتدرب عليه مباشرةً — وجّه السكربت إليه، واعثر على عنصر، وتفاعل معه، وشاهد ما يحدث. والعقد الدقيق الذي تلتزم به هذه الصفحة موثّق في ملف'
  };

  const KO: Messages = {
    title: '연습',
    metaDescription: '브라우저 자동화를 연습하기 위한 무료 오픈 소스 HTML 픽스처: id, name, class, 링크 텍스트, XPath로 요소를 찾고 양식 입력과 상호작용해 보세요.',
    sectionHeading: '이 페이지에서 연습하기',
    body:
      '아래의 모든 것은 안정적인 픽스처 놀이터입니다. 자동화 도구가 매번 안정적으로 찾을 수 있는 고정된 id, name, class, 텍스트로 이루어져 있어서, 스크립트를 여기에 겨누고 요소를 찾고 상호작용하며 무슨 일이 일어나는지 보는 식으로 직접 연습하기에 딱 좋습니다. 이 페이지가 지키는 정확한 계약은 이 저장소의 다음 문서에 정리되어 있습니다:'
  };

  const FR: Messages = {
    title: "S'exercer",
    metaDescription: "Contenu HTML stable, gratuit et open source, pour s'exercer à l'automatisation de navigateur : trouver des éléments par id, name, class, texte de lien et XPath, et interagir avec des champs de formulaire.",
    sectionHeading: "S'exercer sur cette page",
    body:
      "Tout ce qui suit est un terrain de jeu stable : des ids, des names, des classes et des textes fixes que les outils d'automatisation retrouvent de façon fiable à chaque fois, ce qui le rend idéal pour s'exercer directement — pointez votre script dessus, trouvez un élément, interagissez avec lui et observez le résultat. Le contrat exact que respecte cette page est documenté dans le fichier"
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
  <title>{m.title} — Testing Examples</title>
  <meta name="description" content={m.metaDescription} />
</svelte:head>

<div class="page-header">
  <h1>{m.title}</h1>
</div>

<section class="section prose">
  <SectionHeading class="section-heading-start" heading={m.sectionHeading} level={2} />
  <p>
    {m.body}
    <code>spec/index.md</code>.
  </p>
</section>

<hr />

<SiteFixtures />
