<script lang="ts">
  import Recipe from '$lib/recipes/Recipe.svelte';
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';
  import { API_BASE_URL } from '$lib/consts';
  import { recipe } from '$lib/stores';
  import { page } from '$app/stores';
  import Loading from '$lib/loading/Loading.svelte';
  import Error from '$lib/error/Error.svelte';
  import DecisionPopup from '$lib/modals/DecisionPopup.svelte';
  import Button from '$lib/button/Button.svelte';
  import Modal, { bind } from 'svelte-simple-modal';
  import { goto } from '$app/navigation';

  const urlID: string = $page.url.pathname.split('/admin/')[1];

  const getRecipeByID = API_BASE_URL + '/recipes/' + urlID;

  let isLoading: Boolean = true;
  let isError: Boolean = false;
  const modal = writable(null);
  const showModal = (decision: 'approve' | 'deny') => modal.set(bind(DecisionPopup, { decision }));

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

  async function handleDecision(decision: 'approve' | 'deny') {
    let postRecipe = `${API_BASE_URL}/${decision}/${urlID}`;

    // const postData = {
    //   decision
    // };

    // const res = await fetch(postRecipe, {
    //   method: 'POST',
    //   body: JSON.stringify(postData)
    // });

    // const json = await res.json();
    // const result = json;

    console.log(postRecipe);
    showModal(decision);
    setTimeout(() => goto('/admin'), 1500);
  }
</script>

<svelte:head>
  <title>recipe | twotop</title>
  <meta name="admin | twotop" content="twotop admin" />
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
    <div class="recipeActions">
      <span> actions </span>
      <Button variant="success" on:click={() => handleDecision('approve')}>Approve</Button>
      <Button variant="danger" on:click={() => handleDecision('deny')}>Deny</Button>
    </div>
  </section>
  <Modal show={$modal} closeButton={false} />
{/if}

<style>
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
  }

  .recipeActions {
    background-color: var(--base);
    box-shadow: var(--global-box-shadow);
    border-radius: var(--global-border-radius);
    padding: 15px;
    z-index: 2;
    position: fixed;
    display: flex;
    flex-direction: column;
    gap: 15px;
    top: 50px;
    right: 12px;
  }

  .recipeActions span {
    text-align: center;
  }
</style>
