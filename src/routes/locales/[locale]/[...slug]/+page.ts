import { error } from '@sveltejs/kit';
import { LOCALES, isLocale } from '$lib/i18n/locales';
import { TOPICS, TOPIC_IDS, slugForTopic, topicForSlug } from '$lib/i18n/topics';
import type { EntryGenerator, PageLoad } from './$types';

export const prerender = true;

export const entries: EntryGenerator = () => {
  const list: { locale: string; slug: string }[] = [];
  for (const locale of LOCALES) {
    for (const topicId of TOPIC_IDS) {
      list.push({ locale, slug: slugForTopic(locale, topicId) });
    }
  }
  return list;
};

export const load: PageLoad = async ({ params }) => {
  if (!isLocale(params.locale)) {
    error(404, 'Unknown locale');
  }
  const locale = params.locale;
  const topicId = topicForSlug(locale, params.slug);
  if (!topicId) {
    error(404, 'Not found');
  }
  const module = await TOPICS[topicId].load();
  return {
    locale,
    topicId,
    Component: module.default
  };
};
