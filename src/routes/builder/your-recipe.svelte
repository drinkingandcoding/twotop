<script context="module" lang="ts">
  import Recipe from '$lib/recipes/Recipe.svelte';
  import Button from '$lib/button/Button.svelte';
  import { currentBuilderStatus } from '$lib/stores.js';
  import { goto } from '$app/navigation';
  import { isAuthenticated } from '$lib/stores';
  import Alert from '$lib/alert/Alert.svelte';

  const submitRecipe = () => {
    console.log('yay');
  };
</script>

<svelte:head>
  <title>your recipe | twotop</title>
  <meta name="Builder | twotop" content="twotop builder recipe" />
</svelte:head>

<section>
  {#if !$isAuthenticated}
    <Alert variant="danger">You must be authenticated to submit recipes</Alert>
  {/if}

  {#if $currentBuilderStatus.name}
    <Recipe data={$currentBuilderStatus} />
    <div class="actions">
      {#if $isAuthenticated}
        <Button variant="accent" on:click={submitRecipe}>Submit</Button>
      {/if}
      <Button on:click={() => goto('/builder')}>Edit</Button>
    </div>
  {:else}
    <span> no data </span>
  {/if}
</section>

<style>
  .actions {
    margin-top: var(--global-padding-y);
    display: flex;
    gap: 12px;
    justify-content: center;
  }
</style>
