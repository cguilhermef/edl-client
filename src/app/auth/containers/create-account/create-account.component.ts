import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AccountService} from '@app/_services';
import {MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'edl-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit, OnDestroy {

  processing = false;
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: AccountService,
    private snackbar: MatSnackBar
  ) {
  }

  ngOnDestroy(): void {
    this.processing = false;
    this.form.reset({});
  }

  ngOnInit() {
    this.setupForm();
  }

  create() {
    if (this.form.invalid) {
      return;
    }

    const {name, email, password, confirm} = this.form.value;

    if (password !== confirm) {
      return;
    }
    this.processing = true;
    this.form.disable();

    this.service.create({name, email, password})
      .subscribe(
        response => {
          this.snackbar.open('Conta criada! Verifique seu email', 'Ok', {
            duration: 0
          });
          this.router.navigate(['/vacancies']);
        },
        () => {
          this.snackbar.open('Ocorreu um erro. Tente novamente!', 'Ok');
          this.form.enable();
          this.processing = false;
        }
      );
  }

  private setupForm() {
    this.form = this.fb.group({
      name: this.fb.control('', [Validators.required, Validators.minLength(3)]),
      email: this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control('', Validators.required),
      confirm: this.fb.control('', Validators.required)
    });
  }

}
