import { AfterViewInit, Directive, HostListener } from '@angular/core';

@Directive({
    selector: '[appSwiperDirective]',
    standalone: true,
})
export class SwiperDirective implements AfterViewInit {

  public WIDTH_MOBILE = 768;
  public screenWidth = 0;
  public isMobile = false;

 @HostListener('window:resize', ['$event'])
  onResize(): void {
    this.screenWidth = window.innerWidth;
    this.isMobile = this.screenWidth <= this.WIDTH_MOBILE;
  }

  ngAfterViewInit(): void {
    this.screenWidth = window.innerWidth;
    this.isMobile = this.screenWidth <= this.WIDTH_MOBILE;
    console.log(this.isMobile);
  }
}
