import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from '../../../environments/environment';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card-character',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './card-character.component.html',
  styleUrls: ['./card-character.component.scss']
})
export class CardCharacterComponent{
  public name = "";
  public imageUrl = "";
  public folder = "";
  public _character: any;

  @Input()
  set character(character: any) {
    this._character = character;
    this.name = this.character.firstname != null ? this.character.firstname + " " + this.character.lastname : this.character.name.romaji;
    this.folder =  this.character['@type'].toLowerCase() + "_images";
    this.formatImageURL(character?.image[0]?.name);
  }

  get character(): any {
    return this._character;
  }

  public formatImageURL(url: string): void {
    this.imageUrl = environment.useMock ? `assets/placeholder.webp` : `${environment.baseUrl}uploads/images/poster_images/${url}`;
  }

}
