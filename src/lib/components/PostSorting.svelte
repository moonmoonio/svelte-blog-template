<script lang="ts">
	import P from 'flowbite-svelte/P.svelte';
	import Button from 'flowbite-svelte/Button.svelte';
	import ButtonGroup from 'flowbite-svelte/ButtonGroup.svelte';

	import { t } from '$lib/translations';

	export let newestFirst: boolean;
</script>

<svelte:head>
	<title>{$t('blogPostList.title')}</title>
</svelte:head>

<div>
	<P>
		{$t('blogPostList.sortBy')}:
		<ButtonGroup>
			<Button
				color={newestFirst ? 'alternative' : 'green'}
				on:click={() => (newestFirst = true)}
				disabled={newestFirst}
				pill>{$t('blogPostList.newestFirst')}</Button
			><Button
				on:click={() => (newestFirst = false)}
				disabled={!newestFirst}
				color={!newestFirst ? 'alternative' : 'green'}
				pill>{$t('blogPostList.oldestFirst')}</Button
			>
		</ButtonGroup>
	</P>
</div>

<style lang="postcss">
	div :global(p) {
		@apply my-4 md:text-xl dark:text-gray-400;
	}
</style>
