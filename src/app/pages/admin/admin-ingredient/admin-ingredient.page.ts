import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IngredientService} from '../../../services/ingredient/ingredient.service';

@Component({
  selector: 'app-admin-ingredient',
  templateUrl: './admin-ingredient.page.html',
  styleUrls: ['./admin-ingredient.page.scss'],
})
export class AdminIngredientPage implements OnInit {
  id: string;
  ingredients: any = [];

  constructor(private ingredientService: IngredientService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getIngredients();
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }

  getIngredients() {
    this.ingredientService.getIngredients()
      .subscribe(res => {
        this.ingredients = res;
      }, err => {
        console.log(err);
      });
  }

  deleteIngredient(idIngredient) {
    this.ingredientService.deleteIngredient(idIngredient)
      .subscribe(res => {
        console.log('pizza supprimé ' + idIngredient);
        this.getIngredients();
      });
  }
}
