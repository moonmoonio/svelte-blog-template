<script lang="ts">
	export let title;
</script>

<div class="container mx-auto p-6 text-xl">
	<h1>{title}</h1>
	<slot />
</div>

<style lang="postcss">
	div :global(h1) {
		@apply text-4xl font-extrabold leading-relaxed md:text-5xl lg:text-6xl dark:text-white;
	}
	div :global(h2) {
		@apply text-4xl font-extrabold leading-relaxed dark:text-white;
	}
	div :global(h3) {
		@apply text-2xl font-extrabold leading-relaxed dark:text-white;
	}
	div :global(p) {
		@apply py-1 text-xl leading-normal dark:text-white;
	}
	div :global(ul) {
		@apply list-inside list-disc pl-6 text-xl leading-normal dark:text-white;
	}
	div :global(ol) {
		@apply list-inside list-decimal pl-6 text-xl leading-normal dark:text-white;
	}
	div :global(pre) {
		@apply text-xl dark:text-white;
	}
</style>
