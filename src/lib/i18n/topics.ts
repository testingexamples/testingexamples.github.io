import type { Component } from 'svelte';
import type { Locale } from './locales';

/** Every topic's Page.svelte takes exactly this one prop. */
export type TopicComponent = Component<{ locale: Locale }>;

// One entry per page that exists under /<locale>/. `slug` is the
// path segment(s) after the locale (no leading/trailing slash; '' for the
// locale's own home page). English-variant locales (en-001, en-gb,
// en-gb-oxendict, en-us) share one English slug; the two Welsh locales
// (cy-gb, cy-001) share one Welsh slug; zh-cn gets its own Chinese slug and
// ar-001 its own Arabic slug, and ko-001 its own Korean slug — see spec/locales/index.md for why slugs are translated per-language
// but not per English variant, and for the slug choices themselves.
export type TopicId =
  | 'home'
  | 'about'
  | 'app'
  | 'code'
  | 'examples'
  | 'examples-google-search'
  | 'examples-google-maps'
  | 'given-when-then'
  | 'how-does-artificial-intelligence-help-automatic-testing'
  | 'how-to-start-learning-automatic-testing'
  | 'learn'
  | 'learn-gherkin'
  | 'learn-unit-test'
  | 'learn-browser-test'
  | 'learn-regression-test'
  | 'learn-integration-test'
  | 'learn-benchmark-test'
  | 'learn-shift-left'
  | 'related-code-editors'
  | 'related-version-control'
  | 'related-agile-discovery'
  | 'related-unix-shell'
  | 'related-cloud-hosting'
  | 'practice'
  | 'what-are-flow-metrics-for-automatic-testing'
  | 'what-is-automatic-testing'
  | 'what-is-browser-automation-testing'
  | 'what-is-continuous-integration-testing'
  | 'what-is-devops-for-automatic-testing'
  | 'what-is-lean-six-sigma-for-automatic-testing'
  | 'what-is-the-purpose-of-automatic-testing'
  | 'what-is-the-testing-pyramid';

type TopicDefinition = {
  slug: { en: string; cy: string; zh: string; ar: string; ko: string; fr: string };
  load: () => Promise<{ default: TopicComponent }>;
};

function slugFor(en: string, cy: string, zh: string, ar: string, ko: string, fr: string) {
  return { en, cy, zh, ar, ko, fr };
}

export const TOPICS: Record<TopicId, TopicDefinition> = {
  home: {
    slug: slugFor('', '', '', '', '', ''),
    load: () => import('#lib/pages/home/Page.svelte')
  },
  about: {
    slug: slugFor('about', 'ynghylch', '关于', 'حول', '소개', 'a-propos'),
    load: () => import('#lib/pages/about/Page.svelte')
  },
  app: {
    slug: slugFor('app', 'ap', '应用', 'التطبيق', '앱', 'application'),
    load: () => import('#lib/pages/app/Page.svelte')
  },
  code: {
    slug: slugFor('code', 'cod', '代码', 'الكود', '코드', 'code'),
    load: () => import('#lib/pages/code/Page.svelte')
  },
  examples: {
    slug: slugFor('examples', 'enghreifftiau', '示例', 'أمثلة', '예제', 'exemples'),
    load: () => import('#lib/pages/examples/Page.svelte')
  },
  'examples-google-search': {
    slug: slugFor('examples/google-search', 'enghreifftiau/chwilio-google', '示例/谷歌搜索', 'أمثلة/بحث-جوجل', '예제/구글-검색', 'exemples/recherche-google'),
    load: () => import('#lib/pages/examples-google-search/Page.svelte')
  },
  'examples-google-maps': {
    slug: slugFor('examples/google-maps', 'enghreifftiau/mapiau-google', '示例/谷歌地图', 'أمثلة/خرائط-جوجل', '예제/구글-지도', 'exemples/google-maps'),
    load: () => import('#lib/pages/examples-google-maps/Page.svelte')
  },
  'given-when-then': {
    // Kept in English for every locale: "Given-When-Then" (Gherkin) is a
    // BDD vocabulary term, not ordinary prose — see spec/locales/index.md.
    slug: slugFor('given-when-then', 'given-when-then', 'given-when-then', 'given-when-then', 'given-when-then', 'given-when-then'),
    load: () => import('#lib/pages/given-when-then/Page.svelte')
  },
  'how-does-artificial-intelligence-help-automatic-testing': {
    slug: slugFor(
      'how-does-artificial-intelligence-help-automatic-testing',
      'sut-mae-deallusrwydd-artiffisial-yn-helpu-profi-awtomatig',
      '人工智能如何帮助自动化测试',
      'كيف-يساعد-الذكاء-الاصطناعي-في-الاختبار-الآلي',
      '인공지능은-자동화-테스트를-어떻게-돕는가',
      'comment-l-intelligence-artificielle-aide-t-elle-les-tests-automatises'
    ),
    load: () => import('#lib/pages/how-does-artificial-intelligence-help-automatic-testing/Page.svelte')
  },
  'how-to-start-learning-automatic-testing': {
    slug: slugFor(
      'how-to-start-learning-automatic-testing',
      'sut-i-ddechrau-dysgu-profi-awtomatig',
      '如何开始学习自动化测试',
      'كيف-تبدأ-تعلم-الاختبار-الآلي',
      '자동화-테스트-학습-시작-방법',
      'comment-commencer-a-apprendre-les-tests-automatises'
    ),
    load: () => import('#lib/pages/how-to-start-learning-automatic-testing/Page.svelte')
  },
  practice: {
    slug: slugFor('practice', 'ymarfer', '练习', 'التدريب', '연습', 's-exercer'),
    load: () => import('#lib/pages/practice/Page.svelte')
  },
  learn: {
    slug: slugFor('topics', 'pynciau', '主题', 'المواضيع', '주제', 'sujets'),
    load: () => import('#lib/pages/learn/Page.svelte')
  },
  'learn-gherkin': {
    slug: slugFor(
      'topics/gherkin',
      'pynciau/gherkin',
      '主题/gherkin',
      'المواضيع/gherkin',
      '주제/gherkin',
      'sujets/gherkin'
    ),
    load: () => import('#lib/pages/learn-gherkin/Page.svelte')
  },
  'learn-unit-test': {
    slug: slugFor(
      'topics/unit-test',
      'pynciau/unit-test',
      '主题/unit-test',
      'المواضيع/unit-test',
      '주제/unit-test',
      'sujets/unit-test'
    ),
    load: () => import('#lib/pages/learn-unit-test/Page.svelte')
  },
  'learn-browser-test': {
    slug: slugFor(
      'topics/browser-test',
      'pynciau/browser-test',
      '主题/browser-test',
      'المواضيع/browser-test',
      '주제/browser-test',
      'sujets/browser-test'
    ),
    load: () => import('#lib/pages/learn-browser-test/Page.svelte')
  },
  'related-code-editors': {
    slug: slugFor(
      'topics/code-editors',
      'pynciau/code-editors',
      '主题/code-editors',
      'المواضيع/code-editors',
      '주제/code-editors',
      'sujets/code-editors'
    ),
    load: () => import('#lib/pages/related-code-editors/Page.svelte')
  },
  'related-version-control': {
    slug: slugFor(
      'topics/version-control',
      'pynciau/version-control',
      '主题/version-control',
      'المواضيع/version-control',
      '주제/version-control',
      'sujets/version-control'
    ),
    load: () => import('#lib/pages/related-version-control/Page.svelte')
  },
  'related-agile-discovery': {
    slug: slugFor(
      'topics/agile-discovery',
      'pynciau/agile-discovery',
      '主题/agile-discovery',
      'المواضيع/agile-discovery',
      '주제/agile-discovery',
      'sujets/agile-discovery'
    ),
    load: () => import('#lib/pages/related-agile-discovery/Page.svelte')
  },
  'related-unix-shell': {
    slug: slugFor(
      'topics/unix-shell',
      'pynciau/unix-shell',
      '主题/unix-shell',
      'المواضيع/unix-shell',
      '주제/unix-shell',
      'sujets/unix-shell'
    ),
    load: () => import('#lib/pages/related-unix-shell/Page.svelte')
  },
  'related-cloud-hosting': {
    slug: slugFor(
      'topics/cloud-hosting',
      'pynciau/cloud-hosting',
      '主题/cloud-hosting',
      'المواضيع/cloud-hosting',
      '주제/cloud-hosting',
      'sujets/cloud-hosting'
    ),
    load: () => import('#lib/pages/related-cloud-hosting/Page.svelte')
  },
  'learn-regression-test': {
    slug: slugFor(
      'topics/regression-test',
      'pynciau/regression-test',
      '主题/regression-test',
      'المواضيع/regression-test',
      '주제/regression-test',
      'sujets/regression-test'
    ),
    load: () => import('#lib/pages/learn-regression-test/Page.svelte')
  },
  'learn-integration-test': {
    slug: slugFor(
      'topics/integration-test',
      'pynciau/integration-test',
      '主题/integration-test',
      'المواضيع/integration-test',
      '주제/integration-test',
      'sujets/integration-test'
    ),
    load: () => import('#lib/pages/learn-integration-test/Page.svelte')
  },
  'learn-benchmark-test': {
    slug: slugFor(
      'topics/benchmark-test',
      'pynciau/benchmark-test',
      '主题/benchmark-test',
      'المواضيع/benchmark-test',
      '주제/benchmark-test',
      'sujets/benchmark-test'
    ),
    load: () => import('#lib/pages/learn-benchmark-test/Page.svelte')
  },
  'learn-shift-left': {
    slug: slugFor(
      'topics/shift-left-for-automatic-testing',
      'pynciau/shift-left-for-automatic-testing',
      '主题/shift-left-for-automatic-testing',
      'المواضيع/shift-left-for-automatic-testing',
      '주제/shift-left-for-automatic-testing',
      'sujets/shift-left-for-automatic-testing'
    ),
    load: () => import('#lib/pages/learn-shift-left/Page.svelte')
  },
  'what-are-flow-metrics-for-automatic-testing': {
    slug: slugFor(
      'what-are-flow-metrics-for-automatic-testing',
      'beth-yw-metrigau-llif-ar-gyfer-profi-awtomatig',
      '自动化测试的流程指标是什么',
      'ما-هي-مقاييس-التدفق-للاختبار-الآلي',
      '자동화-테스트에-도움이-되는-지표',
      'quelles-metriques-aident-les-tests-automatises'
    ),
    load: () => import('#lib/pages/what-are-flow-metrics-for-automatic-testing/Page.svelte')
  },
  'what-is-automatic-testing': {
    slug: slugFor('what-is-automatic-testing', 'beth-yw-profi-awtomatig', '什么是自动化测试', 'ما-هو-الاختبار-الآلي', '자동화-테스트란-무엇인가', 'qu-est-ce-que-le-test-automatise'),
    load: () => import('#lib/pages/what-is-automatic-testing/Page.svelte')
  },
  'what-is-browser-automation-testing': {
    slug: slugFor(
      'what-is-browser-automation-testing',
      'beth-yw-profi-awtomatig-porwr',
      '什么是浏览器自动化测试',
      'ما-هو-اختبار-أتمتة-المتصفح',
      '브라우저-자동화-테스트란-무엇인가',
      'qu-est-ce-que-le-test-automatise-de-navigateur'
    ),
    load: () => import('#lib/pages/what-is-browser-automation-testing/Page.svelte')
  },
  'what-is-continuous-integration-testing': {
    slug: slugFor(
      'what-is-continuous-integration-testing',
      'beth-yw-profi-integreiddio-parhaus-awtomatig',
      '什么是持续集成测试',
      'ما-هو-اختبار-التكامل-المستمر',
      '지속적-통합-테스트란-무엇인가',
      'qu-est-ce-que-le-test-automatise-d-integration-continue'
    ),
    load: () => import('#lib/pages/what-is-continuous-integration-testing/Page.svelte')
  },
  'what-is-devops-for-automatic-testing': {
    slug: slugFor(
      'what-is-devops-for-automatic-testing',
      'beth-yw-devops-ar-gyfer-profi-awtomatig',
      '什么是自动化测试的DevOps',
      'ما-هو-DevOps-للاختبار-الآلي',
      '자동화-테스트를-위한-DevOps란-무엇인가',
      'qu-est-ce-que-devops-pour-les-tests-automatises'
    ),
    load: () => import('#lib/pages/what-is-devops-for-automatic-testing/Page.svelte')
  },
  'what-is-lean-six-sigma-for-automatic-testing': {
    slug: slugFor(
      'what-is-lean-six-sigma-for-automatic-testing',
      'sut-mae-six-sigma-yn-arwain-profi-a-llaw-at-brofi-awtomatig',
      '六西格玛如何引导人工测试进入自动化测试',
      'كيف-يقود-سيكس-سيجما-الاختبار-اليدوي-إلى-الاختبار-الآلي',
      'Six-Sigma는-수동-테스트를-어떻게-자동화-테스트로-이끄는가',
      'comment-six-sigma-mene-t-il-des-tests-manuels-aux-tests-automatises'
    ),
    load: () => import('#lib/pages/what-is-lean-six-sigma-for-automatic-testing/Page.svelte')
  },
  'what-is-the-purpose-of-automatic-testing': {
    slug: slugFor(
      'what-is-the-purpose-of-automatic-testing',
      'beth-yw-diben-profi-awtomatig',
      '自动化测试的目的是什么',
      'ما-هو-الغرض-من-الاختبار-الآلي',
      '자동화-테스트의-목적은-무엇인가',
      'quel-est-le-but-des-tests-automatises'
    ),
    load: () => import('#lib/pages/what-is-the-purpose-of-automatic-testing/Page.svelte')
  },
  'what-is-the-testing-pyramid': {
    slug: slugFor(
      'what-is-the-testing-pyramid',
      'beth-yw-pyramid-profi-awtomatig',
      '什么是自动化测试金字塔',
      'ما-هو-هرم-الاختبار-الآلي',
      '자동화-테스트-피라미드란-무엇인가',
      'qu-est-ce-que-la-pyramide-des-tests-automatises'
    ),
    load: () => import('#lib/pages/what-is-the-testing-pyramid/Page.svelte')
  }
};

export const TOPIC_IDS = Object.keys(TOPICS) as TopicId[];

function slugGroup(locale: Locale): 'en' | 'cy' | 'zh' | 'ar' | 'ko' | 'fr' {
  if (locale === 'cy-gb' || locale === 'cy-001') return 'cy';
  if (locale === 'zh-cn') return 'zh';
  if (locale === 'ar-001') return 'ar';
  if (locale === 'ko-001') return 'ko';
  if (locale === 'fr-001') return 'fr';
  return 'en';
}

export function slugForTopic(locale: Locale, topicId: TopicId): string {
  return TOPICS[topicId].slug[slugGroup(locale)];
}

/** Reverse lookup: which topic does this locale + slug resolve to? */
export function topicForSlug(locale: Locale, slug: string): TopicId | undefined {
  const group = slugGroup(locale);
  const normalized = slug.replace(/\/+$/, '');
  return TOPIC_IDS.find((id) => TOPICS[id].slug[group] === normalized);
}
