import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./welcome/welcome.module').then(m => m.WelcomeModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./main/main.module').then(m => m.MainModule)
  },
  {
    path: 'contents',
    loadChildren: () => import('./contents/contents.module').then(m => m.ContentsModule)
  },
  {
    path: 'introduction',
    loadChildren: () => import('./introduction/introduction.module').then(m => m.IntroductionModule)
  },
  {
    path: 'show',
    loadChildren: () => import('./show/show.module').then(m => m.ShowModule)
  },
  {
    path: 'game',
    loadChildren: () => import('./game/game.module').then(m => m.GameModule)
  },
  {
    path: 'buy',
    loadChildren: () => import('./buy/buy.module').then(m => m.BuyModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
