<script lang="ts">
  export let item: string;
  import Icon from '$lib/icon/Icon.svelte';
  const iconSize = '1em';
</script>

<li class="listItem"><Icon name="square" size={iconSize} />&nbsp;{item}<slot /></li>

<style>
  .listItem {
    margin-bottom: 8px;
  }
</style>
