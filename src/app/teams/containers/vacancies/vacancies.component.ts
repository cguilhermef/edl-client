import {Component, OnInit} from '@angular/core';
import {Role, Team, Vacancy} from '@app/_models';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RiotService} from '@app/_services';

@Component({
  selector: 'edl-vacancies',
  templateUrl: './vacancies.component.html',
  styleUrls: ['./vacancies.component.scss']
})
export class VacanciesComponent implements OnInit {

  displayedColumns = ['role', 'actions'];
  item: Team;
  form: FormGroup;
  roles: Role[];
  processing = false;
  vacancies: Vacancy[];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private riotService: RiotService
  ) {
  }

  ngOnInit() {
    this.setupForm();
    this.route.data.subscribe(
      data => {
        // tslint:disable-next-line:no-string-literal
        this.item = data['item'];
        // tslint:disable-next-line:no-string-literal
        this.roles = data['roles'];
      }
    );
  }

  roleImageBy(roleId: number): string {
    return this.riotService.imageByRoleId(roleId);
  }

  roleNameBy(roleId: number): string {
    return this.roles.find(r => r.id === roleId).name;
  }

  availableRoles(): Role[] {
    return this.roles.filter( r => {
      return (this.vacancies ||[]).every(v => v.roleId !== r.id);
    });
  }

  add() {
    if (this.form.invalid) {
      return;
    }
    this.vacancies = [...(this.vacancies || []), this.form.value];
    this.form.reset({});
    this.form.get('roleId').setErrors(null);
    console.log(this.vacancies);
  }

  remove(vacancieId: number) {
    this.vacancies = this.vacancies.filter(v => v.id !== vacancieId);
  }

  private setupForm() {
    this.form = this.fb.group({
      roleId: this.fb.control('', Validators.required)
    });
  }
}
