import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PosterComponent } from '../../ui/poster/poster.component';
import { PageDirective } from '../../@core/directives/page.directive';
import * as _ from 'lodash';
import { takeUntil } from 'rxjs';
import { NgxPaginationModule } from 'ngx-pagination';
import { TitleComponent } from '../../ui/text/title/title.component';

@Component({
  selector: 'app-posters',
  standalone: true,
  imports: [CommonModule, PosterComponent, TitleComponent, NgxPaginationModule],
  templateUrl: './posters.component.html',
  styleUrls: ['./posters.component.scss']
})
export class PostersComponent extends PageDirective implements OnInit {

  public posters: any;
  ROUTER_PARAM_SLUG = this.route.snapshot.params['slug'];
  PAGE_TITLE = `Kahina - Posters - ${_.capitalize(this.ROUTER_PARAM_SLUG.replace('-', ' '))}`

  currentPage = 1;

  ngOnInit(): void {
    this.titleService.setTitle(this.PAGE_TITLE);
    this.animesService.getPostersByAnime(this.ROUTER_PARAM_SLUG)
    .pipe(takeUntil(this.ngUnsubscribe$))
    .subscribe((data) => {
      this.posters = data;
    }
    );
  }
  
}
