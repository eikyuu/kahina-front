import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './composants/layout/layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, LayoutComponent],
  template: `
  <app-layout>
    <main>
        <router-outlet/>
    </main>
  </app-layout>
  `,
})
export class AppComponent {}
