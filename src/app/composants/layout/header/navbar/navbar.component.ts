import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../../../ui/button/button.component';
import { Subscription, fromEvent } from 'rxjs';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, ButtonComponent, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {

  scroll$: Subscription = new Subscription();
  startPosition = 0;

  ngOnInit() {
    const element = document.querySelector('.navbar');
    this.startPosition = window.scrollY;
    this.scroll$ = fromEvent(window, 'scroll').subscribe(e => {
      const currentPosition = window.scrollY;
      if (window.innerWidth < 768) {
        this.startPosition > currentPosition ? element?.classList.add('hide') : element?.classList.remove('hide');
      }
      this.startPosition = currentPosition
    });
  }

  ngOnDestroy() {
    this.scroll$.unsubscribe()
  }

}
