<script lang="ts">
  import { CallToAction } from 'lily-design-system-svelte-headless';
  import { localeHref } from '#lib/i18n/paths.js';
  import type { Locale } from '#lib/i18n/locales.js';

  let { locale }: { locale: Locale } = $props();

  type Messages = {
    title: string;
    metaDescription: string;
    heading: string;
    introPre: string;
    introLinkText: string;
    introPost: string;
    p1: string;
    p2: string;
    askAiHeading: string;
    askAi: string[];
    nextLabel: string;
  };

  const EN_001: Messages = {
    title: 'What is browser automatic testing?',
    metaDescription:
      "What browser automatic testing is, and the trade-offs that come with it: why it's the most realistic layer of the automatic testing pyramid, and when to reach for it instead of a unit or integration test.",
    heading: 'What is browser automatic testing?',
    introPre:
      "Browser automatic testing (also called end-to-end or UI testing) drives a real browser exactly the way a real user would — opening pages, clicking buttons, filling in forms — using tools like Selenium WebDriver, WebdriverIO, and Playwright. It's the most realistic layer of ",
    introLinkText: 'the automatic testing pyramid',
    introPost: ', but that realism has a cost.',
    p1: "They are slower than unit tests, sometimes by orders of magnitude, because they involve starting a real browser, loading real pages, and waiting for real rendering and network activity. They are more brittle: a UI test can break simply because a button's label changed or an element moved on the page, even though the underlying feature still works fine. They need real browsers available to run, which adds setup and infrastructure that a unit test never requires. And when a browser test fails, it can be harder to tell exactly why — was it a real bug, a timing issue, or just a cosmetic change to the page? — compared to a unit test's precise, one-function failure.",
    p2: 'The practical answer is not to avoid browser tests, but to use them for what they are uniquely good at: verifying that real, critical user journeys — signing up, searching, checking out — actually work end to end. Push everything else down the pyramid into faster, cheaper, more precise unit and integration tests, and reserve browser automation for the handful of flows where only a real browser, doing what a real user does, will tell you the truth.',
    askAiHeading: 'Examples you can ask AI',
    askAi: [
      'Why are browser tests slower and more fragile than other kinds of automatic tests, in plain terms?',
      'My browser test suite has gotten flaky and slow — what are the first things worth checking to make it more reliable?',
      'How do I decide which user journeys genuinely deserve a browser test versus being covered lower down the pyramid instead?'
    ],
    nextLabel: 'Next: what is continuous integration automatic testing? →'
  };

  // No British/American/Oxford spelling divergence occurs in this page's
  // vocabulary, so all four English locales share one copy. See
  // spec/locales/index.md.
  const CY: Messages = {
    title: 'Beth yw profi awtomatig porwr?',
    metaDescription:
      "Beth yw profi awtomatig porwr, a'r cyfaddawdau sy'n dod gydag ef: pam mai dyma'r haen fwyaf realistig o'r pyramid profi awtomatig, a phryd i droi ato yn lle prawf uned neu integreiddio.",
    heading: 'Beth yw profi awtomatig porwr?',
    introPre:
      "Mae profi awtomatig porwr (a elwir hefyd yn brofi o'r dechrau i'r diwedd neu'n brofi UI) yn gyrru porwr go iawn yn union fel y byddai defnyddiwr go iawn — agor tudalennau, clicio botymau, llenwi ffurflenni — gan ddefnyddio offer fel Selenium WebDriver, WebdriverIO, a Playwright. Dyma'r haen fwyaf realistig o ",
    introLinkText: "y pyramid profi awtomatig",
    introPost: ", ond mae gan y realaeth honno gost.",
    p1: "Maent yn arafach na phrofion uned, weithiau o urddau maint, oherwydd eu bod yn golygu cychwyn porwr go iawn, llwytho tudalennau go iawn, ac aros am rendro a gweithgarwch rhwydwaith go iawn. Maent yn fwy bregus: gall prawf UI dorri dim ond oherwydd bod label botwm wedi newid neu elfen wedi symud ar y dudalen, hyd yn oed pan fo'r nodwedd sylfaenol yn dal i weithio'n iawn. Mae angen porwyr go iawn ar gael i redeg, sy'n ychwanegu gwaith sefydlu a seilwaith na fyddai byth eu hangen ar brawf uned. A phan fydd prawf porwr yn methu, gall fod yn anos dweud yn union pam — ai byg go iawn ydoedd, mater amseru, neu ddim ond newid cosmetig i'r dudalen? — o gymharu â methiant manwl, un ffwythiant, prawf uned.",
    p2: "Nid osgoi profion porwr yw'r ateb ymarferol, ond eu defnyddio ar gyfer yr hyn y maent yn arbennig o dda amdano: gwirio bod teithiau defnyddiwr go iawn, hanfodol — cofrestru, chwilio, talu — wir yn gweithio o'r dechrau i'r diwedd. Gwthiwch bopeth arall i lawr y pyramid i mewn i brofion uned ac integreiddio cyflymach, rhatach, mwy manwl, a chadwch awtomatiaeth porwr ar gyfer y llond dwrn o lifau lle mai dim ond porwr go iawn, yn gwneud yr hyn y mae defnyddiwr go iawn yn ei wneud, a fydd yn dweud y gwir wrthych.",
    askAiHeading: "Enghreifftiau y gallwch eu gofyn i ddeallusrwydd artiffisial",
    askAi: [
      "Pam mae profion porwr yn arafach ac yn fwy bregus na mathau eraill o brofion awtomatig, mewn termau plaen?",
      "Mae fy nghyfres profion porwr wedi mynd yn ansefydlog ac yn araf — beth yw'r pethau cyntaf sy'n werth eu gwirio i'w gwneud yn fwy dibynadwy?",
      "Sut ydw i'n penderfynu pa deithiau defnyddiwr sy'n haeddu prawf porwr go iawn yn hytrach na chael eu cwmpasu'n is i lawr y pyramid?"
    ],
    nextLabel: 'Nesaf: beth yw profi integreiddio parhaus awtomatig? →'
  };

  const ZH: Messages = {
    title: '什么是浏览器自动化测试？',
    metaDescription:
      '什么是浏览器自动化测试，以及它带来的取舍：为什么它是自动化测试金字塔中最贴近真实的一层，以及什么时候该选择它而不是单元测试或集成测试。',
    heading: '什么是浏览器自动化测试？',
    introPre:
      '浏览器自动化测试（也称为端到端测试或 UI 测试）会像真实用户一样驱动一个真实的浏览器——打开页面、点击按钮、填写表单——使用 Selenium WebDriver、WebdriverIO 和 Playwright 之类的工具。它是',
    introLinkText: '自动化测试金字塔',
    introPost: '中最贴近真实的一层，但这种真实感是有代价的。',
    p1: '它们比单元测试慢，有时慢上几个数量级，因为它们需要启动一个真实的浏览器、加载真实的页面，并等待真实的渲染和网络活动完成。它们也更脆弱：一个 UI 测试可能仅仅因为按钮的标签变了或页面上某个元素移动了位置就失败，即使底层功能其实运行良好。它们需要有真实的浏览器可供运行，这会带来单元测试从不需要的搭建和基础设施工作。而当浏览器测试失败时，往往更难判断确切原因——是真正的错误，还是时序问题，或者只是页面上的外观改动？——相比之下，单元测试的失败通常精确地指向某一个函数。',
    p2: '实际可行的做法不是回避浏览器测试，而是把它们用在其真正擅长的地方：验证真实、关键的用户旅程——注册、搜索、结账——确实能够端到端地正常工作。把其余的一切都下沉到金字塔中更快、更便宜、更精确的单元测试和集成测试里，只为那少数几个唯有真实浏览器、像真实用户那样操作才能告诉你真相的流程保留浏览器自动化。',
    askAiHeading: '可以向 AI 提问的示例',
    askAi: [
      '用简单的话说，为什么浏览器测试比其他类型的自动化测试更慢、更脆弱？',
      '我的浏览器测试套件变得不稳定又缓慢——有哪些首先值得检查的地方可以让它更可靠？',
      '我该如何判断哪些用户旅程真正值得用浏览器测试来覆盖，而不是放到金字塔更下层去覆盖？'
    ],
    nextLabel: '下一步：什么是持续集成自动化测试？→'
  };

  const AR: Messages = {
    title: 'ما هو اختبار أتمتة المتصفح؟',
    metaDescription:
      'ما هو اختبار أتمتة المتصفح، وما المقايضات المصاحبة له: لماذا هو الطبقة الأكثر واقعية في هرم الاختبار الآلي، ومتى نلجأ إليه بدلًا من اختبار الوحدة أو التكامل.',
    heading: 'ما هو اختبار أتمتة المتصفح؟',
    introPre:
      'اختبار أتمتة المتصفح (ويُسمّى أيضًا الاختبار من البداية إلى النهاية أو اختبار الواجهة) يقود متصفحًا حقيقيًا تمامًا كما يفعل المستخدم الحقيقي — يفتح الصفحات وينقر الأزرار ويملأ النماذج — باستخدام أدوات مثل Selenium WebDriver وWebdriverIO وPlaywright. وهو الطبقة الأكثر واقعية في ',
    introLinkText: 'هرم الاختبار الآلي',
    introPost: '، لكن هذه الواقعية لها ثمن.',
    p1: 'فهذه الاختبارات أبطأ من اختبارات الوحدة، وأحيانًا بأضعاف كثيرة، لأنها تتطلب تشغيل متصفح حقيقي وتحميل صفحات حقيقية وانتظار عرض فعلي ونشاط شبكة فعلي. وهي أكثر هشاشة: فقد ينكسر اختبار الواجهة لمجرد تغيّر تسمية زر أو انتقال عنصر في الصفحة، رغم أن الميزة الأساسية لا تزال تعمل جيدًا. وتحتاج إلى متصفحات حقيقية متاحة لتعمل، ما يضيف إعدادًا وبنية تحتية لا يتطلبها اختبار الوحدة أبدًا. وحين يفشل اختبار المتصفح قد يصعب معرفة السبب بالضبط — أهو خطأ حقيقي أم مشكلة توقيت أم مجرد تغيير شكلي في الصفحة؟ — مقارنةً بإخفاق اختبار الوحدة الدقيق المحصور في دالة واحدة.',
    p2: 'الجواب العملي ليس تجنّب اختبارات المتصفح، بل استخدامها فيما تتفوق فيه وحدها: التحقق من أن رحلات المستخدم الحقيقية والحرجة — التسجيل والبحث والدفع — تعمل فعلًا من البداية إلى النهاية. أما كل ما عدا ذلك فادفعه إلى أسفل الهرم نحو اختبارات وحدة وتكامل أسرع وأرخص وأدق، واحتفظ بأتمتة المتصفح لحفنة من المسارات التي لا يخبرك بالحقيقة فيها إلا متصفح حقيقي يفعل ما يفعله المستخدم الحقيقي.',
    askAiHeading: 'أمثلة يمكنك طرحها على الذكاء الاصطناعي',
    askAi: [
      'بعبارات بسيطة، لماذا تكون اختبارات المتصفح أبطأ وأكثر هشاشة من الأنواع الأخرى من الاختبارات الآلية؟',
      'أصبحت مجموعة اختبارات المتصفح لديّ غير مستقرة وبطيئة — ما أول الأشياء التي يستحق فحصها لجعلها أكثر موثوقية؟',
      'كيف أقرر أي رحلات المستخدم تستحق فعلًا اختبار متصفح، وأيها يكفي تغطيتها في مستوى أدنى من الهرم؟'
    ],
    nextLabel: 'التالي: ما هو اختبار التكامل المستمر؟ ←'
  };

  const KO: Messages = {
    title: '브라우저 자동화 테스트란 무엇인가?',
    metaDescription:
      '브라우저 자동화 테스트란 무엇이며 어떤 트레이드오프가 따르는지: 왜 자동화 테스트 피라미드에서 가장 현실적인 계층인지, 그리고 단위 테스트나 통합 테스트 대신 언제 이것을 선택해야 하는지 설명합니다.',
    heading: '브라우저 자동화 테스트란 무엇인가?',
    introPre:
      '브라우저 자동화 테스트(엔드 투 엔드 또는 UI 테스트라고도 함)는 Selenium WebDriver, WebdriverIO, Playwright 같은 도구를 사용해 실제 사용자가 하는 그대로 — 페이지를 열고, 버튼을 클릭하고, 양식을 채우며 — 실제 브라우저를 조작합니다. 이것은 ',
    introLinkText: '자동화 테스트 피라미드',
    introPost: '에서 가장 현실적인 계층이지만, 그 현실성에는 대가가 따릅니다.',
    p1: '이런 테스트는 단위 테스트보다 느리고, 때로는 몇 배나 느립니다. 실제 브라우저를 시작하고, 실제 페이지를 불러오고, 실제 렌더링과 네트워크 활동을 기다려야 하기 때문입니다. 더 깨지기 쉽기도 합니다. 핵심 기능은 여전히 잘 동작하는데도 버튼의 라벨이 바뀌거나 페이지의 요소가 이동했다는 이유만으로 UI 테스트가 깨질 수 있습니다. 실행하려면 실제 브라우저가 필요하므로, 단위 테스트에는 전혀 필요 없는 설정과 인프라가 추가됩니다. 그리고 브라우저 테스트가 실패하면, 실제 버그인지, 타이밍 문제인지, 아니면 단지 페이지의 외형 변경인지 — 정확한 이유를 알기가 더 어려울 수 있습니다. 단위 테스트의 정확한 함수 하나짜리 실패와는 대조적입니다.',
    p2: '현실적인 해법은 브라우저 테스트를 피하는 것이 아니라, 브라우저 테스트만이 잘하는 일에 사용하는 것입니다. 즉 회원 가입, 검색, 결제 같은 실제의 중요한 사용자 여정이 처음부터 끝까지 정말로 동작하는지 검증하는 것입니다. 나머지는 모두 피라미드 아래쪽의 더 빠르고, 더 저렴하고, 더 정밀한 단위 테스트와 통합 테스트로 내리고, 브라우저 자동화는 실제 사용자가 하는 일을 하는 실제 브라우저만이 진실을 알려 줄 수 있는 소수의 흐름을 위해 남겨 두십시오.',
    askAiHeading: 'AI에게 물어볼 수 있는 예시',
    askAi: [
      '쉬운 말로, 브라우저 테스트가 다른 종류의 자동화 테스트보다 느리고 깨지기 쉬운 이유는 무엇인가요?',
      '제 브라우저 테스트 스위트가 불안정하고 느려졌습니다. 더 믿을 만하게 만들려면 가장 먼저 무엇을 확인해야 할까요?',
      '어떤 사용자 여정이 정말로 브라우저 테스트를 받을 가치가 있고, 어떤 것은 피라미드 아래쪽에서 다루면 되는지 어떻게 판단하나요?'
    ],
    nextLabel: '다음: 지속적 통합 테스트란 무엇인가? →'
  };

  const FR: Messages = {
    title: "Qu'est-ce que le test automatisé de navigateur ?",
    metaDescription:
      "Ce qu'est le test automatisé de navigateur et les compromis qu'il implique : pourquoi c'est la couche la plus réaliste de la pyramide des tests automatisés, et quand l'utiliser plutôt qu'un test unitaire ou d'intégration.",
    heading: "Qu'est-ce que le test automatisé de navigateur ?",
    introPre:
      "Le test automatisé de navigateur (aussi appelé test de bout en bout ou test d'IHM) pilote un vrai navigateur exactement comme le ferait un vrai utilisateur — ouvrir des pages, cliquer sur des boutons, remplir des formulaires — avec des outils comme Selenium WebDriver, WebdriverIO et Playwright. C'est la couche la plus réaliste de ",
    introLinkText: 'la pyramide des tests automatisés',
    introPost: ', mais ce réalisme a un coût.',
    p1: "Ces tests sont plus lents que les tests unitaires, parfois de plusieurs ordres de grandeur, car ils impliquent de démarrer un vrai navigateur, de charger de vraies pages et d'attendre un vrai rendu et une vraie activité réseau. Ils sont plus fragiles : un test d'IHM peut échouer simplement parce que le libellé d'un bouton a changé ou qu'un élément a bougé dans la page, alors que la fonctionnalité sous-jacente marche très bien. Ils exigent des navigateurs réels pour s'exécuter, ce qui ajoute une mise en place et une infrastructure dont un test unitaire n'a jamais besoin. Et quand un test de navigateur échoue, il peut être plus difficile de dire exactement pourquoi — un vrai bug, un problème de timing, ou simplement un changement cosmétique de la page ? — comparé à l'échec précis, limité à une fonction, d'un test unitaire.",
    p2: "La réponse pratique n'est pas d'éviter les tests de navigateur, mais de les utiliser pour ce dans quoi ils sont uniques : vérifier que de vrais parcours utilisateur critiques — s'inscrire, rechercher, payer — fonctionnent réellement de bout en bout. Reléguez tout le reste plus bas dans la pyramide, vers des tests unitaires et d'intégration plus rapides, moins coûteux et plus précis, et réservez l'automatisation de navigateur aux quelques parcours où seul un vrai navigateur, faisant ce que fait un vrai utilisateur, vous dira la vérité.",
    askAiHeading: "Exemples à demander à l'IA",
    askAi: [
      "Pourquoi les tests de navigateur sont-ils plus lents et plus fragiles que les autres types de tests automatisés, en termes simples ?",
      "Ma suite de tests de navigateur est devenue instable et lente — quelles sont les premières choses à vérifier pour la rendre plus fiable ?",
      "Comment décider quels parcours utilisateur méritent vraiment un test de navigateur plutôt que d'être couverts plus bas dans la pyramide ?"
    ],
    nextLabel: "Suite : qu'est-ce que le test automatisé d'intégration continue ? →"
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
    {m.introPre}<a href={localeHref(locale, 'what-is-the-testing-pyramid')}
      >{m.introLinkText}</a
    >{m.introPost}
  </p>
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
      href={localeHref(locale, 'what-is-continuous-integration-testing')}
      >{m.nextLabel}</CallToAction
    >
  </p>
</section>
