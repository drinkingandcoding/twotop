<script lang="ts">
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import { user } from '$lib/stores';
  import { API_BASE_URL } from '$lib/consts';
  import { unapprovedRecipeList } from '$lib/stores';
  import Grid from 'gridjs-svelte';
  import { clear_loops } from 'svelte/internal';

  const getUnapprovedRecipes = API_BASE_URL + '/recipes/' + '?approved=false';
  let isLoading: Boolean = true;
  let isError: Boolean = false;
  let recipes: any;

  onMount(async () => {
    if (!$user?.role?.includes('admin')) {
      goto('/');
    }

    fetch(getUnapprovedRecipes)
      .then((response) => response.json())
      .then((data) => {
        unapprovedRecipeList.set(data);
        isLoading = false;
      })
      .catch((error) => {
        console.log(error);
        isError = true;
        isLoading = false;
        return [];
      });
  });

  let newArr = $unapprovedRecipeList.map((recipe) => {
    return {
      id: recipe.ID,
      name: recipe.name,
      created: recipe.CreatedAt,
      user: recipe.userID
    };
  });

  const columns = ['id', 'name', 'created', 'user'];
</script>

<svelte:head>
  <title>admin | twotop</title>
  <meta name="Admin | twotop" content="approve recipes" />
</svelte:head>

<section>
  <h1>Recipes to approve</h1>
  <Grid {columns} data={newArr} />
</section>

<style>
</style>
