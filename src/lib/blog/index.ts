import type { BlogPost } from '$lib/types/BlogPost';
import type { BlogPosts } from '$lib/types/BlogPosts';
import type { TagsPosts } from '$lib/types/TagsPosts';

const entries = import.meta.glob<BlogPost>('./posts/**/*.svx', { eager: true });

const posts: BlogPosts = {};
const tags: TagsPosts = {};
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
}

export { posts };
