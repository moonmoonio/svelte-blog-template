<script lang="ts">
	import type { PageData } from './$types';
	import BlogPost from '$lib/components/BlogPost.svelte';

	export let data: PageData;
</script>

<svelte:head>
	<title>{data.post.metadata.title}</title>
</svelte:head>

<BlogPost metadata={data.post.metadata}>
	<svelte:component this={data.post.default} />
</BlogPost>
