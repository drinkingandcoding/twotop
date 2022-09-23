<script lang="ts">
  export let variant: 'danger' | 'warning' | 'info' | 'success' = 'info';
  export let isInline: Boolean = false;
</script>

<div class="alert {variant} {isInline ? 'inline' : 'block'}">
  <span><slot /></span>
</div>

<style>
  .alert {
    --alert-hue: var(--red-hue);

    border: 2px solid hsla(var(--alert-hue), 95%, 80%);
    border-radius: var(--global-border-radius);
    background-color: hsla(var(--alert-hue), 95%, 98%);
    height: 25px;
    font-size: 0.8rem;
    letter-spacing: var(--global-letter-spacing);
    font-weight: 800;
    display: flex;
    align-items: center;
  }

  .alert span {
    width: 100%;
    text-align: center;
    color: var(--alert-color);
  }

  .alert.warning {
    --alert-hue: var(--yellow-hue);
  }

  .alert.info {
    --alert-hue: var(--blue-hue);
  }

  .alert.success {
    --alert-hue: var(--green-hue);
  }
</style>
