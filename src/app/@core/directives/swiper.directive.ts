import { Directive, HostListener, OnInit } from '@angular/core';

@Directive({
    selector: '[appSwiperDirective]',
    standalone: true,
})
export class SwiperDirective implements OnInit {

  public WIDTH_MOBILE = 768;
  public screenWidth = 0;
  public isMobile = false;

 @HostListener('window:resize', ['$event'])
  onResize(): void {
    this.screenWidth = window.innerWidth;
    this.isMobile = this.screenWidth <= this.WIDTH_MOBILE;
  }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
    this.isMobile = this.screenWidth <= this.WIDTH_MOBILE;
  }
}
