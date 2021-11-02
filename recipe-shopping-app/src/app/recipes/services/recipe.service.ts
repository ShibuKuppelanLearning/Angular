import { Injectable } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredient } from 'src/app/shared/ingredient.model';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe(1, 'A Test Recipe 1',
      'This is simply a test recipe 1',
      'https://hips.hearstapps.com/del.h-cdn.co/assets/17/32/2048x1024/landscape-1502305153-chicken-salad-sandwich-delish-1.jpg',
      [new Ingredient('Meat', 2), new Ingredient('French Fries', 12)]),
    new Recipe(2, 'A Test Recipe 2',
      'This is simply a test recipe 2',
      'https://hips.hearstapps.com/del.h-cdn.co/assets/17/32/2048x1024/landscape-1502305153-chicken-salad-sandwich-delish-1.jpg',
      [new Ingredient('Bun', 2), new Ingredient('Mayonise', 2)])
  ];

  constructor() { }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipeById(id: number): Recipe | null {
    let targetRecipe = null;
    targetRecipe = this.recipes.find((recipe, index) => { return recipe.id == id; });
    if (targetRecipe != undefined) {
      return targetRecipe;
    }
    return null;
  }
}
