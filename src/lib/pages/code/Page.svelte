<script lang="ts">
  import { DEMO_REPOS, DEMO_REPOS_URL } from '#lib/demos.js';
  import type { Locale } from '#lib/i18n/locales.js';

  let { locale }: { locale: Locale } = $props();

  type Messages = {
    title: string;
    metaDescription: string;
    heading: string;
    intro: string;
  };

  const EN_001: Messages = {
    title: 'Code',
    metaDescription:
      'Every demo repository: Selenium and Playwright browser automation walkthroughs in JavaScript, TypeScript, Python, Rust, Java, and C#.',
    heading: 'Code',
    intro:
      'Every example is also a standalone, runnable repository. Each one is a short walkthrough of a browser automation tool in one language, against this site, nhs.wales, or (read-only, never run) Google Search and Google Maps.'
  };

  const CY: Messages = {
    title: 'Cod',
    metaDescription:
      'Pob storfa arddangos: tywyslyfrau awtomatiaeth porwr Selenium a Playwright mewn JavaScript, TypeScript, Python, Rust, Java, a C#.',
    heading: 'Cod',
    intro:
      `Mae pob enghraifft hefyd yn storfa annibynnol y gellir ei rhedeg. Mae pob un yn gyflwyniad byr i offeryn awtomatiaeth porwr mewn un iaith, yn erbyn y wefan hon, nhs.wales, neu (darllen yn unig, byth i'w rhedeg) Chwilio Google a Mapiau Google.`
  };

  const ZH: Messages = {
    title: '代码',
    metaDescription:
      '所有演示代码仓库：使用 JavaScript、TypeScript、Python、Rust、Java 和 C# 的 Selenium 与 Playwright 浏览器自动化示例。',
    heading: '代码',
    intro:
      '每个示例同时也是一个独立、可运行的代码仓库。每个仓库都用一种语言简要演示一种浏览器自动化工具，目标是本站、nhs.wales，或（仅供阅读、绝不运行的）谷歌搜索和谷歌地图。'
  };

  const AR: Messages = {
    title: 'الكود',
    metaDescription:
      'جميع مستودعات العروض التوضيحية: أمثلة أتمتة المتصفح بـ Selenium وPlaywright بلغات JavaScript وTypeScript وPython وRust وJava وC#.',
    heading: 'الكود',
    intro:
      'كل مثال هو أيضًا مستودع مستقل قابل للتشغيل. كل مستودع شرح قصير لأداة أتمتة متصفح بلغة واحدة، على هذا الموقع أو nhs.wales أو (للقراءة فقط ولا يُشغَّل أبدًا) بحث Google وخرائط Google.'
  };

  const KO: Messages = {
    title: '코드',
    metaDescription:
      '모든 데모 저장소: JavaScript, TypeScript, Python, Rust, Java, C#으로 작성한 Selenium 및 Playwright 브라우저 자동화 예제.',
    heading: '코드',
    intro:
      '모든 예제는 독립적으로 실행할 수 있는 저장소이기도 합니다. 각 저장소는 한 가지 언어로 브라우저 자동화 도구 하나를 짧게 따라 해 보는 예제이며, 대상은 이 사이트, nhs.wales, 또는 (읽기 전용이며 실행하지 않는) Google 검색과 Google 지도입니다.'
  };

  const FR: Messages = {
    title: 'Code',
    metaDescription:
      `Tous les dépôts de démonstration : exemples d'automatisation de navigateur avec Selenium et Playwright en JavaScript, TypeScript, Python, Rust, Java et C#.`,
    heading: 'Code',
    intro:
      `Chaque exemple est aussi un dépôt autonome et exécutable. Chacun est un court parcours d'un outil d'automatisation de navigateur dans un langage, sur ce site, sur nhs.wales ou (en lecture seule, jamais exécuté) sur Google Search et Google Maps.`
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
  <p>{m.intro}</p>

  <ul class="repo-list">
    {#each DEMO_REPOS as repo (repo)}
      <li><a href={DEMO_REPOS_URL + repo}>{repo}</a></li>
    {/each}
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
