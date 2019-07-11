import {Component, OnInit} from '@angular/core';
import {AccountService, AuthService, RiotService} from '@app/_services';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'edl-link-account',
  templateUrl: './link-account.component.html',
  styleUrls: ['./link-account.component.scss']
})
export class LinkAccountComponent implements OnInit {

  form: FormGroup;
  iconId: number;
  processing = false;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private riotService: RiotService,
    private router: Router,
    private snackbar: MatSnackBar,
    private service: AccountService
  ) {
  }

  ngOnInit() {
    this.setupForm();
  }

  get urlIcon(): string {
    return this.iconId ? this.riotService.urlToIcon(this.iconId) : null;
  }

  register() {
    if (this.form.invalid) {
      return;
    }

    const {summoner} = this.form.value;
    this.processing = true;
    this.form.disable();

    this.service.registerSummoner(summoner)
      .subscribe(
        response => {
          this.iconId = response.iconId;
          this.processing = false;
        },
        (err) => {
          this.processing = false;
          this.form.enable();
        }
      );
  }

  verify() {
    const { summoner } = this.form.value;
    this.processing = true;
    this.service.verifySummoner(summoner, this.iconId)
      .subscribe(
        response => {
        this.authService.setSummonerConfirmed();
        this.authService.setSummoner(response);
        this.snackbar.open('Sua conta foi verificada!');
        this.router.navigate(['/vacancies']);
        this.processing = false;
      },
        () => {
          this.processing = false;
          this.snackbar.open('Oops... um erro ocorreu um erro!', 'Ok');
        });
  }

  private setupForm() {
    this.form = this.fb.group({
      summoner: this.fb.control('', [Validators.required, Validators.minLength(5)])
    });
  }

}
