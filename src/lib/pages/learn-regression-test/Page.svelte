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
    title: "Regression test",
    metaDescription:
      "A regression test checks that something that used to work still works after a change, and is often written when a bug is fixed.",
    heading: "Regression test",
    intro:
      "A regression test checks that something that used to work still works after a change. The name comes from software “regressing”: a bug you already fixed, or a feature that was fine, quietly breaks again. A regression test stands guard so that it cannot happen unnoticed.",
    traitsHeading: "What makes a good regression test",
    traits: [
      ["Born from a bug", "write the test first so it fails because of the bug, then fix the bug and watch it pass."],
      ["Kept forever", "it stays in the suite, so the same problem cannot return unnoticed."],
      ["Automatic", "run it on every change in continuous integration, not just when someone remembers."],
      ["Specific", "check the exact behavior that broke, not everything around it, so a failure points at the cause."]
    ],
    shapeHeading: "The shape of a regression test",
    shapeIntro: "It is usually a small, ordinary test whose name or comment records the bug it protects against.",
    exampleLabel: "Regression test · JavaScript",
    outroPre: "Run regression tests on every change with ",
    outroLinkText: "continuous integration",
    outroPost: "."
  };

  const CY: Messages = {
    title: "Prawf atchweliad",
    metaDescription:
      "Mae prawf atchweliad yn gwirio bod rhywbeth a arferai weithio yn dal i weithio ar ôl newid, ac fe'i hysgrifennir yn aml pan fydd byg yn cael ei drwsio.",
    heading: "Prawf atchweliad",
    intro:
      "Mae prawf atchweliad yn gwirio bod rhywbeth a arferai weithio yn dal i weithio ar ôl newid. Daw'r enw o feddalwedd yn “atchwelu”: mae byg a drwsiwyd eisoes, neu nodwedd a oedd yn iawn, yn torri eto'n dawel. Mae prawf atchweliad yn gwarchod rhag i hynny ddigwydd heb i neb sylwi.",
    traitsHeading: "Beth sy’n gwneud prawf atchweliad da",
    traits: [
      ["Wedi’i eni o fyg", "ysgrifennwch y prawf yn gyntaf fel ei fod yn methu oherwydd y byg, yna trwsiwch y byg a gwyliwch ef yn pasio."],
      ["Wedi’i gadw am byth", "mae’n aros yn y set brofion, felly ni all yr un broblem ddychwelyd heb i neb sylwi."],
      ["Awtomatig", "rhedwch ef ar bob newid mewn integreiddio parhaus, nid dim ond pan fydd rhywun yn cofio."],
      ["Penodol", "gwiriwch yr union ymddygiad a dorrodd, nid popeth o’i gwmpas, fel bod methiant yn pwyntio at yr achos."]
    ],
    shapeHeading: "Siâp prawf atchweliad",
    shapeIntro: "Fel arfer mae'n brawf bach, cyffredin y mae ei enw neu ei sylw yn cofnodi'r byg y mae'n ei warchod rhagddo.",
    exampleLabel: "Prawf atchweliad · JavaScript",
    outroPre: "Rhedwch brofion atchweliad ar bob newid gydag ",
    outroLinkText: "integreiddio parhaus",
    outroPost: "."
  };

  const ZH: Messages = {
    title: "回归测试",
    metaDescription:
      "回归测试检查原本正常工作的功能在改动之后是否仍然正常，通常在修复缺陷时编写。",
    heading: "回归测试",
    intro:
      "回归测试检查原本正常工作的功能在改动之后是否仍然正常。这个名字来自软件“回归”：已经修好的缺陷，或原本没问题的功能，悄悄地又坏了。回归测试负责把关，让这种情况不会在无人察觉时发生。",
    traitsHeading: "好的回归测试具备什么特点",
    traits: [
      ["源于缺陷", "先写测试，让它因缺陷而失败，再修复缺陷，看它通过。"],
      ["永久保留", "它一直留在测试套件中，因此同样的问题不会在无人察觉时再次出现。"],
      ["自动运行", "在持续集成中对每次改动都运行，而不是只在有人想起时才运行。"],
      ["针对具体", "检查出问题的那个确切行为，而不是它周围的一切，这样失败能直接指向原因。"]
    ],
    shapeHeading: "回归测试的结构",
    shapeIntro: "它通常是一个小而普通的测试，名称或注释里记录了它所防范的缺陷。",
    exampleLabel: "回归测试 · JavaScript",
    outroPre: "通过",
    outroLinkText: "持续集成",
    outroPost: "在每次改动时运行回归测试。"
  };

  const AR: Messages = {
    title: "اختبار الانحدار",
    metaDescription:
      "اختبار الانحدار يتحقق من أن ما كان يعمل ما زال يعمل بعد التغيير، وغالبًا ما يُكتب عند إصلاح خطأ.",
    heading: "اختبار الانحدار",
    intro:
      "اختبار الانحدار يتحقق من أن ما كان يعمل ما زال يعمل بعد التغيير. يأتي الاسم من «تراجع» البرمجيات: خطأ أُصلح سابقًا، أو ميزة كانت سليمة، تتعطل من جديد بهدوء. ويقف اختبار الانحدار حارسًا كي لا يحدث ذلك دون أن يلاحظ أحد.",
    traitsHeading: "ما الذي يجعل اختبار الانحدار جيدًا",
    traits: [
      ["وُلد من خطأ", "اكتب الاختبار أولًا ليفشل بسبب الخطأ، ثم أصلح الخطأ وشاهده ينجح."],
      ["يبقى للأبد", "يظل في مجموعة الاختبارات، فلا تعود المشكلة نفسها دون أن يلاحظ أحد."],
      ["آلي", "شغّله عند كل تغيير في التكامل المستمر، لا فقط حين يتذكر أحد."],
      ["محدد", "افحص السلوك الذي تعطل بالضبط لا كل ما حوله، فيشير الفشل إلى السبب."]
    ],
    shapeHeading: "شكل اختبار الانحدار",
    shapeIntro: "عادةً هو اختبار صغير عادي يسجّل اسمه أو تعليقه الخطأ الذي يحميك منه.",
    exampleLabel: "اختبار الانحدار · JavaScript",
    outroPre: "شغّل اختبارات الانحدار عند كل تغيير باستخدام ",
    outroLinkText: "التكامل المستمر",
    outroPost: "."
  };

  const KO: Messages = {
    title: "회귀 테스트",
    metaDescription:
      "회귀 테스트는 예전에 잘 되던 기능이 변경 후에도 여전히 잘 되는지 확인하며, 보통 버그를 고칠 때 작성합니다.",
    heading: "회귀 테스트",
    intro:
      "회귀 테스트는 예전에 잘 되던 것이 변경 후에도 여전히 잘 되는지 확인합니다. 이름은 소프트웨어가 “퇴보(regress)”한다는 데서 왔습니다. 이미 고친 버그나 멀쩡하던 기능이 조용히 다시 깨지는 일이지요. 회귀 테스트는 그런 일이 모르는 사이에 일어나지 않도록 지킵니다.",
    traitsHeading: "좋은 회귀 테스트의 조건",
    traits: [
      ["버그에서 태어남", "먼저 버그 때문에 실패하는 테스트를 쓰고, 버그를 고친 뒤 통과하는 것을 확인합니다."],
      ["영원히 유지", "테스트 모음에 계속 남아 있어 같은 문제가 모르는 사이에 돌아오지 못합니다."],
      ["자동", "누군가 기억할 때만이 아니라 지속적 통합에서 모든 변경마다 실행합니다."],
      ["구체적", "주변 전체가 아니라 깨졌던 정확한 동작만 확인해, 실패가 곧바로 원인을 가리키게 합니다."]
    ],
    shapeHeading: "회귀 테스트의 구조",
    shapeIntro: "보통은 이름이나 주석에 막아 주는 버그를 적어 둔 작고 평범한 테스트입니다.",
    exampleLabel: "회귀 테스트 · JavaScript",
    outroPre: "회귀 테스트는 ",
    outroLinkText: "지속적 통합",
    outroPost: "으로 변경할 때마다 실행하세요."
  };

  const FR: Messages = {
    title: "Test de régression",
    metaDescription:
      "Un test de régression vérifie que ce qui fonctionnait fonctionne toujours après une modification ; on l'écrit souvent en corrigeant un bogue.",
    heading: "Test de régression",
    intro:
      "Un test de régression vérifie que ce qui fonctionnait fonctionne toujours après une modification. Le nom vient du logiciel qui « régresse » : un bogue déjà corrigé, ou une fonctionnalité qui allait bien, se casse de nouveau discrètement. Le test de régression monte la garde pour que cela n'arrive pas sans que personne ne le remarque.",
    traitsHeading: "Ce qui fait un bon test de régression",
    traits: [
      ["Né d’un bogue", "écrivez d’abord le test pour qu’il échoue à cause du bogue, puis corrigez le bogue et regardez-le passer."],
      ["Conservé pour toujours", "il reste dans la suite, si bien que le même problème ne peut pas revenir sans être remarqué."],
      ["Automatique", "lancez-le à chaque modification en intégration continue, pas seulement quand quelqu’un y pense."],
      ["Précis", "vérifiez le comportement exact qui a cassé, pas tout ce qui l’entoure, pour qu’un échec désigne la cause."]
    ],
    shapeHeading: "La forme d'un test de régression",
    shapeIntro: "C'est en général un petit test ordinaire dont le nom ou le commentaire consigne le bogue dont il protège.",
    exampleLabel: "Test de régression · JavaScript",
    outroPre: "Lancez les tests de régression à chaque modification avec ",
    outroLinkText: "l'intégration continue",
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
    <pre dir="ltr"><code>{`// Regression test for bug #123: a 100% discount used to give a negative total.
test('a 100% discount gives a total of zero', () => {
  const total = checkout({ price: 20, discount: 1 });

  expect(total).toBe(0);
});
`}</code></pre>
  </CodeBlock>

  <p>
    {m.outroPre}<a href={localeHref(locale, 'what-is-continuous-integration-testing')}>{m.outroLinkText}</a>{m.outroPost}
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
