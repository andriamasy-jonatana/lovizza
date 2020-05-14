import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: 'accueil', loadChildren: () => import('./pages/accueil/accueil.module').then( m => m.AccueilPageModule) },
  {
    path: 'pizzas',
    loadChildren: () => import('./pages/pizzas/pizzas.module').then( m => m.PizzasPageModule)
  },
  {
    path: 'pizzas/:id',
    loadChildren: () => import('./pages/pizza-details/pizza-details.module').then( m => m.PizzaDetailsPageModule)
  },
  {
    path: 'panier',
    loadChildren: () => import('./pages/panier/panier.module').then( m => m.PanierPageModule)
  }





];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
