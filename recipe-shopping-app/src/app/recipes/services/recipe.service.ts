import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredient } from 'src/app/shared/ingredient.model';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe 1',
      'This is simply a test recipe 1',
      'https://hips.hearstapps.com/del.h-cdn.co/assets/17/32/2048x1024/landscape-1502305153-chicken-salad-sandwich-delish-1.jpg',
      [new Ingredient('Meat', 2), new Ingredient('French Fries', 12)]),
    new Recipe('A Test Recipe 2',
      'This is simply a test recipe 2',
      'https://hips.hearstapps.com/del.h-cdn.co/assets/17/32/2048x1024/landscape-1502305153-chicken-salad-sandwich-delish-1.jpg', 
      [new Ingredient('Bun',2),new Ingredient('Mayonise',2)])
  ];

  recipeItemSelected: EventEmitter<Recipe> = new EventEmitter<Recipe>();

  constructor() { }

  getRecipes() {
    return this.recipes.slice();
  }
}
