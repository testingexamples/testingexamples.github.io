<script lang="ts">
  import { CallToAction } from 'lily-design-system-svelte-headless';
  import { localeHref } from '$lib/i18n/paths';
  import type { Locale } from '$lib/i18n/locales';

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
    title: 'How does Six Sigma lead manual testing into automatic testing?',
    metaDescription:
      "What Six Sigma is, and why manual testing is itself the variation problem it targets — a person doesn't reliably produce the same result twice, which is exactly what automating a check eliminates.",
    heading: 'How does Six Sigma lead manual testing into automatic testing?',
    introP:
      "is a discipline for reducing defects by reducing variation: the same input should reliably produce the same output, and where it doesn't, that variation gets measured and root-caused rather than shrugged off. It started in manufacturing and now gets applied to any repeatable process — software delivery included.",
    belongsP:
      "Here's why that belongs on a testing page: manual testing is itself the variation problem Six Sigma targets. A person running the same check by hand doesn't reliably produce the same result every time — attention lapses, a step gets skipped, a borderline case gets judged differently on a Friday afternoon than a Monday morning. Turning that check into an automatic test is a direct application of the Six Sigma mindset: the same input now reliably produces the same output, every time, because a script doesn't have an off day.",
    relocateP:
      "That doesn't make automatic tests immune to variation — it relocates it. A flaky automatic test, one that passes and fails on the same code with nothing changed, is exactly the kind of variation Six Sigma treats as a defect worth root-causing, not a nuisance to re-run until it goes green.",
    learnMorePre: "Learn more at iSixSigma's ",
    learnMoreLinkText: 'getting-started guide',
    learnMorePost: '.',
    askAiHeading: 'Ask AI ideas',
    askAi: [
      "What does 'Six Sigma' actually mean, in plain terms, and why would reducing 'variation' matter for software testing specifically?",
      'How is manual testing itself a source of variation, in the Six Sigma sense, compared to an automatic test that runs the same way every time?',
      "How would I apply Six Sigma's idea of 'root-causing variation' to one specific flaky automatic test, instead of just re-running it until it passes?"
    ],
    nextLabel: 'Next: what is continuous integration automatic testing? →'
  };

  // No British/American/Oxford spelling divergence occurs in this page's
  // vocabulary, so all four English locales share one copy. See
  // spec/locales/index.md.
  const CY: Messages = {
    title: "Sut mae Six Sigma yn arwain profi â llaw i mewn i brofi awtomatig?",
    metaDescription:
      "Beth yw Six Sigma, a pham mae profi â llaw ei hun yn broblem amrywio y mae'n ei thargedu — nid yw person yn cynhyrchu'r un canlyniad yn ddibynadwy ddwywaith, sef yn union yr hyn y mae awtomeiddio gwiriad yn ei ddileu.",
    heading: "Sut mae Six Sigma yn arwain profi â llaw i mewn i brofi awtomatig?",
    introP:
      "yw disgyblaeth ar gyfer lleihau diffygion drwy leihau amrywiad: dylai'r un mewnbwn gynhyrchu'r un allbwn yn ddibynadwy, a lle nad yw'n gwneud hynny, mae'r amrywiad hwnnw'n cael ei fesur a'i wraidd-achosi yn hytrach na'i anwybyddu. Dechreuodd mewn gweithgynhyrchu ac erbyn hyn caiff ei gymhwyso i unrhyw broses ailadroddadwy — traddodi meddalwedd yn gynwysedig.",
    belongsP:
      "Dyma pam mae hynny'n perthyn ar dudalen brofi: mae profi â llaw ei hun yn broblem amrywio y mae Six Sigma yn ei thargedu. Nid yw person yn rhedeg yr un gwiriad â llaw yn cynhyrchu'r un canlyniad yn ddibynadwy bob tro — mae sylw'n llithro, mae cam yn cael ei sgipio, mae achos ymylol yn cael ei farnu'n wahanol brynhawn dydd Gwener na bore dydd Llun. Mae troi'r gwiriad hwnnw'n brawf awtomatig yn gymhwysiad uniongyrchol o feddylfryd Six Sigma: mae'r un mewnbwn nawr yn cynhyrchu'r un allbwn yn ddibynadwy, bob tro, oherwydd nid oes gan sgript ddiwrnod gwael.",
    relocateP:
      "Nid yw hynny'n gwneud profion awtomatig yn imiwn i amrywiad — mae'n ei adleoli. Mae prawf awtomatig ansefydlog, un sy'n pasio ac yn methu ar yr un cod heb ddim wedi newid, yn union y math o amrywiad y mae Six Sigma yn ei drin fel diffyg sy'n werth ei wraidd-achosi, nid yn niwsans i'w ailredeg nes iddo droi'n wyrdd.",
    learnMorePre: 'Dysgwch fwy yn ',
    learnMoreLinkText: 'arweiniad cychwyn-arni iSixSigma',
    learnMorePost: '.',
    askAiHeading: 'Syniadau gofyn i AI',
    askAi: [
      "Beth mae 'Six Sigma' yn ei olygu mewn gwirionedd, mewn termau plaen, a pham fyddai lleihau 'amrywiad' o bwys i brofi meddalwedd yn benodol?",
      "Sut mae profi â llaw ei hun yn ffynhonnell amrywiad, yn ystyr Six Sigma, o'i gymharu â phrawf awtomatig sy'n rhedeg yr un ffordd bob tro?",
      "Sut fyddwn i'n cymhwyso syniad Six Sigma o 'wraidd-achosi amrywiad' i un prawf awtomatig ansefydlog penodol, yn lle ei ailredeg nes iddo basio?"
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
    askAiHeading: '向 AI 提问的想法',
    askAi: [
      '用简单的话说，“六西格玛”到底是什么意思，为什么减少“变异”对软件测试尤其重要？',
      '从六西格玛的角度看，相比每次都以同样方式运行的自动化测试，人工测试本身是如何成为变异来源的？',
      '我该如何把六西格玛“追溯变异根本原因”的理念，应用到某一个具体的不稳定自动化测试上，而不是反复重跑直到它通过？'
    ],
    nextLabel: '下一步：什么是持续集成自动化测试？→'
  };

  const MESSAGES: Record<Locale, Messages> = {
    'en-001': EN_001,
    'en-gb': EN_001,
    'en-gb-oxendict': EN_001,
    'en-us': EN_001,
    'cy-gb': CY,
    'cy-001': CY,
    'zh-cn': ZH
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
