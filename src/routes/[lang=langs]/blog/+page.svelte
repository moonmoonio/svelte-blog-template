<script lang="ts">
	import Heading from 'flowbite-svelte/Heading.svelte';
	import P from 'flowbite-svelte/P.svelte';

	import { t, locale } from '$lib/translations';
	import { posts } from '$lib/blog';
	import BlogPostList from '$lib/components/BlogPostList.svelte';
</script>

<svelte:head>
	<title>{$t('blogPostList.title')}</title>
</svelte:head>

<Heading tag="h1">{$t('blogPostList.title')}</Heading>
<P class="my-4 md:text-xl dark:text-gray-400">{$t('blogPostList.description')}</P>
<BlogPostList blogPosts={[...posts[$locale].values()].map((post) => post.metadata)} />
