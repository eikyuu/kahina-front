import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from '../../ui/title/title.component';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '../../ui/button/button.component';
import { trackByFn } from '../../@core/utils/utils';
import { ScrollAnchorDirective } from '../../@core/directives/scroll-anchor.directive';
import { ScrollSectionDirective } from '../../@core/directives/scroll-section.directive';
import { ScrollManagerDirective } from '../../@core/directives/scroll-manager.directive';

@Component({
  selector: 'app-information',
  standalone: true,
  imports: [CommonModule, TitleComponent, RouterLink, ButtonComponent, ScrollAnchorDirective,
    ScrollSectionDirective,
    ScrollManagerDirective,],
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent {
  private _anime: any | undefined;

  @Input()
  public set anime(value: any | undefined) {
    this._anime = value;
  }

  public get anime(): any | undefined {
    return this._anime;
  }


  public trackByFn = trackByFn;

}
