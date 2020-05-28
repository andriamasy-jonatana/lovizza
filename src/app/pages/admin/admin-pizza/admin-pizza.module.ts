import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminPizzaPageRoutingModule } from './admin-pizza-routing.module';

import { AdminPizzaPage } from './admin-pizza.page';
import {PizzaService} from '../../../services/pizza/pizza.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminPizzaPageRoutingModule
  ],
  declarations: [AdminPizzaPage],
  providers: [PizzaService]
})
export class AdminPizzaPageModule {}
