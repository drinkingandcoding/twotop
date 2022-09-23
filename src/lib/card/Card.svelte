<div class={`card ${$$props.class}`}>
  <slot />
</div>

<style>
  .card {
    background-color: var(--white);
    border-radius: var(--global-border-radius);
  }
</style>
