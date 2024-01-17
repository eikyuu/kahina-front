import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../ui/button/button.component';
import {ReactiveFormsModule, Validators, FormBuilder} from '@angular/forms';
import { TitleComponent } from '../../ui/title/title.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ButtonComponent, ReactiveFormsModule, TitleComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent {
  _formBuilder = inject(FormBuilder);
  
  submitted = false;
  loading = false;

  formGroup: { email: any, password: any, remember: any} = {
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    remember: [false],
  };

  loginForm = this._formBuilder.group(this.formGroup);

  get form() {
    return this.loginForm.controls;
  }

  submit() {
    this.submitted = true;
    // stop here if form is invalid
    console.log(this.loginForm.value, 'this.loginForm.value');
    if (this.loginForm.invalid) {
      return;
    }
    this.loading = true;
  }
}
