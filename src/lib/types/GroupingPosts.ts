import type { BlogPost } from '$lib/types/BlogPost';

export interface GroupingPosts {
	[key: string]: Map<string, BlogPost[]>;
}
