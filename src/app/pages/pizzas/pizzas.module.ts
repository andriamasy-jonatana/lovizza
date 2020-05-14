import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PizzasPageRoutingModule } from './pizzas-routing.module';

import { PizzasPage } from './pizzas.page';
import {PizzaService} from '../../services/pizza/pizza.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PizzasPageRoutingModule
  ],
  declarations: [PizzasPage],
  providers: [PizzaService]
})
export class PizzasPageModule {}
