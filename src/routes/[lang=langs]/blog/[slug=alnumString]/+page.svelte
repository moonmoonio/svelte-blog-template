<script lang="ts">
	import { page } from '$app/stores';

	import { locale } from '$lib/translations';
	import { posts } from '$lib/blog';
	import BlogPost from '$lib/components/BlogPost.svelte';
</script>

<BlogPost title={posts[$locale].get($page.params.slug).metadata.title}>
	<svelte:component this={posts[$locale].get($page.params.slug).default} />
</BlogPost>
