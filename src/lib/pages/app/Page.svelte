<script lang="ts">
  import {
    GrailLayout,
    GrailLayoutTopHeader,
    GrailLayoutLeftAside,
    GrailLayoutCenterMain,
    GrailLayoutRightAside,
    GrailLayoutBottomFooter,
    NavigationMenu,
    MenuBar,
    MenuBarButton,
    Icon,
    TextInputWithSearch,
    TabBar,
    TabBarButton,
    TabPanel,
    Form,
    Field,
    TextInput,
    PasswordInput,
    SubmitInput
  } from 'lily-design-system-svelte-headless';
  import { localeHref } from '$lib/i18n/paths';
  import type { Locale } from '$lib/i18n/locales';

  let { locale }: { locale: Locale } = $props();

  type Messages = {
    title: string;
    metaDescription: string;
    heading: string;
    intro: string;
    demoAppLabel: string;
    navHome: string;
    navSettings: string;
    navSignOut: string;
    searchLabel: string;
    searchPlaceholder: string;
    aboutHeading: string;
    aboutP: string;
    signInHeading: string;
    signInCredsPre: string;
    signInCredsMid: string;
    signInCredsPost: string;
    usernameLabel: string;
    passwordLabel: string;
    signInSubmit: string;
    welcomeHeading: string;
    welcomeP: string;
    tabsLabel: string;
    tabAlfa: string;
    tabBravo: string;
    tabCharlie: string;
    tabAlfaPanel: string;
    tabBravoPanel: string;
    tabCharliePanel: string;
    relatedHeading: string;
    relatedGivenWhenThen: string;
    relatedHowToStart: string;
    relatedExamples: string;
    footerNavLabel: string;
    privacyPolicy: string;
    termsOfService: string;
    contact: string;
    msgSignInSuccess: string;
    msgSignInFailure: string;
    msgHomePage: string;
    msgSettingsPage: string;
    msgSignOut: string;
    msgSearchResultsFor: (query: string) => string;
    msgEnterSearchTerm: string;
  };

  const EN_001: Messages = {
    title: 'Demo App',
    metaDescription:
      'A small interactive demo app — a Lily Design System Grail layout, a simulated sign-in, an icon nav bar with a search box, and a three-tab panel — another stable target to practise browser automation on.',
    heading: 'Demo App',
    intro:
      "A small, self-contained demo application — sign in, click nav icons, search, switch tabs — built with Lily Design System components as another stable target to practise browser automation on. Nothing here is real: there's no backend, and nothing typed on this page leaves your device.",
    demoAppLabel: 'Demo App',
    navHome: 'Home',
    navSettings: 'Settings',
    navSignOut: 'Sign Out',
    searchLabel: 'Search the demo app',
    searchPlaceholder: 'Search…',
    aboutHeading: 'About this demo',
    aboutP:
      "Everything on this page is simulated in the browser: there's no real account and no real backend. It's a small, realistic app shell — sign-in, nav icons, a search box, and tabs — built specifically to have something more app-like than a fixture page to automate against.",
    signInHeading: 'Sign in',
    signInCredsPre: 'Use username ',
    signInCredsMid: ' and password ',
    signInCredsPost: '.',
    usernameLabel: 'Username',
    passwordLabel: 'Password',
    signInSubmit: 'Sign in',
    welcomeHeading: 'Welcome, guest',
    welcomeP: "You're signed in. Try the tabs below, or the nav icons and search box above.",
    tabsLabel: 'Demo tabs',
    tabAlfa: 'Alfa',
    tabBravo: 'Bravo',
    tabCharlie: 'Charlie',
    tabAlfaPanel: 'Alfa tab panel',
    tabBravoPanel: 'Bravo tab panel',
    tabCharliePanel: 'Charlie tab panel',
    relatedHeading: 'Related',
    relatedGivenWhenThen: 'Given-When-Then Examples',
    relatedHowToStart: 'How to start learning automatic testing?',
    relatedExamples: 'Examples',
    footerNavLabel: 'Demo app footer navigation',
    privacyPolicy: 'Privacy Policy',
    termsOfService: 'Terms of Service',
    contact: 'Contact',
    msgSignInSuccess: 'Sign in success.',
    msgSignInFailure: 'Sign in failure.',
    msgHomePage: 'Home Page',
    msgSettingsPage: 'Settings Page',
    msgSignOut: 'Sign Out',
    msgSearchResultsFor: (query) => `Search results for "${query}".`,
    msgEnterSearchTerm: 'Enter a search term.'
  };

  const EN_US: Messages = {
    ...EN_001,
    intro:
      "A small, self-contained demo application — sign in, click nav icons, search, switch tabs — built with Lily Design System components as another stable target to practice browser automation on. Nothing here is real: there's no backend, and nothing typed on this page leaves your device.",
    metaDescription:
      'A small interactive demo app — a Lily Design System Grail layout, a simulated sign-in, an icon nav bar with a search box, and a three-tab panel — another stable target to practice browser automation on.',
    aboutP:
      "Everything on this page is simulated in the browser: there's no real account and no real backend. It's a small, realistic app shell — sign-in, nav icons, a search box, and tabs — built specifically to have something more app-like than a fixture page to automate against."
  };

  const CY: Messages = {
    title: 'Ap Arddangos',
    metaDescription:
      "Ap arddangos rhyngweithiol bach — cynllun Grail o'r Lily Design System, mewngofnodi wedi'i efelychu, bar llywio eiconau â blwch chwilio, a phanel tri thab — targed sefydlog arall i ymarfer awtomeiddio porwr arno.",
    heading: 'Ap Arddangos',
    intro:
      "Cymhwysiad arddangos bach, hunangynhwysol — mewngofnodi, clicio eiconau llywio, chwilio, newid tabiau — wedi'i adeiladu â chydrannau Lily Design System fel targed sefydlog arall i ymarfer awtomeiddio porwr arno. Nid yw dim yma'n real: does dim cefn-drws, a does dim byd sy'n cael ei deipio ar y dudalen hon yn gadael eich dyfais.",
    demoAppLabel: 'Ap Arddangos',
    navHome: 'Hafan',
    navSettings: 'Gosodiadau',
    navSignOut: 'Allgofnodi',
    searchLabel: "Chwilio'r ap arddangos",
    searchPlaceholder: 'Chwilio…',
    aboutHeading: "Ynghylch yr arddangosiad hwn",
    aboutP:
      "Mae popeth ar y dudalen hon wedi'i efelychu yn y porwr: does dim cyfrif go iawn a does dim cefn-drws go iawn. Mae'n gragen ap fach, realistig — mewngofnodi, eiconau llywio, blwch chwilio, a thabiau — wedi'i hadeiladu'n benodol i gael rhywbeth mwy tebyg i ap na thudalen ffwythiant i awtomeiddio yn ei erbyn.",
    signInHeading: 'Mewngofnodi',
    signInCredsPre: 'Defnyddiwch enw defnyddiwr ',
    signInCredsMid: ' a chyfrinair ',
    signInCredsPost: '.',
    usernameLabel: 'Enw defnyddiwr',
    passwordLabel: 'Cyfrinair',
    signInSubmit: 'Mewngofnodi',
    welcomeHeading: 'Croeso, guest',
    welcomeP: "Rydych wedi mewngofnodi. Rhowch gynnig ar y tabiau isod, neu'r eiconau llywio a'r blwch chwilio uchod.",
    tabsLabel: 'Tabiau arddangos',
    tabAlfa: 'Alfa',
    tabBravo: 'Bravo',
    tabCharlie: 'Charlie',
    tabAlfaPanel: 'Panel tab Alfa',
    tabBravoPanel: 'Panel tab Bravo',
    tabCharliePanel: 'Panel tab Charlie',
    relatedHeading: 'Cysylltiedig',
    relatedGivenWhenThen: 'Enghreifftiau Given-When-Then',
    relatedHowToStart: 'Sut i ddechrau dysgu profi awtomatig?',
    relatedExamples: 'Enghreifftiau',
    footerNavLabel: 'Llywio troedyn ap arddangos',
    privacyPolicy: 'Polisi Preifatrwydd',
    termsOfService: 'Telerau Gwasanaeth',
    contact: 'Cysylltu',
    msgSignInSuccess: 'Llwyddiant mewngofnodi.',
    msgSignInFailure: 'Methiant mewngofnodi.',
    msgHomePage: 'Tudalen Gartref',
    msgSettingsPage: 'Tudalen Gosodiadau',
    msgSignOut: 'Allgofnodi',
    msgSearchResultsFor: (query) => `Canlyniadau chwilio am "${query}".`,
    msgEnterSearchTerm: 'Rhowch derm chwilio.'
  };

  const MESSAGES: Record<Locale, Messages> = {
    'en-001': EN_001,
    'en-gb': EN_001,
    'en-gb-oxendict': EN_001,
    'en-us': EN_US,
    'cy-gb': CY,
    'cy-001': CY
  };

  const m = $derived(MESSAGES[locale]);

  // The one "account" this simulated sign-in accepts. Nothing here is a
  // real credential check — everything on this page runs in the browser,
  // there's no backend, and nothing typed here leaves your device.
  const VALID_USERNAME = 'guest';
  const VALID_PASSWORD = 'guest';

  let signedIn = $state(false);
  let username = $state('');
  let password = $state('');
  let searchQuery = $state('');
  let activeTab: 'alfa' | 'bravo' | 'charlie' = $state('alfa');

  // A single status line, reused for both the sign-in result and the nav
  // icon messages — whichever happened most recently.
  let message = $state('');

  function handleSignIn() {
    if (username === VALID_USERNAME && password === VALID_PASSWORD) {
      signedIn = true;
      message = m.msgSignInSuccess;
    } else {
      message = m.msgSignInFailure;
    }
  }

  function handleNavClick(item: 'Home' | 'Settings' | 'Sign Out') {
    if (item === 'Home') {
      message = m.msgHomePage;
    } else if (item === 'Settings') {
      message = m.msgSettingsPage;
    } else {
      message = m.msgSignOut;
      signedIn = false;
      username = '';
      password = '';
    }
  }

  function handleSearch(query: string) {
    message = query ? m.msgSearchResultsFor(query) : m.msgEnterSearchTerm;
  }
</script>

<svelte:head>
  <title>{m.title} — Testing Examples</title>
  <meta name="description" content={m.metaDescription} />
</svelte:head>

<div class="page-header">
  <h1>{m.heading}</h1>
  <p>{m.intro}</p>
</div>

<GrailLayout>
  <GrailLayoutTopHeader>
    <div style="display: flex; justify-content: space-between; align-items: center; gap: 1rem; flex-wrap: wrap;">
      <strong>{m.demoAppLabel}</strong>
      <p id="app-message" aria-live="polite" style="margin: 0;">{message}</p>
    </div>

    {#if signedIn}
      <div
        style="display: flex; justify-content: space-between; align-items: center; gap: 1rem; flex-wrap: wrap; margin-top: 0.75rem;"
      >
        <MenuBar label={m.demoAppLabel}>
          <MenuBarButton id="nav-home-button" tabindex={0} onclick={() => handleNavClick('Home')}>
            <Icon decorative>🏠</Icon> {m.navHome}
          </MenuBarButton>
          <MenuBarButton id="nav-settings-button" onclick={() => handleNavClick('Settings')}>
            <Icon decorative>⚙️</Icon> {m.navSettings}
          </MenuBarButton>
          <MenuBarButton id="nav-sign-out-button" onclick={() => handleNavClick('Sign Out')}>
            <Icon decorative>🚪</Icon> {m.navSignOut}
          </MenuBarButton>
        </MenuBar>

        <TextInputWithSearch
          id="app-search"
          label={m.searchLabel}
          bind:value={searchQuery}
          onsearch={handleSearch}
          placeholder={m.searchPlaceholder}
        />
      </div>
    {/if}
  </GrailLayoutTopHeader>

  <GrailLayoutLeftAside>
    <h2>{m.aboutHeading}</h2>
    <p>{m.aboutP}</p>
  </GrailLayoutLeftAside>

  <GrailLayoutCenterMain>
    {#if !signedIn}
      <h2>{m.signInHeading}</h2>
      <p>{m.signInCredsPre}<code>guest</code>{m.signInCredsMid}<code>guest</code>{m.signInCredsPost}</p>

      <Form label={m.signInHeading} id="sign-in-form" onsubmit={handleSignIn}>
        <Field label={m.usernameLabel} inputId="username-input">
          <TextInput id="username-input" label={m.usernameLabel} autocomplete="username" bind:value={username} required />
        </Field>
        <Field label={m.passwordLabel} inputId="password-input">
          <PasswordInput id="password-input" label={m.passwordLabel} bind:value={password} required />
        </Field>
        <SubmitInput id="sign-in-submit" value={m.signInSubmit} />
      </Form>
    {:else}
      <h2>{m.welcomeHeading}</h2>
      <p>{m.welcomeP}</p>

      <TabBar label={m.tabsLabel}>
        <TabBarButton
          id="tab-alfa"
          selected={activeTab === 'alfa'}
          controls="panel-alfa"
          onclick={() => (activeTab = 'alfa')}>{m.tabAlfa}</TabBarButton
        >
        <TabBarButton
          id="tab-bravo"
          selected={activeTab === 'bravo'}
          controls="panel-bravo"
          onclick={() => (activeTab = 'bravo')}>{m.tabBravo}</TabBarButton
        >
        <TabBarButton
          id="tab-charlie"
          selected={activeTab === 'charlie'}
          controls="panel-charlie"
          onclick={() => (activeTab = 'charlie')}>{m.tabCharlie}</TabBarButton
        >
      </TabBar>

      <TabPanel id="panel-alfa" label={m.tabAlfa} labelledBy="tab-alfa" selected={activeTab === 'alfa'}>
        <p>{m.tabAlfaPanel}</p>
      </TabPanel>
      <TabPanel id="panel-bravo" label={m.tabBravo} labelledBy="tab-bravo" selected={activeTab === 'bravo'}>
        <p>{m.tabBravoPanel}</p>
      </TabPanel>
      <TabPanel
        id="panel-charlie"
        label={m.tabCharlie}
        labelledBy="tab-charlie"
        selected={activeTab === 'charlie'}
      >
        <p>{m.tabCharliePanel}</p>
      </TabPanel>
    {/if}
  </GrailLayoutCenterMain>

  <GrailLayoutRightAside>
    <h2>{m.relatedHeading}</h2>
    <ul class="repo-list">
      <li><a href={localeHref(locale, 'given-when-then')}>{m.relatedGivenWhenThen}</a></li>
      <li><a href={localeHref(locale, 'how-to-start-learning-automatic-testing')}>{m.relatedHowToStart}</a></li>
      <li><a href={localeHref(locale, 'examples')}>{m.relatedExamples}</a></li>
    </ul>
  </GrailLayoutRightAside>

  <GrailLayoutBottomFooter>
    <NavigationMenu label={m.footerNavLabel}>
      <a href="https://example.com/privacy">{m.privacyPolicy}</a>
      <a href="https://example.com/terms">{m.termsOfService}</a>
      <a href="https://example.com/contact">{m.contact}</a>
      <a href="https://github.com/testingexamples/testingexamples.github.io">GitHub</a>
    </NavigationMenu>
  </GrailLayoutBottomFooter>
</GrailLayout>
