import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCardAnimeComponent } from '../../composants/animes/list-card-anime/list-card-anime.component';
import { AnimesService } from '../../@core/services/animes/animes.service';
import { ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';
import { Title } from '@angular/platform-browser';
import { TitleComponent } from '../../ui/title/title.component';

@Component({
  selector: 'app-genre',
  standalone: true,
  imports: [CommonModule, ListCardAnimeComponent, TitleComponent],
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.scss']
})
export class GenreComponent implements OnInit {

  private animesService = inject(AnimesService);
  private route = inject(ActivatedRoute);
  private titleService = inject(Title);
  public _animes: any;

  ROUTER_PARAM_SLUG = this.route.snapshot.params['slug'];
  PAGE_TITLE = `Kahina - ${_.capitalize(this.ROUTER_PARAM_SLUG)}`;

  @Input()
  public set animes(value: any) {
    this._animes = value;
  }

  public get animes(): any {
    return this._animes;
  }

  ngOnInit(): void {
    this.titleService.setTitle(this.PAGE_TITLE);
    this.animesService.getAnimesByGenre(this.ROUTER_PARAM_SLUG).subscribe((data: any) => {
      this.animes = data;
      console.log(this.animes);
    });
  }

}
