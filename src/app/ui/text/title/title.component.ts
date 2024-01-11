import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent {
  @Input() tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' = 'h1';
  @Input() title = 'Titre';
  @Input() className = '';
  @Input() color = '#F9F8F4';
}
