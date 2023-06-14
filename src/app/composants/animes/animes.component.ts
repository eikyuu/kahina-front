import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardAnimeComponent } from '../../ui/card-anime/card-anime.component';
import { TitleComponent } from '../../ui/title/title.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { SortByPipe } from '../../@core/pipes/SortByPipe.pipe';
import { ListCardAnimeComponent } from './list-card-anime/list-card-anime.component';
import { SwiperDirective } from '../../@core/directives/swiper.directive';

@Component({
  selector: 'app-animes',
  standalone: true,
  imports: [CommonModule, CardAnimeComponent, TitleComponent, NgxSkeletonLoaderModule, SortByPipe, ListCardAnimeComponent, TitleComponent],
  templateUrl: './animes.component.html',
  styleUrls: ['./animes.component.scss']
})
export class AnimesComponent extends SwiperDirective {

  private _animes: any;

  @Input()
  set animes(animes: any) {
    this._animes = animes;
  }

  get animes(): any {
    return this._animes;
  }



}
