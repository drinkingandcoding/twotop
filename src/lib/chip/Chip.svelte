<script lang="ts">
	export let keyword:string;
</script>

<span class='chip'>{keyword}</span>

<style>
  .chip {
/*    background: var(--primary-medium);*/
    padding: 5px 15px;
    border-radius: var(--global-border-radius);
    border: 1px solid var(--base);
    letter-spacing: var(--global-letter-spacing);
    color: var(--base);
    margin: 0 5px;
    font-size: .8rem;
    text-transform: lowercase;
  }
</style>
