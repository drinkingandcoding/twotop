<script lang="ts">
  import { onMount } from 'svelte';
  import { API_BASE_URL } from '$lib/consts';
  import { recipeList } from '../stores';

  const getRecipeURL = API_BASE_URL + '/recipes';
  let isLoading: Boolean = true;
  let isError: Boolean = false;

  onMount(async () => {
    fetch(getRecipeURL)
      .then((response) => response.json())
      .then((data) => {
        recipeList.set(data);
        isLoading = false;
      })
      .catch((error) => {
        console.log(error);
        isError = true;
        isLoading = false;
        return [];
      });
  });
</script>

<div class="recipeList">
  <h1>List of all recipes</h1>

  {#if isLoading}
    <span> Loading </span>
  {/if}

  {#if !isLoading && $recipeList.length}
    {#each $recipeList as recipe}
      <a href={`recipes/${recipe.name}`}> {recipe.name} </a>
    {/each}
  {/if}

  {#if !isLoading && !isError && !$recipeList.length}
    <span> no data </span>
  {/if}

  {#if isError}
    <span> oopsie doopsies there was an error :( </span>
  {/if}
</div>

<style>
</style>
