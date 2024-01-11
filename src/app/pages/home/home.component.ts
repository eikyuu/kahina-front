import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimesService } from '../../@core/services/animes/animes.service';
import { ArticlesService } from '../../@core/services/articles/articles.service';
import { BannerComponent } from '../../ui/banner/banner.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { ArticlesComponent } from '../../composants/articles/articles.component';
import { AnimesComponent } from '../../composants/animes/animes.component';
import { Subject, forkJoin, takeUntil } from 'rxjs';
import { ButtonComponent } from '../../ui/button/button.component';
import { WelcomeComponent } from '../../composants/welcome/welcome.component';
import { TitleComponent } from '../../ui/text/title/title.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TitleComponent, BannerComponent, ArticlesComponent, AnimesComponent, NgxSkeletonLoaderModule, ButtonComponent, WelcomeComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  private readonly ngUnsubscribe$ = new Subject<void>();

  public articles: any;
  public animes: any;

  private readonly animesService = inject(AnimesService);
  private readonly articlesService = inject(ArticlesService);

  ngOnInit(): void {
    forkJoin([this.animesService.getAnimes(), this.articlesService.getArticles()])
    .pipe(takeUntil(this.ngUnsubscribe$))
    .subscribe(([animes, articles]) => {
      this.animes = animes;
      this.articles = articles;
      }
    );
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe$.next();
    this.ngUnsubscribe$.complete();
  }
}
