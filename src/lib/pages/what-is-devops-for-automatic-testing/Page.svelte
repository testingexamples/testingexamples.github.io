<script lang="ts">
  import { CallToAction } from 'lily-design-system-svelte-headless';
  import { localeHref } from '$lib/i18n/paths';
  import type { Locale } from '$lib/i18n/locales';

  let { locale }: { locale: Locale } = $props();

  // "DevOps" is a methodology/proper-noun-style name — kept exactly as
  // "DevOps" in every locale, including inside Welsh prose, the same
  // treatment as "Given-When-Then"/"Gherkin" elsewhere on this site. The
  // two quoted video titles below are literal external titles and are
  // likewise kept in English for every locale.
  type Messages = {
    title: string;
    metaDescription: string;
    heading: string;
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
    title: 'What is DevOps for automatic testing?',
    metaDescription:
      'What DevOps is, and why testing in production — canary releases, feature flags, watching real error rates after a deploy — legitimately complements pre-release testing rather than replacing it.',
    heading: 'What is DevOps for automatic testing?',
    introP:
      'is the broader practice CI/CD sits inside: breaking down the wall between the people who write software and the people who run it in production, so both groups share responsibility for whether it actually works once real users touch it.',
    belongsP:
      'Here\'s why that belongs on a testing page: DevOps is why "testing in production" — canary releases to a small slice of real traffic, feature flags, watching real error rates right after a deploy — is a legitimate complement to pre-release testing, not a replacement for it. No test suite can cover every real-world condition in advance; DevOps practices are the second, live safety net for the ones it missed.',
    learnMorePre: "Learn more at AWS's ",
    learnMoreLink1Text: 'introduction to DevOps',
    learnMoreMid: ", or watch edureka!'s ",
    learnMorePost: ' for a video introduction.',
    askAiHeading: 'Ask AI ideas',
    askAi: [
      "What does 'DevOps' actually mean, in plain terms, and how is it different from just testing before release?",
      "What's a canary release, and how would testing fit alongside one instead of being replaced by it?",
      'How do mature teams decide which safety net — pre-release testing or a DevOps practice like feature flags — should catch a given kind of failure?'
    ],
    nextLabel: 'Next: what metrics help automatic testing? →'
  };

  // No British/American/Oxford spelling divergence occurs in this page's
  // vocabulary, so all four English locales share one copy. See
  // spec/locales/index.md.
  const CY: Messages = {
    title: 'Beth yw DevOps ar gyfer profi awtomatig?',
    metaDescription:
      "Beth yw DevOps, a pham mae profi mewn cynhyrchiad — rhyddhau canari, baneri nodwedd, gwylio cyfraddau gwallau go iawn ar ôl defnydd — yn ategu profi cyn-rhyddhau'n ddilys yn hytrach na'i ddisodli.",
    heading: 'Beth yw DevOps ar gyfer profi awtomatig?',
    introP:
      "yw'r arfer ehangach y mae CI/CD yn eistedd ynddo: chwalu'r wal rhwng y bobl sy'n ysgrifennu meddalwedd a'r bobl sy'n ei rhedeg mewn cynhyrchiad, fel bod y ddau grŵp yn rhannu cyfrifoldeb am a yw'n gweithio go iawn unwaith y bydd defnyddwyr go iawn yn ei gyffwrdd.",
    belongsP:
      "Dyma pam mae hynny'n perthyn ar dudalen brofi: DevOps yw'r rheswm bod \"profi mewn cynhyrchiad\" — rhyddhau canari i sleisen fach o draffig go iawn, baneri nodwedd, gwylio cyfraddau gwallau go iawn yn syth ar ôl defnydd — yn ategiad dilys i brofi cyn-rhyddhau, nid yn ddisodliad ohono. Ni all unrhyw gyfres brofion gwmpasu pob amod byd-go-iawn ymlaen llaw; arferion DevOps yw'r ail rwyd ddiogelwch fyw ar gyfer y rhai a gollwyd.",
    learnMorePre: 'Dysgwch fwy yng ',
    learnMoreLink1Text: 'nghyflwyniad AWS i DevOps',
    learnMoreMid: ', neu gwyliwch ',
    learnMorePost: ' gan edureka! ar gyfer cyflwyniad fideo.',
    askAiHeading: 'Syniadau gofyn i AI',
    askAi: [
      "Beth mae 'DevOps' yn ei olygu mewn gwirionedd, mewn termau plaen, a sut mae'n wahanol i brofi cyn rhyddhau yn unig?",
      "Beth yw rhyddhad canari, a sut fyddai profi'n cyd-fynd ag un yn lle cael ei ddisodli ganddo?",
      "Sut mae timau aeddfed yn penderfynu pa rwyd ddiogelwch — profi cyn-rhyddhau neu arfer DevOps fel baneri nodwedd — ddylai ddal math penodol o fethiant?"
    ],
    nextLabel: "Nesaf: pa fetrigau sy'n helpu profi awtomatig? →"
  };

  const ZH: Messages = {
    title: '什么是自动化测试中的 DevOps？',
    metaDescription:
      '什么是 DevOps，以及为什么在生产环境中测试——金丝雀发布、功能开关、部署后观察真实错误率——是对发布前测试的正当补充，而不是取代它。',
    heading: '什么是自动化测试中的 DevOps？',
    introP:
      '是 CI/CD 所处的更广泛实践：打破编写软件的人和在生产环境中运行软件的人之间的隔阂，让这两个群体共同为软件在真实用户接触后是否真的能用负责。',
    belongsP:
      '这就是为什么它出现在一个测试相关的页面上：DevOps 正是“在生产环境中测试”——把金丝雀发布放给一小部分真实流量、使用功能开关、在部署后立即观察真实错误率——之所以能成为发布前测试的正当补充、而非替代品的原因。没有任何测试套件能事先覆盖所有真实世界的情况；DevOps 的这些做法，就是为那些被遗漏的情况提供的第二道、实时的安全网。',
    learnMorePre: '可以进一步阅读 AWS 的',
    learnMoreLink1Text: 'DevOps 简介',
    learnMoreMid: '，或者观看 edureka! 的',
    learnMorePost: '视频介绍。',
    askAiHeading: '向 AI 提问的想法',
    askAi: [
      '用简单的话说，"DevOps" 到底是什么意思，它和只在发布前测试有什么不同？',
      '什么是金丝雀发布，测试又该如何与它配合，而不是被它取代？',
      '成熟的团队是如何判断某一类故障应该由哪种安全网来捕获——是发布前测试，还是像功能开关这样的 DevOps 实践？'
    ],
    nextLabel: '下一步：哪些指标有助于自动化测试？→'
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
    <strong>DevOps</strong>
    {m.introP}
  </p>
</div>

<section class="section prose">
  <p>{m.belongsP}</p>

  <p>
    {m.learnMorePre}<a href="https://aws.amazon.com/devops/what-is-devops/"
      >{m.learnMoreLink1Text}</a
    >{m.learnMoreMid}<a href="https://www.youtube.com/watch?v=gc7_f3NmKQU"
      >"DevOps Explained in 10 Minutes"</a
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
      href={localeHref(locale, 'what-are-flow-metrics-for-automatic-testing')}
      >{m.nextLabel}</CallToAction
    >
  </p>
</section>
