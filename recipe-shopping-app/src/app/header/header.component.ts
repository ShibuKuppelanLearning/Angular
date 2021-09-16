import { Component, EventEmitter, Output } from '@angular/core'

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html"
})
export class HeaderComponent {
    @Output() recipeClicked = new EventEmitter();
    @Output() shoppingListClicked = new EventEmitter();

    onRecipeClicked() {
        this.recipeClicked.emit();
    }

    onShoppingListClicked() {
        this.shoppingListClicked.emit();
    }
}