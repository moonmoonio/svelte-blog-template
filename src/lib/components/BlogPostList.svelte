<script lang="ts">
	import Timeline from 'flowbite-svelte/Timeline.svelte';
	import TimelineItem from 'flowbite-svelte/TimelineItem.svelte';
	import Button from 'flowbite-svelte/Button.svelte';
	import { ArrowRightOutline } from 'flowbite-svelte-icons';

	import { hrefConverter } from '$lib/transformers';
	import { locale } from '$lib/translations';
	import type { BlogPosts } from '$lib/types/BlogPosts';

	export let blogPosts: BlogPosts;
</script>

<div class="container mx-auto px-6 py-6 text-xl lg:px-52">
	<Timeline>
		{#each blogPosts[$locale].entries() as [slug, post]}
			<div class="m-6 flex w-auto items-center rounded-lg bg-gray-50 py-2 dark:bg-gray-900">
				<TimelineItem
					title={post.metadata.title}
					date={new Date(post.metadata.publishDate).toLocaleDateString($locale)}
				>
					<p class="mb-4 font-normal text-gray-500 dark:text-gray-400">Lorem ipsum</p>
					<Button color="alternative" href={hrefConverter(`/blog/${slug}`, $locale)}
						>Read more<ArrowRightOutline class="ms-2 h-5 w-5" /></Button
					>
				</TimelineItem>
			</div>
		{/each}
	</Timeline>
</div>

<style lang="postcss">
	div :global(h3) {
		@apply text-2xl md:text-4xl;
	}
</style>
