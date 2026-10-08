<script lang="ts">
  import { CallToAction } from 'lily-design-system-svelte-headless';
  import { localeHref } from '#lib/i18n/paths.js';
  import type { Locale } from '#lib/i18n/locales.js';

  let { locale }: { locale: Locale } = $props();

  type Messages = {
    agileLabel: string;
    askAiHeading: string;
    ctaBackToLearn: string;
    ctaHowToStart: string;
    discoveryLabel: string;
    intendedLabel: string;
    s3AskAi: string[];
    s3Heading: string;
    s3P1a: string;
    s3P1b: string;
    s3P1c: string;
    s3P2a: string;
    s3P2b: string;
    s3P3: string;
    s3P4Mid: string;
    s3P4Mid2: string;
    s3P4Post: string;
    s3P4Pre: string;
  };

  const EN_001: Messages = {
    agileLabel: "agile",
    askAiHeading: "Examples you can ask AI",
    ctaBackToLearn: "Back to Learn",
    ctaHowToStart: "How to start learning →",
    discoveryLabel: "Discovery",
    intendedLabel: "intended",
    s3AskAi: [
      "What does 'discovery' actually mean in agile, and why would that matter to someone who just writes test scripts?",
      "How do I turn a vague user story into a concrete, testable scenario before I start automating it?",
      "How do experienced teams keep discovery and test-writing connected on an ongoing basis, rather than discovery happening once up front and the tests drifting from it later?"
    ],
    s3Heading: "Agile and working with users — discovery",
    s3P1a: "In plain terms, ",
    s3P1b: " means building software in short, repeatable cycles and checking in with the people who'll actually use it along the way — instead of building for months against a fixed spec and only finding out at the end that the spec was wrong. ",
    s3P1c: " is the specific practice of talking to real (or realistically representative) users early, to learn what they actually need and how they actually behave, before — and while — you build.",
    s3P2a: "Here's why that belongs on a testing page: a test suite can only check that software does what you ",
    s3P2b: " it to do. It has no way of checking whether that intention was ever the right one. Discovery is what keeps the intention pointed at something a real person actually needs, so that all the careful automated checking you do afterwards is checking something worth checking.",
    s3P3: "It's concrete on this very site, too: the fixture examples on the practice page, and the NHS Wales \"About Us\" and search scenarios this site's sibling repos exercise, exist because someone identified a real user journey worth protecting — signing up, searching, finding information on a health service site. Deciding that journey mattered enough to write a test for is itself a discovery activity, not a purely technical one.",
    s3P4Mid: " and the Nielsen Norman Group's ",
    s3P4Mid2: ", or watch ",
    s3P4Post: " for a video introduction.",
    s3P4Pre: "Learn more at the "
  };

  const EN_US: Messages = {
    ...EN_001
  };

  const CY: Messages = {
    agileLabel: "ystwyth",
    askAiHeading: "Enghreifftiau y gallwch eu gofyn i ddeallusrwydd artiffisial",
    ctaBackToLearn: "Yn ôl i Dysgu",
    ctaHowToStart: "Sut i ddechrau dysgu →",
    discoveryLabel: "darganfod",
    intendedLabel: "bwriadu",
    s3AskAi: [
      "Beth mae 'darganfod' yn ei olygu mewn gwirionedd mewn dull ystwyth, a pham byddai hynny'n bwysig i rywun sydd ond yn ysgrifennu sgriptiau prawf?",
      "Sut ydw i'n troi stori defnyddiwr amwys yn senario pendant, y gellir ei brofi, cyn i mi ddechrau ei hawtomeiddio?",
      "Sut mae timau profiadol yn cadw darganfod ac ysgrifennu profion yn gysylltiedig yn barhaus, yn lle i ddarganfod ddigwydd unwaith ymlaen llaw a'r profion yn dargyfeirio oddi wrtho'n ddiweddarach?"
    ],
    s3Heading: "Ystwyth a gweithio gyda defnyddwyr — darganfod",
    s3P1a: "Mewn termau plaen, mae ",
    s3P1b: " yn golygu adeiladu meddalwedd mewn cylchoedd byr, ailadroddadwy a chysylltu â'r bobl a fydd wir yn ei ddefnyddio ar hyd y ffordd — yn lle adeiladu am fisoedd yn erbyn manyleb sefydlog a dim ond darganfod ar y diwedd fod y fanyleb yn anghywir. Mae ",
    s3P1c: " yn arfer penodol o siarad â defnyddwyr go iawn (neu rai cynrychioliadol yn realistig) yn gynnar, i ddysgu beth maen nhw ei angen mewn gwirionedd a sut maen nhw'n ymddwyn mewn gwirionedd, cyn — ac wrth — i chi adeiladu.",
    s3P2a: "Dyma pam mae hynny'n perthyn i dudalen am brofi: ni all set brofion wneud dim ond gwirio bod meddalwedd yn gwneud yr hyn yr oeddech chi'n ",
    s3P2b: " iddo'i wneud. Nid oes ganddi unrhyw ffordd o wirio a oedd y bwriad hwnnw erioed yn un cywir. Darganfod yw'r hyn sy'n cadw'r bwriad wedi'i anelu at rywbeth y mae person go iawn wir ei angen, fel bod yr holl wirio awtomatig gofalus rydych chi'n ei wneud wedyn yn gwirio rhywbeth sy'n werth ei wirio.",
    s3P3: "Mae'n bendant ar y wefan hon ei hun, hefyd: mae'r enghreifftiau cynnwys sefydlog ar y dudalen ymarfer, a'r senarios \"About Us\" a chwilio NHS Cymru y mae ystorfeydd chwaer y wefan hon yn eu hymarfer, yn bodoli oherwydd i rywun nodi taith defnyddiwr go iawn yn werth ei diogelu — cofrestru, chwilio, dod o hyd i wybodaeth ar wefan gwasanaeth iechyd. Mae penderfynu bod y daith honno'n bwysig ddigon i ysgrifennu prawf ar ei chyfer yn weithgaredd darganfod ynddo'i hun, nid un technegol yn unig.",
    s3P4Mid: " ac yng nghyflwyniad Nielsen Norman Group i ",
    s3P4Mid2: ", neu gwyliwch ",
    s3P4Post: " ar gyfer cyflwyniad fideo.",
    s3P4Pre: "Dysgwch fwy yn y "
  };

  const ZH: Messages = {
    agileLabel: "敏捷（agile）",
    askAiHeading: "可以向 AI 提问的示例",
    ctaBackToLearn: "返回学习",
    ctaHowToStart: "如何开始学习 →",
    discoveryLabel: "探索（Discovery）",
    intendedLabel: "打算",
    s3AskAi: [
      "在敏捷中，“探索”到底是什么意思？为什么这对一个只负责写测试脚本的人也很重要？",
      "在开始自动化之前，我该如何把一个模糊的用户故事变成一个具体、可测试的场景？",
      "经验丰富的团队是如何让探索和测试编写持续保持联系，而不是让探索只在最初做一次，之后测试就慢慢与它脱节的？"
    ],
    s3Heading: "敏捷与用户协作——探索",
    s3P1a: "用简单的话说，",
    s3P1b: "是指以短小、可重复的周期来构建软件，并在过程中不断与真正会使用它的人核对——而不是照着一份固定的规格文档埋头做上几个月，最后才发现规格本身就是错的。",
    s3P1c: "则是一种具体的实践：在你动手构建之前和构建过程中，尽早与真实（或足够具有代表性）的用户交流，了解他们真正的需求以及他们真实的行为方式。",
    s3P2a: "这就是为什么它出现在一个测试相关的页面上：测试套件只能检查软件是否做到了你",
    s3P2b: "让它做的事情。它没有办法检查这个“打算”本身是否曾经是正确的。而探索正是让这个“打算”始终指向真实用户真正需要的东西，这样你之后所做的一切细致的自动化检查，才是在检查真正值得检查的东西。",
    s3P3: "这在本站上也是具体可见的：练习页面上的测试夹具示例，以及本站姐妹仓库所演练的 NHS Wales “About Us”和搜索场景，之所以存在，是因为有人识别出了一个值得保护的真实用户旅程——注册、搜索、在一个医疗服务网站上找到信息。判断这段旅程重要到值得为它写一个测试，本身就是一项探索活动，而不仅仅是一项技术活动。",
    s3P4Mid: "，以及 Nielsen Norman Group 的",
    s3P4Mid2: "，或观看",
    s3P4Post: "视频介绍。",
    s3P4Pre: "可以进一步阅读"
  };

  const AR: Messages = {
    agileLabel: "الرشاقة (agile)",
    askAiHeading: "أمثلة يمكنك طرحها على الذكاء الاصطناعي",
    ctaBackToLearn: "العودة إلى تعلّم",
    ctaHowToStart: "كيف تبدأ التعلم ←",
    discoveryLabel: "الاستكشاف (Discovery)",
    intendedLabel: "قصدتَ",
    s3AskAi: [
      "ماذا يعني «الاستكشاف» فعلًا في الرشاقة، ولماذا يهم من يكتب سكربتات الاختبار فحسب؟",
      "كيف أحوّل قصة مستخدم غامضة إلى سيناريو ملموس قابل للاختبار قبل أن أبدأ أتمتته؟",
      "كيف تُبقي الفرق ذات الخبرة الاستكشاف وكتابة الاختبارات مترابطين على نحو مستمر، بدلًا من أن يحدث الاستكشاف مرة واحدة في البداية ثم تنجرف الاختبارات عنه لاحقًا؟"
    ],
    s3Heading: "الرشاقة والعمل مع المستخدمين — الاستكشاف",
    s3P1a: "بعبارات بسيطة، ",
    s3P1b: " تعني بناء البرمجيات في دورات قصيرة قابلة للتكرار، والتواصل مع من سيستخدمونها فعلًا في أثناء ذلك — بدلًا من البناء لشهور وفق مواصفات ثابتة ثم اكتشاف النهاية أن المواصفات كانت خاطئة. ",
    s3P1c: " هو الممارسة المحددة للتحدث مع مستخدمين حقيقيين (أو ممثلين واقعيين لهم) مبكرًا، لمعرفة ما يحتاجونه فعلًا وكيف يتصرفون فعلًا، قبل البناء — وأثناءه.",
    s3P2a: "وإليك لماذا ينتمي هذا إلى صفحة عن الاختبار: مجموعة الاختبارات لا تستطيع إلا التحقق من أن البرمجيات تفعل ما ",
    s3P2b: " أن تفعله. وليس لديها وسيلة للتحقق من أن ذلك القصد كان هو الصحيح أصلًا. الاستكشاف هو ما يبقي القصد موجّهًا إلى شيء يحتاجه شخص حقيقي فعلًا، فيكون كل الفحص الآلي الدقيق الذي تجريه بعد ذلك فحصًا لشيء يستحق الفحص.",
    s3P3: "وهو ملموس في هذا الموقع نفسه أيضًا: فأمثلة التجهيزات في صفحة التدريب، وسيناريوهات «About Us» والبحث في NHS Wales التي تمارسها المستودعات الشقيقة لهذا الموقع، موجودة لأن أحدهم حدّد رحلة مستخدم حقيقية تستحق الحماية — التسجيل والبحث والعثور على معلومات في موقع خدمة صحية. وقرار أن هذه الرحلة مهمة بما يكفي لكتابة اختبار لها هو بحد ذاته نشاط استكشاف لا نشاط تقني بحت.",
    s3P4Mid: " وفي ",
    s3P4Mid2: " من Nielsen Norman Group، أو شاهد ",
    s3P4Post: " كمقدمة مرئية.",
    s3P4Pre: "اعرف المزيد في "
  };

  const KO: Messages = {
    agileLabel: "애자일",
    askAiHeading: "AI에게 물어볼 수 있는 예시",
    ctaBackToLearn: "학습으로 돌아가기",
    ctaHowToStart: "학습 시작하기 →",
    discoveryLabel: "디스커버리",
    intendedLabel: "의도한",
    s3AskAi: [
      "애자일에서 '디스커버리'는 실제로 무슨 뜻이며, 테스트 스크립트만 작성하는 사람에게 그것이 왜 중요한가요?",
      "자동화를 시작하기 전에 모호한 사용자 스토리를 구체적이고 테스트 가능한 시나리오로 바꾸려면 어떻게 해야 하나요?",
      "경험 많은 팀은 디스커버리를 처음에 한 번만 하고 테스트가 나중에 거기서 벗어나게 두는 대신, 디스커버리와 테스트 작성을 지속적으로 어떻게 연결해 두나요?"
    ],
    s3Heading: "애자일과 사용자와 함께 일하기 — 디스커버리",
    s3P1a: "쉬운 말로, ",
    s3P1b: "은 소프트웨어를 짧고 반복 가능한 주기로 만들면서, 몇 달 동안 고정된 명세에 맞춰 만들다가 마지막에야 그 명세가 틀렸다는 것을 알게 되는 대신, 그 소프트웨어를 실제로 사용할 사람들과 도중에 계속 확인하는 것을 뜻합니다. ",
    s3P1c: "는 만들기 전에, 그리고 만드는 동안, 실제(또는 현실적으로 대표성 있는) 사용자와 일찍 이야기하여 그들이 실제로 무엇을 필요로 하고 실제로 어떻게 행동하는지 알아내는 구체적인 관행입니다.",
    s3P2a: "이것이 테스트 페이지에 속하는 이유는 다음과 같습니다. 테스트 스위트는 소프트웨어가 여러분이 ",
    s3P2b: " 대로 동작하는지만 확인할 수 있습니다. 그 의도가 애초에 옳았는지는 확인할 방법이 없습니다. 디스커버리는 그 의도가 실제 사람이 정말 필요로 하는 것을 향하도록 유지해 주는 것이며, 그래서 이후에 하는 모든 신중한 자동 확인이 확인할 가치가 있는 것을 확인하게 됩니다.",
    s3P3: "바로 이 사이트에서도 구체적입니다. 연습 페이지의 픽스처 예제와, 이 사이트의 자매 저장소가 다루는 NHS Wales의 \"About Us\" 및 검색 시나리오는 누군가 보호할 가치가 있는 실제 사용자 여정 — 가입, 검색, 보건 서비스 사이트에서 정보 찾기 — 을 파악했기 때문에 존재합니다. 그 여정이 테스트를 작성할 만큼 중요하다고 결정하는 것은 그 자체로 순수한 기술 작업이 아니라 디스커버리 활동입니다.",
    s3P4Mid: "와 Nielsen Norman Group의 ",
    s3P4Mid2: "를 보거나, ",
    s3P4Post: " 영상으로 입문하세요.",
    s3P4Pre: "더 알아보려면 "
  };

  const FR: Messages = {
    agileLabel: "l'agilité",
    askAiHeading: "Exemples à demander à l'IA",
    ctaBackToLearn: "Retour à Apprendre",
    ctaHowToStart: "Comment commencer à apprendre →",
    discoveryLabel: "La découverte",
    intendedLabel: "aviez prévu",
    s3AskAi: [
      "Que signifie réellement la « découverte » dans l'agilité, et pourquoi cela importerait-il à quelqu'un qui écrit simplement des scripts de test ?",
      "Comment transformer une user story vague en scénario concret et testable avant de commencer à l'automatiser ?",
      "Comment les équipes expérimentées gardent-elles la découverte et l'écriture des tests reliées en continu, plutôt que de faire la découverte une fois au départ et de laisser les tests s'en éloigner ensuite ?"
    ],
    s3Heading: "Agilité et travail avec les utilisateurs — la découverte",
    s3P1a: "En termes simples, ",
    s3P1b: " consiste à construire des logiciels par cycles courts et répétables, en échangeant en chemin avec les personnes qui les utiliseront vraiment — plutôt que de construire pendant des mois à partir d'une spécification figée pour s'apercevoir seulement à la fin que la spécification était fausse. ",
    s3P1c: " est la pratique précise consistant à parler tôt à de vrais utilisateurs (ou à des représentants réalistes) pour apprendre ce dont ils ont réellement besoin et comment ils se comportent réellement, avant — et pendant — la construction.",
    s3P2a: "Voici pourquoi cela a sa place sur une page consacrée aux tests : une suite de tests ne peut que vérifier que le logiciel fait ce que vous ",
    s3P2b: " qu'il fasse. Elle n'a aucun moyen de vérifier si cette intention était la bonne. La découverte est ce qui maintient l'intention orientée vers ce dont une vraie personne a réellement besoin, afin que toutes les vérifications automatisées minutieuses que vous faites ensuite portent sur quelque chose qui vaut la peine d'être vérifié.",
    s3P3: "C'est aussi concret sur ce site même : les exemples de contenu stable de la page d'exercices, et les scénarios « About Us » et de recherche NHS Wales que mettent en œuvre les dépôts associés à ce site, existent parce que quelqu'un a identifié un vrai parcours utilisateur à protéger — s'inscrire, rechercher, trouver des informations sur le site d'un service de santé. Décider que ce parcours comptait assez pour écrire un test est en soi une activité de découverte, et non une activité purement technique.",
    s3P4Mid: " et le ",
    s3P4Mid2: ", ou regardez la vidéo ",
    s3P4Post: " pour une présentation en vidéo.",
    s3P4Pre: "Pour en savoir plus, consultez le "
  };

  const MESSAGES: Record<Locale, Messages> = {
    'en-001': EN_001,
    'en-gb': EN_001,
    'en-gb-oxendict': EN_001,
    'en-us': EN_US,
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
  <title>{m.s3Heading} — Testing Examples</title>
  <meta name="description" content={m.s3Heading} />
</svelte:head>

<div class="page-header">
  <h1>{m.s3Heading}</h1>
</div>

<section class="section prose">
  <p>
    {m.s3P1a}<strong>{m.agileLabel}</strong>{m.s3P1b}<strong>{m.discoveryLabel}</strong>{m.s3P1c}
  </p>

  <p>
    {m.s3P2a}<em>{m.intendedLabel}</em>{m.s3P2b}
  </p>

  <p>{m.s3P3}</p>

  <p>
    {m.s3P4Pre}<a href="https://agilemanifesto.org/">Agile Manifesto</a>{m.s3P4Mid}<a
      href="https://www.nngroup.com/articles/user-research/">introduction to user research</a
    >{m.s3P4Mid2}<a href="https://www.youtube.com/watch?v=vLpQg-al2RU"
      >"Agile Methodology Explained in 5 Minutes"</a
    >{m.s3P4Post}
  </p>

  <h3>{m.askAiHeading}</h3>
  <ul>
    {#each m.s3AskAi as question (question)}
      <li>{question}</li>
    {/each}
  </ul>
</section>

<section class="section prose">
  <p>
    <CallToAction class="button button-primary" href={localeHref(locale, 'learn')}
      >{m.ctaBackToLearn}</CallToAction
    >
    <CallToAction
      class="button button-secondary"
      href={localeHref(locale, 'how-to-start-learning-automatic-testing')}
      style="margin-inline-start: 0.75rem;">{m.ctaHowToStart}</CallToAction
    >
  </p>
</section>
