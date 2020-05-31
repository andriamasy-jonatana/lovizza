import { Component, OnInit } from '@angular/core';
import Pizza from '../../../../models/pizza/Pizza';
import {PizzaService} from '../../../../services/pizza/pizza.service';
import {Router} from '@angular/router';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

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


  constructor(private pizzaService: PizzaService, private route: Router, private camera: Camera) {
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
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true
    };

    this.camera.getPicture(options).then((imageData) => {
      console.log(imageData);
      this.imgData = 'data:image/jpeg;base64,' + imageData;
    }, (error) => {
      console.log('Error camera', error);
    });
  }
}
