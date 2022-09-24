import type { RecipeInterface } from './data/recipes';

export interface RecipeListInterface extends RecipeInterface {
  ID: number;
  CreatedAt: Date;
  UpdatedAt: Date;
  DeletedAt?: any;
  userID: string;
}

export interface RecipeByIDInterface extends RecipeInterface {
  ID: number;
  CreatedAt: Date;
  UpdatedAt: Date;
  DeletedAt?: any;
  userID: string;
}

export interface UnapprovedRecipeInterface extends RecipeInterface {
  ID: number;
  CreatedAt: Date;
  UpdatedAt: Date;
  DeletedAt?: any;
  userID: string;
}
