<script lang="ts">
	import Heading from 'flowbite-svelte/Heading.svelte';
	import { page } from '$app/state';
</script>

{#if page.status === 404 && page.error !== null}
	<Heading tag="h1" class="text-4xl font-extrabold">{page.status}: {page.error.message}</Heading>
{/if}
