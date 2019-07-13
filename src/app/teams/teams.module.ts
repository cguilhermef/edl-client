import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormComponent, ListComponent, VacanciesComponent} from '@app/teams/containers';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule, MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule, MatSelectModule, MatSnackBarModule, MatTableModule, MatTabsModule
} from '@angular/material';
import {TeamsRoutingModule} from './teams-routing.module';


@NgModule({
  declarations: [
    ListComponent,
    FormComponent,
    VacanciesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatInputModule,
    MatIconModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSnackBarModule,
    MatTableModule,
    MatTabsModule,
    TeamsRoutingModule
  ]
})
export class TeamsModule {
}
