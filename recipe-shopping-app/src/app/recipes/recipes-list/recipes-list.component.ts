import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../services/recipe.service';

@Component({
    selector: "app-recipes-list",
    templateUrl: "./recipes-list.component.html"
})
export class RecipesListComponent implements OnInit {
    recipes: Recipe[];

    constructor(private recipeService: RecipeService, private router: Router, private activeRoute: ActivatedRoute) { }

    ngOnInit(): void {
        this.recipes = this.recipeService.getRecipes();
    }

    newRecipe() {
        this.router.navigate(['new'], { relativeTo: this.activeRoute });
    }
}