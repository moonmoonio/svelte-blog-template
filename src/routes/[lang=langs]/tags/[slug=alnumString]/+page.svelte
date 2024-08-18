<script lang="ts">
	import Heading from 'flowbite-svelte/Heading.svelte';
	import P from 'flowbite-svelte/P.svelte';
	import { page } from '$app/stores';

	import { t, locale } from '$lib/translations';
	import { tags } from '$lib/blog';
	import BlogPostList from '$lib/components/BlogPostList.svelte';
</script>

<div class="container mx-auto px-6 py-6 text-xl lg:px-52">
	<Heading tag="h1">{$t('tagPosts.title')} {$page.params.slug}</Heading>
	<P class="my-4 text-xl dark:text-gray-400">{$t('tagPosts.description')}</P>
	<BlogPostList blogPosts={tags[$locale].get($page.params.slug).map((post) => post.metadata)} />
</div>
