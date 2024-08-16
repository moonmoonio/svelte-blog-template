<script lang='ts'>
	import NavHamburger from 'flowbite-svelte/NavHamburger.svelte'
	import NavLi from 'flowbite-svelte/NavLi.svelte'
	import NavUl from 'flowbite-svelte/NavUl.svelte'
	import Navbar from 'flowbite-svelte/Navbar.svelte'
	import {t, locale} from '$lib/translations'
</script>

<Navbar>
	<NavHamburger>
		<NavUl>
			<NavLi href={`/${locale}`}>{$t('navBar.home')}</NavLi>
			<NavLi href={`/${locale}/about`}>{$t('navBar.about')}</NavLi>
		</NavUl>
	</NavHamburger>
</Navbar>
