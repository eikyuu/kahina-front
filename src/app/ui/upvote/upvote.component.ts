import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-upvote',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './upvote.component.html',
  styleUrls: ['./upvote.component.scss']
})
export class UpvoteComponent {
  @Input() upvote: any;
}
