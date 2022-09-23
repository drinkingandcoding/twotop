<script lang="ts">
  import { onMount } from 'svelte';
  import { API_BASE_URL } from '$lib/consts';
  import { recipeList } from '../stores';

  const getRecipeURL = API_BASE_URL + '/recipes';

  onMount(async () => {
    fetch(getRecipeURL)
      .then((response) => response.json())
      .then((data) => {
        recipeList.set(data);
      })
      .catch((error) => {
        console.log(error);
        return [];
      });
  });
</script>

<div class="recipeList">
  <h1>List of all recipes by category</h1>

  {#if $recipeList.length}
    {#each $recipeList as recipe}
      <a href={`recipes/${recipe.name}`}> {recipe.name} </a>
    {/each}
  {:else}
    <span> Loading </span>
  {/if}
</div>

<style>
</style>
