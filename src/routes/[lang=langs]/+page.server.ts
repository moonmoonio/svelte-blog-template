import type { EntryGenerator } from './$types';
import { Languages } from '$lib/enums';

export const entries: EntryGenerator = () => {
	return Object.values(Languages).map((language: string) => {
		return { lang: language };
	});
};
export const prerender = true;
