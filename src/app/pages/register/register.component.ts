import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(private f: FormBuilder) { }

  registerForm = this.f.group({
    name: [''],
    email: [''],
    password: [''],
    passwordConfirm: [''],
  });

  onSubmit() {
    console.log(this.registerForm.value);
  }

  
}
