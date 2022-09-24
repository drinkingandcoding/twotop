<script>
  export let decision = 'approve';
  import Icon from '$lib/icon/Icon.svelte';
</script>

{#if decision === 'approve'}
  <section class="decision approve">
    <Icon name="check-circle" size="50px" />
    <span> You have approved this recipe </span>
  </section>
{/if}

{#if decision === 'deny'}
  <section class="decision deny">
    <Icon name="x-circle" size="50px" />
    <span> You have denied this recipe </span>
  </section>
{/if}

<style>
  .decision {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 25px;
  }

  .approve :global(svg) {
    stroke: hsla(var(--green-hue), 95%, 40%);
  }

  .deny :global(svg) {
    stroke: hsla(var(--red-hue), 95%, 40%);
  }

  .decision span {
    margin: var(--global-padding-x) 0;
    letter-spacing: var(--global-letter-spacing);
    text-transform: lowercase;
    font-weight: 500;
  }
</style>
