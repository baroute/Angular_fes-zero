import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from '../test/test/test.component';
import { WelcomeComponent } from './welcome/welcome.component';


const routes: Routes = [
  {
    path:'',
    component: WelcomeComponent
  },
  {
    path: 'test',
    component: TestComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelcomeRoutingModule { }
