import { Component, OnInit, EventEmitter, Output, ViewChild, OnDestroy } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../services/shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  @ViewChild('ingredientForm') ingredientForm: NgForm;
  ingredientEditedSubscription: Subscription;
  editMode: boolean = false;
  editingIngredient: Ingredient;
  selectedIngredientIndex: number;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredientEditedSubscription = this.shoppingListService.ingredientSelected.subscribe((index) => {
      this.editingIngredient = this.shoppingListService.getIngredient(index);
      this.editMode = true;
      this.selectedIngredientIndex = index;
      this.ingredientForm.setValue({
        name: this.editingIngredient.name,
        amount: this.editingIngredient.amount
      });
    });
  }

  ngOnDestroy(): void {
    this.ingredientEditedSubscription.unsubscribe();
  }

  processIngredient() {
    const ingredient = new Ingredient(this.ingredientForm.value['name'], +this.ingredientForm.value['amount'])
    if (this.editMode) {
      if (this.selectedIngredientIndex > 0) {
        this.shoppingListService.editIngredient(this.selectedIngredientIndex, ingredient);
      }else{
        console.error('Select at least one ingredient');
      }
    } else {
      this.shoppingListService.ingredientAdded.next([ingredient]);
    }
    this.onClear();
  }

  onClear() {
    this.ingredientForm.reset();
    this.editMode = false;
    this.ingredientForm.reset();
    this.editingIngredient = { name: '', amount: 0 };
    this.selectedIngredientIndex = -1;
  }

  onDelete() {
    if (this.selectedIngredientIndex >= 0) {
      this.shoppingListService.removeIngredient(this.selectedIngredientIndex);
      this.onClear();
    }else{
      console.error('Select at least one ingredient');
    }
  }
}