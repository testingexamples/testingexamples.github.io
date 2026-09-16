<script lang="ts">
  import { page } from '$app/state';
  import { SkipLink } from 'lily-design-system-svelte-headless';
  import PickerBar from 'lily-design-system-svelte-picker-bar';
  import { SITE_NAME, REPO } from '$lib/site';

  let { children } = $props();

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
  const SHARE_TARGETS = [
    {
      id: 'email',
      label: 'Email Link',
      href: (url: string, title: string) =>
        `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`
    },
    {
      id: 'linkedin',
      label: 'Share on LinkedIn',
      href: (url: string) =>
        `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
    },
    {
      id: 'reddit',
      label: 'Share on Reddit',
      href: (url: string, title: string) =>
        `https://www.reddit.com/submit?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`
    },
    {
      id: 'bluesky',
      label: 'Share on Bluesky',
      href: (url: string, title: string) =>
        `https://bsky.app/intent/compose?text=${encodeURIComponent(`${title}\n${url}`)}`
    },
    {
      id: 'mastodon',
      label: 'Share on Mastodon',
      href: (url: string, title: string) =>
        `https://mastodonshare.com/?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`
    }
  ];

  type NavLink = { href: string; label: string };
  const navLinks: NavLink[] = [
    { href: '/', label: 'Home' },
    { href: '/learn/', label: 'Learn' },
    { href: '/examples/', label: 'Examples' },
    { href: '/about/', label: 'About' }
  ];

  function isCurrent(href: string): boolean {
    return page.url.pathname === href;
  }
</script>

<SkipLink href="#main" label="Skip to main content" />

<header class="site-header">
  <div class="site-header-inner">
    <a class="site-brand" href="/" aria-label="{SITE_NAME} home">
      <img class="site-brand-mark" src="/assets/favicon.svg" alt="" aria-hidden="true" />
      <span>{SITE_NAME}</span>
    </a>
    <nav class="site-nav" aria-label="Main">
      {#each navLinks as link (link.href)}
        <a href={link.href} aria-current={isCurrent(link.href) ? 'page' : undefined}>
          {link.label}
        </a>
      {/each}
      <a href={REPO}>GitHub</a>
    </nav>
    <div class="site-controls">
      <PickerBar
        labels={{
          theme: 'Theme',
          locale: 'Language',
          textSize: 'Text size',
          share: 'Share this page'
        }}
        themesUrl="/assets/themes/"
        themeProps={{
          themeLabels: LILY_THEME_LABELS,
          storageKey: 'testingexamples-theme',
          detectFromSystem: true
        }}
        locales={['en']}
        localeProps={{ storageKey: 'testingexamples-locale' }}
        sizes={['small', 'medium', 'large', 'x-large']}
        textSizeProps={{ defaultValue: 'medium', storageKey: 'testingexamples-text-size' }}
        shareTargets={SHARE_TARGETS}
        shareProps={{
          title: page.data.title,
          copyLabel: 'Copy Link',
          copiedLabel: 'Link copied',
          copyFailedLabel: 'Could not copy link',
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
    <p>{SITE_NAME} — free open source browser automatic testing examples.</p>
    <div class="site-footer-links">
      <a href={REPO}>GitHub</a>
      <a href="/about/">About</a>
    </div>
  </div>
</footer>
