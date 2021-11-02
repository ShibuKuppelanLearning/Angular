import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

import { RecipeService } from '../services/recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode: boolean;
  recipeForm: FormGroup;

  constructor(private activeRoute: ActivatedRoute, private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params: Params) => {
      this.id = params['id']
      this.editMode = params['id'] != null;      
      this.initRecipeForm();
    });
  }

  initRecipeForm() {
    let recipeName: string = '';
    let imagePath: string = '';
    let description: string = '';
    let ingredientFormControls:FormControl[]=[];

    if (this.editMode) {
      let recipe = this.recipeService.getRecipeById(this.id);
      if (recipe) {
        recipeName = recipe.name;
        imagePath = recipe.imagePath;
        description = recipe.description;
        if(recipe.ingredients){
          for(let ingredient of recipe.ingredients){
            ingredientFormControls.push(new FormControl(ingredient.name));
            ingredientFormControls.push(new FormControl(ingredient.amount));
          }
        }
      }
    }
    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, [Validators.required]),
      'imagePath': new FormControl(imagePath, [Validators.required]),
      'description': new FormControl(description, [Validators.required]),
      'ingredients': new FormArray(ingredientFormControls)
    });
    console.log(this.recipeForm);
  }

  onSave(): void {
    console.log(this.recipeForm);
  }
}
