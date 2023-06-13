import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../ui/button/button.component';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {

}
