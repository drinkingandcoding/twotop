<script context="module" lang="ts">
	import SearchBar from "$lib/searchbar/SearchBar.svelte";

	export const prerender = true;
</script>

<svelte:head>
	<title>home | twotop</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>
		twotop
	</h1>

	<h2>
		search for something
	</h2>
	<SearchBar />

</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
	}
</style>
