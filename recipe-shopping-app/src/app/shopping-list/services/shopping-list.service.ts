import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  private ingredients: Ingredient[];

  ingredientAdded: EventEmitter<Ingredient> = new EventEmitter<Ingredient>();

  constructor() {
    this.ingredients = [
      new Ingredient('Apples', 5),
      new Ingredient('Tomatoes', 3)
    ]
  }

  getIngredients() {
    return this.ingredients.slice();
  }
}