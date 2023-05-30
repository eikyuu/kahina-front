import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { COVER_IMAGES } from '../../../@core/mocks/coverImage.mock';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '../../../ui/button/button.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, NavbarComponent, RouterLink, ButtonComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  ngOnInit(): void {
    this.randomImage();
  }
  
  image: string = COVER_IMAGES[Math.floor(Math.random() * COVER_IMAGES.length)].image;

  //Set the image to a random one from the array
  public randomImage() {
   setInterval(() => {
    this.image = COVER_IMAGES[Math.floor(Math.random() * COVER_IMAGES.length)].image;
   }, 60000);
  }

  //calcule the height balise img to set the height of the header
  public calcHeight() {
    //get the height of img
    const img = document.getElementById('img');
    const height = img?.clientHeight;
    return height;
  }

}
