import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommanderPageRoutingModule } from './commander-routing.module';

import { CommanderPage } from './commander.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommanderPageRoutingModule
  ],
  declarations: [CommanderPage]
})
export class CommanderPageModule {}
