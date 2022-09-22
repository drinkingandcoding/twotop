<script context="module" lang="ts">
  import Recipe from '$lib/recipes/Recipe.svelte';
  import Button from '$lib/button/Button.svelte';
  import { currentBuilderStatus } from '$lib/stores.js';
  import { goto } from '$app/navigation';
</script>

<svelte:head>
  <title>your recipe | twotop</title>
  <meta name="Builder | twotop" content="twotop builder recipe" />
</svelte:head>

<section>
  <!-- TODO Fix this -->
  {#if $currentBuilderStatus.name}
    <Recipe data={$currentBuilderStatus} />
    <Button variant="accent">Submit</Button>
    <Button on:click={() => goto('/builder')}>Edit</Button>
  {:else}
    <span> no data </span>
  {/if}
</section>

<style>
</style>
