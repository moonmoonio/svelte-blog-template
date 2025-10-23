<script lang="ts">
	import type { PageData } from './$types';

	import Heading from 'flowbite-svelte/Heading.svelte';
	import P from 'flowbite-svelte/P.svelte';
	import { page } from '$app/stores';

	import { t } from '$lib/translations';
	import BlogPostList from '$lib/components/BlogPostList.svelte';

	export let data: PageData;
</script>

<svelte:head>
	<title>
		{$t('tags.title')}:
		{$page.params.slug}
	</title>
</svelte:head>

<Heading tag="h1">{$t('tags.title')}: {$page.params.slug}</Heading>
<P class="my-4 text-xl dark:text-gray-400">{$t('tags.description')}</P>
<BlogPostList blogPosts={data.posts.map((post) => post.metadata)} />
