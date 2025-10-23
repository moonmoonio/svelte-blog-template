import type { BlogPost } from '$lib/types/BlogPost';

export interface StringPostsMap {
	[key: string]: Map<string, BlogPost[]>;
}
