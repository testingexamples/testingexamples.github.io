import { redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';

// This content moved to /locales/<locale>/... — see spec/locales/index.md.
export const load: PageLoad = () => {
  redirect(308, '/locales/en-001/what-are-related-concepts-for-automatic-testing/');
};
