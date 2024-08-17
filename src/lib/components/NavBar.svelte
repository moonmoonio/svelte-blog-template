<script lang="ts">
	import DarkMode from 'flowbite-svelte/DarkMode.svelte';
	import Dropdown from 'flowbite-svelte/Dropdown.svelte';
	import DropdownItem from 'flowbite-svelte/DropdownItem.svelte';
	import NavBrand from 'flowbite-svelte/NavBrand.svelte';
	import NavHamburger from 'flowbite-svelte/NavHamburger.svelte';
	import NavLi from 'flowbite-svelte/NavLi.svelte';
	import NavUl from 'flowbite-svelte/NavUl.svelte';
	import Navbar from 'flowbite-svelte/Navbar.svelte';
	import { ChevronDownOutline } from 'flowbite-svelte-icons';

	import { Languages } from '$lib/enums';
	import { goto } from '$app/navigation';
	import { hrefConverter } from '$lib/transformers';
	import { page } from '$app/stores';
	import { t, locale } from '$lib/translations';

	const changeLocale = async (new_locale: string) => {
		let url = $page.url.pathname.slice(1 + $locale.length);
		if (url.length === 0) {
			url = '/';
		}
		goto(hrefConverter(url, new_locale));
	};
</script>

<Navbar>
	<NavBrand href={hrefConverter('/', $locale)}>{$t('generic.websiteName')}</NavBrand>
	<NavHamburger />
	<NavUl
		ulClass="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:text-base md:font-medium md:items-center"
	>
		<NavLi href={hrefConverter('/', $locale)}>{$t('navBar.home')}</NavLi>
		<NavLi href={hrefConverter('/blog', $locale)}>{$t('navBar.blog')}</NavLi>
		<NavLi href={hrefConverter('/tags', $locale)}>{$t('navBar.tags')}</NavLi>
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
		<NavLi href={hrefConverter('/about', $locale)}>{$t('navBar.about')}</NavLi>
		<NavLi>
			<DarkMode />
		</NavLi>
	</NavUl>
</Navbar>
