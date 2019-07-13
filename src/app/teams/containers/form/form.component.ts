import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Ranking, Role, Team} from '@app/_models';
import {ActivatedRoute, Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';
import {AuthService, RiotService, TeamsService} from '@app/_services';

@Component({
  selector: 'edl-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  displayedColumns = ['role'];
  editing = false;
  item: Team;
  form: FormGroup;
  processing = false;
  rankings: Ranking[];
  roles: Role[];
  authenticated = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private service: TeamsService,
    private snackbar: MatSnackBar,
    private riotService: RiotService,
    private authService: AuthService
  ) {
  }

  ngOnInit() {
    this.setupFilter();
    this.authenticated = this.authService.isAuthenticated();

    this.authService.isLogged.subscribe(
      status => this.authenticated = status
    );
    this.route.data
      .subscribe(data => {
        // tslint:disable-next-line:no-string-literal
        this.rankings = data['rankings'];
        // tslint:disable-next-line:no-string-literal
        this.item = data['item'];
        // tslint:disable-next-line:no-string-literal
        this.roles = data['roles'];
        this.editing = this.item && this.item.hasOwnProperty('id');
        this.setupFilter();
      });
  }

  roleImageBy(roleId: number): string {
    return this.riotService.imageByRoleId(roleId);
  }

  roleNameBy(roleId: number): string {
    return this.roles.find(r => r.id === roleId).name;
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
