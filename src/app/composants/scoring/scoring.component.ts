import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../ui/button/button.component';

@Component({
  selector: 'app-scoring',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './scoring.component.html',
  styleUrls: ['./scoring.component.scss']
})
export class ScoringComponent {

  private _score: any | undefined;
  
  @Input()
  public set score(value: any | undefined) {
    this._score = value;
  }

  public get score(): any | undefined {
    return this._score;
  }
}
