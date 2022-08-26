<script lang="ts">
  import Chip from '$lib/chip/Chip.svelte';
  import UnorderedList from '$lib/List/UnorderedList.svelte';
  import ListItem from '$lib/List/ListItem.svelte';
  import type { RecipeInterface } from '$lib/data/recipes';
  import DescriptionTerm from '$lib/List/DescriptionTerm.svelte';
  import DescriptionDetails from '$lib/List/DescriptionDetails.svelte';
  export let data:RecipeInterface;
</script>

<div class="recipe">
  <!-- Title -->
  <h1 class="section receipe_name">{data.name}</h1>

  <!-- Ingredients -->
  <div class="section recipe_keywords">
    {#each data.keywords as keyword}
      <Chip keyword={keyword}/>
    {/each}
  </div>

  <!-- Author information -->
  {#if data.author }
    <div class="section recipe_author">
      <span>Receipe by: <a href={data.author.reference}>{data.author.name}</a></span> 
    </div>
  {/if}

  <!-- Ingredients -->
  <div class="section recipe_ingredients">
    <h2 class="section_title">Ingredients</h2>
    <UnorderedList>
      {#each data.ingredients as ingredient}
        <ListItem item={ingredient}/>
      {/each}
    </UnorderedList>
  </div>

  <!-- Instructions -->
  <div class="section recipe_instructions">
    <h2 class="section_title">Instructions</h2>
    <dl>
      {#each data.instructions as instruction}
        <DescriptionTerm item={instruction.name}/>
        <DescriptionDetails item={instruction.text}/>
      {/each}
    </dl>
  </div>
</div>

<style>
  .section {
    margin-bottom: 24px;
  }

  .section_title {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 8px;
    color: var(--accent);
  }

  .section_title:after {
    width: 250px;
    height: 2px;
    background-color: var(--accent);
    position: relative;
    content: "";
    bottom: 0;
    display: block;
  }


  /* Keywords / Chips */
  .recipe_keywords {
    display: flex;
    justify-content: center;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
  }


</style>
