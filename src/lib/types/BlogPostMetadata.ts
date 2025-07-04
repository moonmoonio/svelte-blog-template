import type { Author } from 'feed';

export interface BlogPostMetadata {
	authors?: Author[];
	contributors?: Author[];
	publishDate: string | Date;
	slug?: string;
	summary?: string;
	tags?: string[];
	title: string;
	updatedDate?: string | Date;
	og_image?: string;
}

export function sortBlogPosts(post1: BlogPostMetadata, post2: BlogPostMetadata) {
	return new Date(post2.publishDate).getTime() - new Date(post1.publishDate).getTime();
}
