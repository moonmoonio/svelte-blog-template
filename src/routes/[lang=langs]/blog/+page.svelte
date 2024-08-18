<script lang="ts">
	import { posts } from '$lib/blog';
	import BlogPostList from '$lib/components/BlogPostList.svelte';
</script>

<BlogPostList blogPosts={posts} />
