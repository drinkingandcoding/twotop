<script lang="ts">
  import Chip from '$lib/chip/Chip.svelte';
  import UnorderedList from '$lib/List/UnorderedList.svelte';
  import ListItem from '$lib/List/ListItem.svelte';
  import DescriptionTerm from '$lib/List/DescriptionTerm.svelte';
  import DescriptionDetails from '$lib/List/DescriptionDetails.svelte';
  import Card from '$lib/card/Card.svelte';
  import CardBody from '$lib/card/CardBody.svelte';
  import CardHeader from '$lib/card/CardHeader.svelte';
  import type { RecipeInterface } from '$lib/data/recipes';
  import type { RecipeByIDInterface } from '$lib/responses';

  export let data: RecipeInterface | RecipeByIDInterface;
</script>

<div class="recipe">
  <div class="banner">
    <!-- Title -->
    <h1 class="section recipe_name">{data.name}</h1>
    <div class="banner_bottom">
      <!-- Ingredients -->
      <div class="section recipe_keywords">
        {#each data.keywords as keyword}
          <Chip {keyword} />
        {/each}
      </div>

      <!-- Category -->
      {#if data.category}
        <div class="section recipe_category">
          <span>Category: {data.category}</span>
        </div>
      {/if}

      <!-- Cuisine -->
      {#if data.recipeCuisine}
        <div>
          <span>Cuisine {data.recipeCuisine}</span>
        </div>
      {/if}

      <!-- Author information -->
      {#if data.author}
        <div class="section recipe_author">
          <span>Recipe by: <a href={data.author.reference}>{data.author.name}</a></span>
        </div>
      {/if}

      <!-- Yield information -->
      {#if data.yield}
        <div class="section recipe_author">
          <span>Yields <b>{data.yield}</b> portions</span>
        </div>
      {/if}

      <!-- Calories -->
      {#if data.nutrition?.calories}
        <div class="section recipe_nutrition">
          <span><b>{data.nutrition.calories}</b> Calories</span>
        </div>
      {/if}
    </div>
  </div>

  <div class="layout">
    <div>
      <!-- Ingredients -->
      <Card class="section recipe_ingredients">
        <CardHeader><h2 class="section_title">Ingredients</h2></CardHeader>
        <CardBody>
          <UnorderedList>
            {#each data.ingredients as ingredient}
              <ListItem item={ingredient} />
            {/each}
          </UnorderedList>
        </CardBody>
      </Card>
    </div>

    <div>
      <!-- Instructions -->
      <Card class="section recipe_instructions">
        <CardHeader><h2 class="section_title">Directions</h2></CardHeader>
        <CardBody>
          {#each data.instructions as instruction, i}
            <div class="step">
              <div>
                <div class="circle">{i + 1}</div>
              </div>
              <dl>
                <div class="title"><DescriptionTerm item={instruction.name} /></div>
                <div class="caption"><DescriptionDetails item={instruction.text} /></div>
              </dl>
            </div>
          {/each}
        </CardBody>
      </Card>
    </div>
  </div>
</div>

<style>
  :global(.section) {
    margin-bottom: 24px;
  }

  .banner {
    background-color: #ee5522;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'%3E%3Cdefs%3E%3CradialGradient id='a' gradientUnits='objectBoundingBox'%3E%3Cstop offset='0' stop-color='%23FB3'/%3E%3Cstop offset='1' stop-color='%23ee5522'/%3E%3C/radialGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='0' y1='750' x2='1550' y2='750'%3E%3Cstop offset='0' stop-color='%23f7882b'/%3E%3Cstop offset='1' stop-color='%23ee5522'/%3E%3C/linearGradient%3E%3Cpath id='s' fill='url(%23b)' d='M1549.2 51.6c-5.4 99.1-20.2 197.6-44.2 293.6c-24.1 96-57.4 189.4-99.3 278.6c-41.9 89.2-92.4 174.1-150.3 253.3c-58 79.2-123.4 152.6-195.1 219c-71.7 66.4-149.6 125.8-232.2 177.2c-82.7 51.4-170.1 94.7-260.7 129.1c-90.6 34.4-184.4 60-279.5 76.3C192.6 1495 96.1 1502 0 1500c96.1-2.1 191.8-13.3 285.4-33.6c93.6-20.2 185-49.5 272.5-87.2c87.6-37.7 171.3-83.8 249.6-137.3c78.4-53.5 151.5-114.5 217.9-181.7c66.5-67.2 126.4-140.7 178.6-218.9c52.3-78.3 96.9-161.4 133-247.9c36.1-86.5 63.8-176.2 82.6-267.6c18.8-91.4 28.6-184.4 29.6-277.4c0.3-27.6 23.2-48.7 50.8-48.4s49.5 21.8 49.2 49.5c0 0.7 0 1.3-0.1 2L1549.2 51.6z'/%3E%3Cg id='g'%3E%3Cuse href='%23s' transform='scale(0.12) rotate(60)'/%3E%3Cuse href='%23s' transform='scale(0.2) rotate(10)'/%3E%3Cuse href='%23s' transform='scale(0.25) rotate(40)'/%3E%3Cuse href='%23s' transform='scale(0.3) rotate(-20)'/%3E%3Cuse href='%23s' transform='scale(0.4) rotate(-30)'/%3E%3Cuse href='%23s' transform='scale(0.5) rotate(20)'/%3E%3Cuse href='%23s' transform='scale(0.6) rotate(60)'/%3E%3Cuse href='%23s' transform='scale(0.7) rotate(10)'/%3E%3Cuse href='%23s' transform='scale(0.835) rotate(-40)'/%3E%3Cuse href='%23s' transform='scale(0.9) rotate(40)'/%3E%3Cuse href='%23s' transform='scale(1.05) rotate(25)'/%3E%3Cuse href='%23s' transform='scale(1.2) rotate(8)'/%3E%3Cuse href='%23s' transform='scale(1.333) rotate(-60)'/%3E%3Cuse href='%23s' transform='scale(1.45) rotate(-30)'/%3E%3Cuse href='%23s' transform='scale(1.6) rotate(10)'/%3E%3C/g%3E%3C/defs%3E%3Cg transform='rotate(0 0 0)'%3E%3Cg transform='rotate(0 0 0)'%3E%3Ccircle fill='url(%23a)' r='3000'/%3E%3Cg opacity='0.5'%3E%3Ccircle fill='url(%23a)' r='2000'/%3E%3Ccircle fill='url(%23a)' r='1800'/%3E%3Ccircle fill='url(%23a)' r='1700'/%3E%3Ccircle fill='url(%23a)' r='1651'/%3E%3Ccircle fill='url(%23a)' r='1450'/%3E%3Ccircle fill='url(%23a)' r='1250'/%3E%3Ccircle fill='url(%23a)' r='1175'/%3E%3Ccircle fill='url(%23a)' r='900'/%3E%3Ccircle fill='url(%23a)' r='750'/%3E%3Ccircle fill='url(%23a)' r='500'/%3E%3Ccircle fill='url(%23a)' r='380'/%3E%3Ccircle fill='url(%23a)' r='250'/%3E%3C/g%3E%3Cg transform='rotate(0 0 0)'%3E%3Cuse href='%23g' transform='rotate(10)'/%3E%3Cuse href='%23g' transform='rotate(120)'/%3E%3Cuse href='%23g' transform='rotate(240)'/%3E%3C/g%3E%3Ccircle fill-opacity='0.1' fill='url(%23a)' r='3000'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    background-attachment: fixed;
    background-size: cover;
    /* background by SVGBackgrounds.com */
    padding: 8px 4px 2px 4px;
  }

  .layout {
    display: flex;
    background: var(--white);
  }
  .layout > div {
    width: 50%;
    padding: 10px;
  }
  .layout > div:first-child {
    margin-right: 20px;
    width: 40%;
  }

  dl {
    padding-left: 46px;
  }

  @media (max-width: 768px) {
    .layout {
      flex-direction: column;
    }
    .layout > div {
      width: 100%;
    }
    .layout > div:first-child {
      width: 100%;
    }

    .recipe_name {
      font-size: 0.8rem;
    }

    .banner_bottom {
      display: flex;
      flex-direction: column;
    }
    .card .section .recipe_ingredients {
      margin-bottom: 0;
    }
  }

  .section_title {
    font-size: 1.4rem;
    font-weight: 700;
    margin: 0;
    color: var(--accent);
  }

  .recipe_name,
  .recipe_author,
  .recipe_category,
  .recipe_author a {
    color: var(--white);
  }
  .recipe_author,
  .recipe_category {
    padding-left: 6px;
  }
  .recipe_name {
    font-size: 3rem;
  }

  /* Keywords / Chips */
  .recipe_keywords {
    /*    float:  right;*/
  }

  /* -------------------------------------------------------------------------
  VERTICAL STEPPERS
-------------------------------------------------------------------------- */
  /* https://codeconvey.com/pure-css-vertical-stepper/ */

  /* Steps */
  .step {
    position: relative;
    min-height: 1em;
    color: var(--accent);
  }
  .step + .step {
    margin-top: 1.5em;
  }
  .step > div:first-child {
    position: static;
    height: 0;
  }
  .step > div:not(:first-child) {
    margin-left: 1.5em;
    padding-left: 1em;
  }
  /* Circle */
  .circle {
    background: var(--primary-medium);
    position: relative;
    width: 1.5em;
    height: 1.5em;
    line-height: 1.5em;
    border-radius: 100%;
    color: var(--white);
    text-align: center;
    box-shadow: 0 0 0 3px var(--white);
    z-index: 2;
  }

  /* Vertical Line */
  .circle:after {
    content: ' ';
    position: absolute;
    display: block;
    top: 1px;
    right: 50%;
    bottom: 1px;
    left: 50%;
    height: 100%;
    width: 1px;
    transform: scale(1, 2);
    transform-origin: 50% -100%;
    background-color: var(--primary-medium);
    z-index: 1;
  }
  .step:last-child .circle:after {
    display: none;
  }

  /* Stepper Titles */
  .title {
    line-height: 1.5em;
    font-weight: bold;
  }
  .caption {
    font-size: 0.8em;
  }
</style>
