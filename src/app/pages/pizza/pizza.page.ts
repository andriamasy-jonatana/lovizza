import { Component, OnInit } from '@angular/core';
import {PizzaService} from '../../services/pizza/pizza.service';
import Pizza from '../../services/models/Pizza';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.page.html',
  styleUrls: ['./pizza.page.scss'],
})
export class PizzaPage implements OnInit {
  id = '';
  nom = '';
  prix = '';
  ingredients: any;
  photo = '';

  pizza: Pizza;
  error: string;

  constructor(private activatedRoute: ActivatedRoute, private pizzaService: PizzaService) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.id = id;
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
