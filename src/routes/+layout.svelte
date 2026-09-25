<script lang="ts">
  import { page } from '$app/state';
  import { goto, afterNavigate } from '$app/navigation';
  import { browser } from '$app/environment';
  import { SkipLink } from 'lily-design-system-svelte-headless';
  import PickerBar from 'lily-design-system-svelte-picker-bar';
  import { SITE_NAME, REPO } from '$lib/site';
  import { DEFAULT_LOCALE, PICKER_LOCALES, LOCALE_LABELS, isLocale, type Locale } from '$lib/i18n/locales';
  import { chromeFor } from '$lib/i18n/chrome';
  import { localeHref, switchLocaleHref } from '$lib/i18n/paths';

  let { children } = $props();

  let locale = $derived<Locale>(
    isLocale(page.params.locale ?? '') ? (page.params.locale as Locale) : DEFAULT_LOCALE
  );
  let chrome = $derived(chromeFor(locale));

  function handleLocaleChange(nextLocale: string): void {
    if (!isLocale(nextLocale)) return;
    goto(switchLocaleHref(page.url.pathname, nextLocale));
  }

  // Every content page sets its own <title> via <svelte:head>, keyed by
  // locale, inside its own Page.svelte — nothing plumbs that string
  // through load() for all 6 locales of all 18 topics. SharePicker still
  // needs *a* title, so read it back from the DOM once navigation (and
  // that <svelte:head> update) has settled, falling back to page.data.title
  // for the legacy redirect-stub routes, which never render at all.
  let shareTitle = $state(browser ? document.title : '');
  afterNavigate(() => {
    if (browser) shareTitle = document.title;
  });

  // Short labels for the 8 public-sector theme slugs (UK Gov Design
  // System, the six NHS England/Scotland/Wales variants, US Web Design
  // System) — PickerBar's own DEFAULT_THEMES already lists all 45 Lily
  // reference themes (see static/assets/themes/) in the right order, so
  // only the label override is site-local.
  const LILY_THEME_LABELS: Record<string, string> = {
    'united-kingdom-government-digital-service': 'UK Gov Design System',
    'united-kingdom-national-health-service-england-for-patients': 'NHS England (Patients)',
    'united-kingdom-national-health-service-england-for-practitioners': 'NHS England (Practitioners)',
    'united-kingdom-national-health-service-scotland-for-patients': 'NHS Scotland (Patients)',
    'united-kingdom-national-health-service-scotland-for-practitioners': 'NHS Scotland (Practitioners)',
    'united-kingdom-national-health-service-wales-for-patients': 'NHS Wales (Patients)',
    'united-kingdom-national-health-service-wales-for-practitioners': 'NHS Wales (Practitioners)',
    'united-states-web-design-system': 'US Web Design System'
  };

  // Each href builder targets that network's real share/compose endpoint —
  // no tracking pixel, no first-party analytics call.
  let SHARE_TARGETS = $derived([
    {
      id: 'email',
      label: chrome.shareLabels.email,
      href: (url: string, title: string) =>
        `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`
    },
    {
      id: 'linkedin',
      label: chrome.shareLabels.linkedin,
      href: (url: string) =>
        `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
    },
    {
      id: 'reddit',
      label: chrome.shareLabels.reddit,
      href: (url: string, title: string) =>
        `https://www.reddit.com/submit?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`
    },
    {
      id: 'bluesky',
      label: chrome.shareLabels.bluesky,
      href: (url: string, title: string) =>
        `https://bsky.app/intent/compose?text=${encodeURIComponent(`${title}\n${url}`)}`
    },
    {
      id: 'mastodon',
      label: chrome.shareLabels.mastodon,
      href: (url: string, title: string) =>
        `https://mastodonshare.com/?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`
    }
  ]);

  type NavLink = { href: string; label: string };
  let navLinks = $derived<NavLink[]>([
    { href: page.params.locale ? localeHref(locale, 'home') : '/', label: chrome.nav.home },
    { href: localeHref(locale, 'learn'), label: chrome.nav.learn },
    { href: localeHref(locale, 'examples'), label: chrome.nav.examples },
    { href: localeHref(locale, 'about'), label: chrome.nav.about }
  ]);

  function isCurrent(href: string): boolean {
    return page.url.pathname === href;
  }
</script>

<SkipLink href="#main" label={chrome.skipToMainContent} />

<header class="site-header">
  <div class="site-header-inner">
    <a
      class="site-brand"
      href={page.params.locale ? localeHref(locale, 'home') : '/'}
      aria-label={chrome.siteBrandAriaLabel.replace('{site}', SITE_NAME)}
    >
      <img class="site-brand-mark" src="/assets/favicon.svg" alt="" aria-hidden="true" />
      <span>{SITE_NAME}</span>
    </a>
    <nav class="site-nav" aria-label={chrome.mainNavLabel}>
      {#each navLinks as link (link.href)}
        <a href={link.href} aria-current={isCurrent(link.href) ? 'page' : undefined}>
          {link.label}
        </a>
      {/each}
      <a href={REPO}>{chrome.nav.github}</a>
    </nav>
    <div class="site-controls">
      <PickerBar
        labels={{
          theme: chrome.pickerLabels.theme,
          locale: chrome.pickerLabels.locale,
          textSize: chrome.pickerLabels.textSize,
          share: chrome.pickerLabels.share
        }}
        themesUrl="/assets/themes/"
        themeProps={{
          themeLabels: LILY_THEME_LABELS,
          storageKey: 'testingexamples-theme',
          detectFromSystem: true
        }}
        locales={PICKER_LOCALES}
        localeProps={{
          value: locale,
          localeLabels: LOCALE_LABELS,
          storageKey: 'testingexamples-locale',
          onChange: handleLocaleChange
        }}
        textSizeProps={{ storageKey: 'testingexamples-text-size' }}
        shareTargets={SHARE_TARGETS}
        shareProps={{
          title: page.data.title ?? shareTitle,
          copyLabel: chrome.shareLabels.copyLink,
          copiedLabel: chrome.shareLabels.copiedLabel,
          copyFailedLabel: chrome.shareLabels.copyFailedLabel,
          children: shareIcon
        }}
      />
    </div>
  </div>
</header>

{#snippet shareIcon({ open, url }: { open: boolean; url: string })}
  <!-- The package's default glyph is the Unicode character ➤ (U+27A4),
       rendered in the page's own font like the other pickers' ◑, 🌐︎, and
       "A". In practice browsers resolve that specific codepoint to a
       different fallback font than the others on some platforms
       (observed on macOS), and that fallback font's glyph metrics don't
       sit centered the same way — so the *box* the buttons sit in stays
       pixel-identical (confirmed via getBoundingClientRect: all share the
       same top/height, byte-for-byte the same computed border/
       background), but the arrow's ink looks shifted relative to the
       other icons. An inline SVG has no font fallback to vary by
       platform, so it replaces the default glyph here — same visual
       weight, guaranteed alignment everywhere. `display: block` on the
       <svg> itself avoids the separate, unrelated few-px gap inline SVGs
       get from baseline alignment by default. -->
  <svg
    class="share-picker-icon"
    viewBox="0 0 16 16"
    width="1.05rem"
    height="1.05rem"
    fill="none"
    stroke="currentColor"
    stroke-width="1.6"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
    style="display: block;"
  >
    <path d="M2.5 8h11M9 3.5 13.5 8 9 12.5" />
  </svg>
{/snippet}

<main id="main" class="site-main">
  {@render children()}
</main>

<footer class="site-footer">
  <div class="site-footer-inner">
    <p>{chrome.footerTagline.replace('{site}', SITE_NAME)}</p>
    <div class="site-footer-links">
      <a href={REPO}>{chrome.nav.github}</a>
      <a href={localeHref(locale, 'about')}>{chrome.nav.about}</a>
    </div>
  </div>
</footer>
