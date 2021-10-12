import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from 'src/app/shopping-list/services/shopping-list.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {

  // @Input() 
  recipe: Recipe;
  // @ViewChild('dropdownmenu') dropDownMenue: ElementRef;

  constructor(private recipeService: RecipeService,
    private shoppingListService: ShoppingListService,
    private router: Router,
    private activeRoute: ActivatedRoute) {
    this.recipe = new Recipe(0, "", "", "", []);
  }

  ngOnInit() {
    const id = +this.activeRoute.snapshot.params['id'];
    this.selectRecipe(id);
    this.activeRoute.params.subscribe((params) => { this.selectRecipe(+params['id']); }
    );
  }

  private selectRecipe(id: number) {
    const targetRecipe = this.recipeService.getRecipeById(id);
    if (targetRecipe) {
      this.recipe = targetRecipe;
    }
  }

  onToShoppingList() {
    this.shoppingListService.ingredientAdded.next(this.recipe.ingredients);
    // console.log('this.dropDownMenue.nativeElement.classList : '+this.dropDownMenue.nativeElement.classList);
    // this.dropDownMenue.nativeElement.classList.remove('show');  

  }

  onRecipeEdit() {
    this.router.navigate(['edit'], { relativeTo: this.activeRoute });
  }
}
