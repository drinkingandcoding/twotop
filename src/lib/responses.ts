import type { RecipeInterface } from './data/recipes';

export interface RecipeListInterface extends RecipeInterface {
  ID: number;
  CreatedAt: Date;
  UpdatedAt: Date;
  DeletedAt?: any;
}
