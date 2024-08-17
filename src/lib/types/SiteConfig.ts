import type { SocialMedia } from '$lib/types/SocialMedia';

export interface SiteConfig {
	copyrightOwner: string;
	name: string;
	socialMedia: SocialMedia[];
	sourceRepository: string;
	url: string;
}
