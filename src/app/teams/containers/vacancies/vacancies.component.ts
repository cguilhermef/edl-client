import {Component, OnInit} from '@angular/core';
import {Role, Team, Vacancy} from '@app/_models';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RiotService, VacanciesService} from '@app/_services';

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

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private riotService: RiotService,
    private vacanciesService: VacanciesService
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
        this.setupForm();
      }
    );
  }

  get vacancies(): Vacancy[] {
    return this.item.vacancies || [];
  }

  set vacancies(vacancies: Vacancy[]) {
    this.item.vacancies = vacancies;
  }

  roleImageBy(roleId: number): string {
    return this.riotService.imageByRoleId(roleId);
  }

  roleNameBy(roleId: number): string {
    return this.roles.find(r => r.id === roleId).name;
  }

  availableRoles(): Role[] {
    return this.roles.filter(r => {
      return (this.vacancies || []).every(v => v.roleId !== r.id);
    });
  }

  add() {
    if (this.form.invalid) {
      return;
    }
    this.form.disable();
    this.processing = true;

    this.vacanciesService.store(this.form.value)
      .subscribe(vacancy => {
        this.vacancies = [...(this.vacancies || []), vacancy];
        this.form.enable();
        this.form.reset({teamId: this.item.id});
        this.form.get('roleId').setErrors(null);
        this.processing = false;
      });
  }

  remove(vacancy: Vacancy) {
    this.processing = true;
    this.vacanciesService.destroy(vacancy)
      .subscribe(() => {
        this.vacancies = this.vacancies.filter(v => v.id !== vacancy.id);
        this.processing = false;
      });
  }

  private setupForm() {
    this.form = this.fb.group({
      roleId: this.fb.control('', Validators.required),
      teamId: this.fb.control(this.item ? this.item.id : null)
    });
  }
}
