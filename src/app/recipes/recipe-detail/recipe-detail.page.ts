import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
  loadedRecipe: Recipe = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private recipesService: RecipesService,
    private router: Router,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('recipeId')) {
        this.router.navigate(['/recipes'])
        return
      }
      const recipeId = String(paramMap.get('recipeId'));
      this.loadedRecipe = this.recipesService.getRecipe(recipeId)
    });
  }

  onDeleteRecipe() {
    this.alertCtrl.create({
      header: 'Are you sure',
      message: 'Ok',
      buttons: [
        {
          text: 'Cancel', role: 'cancel'
        },
        {
          text: 'Delete',
          handler: () => {
            this.recipesService.deleteRecipe(String(this.loadedRecipe.id));
            this.router.navigate(['/recipes'])
          }
        }
      ]
    }).then(alertEl => {
      alertEl.present();
    })
  }
}
