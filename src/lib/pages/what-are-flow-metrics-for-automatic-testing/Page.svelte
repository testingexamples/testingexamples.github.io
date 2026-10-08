<script lang="ts">
  import { CallToAction } from 'lily-design-system-svelte-headless';
  import { localeHref } from '#lib/i18n/paths.js';
  import type { Locale } from '#lib/i18n/locales.js';

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
    title: 'Metrics for automatic testing',
    metaDescription:
      "What flow metrics are — cycle time, lead time, throughput, work in progress — and why a growing pile of skipped or flaky tests is itself a flow-metric signal that testing debt is piling up.",
    heading: 'Metrics for automatic testing',
    flowMetricsLabel: 'Flow metrics',
    introP:
      "measure how work actually moves through a process: cycle time (how long one item takes end to end), lead time, throughput, and work in progress. The point is measuring what's actually moving, not how busy people look.",
    belongsP:
      'Here\'s why that belongs on a testing page: "time from a bug being reported to a regression test existing for it" is a concrete, trackable cycle time. And a growing pile of skipped, ignored, or flaky tests is itself a flow-metric signal — work in progress that isn\'t actually moving — meaning testing debt is piling up faster than it\'s being paid down, whether or not anyone\'s tracking it on a board.',
    learnMorePre: "Learn more at Atlassian's ",
    learnMoreLink1Text: 'guide to Kanban',
    learnMoreMid: ', or watch ProKanban\'s ',
    learnMorePost: ' for a video introduction to the metrics themselves.',
    askAiHeading: 'Examples you can ask AI',
    askAi: [
      "What do 'cycle time' and 'throughput' actually mean, in plain terms, for a team's day-to-day work?",
      'How would I start tracking cycle time for bug fixes on my own team, without buying new tooling?',
      'How do I use flow metrics to make a concrete case that a growing pile of flaky tests is real, measurable technical debt?'
    ],
    nextLabel: 'Next: Lean Six Sigma for automatic testing →'
  };

  // No British/American/Oxford spelling divergence occurs in this page's
  // vocabulary, so all four English locales share one copy. See
  // spec/locales/index.md.
  const CY: Messages = {
    title: "Pa fetrigau sy'n helpu profi awtomatig?",
    metaDescription:
      "Beth yw metrigau llif — amser cylchred, amser arwain, cyfradd brosesu, gwaith ar y gweill — a pham mae pentwr cynyddol o brofion wedi'u hepgor neu'n ansefydlog yn arwydd llif-fetrig ynddo'i hun bod dyled brofi'n cronni.",
    heading: "Pa fetrigau sy'n helpu profi awtomatig?",
    flowMetricsLabel: 'Metrigau llif',
    introP:
      "yn mesur sut mae gwaith wir yn symud drwy broses: amser cylchred (pa mor hir mae un eitem yn ei gymryd o'r dechrau i'r diwedd), amser arwain, cyfradd brosesu, a gwaith ar y gweill. Y pwynt yw mesur beth sy'n symud go iawn, nid pa mor brysur y mae pobl yn ymddangos.",
    belongsP:
      "Dyma pam mae hynny'n perthyn i dudalen am brofi: mae \"yr amser o adrodd am fyg nes bod prawf atchweliad yn bodoli ar ei gyfer\" yn amser cylchred pendant, y gellir ei olrhain. Ac mae pentwr cynyddol o brofion wedi'u hepgor, eu hanwybyddu, neu'n ansefydlog yn arwydd llif-fetrig ynddo'i hun — gwaith ar y gweill nad yw wir yn symud — sy'n golygu bod dyled brofi'n cronni'n gyflymach nag y mae'n cael ei thalu'n ôl, pa un a oes rhywun yn ei olrhain ar fwrdd ai peidio.",
    learnMorePre: 'Dysgwch fwy yn ',
    learnMoreLink1Text: 'canllaw Atlassian i Kanban',
    learnMoreMid: ', neu gwyliwch ',
    learnMorePost: " gan ProKanban ar gyfer cyflwyniad fideo i'r metrigau eu hunain.",
    askAiHeading: "Enghreifftiau y gallwch eu gofyn i ddeallusrwydd artiffisial",
    askAi: [
      "Beth mae 'amser cylchred' a 'chyfradd brosesu' yn ei olygu mewn gwirionedd, mewn termau plaen, ar gyfer gwaith dydd-i-ddydd tîm?",
      "Sut fyddwn i'n dechrau olrhain amser cylchred ar gyfer trwsio bygiau ar fy nhîm fy hun, heb brynu offer newydd?",
      "Sut ydw i'n defnyddio metrigau llif i wneud achos pendant bod pentwr cynyddol o brofion ansefydlog yn ddyled dechnegol wirioneddol, y gellir ei mesur?"
    ],
    nextLabel: "Nesaf: sut mae Six Sigma yn arwain profi â llaw at brofi awtomatig? →"
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
    askAiHeading: '可以向 AI 提问的示例',
    askAi: [
      '对于团队的日常工作来说，“周期时间”和“吞吐量”用简单的话说到底是什么意思？',
      '在不购买新工具的情况下，我该如何开始为自己团队的缺陷修复追踪周期时间？',
      '我该如何利用流程指标，具体地论证不断增多的不稳定测试是真实、可衡量的技术债？'
    ],
    nextLabel: '下一步：六西格玛如何引导人工测试进入自动化测试？→'
  };

  const AR: Messages = {
    title: 'ما المقاييس التي تفيد الاختبار الآلي؟',
    metaDescription:
      'ما هي مقاييس التدفق — زمن الدورة وزمن الإنجاز والإنتاجية والعمل قيد التنفيذ — ولماذا يُعدّ تراكم الاختبارات المتجاوَزة أو غير المستقرة مؤشرًا بحد ذاته على تراكم دَين الاختبار.',
    heading: 'ما المقاييس التي تفيد الاختبار الآلي؟',
    flowMetricsLabel: 'مقاييس التدفق',
    introP:
      'تقيس كيف ينتقل العمل فعلًا عبر العملية: زمن الدورة (المدة التي يستغرقها عنصر واحد من البداية إلى النهاية)، وزمن الإنجاز، والإنتاجية، والعمل قيد التنفيذ. والمقصود قياس ما يتحرك فعلًا، لا مدى انشغال الناس في الظاهر.',
    belongsP:
      'وإليك لماذا ينتمي هذا إلى صفحة عن الاختبار: «الزمن من الإبلاغ عن خطأ إلى وجود اختبار انحدار له» هو زمن دورة ملموس يمكن تتبعه. وتراكم الاختبارات المتجاوَزة أو المهمَلة أو غير المستقرة هو بحد ذاته مؤشر تدفق — عمل قيد التنفيذ لا يتحرك فعلًا — أي أن دَين الاختبار يتراكم أسرع من سداده، سواء تتبعه أحد على لوحة أم لا.',
    learnMorePre: 'اعرف المزيد في ',
    learnMoreLink1Text: 'دليل Atlassian إلى Kanban',
    learnMoreMid: '، أو شاهد فيديو ',
    learnMorePost: ' من ProKanban كمقدمة مرئية إلى المقاييس نفسها.',
    askAiHeading: 'أمثلة يمكنك طرحها على الذكاء الاصطناعي',
    askAi: [
      'ماذا يعني «زمن الدورة» و«الإنتاجية» فعلًا بعبارات بسيطة في العمل اليومي للفريق؟',
      'كيف أبدأ تتبع زمن الدورة لإصلاحات الأخطاء في فريقي دون شراء أدوات جديدة؟',
      'كيف أستخدم مقاييس التدفق لبناء حجة ملموسة بأن تراكم الاختبارات غير المستقرة دَين تقني حقيقي يمكن قياسه؟'
    ],
    nextLabel: 'التالي: كيف يقود Six Sigma الاختبار اليدوي إلى الاختبار الآلي؟ ←'
  };

  const KO: Messages = {
    title: '자동화 테스트에 도움이 되는 지표는 무엇인가?',
    metaDescription:
      '플로 지표란 무엇인가 — 사이클 타임, 리드 타임, 처리량, 진행 중인 작업 — 그리고 건너뛰거나 불안정한 테스트가 쌓여 가는 것이 왜 그 자체로 테스트 부채가 쌓이고 있다는 플로 지표 신호인지 설명합니다.',
    heading: '자동화 테스트에 도움이 되는 지표는 무엇인가?',
    flowMetricsLabel: '플로 지표',
    introP:
      '는 작업이 프로세스를 통해 실제로 어떻게 흘러가는지를 측정합니다. 사이클 타임(항목 하나가 처음부터 끝까지 걸리는 시간), 리드 타임, 처리량, 진행 중인 작업이 그것입니다. 핵심은 사람들이 얼마나 바빠 보이는가가 아니라 실제로 움직이는 것을 측정하는 것입니다.',
    belongsP:
      '이것이 테스트 페이지에 속하는 이유는 다음과 같습니다. "버그가 보고된 시점부터 그에 대한 회귀 테스트가 존재하게 되기까지의 시간"은 구체적이고 추적 가능한 사이클 타임입니다. 그리고 건너뛰거나, 무시하거나, 불안정한 테스트가 쌓여 가는 것은 그 자체로 플로 지표 신호입니다. 실제로는 움직이지 않는 진행 중인 작업이며, 누군가 보드에서 추적하든 말든 테스트 부채가 갚는 속도보다 빠르게 쌓이고 있다는 뜻입니다.',
    learnMorePre: '더 알아보려면 Atlassian의 ',
    learnMoreLink1Text: 'Kanban 가이드',
    learnMoreMid: '를 보거나, ProKanban의 ',
    learnMorePost: ' 영상으로 지표 자체에 대한 입문을 해 보세요.',
    askAiHeading: 'AI에게 물어볼 수 있는 예시',
    askAi: [
      "'사이클 타임'과 '처리량'은 팀의 일상 업무에서 쉬운 말로 실제로 무슨 뜻인가요?",
      '새로운 도구를 구입하지 않고 우리 팀의 버그 수정 사이클 타임을 추적하려면 어떻게 시작해야 할까요?',
      '불안정한 테스트가 쌓여 가는 것이 실제로 측정 가능한 기술 부채라는 구체적인 근거를 플로 지표로 어떻게 만들 수 있을까요?'
    ],
    nextLabel: '다음: Six Sigma는 수동 테스트를 어떻게 자동화 테스트로 이끄는가? →'
  };

  const FR: Messages = {
    title: 'Quelles métriques aident les tests automatisés ?',
    metaDescription:
      "Ce que sont les métriques de flux — temps de cycle, délai de livraison, débit, travail en cours — et pourquoi un tas croissant de tests ignorés ou instables est en soi un signal de flux indiquant que la dette de test s'accumule.",
    heading: 'Quelles métriques aident les tests automatisés ?',
    flowMetricsLabel: 'Les métriques de flux',
    introP:
      "mesurent la façon dont le travail avance réellement dans un processus : le temps de cycle (le temps que prend un élément de bout en bout), le délai de livraison, le débit et le travail en cours. L'objectif est de mesurer ce qui avance vraiment, et non l'air affairé des gens.",
    belongsP:
      "Voici pourquoi cela a sa place sur une page consacrée aux tests : « le temps écoulé entre le signalement d'un bug et l'existence d'un test de régression pour celui-ci » est un temps de cycle concret et mesurable. Et un tas croissant de tests ignorés, mis de côté ou instables est en soi un signal de flux — du travail en cours qui n'avance pas vraiment — qui signifie que la dette de test s'accumule plus vite qu'elle n'est remboursée, que quelqu'un la suive ou non sur un tableau.",
    learnMorePre: "Pour en savoir plus, consultez le ",
    learnMoreLink1Text: "guide Kanban d'Atlassian",
    learnMoreMid: ', ou regardez la vidéo ',
    learnMorePost: " de ProKanban pour une présentation en vidéo des métriques elles-mêmes.",
    askAiHeading: "Exemples à demander à l'IA",
    askAi: [
      "Que signifient réellement « temps de cycle » et « débit », en termes simples, pour le travail quotidien d'une équipe ?",
      "Comment commencer à suivre le temps de cycle des corrections de bugs dans ma propre équipe, sans acheter de nouvel outil ?",
      "Comment utiliser les métriques de flux pour démontrer concrètement qu'un tas croissant de tests instables est une vraie dette technique, mesurable ?"
    ],
    nextLabel: "Suite : comment Six Sigma mène-t-il des tests manuels aux tests automatisés ? →"
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
