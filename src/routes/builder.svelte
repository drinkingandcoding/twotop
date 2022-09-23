<script context="module" lang="ts">
  import Alert from '$lib/alert/Alert.svelte';
  import BuilderForm from '$lib/builderForm/BuilderForm.svelte';
  import { isAuthenticated } from '$lib/stores';
</script>

<svelte:head>
  <title>builder | twotop</title>
  <meta name="Builder | twotop" content="build recipes" />
</svelte:head>

<section>
  <!-- Banner if not authed -->
  {#if !$isAuthenticated}
    <Alert variant="danger">You must be authenticated to submit recipes</Alert>
  {/if}

  <!-- Title -->
  <h1 class="section title">Recipe Builder</h1>
  <BuilderForm />
</section>

<style>
  :global(.alert) {
    margin: 25px 0;
  }
</style>
