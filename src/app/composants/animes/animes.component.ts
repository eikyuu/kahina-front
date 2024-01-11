import { Component, Input, OnDestroy, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardAnimeComponent } from '../../ui/card-anime/card-anime.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { SortByPipe } from '../../@core/pipes/SortByPipe.pipe';
import { ListCardAnimeComponent } from './list-card-anime/list-card-anime.component';
import { ResizeService } from '../../@core/services/resize.service';
import { Subject, takeUntil } from 'rxjs';
import { TitleComponent } from '../../ui/text/title/title.component';

@Component({
  selector: 'app-animes',
  standalone: true,
  imports: [CommonModule, CardAnimeComponent, TitleComponent, NgxSkeletonLoaderModule, SortByPipe, ListCardAnimeComponent, TitleComponent],
  templateUrl: './animes.component.html',
  styleUrls: ['./animes.component.scss']
})
export class AnimesComponent implements OnInit, OnDestroy {
  
  public readonly ngUnsubscribe$ = new Subject<void>();
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

  private _animes: any;

  @Input()
  set animes(animes: any) {
    this._animes = animes;
  }

  get animes(): any {
    return this._animes;
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe$.next();
    this.ngUnsubscribe$.complete();
  }

}
