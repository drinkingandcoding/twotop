<script lang="ts">
  import { goto } from "$app/navigation";
  import Button from "$lib/button/Button.svelte";
  import type { AuthorInterface, InstructionsInterface } from "$lib/data/recipes";
  import DescriptionDetails from "$lib/List/DescriptionDetails.svelte";
  import DescriptionTerm from "$lib/List/DescriptionTerm.svelte";
  import ListItem from "$lib/List/ListItem.svelte";
  import UnorderedList from "$lib/List/UnorderedList.svelte";
  import { currentBuilderStatus } from "$lib/stores.js";

  let name:string = $currentBuilderStatus.name;
  let author:AuthorInterface = $currentBuilderStatus.author;
  let description:string = $currentBuilderStatus.description;
  let keywordList:string[] = $currentBuilderStatus.keywords;
  let ingredientList:string[] = $currentBuilderStatus.ingredients;
  let instructionList:InstructionsInterface[] = $currentBuilderStatus.instructions;

  // Ingredients
  let keyword:string;
  const handleAddKeyword = () => {
    keywordList = keyword ? [...keywordList, keyword] : [...keywordList];
    keyword = "";
    document.getElementById("keywords")?.focus();
  }
  const handleRemoveKeyword = (keyword:number) => {
    const filteredArray = keywordList.filter((item:string, index:number) => index !== keyword);
    keywordList = filteredArray;
  }

  // Ingredients
  let ingredient:string;
  const handleAddIngredient = () => {
    ingredientList = ingredient ? [...ingredientList, ingredient] : [...ingredientList];
    ingredient = "";
    document.getElementById("ingredients")?.focus();
  }
  const handleRemoveIngredient = (ingredient:number) => {
    const filteredArray = ingredientList.filter((item:string, index:number) => index !== ingredient);
    ingredientList = filteredArray;
  }

  // Instructions
  let instructionStep:string;
  let instructionName:string;
  const handleAddInstruction = () => {
    instructionList = instructionName && instructionStep ? [...instructionList, {name: instructionName, text:instructionStep}] : [...instructionList];
    instructionName = "";
    instructionStep = "";
    document.getElementById("instructionName")?.focus();
  }
  const handleRemoveInstruction = (instruction:number) => {
    const filteredArray = instructionList.filter((item:InstructionsInterface, index:number) => index !== instruction);
    instructionList = filteredArray;
  }

  // Submit
  const onSubmit = (event:SubmitEvent) => {
      let input;
      const formData = new FormData(event.target as HTMLFormElement);
      input = Object.fromEntries(formData.entries())
      updateCurrentBuilderRecipe(input);
  }

  // uses "as any" due to some weird ts issue, fix later i guess
  const updateCurrentBuilderRecipe = (input:any) => {
    currentBuilderStatus.set({
      "name": name, // done
      "author": author, // done
      "description": description, // done
      "totalTime": input.totalTime,
      "keywords": keywordList as any, // done
      "yield": input.yield,
      "category": input.category,
      "cuisine": input.cuisine,
      "nutrition": {
        "calories": input.nutritionCalories
      },
      "ingredients": ingredientList as any, // done
      "instructions": instructionList as any // done
    });
    goto("/builder/your-recipe");
  }

</script>

<form class="builderForm" on:submit|preventDefault={onSubmit}>
  
  <!-- Name -->
  <div class="formGroup">
    <label class="formLabel" for="name">Name</label>
    <input class="formInput"
      id="name"
      name="name"
      bind:value={name}
      placeholder="French Onion Soup"
      required
    />
  </div>

  <!-- Author -->
  <div class="formGroup">
    <label class="formLabel" for="authorName">Author</label>
    <input class="formInput"
      id="authorName"
      name="authorName"
      bind:value={author.name}
      placeholder="Matty Matheson"
    />
  </div>
  <div class="formGroup">
    <label class="formLabel" for="authorRef">Original Recipe URL</label>
    <input class="formInput"
      id="authorRef"
      name="authorRef"
      bind:value={author.reference}
      placeholder="https://www.vice.com/en/article/mbwbwb/french-onion-soup-recipe"
    />
  </div>

  <!-- Description -->
  <div class="formGroup">
    <label class="formLabel" for="description">Description</label>
    <input class="formInput"
      id="description"
      name="description"
      bind:value={description}
      placeholder="Matty Matheson's perfect French onion soup includes SIX kinds of onions and the results are perfect."
      required
    />
  </div>

  <!-- Keywords -->
  <div class="formGroup">
    <label class="formLabel" for="keywords">Keywords</label>
    <input class="formInput"
      id="keywords"
      name="keywords"
      bind:value={keyword}
      placeholder="soup"
    />
    <Button formType="button" class="formButton" on:click={handleAddKeyword}>Add</Button>
    {#if keywordList.length}
      <UnorderedList>
        {#each keywordList as keyword, i}
          <ListItem item={keyword}><Button formType="button" variant="link" on:click={() => handleRemoveKeyword(i)}>[remove]</Button></ListItem>
        {/each}
      </UnorderedList>
    {/if}
  </div>

  <!-- Ingredients -->
  <div class="formGroup">
    <label class="formLabel" for="ingredients">Ingredients</label>
    <input class="formInput"
      id="ingredients"
      name="ingredients"
      bind:value={ingredient}
      placeholder="1 cup (2 sticks|255 grams) plus 2 tablespoons unsalted butter"
    />
    <Button formType="button" class="formButton" on:click={handleAddIngredient}>Add</Button>
    {#if ingredientList.length}
      <UnorderedList>
        {#each ingredientList as ingredient, i}
          <ListItem item={ingredient}><Button formType="button" variant="link" on:click={() => handleRemoveIngredient(i)}>[remove]</Button></ListItem>
        {/each}
      </UnorderedList>
    {/if}

  </div>

  <!-- Instructions -->
  <div class="formGroup double">
    <label class="formLabel" for="instructionName">Step {instructionList.length + 1} title</label>
    <input class="formInput"
      id="instructionName"
      name="instructionName"
      bind:value={instructionName}
      placeholder="heat ingredients"
    />
    <label class="formLabel" for="instructionStep">Instruction for step {instructionList.length + 1}</label>
    <input class="formInput"
      id="instructionStep"
      name="instructionStep"
      bind:value={instructionStep}
      placeholder="In a large Dutch oven over medium-high, heat butter and oil"
    />
    <Button formType="button" class="formButton" on:click={handleAddInstruction}>Add</Button>
    {#if instructionList.length}
      <dl class="instructionList">
        {#each instructionList as instruction, i}
          <DescriptionTerm item={(i+1) + " " + instruction.name}><Button formType="button" variant="link" on:click={() => handleRemoveInstruction(i)}>[remove]</Button></DescriptionTerm>
          <DescriptionDetails item={instruction.text}/>
        {/each}
      </dl>
    {/if}
  </div>

  <!-- Submit -->
  <section class="formActions">
    <Button formType="submit" variant="accent" class="submitButton">Generate Recipe</Button>
    <Button formType="reset" class="resetButton">Clear</Button>
  </section>
</form>

<style>
  .formGroup {
    margin-bottom: 24px;
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 6px;
    border: 1px dashed var(--accent);
    border-radius: 6px;
    padding: 10px;
  }

  .formLabel {
    font-weight: bold;
    text-transform: uppercase;
    font-size: .8rem;
    color: var(--primary-medium);
    grid-area: 1 / 1 / 2 / 4;
  }


  .formInput {
    background: var(--white);
    border: 1px solid var(--outline-color);
    color: var(--primary-dark);
    padding: var(--global-padding-y) var(--global-padding-x);
    padding-left: 5px;
    border-radius: var(--global-border-radius);
    grid-area: 2 / 1 / 3 / 3;
  }

  .builderForm :global(.formButton) {
    grid-area: 2 / 4 / 3 / 3;
  }

  .builderForm :global(.unorderedList) {
    margin-bottom: 0;
  }

  .formActions {
    display: flex;
    justify-content: center;
    gap: 12px;
  }

  /* Double inputs */
  .formGroup.double {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 1fr);
  }

  .formGroup.double .formLabel:nth-of-type(1) {
    grid-area: 1 / 1 / 2 / 3;
  }

  .formGroup.double .formLabel:nth-of-type(2) {
    margin-top: 6px;
    grid-area: 3 / 1 / 4 / 3;;
  }

  .formGroup.double .formInput:nth-of-type(1) {
    grid-area: 2 / 1 / 3 / 3;
  }
  .formGroup.double .formInput:nth-of-type(2) {
    grid-area: 4 / 1 / 5 / 3; 
  }

  .formGroup.double :global(.formButton) {
    grid-area: 5 / 5 / 4 / 3;
  }

  .formGroup.double dl {
    grid-area: 5 / 1 / 5 / 1;
  }

  .instructionList {
    border-left: 2px solid var(--accent);
    padding-left: 10px;
  }


</style>
