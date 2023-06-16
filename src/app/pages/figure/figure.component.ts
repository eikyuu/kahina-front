import { CUSTOM_ELEMENTS_SCHEMA, Component, OnDestroy, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PresentationComponent } from '../../composants/presentation/presentation.component';
import { ActivatedRoute } from '@angular/router';
import { AnimesService } from '../../@core/services/animes/animes.service';
import { Subject, forkJoin, takeUntil } from 'rxjs';
import { TitleComponent } from '../../ui/title/title.component';
import { ListCardAnimeComponent } from '../../composants/animes/list-card-anime/list-card-anime.component';
import { CardCharacterComponent } from '../../ui/card-character/card-character.component';
import { trackByFn } from '../../@core/utils/utils';
import { PosterComponent } from '../../ui/poster/poster.component';
import { Title } from '@angular/platform-browser';
import * as _ from 'lodash';
import { ResizeService } from '../../@core/services/resize.service';
import { CardAnimeComponent } from '../../ui/card-anime/card-anime.component';

@Component({
  selector: 'app-figure',
  standalone: true,
  imports: [
    CommonModule,
    PresentationComponent,
    TitleComponent,
    ListCardAnimeComponent,
    CardCharacterComponent,
    TitleComponent,
    PosterComponent,
    CardAnimeComponent,
  ],
  templateUrl: './figure.component.html',
  styleUrls: ['./figure.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FigureComponent implements OnInit, OnDestroy {

  private titleService = inject(Title);
  public trackByFn = trackByFn;
  private route = inject(ActivatedRoute);
  private animesService = inject(AnimesService);
  private resizeService: ResizeService = inject(ResizeService);
  isMobile = false;

  ROUTER_PARAM_TYPE: 'figure' | 'staff ' = this.route.snapshot.params['type'];
  ROUTER_PARAM_SLUG = this.route.snapshot.params['slug'];
  PAGE_TITLE = `${_.capitalize(this.ROUTER_PARAM_TYPE)} - ${this.ROUTER_PARAM_SLUG}`;

  private readonly ngUnsubscribe$ = new Subject<void>();

  public presentation: any | undefined;
  public animes: any;
  public staffs: any;
  public posters: any;

  ngOnInit(): void {

    this.resizeService.init();
    this.resizeService.isMobile$
      .pipe(takeUntil(this.ngUnsubscribe$))
      .subscribe(isMobile => {
        this.isMobile = isMobile;
      });


    this.titleService.setTitle(this.PAGE_TITLE);

    forkJoin([
      this.animesService.getAnimesByCharacter(
        this.ROUTER_PARAM_SLUG,
        this.ROUTER_PARAM_TYPE
      ),
      this.animesService.getStaffByCharacter(
        this.ROUTER_PARAM_SLUG,
        this.ROUTER_PARAM_TYPE
      ),
      this.animesService.getCharacter(
        this.ROUTER_PARAM_SLUG,
        this.ROUTER_PARAM_TYPE
      ),
      this.animesService.getPosterByCharacter(
        this.ROUTER_PARAM_SLUG,
        this.ROUTER_PARAM_TYPE
      ),
    ])
      .pipe(takeUntil(this.ngUnsubscribe$))
      .subscribe(([animes, staff, character, posters]) => {
        this.animes = animes;
        this.staffs = staff;
        this.posters = posters;
        this.presentation = {
          title:
            this.ROUTER_PARAM_TYPE === 'figure'
              ? character.name.english
              : character.firstname + ' ' + character.lastname,
          synopsis:
            this.ROUTER_PARAM_TYPE === 'figure'
              ? character.description
              : character.biography,
          upVoteCount: 0,
          image: character.image,
        };
      });
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe$.next();
    this.ngUnsubscribe$.complete();
  }
}
