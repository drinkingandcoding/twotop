import { writable } from 'svelte/store';
import type { RecipeListInterface } from './responseInterface';

// Recipe Stuff
import * as emptyRecipe from '$lib/data/empty.json';
export const currentBuilderStatus = writable(emptyRecipe);
export const recipeList = writable([] as RecipeListInterface[]);

// Authentication
export const isAuthenticated = writable(false);
export const user = writable({});
export const popupOpen = writable(false);
export const error = writable();
