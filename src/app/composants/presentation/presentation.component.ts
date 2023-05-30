import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoringComponent } from '../scoring/scoring.component';
import { ButtonComponent } from '../../ui/button/button.component';
import { environment } from '../../../environments/environment';
import { UpvoteComponent } from '../../ui/upvote/upvote.component';

@Component({
  selector: 'app-presentation',
  standalone: true,
  imports: [CommonModule, ScoringComponent, ButtonComponent, UpvoteComponent],
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent {
  public imageUrl = '';
  private _presentation: any;

  @Input()
  set presentation(presentation: any | undefined) {
    this._presentation = presentation;
    this.formatImageURL(presentation?.image[0]?.name);
  }

  get presentation(): any | undefined {
    return this._presentation;
  }

  public formatImageURL(url: string): void {
    this.imageUrl = environment.useMock ? `assets/placeholder.png` : `${environment.baseUrl}uploads/images/poster_images/${url}`;
  }

  public addToList() {
    console.log('add to list');
  }

  public updateVote() {
     this.presentation.upVoteCount = this.presentation.upVoteCount + 1;
     console.log('update vote', this.presentation.upVoteCount);
  }

}
