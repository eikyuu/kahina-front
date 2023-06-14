import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardAnimeComponent } from '../../ui/card-anime/card-anime.component';
import { TitleComponent } from '../../ui/title/title.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { SortByPipe } from '../../@core/pipes/SortByPipe.pipe';
import { ListCardAnimeComponent } from './list-card-anime/list-card-anime.component';

@Component({
  selector: 'app-animes',
  standalone: true,
  imports: [CommonModule, CardAnimeComponent, TitleComponent, NgxSkeletonLoaderModule, SortByPipe, ListCardAnimeComponent, TitleComponent],
  templateUrl: './animes.component.html',
  styleUrls: ['./animes.component.scss']
})
export class AnimesComponent implements OnInit {
  private _animes: any;
  public isMobile = false;

  @Input()
  set animes(animes: any) {
    this._animes = animes;
  }

  get animes(): any {
    return this._animes;
  }

  ngOnInit(): void {
    this.isMobile = window.innerWidth <= 768;
    console.log(this.isMobile);
  }
}
