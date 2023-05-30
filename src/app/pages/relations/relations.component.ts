import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCardAnimeComponent } from '../../composants/animes/list-card-anime/list-card-anime.component';
import { RelationshipComponent } from '../../ui/relationship/relationship.component';
import { TitleComponent } from '../../ui/title/title.component';
import { PageDirective } from '../../@core/directives/page.directive';
import * as _ from 'lodash';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-relations',
  standalone: true,
  imports: [CommonModule, ListCardAnimeComponent, RelationshipComponent, TitleComponent],
  templateUrl: './relations.component.html',
  styleUrls: ['./relations.component.scss']
})
export class RelationsComponent extends PageDirective implements OnInit {

  public relations: any;
  ROUTER_PARAM_SLUG = this.route.snapshot.params['slug'];
  PAGE_TITLE = `Kahina - Relations - ${_.capitalize(this.ROUTER_PARAM_SLUG.replace('-', ' '))}`

  ngOnInit(): void {
    this.titleService.setTitle(this.PAGE_TITLE);
    this.animesService.getRelationshipsByAnime(this.ROUTER_PARAM_SLUG)
    .pipe(takeUntil(this.ngUnsubscribe$))
    .subscribe((data: any) => {
      this.relations = data;
      console.log(this.relations);
    }
    );
  }
}
