<script lang="ts">
	import type { PageData } from './$types';
	import BlogPost from '$lib/components/BlogPost.svelte';

	export let data: PageData;
</script>

<BlogPost metadata={data.post.metadata}>
	<svelte:component this={data.post.default} />
</BlogPost>
