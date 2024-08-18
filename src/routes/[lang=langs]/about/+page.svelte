<script lang="ts">
	import { locale } from '$lib/translations';
	import { aboutPosts } from '$lib/blog';
	import BlogPost from '$lib/components/BlogPost.svelte';
</script>

<BlogPost metadata={aboutPosts[$locale].get('/about').metadata}>
	<svelte:component this={aboutPosts[$locale].get('/about').default} />
</BlogPost>
