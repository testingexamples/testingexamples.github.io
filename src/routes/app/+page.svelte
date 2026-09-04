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
  import type { PageData } from './$types';

  let { data }: { data: PageData } = $props();

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
  // icon messages — whichever happened most recently. Real apps often use
  // exactly this pattern (one toast/status region) instead of a different
  // message element for every possible event.
  let message = $state('');

  function handleSignIn() {
    if (username === VALID_USERNAME && password === VALID_PASSWORD) {
      signedIn = true;
      message = 'Sign in success.';
    } else {
      message = 'Sign in failure.';
    }
  }

  function handleNavClick(item: 'Home' | 'Settings' | 'Sign Out') {
    if (item === 'Home') {
      message = 'Home Page';
    } else if (item === 'Settings') {
      message = 'Settings Page';
    } else {
      message = 'Sign Out';
      signedIn = false;
      username = '';
      password = '';
    }
  }

  function handleSearch(query: string) {
    message = query ? `Search results for "${query}".` : 'Enter a search term.';
  }
</script>

<svelte:head>
  <title>{data.title}</title>
  <meta
    name="description"
    content="A small interactive demo app — a Lily Design System Grail layout, a simulated sign-in, an icon nav bar with a search box, and a three-tab panel — another stable target to practice browser automation on."
  />
</svelte:head>

<div class="page-header">
  <h1>Demo App</h1>
  <p>
    A small, self-contained demo application — sign in, click nav icons, search, switch tabs — built
    with Lily Design System components as another stable target to practice browser automation on.
    Nothing here is real: there's no backend, and nothing typed on this page leaves your device.
  </p>
</div>

<GrailLayout>
  <GrailLayoutTopHeader>
    <div style="display: flex; justify-content: space-between; align-items: center; gap: 1rem; flex-wrap: wrap;">
      <strong>Demo App</strong>
      <p id="app-message" aria-live="polite" style="margin: 0;">{message}</p>
    </div>

    {#if signedIn}
      <div
        style="display: flex; justify-content: space-between; align-items: center; gap: 1rem; flex-wrap: wrap; margin-top: 0.75rem;"
      >
        <MenuBar label="App navigation">
          <MenuBarButton id="nav-home-button" tabindex={0} onclick={() => handleNavClick('Home')}>
            <Icon decorative>🏠</Icon> Home
          </MenuBarButton>
          <MenuBarButton id="nav-settings-button" onclick={() => handleNavClick('Settings')}>
            <Icon decorative>⚙️</Icon> Settings
          </MenuBarButton>
          <MenuBarButton id="nav-sign-out-button" onclick={() => handleNavClick('Sign Out')}>
            <Icon decorative>🚪</Icon> Sign Out
          </MenuBarButton>
        </MenuBar>

        <TextInputWithSearch
          id="app-search"
          label="Search the demo app"
          bind:value={searchQuery}
          onsearch={handleSearch}
          placeholder="Search…"
        />
      </div>
    {/if}
  </GrailLayoutTopHeader>

  <GrailLayoutLeftAside>
    <h2>About this demo</h2>
    <p>
      Everything on this page is simulated in the browser: there's no real account and no real
      backend. It's a small, realistic app shell — sign-in, nav icons, a search box, and tabs — built
      specifically to have something more app-like than a fixture page to automate against.
    </p>
  </GrailLayoutLeftAside>

  <GrailLayoutCenterMain>
    {#if !signedIn}
      <h2>Sign in</h2>
      <p>Use username <code>guest</code> and password <code>guest</code>.</p>

      <Form label="Sign in" id="sign-in-form" onsubmit={handleSignIn}>
        <Field label="Username" inputId="username-input">
          <TextInput id="username-input" label="Username" autocomplete="username" bind:value={username} required />
        </Field>
        <Field label="Password" inputId="password-input">
          <PasswordInput id="password-input" label="Password" bind:value={password} required />
        </Field>
        <SubmitInput id="sign-in-submit" value="Sign in" />
      </Form>
    {:else}
      <h2>Welcome, guest</h2>
      <p>You're signed in. Try the tabs below, or the nav icons and search box above.</p>

      <TabBar label="Demo tabs">
        <TabBarButton
          id="tab-alfa"
          selected={activeTab === 'alfa'}
          controls="panel-alfa"
          onclick={() => (activeTab = 'alfa')}>Alfa</TabBarButton
        >
        <TabBarButton
          id="tab-bravo"
          selected={activeTab === 'bravo'}
          controls="panel-bravo"
          onclick={() => (activeTab = 'bravo')}>Bravo</TabBarButton
        >
        <TabBarButton
          id="tab-charlie"
          selected={activeTab === 'charlie'}
          controls="panel-charlie"
          onclick={() => (activeTab = 'charlie')}>Charlie</TabBarButton
        >
      </TabBar>

      <TabPanel id="panel-alfa" label="Alfa" labelledBy="tab-alfa" selected={activeTab === 'alfa'}>
        <p>Alfa tab panel</p>
      </TabPanel>
      <TabPanel id="panel-bravo" label="Bravo" labelledBy="tab-bravo" selected={activeTab === 'bravo'}>
        <p>Bravo tab panel</p>
      </TabPanel>
      <TabPanel
        id="panel-charlie"
        label="Charlie"
        labelledBy="tab-charlie"
        selected={activeTab === 'charlie'}
      >
        <p>Charlie tab panel</p>
      </TabPanel>
    {/if}
  </GrailLayoutCenterMain>

  <GrailLayoutRightAside>
    <h2>Related</h2>
    <ul class="repo-list">
      <li><a href="/given-when-then/">Given-When-Then Examples</a></li>
      <li><a href="/learn/getting-started/">How to Start Learning Automatic Testing</a></li>
      <li><a href="/examples/">Examples</a></li>
    </ul>
  </GrailLayoutRightAside>

  <GrailLayoutBottomFooter>
    <NavigationMenu label="Demo app footer navigation">
      <a href="https://example.com/privacy">Privacy Policy</a>
      <a href="https://example.com/terms">Terms of Service</a>
      <a href="https://example.com/contact">Contact</a>
      <a href="https://github.com/testingexamples/testingexamples.github.io">GitHub</a>
    </NavigationMenu>
  </GrailLayoutBottomFooter>
</GrailLayout>
