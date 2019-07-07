import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MenuComponent} from './menu';
import {MatButtonModule, MatListModule} from '@angular/material';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [MenuComponent],
  exports: [
    MatButtonModule,
    MatListModule,
    MenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatListModule
  ]
})
export class SharedModule { }
