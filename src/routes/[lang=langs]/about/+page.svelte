<script lang="ts">
	import { locale } from '$lib/translations';
	import { aboutPosts } from '$lib/blog';
	import BlogPost from '$lib/components/BlogPost.svelte';
</script>

<svelte:head>
	<title>{aboutPosts[$locale].get('/about').metadata.title}</title>
</svelte:head>

<BlogPost metadata={aboutPosts[$locale].get('/about').metadata}>
	<svelte:component this={aboutPosts[$locale].get('/about').default} />
</BlogPost>
