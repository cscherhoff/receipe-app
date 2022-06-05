import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a test', 'https://theunplannedplanner.com/wp-content/uploads/2020/12/recipe-575434_1280-1140x973.png')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
