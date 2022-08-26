<script lang="ts">
	export let keyword:string;
</script>

<span class='chip'>{keyword}</span>

<style>
  .chip {
    background: var(--accent);
    padding: 5px 15px;
    border-radius: 15px;
    color: var(--base);
    margin: 0 5px;
    font-size: .8rem;
    text-transform: lowercase;
  }
</style>
