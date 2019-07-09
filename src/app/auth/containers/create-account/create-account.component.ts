import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AccountService} from '@app/_services';

@Component({
  selector: 'edl-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: AccountService
  ) {
  }

  ngOnInit() {
    this.setupForm();
  }

  create() {
    if (this.form.invalid) {
      return;
    }

    const { name, email, password, confirm} = this.form.value;

    if (password !== confirm) {
      return;
    }

    this.service.create({name, email, password})
      .subscribe( response => {
        console.log('response', response);
      });
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
