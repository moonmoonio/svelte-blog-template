<script lang="ts">
	import type { PageData } from './$types';
	import BlogPost from '$lib/components/BlogPost.svelte';
	import { locale } from '$lib/translations';
	import { site_config } from '$lib/config/site';

	export let data: PageData;
</script>

<svelte:head>
	<title>{data.post.metadata.title}</title>
	{#if data.post.metadata.og_image !== undefined}
		<meta property="og:image" content={data.post.metadata.og_image} />
	{/if}
	{#if data.post.metadata.summary !== undefined}
		<meta property="og:description" content={data.post.metadata.summary} />
	{/if}
	<meta property="og:title" content={data.post.metadata.title} />
	<meta property="og:locale" content={$locale} />
	<meta property="og:site_name" content={site_config().name} />
</svelte:head>

<BlogPost metadata={data.post.metadata}>
	<svelte:component this={data.post.default} />
</BlogPost>
