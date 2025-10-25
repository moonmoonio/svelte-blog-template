<script lang="ts">
	import Heading from 'flowbite-svelte/Heading.svelte';
	import P from 'flowbite-svelte/P.svelte';
	import { page } from '$app/state';

	import GroupTable from '$lib/components/GroupTable.svelte';
	import { Groupings } from '$lib/enums';
	import { t, locale } from '$lib/translations';
	import { tags, series, categories } from '$lib/blog';

	let grouping;
	switch (page.params.grouping) {
		case Groupings.CATEGORIES:
			grouping = categories;
			break;
		case Groupings.SERIES:
			grouping = series;
			break;
		default:
			grouping = tags;
	}

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
	<title>{$t(`${page.params.grouping}.groupPlural`)}</title>
</svelte:head>

<Heading tag="h1">{$t(`${page.params.grouping}.groupPlural`)}</Heading>
{#if groupingsCount}
	<P class="my-4 text-xl dark:text-gray-400">{$t(`${page.params.grouping}.tableDescription`)}</P>
	<GroupTable groupsPosts={groupingsCount} groupName={page.params.grouping} />
{:else}
	<P class="my-4 text-xl dark:text-gray-400">{$t(`${page.params.grouping}.tableUnavailable`)}</P>
{/if}
