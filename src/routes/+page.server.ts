import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { defaultLocale } from '$lib/translations';

export const load: PageServerLoad = () => {
	redirect(302, `/${defaultLocale}`);
};
