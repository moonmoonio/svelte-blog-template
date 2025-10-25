<script lang="ts">
	import Heading from 'flowbite-svelte/Heading.svelte';
	import P from 'flowbite-svelte/P.svelte';
	import { page } from '$app/state';

	import GroupTable from '$lib/components/GroupTable.svelte';
	import { Groupings } from '$lib/enums';
	import { t, locale } from '$lib/translations';
	import { tags, series, categories } from '$lib/blog';

	function getGrouping(groupingName: string) {
		switch (groupingName) {
			case Groupings.CATEGORIES:
				return categories;
			case Groupings.SERIES:
				return series;
			default:
				return tags;
		}
	}

	$: groupName = page.params.grouping;
	$: grouping = getGrouping(page.params.grouping);
	let groupingsCount: [string, number][] | undefined;
	$: {
		if (grouping[$locale]) {
			groupingsCount = [...grouping[$locale].entries()].map(
				([grouping, posts]): [string, number] => [grouping, posts.length]
			);
		} else {
			groupingsCount = undefined;
		}
	}
</script>

<svelte:head>
	<title>{$t(`${groupName}.groupPlural`)}</title>
</svelte:head>

<Heading tag="h1">{$t(`${groupName}.groupPlural`)}</Heading>
{#if groupingsCount}
	<P class="my-4 text-xl dark:text-gray-400">{$t(`${groupName}.tableDescription`)}</P>
	<GroupTable groupsPosts={groupingsCount} {groupName} />
{:else}
	<P class="my-4 text-xl dark:text-gray-400">{$t(`${groupName}.tableUnavailable`)}</P>
{/if}
