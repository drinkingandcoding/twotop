import { writable } from 'svelte/store';
import * as emptyRecipe from '$lib/data/empty.json';

export const currentBuilderStatus = writable(emptyRecipe);