<script>
	import Typeahead from 'svelte-typeahead';

	const data = [
		{
			recipe: 'noods'
		},
		{
			recipe: 'foods'
		},
		{
			recipe: 'biscuit'
		},
		{
			recipe: 'cookie'
		},
		{
			recipe: 'chocolate cookie'
		},
		{
			recipe: 'pasta'
		},
		{
			recipe: 'beef'
		}
	];

	const extract = (/** @type {{ recipe: string; }} */ item) => item.recipe;

	/**
	 * @type {any[]}
	 */
	let recipes = [];
</script>

<Typeahead
	placeholder={`search for something`}
	inputAfterSelect={'clear'}
	label="Search Recipes"
	{data}
	extract={(item) => item.recipe}
	hideLabel
	limit={10}
/>

<style>
	:global([role='listbox']) {
		margin: 0;
	}
</style>
