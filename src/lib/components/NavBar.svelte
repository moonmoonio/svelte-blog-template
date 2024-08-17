<script lang="ts">
	import NavBrand from 'flowbite-svelte/NavBrand.svelte';
	import NavHamburger from 'flowbite-svelte/NavHamburger.svelte';
	import NavLi from 'flowbite-svelte/NavLi.svelte';
	import NavUl from 'flowbite-svelte/NavUl.svelte';
	import Navbar from 'flowbite-svelte/Navbar.svelte';

	import { t, locale } from '$lib/translations';
	import { hrefConverter } from '$lib/transformers';
</script>

<Navbar>
	<NavBrand href={hrefConverter('/', locale.get())}>{$t('generic.websiteName')}</NavBrand>
	<NavHamburger />
	<NavUl>
		<NavLi href={hrefConverter('/', locale.get())}>{$t('navBar.home')}</NavLi>
		<NavLi href={hrefConverter('/about', locale.get())}>{$t('navBar.about')}</NavLi>
	</NavUl>
</Navbar>
