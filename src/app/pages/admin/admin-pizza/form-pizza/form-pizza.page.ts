import { Component, OnInit } from '@angular/core';
import Pizza from '../../../../models/pizza/Pizza';
import {PizzaService} from '../../../../services/pizza/pizza.service';
import {Router} from '@angular/router';

declare var window;

@Component({
  selector: 'app-form-pizza',
  templateUrl: './form-pizza.page.html',
  styleUrls: ['./form-pizza.page.scss'],
})
export class FormPizzaPage implements OnInit {
  pizza: Pizza;

  id: string;
  nom: string;
  photo: string;
  prix: number;
  ingredient: any = [];

  imgData: string;


  constructor(private pizzaService: PizzaService, private route: Router) {
    this.pizza = new Pizza(this.id, this.nom, this.prix, this.photo, this.ingredient);
  }

  ngOnInit() {
  }

  // Création d'une pizza
  ajoutPizza() {
    this.photo = this.imgData;
    this.pizzaService.addPizza(this.pizza)
      .subscribe(data => {
        console.log(data);
        // Redirection vers la liste des pizzas
        this.route.navigateByUrl('/admin/admin-pizza').then(() => {
          window.Location.getPizzas();
        });
      }, err => {
        console.log(err);
      });
  }

  takePicture() {
    console.log('photo cliqué');
  }
}
