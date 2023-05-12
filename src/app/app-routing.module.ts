import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { Page01Component } from './page01/page01.component';
import { Page02Component } from './page02/page02.component';
import { Page03Component } from './page03/page03.component';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    component: Page01Component
  },
  {
    path: 'page01',
    component: Page01Component
  },
  {
    path: 'page02',
    component: Page02Component
  },
  {
    path: 'page03',
    component: Page03Component
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
