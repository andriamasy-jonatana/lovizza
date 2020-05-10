import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommanderPageRoutingModule } from './commander-routing.module';

import { CommanderPage } from './commander.page';
import {PizzaService} from '../../services/pizza/pizza.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommanderPageRoutingModule
  ],
  declarations: [CommanderPage],
  providers: [PizzaService]
})
export class CommanderPageModule {}
