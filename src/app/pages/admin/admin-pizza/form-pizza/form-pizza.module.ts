import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Camera } from '@ionic-native/camera/ngx';

import { IonicModule } from '@ionic/angular';

import { FormPizzaPageRoutingModule } from './form-pizza-routing.module';

import { FormPizzaPage } from './form-pizza.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormPizzaPageRoutingModule
  ],
  declarations: [FormPizzaPage, Camera]
})
export class FormPizzaPageModule {}
