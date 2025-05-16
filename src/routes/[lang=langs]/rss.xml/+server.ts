import type { RequestHandler, RequestEvent } from './$types';
import { Feed } from 'feed';

import { posts } from '$lib/blog';
import { site_config } from '$lib/config/site';
import { t } from '$lib/translations';

export const GET: RequestHandler = ({ params }: RequestEvent) => {
	const { lang } = params;
	const langPosts = [...posts[lang].values()]
		.map((post) => {
			return { ...post.metadata };
		})
		.sort(({ publishDate: pd1 }, { publishDate: pd2 }) => {
			return new Date(pd2).getTime() - new Date(pd1).getTime();
		});
	const currentYear = new Date().getFullYear();
	const feed = new Feed({
		title: site_config().name,
		id: site_config().url,
		link: site_config().url,
		language: lang,
		copyright: `© ${currentYear}, ${site_config().copyrightOwner}, ${t.get('rss.copyrightNotice')}`,
		description: t.get('rss.siteDescription')
	});
	langPosts.forEach((post) => {
		feed.addItem({
			title: post.title,
			link: `${site_config().url}/${lang}/blog/${post.slug}`,
			date: new Date(post.publishDate),
			published: new Date(post.publishDate),
			description: post.summary,
			author: post.authors,
			contributor: post.contributors
		});
	});
	return new Response(feed.rss2(), {
		status: 200,
		headers: {
			'Cache-Control': 'max-age=0, s-max-age=600',
			'Content-Type': 'application/xml'
		}
	});
};
