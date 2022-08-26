export interface RecipeInterface {
    name: string;
    author: AuthorInterface;
    description?: string;
    totalTime?: number;
    keywords: string[];
    yield?: string;
    category?: string;
    recipeCuisine?: string;
    nutrition?: NutritionInterface;
    ingredients: string[];
    instructions: InstructionsInterface[];
}
export interface InstructionsInterface {
    name: string;
    text: string;
}

export interface NutritionInterface {
    calories: string;
}

export interface AuthorInterface {
    name: string;
    reference: string;
}