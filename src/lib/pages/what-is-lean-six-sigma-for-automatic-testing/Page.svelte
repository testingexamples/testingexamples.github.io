<script lang="ts">
  import { CallToAction } from 'lily-design-system-svelte-headless';
  import { localeHref } from '#lib/i18n/paths.js';
  import type { Locale } from '#lib/i18n/locales.js';

  let { locale }: { locale: Locale } = $props();

  // "Six Sigma" (the page's own wording for Lean Six Sigma) is a
  // methodology/proper-noun-style name — kept exactly as "Six Sigma" in
  // every locale, including inside Welsh prose, the same treatment as
  // "DevOps"/"Given-When-Then" elsewhere on this site.
  type Messages = {
    title: string;
    metaDescription: string;
    heading: string;
    introP: string;
    belongsP: string;
    relocateP: string;
    learnMorePre: string;
    learnMoreLinkText: string;
    learnMorePost: string;
    askAiHeading: string;
    askAi: string[];
    nextLabel: string;
  };

  const EN_001: Messages = {
    title: 'Lean Six Sigma for automatic testing',
    metaDescription:
      "What Six Sigma is, and why manual testing is itself the variation problem it targets — a person doesn't reliably produce the same result twice, which is exactly what automating a check eliminates.",
    heading: 'Lean Six Sigma for automatic testing',
    introP:
      "is a discipline for reducing defects by reducing variation: the same input should reliably produce the same output, and where it doesn't, that variation gets measured and root-caused rather than shrugged off. It started in manufacturing and now gets applied to any repeatable process — software delivery included.",
    belongsP:
      "Here's why that belongs on a testing page: manual testing is itself the variation problem Six Sigma targets. A person running the same check by hand doesn't reliably produce the same result every time — attention lapses, a step gets skipped, a borderline case gets judged differently on a Friday afternoon than a Monday morning. Turning that check into an automatic test is a direct application of the Six Sigma mindset: the same input now reliably produces the same output, every time, because a script doesn't have an off day.",
    relocateP:
      "That doesn't make automatic tests immune to variation — it relocates it. A flaky automatic test, one that passes and fails on the same code with nothing changed, is exactly the kind of variation Six Sigma treats as a defect worth root-causing, not a nuisance to re-run until it goes green.",
    learnMorePre: "Learn more at iSixSigma's ",
    learnMoreLinkText: 'getting-started guide',
    learnMorePost: '.',
    askAiHeading: 'Examples you can ask AI',
    askAi: [
      "What does 'Six Sigma' actually mean, in plain terms, and why would reducing 'variation' matter for software testing specifically?",
      'How is manual testing itself a source of variation, in the Six Sigma sense, compared to an automatic test that runs the same way every time?',
      "How would I apply Six Sigma's idea of 'root-causing variation' to one specific flaky automatic test, instead of just re-running it until it passes?"
    ],
    nextLabel: 'Next: continuous integration for automatic testing →'
  };

  // No British/American/Oxford spelling divergence occurs in this page's
  // vocabulary, so all four English locales share one copy. See
  // spec/locales/index.md.
  const CY: Messages = {
    title: 'Sut mae Six Sigma yn arwain profi â llaw at brofi awtomatig?',
    metaDescription:
      "Beth yw Six Sigma, a pham mae profi â llaw ei hun yn broblem amrywiad y mae'n ei thargedu — nid yw person yn cynhyrchu'r un canlyniad yn ddibynadwy ddwywaith, sef yn union yr hyn y mae awtomeiddio gwiriad yn ei ddileu.",
    heading: 'Sut mae Six Sigma yn arwain profi â llaw at brofi awtomatig?',
    introP:
      "yw disgyblaeth ar gyfer lleihau diffygion drwy leihau amrywiad: dylai'r un mewnbwn gynhyrchu'r un allbwn yn ddibynadwy, a lle nad yw'n gwneud hynny, mae'r amrywiad hwnnw'n cael ei fesur a'i ddadansoddi i ganfod ei wraidd-achos yn hytrach na'i anwybyddu. Dechreuodd mewn gweithgynhyrchu ac erbyn hyn caiff ei gymhwyso i unrhyw broses ailadroddadwy — cyflenwi meddalwedd gan gynnwys.",
    belongsP:
      "Dyma pam mae hynny'n perthyn i dudalen am brofi: mae profi â llaw ei hun yn broblem amrywiad y mae Six Sigma yn ei thargedu. Nid yw person yn rhedeg yr un gwiriad â llaw yn cynhyrchu'r un canlyniad yn ddibynadwy bob tro — mae sylw'n llithro, mae cam yn cael ei hepgor, mae achos ymylol yn cael ei farnu'n wahanol brynhawn dydd Gwener na bore dydd Llun. Mae troi'r gwiriad hwnnw'n brawf awtomatig yn gymhwysiad uniongyrchol o feddylfryd Six Sigma: mae'r un mewnbwn bellach yn cynhyrchu'r un allbwn yn ddibynadwy, bob tro, oherwydd nid oes gan sgript ddiwrnod gwael.",
    relocateP:
      "Nid yw hynny'n gwneud profion awtomatig yn ddiogel rhag amrywiad — mae'n ei adleoli. Mae prawf awtomatig ansefydlog, un sy'n pasio ac yn methu ar yr un cod heb ddim wedi newid, yn union y math o amrywiad y mae Six Sigma yn ei drin fel diffyg sy'n werth canfod ei wraidd-achos, nid yn niwsans i'w ailredeg nes iddo droi'n wyrdd.",
    learnMorePre: 'Dysgwch fwy yn ',
    learnMoreLinkText: 'canllaw dechrau arni iSixSigma',
    learnMorePost: '.',
    askAiHeading: "Enghreifftiau y gallwch eu gofyn i ddeallusrwydd artiffisial",
    askAi: [
      "Beth mae 'Six Sigma' yn ei olygu mewn gwirionedd, mewn termau plaen, a pham fyddai lleihau 'amrywiad' o bwys i brofi meddalwedd yn benodol?",
      "Sut mae profi â llaw ei hun yn ffynhonnell amrywiad, yn ystyr Six Sigma, o'i gymharu â phrawf awtomatig sy'n rhedeg yr un ffordd bob tro?",
      "Sut fyddwn i'n cymhwyso syniad Six Sigma o 'ganfod gwraidd-achos amrywiad' ar gyfer un prawf awtomatig ansefydlog penodol, yn lle ei ailredeg nes iddo basio?"
    ],
    nextLabel: 'Nesaf: beth yw profi integreiddio parhaus awtomatig? →'
  };

  const ZH: Messages = {
    title: '六西格玛如何引导人工测试进入自动化测试？',
    metaDescription:
      '什么是六西格玛，以及为什么人工测试本身正是它所针对的“变异”问题——一个人不会可靠地两次做出同样的结果，而这恰恰是把某项检查自动化之后能消除的东西。',
    heading: '六西格玛如何引导人工测试进入自动化测试？',
    introP:
      '是一门通过减少变异来减少缺陷的学科：相同的输入应该可靠地产生相同的输出，而当情况不是这样时，这种变异会被度量并追溯到根本原因，而不是被耸耸肩带过。它起源于制造业，如今被应用到任何可重复的流程中——软件交付也不例外。',
    belongsP:
      '这就是为什么它出现在一个测试相关的页面上：人工测试本身正是六西格玛所针对的变异问题。一个人手动运行同一项检查，并不会每次都可靠地产生相同的结果——注意力会松懈，某个步骤会被漏掉，一个边缘情况在周五下午和周一早上可能会被判断得不一样。把这项检查变成一个自动化测试，正是六西格玛思维方式的直接应用：现在相同的输入会每次都可靠地产生相同的输出，因为脚本不会有状态不好的一天。',
    relocateP:
      '这并不意味着自动化测试就不会有变异——它只是把变异转移了位置。一个不稳定的自动化测试，在代码没有任何改动的情况下时通过时失败，正是六西格玛会当作值得追溯根本原因的缺陷来对待的那种变异，而不是重新运行到变绿为止的麻烦事。',
    learnMorePre: '可以进一步阅读 iSixSigma 的',
    learnMoreLinkText: '入门指南',
    learnMorePost: '。',
    askAiHeading: '可以向 AI 提问的示例',
    askAi: [
      '用简单的话说，“六西格玛”到底是什么意思，为什么减少“变异”对软件测试尤其重要？',
      '从六西格玛的角度看，相比每次都以同样方式运行的自动化测试，人工测试本身是如何成为变异来源的？',
      '我该如何把六西格玛“追溯变异根本原因”的理念，应用到某一个具体的不稳定自动化测试上，而不是反复重跑直到它通过？'
    ],
    nextLabel: '下一步：什么是持续集成自动化测试？→'
  };

  const AR: Messages = {
    title: 'كيف يقود Six Sigma الاختبار اليدوي إلى الاختبار الآلي؟',
    metaDescription:
      'ما هو Six Sigma، ولماذا يُعدّ الاختبار اليدوي نفسه مشكلة التباين التي يستهدفها — فالشخص لا ينتج النتيجة نفسها مرتين على نحو موثوق، وهذا بالضبط ما تزيله أتمتة الفحص.',
    heading: 'كيف يقود Six Sigma الاختبار اليدوي إلى الاختبار الآلي؟',
    introP:
      'هو منهج لتقليل العيوب عن طريق تقليل التباين: ينبغي أن يُنتج المدخل نفسه المخرج نفسه على نحو موثوق، وحيث لا يحدث ذلك يُقاس هذا التباين ويُبحث عن جذر سببه بدلًا من التغاضي عنه. نشأ في التصنيع، ويُطبَّق الآن على أي عملية قابلة للتكرار — بما فيها تسليم البرمجيات.',
    belongsP:
      'وإليك لماذا ينتمي هذا إلى صفحة عن الاختبار: الاختبار اليدوي نفسه هو مشكلة التباين التي يستهدفها Six Sigma. فالشخص الذي يجري الفحص نفسه يدويًا لا ينتج النتيجة نفسها على نحو موثوق في كل مرة — يتشتت الانتباه، وتُتخطى خطوة، وتُقيَّم حالة حدّية بشكل مختلف عصر يوم الجمعة عنها صباح يوم الاثنين. وتحويل ذلك الفحص إلى اختبار آلي تطبيق مباشر لعقلية Six Sigma: المدخل نفسه ينتج الآن المخرج نفسه على نحو موثوق في كل مرة، لأن السكربت لا تمرّ به أيام سيئة.',
    relocateP:
      'وهذا لا يجعل الاختبارات الآلية محصّنة ضد التباين — بل ينقله إلى مكان آخر. فالاختبار الآلي غير المستقر، الذي ينجح ويفشل على الكود نفسه دون أي تغيير، هو بالضبط نوع التباين الذي يعدّه Six Sigma عيبًا يستحق البحث عن جذره، لا إزعاجًا يُعاد تشغيله حتى يصبح أخضر.',
    learnMorePre: 'اعرف المزيد في ',
    learnMoreLinkText: 'دليل البدء من iSixSigma',
    learnMorePost: '.',
    askAiHeading: 'أمثلة يمكنك طرحها على الذكاء الاصطناعي',
    askAi: [
      'ماذا يعني «Six Sigma» فعلًا بعبارات بسيطة، ولماذا يهم تقليل «التباين» في اختبار البرمجيات تحديدًا؟',
      'كيف يكون الاختبار اليدوي نفسه مصدرًا للتباين بمفهوم Six Sigma، مقارنةً باختبار آلي يعمل بالطريقة نفسها في كل مرة؟',
      'كيف أطبّق فكرة Six Sigma عن «البحث عن جذر التباين» على اختبار آلي واحد غير مستقر، بدلًا من إعادة تشغيله حتى ينجح؟'
    ],
    nextLabel: 'التالي: ما هو اختبار التكامل المستمر؟ ←'
  };

  const KO: Messages = {
    title: 'Six Sigma는 수동 테스트를 어떻게 자동화 테스트로 이끄는가?',
    metaDescription:
      'Six Sigma란 무엇이며, 수동 테스트 자체가 왜 그것이 겨냥하는 변동 문제인가 — 사람은 같은 결과를 두 번 안정적으로 만들어 내지 못하며, 이것이 바로 확인을 자동화하면 사라지는 것입니다.',
    heading: 'Six Sigma는 수동 테스트를 어떻게 자동화 테스트로 이끄는가?',
    introP:
      '는 변동을 줄여 결함을 줄이는 방법론입니다. 같은 입력은 안정적으로 같은 출력을 내야 하고, 그렇지 않은 곳에서는 그 변동을 대충 넘기지 않고 측정하여 근본 원인을 찾습니다. 제조업에서 시작되었으며, 지금은 소프트웨어 전달을 포함해 반복 가능한 모든 프로세스에 적용됩니다.',
    belongsP:
      '이것이 테스트 페이지에 속하는 이유는 다음과 같습니다. 수동 테스트 자체가 Six Sigma가 겨냥하는 변동 문제입니다. 같은 확인을 손으로 수행하는 사람은 매번 같은 결과를 안정적으로 만들어 내지 못합니다. 집중력이 흐려지고, 단계 하나를 건너뛰고, 경계선상의 사례를 금요일 오후와 월요일 아침에 다르게 판단합니다. 그 확인을 자동화 테스트로 바꾸는 것은 Six Sigma 사고방식의 직접적인 적용입니다. 스크립트에는 컨디션이 안 좋은 날이 없으므로, 같은 입력이 이제 매번 안정적으로 같은 출력을 냅니다.',
    relocateP:
      '그렇다고 자동화 테스트가 변동에서 자유로워지는 것은 아니며, 변동이 옮겨 갈 뿐입니다. 아무것도 바뀌지 않았는데 같은 코드에서 통과했다 실패했다 하는 불안정한 자동화 테스트는, Six Sigma가 초록색이 될 때까지 다시 실행하면 되는 성가신 일이 아니라 근본 원인을 찾을 가치가 있는 결함으로 취급하는 바로 그런 종류의 변동입니다.',
    learnMorePre: '더 알아보려면 iSixSigma의 ',
    learnMoreLinkText: '시작 가이드',
    learnMorePost: '를 보세요.',
    askAiHeading: 'AI에게 물어볼 수 있는 예시',
    askAi: [
      "쉬운 말로 'Six Sigma'는 실제로 무슨 뜻이며, 소프트웨어 테스트에서 '변동'을 줄이는 것이 왜 중요한가요?",
      '매번 같은 방식으로 실행되는 자동화 테스트와 비교할 때, 수동 테스트 자체는 Six Sigma의 의미에서 어떻게 변동의 원천이 되나요?',
      "불안정한 자동화 테스트 하나에 대해, 통과할 때까지 다시 실행하는 대신 Six Sigma의 '변동의 근본 원인 찾기'를 어떻게 적용할 수 있을까요?"
    ],
    nextLabel: '다음: 지속적 통합 테스트란 무엇인가? →'
  };

  const FR: Messages = {
    title: 'Comment Six Sigma mène-t-il des tests manuels aux tests automatisés ?',
    metaDescription:
      "Ce qu'est Six Sigma, et pourquoi le test manuel est lui-même le problème de variation qu'il cible — une personne ne produit pas de façon fiable deux fois le même résultat, ce qu'élimine précisément l'automatisation d'une vérification.",
    heading: 'Comment Six Sigma mène-t-il des tests manuels aux tests automatisés ?',
    introP:
      "est une discipline visant à réduire les défauts en réduisant la variation : une même entrée doit produire de façon fiable la même sortie, et là où ce n'est pas le cas, cette variation est mesurée et analysée jusqu'à sa cause racine plutôt qu'écartée d'un haussement d'épaules. Née dans l'industrie manufacturière, elle s'applique aujourd'hui à tout processus répétable — y compris la livraison de logiciels.",
    belongsP:
      "Voici pourquoi cela a sa place sur une page consacrée aux tests : le test manuel est lui-même le problème de variation que cible Six Sigma. Une personne qui exécute la même vérification à la main ne produit pas de façon fiable le même résultat à chaque fois — l'attention faiblit, une étape est sautée, un cas limite est jugé différemment un vendredi après-midi et un lundi matin. Transformer cette vérification en test automatisé est une application directe de l'état d'esprit Six Sigma : la même entrée produit désormais de façon fiable la même sortie, à chaque fois, parce qu'un script n'a pas de jour sans.",
    relocateP:
      "Cela ne rend pas les tests automatisés immunisés contre la variation — cela la déplace. Un test automatisé instable, qui réussit et échoue sur le même code sans que rien n'ait changé, est exactement le genre de variation que Six Sigma considère comme un défaut dont il faut chercher la cause racine, et non comme une nuisance à relancer jusqu'à ce qu'elle passe au vert.",
    learnMorePre: "Pour en savoir plus, consultez le ",
    learnMoreLinkText: "guide de démarrage d'iSixSigma",
    learnMorePost: '.',
    askAiHeading: "Exemples à demander à l'IA",
    askAi: [
      "Que signifie réellement « Six Sigma », en termes simples, et pourquoi réduire la « variation » compterait-il pour le test logiciel en particulier ?",
      "En quoi le test manuel est-il lui-même une source de variation, au sens de Six Sigma, comparé à un test automatisé qui s'exécute de la même façon à chaque fois ?",
      "Comment appliquer l'idée de Six Sigma consistant à « chercher la cause racine de la variation » à un test automatisé instable précis, au lieu de simplement le relancer jusqu'à ce qu'il passe ?"
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
    <strong>Six Sigma</strong>
    {m.introP}
  </p>
</div>

<section class="section prose">
  <p>{m.belongsP}</p>

  <p>{m.relocateP}</p>

  <p>
    {m.learnMorePre}<a href="https://www.isixsigma.com/new-to-six-sigma/getting-started/"
      >{m.learnMoreLinkText}</a
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
      href={localeHref(locale, 'what-is-continuous-integration-testing')}
      >{m.nextLabel}</CallToAction
    >
  </p>
</section>
