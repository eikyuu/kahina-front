import { Injectable } from '@angular/core';
import { ARTICLES } from '../../mocks/article.mock';
import { Observable, catchError, delay, of, retry } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { handleError } from '../../utils/utils';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(private http:HttpClient) {}

  getArticles(): Observable<any> {
    return of(ARTICLES['hydra:member']).pipe(delay(100));
  }

  getArticle(slug: string): Observable<any> {
    if (environment.useMock) {
      console.info('<---- USE MOCK ! <AnimesService> ---->');
      return of(ARTICLES['hydra:member'].filter(anime => anime.slug === slug)[0]).pipe(delay(100));
    }
    return this.http.get<any>(`${environment.baseUrlApi}animes/${slug}`).pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(handleError),
      );
  }
}
