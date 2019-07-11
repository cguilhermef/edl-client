import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '@app/_services';
import {MatSnackBar} from '@angular/material';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'edl-recovery-password',
  templateUrl: './recovery-password.component.html',
  styleUrls: ['./recovery-password.component.scss']
})
export class RecoveryPasswordComponent implements OnInit {

  form: FormGroup;
  processing = false;
  token: string;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private snackbar: MatSnackBar,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.setupForm();
    this.route.queryParamMap.subscribe(
      params => this.token = params.get('token')
    );
  }

  send() {
    if (this.form.invalid) {
      return;
    }
    const {password, confirm} = this.form.value;
    if (password !== confirm) {
      this.form.get('confirm').setErrors({invalid: 'As senhas devem ser iguais'});
      return;
    } else {
      this.form.get('confirm').setErrors(null);
    }

    this.form.disable();
    this.processing = true;
    this.authService.redefine(password, this.token)
      .subscribe(
        () => {
          this.processing = false;
          this.snackbar.open('Senha alterada com sucesso!');
          this.router.navigate(['/account', 'login']);
        },
        (err) => {
          this.processing = false;
          this.form.enable();
          this.snackbar.open('Ocorreu um erro', 'Ok');
        }
      );

  }

  private setupForm() {
    this.form = this.fb.group({
      password: this.fb.control('', [Validators.required]),
      confirm: this.fb.control('', [Validators.required])
    });
  }

}
