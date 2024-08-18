<script lang="ts">
	import TableBody from 'flowbite-svelte/TableBody.svelte';
	import TableBodyCell from 'flowbite-svelte/TableBodyCell.svelte';
	import TableBodyRow from 'flowbite-svelte/TableBodyRow.svelte';
	import TableHead from 'flowbite-svelte/TableHead.svelte';
	import TableHeadCell from 'flowbite-svelte/TableHeadCell.svelte';
	import TableSearch from 'flowbite-svelte/TableSearch.svelte';
	import { CaretSortSolid } from 'flowbite-svelte-icons';
	import { writable } from 'svelte/store';

	import { hrefConverter } from '$lib/transformers';
	import { t, locale } from '$lib/translations';

	export let tagsPosts: [string, number][];
	let searchTag = '';
	const sortKey = writable(0);
	const sortDirection = writable(1);
	const sortedTags = writable(tagsPosts);
	const sortTable = (key: number) => {
		if ($sortKey === key) {
			sortDirection.update((val) => -val);
		} else {
			sortKey.set(key);
			sortDirection.set(1);
		}
	};
	$: filteredTags = tagsPosts.filter(
		([tag]) => tag.toLowerCase().indexOf(searchTag.toLowerCase()) !== -1
	);
	$: {
		const key = $sortKey;
		const direction = $sortDirection;
		const sorted = filteredTags.sort((a, b) => {
			const valA = a[key];
			const valB = b[key];
			if (valA < valB) {
				return -direction;
			} else if (valA > valB) {
				return direction;
			}
			return 0;
		});
		sortedTags.set(sorted);
	}
</script>

<TableSearch
	placeholder={$t('tagsTable.searchByTag')}
	hoverable={true}
	bind:inputValue={searchTag}
	shadow
>
	<TableHead>
		<TableHeadCell on:click={() => sortTable(0)}
			><div class="flex items-center justify-between">
				{$t('tagsTable.tag')}<CaretSortSolid />
			</div></TableHeadCell
		>
		<TableHeadCell on:click={() => sortTable(1)}
			><div
				class="flex items-center justify-between
				"
			>
				{$t('tagsTable.numberOfPosts')}
				<CaretSortSolid />
			</div></TableHeadCell
		>
		<TableHeadCell><span class="sr-only">{$t('tagsTable.viewPost')}</span></TableHeadCell>
	</TableHead>
	<TableBody tableBodyClass="divide-y">
		{#each $sortedTags as [tag, count]}
			<TableBodyRow>
				<TableBodyCell>{tag}</TableBodyCell>
				<TableBodyCell>{count}</TableBodyCell>
				<TableBodyCell
					><a
						href={hrefConverter(`/tags/${tag}`, $locale)}
						class="text-primary-600 hover:underline dark:text-primary-500"
						>{$t('tagsTable.viewPost')}</a
					></TableBodyCell
				>
			</TableBodyRow>
		{/each}
	</TableBody>
</TableSearch>
