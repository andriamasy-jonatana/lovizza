import { Component, OnInit } from '@angular/core';
import Pizza from '../../services/models/Pizza';
import {ActivatedRoute} from '@angular/router';
import {PizzaService} from '../../services/pizza/pizza.service';

@Component({
  selector: 'app-pizza-details',
  templateUrl: './pizza-details.page.html',
  styleUrls: ['./pizza-details.page.scss'],
})
export class PizzaDetailsPage implements OnInit {
  id = '';
  nom = '';
  prix = '';
  ingredients: [];
  photo = '';

  pizza: Pizza;
  error: string;

  constructor(private activatedRoute: ActivatedRoute, private pizzaService: PizzaService) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getPizzaDetail();
  }

  getPizzaDetail() {
    this.pizzaService.getPizzaById(this.id, this.nom, this.prix, this.ingredients, this.photo)
      .subscribe(pizza => this.pizza = pizza,
        error => {
          this.error = error;
        });
  }

}
