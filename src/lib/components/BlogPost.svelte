<script lang="ts">
	import P from 'flowbite-svelte/P.svelte';

	import type { BlogPostMetadata } from '$lib/types/BlogPostMetadata';
	import { locale } from '$lib/translations';

	export let metadata: BlogPostMetadata;
</script>

<div class="container mx-auto p-6 text-xl">
	<h1>{metadata.title}</h1>
	<P class="text-xl dark:text-gray-400" align="right"
		>{new Date(metadata.publishDate).toLocaleDateString($locale)}</P
	>
	<hr />
	<slot />
</div>

<style lang="postcss">
	div :global(h1) {
		@apply text-4xl font-extrabold leading-relaxed md:text-6xl dark:text-white;
	}
	div :global(h2) {
		@apply text-2xl font-extrabold leading-relaxed md:text-4xl dark:text-white;
	}
	div :global(h3) {
		@apply text-xl font-extrabold leading-relaxed md:text-2xl dark:text-white;
	}
	div :global(p) {
		@apply py-1 text-xl leading-normal dark:text-white;
	}
	div :global(ul) {
		@apply list-inside list-disc pl-6 text-xl leading-normal dark:text-white;
	}
	div :global(ol) {
		@apply list-inside list-decimal pl-6 text-xl leading-normal dark:text-white;
	}
	div :global(pre) {
		@apply text-xl dark:text-white;
	}
</style>
