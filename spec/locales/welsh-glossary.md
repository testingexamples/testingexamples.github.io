# Welsh glossary

Terminology for the Welsh locales (`cy-001`, `cy-gb`, which share one translation per page).
Source of authority: the Welsh Government's TermCymru term bank
(`2026-07-02 - TermCymru.csv`, from <https://gov.wales/>). In that file `Statws`
is the term's standing (`A` is most established, then `B`, then `C`) and
`Pwnc` its subject; `TGCh` is information and communications technology, the
subject most relevant here.

## Rules

1. Where TermCymru has a term for the English word, use it — prefer status
   `A`, then `B`, then `C`, and prefer subject `TGCh`.
2. Where TermCymru has no entry (most testing jargon), keep the site's
   existing term if it is natural Welsh, and use it **identically** on every page.
3. Never translate: `id`/`name`/`class` attributes, code and code comments,
   proper nouns and product or methodology names (Selenium, Playwright,
   WebdriverIO, GitHub, Google, DevOps, Lean Six Sigma, Given-When-Then,
   Gherkin), or the brand name "Testing Examples". Welsh URL slugs in
   `src/lib/i18n/topics.ts` are published URLs; changing one needs a redirect,
   so do not change a slug as part of a wording pass.
4. Mutation rules apply after the changed word: `ar ôl`, `i + soft`, `o + soft`,
   feminine nouns soften after `y`, and so on.

## Terms confirmed in TermCymru

| English | Welsh | Notes (`Statws`, `Pwnc`) |
| --- | --- | --- |
| test (verb) | profi | B, TGCh |
| test (noun) | prawf | B, TGCh; plural `profion` |
| (software) testing | profi | derived from `profi`, as in `profi derbynioldeb` (acceptance testing) |
| automatic | awtomatig | A, TGCh |
| automation | awtomatiaeth | B, TGCh |
| automatic checking | gwirio awtomatig | B, TGCh |
| browser | porwr | B, TGCh |
| bug | byg | B, TGCh |
| debug | dadfygio | B, TGCh |
| check box | blwch ticio | B, TGCh |
| select | dewis | B, TGCh |
| script | sgript | B, TGCh |
| framework | fframwaith | B (not `ffrâmwaith`) |
| pipeline | piblinell | A |
| source code | cod ffynhonnell | B, TGCh |
| open source | cod agored | B, TGCh |
| code (noun) | cod | A, TGCh; verb `codio` |
| repository | ystorfa | C, TGCh |
| version control | rheoli fersiynau | C |
| software | meddalwedd | B, TGCh; feminine |
| developer | datblygwr | A |
| artificial intelligence | deallusrwydd artiffisial | A, TGCh |
| machine learning | dysgu peirianyddol | A, TGCh |
| website | gwefan | B, TGCh; feminine |
| web page | tudalen we | B, TGCh |
| link (noun) | dolen | C, TGCh; the verb is `cysylltu` |
| button | botwm | B, TGCh |
| form (web form) | ffurflen | A |
| input | mewnbwn | B, TGCh |
| heading | pennawd | A |
| header / footer | pennyn / troedyn | B, TGCh |
| menu | dewislen | B, TGCh |
| font | ffont | B, TGCh |
| text size | maint testun | B, TGCh |
| theme | thema | `gweithredu thema` (apply theme), B, TGCh |
| example | enghraifft | B, TGCh |
| feedback | adborth | B |
| performance | perfformiad | B, TGCh |
| security | diogelwch | B |
| accessibility | hygyrchedd | `meddalwedd hygyrchedd`, B, TGCh |
| usability | defnyddioldeb | B |
| timeout | terfyn amser | B, TGCh |
| quality | ansawdd | `ansawdd lliw`, B, TGCh (not `rhinwedd`) |
| waste | gwastraff | A |
| variation | amrywiad | A |
| throughput | cyfradd brosesu | B |
| merge | uno | A |
| build (verb) | adeiladu | B, TGCh |
| coverage | cwmpas | C, TGCh |
| element | elfen | B, TGCh |

## Decisions where TermCymru is silent or needs adapting

Keep these consistent across all pages.

| English | Welsh | Why |
| --- | --- | --- |
| browser automation (noun) | awtomatiaeth porwr | TermCymru `awtomatiaeth` (B, TGCh); the verb stays `awtomeiddio` |
| browser automatic testing | profi awtomatig porwr | mirrors the English title |
| bug | byg | TermCymru (B, TGCh); not `nam` |
| defect (Six Sigma sense) | diffyg | |
| unit / integration test | prawf uned / prawf integreiddio | |
| end-to-end | o'r dechrau i'r diwedd | |
| continuous integration | integreiddio parhaus | |
| flaky test | prawf ansefydlog | not `pigog` |
| regression | atchweliad | |
| assertion / to assert | honiad / gwirio | |
| fixture (HTML fixtures, fixture page) | cynnwys sefydlog | TermCymru `gosodion` means fixtures in the local-government sense, so it is wrong here; never `ffwythiant` (function) |
| cycle time | amser cylchred | `cylchred` is TermCymru for cycle (B, TGCh) |
| lead time | amser arwain | `amseroedd arwain` (C) |
| throughput | cyfradd brosesu | TermCymru (B) |
| work in progress | gwaith ar y gweill | |
| technical debt | dyled dechnegol | |
| front end / back end | ochr flaen / ochr gefn | TermCymru `meddalwedd ochr flaen` / `ochr gefn` |
| hallucinate | rhith-weld | TermCymru (B) |
| acceptance criteria | meini prawf derbyn | cf. `profi derbynioldeb` |
| artificial intelligence | deallusrwydd artiffisial (DA) | spell out on first use, `DA` after; never `AI` |
| site (the website) | gwefan (feminine) | TermCymru `gwefan`; `safle` only for "position" |
| home page | hafan | TermCymru `home page` is `hafan`, so never `tudalen gartref` |
| pull request | cais tynnu | |
| push (git) | gwthio | |
| deploy | defnyddio | software deployment; the site's own publishing is also `defnyddio` |
| checkout | desg dalu / tudalen dalu | TermCymru |
| main branch | y brif gangen | |
| identifier | dynodwr | deliberate departure: TermCymru has `dyfais adnabod`, which reads as a physical device |
| Six Sigma page title | Sut mae Six Sigma yn arwain profi â llaw at brofi awtomatig? | matches the English title, and `Lean` is not part of it |
| menu / main navigation label | dewislen / Prif ddewislen | |

## Changes made in the 2026-10 TermCymru pass

Fixed outright mistranslations: `ffwythiannau HTML` for HTML fixtures,
`cefn-drws` (backdoor) for "back end", `trwygyswllt` for throughput,
`penben-i-benagos` for end-to-end, `p'un a ydych erioed wedi ysgrifennu` (which
inverted "never written a line of code"), `tudalen gartref` for the home
page, and `bỳg` with a stray accent. Standardised `awtomeiddio` (noun) to
`awtomatiaeth`, `AI` to `DA`, `safle` to `gwefan`, and `nam` (for bug) to `byg`.
Welsh slugs in `src/lib/i18n/topics.ts` were deliberately left alone, since
they are published URLs.
