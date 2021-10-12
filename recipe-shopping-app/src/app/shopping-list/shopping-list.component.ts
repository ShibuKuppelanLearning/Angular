import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './services/shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
    selector: "app-shopping-list",
    templateUrl: "./shopping-list.component.html"
})
export class ShoppingListComponent implements OnInit, OnDestroy {

    ingredients: Ingredient[];
    addIngredientsSub: Subscription;

    constructor(private shoppingListService: ShoppingListService) { }

    ngOnInit(): void {
        this.addIngredientsSub = this.shoppingListService.ingredientAdded.subscribe((ingredients: Ingredient[]) => {
            this.shoppingListService.addIngredients(ingredients);
        });
        this.ingredients = this.shoppingListService.getIngredients();
    }

    ngOnDestroy(): void {
        this.addIngredientsSub.unsubscribe();
    }
}