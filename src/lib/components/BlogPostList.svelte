<script lang="ts">
	import Timeline from 'flowbite-svelte/Timeline.svelte';
	import TimelineItem from 'flowbite-svelte/TimelineItem.svelte';
	import Button from 'flowbite-svelte/Button.svelte';
	import { ArrowRightOutline } from 'flowbite-svelte-icons';

	import { hrefConverter } from '$lib/transformers';
	import { t, locale } from '$lib/translations';
	import { sortBlogPosts } from '$lib/types/BlogPostMetadata';
	import type { BlogPostMetadata } from '$lib/types/BlogPostMetadata';

	export let blogPosts: BlogPostMetadata[];
	export let numPosts: number | null = null;

	const sortPosts = (posts: BlogPostMetadata[]) => {
		posts = posts.sort(sortBlogPosts);
		if (numPosts !== null) {
			posts = posts.splice(0, numPosts);
		}
		return posts;
	};
</script>

<div>
	<Timeline>
		{#each sortPosts(blogPosts) as metadata}
			<div class="m-6 flex w-auto items-center rounded-lg bg-gray-50 py-2 dark:bg-gray-900">
				<TimelineItem
					title={metadata.title}
					date={new Date(metadata.publishDate).toLocaleDateString($locale)}
				>
					{#if metadata.summary !== undefined}
						<p class="mb-1 font-normal text-gray-500 dark:text-gray-400">{metadata.summary}</p>
					{/if}
					<div class="pt-2">
						<Button color="alternative" href={hrefConverter(`/blog/${metadata.slug}`, $locale)}
							>{$t('blogPostList.readMore')}<ArrowRightOutline class="ms-2 h-5 w-5" /></Button
						>
					</div>
				</TimelineItem>
			</div>
		{/each}
	</Timeline>
</div>

<style lang="postcss">
	div :global(h3) {
		@apply text-2xl md:text-4xl;
	}
	div :global(li) {
		@apply mb-4;
	}
</style>
