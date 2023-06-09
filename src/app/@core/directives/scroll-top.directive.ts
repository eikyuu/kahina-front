import { Directive, HostListener } from '@angular/core';

@Directive({
    selector: '[appBaseDirective]',
    standalone: true,
})
export class ScrollTopDirective {

    public isShow = false;
    topPosToStartShowing = 1000;

    public checkScroll() {
        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (scrollPosition >= this.topPosToStartShowing) {
            this.scroolToTop();
        }
    }

    public scroolToTop() {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }

    @HostListener('window:scroll')
    gotoTop() {
        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (scrollPosition >= this.topPosToStartShowing) {
            this.isShow = true;
        } else {
            this.isShow = false;
        }
    }
}
