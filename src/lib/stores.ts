import { writable } from 'svelte/store';

// Recipe Stuff
import * as emptyRecipe from '$lib/data/empty.json';
export const currentBuilderStatus = writable(emptyRecipe);

// Authentication
export const isAuthenticated = writable(false);
export const user = writable({});
export const popupOpen = writable(false);
export const error = writable();