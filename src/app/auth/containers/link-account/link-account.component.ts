import { Component, OnInit } from '@angular/core';
import {AccountService} from '@app/_services';

@Component({
  selector: 'edl-link-account',
  templateUrl: './link-account.component.html',
  styleUrls: ['./link-account.component.scss']
})
export class LinkAccountComponent implements OnInit {

  processing = true;

  constructor(
    private service: AccountService
  ) { }

  ngOnInit() {
  }

}
