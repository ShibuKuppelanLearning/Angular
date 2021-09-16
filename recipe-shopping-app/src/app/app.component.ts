import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipe-shopping-app';
  displayRecipe: boolean = false;
  displayShoppingList: boolean = false;

  recipeClicked(){
    this.displayRecipe = true;
    this.displayShoppingList = false;
  }

  shoppingListClicked(){
    this.displayShoppingList = true;
    this.displayRecipe = false;
  }
}
