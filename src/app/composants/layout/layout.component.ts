import { Component } from "@angular/core";
import {RouterModule } from "@angular/router";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: "app-layout",
  templateUrl: "./layout.component.html",
  imports: [CommonModule, RouterModule, HeaderComponent, FooterComponent],
})
export class LayoutComponent  {
}