<script lang="ts">
	import { page } from '$app/stores';
	import { locale } from '$lib/translations';

	const blogPost = import(`$lib/blog/posts/${$page.params.slug}/${$locale}.svx`);
</script>

{#await blogPost then post}
	<svelte:component this={post.default} />
{/await}
