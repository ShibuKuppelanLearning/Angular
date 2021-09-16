import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
    selector: "app-recipes-list",
    templateUrl: "./recipes-list.component.html"
})
export class RecipesListComponent {
    @Output() recipeSelected = new EventEmitter<Recipe>();

    recipes: Recipe[] = [
        new Recipe('A Test Recipe 1', 'This is simply a test recipe 1', 'https://hips.hearstapps.com/del.h-cdn.co/assets/17/32/2048x1024/landscape-1502305153-chicken-salad-sandwich-delish-1.jpg'),
        new Recipe('A Test Recipe 2', 'This is simply a test recipe 2', 'https://hips.hearstapps.com/del.h-cdn.co/assets/17/32/2048x1024/landscape-1502305153-chicken-salad-sandwich-delish-1.jpg')
    ];

    constructor() {

    }

    onRecipeSelected(selectedRecipe: Recipe) {
        this.recipeSelected.emit(selectedRecipe);
    }
}