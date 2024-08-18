import type { BlogPost } from '$lib/types/BlogPost';

export interface TagsPosts {
	[key: string]: Map<string, BlogPost[]>;
}
