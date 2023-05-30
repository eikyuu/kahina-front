import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardArticleComponent } from '../../ui/card-article/card-article.component';
import { TitleComponent } from '../../ui/title/title.component';
import { CardAnimeComponent } from '../../ui/card-anime/card-anime.component';
import { BannerComponent } from '../../ui/banner/banner.component';
import { SortByPipe } from '../../@core/pipes/SortByPipe.pipe';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { ScoringComponent } from '../../composants/scoring/scoring.component';
import { ButtonComponent } from '../../ui/button/button.component';
import { ReviewComponent } from '../../ui/review/review.component';
import { CardCharacterComponent } from '../../ui/card-character/card-character.component';
import { RelationshipComponent } from '../../ui/relationship/relationship.component';
import { ThemeComponent } from '../../ui/theme/theme.component';
import { PosterComponent } from '../../ui/poster/poster.component';
import { PresentationComponent } from '../../composants/presentation/presentation.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AnimesService } from '../../@core/services/animes/animes.service';
import { Anime } from '../../@core/models/anime.model';
import { SafePipe } from '../../@core/pipes/SafePipe.pipe';
import { ScrollAnchorDirective } from '../../@core/directives/scroll-anchor.directive';
import { ScrollSectionDirective } from '../../@core/directives/scroll-section.directive';
import { ScrollManagerDirective } from '../../@core/directives/scroll-manager.directive';
import { ScrollTopDirective } from '../../@core/directives/scroll-top.directive';
import { InformationComponent } from '../../composants/information/information.component';
import { trackByFn } from '../../@core/utils/utils';
import { Subject, switchMap, takeUntil } from 'rxjs';
import { Title } from '@angular/platform-browser';
import * as _ from 'lodash';


@Component({
  selector: 'app-anime',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    CardArticleComponent,
    TitleComponent,
    CardAnimeComponent,
    BannerComponent,
    ScoringComponent,
    SortByPipe,
    SafePipe,
    NgxSkeletonLoaderModule,
    ReviewComponent,
    CardCharacterComponent,
    RelationshipComponent,
    InformationComponent,
    ThemeComponent,
    PosterComponent,
    PresentationComponent,
    ScrollAnchorDirective,
    ScrollSectionDirective,
    ScrollManagerDirective,
    RouterLink,
    NgxSkeletonLoaderModule
  ],
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.scss'],
})
export class AnimeComponent extends ScrollTopDirective implements OnInit, OnDestroy {
  private readonly ngUnsubscribe$ = new Subject<void>();
  
  public anime: any;
  public presentation: any;
  public videoUrl: string | undefined;
  public trackByFn = trackByFn;

  private readonly animesService = inject(AnimesService);
  private readonly route = inject(ActivatedRoute);
  private titleService = inject(Title);

  constructor() {
    super();
  }

  ROUTER_PARAM_SLUG = this.route.snapshot.params['slug'];
  PAGE_TITLE = `Kahina - Anime - ${_.capitalize(this.ROUTER_PARAM_SLUG)}`

  ngOnInit(): void {
    this.titleService.setTitle(this.PAGE_TITLE);

    this.route.params
      .pipe(switchMap((params) => {
        return this.animesService.getAnime(params['slug']);
      }))
      .pipe(takeUntil(this.ngUnsubscribe$))
      .subscribe((data: Anime) => {
        this.anime = data;
        this.videoUrl = `https://www.youtube.com/embed/${this.anime.youtubeVideoId}`;
        this.presentation = {
          title: this.anime?.title.enJp,
          synopsis: this.anime?.synopsis,
          upVoteCount: this.anime?.upVoteCount,
          score: {
            note: this.anime?.score,
            userCount: this.anime?.userCount,
            ratingRank: this.anime?.ratingRank,
            popularityRank: this.anime?.popularityRank,
          },
          image: this.anime?.posterImage
        };
        this.checkScroll();
      }
    );

  }

  ngOnDestroy(): void {
    this.ngUnsubscribe$.next();
    this.ngUnsubscribe$.complete();
  }

}
