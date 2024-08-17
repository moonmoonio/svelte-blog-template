import type { BlogPost } from '$lib/types/BlogPost';

export interface BlogPosts {
	[key: string]: Map<string, BlogPost>;
}
