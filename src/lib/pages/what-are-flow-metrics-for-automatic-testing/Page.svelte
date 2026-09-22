<script lang="ts">
  import { CallToAction } from 'lily-design-system-svelte-headless';
  import { localeHref } from '$lib/i18n/paths';
  import type { Locale } from '$lib/i18n/locales';

  let { locale }: { locale: Locale } = $props();

  // "Kanban" is a methodology proper noun and is kept in English for every
  // locale, same treatment as "DevOps"/"Given-When-Then" elsewhere on this
  // site. The quoted video title below is a literal external title and is
  // likewise kept in English for every locale.
  type Messages = {
    title: string;
    metaDescription: string;
    heading: string;
    flowMetricsLabel: string;
    introP: string;
    belongsP: string;
    learnMorePre: string;
    learnMoreLink1Text: string;
    learnMoreMid: string;
    learnMorePost: string;
    askAiHeading: string;
    askAi: string[];
    nextLabel: string;
  };

  const EN_001: Messages = {
    title: 'What metrics help automatic testing?',
    metaDescription:
      "What flow metrics are — cycle time, lead time, throughput, work in progress — and why a growing pile of skipped or flaky tests is itself a flow-metric signal that testing debt is piling up.",
    heading: 'What metrics help automatic testing?',
    flowMetricsLabel: 'Flow metrics',
    introP:
      "measure how work actually moves through a process: cycle time (how long one item takes end to end), lead time, throughput, and work in progress. The point is measuring what's actually moving, not how busy people look.",
    belongsP:
      'Here\'s why that belongs on a testing page: "time from a bug being reported to a regression test existing for it" is a concrete, trackable cycle time. And a growing pile of skipped, ignored, or flaky tests is itself a flow-metric signal — work in progress that isn\'t actually moving — meaning testing debt is piling up faster than it\'s being paid down, whether or not anyone\'s tracking it on a board.',
    learnMorePre: "Learn more at Atlassian's ",
    learnMoreLink1Text: 'guide to Kanban',
    learnMoreMid: ', or watch ProKanban\'s ',
    learnMorePost: ' for a video introduction to the metrics themselves.',
    askAiHeading: 'Ask AI ideas',
    askAi: [
      "What do 'cycle time' and 'throughput' actually mean, in plain terms, for a team's day-to-day work?",
      'How would I start tracking cycle time for bug fixes on my own team, without buying new tooling?',
      'How do I use flow metrics to make a concrete case that a growing pile of flaky tests is real, measurable technical debt?'
    ],
    nextLabel: 'Next: how does Six Sigma lead manual testing into automatic testing? →'
  };

  // No British/American/Oxford spelling divergence occurs in this page's
  // vocabulary, so all four English locales share one copy. See
  // spec/locales/index.md.
  const CY: Messages = {
    title: "Pa fetrigau sy'n helpu profi awtomatig?",
    metaDescription:
      "Beth yw metrigau llif — amser cylchdro, amser arwain, trwygyswllt, gwaith ar y gweill — a pham mae pentwr cynyddol o brofion wedi'u sgipio neu'n ansefydlog yn arwydd metrig-llif ynddo'i hun bod dyled brofi'n cronni.",
    heading: "Pa fetrigau sy'n helpu profi awtomatig?",
    flowMetricsLabel: 'Metrigau llif',
    introP:
      "yn mesur sut mae gwaith wir yn symud drwy broses: amser cylchdro (pa mor hir mae un eitem yn ei gymryd o'r dechrau i'r diwedd), amser arwain, trwygyswllt, a gwaith ar y gweill. Y pwynt yw mesur beth sy'n symud go iawn, nid pa mor brysur mae pobl yn edrych.",
    belongsP:
      "Dyma pam mae hynny'n perthyn ar dudalen brofi: mae \"amser o adrodd bod bỳg i brawf atchweliad yn bodoli ar ei gyfer\" yn amser cylchdro pendant, y gellir ei olrhain. Ac mae pentwr cynyddol o brofion wedi'u sgipio, eu hanwybyddu, neu'n ansefydlog yn arwydd metrig-llif ynddo'i hun — gwaith ar y gweill nad yw wir yn symud — sy'n golygu bod dyled brofi'n cronni'n gyflymach nag y mae'n cael ei thalu i lawr, boed rywun yn ei olrhain ar fwrdd ai peidio.",
    learnMorePre: 'Dysgwch fwy yn ',
    learnMoreLink1Text: 'arweiniad Atlassian i Kanban',
    learnMoreMid: ', neu gwyliwch ',
    learnMorePost: " gan ProKanban ar gyfer cyflwyniad fideo i'r metrigau eu hunain.",
    askAiHeading: 'Syniadau gofyn i AI',
    askAi: [
      "Beth mae 'amser cylchdro' a 'thrwygyswllt' yn ei olygu mewn gwirionedd, mewn termau plaen, ar gyfer gwaith dydd-i-ddydd tîm?",
      "Sut fyddwn i'n dechrau olrhain amser cylchdro ar gyfer trwsio bygiau ar fy nhîm fy hun, heb brynu offer newydd?",
      "Sut ydw i'n defnyddio metrigau llif i wneud achos pendant bod pentwr cynyddol o brofion ansefydlog yn ddyled dechnegol wirioneddol, y gellir ei mesur?"
    ],
    nextLabel: "Nesaf: sut mae Six Sigma yn arwain profi â llaw i mewn i brofi awtomatig? →"
  };

  const MESSAGES: Record<Locale, Messages> = {
    'en-001': EN_001,
    'en-gb': EN_001,
    'en-gb-oxendict': EN_001,
    'en-us': EN_001,
    'cy-gb': CY,
    'cy-001': CY
  };

  const m = $derived(MESSAGES[locale]);
</script>

<svelte:head>
  <title>{m.title} — Testing Examples</title>
  <meta name="description" content={m.metaDescription} />
</svelte:head>

<div class="page-header">
  <h1>{m.heading}</h1>
  <p>
    <strong>{m.flowMetricsLabel}</strong>
    {m.introP}
  </p>
</div>

<section class="section prose">
  <p>{m.belongsP}</p>

  <p>
    {m.learnMorePre}<a href="https://www.atlassian.com/agile/kanban">{m.learnMoreLink1Text}</a
    >{m.learnMoreMid}<a href="https://www.youtube.com/watch?v=3Nd2e1lD8ng"
      >"The Kanban Guide - Kanban Metrics"</a
    >{m.learnMorePost}
  </p>

  <h3>{m.askAiHeading}</h3>
  <ul>
    {#each m.askAi as question (question)}
      <li>{question}</li>
    {/each}
  </ul>

  <p style="margin-top: 2rem;">
    <CallToAction
      class="button button-primary"
      href={localeHref(locale, 'what-is-lean-six-sigma-for-automatic-testing')}
      >{m.nextLabel}</CallToAction
    >
  </p>
</section>
