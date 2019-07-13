import {Component, OnInit} from '@angular/core';
import {Role, Team} from '@app/_models';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RiotService} from '@app/_services';

@Component({
  selector: 'edl-vacancies',
  templateUrl: './vacancies.component.html',
  styleUrls: ['./vacancies.component.scss']
})
export class VacanciesComponent implements OnInit {

  item: Team;
  form: FormGroup;
  roles: Role[];
  processing = false;

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

  availableRoles(): Role[] {
    return this.roles;
  }

  private setupForm() {
    this.form = this.fb.group({
      role: this.fb.control('', Validators.required)
    });
  }
}
