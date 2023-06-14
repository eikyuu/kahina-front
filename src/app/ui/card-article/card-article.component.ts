import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card-article',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './card-article.component.html',
  styleUrls: ['./card-article.component.scss']
})
export class CardArticleComponent {

  @Input() article: any;
  @Input() one = false;


}
