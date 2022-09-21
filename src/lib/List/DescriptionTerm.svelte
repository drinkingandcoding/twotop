<script lang="ts">
  export let item:string;
</script>

<dt class="descriptionTerm">
    {item}<slot/>
</dt>

<style>
  .descriptionTerm{
    font-weight: bold;
    text-transform: lowercase;
    font-size: 1rem;
    color: var(--accent);
  }
</style>
