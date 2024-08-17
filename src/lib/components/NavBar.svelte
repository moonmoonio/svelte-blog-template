<script lang="ts">
	import NavBrand from 'flowbite-svelte/NavBrand.svelte';
	import NavHamburger from 'flowbite-svelte/NavHamburger.svelte';
	import NavLi from 'flowbite-svelte/NavLi.svelte';
	import NavUl from 'flowbite-svelte/NavUl.svelte';
	import Navbar from 'flowbite-svelte/Navbar.svelte';
	import Dropdown from 'flowbite-svelte/Dropdown.svelte';
	import DropdownItem from 'flowbite-svelte/DropdownItem.svelte';
	import { ChevronDownOutline } from 'flowbite-svelte-icons';

	import { t, locale } from '$lib/translations';
	import { hrefConverter } from '$lib/transformers';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { Languages } from '$lib/enums';

	const changeLocale = async (new_locale: string) => {
		let url = $page.url.pathname.slice(1 + locale.get().length);
		if (url.length === 0) {
			url = '/';
		}
		goto(hrefConverter(url, new_locale));
	};
</script>

<Navbar>
	<NavBrand href={hrefConverter('/', locale.get())}>{$t('generic.websiteName')}</NavBrand>
	<NavHamburger />
	<NavUl>
		<NavLi href={hrefConverter('/', locale.get())}>{$t('navBar.home')}</NavLi>
		<NavLi href={hrefConverter('/blog', locale.get())}>{$t('navBar.blog')}</NavLi>
		<NavLi href={hrefConverter('/tags', locale.get())}>{$t('navBar.tags')}</NavLi>
		<NavLi class="cursor-pointer">
			{$t('navBar.languages')}<ChevronDownOutline class="inline" />
		</NavLi>
		<Dropdown>
			{#each Object.values(Languages) as language}
				<DropdownItem on:click={async () => await changeLocale(language)}
					>{$t(`languages.${language}`)}</DropdownItem
				>
			{/each}
		</Dropdown>
		<NavLi href={hrefConverter('/about', locale.get())}>{$t('navBar.about')}</NavLi>
	</NavUl>
</Navbar>
