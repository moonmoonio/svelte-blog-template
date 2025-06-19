<script lang="ts">
	import P from 'flowbite-svelte/P.svelte';

	import type { BlogPostMetadata } from '$lib/types/BlogPostMetadata';
	import AuthorsList from '$lib/components/AuthorsList.svelte';
	import TagList from '$lib/components/TagList.svelte';
	import { t, locale } from '$lib/translations';

	export let metadata: BlogPostMetadata;
</script>

<div>
	<h1>{metadata.title}</h1>
	{#if metadata.authors !== undefined}
		<AuthorsList name={$t('blogPost.authors')} authors={metadata.authors} />
	{/if}
	{#if metadata.contributors !== undefined}
		<AuthorsList name={$t('blogPost.contributors')} authors={metadata.contributors} />
	{/if}
	{#if metadata.tags !== undefined}
		<TagList tags={metadata.tags} />
	{/if}
	<P class="md:text-xl dark:text-gray-400" align="right">
		{$t('blogPost.publishDate')}{': '}{new Date(metadata.publishDate).toLocaleDateString($locale)}
		{#if metadata.updatedDate !== undefined}
			({$t('blogPost.lastEditedDate')}{': '}{new Date(metadata.updatedDate).toLocaleDateString(
				$locale
			)})
		{/if}
	</P>
	<hr />
	<main>
		<slot />
	</main>
</div>

<style lang="postcss">
	div :global(h1) {
		@apply text-2xl font-extrabold leading-relaxed md:text-4xl lg:text-6xl dark:text-white;
	}
	div :global(h2) {
		@apply text-xl font-extrabold leading-relaxed md:text-2xl lg:text-4xl dark:text-white;
	}
	div :global(h3) {
		@apply font-extrabold leading-relaxed md:text-xl lg:text-2xl dark:text-white;
	}
	div :global(p) {
		@apply py-1 leading-normal md:text-xl dark:text-white;
	}
	div :global(ul) {
		@apply list-inside list-disc pl-6 leading-normal md:text-xl dark:text-white;
	}
	div :global(ol) {
		@apply list-inside list-decimal pl-6 leading-normal md:text-xl dark:text-white;
	}
	div :global(pre) {
		@apply rounded-lg bg-gray-100 p-4 md:text-xl dark:bg-gray-700 dark:text-white;
	}
	div :global(code) {
		@apply rounded-lg bg-gray-100 p-1 md:text-xl dark:bg-gray-700 dark:text-white;
	}
	main :global(a) {
		@apply font-medium text-blue-600 hover:underline dark:text-blue-500;
	}
</style>
