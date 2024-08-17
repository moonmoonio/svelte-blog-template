import { setLocale } from '$lib/translations';
import type { LayoutLoad } from './$types';

export const prerender = true;

export const load: LayoutLoad = async ({ params }) => {
	await setLocale(params.lang);
};
