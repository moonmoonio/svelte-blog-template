<script lang="ts">
	import { page } from '$app/stores';

	import { locale } from '$lib/translations';
	import { posts } from '$lib/blog';
	import BlogPost from '$lib/components/BlogPost.svelte';
</script>

<BlogPost metadata={posts[$locale].get($page.params.slug).metadata}>
	<svelte:component this={posts[$locale].get($page.params.slug).default} />
</BlogPost>
