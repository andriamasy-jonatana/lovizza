import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminIngredientPage } from './admin-ingredient.page';

const routes: Routes = [
  {
    path: '',
    component: AdminIngredientPage
  },
  {
    path: 'form-ingredient',
    loadChildren: () => import('./form-ingredient/form-ingredient.module').then( m => m.FormIngredientPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminIngredientPageRoutingModule {}
