<script lang="ts">
	import Heading from 'flowbite-svelte/Heading.svelte';
	import P from 'flowbite-svelte/P.svelte';

	import { t, locale } from '$lib/translations';
	import { posts } from '$lib/blog';
	import BlogPostList from '$lib/components/BlogPostList.svelte';
	import PostSorting from '$lib/components/PostSorting.svelte';

	let newestFirst: boolean = true;
</script>

<svelte:head>
	<title>{$t('blogPostList.title')}</title>
</svelte:head>

<Heading tag="h1">{$t('blogPostList.title')}</Heading>
<div>
	<P>{$t('blogPostList.description')}.</P>
	<PostSorting bind:newestFirst />
</div>
<BlogPostList blogPosts={[...posts[$locale].values()].map((post) => post.metadata)} {newestFirst} />

<style lang="postcss">
	div :global(p) {
		@apply my-4 md:text-xl dark:text-gray-400;
	}
</style>
