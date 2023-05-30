import { Injectable } from '@angular/core';
import { ARTICLES } from '../../mocks/article.mock';
import { Observable, delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  getArticles(): Observable<any> {
    return of(ARTICLES['hydra:member']).pipe(delay(100));
  }
}
