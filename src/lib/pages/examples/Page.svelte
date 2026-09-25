<script lang="ts">
  import { SectionHeading, SummaryList, SummaryListItem, InformationCallout } from 'lily-design-system-svelte-headless';
  import { localeHref } from '$lib/i18n/paths';
  import type { Locale } from '$lib/i18n/locales';

  let { locale }: { locale: Locale } = $props();

  type Messages = {
    title: string;
    metaDescription: string;
    heading: string;
    intro: string;
    sectionHeading: string;
    summaryListLabel: string;
    googleSearchLinkText: string;
    googleSearchDesc: string;
    googleMapsLinkText: string;
    googleMapsDesc: string;
    calloutLabel: string;
    calloutP: string;
  };

  const EN_001: Messages = {
    title: 'Examples',
    metaDescription:
      'Real-world browser automation examples: the same handful of interactions, implemented six ways across Selenium and Playwright in JavaScript, Python, and Rust.',
    heading: 'Examples',
    intro:
      'This section shows the same handful of real-world interactions — browsing, searching, clicking, scrolling — implemented six ways: two tools (Selenium and Playwright) times three languages (JavaScript, Python, Rust), against two well-known real sites.',
    sectionHeading: 'Google Search and Google Maps',
    summaryListLabel: 'Example pages',
    googleSearchLinkText: 'Google Search examples',
    googleSearchDesc:
      ' — searching, reading results, and following a link, the same walkthrough written six ways.',
    googleMapsLinkText: 'Google Maps examples',
    googleMapsDesc:
      ' — browsing a map, searching for a place, and interacting with the page, the same walkthrough written six ways.',
    calloutLabel: "Read, don't repeatedly run",
    calloutP:
      "Google's Terms of Service restrict automated querying of its services. These examples exist to teach the syntax and patterns of each testing tool — treat them as reading material, not scripts to run repeatedly against the live google.com or Google Maps. Each example page elaborates on this further."
  };

  // No British/American/Oxford spelling divergence occurs in this page's
  // vocabulary, so all four English locales share one copy. See
  // spec/locales/index.md.
  const CY: Messages = {
    title: 'Enghreifftiau',
    metaDescription:
      "Enghreifftiau go iawn o awtomeiddio porwr: yr un llond dwrn o ryngweithiadau, wedi'u gweithredu chwe ffordd ar draws Selenium a Playwright mewn JavaScript, Python, a Rust.",
    heading: 'Enghreifftiau',
    intro:
      "Mae'r adran hon yn dangos yr un llond dwrn o ryngweithiadau go iawn — pori, chwilio, clicio, sgrolio — wedi'u gweithredu chwe ffordd: dau offeryn (Selenium a Playwright) wedi'u lluosi â thair iaith (JavaScript, Python, Rust), yn erbyn dau safle go iawn cyfarwydd.",
    sectionHeading: 'Chwilio Google a Mapiau Google',
    summaryListLabel: 'Tudalennau enghraifft',
    googleSearchLinkText: 'enghreifftiau Chwilio Google',
    googleSearchDesc:
      " — chwilio, darllen canlyniadau, a dilyn dolen, yr un daith wedi'i hysgrifennu chwe ffordd.",
    googleMapsLinkText: 'enghreifftiau Mapiau Google',
    googleMapsDesc:
      " — pori map, chwilio am le, a rhyngweithio â'r dudalen, yr un daith wedi'i hysgrifennu chwe ffordd.",
    calloutLabel: "Darllenwch, peidiwch â rhedeg dro ar ôl tro",
    calloutP:
      "Mae Telerau Gwasanaeth Google yn cyfyngu ymholi awtomataidd o'i wasanaethau. Mae'r enghreifftiau hyn yn bodoli i ddysgu cystrawen a phatrymau pob offeryn profi — trinwch nhw fel deunydd darllen, nid sgriptiau i'w rhedeg dro ar ôl tro yn erbyn google.com neu Google Maps byw. Mae pob tudalen enghraifft yn ymhelaethu ar hyn ymhellach."
  };

  const ZH: Messages = {
    title: '示例',
    metaDescription:
      '真实场景的浏览器自动化示例：同样的几个交互，用 Selenium 和 Playwright 分别以 JavaScript、Python 和 Rust 实现，共六种写法。',
    heading: '示例',
    intro:
      '本节展示同样几个真实场景的交互——浏览、搜索、点击、滚动——以六种方式实现：两种工具（Selenium 和 Playwright）乘以三种语言（JavaScript、Python、Rust），针对两个知名的真实网站。',
    sectionHeading: '谷歌搜索和谷歌地图',
    summaryListLabel: '示例页面',
    googleSearchLinkText: '谷歌搜索示例',
    googleSearchDesc: '——搜索、阅读结果并跟踪链接，同一段演练用六种方式写成。',
    googleMapsLinkText: '谷歌地图示例',
    googleMapsDesc: '——浏览地图、搜索地点并与页面交互，同一段演练用六种方式写成。',
    calloutLabel: '请阅读，不要反复运行',
    calloutP:
      '谷歌的服务条款限制对其服务进行自动化查询。这些示例的存在是为了讲解各测试工具的语法和模式——请把它们当作阅读材料，而不是反复对真实的 google.com 或谷歌地图运行的脚本。每个示例页面都会对此作进一步说明。'
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
  <SectionHeading class="section-heading-start" heading={m.sectionHeading} level={2} />

  <SummaryList label={m.summaryListLabel}>
    <SummaryListItem term="Google Search">
      <a href={localeHref(locale, 'examples-google-search')}>{m.googleSearchLinkText}</a>{m.googleSearchDesc}
    </SummaryListItem>
    <SummaryListItem term="Google Maps">
      <a href={localeHref(locale, 'examples-google-maps')}>{m.googleMapsLinkText}</a>{m.googleMapsDesc}
    </SummaryListItem>
  </SummaryList>

  <InformationCallout label={m.calloutLabel}>
    <p>{m.calloutP}</p>
  </InformationCallout>
</section>
