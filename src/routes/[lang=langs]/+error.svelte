<script lang="ts">
	import Heading from 'flowbite-svelte/Heading.svelte';
	import { page } from '$app/stores';
</script>

{#if $page.status === 404 && $page.error !== null}
	<div class="container mx-auto px-6 py-6 text-center lg:px-52">
		<Heading tag="h1" class="text-4xl font-extrabold">{$page.status}: {$page.error.message}</Heading
		>
	</div>
{/if}
