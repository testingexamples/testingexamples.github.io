import { redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';

// This content moved to /<locale>/... — see spec/locales/index.md.
export const load: PageLoad = () => {
  redirect(308, '/en-001/how-to-start-learning-automatic-testing/');
};
