import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './containers';
import {VacanciesRoutingModule} from './vacancies-routing.module';



@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    VacanciesRoutingModule
  ]
})
export class VacanciesModule { }
