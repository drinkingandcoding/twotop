<script lang="ts">
  import { onMount } from 'svelte';
  import { API_BASE_URL } from '$lib/consts';
  import { recipeList } from '../stores';
  import Loading from '$lib/loading/Loading.svelte';
  import Error from '$lib/error/Error.svelte';

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

  {#if isError}
    <Error />
  {/if}

  {#if isLoading}
    <Loading />
  {/if}

  {#if !isLoading && $recipeList.length}
    <ul>
      {#each $recipeList as recipe}
        <li><a href={`recipes/${recipe.ID}`}> {recipe.name} </a></li>
      {/each}
    </ul>
  {/if}

  {#if !isLoading && !isError && !$recipeList.length}
    <span> no data </span>
  {/if}
</div>

<style>
</style>
