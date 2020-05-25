import { Component, OnInit } from '@angular/core';
import Pizza from '../../services/models/Pizza';
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
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getPizzaDetail();
    this.getIngredients();
  }

  getPizzaDetail() {
    this.pizzaService.getPizzaById(this.id)
      .subscribe(res => {
        this.pizza = res;
        console.log(this.pizza);
        for (let i = 0; i < this.pizza.ingredients.length; i++) {
            this.ingredientService.getIngredientById(this.pizza.ingredients[i])
              .subscribe(resIng => {
                  this.ingredients[i] = resIng;
                  console.log(this.ingredients[i]);
                  }, err => {
                  console.log(err);
              });
        }
      }, err => {
        console.log(err);
      });
  }

  getIngredients() {
      this.ingredientService.getIngredientById(this.pizza.ingredients)
        .subscribe(resIng => {
            this.ingredients = resIng;
            console.log(this.ingredients);
        }, err => {
            console.log(err);
        });
  }

}
