<script lang="ts">
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import { user } from '$lib/stores';
  import { API_BASE_URL } from '$lib/consts';
  import { unapprovedRecipeList } from '$lib/stores';
  import Grid from 'gridjs-svelte';
  import { html } from 'gridjs';

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

  const generateHref = (id: string) => {
    return `/admin/${id}`;
  };

  const formatTime = (date: string) => {
    return date.split('T')[0];
  };

  const formatUser = (user: string) => {
    return user.split('auth0|')[1];
  };

  const columns = [
    {
      name: 'id',
      formatter: (cell: string) => html(`<a href=${generateHref(cell)}>${cell}</a>`)
    },
    'name',
    {
      name: 'created',
      formatter: (cell: string) => html(`<span>${formatTime(cell)}</span>`)
    },
    {
      name: 'user',
      formatter: (cell: string) => html(`<span>${formatUser(cell)}</span>`)
    }
  ];
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
  :global(.gridjs-table) {
    background-color: var(--primary);
    border-radius: var(--global-border-radius);
    box-shadow: var(--global-box-shadow);
    margin-left: auto;
    margin-right: auto;
    border-collapse: collapse;
  }

  :global(.gridjs-thead) {
    background-color: var(--primary-light);
  }

  :global(.gridjs-tr) {
    border-bottom: 1px solid var(--primary-light);
  }
  :global(.gridjs-th-content) {
    padding: var(--global-padding-x);
  }

  :global(.gridjs-td) {
    padding: var(--global-padding-x);
  }
</style>
