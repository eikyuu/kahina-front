import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { environment } from '../../../environments/environment';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card-anime',
  standalone: true,
  imports: [CommonModule, ButtonComponent, RouterLink],
  templateUrl: './card-anime.component.html',
  styleUrls: ['./card-anime.component.scss']
})
export class CardAnimeComponent implements OnInit {
  @Input() anime: any;

  public imageUrl = ``;

  ngOnInit(): void {
    this.imageUrl = environment.useMock ? `assets/placeholder.png` : `${environment.baseUrl}uploads/images/poster_images/${this.anime?.posterImage[0]?.name}`;
  }
}
