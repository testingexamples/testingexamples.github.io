<script lang="ts">
  import { CallToAction } from 'lily-design-system-svelte-headless';
  import { localeHref } from '#lib/i18n/paths.js';
  import type { Locale } from '#lib/i18n/locales.js';

  let { locale }: { locale: Locale } = $props();

  type Messages = {
    title: string;
    metaDescription: string;
    heading: string;
    intro: string;
    li1Label: string;
    li1P: string;
    li2Label: string;
    li2P: string;
    li3Label: string;
    li3P: string;
    li4Label: string;
    li4P: string;
    li5Label: string;
    li5P: string;
    askAiHeading: string;
    askAi: string[];
    ctaNext: string;
  };

  const EN_001: Messages = {
    title: 'What is the purpose of automatic testing?',
    metaDescription:
      "Why automatic testing exists: catching regressions early, running the same checks tirelessly, enabling frequent releases, cutting the cost of bugs, and freeing people for the testing machines can't do.",
    heading: 'What is the purpose of automatic testing?',
    intro:
      "Writing automatic tests takes real effort up front. Here's what a team actually gets back for that effort.",
    li1Label: 'Catching regressions before release.',
    li1P:
      ' A regression is something that used to work and quietly stopped working, usually because of an unrelated change elsewhere in the code. Automatic tests run on every change and catch these before they reach real users, instead of after.',
    li2Label: 'Running the same check thousands of times, without fatigue.',
    li2P:
      ' A person checking the same login form for the thousandth time in a row will eventually miss something. A script checks it exactly the same way every time, at any hour, as many times as needed.',
    li3Label: 'Confident, frequent releases.',
    li3P:
      ' A team with a trustworthy automatic test suite can ship changes daily, or many times a day, because the suite tells them quickly whether something broke. This is what makes continuous integration and continuous delivery (CI/CD) practical: every change is automatically built, tested, and — if the tests pass — deployed.',
    li4Label: "Bugs are cheaper the earlier they're found.",
    li4P:
      ' A bug caught while a developer is still writing the code costs a few minutes to fix. The same bug caught in code review costs more. Caught by manual testing before release, more still. Caught by a customer in production, it can cost hours of investigation, an emergency fix, reputational damage, and sometimes real money. Automatic tests push the moment of discovery as early as possible, where fixing is cheapest.',
    li5Label: "Freeing humans for the testing machines can't do.",
    li5P:
      " Every hour a person doesn't spend manually re-checking the same known-good paths is an hour they can spend on exploratory testing, usability judgement, and the creative, adversarial thinking that finds the bugs no one wrote a script for.",
    askAiHeading: 'Ask AI ideas',
    askAi: [
      "In plain terms, what's a 'regression', and why do automatic tests catch it better than a person checking by hand?",
      'My team ships several times a week but still finds bugs in production — what\'s the actual connection between automatic testing and safer, more frequent releases?',
      'How do I make the business case, with real numbers, for investing more engineering time in automatic tests versus manual QA?'
    ],
    ctaNext: 'Next: what is the automatic testing pyramid? →'
  };

  // No British/American/Oxford spelling divergence occurs in this page's
  // vocabulary, so all four English locales share one copy. See
  // spec/locales/index.md.
  const CY: Messages = {
    title: 'Beth yw diben profi awtomatig?',
    metaDescription:
      "Pam mae profi awtomatig yn bodoli: dal atchweliadau'n gynnar, rhedeg yr un gwiriadau'n ddiflino, galluogi rhyddhau'n aml, lleihau cost bygiau, a rhyddhau pobl i wneud y profi na all peiriannau ei wneud.",
    heading: 'Beth yw diben profi awtomatig?',
    intro:
      "Mae ysgrifennu profion awtomatig yn cymryd ymdrech go iawn ymlaen llaw. Dyma beth mae tîm yn ei gael yn ôl mewn gwirionedd am yr ymdrech honno.",
    li1Label: 'Dal atchweliadau cyn rhyddhau.',
    li1P:
      " Mae atchweliad yn rhywbeth a arferai weithio ac a stopiodd weithio'n dawel, fel arfer oherwydd newid digyswllt mewn man arall yn y cod. Mae profion awtomatig yn rhedeg ar bob newid ac yn dal y rhain cyn iddynt gyrraedd defnyddwyr go iawn, yn hytrach nag wedyn.",
    li2Label: 'Rhedeg yr un gwiriad filoedd o weithiau, heb flino.',
    li2P:
      " Bydd person sy'n gwirio'r un ffurflen mewngofnodi am y filfed tro yn olynol yn colli rhywbeth yn y pen draw. Mae sgript yn ei wirio yn union yr un ffordd bob tro, ar unrhyw awr, cynifer o weithiau ag sydd angen.",
    li3Label: 'Rhyddhau hyderus, aml.',
    li3P:
      " Gall tîm gyda set brofion awtomatig ddibynadwy rhyddhau newidiadau'n ddyddiol, neu sawl gwaith y dydd, oherwydd mae'r set yn dweud wrthynt yn gyflym a yw rhywbeth wedi torri. Dyma sy'n gwneud integreiddio parhaus a chyflenwi parhaus (CI/CD) yn ymarferol: mae pob newid yn cael ei adeiladu, ei brofi, ac — os yw'r profion yn pasio — ei ddefnyddio'n awtomatig.",
    li4Label: "Mae bygiau'n rhatach po gynharaf y cânt eu darganfod.",
    li4P:
      " Mae byg a ddelir tra bo datblygwr yn dal i ysgrifennu'r cod yn costio ychydig funudau i'w drwsio. Mae'r un byg wedi'i ddal mewn adolygiad cod yn costio mwy. Wedi'i ddal gan brofi â llaw cyn rhyddhau, mwy fyth. Wedi'i ddal gan gwsmer mewn cynhyrchu, gall gostio oriau o ymchwilio, trwsiad brys, niwed i enw da, ac weithiau arian go iawn. Mae profion awtomatig yn symud eiliad y darganfod mor gynnar â phosibl, lle mae trwsio'r rhataf.",
    li5Label: "Rhyddhau pobl i wneud y profi na all peiriannau ei wneud.",
    li5P:
      " Mae pob awr nad yw person yn ei threulio'n ail-wirio â llaw'r un llwybrau y gwyddys eu bod yn gweithio yn awr y gallant ei threulio ar brofi archwiliadol, barn ynghylch defnyddioldeb, a'r meddwl creadigol, gwrthwynebol sy'n dod o hyd i'r bygiau na ysgrifennodd neb sgript ar eu cyfer.",
    askAiHeading: "Syniadau i'w gofyn i ddeallusrwydd artiffisial",
    askAi: [
      "Mewn termau plaen, beth yw 'atchweliad', a pham mae profion awtomatig yn ei ddal yn well na pherson yn gwirio â llaw?",
      "Mae fy nhîm yn rhyddhau sawl gwaith yr wythnos ond yn dal i ddod o hyd i fygiau mewn cynhyrchu — beth yw'r cysylltiad gwirioneddol rhwng profi awtomatig a rhyddhau'n fwy diogel, yn amlach?",
      "Sut ydw i'n gwneud yr achos busnes, gyda ffigurau go iawn, dros fuddsoddi mwy o amser peirianneg mewn profion awtomatig yn hytrach na QA â llaw?"
    ],
    ctaNext: 'Nesaf: beth yw pyramid profi awtomatig? →'
  };

  const ZH: Messages = {
    title: '自动化测试的目的是什么？',
    metaDescription:
      '为什么会有自动化测试：尽早发现回归问题、不知疲倦地重复相同的检查、支持频繁发布、降低缺陷成本，并把人从测试机器无法完成的工作中解放出来。',
    heading: '自动化测试的目的是什么？',
    intro: '编写自动化测试在前期需要投入真实的努力。以下是团队为这份努力实际能换来的回报。',
    li1Label: '在发布前发现回归问题。',
    li1P:
      ' 回归问题指的是原本能正常工作、却因为代码其他地方一次不相关的改动而悄悄失效的东西。自动化测试会在每次改动时运行，在问题到达真实用户之前而不是之后就把它们捕捉出来。',
    li2Label: '不知疲倦地把同一项检查重复上千次。',
    li2P:
      ' 一个人连续第一千次检查同一个登录表单时，迟早会漏掉一些东西。脚本每次都以完全相同的方式检查，不论什么时候，需要运行多少次都可以。',
    li3Label: '让频繁发布变得有信心。',
    li3P:
      ' 拥有一套值得信赖的自动化测试的团队可以每天、甚至一天多次发布改动，因为这套测试能很快告诉他们是否有东西坏了。这正是让持续集成和持续交付（CI/CD）变得可行的原因：每一次改动都会被自动构建、测试，并且——如果测试通过——自动部署。',
    li4Label: '缺陷发现得越早，修复成本就越低。',
    li4P:
      ' 一个在开发者还在编写代码时就被发现的缺陷，只需要几分钟就能修复。同一个缺陷如果在代码评审时才被发现，成本会更高。如果是在发布前的人工测试中才被发现，成本还会更高。而如果是被客户在生产环境中发现，可能需要数小时的排查、紧急修复、声誉损失，有时还会造成实际的经济损失。自动化测试把发现问题的时刻尽可能提前到修复成本最低的阶段。',
    li5Label: '把人解放出来，去做测试机器做不到的事。',
    li5P:
      ' 一个人每少花一个小时手动重新检查那些已知没问题的路径，就多出一个小时可以用来做探索性测试、可用性判断，以及那种能发现没人为之写过脚本的缺陷的、富有创造性和对抗性的思考。',
    askAiHeading: '向 AI 提问的想法',
    askAi: [
      '用简单的话说，什么是“回归问题”，为什么自动化测试比人工检查更能捕捉到它？',
      '我的团队每周发布好几次，但仍然会在生产环境中发现缺陷——自动化测试和更安全、更频繁的发布之间到底有什么实际联系？',
      '我该如何用真实的数据，为投入更多工程时间到自动化测试而不是人工 QA 上，提出有说服力的商业理由？'
    ],
    ctaNext: '下一步：什么是自动化测试金字塔？→'
  };

  const AR: Messages = {
    title: 'ما الغرض من الاختبار الآلي؟',
    metaDescription:
      'لماذا يوجد الاختبار الآلي: اكتشاف التراجعات مبكرًا، وتشغيل الفحوصات نفسها دون كلل، وإتاحة الإصدارات المتكررة، وخفض تكلفة الأخطاء، وتفريغ الناس لما لا تستطيع الآلات اختباره.',
    heading: 'ما الغرض من الاختبار الآلي؟',
    intro:
      'تتطلب كتابة الاختبارات الآلية جهدًا حقيقيًا في البداية. وهذا ما يجنيه الفريق فعلًا مقابل ذلك الجهد.',
    li1Label: 'اكتشاف التراجعات قبل الإصدار.',
    li1P:
      ' التراجع هو شيء كان يعمل ثم توقف عن العمل بصمت، وعادةً بسبب تغيير غير ذي صلة في مكان آخر من الكود. تعمل الاختبارات الآلية مع كل تغيير وتلتقط هذه المشكلات قبل أن تصل إلى المستخدمين الحقيقيين لا بعد ذلك.',
    li2Label: 'تشغيل الفحص نفسه آلاف المرات دون إرهاق.',
    li2P:
      ' الشخص الذي يفحص نموذج تسجيل الدخول نفسه للمرة الألف على التوالي سيفوته شيء في النهاية. أما السكربت فيفحصه بالطريقة نفسها تمامًا في كل مرة، وفي أي ساعة، وبقدر ما يلزم من المرات.',
    li3Label: 'إصدارات متكررة وواثقة.',
    li3P:
      ' يستطيع الفريق الذي يملك مجموعة اختبارات آلية موثوقة أن ينشر التغييرات يوميًا، أو مرات عديدة في اليوم، لأن المجموعة تخبره سريعًا إن انكسر شيء. وهذا ما يجعل التكامل المستمر والتسليم المستمر (CI/CD) عمليين: كل تغيير يُبنى ويُختبر تلقائيًا، ثم يُنشر إن نجحت الاختبارات.',
    li4Label: 'كلما اكتُشف الخطأ مبكرًا قلّت تكلفته.',
    li4P:
      ' الخطأ الذي يُلتقط بينما المطوّر لا يزال يكتب الكود يكلّف دقائق قليلة لإصلاحه. ونفس الخطأ إذا التُقط في مراجعة الكود كلّف أكثر. وإذا التقطه الاختبار اليدوي قبل الإصدار كلّف أكثر. وإذا التقطه عميل في بيئة الإنتاج فقد يكلّف ساعات من التحقيق وإصلاحًا طارئًا وضررًا بالسمعة، وأحيانًا مالًا حقيقيًا. تدفع الاختبارات الآلية لحظة الاكتشاف إلى أبكر وقت ممكن، حيث يكون الإصلاح أرخص ما يكون.',
    li5Label: 'تفريغ البشر لما لا تستطيع الآلات اختباره.',
    li5P:
      ' كل ساعة لا يقضيها الشخص في إعادة فحص المسارات السليمة المعروفة يدويًا هي ساعة يستطيع قضاءها في الاختبار الاستكشافي، وتقدير سهولة الاستخدام، والتفكير الإبداعي المعاكس الذي يكتشف الأخطاء التي لم يكتب لها أحد سكربتًا.',
    askAiHeading: 'أفكار لسؤال الذكاء الاصطناعي',
    askAi: [
      'بعبارات بسيطة، ما هو «التراجع»، ولماذا تلتقطه الاختبارات الآلية أفضل من شخص يفحص يدويًا؟',
      'ينشر فريقي عدة مرات في الأسبوع لكنه لا يزال يجد أخطاء في الإنتاج — ما الصلة الفعلية بين الاختبار الآلي وإصدارات أكثر أمانًا وتكرارًا؟',
      'كيف أبني الحجة التجارية، بأرقام حقيقية، للاستثمار بوقت هندسي أكبر في الاختبارات الآلية مقابل ضمان الجودة اليدوي؟'
    ],
    ctaNext: 'التالي: ما هو هرم الاختبار الآلي؟ ←'
  };

  const KO: Messages = {
    title: '자동화 테스트의 목적은 무엇인가?',
    metaDescription:
      '자동화 테스트가 존재하는 이유: 회귀를 일찍 잡아내고, 같은 확인을 지치지 않고 실행하고, 잦은 릴리스를 가능하게 하고, 버그의 비용을 줄이고, 기계가 할 수 없는 테스트를 위해 사람의 시간을 확보합니다.',
    heading: '자동화 테스트의 목적은 무엇인가?',
    intro:
      '자동화 테스트를 작성하려면 처음에 상당한 노력이 듭니다. 그 노력의 대가로 팀이 실제로 무엇을 얻는지 살펴봅니다.',
    li1Label: '릴리스 전에 회귀를 잡아냅니다.',
    li1P:
      ' 회귀란 예전에는 잘 동작하던 것이 코드의 다른 곳에서 일어난 무관한 변경 때문에 조용히 동작하지 않게 된 것을 말합니다. 자동화 테스트는 모든 변경마다 실행되어, 이런 문제가 실제 사용자에게 닿기 전에 — 닿은 뒤가 아니라 — 잡아냅니다.',
    li2Label: '같은 확인을 수천 번, 피로 없이 실행합니다.',
    li2P:
      ' 같은 로그인 양식을 천 번째 연속으로 확인하는 사람은 결국 무언가를 놓치게 됩니다. 스크립트는 언제든, 필요한 만큼 몇 번이든, 매번 똑같은 방식으로 확인합니다.',
    li3Label: '자신 있고 잦은 릴리스.',
    li3P:
      ' 신뢰할 수 있는 자동화 테스트 스위트를 가진 팀은 변경 사항을 매일, 혹은 하루에 여러 번 배포할 수 있습니다. 스위트가 무언가 깨졌는지 빠르게 알려 주기 때문입니다. 이것이 지속적 통합과 지속적 배포(CI/CD)를 실용적으로 만드는 요소입니다. 모든 변경이 자동으로 빌드되고, 테스트되고, 테스트를 통과하면 배포됩니다.',
    li4Label: '버그는 일찍 발견할수록 비용이 적게 듭니다.',
    li4P:
      ' 개발자가 아직 코드를 작성하는 동안 잡은 버그는 고치는 데 몇 분이면 됩니다. 같은 버그를 코드 리뷰에서 잡으면 비용이 더 듭니다. 릴리스 전에 수동 테스트로 잡으면 더 듭니다. 프로덕션에서 고객이 발견하면 몇 시간의 조사, 긴급 수정, 평판 손상, 때로는 실제 금전적 손실이 발생할 수 있습니다. 자동화 테스트는 발견 시점을 가능한 한 앞당겨, 수정 비용이 가장 적게 드는 때로 옮깁니다.',
    li5Label: '기계가 할 수 없는 테스트를 위해 사람을 자유롭게 합니다.',
    li5P:
      ' 사람이 이미 검증된 정상 경로를 수동으로 다시 확인하는 데 쓰지 않는 한 시간은, 탐색적 테스트, 사용성 판단, 그리고 아무도 스크립트를 작성하지 않은 버그를 찾아내는 창의적이고 적대적인 사고에 쓸 수 있는 한 시간입니다.',
    askAiHeading: 'AI에게 물어볼 아이디어',
    askAi: [
      '쉬운 말로 \'회귀\'란 무엇이며, 자동화 테스트가 사람이 직접 확인하는 것보다 이를 더 잘 잡아내는 이유는 무엇인가요?',
      '우리 팀은 일주일에 여러 번 배포하는데도 프로덕션에서 버그를 발견합니다. 자동화 테스트와 더 안전하고 잦은 릴리스 사이의 실제 연관성은 무엇인가요?',
      '수동 QA 대신 자동화 테스트에 엔지니어링 시간을 더 투자해야 한다는 비즈니스 논거를 실제 수치와 함께 어떻게 만들 수 있을까요?'
    ],
    ctaNext: '다음: 자동화 테스트 피라미드란 무엇인가? →'
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
  <ul>
    <li><strong>{m.li1Label}</strong>{m.li1P}</li>
    <li><strong>{m.li2Label}</strong>{m.li2P}</li>
    <li><strong>{m.li3Label}</strong>{m.li3P}</li>
    <li><strong>{m.li4Label}</strong>{m.li4P}</li>
    <li><strong>{m.li5Label}</strong>{m.li5P}</li>
  </ul>

  <h3>{m.askAiHeading}</h3>
  <ul>
    {#each m.askAi as question (question)}
      <li>{question}</li>
    {/each}
  </ul>

  <p style="margin-top: 2rem;">
    <CallToAction class="button button-primary" href={localeHref(locale, 'what-is-the-testing-pyramid')}
      >{m.ctaNext}</CallToAction
    >
  </p>
</section>
