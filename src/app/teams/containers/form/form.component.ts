import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Ranking, Team} from '@app/_models';
import {ActivatedRoute, Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';
import {TeamsService} from '@app/_services';

@Component({
  selector: 'edl-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  editing = false;
  item: Team;
  form: FormGroup;
  processing = false;
  rankings: Ranking[];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private service: TeamsService,
    private snackbar: MatSnackBar
  ) {
  }

  ngOnInit() {
    this.setupFilter();
    this.route.data
      .subscribe(data => {
        // tslint:disable-next-line:no-string-literal
        this.rankings = data['rankings'];
        // tslint:disable-next-line:no-string-literal
        this.item = data['item'];
        this.editing = this.item && this.item.hasOwnProperty('id');
        this.setupFilter();
      });
  }

  save() {
    if (this.form.invalid) {
      this.snackbar.open('Verifique os dados!');
      return;
    }

    const team: Team = this.form.value;
    this.service.store(team)
      .subscribe(
        () => {
          this.processing = true;
          this.router.navigate(['/teams'])
            .then(() => this.processing = false);
        }
      );
  }

  private setupFilter() {
    const {
      id = null,
      name = '',
      abbreviation = '',
      minRanking = 0,
    } = this.item || {};

    this.form = this.fb.group({
      id: this.fb.control(id),
      name: this.fb.control(name, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(30)
      ]),
      abbreviation: this.fb.control(abbreviation, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(5)
      ]),
      minRanking: this.fb.control(minRanking, Validators.required)
    });
  }

}
