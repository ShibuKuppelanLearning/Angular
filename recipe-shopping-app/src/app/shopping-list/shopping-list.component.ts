import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './services/shopping-list.service';

@Component({
    selector: "app-shopping-list",
    templateUrl: "./shopping-list.component.html"
})
export class ShoppingListComponent implements OnInit {
    ingredients: Ingredient[];
    constructor(private shoppingListService: ShoppingListService) { }

    ngOnInit(): void {
        this.shoppingListService.ingredientAdded.subscribe((ingredients: Ingredient[]) => {
            this.shoppingListService.addIngredients(ingredients);
        });
        this.ingredients = this.shoppingListService.getIngredients();
    }
}