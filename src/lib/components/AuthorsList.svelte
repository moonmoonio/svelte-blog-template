<script lang="ts">
	import P from 'flowbite-svelte/P.svelte';

	import type { Author } from 'feed';

	export let name: string;
	export let authors: Author[];
</script>

<P class="md:text-xl dark:text-gray-400">
	<div id="authors">
		<span>{`${name}: `}</span>
		{#each authors as author, index}
			{#if author.name !== undefined}
				{#if author.link !== undefined}
					<span><a href={author.link}>{author.name}</a></span>
				{:else}
					<span>{author.name}</span>
				{/if}
			{/if}
			{#if author.email !== undefined}
				{#if author.name !== undefined}
					<span>{' '}(<a href={`mailto:${author.email}`}>{author.email}</a>)</span>
				{:else}
					<span><a href={`mailto:${author.email}`}>{author.email}</a></span>
				{/if}
			{/if}
			{#if index < authors.length - 1}
				<span>{', '}</span>
			{/if}
		{/each}
	</div>
</P>

<style lang="postcss">
	div :global(p) {
		@apply py-1 leading-normal md:text-xl dark:text-white;
	}
	span {
		white-space: pre;
		display: inline-block;
	}
	#authors {
		display: flex;
	}
</style>
