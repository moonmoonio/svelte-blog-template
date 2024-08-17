import type { SiteConfig } from '$lib/types/SiteConfig';
import { t } from '$lib/translations';

export function site_config(): SiteConfig {
	return {
		url: 'localhost',
		name: t.get('generic.websiteName'),
		sourceRepository: 'https://github.com/moonmoonio/svelte-blog-template',
		socialMedia: [
			{
				link: 'https://github.com/moonmoonio',
				text: '@moonmoonio@github.com'
			}
		]
	};
}