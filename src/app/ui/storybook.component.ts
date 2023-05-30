import { Component } from '@angular/core';
import { ButtonComponent } from './button/button.component';
import { CardAnimeComponent } from './card-anime/card-anime.component';
import { CardArticleComponent } from './card-article/card-article.component';
import { CardCharacterComponent } from './card-character/card-character.component';
import { TitleComponent } from './title/title.component';
import { CommonModule } from '@angular/common';
import { ArticlesService } from '../@core/services/articles/articles.service';
import { AnimesService } from '../@core/services/animes/animes.service';
import { Anime } from '../@core/models/anime.model';
import { ScoringComponent } from '../composants/scoring/scoring.component';
import { ReviewComponent } from './review/review.component';
import { RelationshipComponent } from './relationship/relationship.component';
import { ThemeComponent } from './theme/theme.component';
import { PosterComponent } from './poster/poster.component';

@Component({
  selector: 'app-storybook',
  standalone: true,
  templateUrl: './storybook.component.html',
  styleUrls: ['./storybook.component.scss'],
  imports: [
    CommonModule,
    CardAnimeComponent,
    CardArticleComponent,
    ButtonComponent,
    CardArticleComponent,
    CardCharacterComponent,
    TitleComponent,
    ScoringComponent,
    ButtonComponent,
    ReviewComponent,
    RelationshipComponent,
    ThemeComponent,
    PosterComponent
  ],
})
export class StorybookComponent {
  public one = true;
  public articles: any;
  public animes: any;

  constructor(
    private animesService: AnimesService,
    private articlesService: ArticlesService
  ) {
  }

  ngOnInit(): void {
    this.animesService.getAnimes().subscribe((data: Anime[]) => {
      this.animes = data;
    });

    this.articlesService.getArticles().subscribe((data) => {
      this.articles = data;
    });
  }
}
