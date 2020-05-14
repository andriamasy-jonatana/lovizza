import { Component, OnInit } from '@angular/core';
import Pizza from '../../services/models/Pizza';
import {PizzaService} from '../../services/pizza/pizza.service';

@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.page.html',
  styleUrls: ['./pizzas.page.scss'],
})
export class PizzasPage implements OnInit {
  id = '';
  nom = '';
  prix = '';
  ingredients: [];
  photo = '';

  pizzas: any;

  pizza: Pizza;
  error: string;

  constructor(private pizzaService: PizzaService) { }

  ngOnInit() {
    this.getPizzas();
  }

  getPizzas() {
    this.pizzaService.getPizzas()
      .subscribe(res => {
        this.pizzas = res;
      }, err => {
        console.log(err);
      });
  }

  getPizzaDetail() {
    this.pizzaService.getPizzaById(this.id, this.nom, this.prix, this.ingredients, this.photo)
      .subscribe(pizza => this.pizza = pizza,
        error => {
          this.error = error;
        });
  }

  addPanier() {}

}
