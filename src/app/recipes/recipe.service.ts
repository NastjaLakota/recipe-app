import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://www.seriouseats.com/thmb/ayLBdQRuMh06VOyc4JftBa7Ubvo=/735x0/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2016__08__20160802-oyakodon-4-a3b75ad6fb36491b9618372db8cf54d2.jpg',
      [new Ingredient('Meat', 1), new Ingredient('Potato', 4)]
    ),
    new Recipe(
      'Another Test Recipe',
      'This is simply a test',
      'https://www.seriouseats.com/thmb/ayLBdQRuMh06VOyc4JftBa7Ubvo=/735x0/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2016__08__20160802-oyakodon-4-a3b75ad6fb36491b9618372db8cf54d2.jpg',
      [new Ingredient('Buns', 5), new Ingredient('Meat', 1)]
    ),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
