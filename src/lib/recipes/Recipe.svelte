<script lang="ts">
  import Chip from '$lib/chip/Chip.svelte';
  import UnorderedList from '$lib/List/UnorderedList.svelte';
  import ListItem from '$lib/List/ListItem.svelte';
  import type { RecipeInterface } from '$lib/data/recipes';
  import DescriptionTerm from '$lib/List/DescriptionTerm.svelte';
  import DescriptionDetails from '$lib/List/DescriptionDetails.svelte';
  import Card from '$lib/card/Card.svelte';
  import CardBody from '$lib/card/CardBody.svelte';
  import CardHeader from '$lib/card/CardHeader.svelte';
  export let data:RecipeInterface;
</script>

<div class="recipe">
  <!-- Title -->
  <h1 class="section recipe_name">{data.name}</h1>

  <!-- Ingredients -->
  <div class="section recipe_keywords">
    {#each data.keywords as keyword}
      <Chip keyword={keyword}/>
    {/each}
  </div>

  <!-- Author information -->
  {#if data.author }
    <div class="section recipe_author">
      <span>Recipe by: <a href={data.author.reference}>{data.author.name}</a></span> 
    </div>
  {/if}

  <!-- Yield information -->
  {#if data.yield }
    <div class="section recipe_author">
      <span>Yields <b>{data.yield}</b> portions</span> 
    </div>
  {/if}

  <!-- Ingredients -->
  <Card class="section recipe_ingredients">
    <CardHeader><h2 class="section_title">Ingredients</h2></CardHeader>
    <CardBody>
      <UnorderedList>
        {#each data.ingredients as ingredient}
          <ListItem item={ingredient}/>
        {/each}
      </UnorderedList>
    </CardBody>
  </Card>

  <!-- Instructions -->
  <Card class="section recipe_instructions">
    <CardHeader><h2 class="section_title">Instructions</h2></CardHeader>
    <CardBody>
      <dl>
        {#each data.instructions as instruction}
          <DescriptionTerm item={instruction.name}/>
          <DescriptionDetails item={instruction.text}/>
        {/each}
      </dl>
    </CardBody>
  </Card>
</div>

<style>
  :global(.section) {
    margin-bottom: 24px;
  }

  .section_title {
    font-size: 1rem;
    font-weight: 700;
    margin: 0;
    color: var(--accent);
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
