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
    traitsHeading: string;
    traits: [string, string][];
    shapeHeading: string;
    shapeIntro: string;
    exampleLabel: string;
    outroPre: string;
    outroLinkText: string;
    outroPost: string;
  };

  const EN_001: Messages = {
    title: "What is a unit test?",
    metaDescription:
      "A unit test checks one small piece of code in isolation, quickly and repeatably, and sits at the base of the automatic testing pyramid.",
    heading: "What is a unit test?",
    intro:
      "A unit test is a small automatic test that checks one tiny piece of code — usually a single function or method — on its own, without a browser, a network, or a database. It runs in milliseconds, so a project can have thousands of them and run them on every change.",
    traitsHeading: "What makes a good unit test",
    traits: [
      ["Fast", "runs in milliseconds, so you can run all of them constantly."],
      ["Isolated", "tests one unit and nothing else; slow or unpredictable parts (network, clock, database) are replaced with simple stand-ins."],
      ["Repeatable", "gives the same answer every time, on every machine."],
      ["Focused", "fails for one clear reason, so the failure points straight at the problem."]
    ],
    shapeHeading: "The shape of a unit test",
    shapeIntro: "Most unit tests follow Arrange, Act, Assert: set up the inputs, run the code, then check the result.",
    exampleLabel: "Unit test · JavaScript",
    outroPre: "Unit tests are the base of the testing pyramid: many cheap, fast tests below fewer, slower browser tests. See ",
    outroLinkText: "the automatic testing pyramid",
    outroPost: " for where each layer fits."
  };

  const CY: Messages = {
    title: "Beth yw prawf uned?",
    metaDescription:
      "Mae prawf uned yn gwirio un darn bach o god ar ei ben ei hun, yn gyflym ac yn ailadroddadwy, ac mae ar waelod pyramid profi awtomatig.",
    heading: "Beth yw prawf uned?",
    intro:
      "Prawf awtomatig bach yw prawf uned sy'n gwirio un darn bach o god — fel arfer un ffwythiant neu ddull — ar ei ben ei hun, heb borwr, rhwydwaith na chronfa ddata. Mae'n rhedeg mewn milieiliadau, felly gall prosiect gael miloedd ohonynt a'u rhedeg ar bob newid.",
    traitsHeading: "Beth sy'n gwneud prawf uned da",
    traits: [
      ["Cyflym", "yn rhedeg mewn milieiliadau, felly gallwch eu rhedeg i gyd drwy'r amser."],
      ["Ynysig", "yn profi un uned a dim byd arall; mae rhannau araf neu anrhagweladwy (rhwydwaith, cloc, cronfa ddata) yn cael eu disodli gan eilyddion syml."],
      ["Ailadroddadwy", "yn rhoi'r un ateb bob tro, ar bob peiriant."],
      ["Ffocws", "yn methu am un rheswm clir, felly mae'r methiant yn pwyntio'n syth at y broblem."]
    ],
    shapeHeading: "Siâp prawf uned",
    shapeIntro: "Mae'r rhan fwyaf o brofion uned yn dilyn Arrange, Act, Assert: paratoi'r mewnbynnau, rhedeg y cod, yna gwirio'r canlyniad.",
    exampleLabel: "Prawf uned · JavaScript",
    outroPre: "Profion uned yw gwaelod y pyramid profi: llawer o brofion rhad, cyflym o dan lai o brofion porwr arafach. Gweler ",
    outroLinkText: "y pyramid profi awtomatig",
    outroPost: " i weld lle mae pob haen yn ffitio."
  };

  const ZH: Messages = {
    title: "什么是单元测试？",
    metaDescription:
      "单元测试在隔离环境中快速、可重复地检查一小段代码，位于自动化测试金字塔的底层。",
    heading: "什么是单元测试？",
    intro:
      "单元测试是一种小型自动化测试，用来单独检查一小段代码（通常是一个函数或方法），不需要浏览器、网络或数据库。它在几毫秒内运行完毕，因此项目可以拥有成千上万个单元测试，并在每次改动时运行。",
    traitsHeading: "好的单元测试具备什么特点",
    traits: [
      ["快速", "几毫秒即可运行，因此可以随时运行全部测试。"],
      ["隔离", "只测试一个单元，不涉及其他；缓慢或不可预测的部分（网络、时钟、数据库）会被简单的替身取代。"],
      ["可重复", "在每台机器上、每一次都给出相同的结果。"],
      ["专注", "只因一个明确的原因失败，因此失败直接指向问题所在。"]
    ],
    shapeHeading: "单元测试的结构",
    shapeIntro: "大多数单元测试遵循 Arrange、Act、Assert：准备输入，运行代码，然后检查结果。",
    exampleLabel: "单元测试 · JavaScript",
    outroPre: "单元测试是测试金字塔的底层：大量廉价、快速的测试位于数量较少、较慢的浏览器测试之下。各层的位置请见",
    outroLinkText: "自动化测试金字塔",
    outroPost: "。"
  };

  const AR: Messages = {
    title: "ما هو اختبار الوحدة؟",
    metaDescription:
      "اختبار الوحدة يفحص جزءًا صغيرًا من الشيفرة بمعزل عن غيره، بسرعة وبشكل قابل للتكرار، ويقع في قاعدة هرم الاختبار الآلي.",
    heading: "ما هو اختبار الوحدة؟",
    intro:
      "اختبار الوحدة اختبار آلي صغير يفحص جزءًا صغيرًا من الشيفرة — عادةً دالة أو أسلوبًا واحدًا — بمفرده، دون متصفح أو شبكة أو قاعدة بيانات. يعمل في أجزاء من الثانية، لذا يمكن للمشروع أن يضم آلاف الاختبارات وتشغيلها عند كل تغيير.",
    traitsHeading: "ما الذي يجعل اختبار الوحدة جيدًا",
    traits: [
      ["سريع", "يعمل في أجزاء من الثانية، فيمكنك تشغيل جميع الاختبارات باستمرار."],
      ["معزول", "يختبر وحدة واحدة فقط؛ وتُستبدل الأجزاء البطيئة أو غير المتوقعة (الشبكة والساعة وقاعدة البيانات) ببدائل بسيطة."],
      ["قابل للتكرار", "يعطي النتيجة نفسها في كل مرة وعلى كل جهاز."],
      ["مركّز", "يفشل لسبب واحد واضح، فيشير الفشل مباشرة إلى المشكلة."]
    ],
    shapeHeading: "شكل اختبار الوحدة",
    shapeIntro: "تتبع معظم اختبارات الوحدة نمط Arrange وAct وAssert: تجهيز المدخلات، ثم تشغيل الشيفرة، ثم فحص النتيجة.",
    exampleLabel: "اختبار وحدة · JavaScript",
    outroPre: "اختبارات الوحدة هي قاعدة هرم الاختبار: اختبارات كثيرة رخيصة وسريعة تحت اختبارات متصفح أقل وأبطأ. راجع ",
    outroLinkText: "هرم الاختبار الآلي",
    outroPost: " لمعرفة موضع كل طبقة."
  };

  const KO: Messages = {
    title: "단위 테스트란 무엇인가?",
    metaDescription:
      "단위 테스트는 코드의 작은 부분 하나를 격리하여 빠르고 반복 가능하게 검사하며, 자동화 테스트 피라미드의 맨 아래에 놓입니다.",
    heading: "단위 테스트란 무엇인가?",
    intro:
      "단위 테스트는 브라우저, 네트워크, 데이터베이스 없이 코드의 아주 작은 부분(보통 함수나 메서드 하나)만 따로 검사하는 작은 자동화 테스트입니다. 몇 밀리초 만에 실행되므로 프로젝트에 수천 개를 두고 변경할 때마다 실행할 수 있습니다.",
    traitsHeading: "좋은 단위 테스트의 조건",
    traits: [
      ["빠름", "몇 밀리초 만에 실행되므로 전부 계속 실행할 수 있습니다."],
      ["격리", "하나의 단위만 테스트합니다. 느리거나 예측하기 어려운 부분(네트워크, 시계, 데이터베이스)은 단순한 대역으로 바꿉니다."],
      ["반복 가능", "어느 기기에서나 매번 같은 결과를 냅니다."],
      ["집중", "분명한 한 가지 이유로 실패하므로, 실패가 곧바로 문제를 가리킵니다."]
    ],
    shapeHeading: "단위 테스트의 구조",
    shapeIntro: "대부분의 단위 테스트는 Arrange, Act, Assert를 따릅니다. 입력을 준비하고, 코드를 실행하고, 결과를 확인합니다.",
    exampleLabel: "단위 테스트 · JavaScript",
    outroPre: "단위 테스트는 테스트 피라미드의 바닥입니다. 값싸고 빠른 테스트가 많이 있고 그 위에 더 느린 브라우저 테스트가 적게 있습니다. 각 계층의 위치는 ",
    outroLinkText: "자동화 테스트 피라미드",
    outroPost: "에서 확인하세요."
  };

  const FR: Messages = {
    title: "Qu'est-ce qu'un test unitaire ?",
    metaDescription:
      "Un test unitaire vérifie un petit morceau de code de façon isolée, rapide et reproductible, et se trouve à la base de la pyramide des tests automatisés.",
    heading: "Qu'est-ce qu'un test unitaire ?",
    intro:
      "Un test unitaire est un petit test automatisé qui vérifie un tout petit morceau de code — généralement une seule fonction ou méthode — à lui seul, sans navigateur, réseau ni base de données. Il s'exécute en quelques millisecondes : un projet peut donc en compter des milliers et les lancer à chaque modification.",
    traitsHeading: "Ce qui fait un bon test unitaire",
    traits: [
      ["Rapide", "s'exécute en quelques millisecondes, ce qui permet de tous les lancer en permanence."],
      ["Isolé", "ne teste qu'une unité ; les parties lentes ou imprévisibles (réseau, horloge, base de données) sont remplacées par de simples doublures."],
      ["Reproductible", "donne le même résultat à chaque fois, sur chaque machine."],
      ["Ciblé", "échoue pour une seule raison claire, de sorte que l'échec désigne directement le problème."]
    ],
    shapeHeading: "La forme d'un test unitaire",
    shapeIntro: "La plupart des tests unitaires suivent Arrange, Act, Assert : préparer les entrées, exécuter le code, puis vérifier le résultat.",
    exampleLabel: "Test unitaire · JavaScript",
    outroPre: "Les tests unitaires forment la base de la pyramide des tests : beaucoup de tests rapides et peu coûteux sous des tests de navigateur moins nombreux et plus lents. Voyez ",
    outroLinkText: "la pyramide des tests automatisés",
    outroPost: " pour la place de chaque couche."
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

  <h2>{m.traitsHeading}</h2>
  <ul class="repo-list">
    {#each m.traits as [term, description] (term)}
      <li><strong>{term}</strong> — {description}</li>
    {/each}
  </ul>

  <h2>{m.shapeHeading}</h2>
  <p>{m.shapeIntro}</p>
  <CodeBlock label={m.exampleLabel}>
    <pre dir="ltr"><code>{`function add(a, b) {
  return a + b;
}

test('adds two numbers', () => {
  // Arrange
  const a = 2;
  const b = 3;

  // Act
  const result = add(a, b);

  // Assert
  expect(result).toBe(5);
});
`}</code></pre>
  </CodeBlock>

  <p>
    {m.outroPre}<a href={localeHref(locale, 'what-is-the-testing-pyramid')}>{m.outroLinkText}</a>{m.outroPost}
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
