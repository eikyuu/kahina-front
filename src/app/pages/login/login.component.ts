import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../ui/button/button.component';
import {ReactiveFormsModule} from '@angular/forms';
import { Login } from '../../@core/utils/utils';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ButtonComponent, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent {
  login = new Login();
}
