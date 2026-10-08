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
    title: "Integration test",
    metaDescription:
      "An integration test checks that several parts of a system work correctly together, such as your code and a database, and sits in the middle of the testing pyramid.",
    heading: "Integration test",
    intro:
      "An integration test checks that several parts of a system work correctly together — for example, your code and a real database, or two services talking to each other. Each part may pass its own unit tests and still disagree about how to talk to the others; an integration test is where that shows up.",
    traitsHeading: "What makes a good integration test",
    traits: [
      ["Real parts together", "use the real database or service where you can, not a stand-in, so the connection itself is tested."],
      ["Slower than unit tests", "starting a database or a service takes time, so these tests run in seconds rather than milliseconds."],
      ["Fewer of them", "keep a modest number, aimed at the seams between parts; unit tests cover the details."],
      ["Finds mismatches", "catches wrong assumptions between parts, like a field with a different name or a different date format."]
    ],
    shapeHeading: "The shape of an integration test",
    shapeIntro: "It looks like a unit test, but it sets up real parts first and tears them down afterward.",
    exampleLabel: "Integration test · JavaScript",
    outroPre: "Integration tests sit in the middle of ",
    outroLinkText: "the automatic testing pyramid",
    outroPost: "."
  };

  const CY: Messages = {
    title: "Prawf integreiddio",
    metaDescription:
      "Mae prawf integreiddio yn gwirio bod sawl rhan o system yn gweithio'n gywir gyda'i gilydd, fel eich cod a chronfa ddata, ac mae yng nghanol y pyramid profi.",
    heading: "Prawf integreiddio",
    intro:
      "Mae prawf integreiddio yn gwirio bod sawl rhan o system yn gweithio'n gywir gyda'i gilydd — er enghraifft, eich cod a chronfa ddata go iawn, neu ddau wasanaeth yn siarad â'i gilydd. Gall pob rhan basio ei phrofion uned ei hun a dal i anghytuno ynghylch sut i siarad â'r lleill; prawf integreiddio yw'r lle y daw hynny i'r amlwg.",
    traitsHeading: "Beth sy’n gwneud prawf integreiddio da",
    traits: [
      ["Rhannau go iawn gyda’i gilydd", "defnyddiwch y gronfa ddata neu’r gwasanaeth go iawn lle gallwch, nid eilydd, fel bod y cysylltiad ei hun yn cael ei brofi."],
      ["Arafach na phrofion uned", "mae cychwyn cronfa ddata neu wasanaeth yn cymryd amser, felly mae’r profion hyn yn rhedeg mewn eiliadau yn hytrach na milieiliadau."],
      ["Llai ohonynt", "cadwch nifer cymedrol, wedi’u anelu at y cymalau rhwng rhannau; mae profion uned yn cwmpasu’r manylion."],
      ["Dod o hyd i anghydweddiadau", "yn dal rhagdybiaethau anghywir rhwng rhannau, fel maes ag enw gwahanol neu fformat dyddiad gwahanol."]
    ],
    shapeHeading: "Siâp prawf integreiddio",
    shapeIntro: "Mae'n edrych fel prawf uned, ond mae'n sefydlu rhannau go iawn yn gyntaf ac yn eu datgymalu wedyn.",
    exampleLabel: "Prawf integreiddio · JavaScript",
    outroPre: "Mae profion integreiddio yng nghanol ",
    outroLinkText: "y pyramid profi awtomatig",
    outroPost: "."
  };

  const ZH: Messages = {
    title: "集成测试",
    metaDescription:
      "集成测试检查系统的多个部分（例如你的代码和数据库）能否正确地协同工作，位于测试金字塔的中间层。",
    heading: "集成测试",
    intro:
      "集成测试检查系统的多个部分能否正确地协同工作——例如你的代码与真实的数据库，或两个相互通信的服务。每个部分也许都通过了自己的单元测试，却仍对如何与其他部分沟通有分歧；集成测试正是发现这种分歧的地方。",
    traitsHeading: "好的集成测试具备什么特点",
    traits: [
      ["真实的部分一起运行", "尽可能使用真实的数据库或服务，而不是替身，这样连接本身也得到了测试。"],
      ["比单元测试慢", "启动数据库或服务需要时间，所以这些测试要几秒而不是几毫秒。"],
      ["数量较少", "保持适度的数量，针对各部分之间的衔接处；细节交给单元测试。"],
      ["发现不匹配", "发现各部分之间的错误假设，比如字段名不同或日期格式不同。"]
    ],
    shapeHeading: "集成测试的结构",
    shapeIntro: "它看起来像单元测试，但会先搭建真实的部分，结束后再拆除。",
    exampleLabel: "集成测试 · JavaScript",
    outroPre: "集成测试位于",
    outroLinkText: "自动化测试金字塔",
    outroPost: "的中间层。"
  };

  const AR: Messages = {
    title: "اختبار التكامل",
    metaDescription:
      "اختبار التكامل يتحقق من أن عدة أجزاء من النظام تعمل معًا بشكل صحيح، مثل شيفرتك وقاعدة بيانات، ويقع في وسط هرم الاختبار.",
    heading: "اختبار التكامل",
    intro:
      "اختبار التكامل يتحقق من أن عدة أجزاء من النظام تعمل معًا بشكل صحيح — مثل شيفرتك وقاعدة بيانات حقيقية، أو خدمتين تتخاطبان. قد ينجح كل جزء في اختبارات وحدته ومع ذلك يختلف مع الأجزاء الأخرى في طريقة التخاطب؛ واختبار التكامل هو المكان الذي يظهر فيه ذلك.",
    traitsHeading: "ما الذي يجعل اختبار التكامل جيدًا",
    traits: [
      ["أجزاء حقيقية معًا", "استخدم قاعدة البيانات أو الخدمة الحقيقية حيثما أمكن لا بديلًا عنها، فيُختبر الاتصال نفسه."],
      ["أبطأ من اختبارات الوحدة", "تشغيل قاعدة بيانات أو خدمة يستغرق وقتًا، فتعمل هذه الاختبارات في ثوانٍ لا أجزاء من الثانية."],
      ["أقل عددًا", "اجعل عددها معتدلًا ومستهدفًا لنقاط الاتصال بين الأجزاء؛ وتغطي اختبارات الوحدة التفاصيل."],
      ["تكشف عدم التطابق", "تكتشف الافتراضات الخاطئة بين الأجزاء، مثل حقل باسم مختلف أو صيغة تاريخ مختلفة."]
    ],
    shapeHeading: "شكل اختبار التكامل",
    shapeIntro: "يشبه اختبار الوحدة، لكنه يُعدّ أجزاء حقيقية أولًا ثم يفككها بعد ذلك.",
    exampleLabel: "اختبار التكامل · JavaScript",
    outroPre: "تقع اختبارات التكامل في وسط ",
    outroLinkText: "هرم الاختبار الآلي",
    outroPost: "."
  };

  const KO: Messages = {
    title: "통합 테스트",
    metaDescription:
      "통합 테스트는 코드와 데이터베이스처럼 시스템의 여러 부분이 함께 올바르게 동작하는지 확인하며 테스트 피라미드의 중간에 놓입니다.",
    heading: "통합 테스트",
    intro:
      "통합 테스트는 시스템의 여러 부분이 함께 올바르게 동작하는지 확인합니다. 예를 들어 코드와 실제 데이터베이스, 또는 서로 통신하는 두 서비스입니다. 각 부분이 자기 단위 테스트는 통과하면서도 서로 소통하는 방식에서는 어긋날 수 있는데, 통합 테스트가 바로 그것을 드러냅니다.",
    traitsHeading: "좋은 통합 테스트의 조건",
    traits: [
      ["실제 부분을 함께", "가능하면 대역이 아니라 실제 데이터베이스나 서비스를 사용해 연결 자체를 테스트합니다."],
      ["단위 테스트보다 느림", "데이터베이스나 서비스를 띄우는 데 시간이 걸려, 이 테스트는 밀리초가 아니라 초 단위로 실행됩니다."],
      ["적은 수", "부분 사이의 이음새를 겨냥해 적당한 수만 두고, 세부 사항은 단위 테스트가 맡습니다."],
      ["불일치 발견", "필드 이름이 다르거나 날짜 형식이 다른 것처럼 부분 사이의 잘못된 가정을 잡아냅니다."]
    ],
    shapeHeading: "통합 테스트의 구조",
    shapeIntro: "단위 테스트와 비슷해 보이지만, 먼저 실제 부분을 준비하고 끝나면 정리합니다.",
    exampleLabel: "통합 테스트 · JavaScript",
    outroPre: "통합 테스트는 ",
    outroLinkText: "자동화 테스트 피라미드",
    outroPost: "의 중간에 위치합니다."
  };

  const FR: Messages = {
    title: "Test d'intégration",
    metaDescription:
      "Un test d'intégration vérifie que plusieurs parties d'un système fonctionnent correctement ensemble, par exemple votre code et une base de données ; il se situe au milieu de la pyramide des tests.",
    heading: "Test d'intégration",
    intro:
      "Un test d'intégration vérifie que plusieurs parties d'un système fonctionnent correctement ensemble — par exemple votre code et une vraie base de données, ou deux services qui se parlent. Chaque partie peut réussir ses propres tests unitaires et pourtant être en désaccord sur la manière de parler aux autres ; c'est le test d'intégration qui le révèle.",
    traitsHeading: "Ce qui fait un bon test d'intégration",
    traits: [
      ["Les vraies parties ensemble", "utilisez la vraie base de données ou le vrai service quand c'est possible, pas une doublure, pour que la connexion elle-même soit testée."],
      ["Plus lent que les tests unitaires", "démarrer une base de données ou un service prend du temps : ces tests s'exécutent en secondes plutôt qu'en millisecondes."],
      ["Moins nombreux", "gardez-en un nombre modeste, visant les jointures entre parties ; les tests unitaires couvrent les détails."],
      ["Révèle les désaccords", "attrape les hypothèses erronées entre parties, comme un champ au nom différent ou un autre format de date."]
    ],
    shapeHeading: "La forme d'un test d'intégration",
    shapeIntro: "Il ressemble à un test unitaire, mais il met d'abord en place de vraies parties puis les démonte ensuite.",
    exampleLabel: "Test d'intégration · JavaScript",
    outroPre: "Les tests d'intégration se situent au milieu de ",
    outroLinkText: "la pyramide des tests automatisés",
    outroPost: "."
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
    <pre dir="ltr"><code>{`test('saving a user stores it in the database', async () => {
  // Arrange: a real (test) database, not a fake.
  const db = await startTestDatabase();

  // Act
  await saveUser(db, { name: 'Ada' });

  // Assert
  expect(await findUser(db, 'Ada')).toEqual({ name: 'Ada' });

  await db.stop();
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
