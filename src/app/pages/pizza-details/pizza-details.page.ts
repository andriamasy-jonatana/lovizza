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

  pizza: any = {};

  constructor(private activatedRoute: ActivatedRoute, private pizzaService: PizzaService) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getPizzaDetail();
  }

  getPizzaDetail() {
    this.pizzaService.getPizzaById(this.id)
      .subscribe(res => {
        this.pizza = res;
        console.log(this.pizza);
      }, err => {
        console.log(err);
      });
  }

}
