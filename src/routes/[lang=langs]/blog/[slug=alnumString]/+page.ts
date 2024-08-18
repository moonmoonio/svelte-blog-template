import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

import { posts } from '$lib/blog';

export const load: PageLoad = ({ params }) => {
	const { slug, lang } = params;
	const post = posts[lang].get(slug);
	if (post === undefined) {
		error(404, 'Not found');
	} else {
		return { post };
	}
};
