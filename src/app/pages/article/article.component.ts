import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesService } from '../../@core/services/articles/articles.service';
import { PageDirective } from '../../@core/directives/page.directive';
import * as _ from 'lodash';
import { switchMap, takeUntil } from 'rxjs';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent extends PageDirective implements OnInit {

  public imageUrl = '';
  public article: any;

  ROUTER_PARAM_SLUG = this.route.snapshot.params['slug'];
  PAGE_TITLE = `Kahina - Article - ${_.capitalize(this.ROUTER_PARAM_SLUG)}`;

  public formatImageURL(url: string): void {
    this.imageUrl = environment.useMock ? `assets/placeholder.webp` : `${environment.baseUrl}uploads/images/license_images/${url}`;
  }


    ngOnInit(): void {
      this.titleService.setTitle(this.PAGE_TITLE);
      console.log(this.route.snapshot.params['slug']);

      this.route.params
        .pipe(switchMap((params) => {
          return this.articlesService.getArticle(params['slug']);
        }
        ))
        .pipe(takeUntil(this.ngUnsubscribe$))
        .subscribe((data: any) => {
          this.article = data;
          console.log(this.article);
          this.formatImageURL(data.image);
        }
        );
    }
} 
