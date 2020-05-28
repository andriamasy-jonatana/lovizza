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

  getPizzas() {
    this.pizzaService.getPizzas()
      .subscribe(res => {
        this.pizzas = res;
        console.log(this.pizzas);
      }, err => {
        console.log(err);
      });
  }

  addPanier() {}

}
