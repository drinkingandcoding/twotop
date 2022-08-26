<script>
  // import entire JSON file as a default import
  import {dishes} from '$lib/data/all.json';
</script>

<div class="recipeList">
  <h1> List of all recipes by category </h1> 
  {#each dishes as dish}
    <a href={`recipes/${dish}`}> {dish} </a>
  {/each}
</div>

<style>

</style>
