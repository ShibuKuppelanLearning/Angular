import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './services/shopping-list.service';

@Component({
    selector: "app-shopping-list",
    templateUrl: "./shopping-list.component.html"
})
export class ShoppingListComponent implements OnInit {

    ingredients: Ingredient[];

    constructor(private shoppingListService: ShoppingListService) {
        shoppingListService.ingredientAdded.subscribe((ingredient: Ingredient) => {
            this.ingredients.push(ingredient);
        });
    }

    ngOnInit(): void {
        this.ingredients = this.shoppingListService.getIngredients();
    }
}