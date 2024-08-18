export interface BlogPostMetadata {
	publishDate: string | Date;
	slug?: string;
	summary?: string;
	tags?: string[];
	title: string;
}

export function sortBlogPosts(post1: BlogPostMetadata, post2: BlogPostMetadata) {
	return new Date(post2.publishDate).getTime() - new Date(post1.publishDate).getTime();
}
