import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() libelle = 'Click me';
  @Input() color = '#F9F8F4';
  @Input() background = '#202020';
  @Input() type = 'button';
  @Input() disabled = false;
}
