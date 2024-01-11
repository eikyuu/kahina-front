import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeComponent } from '../../ui/theme/theme.component';
import { PageDirective } from '../../@core/directives/page.directive';
import * as _ from 'lodash';
import { NgxPaginationModule } from 'ngx-pagination';
import { TitleComponent } from '../../ui/text/title/title.component';

@Component({
  selector: 'app-themes',
  standalone: true,
  imports: [CommonModule, ThemeComponent, TitleComponent, NgxPaginationModule],
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.scss']
})
export class ThemesComponent extends PageDirective implements OnInit {

  public themes: any;
  ROUTER_PARAM_SLUG = this.route.snapshot.params['slug'];
  PAGE_TITLE = `Kahina - Themes - ${_.capitalize(this.ROUTER_PARAM_SLUG.replace('-', ' '))}`

  currentPage = 1;

  ngOnInit(): void {
    this.titleService.setTitle(this.PAGE_TITLE);
    this.animesService.getThemesByAnime(this.ROUTER_PARAM_SLUG).subscribe((data) => {
      this.themes = data;
    }
    );
  }

}
