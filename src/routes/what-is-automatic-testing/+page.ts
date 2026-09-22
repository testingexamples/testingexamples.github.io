import { redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';

// This content moved to /locales/<locale>/... — see spec/locales/index.md.
// adapter-static turns this redirect into a static meta-refresh HTML page
// at build time, so old links and bookmarks to this URL keep working.
export const load: PageLoad = () => {
  redirect(308, '/locales/en-001/what-is-automatic-testing/');
};
