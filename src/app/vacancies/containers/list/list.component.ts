/* tslint:disable:no-string-literal */
import {Component, OnInit} from '@angular/core';
import {ListResponse, Role, Vacancy} from '@app/_models';
import {RiotService, VacanciesService} from '@app/_services';
import {ActivatedRoute} from '@angular/router';
import {PageEvent} from '@angular/material';

@Component({
  selector: 'edl-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  displayedColumns = ['position', 'initial_ranking', 'team', 'owner'];
  items: ListResponse<Vacancy[]>;
  processing = true;
  roles: Role[];

  constructor(
    private route: ActivatedRoute,
    private riotService: RiotService,
    private service: VacanciesService
  ) {
  }

  ngOnInit() {
    this.processing = true;
    this.route.data.subscribe(
      data => {
        this.items = data['items'];
        this.roles = data['roles'];
        this.processing = false;
      }
    );
  }

  roleImageBy(roleId: number): string {
    return this.riotService.imageByRoleId(roleId);
  }

  roleNameBy(roleId: number): string {
    return this.roles.find(r => r.id === roleId).name;
  }

  reloadList(event: PageEvent) {
    this.processing = true;
    this.service.index(event.pageIndex + 1, event.pageSize).subscribe(response => {
      this.processing = false;
      this.items = response;
    });
  }

}
