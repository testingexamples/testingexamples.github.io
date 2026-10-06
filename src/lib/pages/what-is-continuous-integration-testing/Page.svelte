<script lang="ts">
  import { CallToAction } from 'lily-design-system-svelte-headless';
  import { localeHref } from '$lib/i18n/paths';
  import type { Locale } from '$lib/i18n/locales';

  let { locale }: { locale: Locale } = $props();

  type Messages = {
    title: string;
    metaDescription: string;
    heading: string;
    intro: string;
    p1: string;
    p2: string;
    askAiHeading: string;
    askAi: string[];
    nextLabel: string;
  };

  const EN_001: Messages = {
    title: 'What is continuous integration automatic testing?',
    metaDescription:
      'What continuous integration (CI) testing is: running your automatic test suite automatically on every change, so broken code is caught before it merges rather than after.',
    heading: 'What is continuous integration automatic testing?',
    intro:
      'Continuous integration (CI) testing is running your automatic test suite automatically every time someone proposes a change, instead of relying on a person to remember to run it by hand.',
    p1: 'A CI server (GitHub Actions, GitLab CI, Jenkins, and similar tools all do this) watches a repository for new commits and pull requests. On every one, it checks out the code, installs dependencies, and runs the test suite from scratch, in a clean environment, the same way every time — unit tests, integration tests, and often the browser automation tests this site is about, all in one run. The result — pass or fail — is reported right on the pull request, before a human reviewer even opens it.',
    p2: 'This is what makes automatic tests actually pay off. A test suite that only runs on one developer\'s laptop, when they remember to run it, catches far less than a suite that runs on every single change, automatically, and blocks the merge if it fails. CI is the mechanism that turns "we have tests" into "broken code cannot reach the main branch" — and it\'s usually the first piece of infrastructure a team adds once their browser automation tests are worth trusting.',
    askAiHeading: 'Ask AI ideas',
    askAi: [
      "What does 'CI' actually mean, in plain terms, and why would a team bother running tests automatically instead of just running them themselves before pushing?",
      "I have a test suite that works locally — what's a simple way to get it running automatically on every pull request?",
      'My CI pipeline has gotten slow because it runs the full browser test suite on every commit — how do I restructure it to stay fast without losing confidence?'
    ],
    nextLabel: 'Next: how to start learning automatic testing? →'
  };

  // No British/American/Oxford spelling divergence occurs in this page's
  // vocabulary, so all four English locales share one copy. See
  // spec/locales/index.md.
  const CY: Messages = {
    title: "Beth yw profi integreiddio parhaus awtomatig?",
    metaDescription:
      "Beth yw profi integreiddio parhaus (CI): rhedeg eich cyfres profion awtomatig yn awtomatig ar bob newid, fel bod cod wedi torri'n cael ei ddal cyn iddo uno yn hytrach nag wedyn.",
    heading: 'Beth yw profi integreiddio parhaus awtomatig?',
    intro:
      "Mae profi integreiddio parhaus (CI) yn golygu rhedeg eich cyfres profion awtomatig yn awtomatig bob tro y bydd rhywun yn cynnig newid, yn lle dibynnu ar berson i gofio ei redeg â llaw.",
    p1: "Mae gweinydd CI (mae GitHub Actions, GitLab CI, Jenkins, ac offer tebyg i gyd yn gwneud hyn) yn gwylio ystorfa am ymrwymiadau a chaisiadau tynnu newydd. Ar bob un, mae'n gwirio'r cod allan, yn gosod dibyniaethau, ac yn rhedeg y gyfres profion o'r dechrau, mewn amgylchedd glân, yr un ffordd bob tro — profion uned, profion integreiddio, a hefyd yn aml y profion awtomeiddio porwr y mae'r safle hwn yn ymwneud â nhw, i gyd mewn un rhediad. Adroddir y canlyniad — llwyddiant neu fethiant — yn syth ar y cais tynnu, cyn i adolygydd dynol hyd yn oed ei agor.",
    p2: "Dyma beth sy'n gwneud i brofion awtomatig dalu ar eu canfed mewn gwirionedd. Mae cyfres brofion sy'n rhedeg dim ond ar liniadur un datblygwr, pan fyddant yn cofio ei redeg, yn dal llawer llai na chyfres sy'n rhedeg ar bob newid unigol, yn awtomatig, ac yn rhwystro'r uno os yw'n methu. CI yw'r mecanwaith sy'n troi \"mae gennym brofion\" yn \"ni all cod wedi torri gyrraedd y gangen ganolog\" — ac fel arfer dyma'r darn cyntaf o seilwaith y mae tîm yn ei ychwanegu unwaith y mae eu profion awtomeiddio porwr yn werth eu trystio.",
    askAiHeading: 'Syniadau gofyn i AI',
    askAi: [
      "Beth mae 'CI' wir yn ei olygu, mewn termau plaen, a pham byddai tîm yn trafferthu rhedeg profion yn awtomatig yn lle jyst eu rhedeg eu hunain cyn gwthio?",
      "Mae gennyf gyfres brofion sy'n gweithio'n lleol — beth yw ffordd syml o'i chael i redeg yn awtomatig ar bob cais tynnu?",
      "Mae fy nghyflinell CI wedi mynd yn araf oherwydd ei bod yn rhedeg y gyfres brofion porwr gyflawn ar bob ymrwymiad — sut ydw i'n ei hail-strwythuro i aros yn gyflym heb golli hyder?"
    ],
    nextLabel: 'Nesaf: sut i ddechrau dysgu profi awtomatig? →'
  };

  const ZH: Messages = {
    title: '什么是持续集成自动化测试？',
    metaDescription:
      '什么是持续集成（CI）测试：在每次更改时自动运行你的自动化测试套件，以便在合并之前发现有问题的代码，而不是之后。',
    heading: '什么是持续集成自动化测试？',
    intro:
      '持续集成（CI）测试是指每次有人提出更改时都自动运行你的自动化测试套件，而不是依赖某个人记得手动运行它。',
    p1: 'CI 服务器（GitHub Actions、GitLab CI、Jenkins 等工具都能做到这一点）会监视代码仓库中的新提交和拉取请求。每次都会检出代码、安装依赖项，并在干净的环境中从头运行测试套件，每次都以相同的方式运行——单元测试、集成测试，通常还包括本站介绍的浏览器自动化测试，全部在一次运行中完成。结果——通过或失败——会直接在拉取请求上报告，甚至在人工审阅者打开它之前。',
    p2: '这正是让自动化测试真正发挥价值的原因。只在一名开发者的笔记本电脑上运行、而且要靠他记得去运行的测试套件，捕获到的问题远少于在每一次更改时都自动运行、并在失败时阻止合并的测试套件。CI 是把“我们有测试”变成“有问题的代码无法进入主分支”的机制——通常也是团队在其浏览器自动化测试值得信赖之后添加的第一项基础设施。',
    askAiHeading: '向 AI 提问的想法',
    askAi: [
      '"CI" 到底是什么意思？用简单的话说，为什么团队要费心自动运行测试，而不是自己在推送前运行一遍？',
      '我有一个在本地可以运行的测试套件——有什么简单的方法可以让它在每个拉取请求上自动运行？',
      '我的 CI 流水线因为在每次提交时都运行完整的浏览器测试套件而变慢了——我该如何重构它，在不失去信心的前提下保持速度？'
    ],
    nextLabel: '下一步：如何开始学习自动化测试？→'
  };

  const AR: Messages = {
    title: 'ما هو اختبار التكامل المستمر؟',
    metaDescription:
      'ما هو اختبار التكامل المستمر (CI): تشغيل مجموعة اختباراتك الآلية تلقائيًا مع كل تغيير، فيُكتشف الكود المعطوب قبل دمجه لا بعده.',
    heading: 'ما هو اختبار التكامل المستمر؟',
    intro:
      'اختبار التكامل المستمر (CI) هو تشغيل مجموعة اختباراتك الآلية تلقائيًا في كل مرة يقترح فيها أحدهم تغييرًا، بدلًا من الاعتماد على شخص يتذكر تشغيلها يدويًا.',
    p1: 'يراقب خادم CI (وهذا ما تفعله GitHub Actions وGitLab CI وJenkins وأدوات مشابهة) المستودع بحثًا عن عمليات الإيداع وطلبات الدمج الجديدة. ومع كل واحدة منها يسحب الكود، ويثبّت الاعتماديات، ويشغّل مجموعة الاختبارات من الصفر في بيئة نظيفة، بالطريقة نفسها في كل مرة — اختبارات الوحدة واختبارات التكامل، وغالبًا اختبارات أتمتة المتصفح التي يدور حولها هذا الموقع، كلها في تشغيل واحد. وتُعرض النتيجة — نجاح أو فشل — مباشرةً على طلب الدمج، قبل أن يفتحه أي مراجع بشري.',
    p2: 'هذا ما يجعل الاختبارات الآلية مجدية فعلًا. فمجموعة اختبارات لا تعمل إلا على حاسوب مطوّر واحد، حين يتذكر تشغيلها، تلتقط أقل بكثير من مجموعة تعمل مع كل تغيير، تلقائيًا، وتمنع الدمج إن فشلت. التكامل المستمر هو الآلية التي تحوّل «لدينا اختبارات» إلى «لا يمكن للكود المعطوب أن يصل إلى الفرع الرئيسي» — وعادةً ما يكون أول قطعة بنية تحتية يضيفها الفريق حين تصبح اختبارات أتمتة المتصفح لديه جديرة بالثقة.',
    askAiHeading: 'أفكار لسؤال الذكاء الاصطناعي',
    askAi: [
      'ماذا تعني «CI» فعلًا بعبارات بسيطة، ولماذا يتكلف فريق عناء تشغيل الاختبارات تلقائيًا بدلًا من تشغيلها بنفسه قبل الدفع؟',
      'لديّ مجموعة اختبارات تعمل محليًا — ما أبسط طريقة لجعلها تعمل تلقائيًا مع كل طلب دمج؟',
      'أصبح خط CI لديّ بطيئًا لأنه يشغّل مجموعة اختبارات المتصفح الكاملة مع كل إيداع — كيف أعيد هيكلته ليبقى سريعًا دون فقدان الثقة؟'
    ],
    nextLabel: 'التالي: كيف تبدأ تعلم الاختبار الآلي؟ ←'
  };

  const KO: Messages = {
    title: '지속적 통합 테스트란 무엇인가?',
    metaDescription:
      '지속적 통합(CI) 테스트란 무엇인가: 변경이 있을 때마다 자동화 테스트 스위트를 자동으로 실행하여, 깨진 코드를 병합 후가 아니라 병합 전에 잡아냅니다.',
    heading: '지속적 통합 테스트란 무엇인가?',
    intro:
      '지속적 통합(CI) 테스트는 누군가 변경을 제안할 때마다 사람이 직접 실행하기를 기억하는 데 의존하지 않고, 자동화 테스트 스위트를 자동으로 실행하는 것입니다.',
    p1: 'CI 서버(GitHub Actions, GitLab CI, Jenkins 등의 도구가 모두 이 역할을 합니다)는 저장소의 새 커밋과 풀 리퀘스트를 지켜봅니다. 그 하나하나마다 코드를 체크아웃하고, 의존성을 설치하고, 깨끗한 환경에서 테스트 스위트를 처음부터, 매번 같은 방식으로 실행합니다. 단위 테스트, 통합 테스트, 그리고 이 사이트가 다루는 브라우저 자동화 테스트까지 한 번의 실행에 모두 포함됩니다. 통과 또는 실패라는 결과는 사람 리뷰어가 풀 리퀘스트를 열기도 전에 풀 리퀘스트 위에 바로 보고됩니다.',
    p2: '이것이 자동화 테스트가 실제로 효과를 내게 만드는 요소입니다. 한 개발자의 노트북에서, 그것도 그 개발자가 기억할 때만 실행되는 테스트 스위트는, 모든 변경마다 자동으로 실행되고 실패하면 병합을 막는 스위트보다 훨씬 적게 잡아냅니다. CI는 "우리에게는 테스트가 있다"를 "깨진 코드는 메인 브랜치에 도달할 수 없다"로 바꾸는 장치이며, 브라우저 자동화 테스트를 신뢰할 만한 수준이 되었을 때 팀이 가장 먼저 추가하는 인프라인 경우가 많습니다.',
    askAiHeading: 'AI에게 물어볼 아이디어',
    askAi: [
      "쉬운 말로 'CI'는 실제로 무슨 뜻이며, 팀이 푸시하기 전에 직접 테스트를 실행하는 대신 굳이 자동으로 실행하는 이유는 무엇인가요?",
      '로컬에서 잘 동작하는 테스트 스위트가 있습니다. 모든 풀 리퀘스트에서 이를 자동으로 실행하게 하는 간단한 방법은 무엇인가요?',
      '모든 커밋마다 전체 브라우저 테스트 스위트를 실행해서 CI 파이프라인이 느려졌습니다. 신뢰를 잃지 않으면서 빠르게 유지하도록 구조를 바꾸려면 어떻게 해야 할까요?'
    ],
    nextLabel: '다음: 자동화 테스트 학습은 어떻게 시작하나요? →'
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
    'ko-001': KO
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
  <p>{m.p1}</p>

  <p>{m.p2}</p>

  <h3>{m.askAiHeading}</h3>
  <ul>
    {#each m.askAi as question (question)}
      <li>{question}</li>
    {/each}
  </ul>

  <p style="margin-top: 2rem;">
    <CallToAction
      class="button button-primary"
      href={localeHref(locale, 'how-to-start-learning-automatic-testing')}
      >{m.nextLabel}</CallToAction
    >
  </p>
</section>
