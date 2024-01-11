import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from '../../ui/button/button.component';
import { AuthService } from '../../@core/services/auth/auth.service';
import { TitleComponent } from '../../ui/text/title/title.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ButtonComponent, TitleComponent],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  public authService = inject(AuthService);
  _formBuilder = inject(FormBuilder);

  submitted = false;

  registerForm = this._formBuilder.group({
    pseudo: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required, Validators.minLength(8)],
  });

  get form() { return this.registerForm.controls; }

  onSubmit() {
    console.log('Données soumises non valides : ', this.registerForm.get('pseudo')?.errors);
    if (this.registerForm.valid) {
      console.log('Données soumises : ', this.registerForm.value);
      this.registerForm.reset();
    }
  }

}
