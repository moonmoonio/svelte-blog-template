<script lang="ts">
	import Timeline from 'flowbite-svelte/Timeline.svelte';
	import TimelineItem from 'flowbite-svelte/TimelineItem.svelte';
	import Button from 'flowbite-svelte/Button.svelte';
	import { ArrowRightAltOutline } from 'flowbite-svelte-icons';

	import { locale } from '$lib/translations';

	export let blogPosts;
</script>

<Timeline>
	{#each blogPosts[$locale] as { metadata }}
		<TimelineItem title={metadata.title}>
			<Button>Read more<ArrowRightAltOutline /></Button>
		</TimelineItem>
	{/each}
</Timeline>
