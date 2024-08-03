import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes: Recipe[] = [
    {
      id: '1',
      title: 'title1',
      imageUrl: 'https://imgur.com/zK9cgyU.jpg',
      ingredients: ['Fryes', 'asd', 'xpto']
    },
    {
      id: '2',
      title: 'title2',
      imageUrl: 'https://imgur.com/2j6OZp1.jpg',
      ingredients: ['Fryes', 'asd', 'xpto']
    }
  ]
  constructor() { }

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(id: string) {
    return {
      ...this.recipes.find(recipe => {
        return recipe.id === id;
      })
    }
  }

  deleteRecipe(id: string) {
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== id
    });
  }
}
