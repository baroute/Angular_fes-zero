import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntranceComponent } from './entrance/entrance.component';
import { WelcomeComponent } from './welcome/welcome.component';


const routes: Routes = [
  {
    path:'',
    component: WelcomeComponent
  },
  {
    path:'welcome',
    component: EntranceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelcomeRoutingModule { }
