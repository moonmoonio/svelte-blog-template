<script lang="ts">
	import Footer from 'flowbite-svelte/Footer.svelte';
	import FooterCopyright from 'flowbite-svelte/FooterCopyright.svelte';
	import FooterLink from 'flowbite-svelte/FooterLink.svelte';
	import FooterLinkGroup from 'flowbite-svelte/FooterLinkGroup.svelte';
	import * as Icon from 'flowbite-svelte-icons';

	import { hrefConverter } from '$lib/transformers';
	import { site_config } from '$lib/config/site';
	import { t, locale } from '$lib/translations';

	const year = new Date().getFullYear();

	function pickIcon(icon_name: string) {
		return Icon[icon_name];
	}
</script>

<hr />
<Footer>
	<div class="m-6 sm:flex sm:items-center sm:justify-between">
		<FooterCopyright href={hrefConverter('/', $locale)} by={site_config().copyrightOwner} {year} />
		<div>
			<h2 class="text-sm font-semibold text-gray-900 dark:text-white">
				{$t('footer.socialMedia')}
			</h2>
			<FooterLinkGroup>
				{#each site_config().socialMedia as socialMedia}
					<div class="flex items-center">
						<svelte:component this={pickIcon(socialMedia.icon)} class="mr-1" />
						<FooterLink href={socialMedia.link}>{socialMedia.text}</FooterLink>
					</div>
				{/each}
			</FooterLinkGroup>
		</div>
	</div>
</Footer>
