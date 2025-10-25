import type { BlogPost } from '$lib/types/BlogPost';
import type { BlogPosts } from '$lib/types/BlogPosts';
import type { GroupingPosts } from '$lib/types/GroupingPosts';

const entries = import.meta.glob<BlogPost>('./posts/**/*.svx', { eager: true });

const posts: BlogPosts = {};
const tags: GroupingPosts = {};
const categories: GroupingPosts = {};
const series: GroupingPosts = {};
for (const path in entries) {
	const post = entries[path];
	post.metadata.publishDate = new Date(post.metadata.publishDate);
	let [locale, slug] = path.split('/').reverse();
	post.metadata.slug = slug;
	locale = locale.slice(0, locale.indexOf('.'));
	if (posts[locale]) {
		posts[locale].set(slug, post);
	} else {
		posts[locale] = new Map([[slug, post]]);
	}
	post.metadata.tags?.forEach((tag) => {
		if (tags[locale]) {
			if (tags[locale].has(tag)) {
				tags[locale].get(tag)?.push(post);
			} else {
				tags[locale].set(tag, [post]);
			}
		} else {
			tags[locale] = new Map([[tag, [post]]]);
		}
	});
	if (post.metadata.category !== undefined) {
		if (categories[locale]) {
			if (categories[locale].has(post.metadata.category)) {
				categories[locale].get(post.metadata.category)?.push(post);
			} else {
				categories[locale].set(post.metadata.category, [post]);
			}
		} else {
			categories[locale] = new Map([[post.metadata.category, [post]]]);
		}
	}
	if (post.metadata.series !== undefined) {
		if (series[locale]) {
			if (series[locale].has(post.metadata.series)) {
				series[locale].get(post.metadata.series)?.push(post);
			} else {
				series[locale].set(post.metadata.series, [post]);
			}
		} else {
			series[locale] = new Map([[post.metadata.series, [post]]]);
		}
	}
}

const aboutEntries = import.meta.glob<BlogPost>('./about/*.svx', { eager: true });

const aboutPosts: BlogPosts = {};
for (const path in aboutEntries) {
	const post = aboutEntries[path];
	post.metadata.publishDate = new Date(post.metadata.publishDate);
	let [locale] = path.split('/').reverse();
	locale = locale.slice(0, locale.indexOf('.'));
	if (aboutPosts[locale]) {
		aboutPosts[locale].set('/about', post);
	} else {
		aboutPosts[locale] = new Map([['/about', post]]);
	}
}

export { posts, tags, categories, aboutPosts, series };
