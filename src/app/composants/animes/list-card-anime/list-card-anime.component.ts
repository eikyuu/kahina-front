import { CUSTOM_ELEMENTS_SCHEMA, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { SortByPipe } from '../../../@core/pipes/SortByPipe.pipe';
import { CardAnimeComponent } from '../../../ui/card-anime/card-anime.component';
import { trackByFn } from '../../../@core/utils/utils';
import { TitleComponent } from '../../../ui/text/title/title.component';

@Component({
  selector: 'app-list-card-anime',
  standalone: true,
  imports: [CommonModule, TitleComponent, NgxSkeletonLoaderModule, SortByPipe, CardAnimeComponent],
  templateUrl: './list-card-anime.component.html',
  styleUrls: ['./list-card-anime.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ListCardAnimeComponent {

  private _animes: any;
  private _sortBy = '';

  @Input() public isMobile = false;

  @Input()
  public set sortBy(value: string) {
    this._sortBy = value;
  }

  public get sortBy(): string {
    return this._sortBy;
  }

  @Input()
   public set animes(value: any) {
    this._animes = value;
  }

  public get animes(): any {
    return this._animes;
  }

  public trackByFn = trackByFn;

}
