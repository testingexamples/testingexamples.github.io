<script lang="ts">
  import { CodeBlock } from 'lily-design-system-svelte-headless';
  import { localeHref } from '#lib/i18n/paths.js';
  import type { Locale } from '#lib/i18n/locales.js';

  let { locale }: { locale: Locale } = $props();

  type Messages = {
    title: string;
    metaDescription: string;
    heading: string;
    intro: string;
    meaningHeading: string;
    meaningText: string;
    timelineLabel: string;
    practicesHeading: string;
    practices: [string, string][];
    rightHeading: string;
    rightPre: string;
    rightDevopsText: string;
    rightMid: string;
    rightPyramidText: string;
    rightPost: string;
  };

  const EN_001: Messages = {
    title: "Shift left for automatic testing",
    metaDescription:
      "Shift left means starting automatic testing earlier in the development lifecycle, so problems are found sooner and cost less to fix.",
    heading: "Shift left for automatic testing",
    intro:
      "Picture the stages of building software as a line from left to right: plan, code, build, test, release, operate. Shifting left means moving testing toward the left of that line — starting it earlier, and doing more of it while the code is still fresh.",
    meaningHeading: "Why shift left",
    meaningText:
      "A bug found while the code is being written takes minutes to fix. The same bug found after release can take days and may reach users. Testing earlier gives faster feedback, cheaper fixes, and more confidence to change things.",
    timelineLabel: "The lifecycle, and which way to shift",
    practicesHeading: "Ways to shift left",
    practices: [
      ["Test while coding", "write unit tests alongside the code, so each small piece is checked as it is written."],
      ["Test on every change", "run the automatic test suite in continuous integration, so a broken change is caught before it merges."],
      ["Agree examples first", "describe the expected behavior in plain examples (Given, When, Then) before anyone writes code or automation."],
      ["Review early", "read requirements and designs, review code, and run static analysis before the first test even runs."]
    ],
    rightHeading: "Shift right too",
    rightPre: "Shifting left does not replace later testing. Real users and real systems still surprise you, which is why teams also watch and test in production — see ",
    rightDevopsText: "devops for automatic testing",
    rightMid: " — and keep a few realistic browser tests at the top of ",
    rightPyramidText: "the automatic testing pyramid",
    rightPost: "."
  };

  const CY: Messages = {
    title: "Symud i’r chwith ar gyfer profi awtomatig",
    metaDescription:
      "Mae symud i’r chwith yn golygu dechrau profi awtomatig yn gynharach yn y cylch datblygu, fel bod problemau’n cael eu canfod yn gynt ac yn costio llai i’w trwsio.",
    heading: "Symud i’r chwith ar gyfer profi awtomatig",
    intro:
      "Dychmygwch gamau adeiladu meddalwedd fel llinell o’r chwith i’r dde: cynllunio, codio, adeiladu, profi, rhyddhau, gweithredu. Mae symud i’r chwith yn golygu symud profi tuag at ochr chwith y llinell honno — dechrau’n gynharach, a gwneud mwy ohono tra bo’r cod yn dal yn ffres.",
    meaningHeading: "Pam symud i’r chwith",
    meaningText:
      "Mae byg a ganfyddir wrth i’r cod gael ei ysgrifennu yn cymryd munudau i’w drwsio. Gall yr un byg a ganfyddir ar ôl ei ryddhau gymryd dyddiau a gall gyrraedd defnyddwyr. Mae profi’n gynharach yn rhoi adborth cyflymach, atgyweiriadau rhatach, a mwy o hyder i newid pethau.",
    timelineLabel: "Y cylch bywyd, a pha ffordd i symud",
    practicesHeading: "Ffyrdd o symud i’r chwith",
    practices: [
      ["Profi wrth godio", "ysgrifennwch brofion uned ochr yn ochr â’r cod, fel bod pob darn bach yn cael ei wirio wrth ei ysgrifennu."],
      ["Profi ar bob newid", "rhedwch y set brofion awtomatig mewn integreiddio parhaus, fel bod newid toredig yn cael ei ddal cyn iddo uno."],
      ["Cytuno ar enghreifftiau yn gyntaf", "disgrifiwch yr ymddygiad disgwyliedig mewn enghreifftiau plaen (Given, When, Then) cyn i neb ysgrifennu cod nac awtomatiaeth."],
      ["Adolygu’n gynnar", "darllenwch ofynion a dyluniadau, adolygwch god, a rhedwch ddadansoddiad statig cyn i’r prawf cyntaf redeg hyd yn oed."]
    ],
    rightHeading: "Symud i’r dde hefyd",
    rightPre: "Nid yw symud i’r chwith yn disodli profi diweddarach. Mae defnyddwyr go iawn a systemau go iawn yn dal i’ch synnu, a dyna pam mae timau hefyd yn gwylio ac yn profi mewn cynhyrchu — gweler ",
    rightDevopsText: "devops ar gyfer profi awtomatig",
    rightMid: " — ac yn cadw ychydig o brofion porwr realistig ar frig ",
    rightPyramidText: "y pyramid profi awtomatig",
    rightPost: "."
  };

  const ZH: Messages = {
    title: "自动化测试的左移",
    metaDescription:
      "左移是指在开发生命周期中更早地开始自动化测试，从而更早发现问题、降低修复成本。",
    heading: "自动化测试的左移",
    intro:
      "把构建软件的各个阶段想象成一条从左到右的线：计划、编码、构建、测试、发布、运维。左移就是把测试朝这条线的左侧移动——更早开始，并在代码还很新鲜时多做一些。",
    meaningHeading: "为什么要左移",
    meaningText:
      "在编写代码时发现的缺陷几分钟就能修好；同一个缺陷到发布后才发现，可能要花几天，还可能已经影响到用户。更早测试意味着更快的反馈、更低的修复成本，以及更有信心去修改代码。",
    timelineLabel: "生命周期，以及移动的方向",
    practicesHeading: "左移的做法",
    practices: [
      ["边写边测", "在写代码的同时编写单元测试，让每一小段代码在写成时就得到检查。"],
      ["每次改动都测", "在持续集成中运行自动化测试套件，在有问题的改动合并之前就发现它。"],
      ["先约定示例", "在任何人编写代码或自动化之前，用平实的示例（Given、When、Then）描述期望的行为。"],
      ["尽早评审", "在运行第一个测试之前，就阅读需求和设计、评审代码并运行静态分析。"]
    ],
    rightHeading: "也要右移",
    rightPre: "左移并不能取代后期测试。真实用户和真实系统仍会让你意外，所以团队也会在生产环境中监控和测试——参见",
    rightDevopsText: "自动化测试的 devops",
    rightMid: "——并在",
    rightPyramidText: "自动化测试金字塔",
    rightPost: "的顶端保留少量贴近真实的浏览器测试。"
  };

  const AR: Messages = {
    title: "الانتقال لليسار في الاختبار الآلي",
    metaDescription:
      "الانتقال لليسار يعني بدء الاختبار الآلي مبكرًا في دورة التطوير، فتُكتشف المشكلات أسرع وتكلّف أقل في إصلاحها.",
    heading: "الانتقال لليسار في الاختبار الآلي",
    intro:
      "تخيّل مراحل بناء البرمجيات خطًّا من اليسار إلى اليمين: التخطيط، الكتابة، البناء، الاختبار، الإصدار، التشغيل. الانتقال لليسار يعني تحريك الاختبار نحو يسار هذا الخط — أي البدء مبكرًا وإجراء المزيد منه ما دامت الشيفرة حديثة.",
    meaningHeading: "لماذا ننتقل لليسار",
    meaningText:
      "الخطأ الذي يُكتشف أثناء كتابة الشيفرة يستغرق إصلاحه دقائق. أما الخطأ نفسه بعد الإصدار فقد يستغرق أيامًا وقد يصل إلى المستخدمين. الاختبار المبكر يمنح ملاحظات أسرع وإصلاحات أرخص وثقة أكبر في تغيير الأشياء.",
    timelineLabel: "دورة الحياة، وفي أي اتجاه ننتقل",
    practicesHeading: "طرق الانتقال لليسار",
    practices: [
      ["الاختبار أثناء الكتابة", "اكتب اختبارات الوحدة مع الشيفرة، ليُفحص كل جزء صغير حين يُكتب."],
      ["الاختبار عند كل تغيير", "شغّل مجموعة الاختبارات الآلية في التكامل المستمر، لتُكتشف التغييرات المعطوبة قبل دمجها."],
      ["الاتفاق على الأمثلة أولًا", "صف السلوك المتوقع بأمثلة بسيطة (Given وWhen وThen) قبل أن يكتب أحد الشيفرة أو الأتمتة."],
      ["المراجعة المبكرة", "اقرأ المتطلبات والتصاميم، وراجع الشيفرة، وشغّل التحليل الساكن قبل أن يعمل أول اختبار."]
    ],
    rightHeading: "وانتقل لليمين أيضًا",
    rightPre: "الانتقال لليسار لا يغني عن الاختبار المتأخر. فالمستخدمون والأنظمة الحقيقية ما زالوا يفاجئونك، ولهذا تراقب الفرق وتختبر في بيئة الإنتاج أيضًا — راجع ",
    rightDevopsText: "devops للاختبار الآلي",
    rightMid: " — وتُبقي بضعة اختبارات متصفح واقعية في قمة ",
    rightPyramidText: "هرم الاختبار الآلي",
    rightPost: "."
  };

  const KO: Messages = {
    title: "자동화 테스트의 시프트 레프트",
    metaDescription:
      "시프트 레프트는 개발 수명 주기에서 자동화 테스트를 더 일찍 시작하는 것으로, 문제를 더 빨리 찾고 더 적은 비용으로 고칠 수 있게 합니다.",
    heading: "자동화 테스트의 시프트 레프트",
    intro:
      "소프트웨어를 만드는 단계를 왼쪽에서 오른쪽으로 이어지는 선으로 떠올려 보세요. 계획, 코딩, 빌드, 테스트, 릴리스, 운영입니다. 시프트 레프트는 테스트를 이 선의 왼쪽으로 옮기는 것, 즉 더 일찍 시작하고 코드가 아직 생생할 때 더 많이 하는 것을 뜻합니다.",
    meaningHeading: "왜 시프트 레프트인가",
    meaningText:
      "코드를 작성하는 중에 찾은 버그는 몇 분이면 고칠 수 있습니다. 같은 버그를 릴리스 후에 찾으면 며칠이 걸릴 수 있고 사용자에게 닿았을 수도 있습니다. 일찍 테스트하면 피드백이 빨라지고, 수정 비용이 줄고, 변경할 때 더 자신감이 생깁니다.",
    timelineLabel: "수명 주기와 이동하는 방향",
    practicesHeading: "시프트 레프트를 하는 방법",
    practices: [
      ["코딩하면서 테스트", "코드와 함께 단위 테스트를 작성해, 작은 조각마다 작성하는 즉시 확인합니다."],
      ["변경마다 테스트", "지속적 통합에서 자동화 테스트 모음을 실행해, 문제가 있는 변경이 병합되기 전에 잡아냅니다."],
      ["예제부터 합의", "누가 코드나 자동화를 작성하기 전에 기대하는 동작을 평이한 예제(Given, When, Then)로 설명합니다."],
      ["일찍 검토", "첫 테스트가 실행되기 전에 요구 사항과 설계를 읽고, 코드를 리뷰하고, 정적 분석을 실행합니다."]
    ],
    rightHeading: "시프트 라이트도 함께",
    rightPre: "시프트 레프트가 뒤쪽 테스트를 대체하지는 않습니다. 실제 사용자와 실제 시스템은 여전히 예상 밖의 일을 만들기 때문에 팀은 운영 환경에서도 지켜보고 테스트합니다. ",
    rightDevopsText: "자동화 테스트를 위한 devops",
    rightMid: "를 참고하고, ",
    rightPyramidText: "자동화 테스트 피라미드",
    rightPost: "의 꼭대기에는 현실적인 브라우저 테스트를 소수 남겨 두세요."
  };

  const FR: Messages = {
    title: "Le shift left pour les tests automatisés",
    metaDescription:
      "Le shift left consiste à commencer les tests automatisés plus tôt dans le cycle de développement, afin de trouver les problèmes plus vite et de les corriger à moindre coût.",
    heading: "Le shift left pour les tests automatisés",
    intro:
      "Imaginez les étapes de la création d'un logiciel comme une ligne de gauche à droite : planifier, coder, construire, tester, publier, exploiter. Déplacer vers la gauche (shift left), c'est rapprocher les tests de la gauche de cette ligne : les commencer plus tôt et en faire davantage tant que le code est encore frais.",
    meaningHeading: "Pourquoi décaler vers la gauche",
    meaningText:
      "Un bogue trouvé pendant l'écriture du code se corrige en quelques minutes. Le même bogue trouvé après la publication peut prendre des jours et atteindre les utilisateurs. Tester plus tôt donne un retour plus rapide, des corrections moins coûteuses et plus de confiance pour changer les choses.",
    timelineLabel: "Le cycle de vie, et le sens du décalage",
    practicesHeading: "Façons de décaler vers la gauche",
    practices: [
      ["Tester en codant", "écrivez des tests unitaires en même temps que le code, afin que chaque petit morceau soit vérifié au moment où il est écrit."],
      ["Tester à chaque modification", "exécutez la suite de tests automatisés en intégration continue, pour attraper une modification défectueuse avant sa fusion."],
      ["Convenir des exemples d'abord", "décrivez le comportement attendu par des exemples simples (Given, When, Then) avant que quiconque écrive du code ou de l'automatisation."],
      ["Relire tôt", "lisez les exigences et les conceptions, relisez le code et lancez l'analyse statique avant même l'exécution du premier test."]
    ],
    rightHeading: "Décaler aussi vers la droite",
    rightPre: "Le shift left ne remplace pas les tests plus tardifs. Les vrais utilisateurs et les vrais systèmes vous surprennent encore, c'est pourquoi les équipes observent et testent aussi en production — voir ",
    rightDevopsText: "devops pour les tests automatisés",
    rightMid: " — et gardent quelques tests de navigateur réalistes au sommet de ",
    rightPyramidText: "la pyramide des tests automatisés",
    rightPost: "."
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

  <CodeBlock label={m.timelineLabel}>
    <pre dir="ltr"><code>{`Plan → Code → Build → Test → Release → Operate
←←← shift left: start testing here, earlier
`}</code></pre>
  </CodeBlock>

  <h2>{m.meaningHeading}</h2>
  <p>{m.meaningText}</p>

  <h2>{m.practicesHeading}</h2>
  <ul class="repo-list">
    {#each m.practices as [term, description] (term)}
      <li><strong>{term}</strong> — {description}</li>
    {/each}
  </ul>

  <h2>{m.rightHeading}</h2>
  <p>
    {m.rightPre}<a href={localeHref(locale, 'what-is-devops-for-automatic-testing')}
      >{m.rightDevopsText}</a
    >{m.rightMid}<a href={localeHref(locale, 'what-is-the-testing-pyramid')}>{m.rightPyramidText}</a
    >{m.rightPost}
  </p>
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
