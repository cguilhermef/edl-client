import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';
import {AccountService} from '@app/_services';

@Component({
  selector: 'edl-activate-email',
  templateUrl: './activate-email.component.html',
  styleUrls: ['./activate-email.component.scss']
})
export class ActivateEmailComponent implements OnInit {

  token: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: AccountService,
    private snackbar: MatSnackBar
  ) {
  }

  ngOnInit() {
    this.route.queryParamMap.subscribe(
      params => {
        this.token = params.get('token');
        this.service.confirmEmail(this.token)
          .subscribe(response => {
            this.snackbar.open('Email confirmado com sucesso!', 'Ok', {
              duration: 3000
            });
            this.router.navigate(['/account', 'login']);
          });
      }
    );
  }

}
