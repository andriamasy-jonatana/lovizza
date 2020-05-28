import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminPizzaPage } from './admin-pizza.page';

const routes: Routes = [
  {
    path: '',
    component: AdminPizzaPage
  },
  {
    path: 'form-pizza',
    loadChildren: () => import('./form-pizza/form-pizza.module').then( m => m.FormPizzaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPizzaPageRoutingModule {}
