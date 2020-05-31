import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IngredientService} from '../../../services/ingredient/ingredient.service';

declare var window;

@Component({
  selector: 'app-admin-ingredient',
  templateUrl: './admin-ingredient.page.html',
  styleUrls: ['./admin-ingredient.page.scss'],
})
export class AdminIngredientPage implements OnInit {
  id: string;
  ingredients: any = [];

  constructor(private ingredientService: IngredientService, private activatedRoute: ActivatedRoute) {
    window.Location = this;
  }

  ngOnInit() {
    this.getIngredients();
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }

  // Récupération de la liste de tous les ingrédients
  getIngredients() {
    this.ingredientService.getIngredients()
      .subscribe(res => {
        this.ingredients = res;
      }, err => {
        console.log(err);
      });
  }

  // Suppression d'un ingrédient
  deleteIngredient(idIngredient) {
    this.ingredientService.deleteIngredient(idIngredient)
      .subscribe(res => {
        console.log('ingrédient supprimé ' + idIngredient);
        this.getIngredients();
      });
  }
}
