import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PizzaService} from '../../services/pizza/pizza.service';
import {IngredientService} from '../../services/ingredient/ingredient.service';

@Component({
  selector: 'app-pizza-details',
  templateUrl: './pizza-details.page.html',
  styleUrls: ['./pizza-details.page.scss'],
})
export class PizzaDetailsPage implements OnInit {
  id = '';

  pizza: any = {};
  ingredients: any = [];

  constructor(private activatedRoute: ActivatedRoute, private pizzaService: PizzaService, private ingredientService: IngredientService) { }

  ngOnInit() {
    // Récupération de l'id dans l'URL
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getPizzaDetail();
  }

  // Récupération des détails d'une pizza séléctionné
  getPizzaDetail() {
    this.pizzaService.getPizzaById(this.id)
      .subscribe(res => {
        this.pizza = res;
        // Boucle pour récupérer les informations de chaque ingrédient de la liste
        for (let i = 0; i < this.pizza.ingredients.length; i++) {
            this.ingredientService.getIngredientById(this.pizza.ingredients[i])
              .subscribe(resIng => {
                  this.ingredients[i] = resIng;
                  }, err => {
                  console.log(err);
              });
        }
      }, err => {
        console.log(err);
      });
  }

}
