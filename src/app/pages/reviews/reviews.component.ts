import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { takeUntil } from 'rxjs';
import { PageDirective } from '../../@core/directives/page.directive';
import { ReviewComponent } from '../../ui/review/review.component';
import { TitleComponent } from '../../ui/title/title.component';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule, ReviewComponent, TitleComponent, NgxPaginationModule],
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent extends PageDirective implements OnInit {

  public reviews: any;

  currentPage = 1;

  ROUTER_PARAM_SLUG = this.route.snapshot.params['slug'];
  PAGE_TITLE = `Kahina - Avis - ${_.capitalize(this.ROUTER_PARAM_SLUG.replace('-', ' '))}`

  ngOnInit(): void {
    this.titleService.setTitle(this.PAGE_TITLE);
    this.animesService.getReviewsByAnime(this.ROUTER_PARAM_SLUG)
    .pipe(takeUntil(this.ngUnsubscribe$))
    .subscribe((data: any) => {
      this.reviews = data;
    }
    );
  }

}
