import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { FmainComponent } from './fmain/fmain.component'

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { FcontentsComponent } from './fcontents/fcontents.component';
import { FshowComponent } from './fshow/fshow.component';
import { FintroductionComponent } from './fintroduction/fintroduction.component';
import { FgameComponent } from './fgame/fgame.component';
import { FshopComponent } from './fshop/fshop.component';
import { EntranceComponent } from './entrance/entrance.component';

@NgModule({
  declarations: [WelcomeComponent,FmainComponent, FcontentsComponent, FshowComponent, FintroductionComponent, FgameComponent, FshopComponent, EntranceComponent],
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatRadioModule,
    MatIconModule

  ]
})
export class WelcomeModule { }
