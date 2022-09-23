<script context="module" lang="ts">
  import RecipeList from '$lib/recipes/RecipeList.svelte';
</script>

<svelte:head>
  <title>recipes | twotop</title>
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
