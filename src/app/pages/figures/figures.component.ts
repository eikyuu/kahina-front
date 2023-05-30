import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimesService } from '../../@core/services/animes/animes.service';
import { ActivatedRoute } from '@angular/router';
import { trackByFn } from '../../@core/utils/utils';
import { CardCharacterComponent } from '../../ui/card-character/card-character.component';
import { TitleComponent } from '../../ui/title/title.component';
import { PageDirective } from '../../@core/directives/page.directive';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-figures',
  standalone: true,
  imports: [CommonModule, CardCharacterComponent, TitleComponent],
  templateUrl: './figures.component.html',
  styleUrls: ['./figures.component.scss']
})
export class FiguresComponent extends PageDirective implements OnInit {
  public figures: any;
  ROUTER_PARAM_SLUG = this.route.snapshot.params['slug'];
  ROUTER_PARAM_TYPE: 'figure' | 'staff ' = this.route.snapshot.params['type'];

  ngOnInit(): void {
    this.animesService.getCharacters(this.ROUTER_PARAM_SLUG, this.ROUTER_PARAM_TYPE)
    .pipe(takeUntil(this.ngUnsubscribe$))
    .subscribe((data) => {
      this.figures = data;
      console.log(this.figures);
    }
    );
  }

}
