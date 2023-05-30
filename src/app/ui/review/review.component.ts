import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trackByFn } from '../../@core/utils/utils';

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent {
  @Input() review: any;
  public trackByFn = trackByFn;

  /**
   * calcule le nombre d'étoile à afficher en fonction de la note et leur moitié si besoin (ex: 3.5 étoiles)
   * @returns string[] : tableau contenant les étoiles pleines, à moitié et vides
   */
  getStarRating(): any {

    const fullStar = Math.floor(this.review.note);
    const halfStar = Math.ceil(this.review.note - fullStar);
    const emptyStar = 5 - fullStar - halfStar;

    const stars: {[key:string]:any[] } = {
      fullStar : [],
      halfStar : [],
      emptyStar : []
    }
    
    this.pushStars(fullStar, stars['fullStar']);
    this.pushStars(halfStar, stars['halfStar']);
    this.pushStars(emptyStar, stars['emptyStar']);

    return stars;
  }

  private pushStars(note: number, stars: any ) {
    for (let i = 0; i < note; i++) {
      stars.push(i);
    }
  }
}
