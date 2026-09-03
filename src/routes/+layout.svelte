<script lang="ts">
  import { page } from '$app/state';
  import { SkipLink } from 'lily-design-system-svelte-headless';
  import { ThemePicker } from 'lily-design-system-svelte-theme-picker';
  import { TextSizePicker } from 'lily-design-system-svelte-text-size-picker';
  import { SharePicker } from 'lily-design-system-svelte-share-picker';
  import { SITE_NAME, REPO } from '$lib/site';

  let { children } = $props();

  // Every theme in the Lily Design System's own themes/ directory (copied
  // verbatim into static/assets/themes/ — see AGENTS.md's "Theming"
  // section). Sorted alphabetically by slug, with one deliberate
  // exception: the 8 public-sector slugs (UK Gov Design System, the six
  // NHS England/Scotland/Wales variants, US Web Design System) are held
  // back to the end of the list as their own alphabetical group, since
  // they're a visually distinct "official government theme" set a reader
  // is more likely to be looking for together rather than interleaved
  // alphabetically among the DaisyUI-derived palettes. They also get a
  // shorter label below so the list stays scannable.
  const LILY_THEMES = [
    'abyss', 'acid', 'adobe-spectrum', 'aqua', 'autumn', 'black',
    'bumblebee', 'business', 'caramellatte', 'cmyk', 'coffee', 'corporate',
    'cupcake', 'cyberpunk', 'dark', 'dim', 'dracula', 'emerald', 'fantasy',
    'forest', 'garden', 'halloween', 'lemonade', 'light', 'lofi', 'luxury',
    'mozilla-protocol', 'night', 'nord', 'pastel', 'retro', 'silk',
    'sunset', 'synthwave', 'valentine', 'winter', 'wireframe',
    'united-kingdom-government-digital-service',
    'united-kingdom-national-health-service-england-for-patients',
    'united-kingdom-national-health-service-england-for-practitioners',
    'united-kingdom-national-health-service-scotland-for-patients',
    'united-kingdom-national-health-service-scotland-for-practitioners',
    'united-kingdom-national-health-service-wales-for-patients',
    'united-kingdom-national-health-service-wales-for-practitioners',
    'united-states-web-design-system'
  ];
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
      label: 'Email',
      href: (url: string, title: string) =>
        `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      href: (url: string) =>
        `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
    },
    {
      id: 'mastodon',
      label: 'Mastodon',
      href: (url: string, title: string) =>
        `https://mastodonshare.com/?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`
    },
    {
      id: 'bluesky',
      label: 'Bluesky',
      href: (url: string, title: string) =>
        `https://bsky.app/intent/compose?text=${encodeURIComponent(`${title}\n${url}`)}`
    },
    {
      id: 'reddit',
      label: 'Reddit',
      href: (url: string, title: string) =>
        `https://www.reddit.com/submit?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`
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
      <ThemePicker
        label="Theme"
        themesUrl="/assets/themes/"
        themes={LILY_THEMES}
        themeLabels={LILY_THEME_LABELS}
        storageKey="testingexamples-theme"
        detectFromSystem
      />
      <TextSizePicker
        label="Text size"
        sizes={['small', 'medium', 'large', 'x-large']}
        storageKey="testingexamples-text-size"
      />
      <SharePicker
        label="Share this page"
        title={page.data.title}
        targets={SHARE_TARGETS}
        copyLabel="Copy link"
        copiedLabel="Link copied"
        copyFailedLabel="Could not copy link"
      >
        {#snippet children({ open, url })}
          <!-- The package's default glyph is the Unicode character ➤
               (U+27A4), rendered in the page's own font like the other
               pickers' ◑ and "A". In practice browsers resolve that
               specific codepoint to a different fallback font than ◑ or
               plain Latin letters on some platforms (observed on macOS),
               and that fallback font's glyph metrics don't sit centered
               the same way — so the *box* the three buttons sit in stays
               pixel-identical (confirmed via getBoundingClientRect: all
               three are top:36px/height:36px, byte-for-byte the same
               computed border/background), but the arrow's ink looks
               shifted relative to the other two icons. An inline SVG has
               no font fallback to vary by platform, so it replaces the
               default glyph here — same visual weight, guaranteed
               alignment everywhere. `display: block` on the <svg> itself
               avoids the separate, unrelated few-px gap inline SVGs get
               from baseline alignment by default. -->
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
      </SharePicker>
    </div>
  </div>
</header>

<main id="main" class="site-main">
  {@render children()}
</main>

<footer class="site-footer">
  <div class="site-footer-inner">
    <p>{SITE_NAME} — free open source browser automation testing examples.</p>
    <div class="site-footer-links">
      <a href={REPO}>GitHub</a>
      <a href="/about/">About</a>
    </div>
  </div>
</footer>
