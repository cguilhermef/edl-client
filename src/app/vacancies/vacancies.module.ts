import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './containers';
import {VacanciesRoutingModule} from './vacancies-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatGridListModule,
  MatPaginatorModule,
  MatProgressBarModule, MatProgressSpinnerModule, MatSnackBarModule, MatTableModule, MatTabsModule
} from '@angular/material';



@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatTableModule,
    MatTabsModule,
    VacanciesRoutingModule
  ]
})
export class VacanciesModule { }
