import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../services/recipe.service';

@Component({
    selector: "app-recipes-list",
    templateUrl: "./recipes-list.component.html"
})
export class RecipesListComponent implements OnInit {
    recipes: Recipe[];

    constructor(private recipeService: RecipeService) { }

    ngOnInit(): void {
        this.recipes = this.recipeService.getRecipes();
    }
}