<script lang="ts">
	import { v4 as uuidv4 } from 'uuid';
	import BiggerPicture from 'bigger-picture';
	import type { Image } from '$lib/types/Image';
	import { onMount } from 'svelte';

	export let images: Image[];
	const containerId = `${uuidv4()}-images`;
	let divElement: HTMLDivElement;
	let bp;

	onMount(async () => {
		bp = BiggerPicture({ target: divElement });
		const { default: Macy } = await import('macy');
		Macy({
			container: `#${containerId}`,
			trueOrder: true,
			margin: 5,
			columns: 3,
			breakAt: {
				580: {
					columns: 2
				}
			}
		});
	});

	function openBiggerPicture(e: Event) {
		e.preventDefault();
		const target = e.currentTarget as HTMLAnchorElement;
		bp.open({
			items: target.parentElement!.children,
			el: target
		});
	}
</script>

<div bind:this={divElement} class="m-4" id={containerId}>
	{#each images as image}
		<a
			on:click={openBiggerPicture}
			href={image.img}
			data-img={image.img}
			data-height={image.height}
			data-width={image.width}
			data-alt={image.alt}
			data-caption={image.caption}
			data-thumb={image.thumb}
		>
			{#if image.thumb !== undefined}
				<img src={image.thumb} alt={image.alt} loading="lazy" />
			{:else}
				<img src={image.img} alt={image.alt} />
			{/if}
		</a>
	{/each}
</div>

<style>
	img {
		max-width: 100%;
		vertical-align: bottom;
	}
</style>
