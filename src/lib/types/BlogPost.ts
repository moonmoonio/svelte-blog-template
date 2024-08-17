import { SvelteComponent } from 'svelte';

import type { BlogPostMetadata } from '$lib/types/BlogPostMetadata';

export interface BlogPost {
	metadata: BlogPostMetadata;
	default: SvelteComponent;
}
