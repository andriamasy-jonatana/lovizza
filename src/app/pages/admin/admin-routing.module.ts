import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminPage } from './admin.page';

const routes: Routes = [
  {
    path: '',
    component: AdminPage
  },
  {
    path: 'admin-pizza',
    loadChildren: () => import('./admin-pizza/admin-pizza.module').then( m => m.AdminPizzaPageModule)
  },
  {
    path: 'admin-ingredient',
    loadChildren: () => import('./admin-ingredient/admin-ingredient.module').then( m => m.AdminIngredientPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPageRoutingModule {}
