<script lang="ts">
  import feather from 'feather-icons';
  export const directions = ['n', 'ne', 'e', 'se', 's', 'sw', 'w', 'nw'];

  export let name: string;
  export let direction: string = 'n';
  export let strokeWidth: string = '1';
  export let stroke: string = 'var(--accent)';
  export let size: string = '1em';

  $: icon = feather.icons[name];
  $: rotation = directions.indexOf(direction) * 45;
  $: if (icon) {
    if (stroke) icon.attrs['stroke'] = stroke;
    if (strokeWidth) icon.attrs['stroke-width'] = strokeWidth;
  }
</script>

{#if icon}
  <svg
    {...icon.attrs}
    class="icon"
    style="width: {size}; height: {size}; transform: rotate({rotation}deg);"
  >
    <g>
      {@html icon.contents}
    </g>
  </svg>
{/if}

<style>
  svg {
    width: 1em;
    height: 1em;
    overflow: visible;
    transform-origin: 50% 50%;
  }
</style>
