<script lang="ts">
  export let variant: string = 'button';
</script>

<button class="dropdownItem {variant}" on:click>
  <slot />
</button>

<style>
  .dropdownItem {
    background: var(--base);
    color: var(--accent);
    font-weight: 500;
    font-size: 0.8rem;
    text-transform: lowercase;
    letter-spacing: var(--global-letter-spacing);
    text-align: left;
    padding: 10px 16px;
    cursor: pointer;
  }

  button.dropdownItem {
    border: none;
  }

  button.dropdownItem:hover {
    background-color: var(--primary-light);
  }
</style>
