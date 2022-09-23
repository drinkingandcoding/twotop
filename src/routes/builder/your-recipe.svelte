<script lang="ts">
  import { onMount } from 'svelte';
  import Recipe from '$lib/recipes/Recipe.svelte';
  import Button from '$lib/button/Button.svelte';
  import { currentBuilderStatus } from '$lib/stores.js';
  import { API_BASE_URL } from '$lib/consts';
  import { goto } from '$app/navigation';
  import { isAuthenticated, user } from '$lib/stores';
  import Alert from '$lib/alert/Alert.svelte';
  import Icon from '$lib/icon/Icon.svelte';
  let hasSubmittedRecipe = false;

  const postRecipe = API_BASE_URL + '/recipes';

  onMount(async () => {
    if (!$currentBuilderStatus.name) {
      goto('/builder');
    }
  });

  async function submitRecipe() {
    const postData = {
      userID: $user.sub,
      ...$currentBuilderStatus
    };

    console.log(postData);

    const res = await fetch(postRecipe, {
      method: 'POST',
      body: JSON.stringify(postData)
    });

    // const json = await res.json();
    // const result = json;
    hasSubmittedRecipe = true;
  }
</script>

<svelte:head>
  <title>your recipe | twotop</title>
  <meta name="Builder | twotop" content="twotop builder recipe" />
</svelte:head>

<section>
  {#if !$isAuthenticated}
    <Alert variant="danger">You must be authenticated to submit recipes</Alert>
  {/if}

  {#if $currentBuilderStatus.name && !hasSubmittedRecipe}
    <Recipe data={$currentBuilderStatus} />
    <div class="actions">
      {#if $isAuthenticated}
        <Button variant="accent" on:click={submitRecipe}>Submit</Button>
      {/if}
      <Button on:click={() => goto('/builder')}>Edit</Button>
    </div>
  {:else}
    <span> No recipe built, redirecting </span>
  {/if}

  {#if hasSubmittedRecipe}
    <section class="thanks">
      <Icon name="check-circle" size="50px" />
      <span> Thanks for submitting your recipe! </span>
    </section>
  {/if}
</section>

<style>
  .actions {
    margin-top: var(--global-padding-y);
    display: flex;
    gap: 12px;
    justify-content: center;
  }

  .thanks {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .thanks :global(svg) {
    stroke: hsla(var(--green-hue), 95%, 40%);
  }

  .thanks span {
    margin-top: var(--global-padding-x);
    letter-spacing: var(--global-letter-spacing);
    text-transform: lowercase;
    font-weight: 500;
  }
</style>
