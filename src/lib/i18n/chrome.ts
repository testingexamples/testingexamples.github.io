// Translated strings for the site chrome (header nav, footer, and the
// PickerBar labels) — everything in +layout.svelte that isn't page content.
// Page-by-page content lives next to each page in src/lib/pages/*/messages.ts.

import type { Locale } from './locales';

export type ChromeMessages = {
  skipToMainContent: string;
  mainNavLabel: string;
  siteBrandAriaLabel: string; // {site} placeholder for SITE_NAME
  nav: {
    home: string;
    learn: string;
    examples: string;
    about: string;
    github: string;
  };
  pickerLabels: {
    theme: string;
    locale: string;
    textSize: string;
    share: string;
  };
  shareLabels: {
    email: string;
    linkedin: string;
    reddit: string;
    bluesky: string;
    mastodon: string;
    copyLink: string;
    copiedLabel: string;
    copyFailedLabel: string;
  };
  footerTagline: string; // {site} placeholder for SITE_NAME
};

const EN_COMMON: ChromeMessages = {
  skipToMainContent: 'Skip to main content',
  mainNavLabel: 'Main',
  siteBrandAriaLabel: '{site} home',
  nav: {
    home: 'Home',
    learn: 'Learn',
    examples: 'Examples',
    about: 'About',
    github: 'GitHub'
  },
  pickerLabels: {
    theme: 'Theme',
    locale: 'Language',
    textSize: 'Text size',
    share: 'Share this page'
  },
  shareLabels: {
    email: 'Email Link',
    linkedin: 'Share on LinkedIn',
    reddit: 'Share on Reddit',
    bluesky: 'Share on Bluesky',
    mastodon: 'Share on Mastodon',
    copyLink: 'Copy Link',
    copiedLabel: 'Link copied',
    copyFailedLabel: 'Could not copy link'
  },
  footerTagline: '{site} — free open source browser automatic testing examples.'
};

const CY_COMMON: ChromeMessages = {
  skipToMainContent: "Neidio i'r prif gynnwys",
  mainNavLabel: 'Prif lywio',
  siteBrandAriaLabel: '{site} hafan',
  nav: {
    home: 'Hafan',
    learn: 'Dysgu',
    examples: 'Enghreifftiau',
    about: 'Ynghylch',
    github: 'GitHub'
  },
  pickerLabels: {
    theme: 'Thema',
    locale: 'Iaith',
    textSize: 'Maint testun',
    share: "Rhannu'r dudalen hon"
  },
  shareLabels: {
    email: "E-bostio'r ddolen",
    linkedin: 'Rhannu ar LinkedIn',
    reddit: 'Rhannu ar Reddit',
    bluesky: 'Rhannu ar Bluesky',
    mastodon: 'Rhannu ar Mastodon',
    copyLink: "Copïo'r ddolen",
    copiedLabel: "Dolen wedi'i chopïo",
    copyFailedLabel: "Methwyd copïo'r ddolen"
  },
  footerTagline:
    '{site} — enghreifftiau profi awtomatig porwr, yn rhad ac am ddim ac yn ffynhonnell agored.'
};

const ZH_COMMON: ChromeMessages = {
  skipToMainContent: '跳转到主要内容',
  mainNavLabel: '主导航',
  siteBrandAriaLabel: '{site} 首页',
  nav: {
    home: '首页',
    learn: '学习',
    examples: '示例',
    about: '关于',
    github: 'GitHub'
  },
  pickerLabels: {
    theme: '主题',
    locale: '语言',
    textSize: '文字大小',
    share: '分享此页面'
  },
  shareLabels: {
    email: '通过电子邮件分享链接',
    linkedin: '分享到 LinkedIn',
    reddit: '分享到 Reddit',
    bluesky: '分享到 Bluesky',
    mastodon: '分享到 Mastodon',
    copyLink: '复制链接',
    copiedLabel: '链接已复制',
    copyFailedLabel: '无法复制链接'
  },
  footerTagline: '{site} — 免费开源的浏览器自动化测试示例。'
};

// The chrome strings above have no US/UK spelling variance (no colour/
// organise-style words among them), so all four English locales share one
// object, and both Welsh locales share the other. Page content, which does
// contain such words, varies per locale in src/lib/pages/*/messages.ts.
export const CHROME: Record<Locale, ChromeMessages> = {
  'en-001': EN_COMMON,
  'en-gb': EN_COMMON,
  'en-gb-oxendict': EN_COMMON,
  'en-us': EN_COMMON,
  'cy-gb': CY_COMMON,
  'cy-001': CY_COMMON,
  'zh-cn': ZH_COMMON
};

export function chromeFor(locale: Locale): ChromeMessages {
  return CHROME[locale];
}
