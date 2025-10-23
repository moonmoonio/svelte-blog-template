<script lang="ts">
	import Heading from 'flowbite-svelte/Heading.svelte';
	import P from 'flowbite-svelte/P.svelte';

	import { t, locale } from '$lib/translations';
	import { tags } from '$lib/blog';
	import TagsTable from '$lib/components/TagsTable.svelte';

	$: tagsCount = [...tags[$locale].entries()].map(([tag, posts]): [string, number] => [
		tag,
		posts.length
	]);
</script>

<svelte:head>
	<title>{$t('tags.groupPlural')}</title>
</svelte:head>

<Heading tag="h1">{$t('tags.groupPlural')}</Heading>
<P class="my-4 text-xl dark:text-gray-400">{$t('tags.description')}</P>
<TagsTable tagsPosts={tagsCount} />
