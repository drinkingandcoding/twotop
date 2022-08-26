<script context="module" lang="ts">
	export const prerender = true;
  import RecipeList from '$lib/recipes/RecipeList.svelte';
</script>

<svelte:head>
	<title>Recipes</title>
	<meta name="Recipes | twotop" content="twotop recipes" />
</svelte:head>

<section>
	<RecipeList />
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
