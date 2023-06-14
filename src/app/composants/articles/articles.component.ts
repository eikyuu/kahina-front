import { CUSTOM_ELEMENTS_SCHEMA, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { CardArticleComponent } from '../../ui/card-article/card-article.component';
import { TitleComponent } from '../../ui/title/title.component';
import { SwiperDirective } from '../../@core/directives/swiper.directive';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [CommonModule, CardArticleComponent, TitleComponent, NgxSkeletonLoaderModule],
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ArticlesComponent extends SwiperDirective  {
  private _articles: any;

  
  @Input()
  set articles(articles: any) {
    this._articles = articles;
  }
  
  public get articles(): any {
    return this._articles;
  }

}
