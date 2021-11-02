import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  private ingredients: Ingredient[];
  ingredientSelected: Subject<number> = new Subject<number>();
  ingredientAdded: Subject<Ingredient[]> = new Subject<Ingredient[]>();
  ingredientEdited: Subject<Ingredient[]> = new Subject<Ingredient[]>();

  constructor() {
    this.ingredients = [
      new Ingredient('Apples', 5),
      new Ingredient('Tomatoes', 3)
    ]
  }

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(index: number): Ingredient {
    return this.ingredients[index];
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

  addIngredients(ingredients: Ingredient[]) {
    ingredients.forEach(ingredient => {
      this.ingredients.push(ingredient);
    });
  }

  selectIngredient(index: number) {
    this.ingredientSelected.next(index);
  }

  editIngredient(index: number, ingredient: Ingredient): void {
    this.ingredients[index] = ingredient;
    this.ingredientEdited.next(this.ingredients);
  }

  removeIngredient(index: number): void {
    this.ingredients.splice(index, 1);
    this.ingredientEdited.next(this.ingredients);
  }
}
