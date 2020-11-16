import { Component, OnInit, Input } from '@angular/core';
import { RecipeService } from 'src/app/recipe.service';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  onSendToList(recipe: Recipe){
    this.recipeService.sendIngredientsToList(recipe);
  }

}
