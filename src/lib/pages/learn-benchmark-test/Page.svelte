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
    title: "Benchmark test",
    metaDescription:
      "A benchmark test measures how fast code runs, so a change that makes it slower is noticed early.",
    heading: "Benchmark test",
    intro:
      "A benchmark test measures how fast code runs — or how much memory it uses — instead of checking that an answer is right. The result is a number, which you compare with earlier numbers or a budget, so a change that makes things slower is noticed before users notice it.",
    traitsHeading: "What makes a good benchmark test",
    traits: [
      ["Measures, not asserts", "it reports a number, such as milliseconds per operation, instead of passing or failing on a right answer."],
      ["Repeated", "it runs the code many times and reports an average or median, so random noise does not mislead you."],
      ["Comparable", "it runs under the same conditions every time, so today’s number can be compared with last week’s."],
      ["Budgeted", "agree how much slower is too slow, and fail the build when a change goes past it."]
    ],
    shapeHeading: "The shape of a benchmark test",
    shapeIntro: "A benchmark names the work to time, and the tool does the repeating and reporting.",
    exampleLabel: "Benchmark test · JavaScript",
    outroPre: "Benchmarks can run in ",
    outroLinkText: "continuous integration",
    outroPost: " too, so a slowdown is caught when it is introduced."
  };

  const CY: Messages = {
    title: "Prawf meincnod",
    metaDescription:
      "Mae prawf meincnod yn mesur pa mor gyflym y mae cod yn rhedeg, fel bod newid sy'n ei arafu yn cael ei sylwi'n gynnar.",
    heading: "Prawf meincnod",
    intro:
      "Mae prawf meincnod yn mesur pa mor gyflym y mae cod yn rhedeg — neu faint o gof y mae'n ei ddefnyddio — yn hytrach na gwirio bod ateb yn gywir. Rhif yw'r canlyniad, y byddwch yn ei gymharu â rhifau cynharach neu gyllideb, fel bod newid sy'n arafu pethau yn cael ei sylwi cyn i ddefnyddwyr sylwi.",
    traitsHeading: "Beth sy’n gwneud prawf meincnod da",
    traits: [
      ["Mesur, nid honni", "mae’n adrodd rhif, fel milieiliadau fesul gweithrediad, yn hytrach na phasio neu fethu ar ateb cywir."],
      ["Wedi’i ailadrodd", "mae’n rhedeg y cod sawl gwaith ac yn adrodd cyfartaledd neu ganolrif, fel nad yw sŵn ar hap yn eich camarwain."],
      ["Cymharadwy", "mae’n rhedeg dan yr un amodau bob tro, fel y gellir cymharu rhif heddiw â rhif yr wythnos ddiwethaf."],
      ["Â chyllideb", "cytunwch faint o arafu sy’n ormod, a methwch yr adeiladu pan fydd newid yn mynd y tu hwnt iddo."]
    ],
    shapeHeading: "Siâp prawf meincnod",
    shapeIntro: "Mae meincnod yn enwi'r gwaith i'w amseru, ac mae'r offeryn yn gwneud yr ailadrodd a'r adrodd.",
    exampleLabel: "Prawf meincnod · JavaScript",
    outroPre: "Gall meincnodau redeg mewn ",
    outroLinkText: "integreiddio parhaus",
    outroPost: " hefyd, fel bod arafu yn cael ei ddal pan gaiff ei gyflwyno."
  };

  const ZH: Messages = {
    title: "基准测试",
    metaDescription:
      "基准测试衡量代码运行得有多快，让使代码变慢的改动能被及早发现。",
    heading: "基准测试",
    intro:
      "基准测试衡量代码运行得有多快——或用了多少内存——而不是检查答案对不对。结果是一个数字，你把它与之前的数字或预算相比较，这样让程序变慢的改动就能在用户察觉之前被发现。",
    traitsHeading: "好的基准测试具备什么特点",
    traits: [
      ["度量而非断言", "它报告一个数字，例如每次操作的毫秒数，而不是依据答案对错来通过或失败。"],
      ["重复运行", "它把代码运行很多次，报告平均值或中位数，避免随机噪声误导你。"],
      ["可比较", "它每次都在相同条件下运行，因此今天的数字可以和上周的比较。"],
      ["有预算", "约定慢到什么程度算太慢，一旦改动超出就让构建失败。"]
    ],
    shapeHeading: "基准测试的结构",
    shapeIntro: "基准测试指明要计时的工作，重复运行和报告由工具完成。",
    exampleLabel: "基准测试 · JavaScript",
    outroPre: "基准测试也可以在",
    outroLinkText: "持续集成",
    outroPost: "中运行，这样性能下降在引入时就能被发现。"
  };

  const AR: Messages = {
    title: "اختبار الأداء المرجعي",
    metaDescription:
      "اختبار الأداء المرجعي يقيس سرعة تشغيل الشيفرة، فيُلاحظ مبكرًا أي تغيير يبطئها.",
    heading: "اختبار الأداء المرجعي",
    intro:
      "اختبار الأداء المرجعي يقيس سرعة تشغيل الشيفرة — أو كمية الذاكرة التي تستخدمها — بدلًا من التحقق من صحة الجواب. والنتيجة رقم تقارنه بأرقام سابقة أو بميزانية، فيُلاحظ أي تغيير يبطئ الأمور قبل أن يلاحظه المستخدمون.",
    traitsHeading: "ما الذي يجعل اختبار الأداء المرجعي جيدًا",
    traits: [
      ["يقيس ولا يؤكد", "يُبلغ عن رقم، مثل أجزاء الثانية لكل عملية، بدلًا من النجاح أو الفشل بحسب جواب صحيح."],
      ["مكرَّر", "يشغّل الشيفرة مرات كثيرة ويُبلغ عن المتوسط أو الوسيط، فلا يضللك الضجيج العشوائي."],
      ["قابل للمقارنة", "يعمل في الظروف نفسها كل مرة، فيمكن مقارنة رقم اليوم برقم الأسبوع الماضي."],
      ["بميزانية", "اتفق على مقدار البطء المقبول، وأفشل البناء حين يتجاوزه أي تغيير."]
    ],
    shapeHeading: "شكل اختبار الأداء المرجعي",
    shapeIntro: "يحدد الاختبار المرجعي العمل المراد قياس زمنه، وتتولى الأداة التكرار والإبلاغ.",
    exampleLabel: "اختبار الأداء المرجعي · JavaScript",
    outroPre: "يمكن تشغيل الاختبارات المرجعية في ",
    outroLinkText: "التكامل المستمر",
    outroPost: " أيضًا، فيُكتشف أي تباطؤ لحظة إدخاله."
  };

  const KO: Messages = {
    title: "벤치마크 테스트",
    metaDescription:
      "벤치마크 테스트는 코드가 얼마나 빠르게 실행되는지 측정해, 느려지게 하는 변경을 일찍 알아챌 수 있게 합니다.",
    heading: "벤치마크 테스트",
    intro:
      "벤치마크 테스트는 답이 맞는지 확인하는 대신 코드가 얼마나 빠르게(또는 메모리를 얼마나) 쓰며 실행되는지 측정합니다. 결과는 숫자이며, 이전 숫자나 예산과 비교하므로 느려지게 하는 변경을 사용자가 알아채기 전에 발견할 수 있습니다.",
    traitsHeading: "좋은 벤치마크 테스트의 조건",
    traits: [
      ["측정이지 단정이 아님", "정답 여부로 통과·실패를 가르는 대신 작업당 밀리초 같은 숫자를 보고합니다."],
      ["반복", "코드를 여러 번 실행해 평균이나 중앙값을 보고하므로 무작위 잡음에 속지 않습니다."],
      ["비교 가능", "매번 같은 조건에서 실행해 오늘의 숫자를 지난주 숫자와 비교할 수 있습니다."],
      ["예산 설정", "얼마나 느려지면 너무 느린지 정해 두고, 변경이 그 선을 넘으면 빌드를 실패시킵니다."]
    ],
    shapeHeading: "벤치마크 테스트의 구조",
    shapeIntro: "벤치마크는 시간을 잴 작업을 지정하고, 반복과 보고는 도구가 맡습니다.",
    exampleLabel: "벤치마크 테스트 · JavaScript",
    outroPre: "벤치마크도 ",
    outroLinkText: "지속적 통합",
    outroPost: "에서 실행해, 느려지는 즉시 잡아내세요."
  };

  const FR: Messages = {
    title: "Test de benchmark",
    metaDescription:
      "Un test de benchmark mesure la vitesse d'exécution du code, afin de repérer tôt une modification qui le ralentit.",
    heading: "Test de benchmark",
    intro:
      "Un test de benchmark mesure la vitesse d'exécution du code — ou la mémoire qu'il utilise — au lieu de vérifier qu'une réponse est juste. Le résultat est un nombre, que vous comparez aux nombres précédents ou à un budget, de sorte qu'une modification qui ralentit les choses soit repérée avant les utilisateurs.",
    traitsHeading: "Ce qui fait un bon test de benchmark",
    traits: [
      ["Mesure, ne vérifie pas", "il rapporte un nombre, comme des millisecondes par opération, au lieu de réussir ou d'échouer selon une bonne réponse."],
      ["Répété", "il exécute le code de nombreuses fois et rapporte une moyenne ou une médiane, pour que le bruit aléatoire ne vous trompe pas."],
      ["Comparable", "il s'exécute chaque fois dans les mêmes conditions, de sorte que le nombre d'aujourd'hui se compare à celui de la semaine dernière."],
      ["Avec un budget", "convenez de ce qui est trop lent, et faites échouer la compilation quand une modification le dépasse."]
    ],
    shapeHeading: "La forme d'un test de benchmark",
    shapeIntro: "Un benchmark nomme le travail à chronométrer, et l'outil se charge de répéter et de rapporter.",
    exampleLabel: "Test de benchmark · JavaScript",
    outroPre: "Les benchmarks peuvent aussi tourner en ",
    outroLinkText: "intégration continue",
    outroPost: ", afin qu'un ralentissement soit repéré dès son apparition."
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
    <pre dir="ltr"><code>{`import { bench } from 'vitest';

bench('sort 10,000 numbers', () => {
  sort(numbers);
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
