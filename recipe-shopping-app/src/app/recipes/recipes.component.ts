import { Component } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './services/recipe.service';

@Component({
    selector: "app-recipes",
    templateUrl: "./recipes.component.html"
})
export class RecipesComponent {

    selectedRecipe: Recipe;

    constructor(private recipeService: RecipeService) {
        
    }

}