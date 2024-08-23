<script lang="ts">
	import Heading from 'flowbite-svelte/Heading.svelte';
	import P from 'flowbite-svelte/P.svelte';

	import { t, locale } from '$lib/translations';
	import { posts } from '$lib/blog';
	import BlogPostList from '$lib/components/BlogPostList.svelte';
</script>

<div class="container mx-auto px-6 py-6 md:text-xl lg:px-52">
	<Heading tag="h1">{$t('blogPostList.title')}</Heading>
	<P class="my-4 md:text-xl dark:text-gray-400">{$t('blogPostList.description')}</P>
	<BlogPostList blogPosts={[...posts[$locale].values()].map((post) => post.metadata)} />
</div>
