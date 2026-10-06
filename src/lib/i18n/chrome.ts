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
  mainNavLabel: 'Prif ddewislen',
  siteBrandAriaLabel: 'Hafan {site}',
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
    '{site} — enghreifftiau cod agored am ddim o brofi awtomatig ar borwyr.'
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

const AR_COMMON: ChromeMessages = {
  skipToMainContent: 'انتقل إلى المحتوى الرئيسي',
  mainNavLabel: 'التنقل الرئيسي',
  siteBrandAriaLabel: 'الصفحة الرئيسية لـ {site}',
  nav: {
    home: 'الرئيسية',
    learn: 'تعلّم',
    examples: 'أمثلة',
    about: 'حول',
    github: 'GitHub'
  },
  pickerLabels: {
    theme: 'السمة',
    locale: 'اللغة',
    textSize: 'حجم النص',
    share: 'شارك هذه الصفحة'
  },
  shareLabels: {
    email: 'أرسل الرابط بالبريد الإلكتروني',
    linkedin: 'شارك على LinkedIn',
    reddit: 'شارك على Reddit',
    bluesky: 'شارك على Bluesky',
    mastodon: 'شارك على Mastodon',
    copyLink: 'انسخ الرابط',
    copiedLabel: 'تم نسخ الرابط',
    copyFailedLabel: 'تعذّر نسخ الرابط'
  },
  footerTagline: '{site} — أمثلة مجانية ومفتوحة المصدر لاختبار أتمتة المتصفح.'
};

const KO_COMMON: ChromeMessages = {
  skipToMainContent: '본문으로 건너뛰기',
  mainNavLabel: '주 내비게이션',
  siteBrandAriaLabel: '{site} 홈',
  nav: {
    home: '홈',
    learn: '학습',
    examples: '예제',
    about: '소개',
    github: 'GitHub'
  },
  pickerLabels: {
    theme: '테마',
    locale: '언어',
    textSize: '글자 크기',
    share: '이 페이지 공유'
  },
  shareLabels: {
    email: '이메일로 링크 보내기',
    linkedin: 'LinkedIn에 공유',
    reddit: 'Reddit에 공유',
    bluesky: 'Bluesky에 공유',
    mastodon: 'Mastodon에 공유',
    copyLink: '링크 복사',
    copiedLabel: '링크가 복사되었습니다',
    copyFailedLabel: '링크를 복사하지 못했습니다'
  },
  footerTagline: '{site} — 무료 오픈 소스 브라우저 자동화 테스트 예제.'
};

const FR_COMMON: ChromeMessages = {
  skipToMainContent: 'Passer au contenu principal',
  mainNavLabel: 'Menu principal',
  siteBrandAriaLabel: 'Accueil {site}',
  nav: {
    home: 'Accueil',
    learn: 'Apprendre',
    examples: 'Exemples',
    about: 'À propos',
    github: 'GitHub'
  },
  pickerLabels: {
    theme: 'Thème',
    locale: 'Langue',
    textSize: 'Taille du texte',
    share: 'Partager cette page'
  },
  shareLabels: {
    email: 'Envoyer le lien par e-mail',
    linkedin: 'Partager sur LinkedIn',
    reddit: 'Partager sur Reddit',
    bluesky: 'Partager sur Bluesky',
    mastodon: 'Partager sur Mastodon',
    copyLink: 'Copier le lien',
    copiedLabel: 'Lien copié',
    copyFailedLabel: 'Échec de la copie du lien'
  },
  footerTagline: '{site} — exemples gratuits et open source de tests automatisés de navigateur.'
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
  'zh-cn': ZH_COMMON,
  'ar-001': AR_COMMON,
  'ko-001': KO_COMMON,
  'fr-001': FR_COMMON
};

export function chromeFor(locale: Locale): ChromeMessages {
  return CHROME[locale];
}
