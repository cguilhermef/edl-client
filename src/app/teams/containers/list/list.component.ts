import {Component, OnInit} from '@angular/core';
import {TeamsService} from '@app/_services';
import {ListResponse, Team} from '@app/_models';
import {PageEvent} from '@angular/material';

@Component({
  selector: 'edl-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  displayedColumns = ['abbreviation', 'name', 'initial_ranking', 'vacancies'];
  processing = true;
  teamList: ListResponse<Team[]>;

  constructor(
    private teamService: TeamsService
  ) {
  }

  ngOnInit() {
    this.teamService.index()
      .subscribe(response => {
        this.teamList = response;
        this.processing = false;
      });
  }

  reloadList(event: PageEvent) {
    this.processing = true;
    this.teamService.index(event.pageIndex + 1, event.pageSize)
      .subscribe(response => {
        this.processing = false;
        this.teamList = response;
      });
  }

}
