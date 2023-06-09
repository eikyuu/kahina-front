import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as _ from 'lodash';
import { TitleComponent } from '../../ui/title/title.component';
import { RelationshipComponent } from '../../ui/relationship/relationship.component';
import { PageDirective } from '../../@core/directives/page.directive';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-genre',
  standalone: true,
  imports: [CommonModule, RelationshipComponent, TitleComponent, NgxPaginationModule],
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.scss']
})
export class GenreComponent extends PageDirective implements OnInit {

  public _animes: any;

  ROUTER_PARAM_SLUG = this.route.snapshot.params['slug'];
  PAGE_TITLE = `Kahina - ${_.capitalize(this.ROUTER_PARAM_SLUG)}`;

  currentPage = 1;

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
    });
  }
}
