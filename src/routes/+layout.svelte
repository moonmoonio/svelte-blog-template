<script>
	import '../app.css';
	import 'bigger-picture/css';
	import NavBar from '$lib/components/NavBar.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<NavBar />
<main>
	<slot />
</main>
<Footer />
