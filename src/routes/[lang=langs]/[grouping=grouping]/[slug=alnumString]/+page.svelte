<script lang="ts">
	import type { PageData } from './$types';

	import Heading from 'flowbite-svelte/Heading.svelte';
	import P from 'flowbite-svelte/P.svelte';
	import { page } from '$app/state';

	import { t } from '$lib/translations';
	import BlogPostList from '$lib/components/BlogPostList.svelte';
	import PostSorting from '$lib/components/PostSorting.svelte';

	export let data: PageData;
	let newestFirst: boolean = true;
</script>

<svelte:head>
	<title>
		{$t(`${page.params.grouping}.title`)}:
		{page.params.slug}
	</title>
</svelte:head>

<Heading tag="h1">{$t(`${page.params.grouping}.title`)}: {page.params.slug}</Heading>
<div>
	<P>{$t(`${page.params.grouping}.description`)}</P>
	<PostSorting bind:newestFirst />
</div>
<BlogPostList blogPosts={data.posts.map((post) => post.metadata)} {newestFirst} />

<style lang="postcss">
	div :global(p) {
		@apply my-4 md:text-xl dark:text-gray-400;
	}
</style>
