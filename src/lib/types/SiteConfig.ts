import type { SocialMedia } from '$lib/types/SocialMedia';

export interface SiteConfig {
	name: string;
	socialMedia: SocialMedia[];
	sourceRepository: string;
	url: string;
}
