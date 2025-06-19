<script>
	import '../app.css';
	import 'bigger-picture/css';
	import NavBar from '$lib/components/NavBar.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<NavBar />
<main>
	<div
		class="container mx-auto bg-white bg-white px-6 py-6 md:text-xl lg:px-52 dark:bg-gray-800 dark:bg-gray-800"
	>
		<slot />
	</div>
</main>
<Footer />
