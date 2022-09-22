<script context="module" lang="ts">
  import Recipe from '$lib/recipes/Recipe.svelte';
  import { currentBuilderStatus } from '$lib/stores.js';
</script>

<svelte:head>
  <title>your recipe | twotop</title>
  <meta name="Builder | twotop" content="twotop builder recipe" />
</svelte:head>

<section>
  <!-- TODO Fix this -->
  {#if $currentBuilderStatus.name}
    <Recipe data={$currentBuilderStatus} />
  {:else}
    <span> no data </span>
  {/if}
</section>

<style>
</style>
