import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
    selector: "app-recipes-list",
    templateUrl: "./recipes-list.component.html"
})
export class RecipesListComponent {
    recipes: Recipe[] = [new Recipe('Test Recipe', 'This is simple a test Recipe', 'https://assets.bonappetit.com/photos/5d7296eec4af4d0008ad1263/16:9/w_1200,c_limit/Basically-Gojuchang-Chicken-Recipe-Wide.jpg'), new Recipe('Test Recipe', 'This is simple a test Recipe', 'https://assets.bonappetit.com/photos/5d7296eec4af4d0008ad1263/16:9/w_1200,c_limit/Basically-Gojuchang-Chicken-Recipe-Wide.jpg')];

    constructor() {

    }
}