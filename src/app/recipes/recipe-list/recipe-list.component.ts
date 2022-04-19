import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://www.seriouseats.com/thmb/ayLBdQRuMh06VOyc4JftBa7Ubvo=/735x0/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2016__08__20160802-oyakodon-4-a3b75ad6fb36491b9618372db8cf54d2.jpg'
    ),
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://www.seriouseats.com/thmb/ayLBdQRuMh06VOyc4JftBa7Ubvo=/735x0/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2016__08__20160802-oyakodon-4-a3b75ad6fb36491b9618372db8cf54d2.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
