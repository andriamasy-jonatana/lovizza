import { Component, OnInit } from '@angular/core';
import {PizzaService} from '../../../services/pizza/pizza.service';
import {ActivatedRoute} from '@angular/router';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-admin-pizza',
  templateUrl: './admin-pizza.page.html',
  styleUrls: ['./admin-pizza.page.scss'],
})
export class AdminPizzaPage implements OnInit {
  id: string;
  pizzas: any = [];

  constructor(private pizzaService: PizzaService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // A l'initialisation on récupère la liste des pizzas
    this.getPizzas();
    // Récupération de l'id de la pizza séléctionné pour la modifier
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }

  // Récupération de la liste de toutes les pizzas
  getPizzas() {
    this.pizzaService.getPizzas()
      .subscribe(res => {
        this.pizzas = res;
      }, err => {
        console.log(err);
      });
  }

  // Suppression d'une pizza
  deletePizza(idPizza) {
    this.pizzaService.deletePizza(idPizza)
      .subscribe(res => {
        console.log('pizza supprimé ' + idPizza);
        this.getPizzas();
      });
  }
}
