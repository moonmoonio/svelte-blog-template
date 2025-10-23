<script lang="ts">
	import Button from 'flowbite-svelte/Button.svelte';
	import P from 'flowbite-svelte/P.svelte';
	import { TagSolid } from 'flowbite-svelte-icons';

	import { t, locale } from '$lib/translations';
	import { hrefConverter } from '$lib/transformers';

	export let tags: string[];
</script>

<div class="flex flex-wrap items-center">
	<P>{$t('tagList.group(s)')}</P>
	{#each tags as tag}
		<div class="m-2">
			<Button color="alternative" href={hrefConverter(`/tags/${tag}`, $locale)}
				><TagSolid class="mr-1" />{tag}</Button
			>
		</div>
	{/each}
</div>
