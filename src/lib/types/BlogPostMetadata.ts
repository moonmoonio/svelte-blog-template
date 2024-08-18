export interface BlogPostMetadata {
	title: string;
	publishDate: string | Date;
	summary?: string;
}

export function sortBlogPosts(post1: BlogPostMetadata, post2: BlogPostMetadata) {
	return new Date(post2.publishDate).getTime() - new Date(post1.publishDate).getTime();
}
