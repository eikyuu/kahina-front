import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from '../../../environments/environment';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-theme',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss']
})
export class ThemeComponent implements OnInit{
  @Input() theme: any;

  imageUrl = "";
  ngOnInit(): void {
    if (environment.useMock) {
      this.imageUrl = `assets/placeholder.webp`;
      return;
    }
  }
}
