import { writable } from 'svelte/store';
import type { RecipeListInterface, RecipeByIDInterface } from './responsesInterface';
import type { UserObjectInterface } from './authInterface';

// Recipe Stuff
import * as emptyRecipe from '$lib/data/empty.json';
export const currentBuilderStatus = writable(emptyRecipe);
export const recipeList = writable([] as RecipeListInterface[]);
export const recipe = writable({} as RecipeByIDInterface);
export const unapprovedRecipeList = writable([] as RecipeListInterface[]);

// Authentication
export const isAuthenticated = writable(false);
export const user = writable(({} as UserObjectInterface) || {});
export const popupOpen = writable(false);
export const error = writable();
export const isAdmin = writable(false);
