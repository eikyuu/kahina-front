import { Component, OnInit } from "@angular/core";
import {RouterModule } from "@angular/router";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { CommonModule } from '@angular/common';
import { ScrollTopDirective } from '../../@core/directives/scroll-top.directive';

@Component({
  standalone: true,
  selector: "app-layout",
  templateUrl: "./layout.component.html",
  imports: [CommonModule, RouterModule, HeaderComponent, FooterComponent],
})
export class LayoutComponent extends ScrollTopDirective implements OnInit  {
  
  ngOnInit(): void {
    this.checkScroll();
  }

}