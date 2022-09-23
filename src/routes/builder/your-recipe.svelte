<script context="module" lang="ts">
  import Recipe from '$lib/recipes/Recipe.svelte';
  import Button from '$lib/button/Button.svelte';
  import { currentBuilderStatus } from '$lib/stores.js';
  import { goto } from '$app/navigation';

  const submitRecipe = () => {
    console.log('yay');
    localStorage.removeItem('recipe');
    console.log(`cleared localstorage ${localStorage.getItem('key')}`);
  };

  const editRecipe = () => {
    console.log('I go edit');
    console.log(localStorage.getItem('recipe'));
    goto('/builder');
  };
</script>

<svelte:head>
  <title>your recipe | twotop</title>
  <meta name="Builder | twotop" content="twotop builder recipe" />
</svelte:head>

<section>
  <!-- TODO Fix this -->
  {#if $currentBuilderStatus.name}
    <Recipe data={$currentBuilderStatus} />
    <Button variant="accent" on:click={submitRecipe}>Submit</Button>
    <Button on:click={editRecipe}>Edit</Button>
  {:else}
    <span> no data </span>
  {/if}
</section>

<style>
</style>
