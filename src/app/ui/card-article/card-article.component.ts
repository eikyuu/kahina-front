import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-article',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-article.component.html',
  styleUrls: ['./card-article.component.scss']
})
export class CardArticleComponent {
  @Input() article: any;
  @Input() one = false;
}
