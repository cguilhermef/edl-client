import {Component, OnInit} from '@angular/core';
import {AuthService} from '@app/_services';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'edl-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
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
        console.log(response);
      });
  }

  private setupForm() {
    this.form = this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control('', [Validators.required])
    });
  }
}
