export type Ingredient = "meat" | "cheese" | "salad" | "bacon";

export type IngredientChoice = {
  [key in Ingredient]?: number;
};
