import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardCharacterComponent } from '../../ui/card-character/card-character.component';
import { PageDirective } from '../../@core/directives/page.directive';
import { takeUntil } from 'rxjs';
import { NgxPaginationModule } from 'ngx-pagination';
import { TitleComponent } from '../../ui/text/title/title.component';

@Component({
  selector: 'app-figures',
  standalone: true,
  imports: [CommonModule, CardCharacterComponent, TitleComponent, NgxPaginationModule],
  templateUrl: './figures.component.html',
  styleUrls: ['./figures.component.scss']
})
export class FiguresComponent extends PageDirective implements OnInit {
  public figures: any;
  ROUTER_PARAM_SLUG = this.route.snapshot.params['slug'];
  ROUTER_PARAM_TYPE: 'figure' | 'staff ' = this.route.snapshot.params['type'];

  currentPage = 1;

  ngOnInit(): void {
    this.animesService.getCharacters(this.ROUTER_PARAM_SLUG, this.ROUTER_PARAM_TYPE)
    .pipe(takeUntil(this.ngUnsubscribe$))
    .subscribe((data) => {
      this.figures = data;
    }
    );
  }

}
