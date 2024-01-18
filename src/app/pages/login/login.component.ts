import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../ui/button/button.component';
import { ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';
import { TitleComponent } from '../../ui/text/title/title.component';
import { AuthService } from '../../@core/services/auth/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ButtonComponent, ReactiveFormsModule, TitleComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent {
  _formBuilder = inject(FormBuilder);
  private authService = inject(AuthService);

  submitted = false;
  loading = false;

  formGroup = {
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  }

  loginForm = this._formBuilder.group(this.formGroup);

  get form() {
    return this.loginForm.controls;
  }

  submit(): void {
    this.submitted = true;
    console.log(this.loginForm.value, 'this.loginForm.value');

    if (!this.form.email.value || !this.form.password.value || this.loginForm.invalid) {
      return;
    }
    this.loading = true;
    this.authService.login(this.form.email.value, this.form.password.value).subscribe(
      () => {
        this.loading = false;
      },
      (error) => {
        console.log(error, 'error');
        this.loading = false;
      }
    );
  }
}
