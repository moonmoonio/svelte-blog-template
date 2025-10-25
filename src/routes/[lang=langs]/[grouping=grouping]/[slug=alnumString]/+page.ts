import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

import { Groupings } from '$lib/enums';
import { l } from '$lib/translations';
import { tags, series, categories } from '$lib/blog';

export const load: PageLoad = ({ params }) => {
	const { slug, lang } = params;

	let posts;
	switch (params.grouping) {
		case Groupings.CATEGORIES:
			posts = categories[lang].get(slug);
			break;
		case Groupings.SERIES:
			posts = series[lang].get(slug);
			break;
		default:
			posts = tags[lang].get(slug);
	}

	if (posts === undefined) {
		error(404, l.get(lang, 'errors.404'));
	} else {
		return { posts };
	}
};
