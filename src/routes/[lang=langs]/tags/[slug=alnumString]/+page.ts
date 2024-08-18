import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

import { tags } from '$lib/blog';

export const load: PageLoad = ({ params }) => {
	const { slug, lang } = params;
	const posts = tags[lang].get(slug);
	if (posts === undefined) {
		error(404, 'Not found');
	} else {
		return { posts };
	}
};
