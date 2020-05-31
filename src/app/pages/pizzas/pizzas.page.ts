import { Component, OnInit } from '@angular/core';
import {PizzaService} from '../../services/pizza/pizza.service';

@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.page.html',
  styleUrls: ['./pizzas.page.scss'],
})
export class PizzasPage implements OnInit {
  pizzas: any = [];

  constructor(private pizzaService: PizzaService) { }

  ngOnInit() {
    this.getPizzas();
  }

  // Récupération de la liste de toutes les pizzas
  getPizzas() {
    this.pizzaService.getPizzas()
      .subscribe(res => {
        this.pizzas = res;
        console.log(this.pizzas);
      }, err => {
        console.log(err);
      });
  }

  // Ajout dans le panier de la pizza séléctionner
  addPanier() {}

}
