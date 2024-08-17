<script lang="ts">
	import Footer from 'flowbite-svelte/Footer.svelte';
	import FooterCopyright from 'flowbite-svelte/FooterCopyright.svelte';
	import FooterLink from 'flowbite-svelte/FooterLink.svelte';
	import FooterLinkGroup from 'flowbite-svelte/FooterLinkGroup.svelte';

	import { hrefConverter } from '$lib/transformers';
	import { site_config } from '$lib/config/site';
	import { t, locale } from '$lib/translations';

	const year = new Date().getFullYear();
</script>

<hr />
<Footer>
	<div class="m-6 sm:flex sm:items-center sm:justify-between">
		<FooterCopyright href={hrefConverter('/', $locale)} by={site_config().copyrightOwner} {year} />
		<FooterLinkGroup
			ulClass="flex flex-wrap items-center mt-3 text-sm ext-gray-500 dark:text-gray-400 sm:mt-0"
		>
			<FooterLink href={hrefConverter('/about', $locale)}>{$t('navBar.about')}</FooterLink>
		</FooterLinkGroup>
	</div>
</Footer>
