import {Component, OnInit} from '@angular/core';
import {AuthService, TeamsService} from '@app/_services';
import {AuthenticatedUser, ListResponse, Team} from '@app/_models';
import {PageEvent} from '@angular/material';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {itensPerPage} from '@app/shared/constants';

@Component({
  selector: 'edl-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  // displayedColumns = ['abbreviation', 'name', 'initial_ranking', 'mine','vacancies'];
  displayedColumns = ['abbreviation', 'name', 'initial_ranking', 'vacancies'];
  processing = true;
  myTeams: boolean;
  teamList: ListResponse<Team[]>;
  user: AuthenticatedUser;

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private teamService: TeamsService
  ) {
  }

  ngOnInit() {

    this.user = this.authService.isAuthenticated() ? this.authService.getUserCached().user : null;
    this.authService.isLogged
      .subscribe(() => {
        this.user = this.authService.getUserCached().user;
      });
    this.route.data.subscribe(
      data => {
        this.processing = false;
        // tslint:disable-next-line:no-string-literal
        this.teamList = data['items'];
      }
    );
    // this.route.queryParamMap.subscribe(
    //   params => {
    //     this.myTeams = params.get('my_teams') === 'true' ? true : false;
    //     this.teamService.index(1, itensPerPage, this.myTeams ? this.user.id : null)
    //       .subscribe(teams => this.teamList = teams);
    //   }
    // );
  }

  createTeam() {
    this.processing = true;
    this.router.navigate(['/teams', 'new'])
      .then(() => {
        this.processing = false;
      });
  }

  editTeam(teamId: number) {
    this.processing = true;
    this.router.navigate(['/teams', teamId])
      .then(() => {
        this.processing = false;
      });
  }

  reloadList(event: PageEvent) {
    this.processing = true;
    (
      this.myTeams
        ? this.teamService.index(event.pageIndex + 1, event.pageSize, this.user.id)
        : this.teamService.index(event.pageIndex + 1, event.pageSize)
    ).subscribe(response => {
      this.processing = false;
      this.teamList = response;
    });
  }

}
