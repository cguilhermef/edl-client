import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListComponent} from '@app/teams/containers';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule, MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule, MatSnackBarModule, MatTableModule
} from '@angular/material';
import {TeamsRoutingModule} from './teams-routing.module';


@NgModule({
  declarations: [ListComponent],
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
    MatSnackBarModule,
    MatTableModule,
    TeamsRoutingModule
  ]
})
export class TeamsModule {
}
