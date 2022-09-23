<script context="module" lang="ts">
  import Recipe from '$lib/recipes/Recipe.svelte';
</script>

<svelte:head>
  <title>recipe | twotop</title>
  <meta name="Recipe | twotop" content="twotop recipe" />
</svelte:head>

<section>
  <Recipe />
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
