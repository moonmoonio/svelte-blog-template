<script lang="ts">
	import BiggerPicture from 'bigger-picture';
	import type { Image } from '$lib/types/Image';
	import { onMount } from 'svelte';

	export let images: Image[];
	let divElement: HTMLDivElement;
	let bp;

	onMount(() => {
		bp = BiggerPicture({ target: divElement });
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

<div bind:this={divElement} class="m-4">
	{#each images as image}
		<a
			on:click={openBiggerPicture}
			href={image.img}
			data-img={image.img}
			data-height={image.height}
			data-width={image.width}
			data-alt={image.alt}
			data-caption={image.caption}
		>
			<img src={image.img} alt={image.alt} />
		</a>
	{/each}
</div>

<style>
	img {
		max-width: 100%;
		vertical-align: bottom;
	}
</style>
