import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '@app/_services';
import {MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'edl-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  processing = false;
  form: FormGroup;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private snackbar: MatSnackBar,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.setupForm();
  }

  send() {
    if (this.form.invalid) {
      return;
    }
    this.form.disable();
    const {email} = this.form.value;
    this.processing = true;
    this.authService.forgot(email)
      .subscribe(
        () => {
          this.processing = false;
          this.snackbar.open('Enviamos um email para você');
          this.router.navigate(['/vacancies']);
        },
        (err) => {
          this.processing = false;
          this.form.enable();
          this.snackbar.open('Ocorreu um erro. Verifique o email informado', 'Ok');
        }
      );

  }

  private setupForm() {
    this.form = this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.email])
    });
  }

}
