import type { Component } from 'svelte';
import type { Locale } from './locales';

/** Every topic's Page.svelte takes exactly this one prop. */
export type TopicComponent = Component<{ locale: Locale }>;

// One entry per page that exists under /locales/<locale>/. `slug` is the
// path segment(s) after the locale (no leading/trailing slash; '' for the
// locale's own home page). English-variant locales (en-001, en-gb,
// en-gb-oxendict, en-us) share one English slug; the two Welsh locales
// (cy-gb, cy-001) share one Welsh slug — see spec/locales/index.md for why
// slugs are translated for Welsh but not for the English variants, and for
// the Welsh slug choices themselves.
export type TopicId =
  | 'home'
  | 'about'
  | 'app'
  | 'examples'
  | 'examples-google-search'
  | 'examples-google-maps'
  | 'given-when-then'
  | 'how-does-artificial-intelligence-help-automatic-testing'
  | 'how-to-start-learning-automatic-testing'
  | 'learn'
  | 'what-are-flow-metrics-for-automatic-testing'
  | 'what-are-related-concepts-for-automatic-testing'
  | 'what-is-automatic-testing'
  | 'what-is-browser-automation-testing'
  | 'what-is-continuous-integration-testing'
  | 'what-is-devops-for-automatic-testing'
  | 'what-is-lean-six-sigma-for-automatic-testing'
  | 'what-is-the-purpose-of-automatic-testing'
  | 'what-is-the-testing-pyramid';

type TopicDefinition = {
  slug: { en: string; cy: string };
  load: () => Promise<{ default: TopicComponent }>;
};

function slugFor(en: string, cy: string) {
  return { en, cy };
}

export const TOPICS: Record<TopicId, TopicDefinition> = {
  home: {
    slug: slugFor('', ''),
    load: () => import('$lib/pages/home/Page.svelte')
  },
  about: {
    slug: slugFor('about', 'ynghylch'),
    load: () => import('$lib/pages/about/Page.svelte')
  },
  app: {
    slug: slugFor('app', 'ap'),
    load: () => import('$lib/pages/app/Page.svelte')
  },
  examples: {
    slug: slugFor('examples', 'enghreifftiau'),
    load: () => import('$lib/pages/examples/Page.svelte')
  },
  'examples-google-search': {
    slug: slugFor('examples/google-search', 'enghreifftiau/chwilio-google'),
    load: () => import('$lib/pages/examples-google-search/Page.svelte')
  },
  'examples-google-maps': {
    slug: slugFor('examples/google-maps', 'enghreifftiau/mapiau-google'),
    load: () => import('$lib/pages/examples-google-maps/Page.svelte')
  },
  'given-when-then': {
    // Kept in English for every locale: "Given-When-Then" (Gherkin) is a
    // BDD vocabulary term, not ordinary prose — see spec/locales/index.md.
    slug: slugFor('given-when-then', 'given-when-then'),
    load: () => import('$lib/pages/given-when-then/Page.svelte')
  },
  'how-does-artificial-intelligence-help-automatic-testing': {
    slug: slugFor(
      'how-does-artificial-intelligence-help-automatic-testing',
      'sut-mae-deallusrwydd-artiffisial-yn-helpu-profi-awtomatig'
    ),
    load: () => import('$lib/pages/how-does-artificial-intelligence-help-automatic-testing/Page.svelte')
  },
  'how-to-start-learning-automatic-testing': {
    slug: slugFor(
      'how-to-start-learning-automatic-testing',
      'sut-i-ddechrau-dysgu-profi-awtomatig'
    ),
    load: () => import('$lib/pages/how-to-start-learning-automatic-testing/Page.svelte')
  },
  learn: {
    slug: slugFor('learn', 'dysgu'),
    load: () => import('$lib/pages/learn/Page.svelte')
  },
  'what-are-flow-metrics-for-automatic-testing': {
    slug: slugFor(
      'what-are-flow-metrics-for-automatic-testing',
      'beth-yw-metrigau-llif-ar-gyfer-profi-awtomatig'
    ),
    load: () => import('$lib/pages/what-are-flow-metrics-for-automatic-testing/Page.svelte')
  },
  'what-are-related-concepts-for-automatic-testing': {
    slug: slugFor(
      'what-are-related-concepts-for-automatic-testing',
      'beth-yw-cysyniadau-cysylltiedig-ar-gyfer-profi-awtomatig'
    ),
    load: () => import('$lib/pages/what-are-related-concepts-for-automatic-testing/Page.svelte')
  },
  'what-is-automatic-testing': {
    slug: slugFor('what-is-automatic-testing', 'beth-yw-profi-awtomatig'),
    load: () => import('$lib/pages/what-is-automatic-testing/Page.svelte')
  },
  'what-is-browser-automation-testing': {
    slug: slugFor('what-is-browser-automation-testing', 'beth-yw-profi-awtomeiddio-porwr'),
    load: () => import('$lib/pages/what-is-browser-automation-testing/Page.svelte')
  },
  'what-is-continuous-integration-testing': {
    slug: slugFor(
      'what-is-continuous-integration-testing',
      'beth-yw-profi-integreiddio-parhaus'
    ),
    load: () => import('$lib/pages/what-is-continuous-integration-testing/Page.svelte')
  },
  'what-is-devops-for-automatic-testing': {
    slug: slugFor('what-is-devops-for-automatic-testing', 'beth-yw-devops-ar-gyfer-profi-awtomatig'),
    load: () => import('$lib/pages/what-is-devops-for-automatic-testing/Page.svelte')
  },
  'what-is-lean-six-sigma-for-automatic-testing': {
    slug: slugFor(
      'what-is-lean-six-sigma-for-automatic-testing',
      'beth-yw-lean-six-sigma-ar-gyfer-profi-awtomatig'
    ),
    load: () => import('$lib/pages/what-is-lean-six-sigma-for-automatic-testing/Page.svelte')
  },
  'what-is-the-purpose-of-automatic-testing': {
    slug: slugFor('what-is-the-purpose-of-automatic-testing', 'beth-yw-diben-profi-awtomatig'),
    load: () => import('$lib/pages/what-is-the-purpose-of-automatic-testing/Page.svelte')
  },
  'what-is-the-testing-pyramid': {
    slug: slugFor('what-is-the-testing-pyramid', 'beth-yw-pyramid-profi-awtomatig'),
    load: () => import('$lib/pages/what-is-the-testing-pyramid/Page.svelte')
  }
};

export const TOPIC_IDS = Object.keys(TOPICS) as TopicId[];

function slugGroup(locale: Locale): 'en' | 'cy' {
  return locale === 'cy-gb' || locale === 'cy-001' ? 'cy' : 'en';
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
