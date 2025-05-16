import type { SiteConfig } from '$lib/types/SiteConfig';
import { t } from '$lib/translations';

export function site_config(): SiteConfig {
	return {
		copyrightOwner: 'moonmoonio',
		url: 'http://localhost:5173',
		name: t.get('generic.websiteName'),
		sourceRepository: 'https://github.com/moonmoonio/svelte-blog-template',
		socialMedia: [
			{
				link: 'https://github.com',
				text: 'GitHub',
				icon: 'GithubSolid'
			},
			{
				link: 'https://reddit.com',
				text: 'reddit',
				icon: 'RedditSolid'
			},
			{
				link: 'https://mastodon.social/',
				text: 'mastodon',
				icon: 'SiMastodon',
				link_props: {
					rel: 'me'
				}
			}
		]
	};
}
