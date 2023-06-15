import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResizeService {

  private readonly WIDTH_MOBILE = 767;
  private readonly isMobileSubject = new BehaviorSubject<boolean>(false);
  public isMobile$ = this.isMobileSubject.asObservable();

  private onResize(): void {
    window.addEventListener('resize', () => {
      this.updateMobileStatus();
    });
  }

  public init(): void {
    this.onResize();
    this.updateMobileStatus();
  }

  private updateMobileStatus(): void {
    const screenWidth = window.innerWidth;
    const isMobile = screenWidth <= this.WIDTH_MOBILE;
    this.isMobileSubject.next(isMobile);
  }

}
