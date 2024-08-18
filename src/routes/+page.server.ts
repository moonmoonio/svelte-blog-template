import type { PageServerLoad } from './$types';
import { base } from '$app/paths';
import { redirect } from '@sveltejs/kit';

import { defaultLocale } from '$lib/translations';

export const load: PageServerLoad = () => {
	redirect(302, `${base}/${defaultLocale}`);
};
