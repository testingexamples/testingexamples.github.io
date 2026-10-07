<script lang="ts">
  import { CallToAction } from 'lily-design-system-svelte-headless';
  import { localeHref } from '#lib/i18n/paths.js';
  import type { Locale } from '#lib/i18n/locales.js';

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
    askAiHeading: 'Examples you can ask AI',
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
      "Beth yw DevOps, a pham mae profi mewn cynhyrchu — rhyddhau canari, baneri nodwedd, gwylio cyfraddau gwallau go iawn ar ôl defnyddio'r cod — yn ategu profi cyn-rhyddhau'n ddilys yn hytrach na'i ddisodli.",
    heading: 'Beth yw DevOps ar gyfer profi awtomatig?',
    introP:
      "yw'r arfer ehangach y mae CI/CD yn rhan ohono: chwalu'r wal rhwng y bobl sy'n ysgrifennu meddalwedd a'r bobl sy'n ei rhedeg mewn cynhyrchu, fel bod y ddau grŵp yn rhannu cyfrifoldeb am a yw'n gweithio go iawn unwaith y bydd defnyddwyr go iawn yn ei defnyddio.",
    belongsP:
      "Dyma pam mae hynny'n perthyn i dudalen am brofi: DevOps yw'r rheswm bod \"profi mewn cynhyrchu\" — rhyddhau canari i gyfran fach o draffig go iawn, baneri nodwedd, gwylio cyfraddau gwallau go iawn yn syth ar ôl defnyddio'r cod — yn ategiad dilys i brofi cyn-rhyddhau, nid yn ddisodliad ohono. Ni all unrhyw gyfres brofion gwmpasu pob amod o'r byd go iawn ymlaen llaw; arferion DevOps yw'r ail rwyd ddiogelwch fyw ar gyfer y rhai a gollwyd.",
    learnMorePre: 'Dysgwch fwy yng ',
    learnMoreLink1Text: 'nghyflwyniad AWS i DevOps',
    learnMoreMid: ', neu gwyliwch ',
    learnMorePost: ' gan edureka! ar gyfer cyflwyniad fideo.',
    askAiHeading: "Enghreifftiau y gallwch eu gofyn i ddeallusrwydd artiffisial",
    askAi: [
      "Beth mae 'DevOps' yn ei olygu mewn gwirionedd, mewn termau plaen, a sut mae'n wahanol i brofi cyn rhyddhau yn unig?",
      "Beth yw rhyddhau canari, a sut fyddai profi'n cyd-fynd ag un yn lle cael ei ddisodli ganddo?",
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
    askAiHeading: '可以向 AI 提问的示例',
    askAi: [
      '用简单的话说，"DevOps" 到底是什么意思，它和只在发布前测试有什么不同？',
      '什么是金丝雀发布，测试又该如何与它配合，而不是被它取代？',
      '成熟的团队是如何判断某一类故障应该由哪种安全网来捕获——是发布前测试，还是像功能开关这样的 DevOps 实践？'
    ],
    nextLabel: '下一步：哪些指标有助于自动化测试？→'
  };

  const AR: Messages = {
    title: 'ما هو DevOps للاختبار الآلي؟',
    metaDescription:
      'ما هو DevOps، ولماذا يكمّل الاختبار في بيئة الإنتاج — الإصدارات التجريبية المحدودة (canary) وأعلام الميزات ومراقبة معدلات الأخطاء الفعلية بعد النشر — الاختبار قبل الإصدار بدلًا من أن يحلّ محله.',
    heading: 'ما هو DevOps للاختبار الآلي؟',
    introP:
      'هو الممارسة الأوسع التي يندرج فيها CI/CD: هدم الجدار بين من يكتبون البرمجيات ومن يشغّلونها في بيئة الإنتاج، ليتشارك الفريقان المسؤولية عن عملها فعلًا حين يلمسها المستخدمون الحقيقيون.',
    belongsP:
      'وإليك لماذا ينتمي هذا إلى صفحة عن الاختبار: DevOps هو السبب في أن «الاختبار في بيئة الإنتاج» — إصدارات canary لشريحة صغيرة من الحركة الحقيقية، وأعلام الميزات، ومراقبة معدلات الأخطاء الفعلية فور النشر — مكمّل مشروع للاختبار قبل الإصدار، لا بديل عنه. لا تستطيع أي مجموعة اختبارات تغطية كل ظروف العالم الحقيقي مسبقًا؛ وممارسات DevOps هي شبكة الأمان الثانية الحية لما فاتها.',
    learnMorePre: 'اعرف المزيد في ',
    learnMoreLink1Text: 'مقدمة AWS إلى DevOps',
    learnMoreMid: '، أو شاهد فيديو ',
    learnMorePost: ' من edureka! كمقدمة مرئية.',
    askAiHeading: 'أمثلة يمكنك طرحها على الذكاء الاصطناعي',
    askAi: [
      'ماذا يعني «DevOps» فعلًا بعبارات بسيطة، وبماذا يختلف عن مجرد الاختبار قبل الإصدار؟',
      'ما هو الإصدار التجريبي المحدود (canary)، وكيف يتكامل الاختبار معه بدلًا من أن يُستبدل به؟',
      'كيف تقرر الفرق الناضجة أي شبكة أمان — الاختبار قبل الإصدار أم ممارسة DevOps مثل أعلام الميزات — ينبغي أن تلتقط نوعًا معينًا من الإخفاقات؟'
    ],
    nextLabel: 'التالي: ما المقاييس التي تفيد الاختبار الآلي؟ ←'
  };

  const KO: Messages = {
    title: '자동화 테스트를 위한 DevOps란 무엇인가?',
    metaDescription:
      'DevOps란 무엇이며, 프로덕션에서의 테스트 — 카나리 릴리스, 기능 플래그, 배포 직후 실제 오류율 관찰 — 가 왜 릴리스 전 테스트를 대체하는 것이 아니라 정당하게 보완하는지 설명합니다.',
    heading: '자동화 테스트를 위한 DevOps란 무엇인가?',
    introP:
      '는 CI/CD가 속해 있는 더 넓은 관행입니다. 소프트웨어를 작성하는 사람과 프로덕션에서 운영하는 사람 사이의 벽을 허물어, 실제 사용자가 사용하기 시작한 뒤 소프트웨어가 정말로 동작하는지에 대한 책임을 두 집단이 함께 지도록 하는 것입니다.',
    belongsP:
      '이것이 테스트 페이지에 속하는 이유는 다음과 같습니다. DevOps는 "프로덕션에서의 테스트" — 실제 트래픽의 일부에 대한 카나리 릴리스, 기능 플래그, 배포 직후 실제 오류율 관찰 — 가 릴리스 전 테스트를 대체하는 것이 아니라 정당하게 보완하는 수단인 이유입니다. 어떤 테스트 스위트도 현실 세계의 모든 조건을 미리 다룰 수는 없습니다. DevOps 관행은 놓친 것들을 위한 두 번째 실시간 안전망입니다.',
    learnMorePre: '더 알아보려면 AWS의 ',
    learnMoreLink1Text: 'DevOps 소개',
    learnMoreMid: '를 보거나, edureka!의 ',
    learnMorePost: ' 영상으로 입문하세요.',
    askAiHeading: 'AI에게 물어볼 수 있는 예시',
    askAi: [
      "쉬운 말로 'DevOps'는 실제로 무슨 뜻이며, 단지 릴리스 전에 테스트하는 것과 어떻게 다른가요?",
      '카나리 릴리스란 무엇이며, 테스트가 그것을 대체하지 않고 나란히 놓이려면 어떻게 해야 하나요?',
      '성숙한 팀은 특정 종류의 실패를 릴리스 전 테스트가 잡아야 할지, 기능 플래그 같은 DevOps 관행이 잡아야 할지 어떻게 결정하나요?'
    ],
    nextLabel: '다음: 자동화 테스트에 도움이 되는 지표는 무엇인가? →'
  };

  const FR: Messages = {
    title: "Qu'est-ce que DevOps pour les tests automatisés ?",
    metaDescription:
      "Ce qu'est DevOps, et pourquoi le test en production — déploiements canari, feature flags, surveillance des taux d'erreur réels après un déploiement — complète légitimement les tests avant livraison au lieu de les remplacer.",
    heading: "Qu'est-ce que DevOps pour les tests automatisés ?",
    introP:
      "est la pratique plus large dans laquelle s'inscrit le CI/CD : abattre le mur entre les personnes qui écrivent le logiciel et celles qui l'exploitent en production, afin que les deux groupes partagent la responsabilité de savoir s'il fonctionne réellement une fois que de vrais utilisateurs l'utilisent.",
    belongsP:
      "Voici pourquoi cela a sa place sur une page consacrée aux tests : DevOps est la raison pour laquelle le « test en production » — déploiements canari sur une petite part du trafic réel, feature flags, surveillance des taux d'erreur réels juste après un déploiement — est un complément légitime des tests avant livraison, et non un remplacement. Aucune suite de tests ne peut couvrir à l'avance toutes les conditions du monde réel ; les pratiques DevOps constituent le second filet de sécurité, en direct, pour celles qui lui ont échappé.",
    learnMorePre: "Pour en savoir plus, consultez l'",
    learnMoreLink1Text: "introduction à DevOps d'AWS",
    learnMoreMid: ', ou regardez la vidéo ',
    learnMorePost: " d'edureka! pour une présentation en vidéo.",
    askAiHeading: "Exemples à demander à l'IA",
    askAi: [
      "Que signifie réellement « DevOps », en termes simples, et en quoi est-ce différent du simple fait de tester avant la livraison ?",
      "Qu'est-ce qu'un déploiement canari, et comment les tests s'articuleraient-ils avec lui au lieu d'être remplacés par lui ?",
      "Comment les équipes matures décident-elles quel filet de sécurité — tests avant livraison ou pratique DevOps comme les feature flags — doit attraper un type d'échec donné ?"
    ],
    nextLabel: "Suite : quelles métriques aident les tests automatisés ? →"
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
