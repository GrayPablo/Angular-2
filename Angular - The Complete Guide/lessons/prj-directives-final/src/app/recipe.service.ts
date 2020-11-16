import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipes/recipe.model'
import { Ingredient } from './shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>(); 
    private recipes: Recipe[] = [
        new Recipe(
            'Filete con Patatas', 'Pa variar', 
            'https://upload.wikimedia.org/wikipedia/commons/f/f6/Cote_de_boeuf_p1040934.jpg',
            [
                new Ingredient("Filete", 1), 
                new Ingredient("Patatas", 30)
            ]),
        new Recipe(
            'Fish n Chips', 'No tiene sabooor', 
            'https://upload.wikimedia.org/wikipedia/commons/f/f6/Cote_de_boeuf_p1040934.jpg',
            [
                new Ingredient("Merluza", 1), 
                new Ingredient("Patatas?", 25)
            ])
      ];

    constructor(private shoppingListService: ShoppingListService){}

    getRecipes(){
        return this.recipes.slice()
    }

    sendIngredientsToList(recipe: Recipe){
        recipe.ingredients.forEach(
            (ingredient) => this.shoppingListService.addIngredient(ingredient)
            )
            // (recipe.ingredients) => let ingredient of recipe.ingredients);

    }
}