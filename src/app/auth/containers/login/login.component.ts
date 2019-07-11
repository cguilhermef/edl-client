import {Component, OnInit} from '@angular/core';
import {AuthService} from '@app/_services';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'edl-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: AuthService
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
    console.log(email, password);
    this.service.login(email, password)
      .subscribe(response => {
        if (!response.account_verified) {
          this.router.navigate(['/account', 'link-account']);
          return;
        }
        this.router.navigate(['/vacancies']);
      });
  }

  private setupForm() {
    this.form = this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control('', [Validators.required])
    });
  }
}
