import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentsRoutingModule } from './contents-routing.module';
import { ContentsComponent } from './contents.component';

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
@NgModule({
  declarations: [ContentsComponent],
  imports: [
    CommonModule,
    ContentsRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatRadioModule,
    MatIconModule,
    MatCardModule
  ]
})
export class ContentsModule { }
