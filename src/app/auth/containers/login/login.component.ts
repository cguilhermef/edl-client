import {Component, OnInit} from '@angular/core';
import {AuthService} from '@app/_services';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'edl-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  processing = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: AuthService,
    private snackbar: MatSnackBar
  ) {
  }

  ngOnInit() {
    this.setupForm();
  }

  login() {
    if (this.form.invalid) {
      return;
    }

    const {email, password} = this.form.value;
    this.form.disable();
    this.processing = true;

    this.service.login(email, password)
      .subscribe(
        response => {
          if (!response.account_verified) {
            this.router.navigate(['/account', 'link-account']);
            return;
          }
          this.router.navigate(['/vacancies']);
          this.processing = false;
        },
        () => {
          this.processing = false;
          this.snackbar.open('Erro! Verifique o email e a senha informados!', 'Ok');
          this.form.enable();
        });
  }

  private setupForm() {
    this.form = this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control('', [Validators.required])
    });
  }
}
