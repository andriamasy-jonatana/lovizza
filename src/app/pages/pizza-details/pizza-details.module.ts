import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PizzaDetailsPageRoutingModule } from './pizza-details-routing.module';

import { PizzaDetailsPage } from './pizza-details.page';
import {PizzaService} from '../../services/pizza/pizza.service';
import {IngredientService} from '../../services/ingredient/ingredient.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PizzaDetailsPageRoutingModule
  ],
  declarations: [PizzaDetailsPage],
  providers: [PizzaService, IngredientService]
})
export class PizzaDetailsPageModule {}
