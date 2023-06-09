import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from '../../../environments/environment';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-relationship',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './relationship.component.html',
  styleUrls: ['./relationship.component.scss']
})
export class RelationshipComponent implements OnInit {
  @Input() relationship: any;
  imageUrl = "";
  ngOnInit(): void {
    this.imageUrl = environment.useMock ? `assets/placeholder.webp` : `${environment.baseUrl}uploads/images/poster_images/${this.relationship?.posterImage[0]?.name}`;
  }

}
