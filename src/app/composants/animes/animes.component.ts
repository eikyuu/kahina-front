import { Component, Host, HostListener, Input, OnInit } from '@angular/core';
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

  public WIDTH_MOBILE = 768;
  private _animes: any;
  public screenWidth: any = 0;
  public isMobile = false;

  @Input()
  set animes(animes: any) {
    this._animes = animes;
  }

  get animes(): any {
    return this._animes;
  }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
    this.isMobile = this.screenWidth <= this.WIDTH_MOBILE;
    console.log(this.isMobile);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.screenWidth = window.innerWidth;
    this.isMobile = this.screenWidth <= this.WIDTH_MOBILE;
  }
}
