<script lang="ts">
  import { page } from '$app/state';
  import { SkipLink } from 'lily-design-system-svelte-headless';
  import { ThemePicker } from 'lily-design-system-svelte-theme-picker';
  import { TextSizePicker } from 'lily-design-system-svelte-text-size-picker';
  import { SharePicker } from 'lily-design-system-svelte-share-picker';
  import { SITE_NAME, REPO } from '$lib/site';

  let { children } = $props();

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
        themes={['light', 'dark']}
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
      />
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
