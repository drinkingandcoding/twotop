<script context="module" lang="ts">
	export const prerender = true;
  import Recipe from '$lib/recipes/Recipe.svelte';
	// import entire JSON file as a default import
	import recipe from '$lib/data/biscuits.json';
</script>

<svelte:head>
	<title>recipe | twotop</title>
	<meta name="Recipe | twotop" content="twotop recipe" />
</svelte:head>

<section>
	<Recipe data={recipe}/>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}
</style>
