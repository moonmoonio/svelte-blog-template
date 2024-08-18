import type { BlogPost } from '$lib/types/BlogPost';
import type { BlogPosts } from '$lib/types/BlogPosts';

const entries = import.meta.glob<BlogPost>('./posts/**/*.svx', { eager: true });

const posts: BlogPosts = {};
for (const path in entries) {
	const post = entries[path];
	post.metadata.publishDate = new Date(post.metadata.publishDate);
	let [locale, slug] = path.split('/').reverse();
	locale = locale.slice(0, locale.indexOf('.'));
	if (posts[locale]) {
		posts[locale].set(slug, post);
	} else {
		posts[locale] = new Map([[slug, post]]);
	}
}

export { posts };
