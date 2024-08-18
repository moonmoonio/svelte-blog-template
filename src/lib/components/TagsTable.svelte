<script lang="ts">
	import TableBody from 'flowbite-svelte/TableBody.svelte';
	import TableBodyCell from 'flowbite-svelte/TableBodyCell.svelte';
	import TableBodyRow from 'flowbite-svelte/TableBodyRow.svelte';
	import TableHead from 'flowbite-svelte/TableHead.svelte';
	import TableHeadCell from 'flowbite-svelte/TableHeadCell.svelte';
	import TableSearch from 'flowbite-svelte/TableSearch.svelte';
	import { writable } from 'svelte/store';

	export let tagsPosts: [string, number][];
	let searchTag = '';
	const sortKey = writable(0);
	const sortDirection = writable(1);
	const sortItems = writable(tagsPosts);
	const sortTable = (key: number) => {
		if ($sortKey === key) {
			sortDirection.update((val) => -val);
		} else {
			sortKey.set(key);
			sortDirection.set(1);
		}
	};
	$: filteredItems = tagsPosts.filter(
		([tag]) => tag.toLowerCase().indexOf(searchTag.toLowerCase()) !== -1
	);
	$: {
		const key = $sortKey;
		const direction = $sortDirection;
		const sorted = filteredItems.sort((a, b) => {
			const valA = a[key];
			const valB = b[key];
			if (valA < valB) {
				return -direction;
			} else if (valA > valB) {
				return direction;
			}
			return 0;
		});
		console.info(key, direction, sorted);
		sortItems.set(sorted);
	}
</script>

<TableSearch placeholder="Tag" hoverable={true} bind:inputValue={searchTag} shadow>
	<TableHead>
		<TableHeadCell on:click={() => sortTable(0)}>Tag</TableHeadCell>
		<TableHeadCell on:click={() => sortTable(1)}>Number of posts</TableHeadCell>
	</TableHead>
	<TableBody tableBodyClass="divide-y">
		{#each $sortItems as [tag, count]}
			<TableBodyRow>
				<TableBodyCell>{tag}</TableBodyCell>
				<TableBodyCell>{count}</TableBodyCell>
			</TableBodyRow>
		{/each}
	</TableBody>
</TableSearch>
