<script lang="ts">
  import Recipe from '$lib/recipes/Recipe.svelte';
  import { onMount } from 'svelte';
  import { API_BASE_URL } from '$lib/consts';
  import { recipe } from '$lib/stores';
  import { page } from '$app/stores';
  import Loading from '$lib/loading/Loading.svelte';
  import Error from '$lib/error/Error.svelte';

  const urlID: string = $page.url.pathname.split('/recipes/')[1];

  const getRecipeByID = API_BASE_URL + '/recipes/' + urlID;

  let isLoading: Boolean = true;
  let isError: Boolean = false;

  onMount(async () => {
    fetch(getRecipeByID)
      .then((response) => response.json())
      .then((data) => {
        recipe.set(data);
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

<svelte:head>
  <title>recipe | twotop</title>
  <meta name="Recipe | twotop" content="twotop recipe" />
</svelte:head>

{#if isError}
  <Error />
{/if}

{#if isLoading}
  <Loading />
{/if}

{#if !isLoading && !isError}
  <section>
    <Recipe data={$recipe} />
  </section>
{/if}

<style>
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
  }
</style>
