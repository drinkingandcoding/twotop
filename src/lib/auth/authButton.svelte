<script lang="ts">
  import { onMount } from 'svelte';
  import auth from '$lib/auth/authService';
  import { isAuthenticated, user } from '$lib/stores';
  import UserDropdown from '$lib/user/UserDropdown.svelte';
  import type { Auth0Client } from '@auth0/auth0-spa-js';

  let auth0Client: Auth0Client;

  onMount(async () => {
    auth0Client = await auth.createClient();

    isAuthenticated.set(await auth0Client.isAuthenticated());
    user.set((await auth0Client.getUser()) || {});
  });

  const login = () => {
    auth.loginWithPopup(auth0Client);
  };

  const logout = () => {
    auth.logout(auth0Client);
  };
</script>

{#if !$isAuthenticated}
  <button on:click={login} class={$$props.class}> Log in / Sign up </button>
{:else}
  <UserDropdown user={$user} class={$$props.class} {logout} />
{/if}

<style>
</style>
