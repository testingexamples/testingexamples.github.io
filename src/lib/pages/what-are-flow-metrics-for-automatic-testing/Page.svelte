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

  const ZH: Messages = {
    title: '哪些指标有助于自动化测试？',
    metaDescription:
      '什么是流程指标——周期时间、交付时间、吞吐量、在制品——以及为什么不断增多的被跳过或不稳定的测试本身就是一个流程指标信号，表明测试债务正在累积。',
    heading: '哪些指标有助于自动化测试？',
    flowMetricsLabel: '流程指标',
    introP:
      '衡量的是工作在流程中实际的流动情况：周期时间（一项工作从开始到结束需要多久）、交付时间、吞吐量，以及在制品数量。关键在于衡量真正在流动的东西，而不是人看起来有多忙。',
    belongsP:
      '这就是为什么它出现在一个测试相关的页面上：“从报告一个缺陷到为它建立回归测试”之间的时间，就是一个具体、可追踪的周期时间。而不断增多的被跳过、被忽略或不稳定的测试，本身就是一个流程指标信号——一种并未真正流动的在制品——意味着测试债务正在以比偿还更快的速度累积，无论是否有人在看板上追踪它。',
    learnMorePre: '可以进一步阅读 Atlassian 的',
    learnMoreLink1Text: 'Kanban 指南',
    learnMoreMid: '，或观看 ProKanban 的',
    learnMorePost: '视频，了解这些指标本身。',
    askAiHeading: '向 AI 提问的想法',
    askAi: [
      '对于团队的日常工作来说，“周期时间”和“吞吐量”用简单的话说到底是什么意思？',
      '在不购买新工具的情况下，我该如何开始为自己团队的缺陷修复追踪周期时间？',
      '我该如何利用流程指标，具体地论证不断增多的不稳定测试是真实、可衡量的技术债？'
    ],
    nextLabel: '下一步：六西格玛如何引导人工测试进入自动化测试？→'
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
