import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminIngredientPageRoutingModule } from './admin-ingredient-routing.module';

import { AdminIngredientPage } from './admin-ingredient.page';
import {IngredientService} from '../../../services/ingredient/ingredient.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminIngredientPageRoutingModule
  ],
  declarations: [AdminIngredientPage],
  providers: [IngredientService]
})
export class AdminIngredientPageModule {}
