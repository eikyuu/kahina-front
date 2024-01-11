import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, Input, OnDestroy, OnInit, inject } from '@angular/core';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { CardArticleComponent } from '../../ui/card-article/card-article.component';
import { ResizeService } from '../../@core/services/resize.service';
import { Subject, takeUntil } from 'rxjs';
import { TitleComponent } from '../../ui/text/title/title.component';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [CommonModule, CardArticleComponent, TitleComponent, NgxSkeletonLoaderModule],
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ArticlesComponent implements OnInit, OnDestroy {
  public readonly ngUnsubscribe$ = new Subject<void>();

  private _articles: any;

  private resizeService: ResizeService = inject(ResizeService);
  isMobile = false;
   ngOnInit(): void {
    this.resizeService.init();
    this.resizeService.isMobile$
    .pipe(takeUntil(this.ngUnsubscribe$))
    .subscribe(isMobile => {
      this.isMobile = isMobile;
    });
  }

  @Input()
  set articles(articles: any) {
    this._articles = articles;
  }

  public get articles(): any {
    return this._articles;
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe$.next();
    this.ngUnsubscribe$.complete();
  }

}
