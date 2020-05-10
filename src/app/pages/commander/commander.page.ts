import { Component, OnInit } from '@angular/core';
import {PizzaService} from '../../services/pizza/pizza.service';
import Pizza from '../../services/models/Pizza';

@Component({
  selector: 'app-commander',
  templateUrl: './commander.page.html',
  styleUrls: ['./commander.page.scss'],
})
export class CommanderPage implements OnInit {
  pizzas: any;

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

  addPanier() {
    console.log('ajouté dans le panier');
  }
}
