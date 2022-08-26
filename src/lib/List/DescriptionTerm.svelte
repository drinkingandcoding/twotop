<script lang="ts">
  export let item:string;
</script>

<dt class="descriptionTerm">{item}<slot/></dt>

<style>
  .descriptionTerm{
    font-weight: bold;
    text-transform: uppercase;
    font-size: .8rem;
    color: var(--primary-medium);
    margin-bottom: 4px;
  }
</style>
