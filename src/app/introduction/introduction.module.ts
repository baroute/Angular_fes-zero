import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntroductionRoutingModule } from './introduction-routing.module';
import { IntroductionComponent } from './introduction.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [IntroductionComponent],
  imports: [
    CommonModule,
    IntroductionRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatRadioModule,
    MatIconModule
  ]
})
export class IntroductionModule { }
