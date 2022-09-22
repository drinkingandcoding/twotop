<script lang="ts">
  import { page } from '$app/stores';
  import AuthButton from '$lib/auth/authButton.svelte';
  import Logo from '$lib/logo/Logo.svelte';
</script>

<header class="desktopNav">
  <nav>
    <ul>
      <li class:active={$page.url.pathname === '/'}><a sveltekit:prefetch href="/">Home</a></li>
      <li class:active={$page.url.pathname.includes('/recipes')}>
        <a sveltekit:prefetch href="/recipes">Recipes</a>
      </li>
      <li class:active={$page.url.pathname.includes('/builder')}>
        <a sveltekit:prefetch href="/builder">Builder</a>
      </li>
    </ul>
  </nav>
  <div class="brand">
    <Logo />
  </div>
  <AuthButton class="headerButton" />
</header>

<style>
  header {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    background-color: var(--base);
    padding: 12px 12px 0 12px;
  }

  .brand {
    justify-self: center;
  }

  nav {
    display: flex;
    justify-self: left;
  }

  ul {
    position: relative;
    padding: 0;
    margin: 0;
    height: 2em;
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
  }

  li {
    position: relative;
    height: 100%;
  }

  li.active:after,
  li:hover::after {
    content: '';
    width: 95%;
    height: 2px;
    background-color: var(--accent);
    display: block;
  }

  .brand,
  nav a,
  :global(.headerButton) {
    display: flex;
    height: 100%;
    align-items: center;
    padding: 0 1em;
    color: var(--primary-dark);
    font-weight: 700;
    font-size: 0.8rem;
    text-transform: lowercase;
    letter-spacing: var(--global-letter-spacing);
    text-decoration: none;
  }
  :global(.headerButton) {
    border: none;
    background-color: var(--base);
    cursor: pointer;
    justify-self: right;
  }

  :global(.headerButton):hover,
  :global(.headerButton.open) {
    border: 1px solid var(--accent);
  }
</style>
