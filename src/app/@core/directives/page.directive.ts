import { Directive, OnDestroy, inject } from '@angular/core';
import { Subject } from 'rxjs';
import { AnimesService } from '../services/animes/animes.service';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { trackByFn } from '../utils/utils';

@Directive({
  selector: '[appPage]',
  standalone: true,
})
export class PageDirective implements OnDestroy {
    public readonly ngUnsubscribe$ = new Subject<void>();
    public animesService = inject(AnimesService);
    public route = inject(ActivatedRoute);
    public titleService = inject(Title);
    public trackByFn = trackByFn;

    ngOnDestroy(): void {
        this.ngUnsubscribe$.next();
        this.ngUnsubscribe$.complete();
      }
}
