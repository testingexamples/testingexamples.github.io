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

  const MESSAGES: Record<Locale, Messages> = {
    'en-001': EN_001,
    'en-gb': EN_001,
    'en-gb-oxendict': EN_001,
    'en-us': EN_001,
    'cy-gb': CY,
    'cy-001': CY
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
