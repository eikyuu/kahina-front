import { CUSTOM_ELEMENTS_SCHEMA, Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { CardArticleComponent } from '../../ui/card-article/card-article.component';
import { TitleComponent } from '../../ui/title/title.component';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [CommonModule, CardArticleComponent, TitleComponent, NgxSkeletonLoaderModule],
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ArticlesComponent implements OnInit {
  private _articles: any;

  public isMobile = false;
  
  @Input()
  set articles(articles: any) {
    this._articles = articles;
  }
  
  public get articles(): any {
    return this._articles;
  }


  ngOnInit(): void {
    this.isMobile = window.innerWidth <= 768;
    console.log(this.isMobile);
  }

}
