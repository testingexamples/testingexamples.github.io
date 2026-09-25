<script lang="ts">
  import { SectionHeading, CallToAction } from 'lily-design-system-svelte-headless';
  import { localeHref } from '$lib/i18n/paths';
  import type { Locale } from '$lib/i18n/locales';

  let { locale }: { locale: Locale } = $props();

  type Messages = {
    title: string;
    metaDescription: string;
    heading: string;
    intro: string;
    compareHeading: string;
    manualLabel: string;
    manualP: string;
    automaticLabel: string;
    automaticP: string;
    complementPre: string;
    exploratoryLabel: string;
    complementPost: string;
    askAiHeading: string;
    askAi: string[];
    nextLabel: string;
  };

  const EN_001: Messages = {
    title: 'What is automatic testing?',
    metaDescription:
      'What automatic (automated) testing is, and how it differs from and complements manual testing.',
    heading: 'What is automatic testing?',
    intro:
      'A plain-language introduction to automatic testing, and how it differs from and complements manual testing.',
    compareHeading: 'Manual testing vs. automatic testing',
    manualLabel: 'Manual testing',
    manualP:
      "is a person sitting down at a keyboard, clicking through an application, and checking with their own eyes that it behaves correctly: does the login form accept valid credentials, does the search box return results, does the checkout button actually charge the right amount. It is slow, it does not scale, and it depends on that person's attention and memory every single time.",
    automaticLabel: 'Automatic testing',
    automaticP:
      '(also called automated testing) is a program — written once by a person — that does the same checks itself: it opens the application (or calls a function, or drives a real browser), performs some actions, and asserts that the result matches what was expected. Once written, that program can run in seconds, as often as anyone likes, without ever getting tired, distracted, or bored of clicking the same button for the thousandth time.',
    complementPre:
      'The two are not rivals so much as complements. Automatic tests are extremely good at repeating exactly the same check, forever, cheaply. Manual testing — in particular ',
    exploratoryLabel: 'exploratory testing',
    complementPost:
      ', where a skilled person deliberately pokes at an application looking for the unexpected — is good at finding the kinds of problems nobody thought to write a check for. Mature teams use both: automation for the checks that must never regress, and human judgement for everything a checklist cannot anticipate.',
    askAiHeading: 'Ask AI ideas',
    askAi: [
      "What's the practical difference between manual testing and automatic testing, and why would a team bother writing a script instead of just clicking through the app by hand?",
      'My team does everything by manual testing right now — how do we decide which checks are worth automating first?',
      'How do experienced teams decide what to deliberately keep as manual, exploratory testing even after most of their checks are automated?'
    ],
    nextLabel: 'Next: what is the purpose of automatic testing? →'
  };

  // No British/American/Oxford spelling divergence occurs in this page's
  // vocabulary (no colour/organise/programme-style words), so all four
  // English locales share one copy of the prose. See spec/locales/index.md.
  const CY: Messages = {
    title: 'Beth yw profi awtomatig?',
    metaDescription:
      "Beth yw profi awtomatig (wedi'i awtomeiddio), a sut mae'n wahanol i brofi â llaw ac yn ei ategu.",
    heading: 'Beth yw profi awtomatig?',
    intro:
      "Cyflwyniad iaith blaen i brofi awtomatig, a sut mae'n wahanol i brofi â llaw ac yn ei ategu.",
    compareHeading: 'Profi â llaw yn erbyn profi awtomatig',
    manualLabel: 'Profi â llaw',
    manualP:
      "yw person yn eistedd wrth fysellfwrdd, yn clicio drwy gymhwysiad, ac yn gwirio â'u llygaid eu hunain ei fod yn ymddwyn yn gywir: a yw'r ffurflen mewngofnodi'n derbyn manylion dilys, a yw'r blwch chwilio'n dychwelyd canlyniadau, a yw'r botwm talu wir yn codi'r swm cywir. Mae'n araf, nid yw'n graddadwy, ac mae'n dibynnu ar sylw a chof y person hwnnw bob tro.",
    automaticLabel: 'Profi awtomatig',
    automaticP:
      "(a elwir hefyd yn brofi wedi'i awtomeiddio) yw rhaglen — a ysgrifennwyd unwaith gan berson — sy'n gwneud yr un gwiriadau ei hun: mae'n agor y cymhwysiad (neu'n galw ffwythiant, neu'n gyrru porwr go iawn), yn cyflawni rhai camau, ac yn cadarnhau bod y canlyniad yn cyfateb i'r hyn a ddisgwylid. Unwaith y'i hysgrifennir, gall y rhaglen honno redeg mewn eiliadau, mor aml ag y mynn unrhyw un, heb byth flino, cael ei thynnu sylw, na diflasu ar glicio'r un botwm am y filfed tro.",
    complementPre:
      "Nid yw'r ddau yn wrthwynebwyr gymaint ag y maent yn ategu ei gilydd. Mae profion awtomatig yn arbennig o dda am ailadrodd yr un gwiriad yn union, am byth, yn rhad. Mae profi â llaw — yn enwedig ",
    exploratoryLabel: 'brofi archwiliadol',
    complementPost:
      ", lle mae person medrus yn pwyo cymhwysiad yn fwriadol i chwilio am yr annisgwyl — yn dda am ddod o hyd i'r math o broblemau na feddyliodd neb i ysgrifennu gwiriad ar eu cyfer. Mae timau aeddfed yn defnyddio'r ddau: awtomeiddio ar gyfer y gwiriadau na chaiff byth ddirywio, a barn ddynol ar gyfer popeth na all rhestr wirio ei ragweld.",
    askAiHeading: 'Syniadau gofyn i AI',
    askAi: [
      "Beth yw'r gwahaniaeth ymarferol rhwng profi â llaw a phrofi awtomatig, a pham byddai tîm yn trafferthu ysgrifennu sgript yn lle clicio drwy'r ap â llaw?",
      "Mae fy nhîm yn gwneud popeth drwy brofi â llaw ar hyn o bryd — sut ydyn ni'n penderfynu pa wiriadau sy'n werth eu hawtomeiddio gyntaf?",
      "Sut mae timau profiadol yn penderfynu beth i'w gadw'n fwriadol fel profi â llaw, archwiliadol, hyd yn oed ar ôl i'r rhan fwyaf o'u gwiriadau gael eu hawtomeiddio?"
    ],
    nextLabel: 'Nesaf: beth yw diben profi awtomatig? →'
  };

  const ZH: Messages = {
    title: '什么是自动化测试？',
    metaDescription: '什么是自动化测试，以及它与人工测试的区别和互补之处。',
    heading: '什么是自动化测试？',
    intro: '一份通俗易懂的自动化测试入门介绍，说明它与人工测试有何不同，又如何与之互补。',
    compareHeading: '人工测试与自动化测试',
    manualLabel: '人工测试',
    manualP:
      '是指一个人坐在键盘前，一步步点击一个应用程序，并用自己的眼睛检查它的行为是否正确：登录表单能否接受有效的凭据，搜索框能否返回结果，结账按钮是否真的收取了正确的金额。这种方式很慢，无法规模化，而且每一次都依赖于那个人的注意力和记忆力。',
    automaticLabel: '自动化测试',
    automaticP:
      '（也叫自动测试）是一个程序——由某人编写一次——自己完成同样的检查：它打开应用程序（或调用一个函数，或驱动一个真实的浏览器），执行一些操作，并断言结果与预期相符。程序一旦写好，就可以在几秒钟内运行，想运行多少次就运行多少次，永远不会疲倦、分心，也不会因为第一千次点击同一个按钮而感到厌烦。',
    complementPre:
      '这两者与其说是竞争关系，不如说是互补关系。自动化测试非常擅长永远、廉价地重复完全相同的检查。人工测试——尤其是',
    exploratoryLabel: '探索性测试',
    complementPost:
      '，即由一个熟练的人有意地在应用程序中摸索，寻找意料之外的问题——则擅长发现那些没有人想到要为之编写检查的问题。成熟的团队两者都会用：用自动化来保证绝不能出现回归的检查，用人的判断力来处理任何检查清单都无法预见的一切情况。',
    askAiHeading: '向 AI 提问的想法',
    askAi: [
      '人工测试和自动化测试之间实际的区别是什么？为什么团队会费心编写脚本，而不是直接用手点一遍应用？',
      '我的团队目前所有测试都靠人工完成——我们该如何决定先自动化哪些检查？',
      '经验丰富的团队是如何决定，即使在大多数检查都已自动化之后，仍然刻意保留哪些人工、探索性的测试？'
    ],
    nextLabel: '下一步：自动化测试的目的是什么？→'
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
  <p>{m.intro}</p>
</div>

<section class="section prose">
  <SectionHeading class="section-heading-start" heading={m.compareHeading} level={2} />

  <p><strong>{m.manualLabel}</strong> {m.manualP}</p>

  <p><strong>{m.automaticLabel}</strong> {m.automaticP}</p>

  <p>{m.complementPre}<em>{m.exploratoryLabel}</em>{m.complementPost}</p>

  <h3>{m.askAiHeading}</h3>
  <ul>
    {#each m.askAi as question (question)}
      <li>{question}</li>
    {/each}
  </ul>

  <p style="margin-top: 2rem;">
    <CallToAction class="button button-primary" href={localeHref(locale, 'what-is-the-purpose-of-automatic-testing')}
      >{m.nextLabel}</CallToAction
    >
  </p>
</section>
