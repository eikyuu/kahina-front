import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card-article',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './card-article.component.html',
  styleUrls: ['./card-article.component.scss']
})
export class CardArticleComponent implements OnInit {

  @Input() article: any;
  @Input() one = false;

  ngOnInit(): void {
    console.log(this.article);
  }
}
