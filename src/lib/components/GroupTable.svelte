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

	export let groupsPosts: [string, number][];
	export let groupName: string;

	let searchGroup = '';
	const sortKey = writable(0);
	const sortDirection = writable(1);
	const sortedGroups = writable(groupsPosts);
	const sortTable = (key: number) => {
		if ($sortKey === key) {
			sortDirection.update((val) => -val);
		} else {
			sortKey.set(key);
			sortDirection.set(1);
		}
	};
	$: filteredGroups = groupsPosts.filter(
		([group]) => group.toLowerCase().indexOf(searchGroup.toLowerCase()) !== -1
	);
	$: {
		const key = $sortKey;
		const direction = $sortDirection;
		const sorted = filteredGroups.sort((a, b) => {
			const valA = a[key];
			const valB = b[key];
			if (valA < valB) {
				return -direction;
			} else if (valA > valB) {
				return direction;
			}
			return 0;
		});
		sortedGroups.set(sorted);
	}
</script>

<TableSearch
	placeholder={$t(`${groupName}.searchByGroup`)}
	hoverable={true}
	bind:inputValue={searchGroup}
	shadow
>
	<TableHead>
		<TableHeadCell on:click={() => sortTable(0)}
			><div class="flex items-center justify-between">
				{$t(`${groupName}.group`)}<CaretSortSolid />
			</div></TableHeadCell
		>
		<TableHeadCell on:click={() => sortTable(1)}
			><div
				class="flex items-center justify-between
				"
			>
				{$t(`${groupName}.numberOfPosts`)}
				<CaretSortSolid />
			</div></TableHeadCell
		>
		<TableHeadCell><span class="sr-only">{$t(`${groupName}.viewPost`)}</span></TableHeadCell>
	</TableHead>
	<TableBody tableBodyClass="divide-y">
		{#each $sortedGroups as [group, count]}
			<TableBodyRow>
				<TableBodyCell>{group}</TableBodyCell>
				<TableBodyCell>{count}</TableBodyCell>
				<TableBodyCell
					><a
						href={hrefConverter(`/${groupName}/${group}`, $locale)}
						class="text-primary-600 hover:underline dark:text-primary-500"
						>{$t(`${groupName}.viewPost`)}</a
					></TableBodyCell
				>
			</TableBodyRow>
		{/each}
	</TableBody>
</TableSearch>
