import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: 'accueil', loadChildren: () => import('./pages/accueil/accueil.module').then( m => m.AccueilPageModule) },
  {
    path: 'commander',
    loadChildren: () => import('./pages/commander/commander.module').then( m => m.CommanderPageModule)
  },
  {
    path: 'pizza',
    loadChildren: () => import('./pages/pizza/pizza.module').then( m => m.PizzaPageModule)
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
