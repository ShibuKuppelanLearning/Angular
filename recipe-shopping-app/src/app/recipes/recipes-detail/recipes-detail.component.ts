import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from 'src/app/shopping-list/services/shopping-list.service';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {

  @Input() recipe: Recipe;
  // @ViewChild('dropdownmenu') dropDownMenue: ElementRef;

  constructor(private shoppingListService: ShoppingListService) {
    this.recipe = new Recipe("", "", "", []);
  }

  ngOnInit() {

  }

  onToShoppingList() {
    this.shoppingListService.ingredientAdded.emit(this.recipe.ingredients);
    // console.log('this.dropDownMenue.nativeElement.classList : '+this.dropDownMenue.nativeElement.classList);
    // this.dropDownMenue.nativeElement.classList.remove('show');  

  }
}
