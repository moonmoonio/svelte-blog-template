<script lang="ts">
	import Footer from 'flowbite-svelte/Footer.svelte';
	import FooterCopyright from 'flowbite-svelte/FooterCopyright.svelte';
	import FooterLink from 'flowbite-svelte/FooterLink.svelte';
	import FooterLinkGroup from 'flowbite-svelte/FooterLinkGroup.svelte';
	import * as FlowbiteIcon from 'flowbite-svelte-icons';
	import * as SimpleIcon from 'svelte-icons-pack/si';
	import { Icon } from 'svelte-icons-pack';

	import { hrefConverter } from '$lib/transformers';
	import { site_config } from '$lib/config/site';
	import { t, locale } from '$lib/translations';

	const year = new Date().getFullYear();
	const icon_class = 'mr-1 size-5';

	function pickIcon(icon_name: string) {
		let component;
		let props = {};
		if (icon_name in FlowbiteIcon) {
			component = FlowbiteIcon[icon_name];
			props = { class: icon_class };
		} else {
			component = Icon;
			props = { src: SimpleIcon[icon_name], className: icon_class };
		}
		return { component, props };
	}
</script>

<div class="container mx-auto md:text-xl">
	<hr />
	<Footer>
		<div class="m-6 sm:flex sm:justify-between">
			<FooterCopyright
				href={hrefConverter('/', $locale)}
				by={site_config().copyrightOwner}
				{year}
			/>
			<div class="grid grid-cols-2 gap-8">
				<div>
					<h2 class="font-semibold text-gray-900 dark:text-white">
						{$t('footer.sourceCode')}
					</h2>
					<FooterLinkGroup>
						<div class="mt-1 flex items-center">
							<FlowbiteIcon.GithubSolid class={icon_class} />
							<FooterLink href={site_config().sourceRepository}
								>{$t('footer.repository')}</FooterLink
							>
						</div>
					</FooterLinkGroup>
				</div>
				<div>
					<h2 class="font-semibold text-gray-900 dark:text-white">
						{$t('footer.socialMedia')}
					</h2>
					<FooterLinkGroup>
						{#each site_config().socialMedia as socialMedia}
							<div class="mt-1 flex items-center">
								<svelte:component
									this={pickIcon(socialMedia.icon).component}
									{...pickIcon(socialMedia.icon).props}
								/>
								<FooterLink href={socialMedia.link}>{socialMedia.text}</FooterLink>
							</div>
						{/each}
					</FooterLinkGroup>
				</div>
			</div>
		</div>
	</Footer>
</div>
