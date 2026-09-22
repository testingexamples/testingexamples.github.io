<script lang="ts">
  import {
    SectionHeading,
    SummaryList,
    SummaryListItem,
    Separator,
    InformationCallout,
    CallToAction,
    CodeBlock
  } from 'lily-design-system-svelte-headless';
  import {
    REPO,
    LICENSE,
    GENERIC_DEMO_REPOS,
    NHS_WALES_DEMO_REPOS,
    DEMO_MATRIX,
    DEMO_MATRIX_COUNT,
    demoRepoUrl
  } from '$lib/site';
  import { localeHref } from '$lib/i18n/paths';
  import type { Locale } from '$lib/i18n/locales';

  let { locale }: { locale: Locale } = $props();

  type Messages = {
    title: string;
    metaDescription: string;
    heading: string;
    intro: string;
    whatForHeading: string;
    whatForP: string;
    factsLabel: string;
    factName: string;
    factLicence: string;
    factAuthor: string;
    factRepository: string;
    factFixtureContract: string;
    factFixtureContractSuffix: string;
    matrixHeading: string;
    matrixP1: string;
    matrixP2: string;
    tableCaption: string;
    columnTool: string;
    columnLanguage: string;
    columnThisSite: string;
    notBuilt: string;
    walkthroughsHeading: string;
    workedExampleHeading: string;
    workedExampleSuffix: string;
    builtHeading: string;
    builtP: string;
    designSystemLabel: string;
    designSystemP: string;
    exceptionP: string;
    runLocallyLabel: string;
    repoCta: string;
  };

  const EN_001: Messages = {
    title: 'About',
    metaDescription: `About Testing Examples: what it is, the ${DEMO_MATRIX_COUNT} sibling demo repos it supports, and how this site is built.`,
    heading: 'About',
    intro: 'Testing Examples provides free open source testing examples for browser automation.',
    whatForHeading: 'What this site is for',
    whatForP:
      'This home page is a deliberately plain page of HTML fixtures — elements with known ids, names, classes, link text, lists, and form inputs — for anyone learning or exercising browser automation tools such as Selenium WebDriver, WebdriverIO, or Playwright. It is meant to be a stable target: the same markup, the same identifiers, the same visible text, every time.',
    factsLabel: 'Project facts',
    factName: 'Name',
    factLicence: 'Licence',
    factAuthor: 'Author',
    factRepository: 'Repository',
    factFixtureContract: 'Fixture contract',
    factFixtureContractSuffix: 'in the repository',
    matrixHeading: `${DEMO_MATRIX_COUNT} demo repos, three tools times up to four languages times up to four targets`,
    matrixP1:
      "Every sibling repo pairs one browser-automation tool (Selenium, WebdriverIO, or Playwright) with one language (JavaScript, Python, Rust, or TypeScript) against one target. Two targets are real, runnable demos: this site's own fixture page (five of these repos — the ones whose exact ids, names, classes, and text this site's AGENTS.md and spec/index.md treat as a contract) and the real, public nhs.wales government site. The other two targets, Google Search and Google Maps, are illustrative only — each such repo's own AGENTS.md states plainly that its code must never be executed against the live site, since Google's Terms of Service restrict automated querying; see",
    matrixP2:
      'for the same pattern shown directly on this site. Two cells are empty on purpose — Selenium TypeScript and WebdriverIO TypeScript have no NHS Wales variant.',
    tableCaption: 'The complete demo repo family, one row per tool and language, one column per target',
    columnTool: 'Tool',
    columnLanguage: 'Language',
    columnThisSite: 'This site',
    notBuilt: 'Not built for this language',
    walkthroughsHeading: 'Locator-strategy walkthroughs (target this site)',
    workedExampleHeading: 'A worked real-world example (targets nhs.wales)',
    workedExampleSuffix: 'The other five NHS Wales repos follow the same pattern in the table above.',
    builtHeading: 'How the site is built',
    builtP:
      'This site is a SvelteKit project using @sveltejs/adapter-static, prerendered to plain HTML and deployed to GitHub Pages by GitHub Actions on every push to main.',
    designSystemLabel: 'Design system',
    designSystemP:
      "The components come from the Lily Design System — Svelte components that render semantic HTML and correct ARIA, carrying one stable class hook each. This site uses Lily's own official themes too: all 45 files under static/assets/themes/, copied verbatim from Lily's repository, each a complete, self-contained stylesheet styling every one of Lily's ~492 components — not just two hand-picked colours. static/assets/style.css therefore no longer styles Lily's own component hooks at all; it holds a small alias layer, this site's own header/nav/footer layout (not Lily components), and a handful of explicitly documented exceptions where a Lily default didn't suit this site's specific layout — see that file's own header comment for exactly what and why. Lily's ThemePicker swaps between the 45 themes live.",
    exceptionP:
      "The one exception is the home page's fixture section (Id Examples through Form Input Examples): those elements are kept as plain HTML, not Lily components, so their ids, names, classes, and text stay exactly what the sibling demo repos expect.",
    runLocallyLabel: 'Run this site locally',
    repoCta: 'The repository on GitHub'
  };

  // No British/American/Oxford spelling divergence occurs in this page's
  // prose (LICENSE stays "Licence" the British way even for en-us, since
  // it is this project's own SPDX-style project fact, not free prose — see
  // spec/locales/index.md), so all four English locales share one copy.
  const CY: Messages = {
    title: 'Ynghylch',
    metaDescription: `Ynghylch Testing Examples: beth ydyw, y ${DEMO_MATRIX_COUNT} o ystorfeydd arddangos chwaer y mae'n eu cefnogi, a sut mae'r safle hwn wedi'i adeiladu.`,
    heading: 'Ynghylch',
    intro: "Mae Testing Examples yn darparu enghreifftiau profi rhad ac am ddim, yn ffynhonnell agored, ar gyfer awtomeiddio porwr.",
    whatForHeading: "Diben y safle hwn",
    whatForP:
      "Mae'r dudalen gartref hon yn dudalen fwriadol blaen o ffwythiannau HTML — elfennau ag ids, names, classes, testun dolen, rhestrau, a mewnbynnau ffurflen hysbys — ar gyfer unrhyw un sy'n dysgu neu'n ymarfer offer awtomeiddio porwr fel Selenium WebDriver, WebdriverIO, neu Playwright. Bwriedir iddi fod yn darged sefydlog: yr un marcio, yr un dynodwyr, yr un testun gweladwy, bob tro.",
    factsLabel: "Ffeithiau'r prosiect",
    factName: 'Enw',
    factLicence: 'Trwydded',
    factAuthor: 'Awdur',
    factRepository: 'Ystorfa',
    factFixtureContract: 'Cytundeb ffwythiant',
    factFixtureContractSuffix: 'yn yr ystorfa',
    matrixHeading: `${DEMO_MATRIX_COUNT} o ystorfeydd arddangos, tri offeryn wedi'u lluosi â hyd at bedair iaith wedi'u lluosi â hyd at bedwar targed`,
    matrixP1:
      "Mae pob ystorfa chwaer yn paru un offeryn awtomeiddio porwr (Selenium, WebdriverIO, neu Playwright) ag un iaith (JavaScript, Python, Rust, neu TypeScript) yn erbyn un targed. Mae dau darged yn arddangosiadau go iawn, y gellir eu rhedeg: tudalen ffwythiant y safle hwn ei hun (pump o'r ystorfeydd hyn — y rhai y mae AGENTS.md a spec/index.md y safle hwn yn trin eu ids, names, classes, a thestun union fel cytundeb) a safle llywodraeth cyhoeddus go iawn nhs.wales. Mae'r ddau darged arall, Google Search a Google Maps, yn enghreifftiol yn unig — mae AGENTS.md pob un o'r ystorfeydd hynny'n datgan yn glir na ddylid byth redeg ei god yn erbyn y safle byw, gan fod Telerau Gwasanaeth Google yn cyfyngu ymholi awtomataidd; gweler",
    matrixP2:
      "am yr un patrwm wedi'i ddangos yn uniongyrchol ar y safle hwn. Mae dwy gell yn wag yn fwriadol — nid oes gan Selenium TypeScript na WebdriverIO TypeScript amrywiad NHS Wales.",
    tableCaption: "Y teulu ystorfeydd arddangos cyflawn, un rhes fesul offeryn ac iaith, un golofn fesul targed",
    columnTool: 'Offeryn',
    columnLanguage: 'Iaith',
    columnThisSite: 'Y safle hwn',
    notBuilt: "Heb ei adeiladu ar gyfer yr iaith hon",
    walkthroughsHeading: "Teithiau strategaeth-lleolydd (yn targedu'r safle hwn)",
    workedExampleHeading: 'Enghraifft go iawn wedi’i gweithio (yn targedu nhs.wales)',
    workedExampleSuffix: "Mae'r pum ystorfa NHS Wales arall yn dilyn yr un patrwm yn y tabl uchod.",
    builtHeading: "Sut mae'r safle wedi'i adeiladu",
    builtP:
      "Mae'r safle hwn yn brosiect SvelteKit sy'n defnyddio @sveltejs/adapter-static, wedi'i ragrenderu'n HTML plaen ac wedi'i ddefnyddio i GitHub Pages gan GitHub Actions ar bob push i main.",
    designSystemLabel: 'System ddylunio',
    designSystemP:
      "Daw'r cydrannau o'r Lily Design System — cydrannau Svelte sy'n rendro HTML semantig ac ARIA cywir, gan gario un bachyn dosbarth sefydlog yr un. Mae'r safle hwn hefyd yn defnyddio themâu swyddogol Lily ei hun: pob un o'r 45 ffeil o dan static/assets/themes/, wedi'u copïo air am air o ystorfa Lily, pob un yn daflen arddull gyflawn, hunangynhwysol sy'n arddulio pob un o ~492 cydran Lily — nid dim ond dau liw wedi'u dewis â llaw. Nid yw static/assets/style.css felly'n arddulio bachau cydrannau Lily ei hun mwyach o gwbl; mae'n dal haen alias fach, cynllun pennawd/llywio/troedyn y safle hwn ei hun (nid cydrannau Lily), a llond dwrn o eithriadau wedi'u dogfennu'n benodol lle nad oedd rhagosodiad Lily'n gweddu i gynllun penodol y safle hwn — gweler sylwad pennawd y ffeil honno ei hun am yn union beth a pham. Mae ThemePicker Lily'n cyfnewid rhwng y 45 thema'n fyw.",
    exceptionP:
      "Yr unig eithriad yw adran ffwythiant y dudalen gartref (Id Examples hyd at Form Input Examples): cedwir yr elfennau hynny fel HTML plaen, nid cydrannau Lily, fel bod eu ids, names, classes, a thestun yn aros yn union fel y mae'r ystorfeydd arddangos chwaer yn eu disgwyl.",
    runLocallyLabel: "Rhedeg y safle hwn yn lleol",
    repoCta: "Yr ystorfa ar GitHub"
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

  const TARGET_COLUMNS = $derived([
    { key: 'generic', label: m.columnThisSite },
    { key: 'googleSearch', label: 'Google Search' },
    { key: 'googleMaps', label: 'Google Maps' },
    { key: 'nhsWales', label: 'NHS Wales' }
  ] as const);
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
  <SectionHeading class="section-heading-start" heading={m.whatForHeading} level={2} />

  <p>{m.whatForP}</p>

  <SummaryList label={m.factsLabel}>
    <SummaryListItem term={m.factName}><code>Testing Examples</code></SummaryListItem>
    <SummaryListItem term={m.factLicence}>{LICENSE}</SummaryListItem>
    <SummaryListItem term={m.factAuthor}>Joel Parker Henderson</SummaryListItem>
    <SummaryListItem term={m.factRepository}><a href={REPO}>{REPO}</a></SummaryListItem>
    <SummaryListItem term={m.factFixtureContract}
      ><code>spec/index.md</code> {m.factFixtureContractSuffix}</SummaryListItem
    >
  </SummaryList>
</section>

<Separator label="Section break" />

<section class="section prose">
  <SectionHeading class="section-heading-start" heading={m.matrixHeading} level={2} />

  <p>
    {m.matrixP1}
    <a href={localeHref(locale, 'examples-google-search')}>Google Search examples</a> and
    <a href={localeHref(locale, 'examples-google-maps')}>Google Maps examples</a>
    {m.matrixP2}
  </p>

  <div class="table-scroll">
    <table class="demo-matrix">
      <caption class="screen-reader-span">
        {m.tableCaption}
      </caption>
      <thead>
        <tr>
          <th scope="col">{m.columnTool}</th>
          <th scope="col">{m.columnLanguage}</th>
          {#each TARGET_COLUMNS as column (column.key)}
            <th scope="col">{column.label}</th>
          {/each}
        </tr>
      </thead>
      <tbody>
        {#each DEMO_MATRIX as family (family.tool + family.language)}
          <tr>
            <th scope="row">{family.tool}</th>
            <td>{family.language}</td>
            {#each TARGET_COLUMNS as column (column.key)}
              {@const entry = family[column.key]}
              <td>
                {#if entry}
                  <a
                    href={demoRepoUrl(entry)}
                    aria-label="{family.tool} {family.language} for {column.label}"
                    >{entry.org}/<wbr /><code>{entry.name}</code></a
                  >
                {:else}
                  <span aria-hidden="true">—</span>
                  <span class="screen-reader-span">{m.notBuilt}</span>
                {/if}
              </td>
            {/each}
          </tr>
        {/each}
      </tbody>
    </table>
  </div>

  <h3>{m.walkthroughsHeading}</h3>
  <ul class="repo-list">
    {#each GENERIC_DEMO_REPOS as repo (repo.url)}
      <li>
        <a href={repo.url}><code>{repo.name}</code></a> — {repo.description}
      </li>
    {/each}
  </ul>

  <h3>{m.workedExampleHeading}</h3>
  <ul class="repo-list">
    {#each NHS_WALES_DEMO_REPOS.slice(0, 1) as repo (repo.url)}
      <li>
        <a href={repo.url}><code>{repo.name}</code></a> — {repo.description}. {m.workedExampleSuffix}
      </li>
    {/each}
  </ul>
</section>

<Separator label="Section break" />

<section class="section prose">
  <SectionHeading class="section-heading-start" heading={m.builtHeading} level={2} />

  <p>{m.builtP}</p>

  <InformationCallout label={m.designSystemLabel}>
    <p>{m.designSystemP}</p>
  </InformationCallout>

  <p>{m.exceptionP}</p>

  <CodeBlock label={m.runLocallyLabel}>
    <pre><code>{`git clone ${REPO}
cd testingexamples.github.io
pnpm install
pnpm dev`}</code></pre>
  </CodeBlock>

  <p style="margin-top: 2rem;">
    <CallToAction class="button button-primary" href={REPO}>{m.repoCta}</CallToAction>
  </p>
</section>
