import { Component, OnInit } from '@angular/core';
import {IngredientService} from '../../../../services/ingredient/ingredient.service';
import Ingredient from '../../../../models/ingredient/Ingredient';
import {Router} from '@angular/router';

declare var window;

@Component({
  selector: 'app-form-ingredient',
  templateUrl: './form-ingredient.page.html',
  styleUrls: ['./form-ingredient.page.scss'],
})
export class FormIngredientPage implements OnInit {
  ingredient: Ingredient;

  id: string;
  nom: string;

  constructor(private ingredientService: IngredientService, private route: Router) {
    this.ingredient = new Ingredient(this.id, this.nom);
  }

  ngOnInit() {
  }

  // Création d'un ingrédient
  ajoutIngredient() {
    this.ingredientService.addIngredient(this.ingredient)
      .subscribe(data => {
        console.log(data);
        // Redirection vers la liste des ingredients
        this.route.navigateByUrl('/admin/admin-ingredient').then(() => {
          window.Location.getIngredients();
        });
      }, err => {
        console.log(err);
      });
  }

}
