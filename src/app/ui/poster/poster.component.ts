import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-poster',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.scss']
})
export class PosterComponent implements OnInit {
  @Input() poster: any;
  imageUrl = "";
  ngOnInit(): void {
    this.imageUrl = environment.useMock ? `assets/placeholder.png` : `${environment.baseUrl}uploads/images/poster_images/${this.poster?.posterImage[0]?.name}`;
  }
}
