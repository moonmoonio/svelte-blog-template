<script lang="ts">
	import { page } from '$app/stores';
	import { locale } from '$lib/translations';
	import { posts } from '$lib/blog';
</script>

<svelte:component this={posts[$locale].get($page.params.slug).default} />
