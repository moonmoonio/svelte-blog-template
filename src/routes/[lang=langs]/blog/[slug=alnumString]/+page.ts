import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

import { posts } from '$lib/blog';
import { l } from '$lib/translations';

export const load: PageLoad = ({ params }) => {
	const { slug, lang } = params;
	const post = posts[lang].get(slug);
	if (post === undefined) {
		error(404, l.get(lang, 'errors.404'));
	} else {
		return { post };
	}
};
