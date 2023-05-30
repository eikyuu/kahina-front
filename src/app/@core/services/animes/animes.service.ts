import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, retry, of, delay} from 'rxjs';
import { Anime } from '../../models/anime.model';
import { environment } from '../../../../environments/environment';
import { handleError } from '../../utils/utils';
import { ANIMES } from '../../mocks/anime.mock';

@Injectable({
  providedIn: 'root'
})
export class AnimesService {

  constructor(private http:HttpClient) {}

  getAnimes(): Observable<Anime[]> {
    if (environment.useMock) {
      console.info('<---- USE MOCK ! <AnimesService> ---->');
      return of(ANIMES).pipe(delay(100));
    }
    return this.http.get<any>(`${environment.baseUrlApi}animes`).pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(handleError),
      map(data => data['hydra:member'])
      );
  }

  getAnime(slug: string): Observable<Anime> {
    if (environment.useMock) {
      console.info('<---- USE MOCK ! <AnimesService> ---->');
      return of(ANIMES.filter(anime => anime.slug === slug)[0]).pipe(delay(100));
    }
    return this.http.get<Anime>(`${environment.baseUrlApi}animes/${slug}`).pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(handleError),
      );
  }

  /**
   * return character of an anime by slug
   * @param slug 
   */
  getCharacter(slug: string, type: string): Observable<any> {
    if (environment.useMock) {
      console.info('<---- USE MOCK ! <AnimesService> ---->');
      //find character by slug and return it
      if (type === 'figure') {
        return of(ANIMES[0].figure.filter(character => character.slug === slug)[0]).pipe(delay(100));
      } else {
        return of(ANIMES[0].staff.filter(character => character.slug === slug)[0]).pipe(delay(100));
      }
    }
    return this.http.get<any>(`${environment.baseUrlApi}animes/${slug}/characters`).pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(handleError),
      map(data => data['hydra:member'])
      );
  }

  getCharacters(slug: string, type: string): Observable<any> {
    if (environment.useMock) {
      console.info('<---- USE MOCK ! <AnimesService> ---->');
      //find character by slug of animz and return it
      if (type === 'figure') {
        return of(ANIMES.find(anime => anime.slug === slug)?.figure).pipe(delay(100));
      } else {
        return of(ANIMES.find(anime => anime.slug === slug)?.staff).pipe(delay(100));
      }
    }
    return this.http.get<any>(`${environment.baseUrlApi}animes/${slug}/characters`).pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(handleError),
      map(data => data['hydra:member'])
      );
  }


  /**
   * return animes of a character by slug
   * @param slug
   * @param type
   */
  getAnimesByCharacter(slug: string, type: string): Observable<any> {
    if (environment.useMock) {
      console.info('<---- USE MOCK ! <AnimesService> ---->');
      ///Find all animes where character is present and return it
      if (type === 'figure') {
        return of(ANIMES.filter(anime => anime.figure.filter(character => character.slug === slug).length > 0)).pipe(delay(100));
      } else {
        return of(ANIMES.filter(anime => anime.staff.filter(character => character.slug === slug).length > 0)).pipe(delay(100));
      }
    }
    return this.http.get<any>(`${environment.baseUrlApi}animes/${slug}/characters`).pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(handleError),
      map(data => data['hydra:member'])
      );
  }

  /**
   * return staff of an character by slug
   * @param slug
  */
  getStaffByCharacter(slug: string, type: string): Observable<any> {
    //recuperer les staffs d'un personnage par son slug
    if (environment.useMock) {
      console.info('<---- USE MOCK ! <AnimesService> ---->');
      if (type === 'figure') {
        const anime = ANIMES.find(anime => anime.figure.filter(character => character.slug === slug));
        return of(anime?.staff).pipe(delay(100));
      } else {
        const anime = ANIMES.find(anime => anime.staff.filter(character => character.slug === slug));
        return of(anime?.figure).pipe(delay(100));
      }
    }
    return this.http.get<any>(`${environment.baseUrlApi}animes/${slug}/staff`).pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(handleError),
      map(data => data['hydra:member'])
      );
  }

  /**
   * return staff of an character by slug
   * @param slug
  */
    getPosterByCharacter(slug: string, type: string): Observable<any> {
      //recuperer les staffs d'un personnage par son slug
      if (environment.useMock) {
        console.info('<---- USE MOCK ! <AnimesService> ---->');
        if (type === 'figure') {
          const anime = ANIMES.find(anime => anime.figure.filter(character => character.slug === slug));
          return of(anime?.posterImage).pipe(delay(100));
        } else {
          return of(null).pipe(delay(100));
        }
      }
      return this.http.get<any>(`${environment.baseUrlApi}animes/${slug}/staff`).pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(handleError),
        map(data => data['hydra:member'])
        );
    }

    /**
     * return animes of a genre by slug
     * @param slug
    */
    getAnimesByGenre(slug: string): Observable<any> {
      if (environment.useMock) {
        //filter animes by genre
        const anime = ANIMES.filter(anime => anime.genre.filter(genre => genre.slug === slug).length > 0 );
        return of(anime).pipe(delay(100));
      }
      return this.http.get<any>(`${environment.baseUrlApi}animes?genres.name=${slug}`).pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(handleError),
        map(data => data['hydra:member'])
        );
    }

    /**
     * return animes of a theme by slug
     * @param slug
    */
    getTheme(slug: string): Observable<any> {
      if (environment.useMock) {
        return of(ANIMES.filter(anime => anime.theme.filter(character => character.slug === slug).length > 0)).pipe(delay(100));
      }
      return this.http.get<any>(`${environment.baseUrlApi}themes/${slug}`).pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(handleError),
        map(data => data['hydra:member'])
        );
    }

    /**
     * return animes of a theme by slug
     * @param slug
    */
    getThemesByAnime(slug: string): Observable<any> {
      if (environment.useMock) {
        //filter themes by anime
        const anime = ANIMES.find(anime => anime.slug === slug);
        return of(anime?.theme).pipe(delay(100));
      }
      return this.http.get<any>(`${environment.baseUrlApi}animes/${slug}/themes`).pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(handleError),
        map(data => data['hydra:member'])
        );
    }

    /**
     * return reviews of a theme by slug
     * @param slug
     * @param type
    */
    getReviewsByAnime(slug: string): Observable<any> {
      if (environment.useMock) {
        const anime = ANIMES.find(anime => anime.slug === slug);
        return of(anime?.avis).pipe(delay(100));
      }
      return this.http.get<any>(`${environment.baseUrlApi}animes/${slug}/reviews`).pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(handleError),
        map(data => data['hydra:member'])
        );
    }

    /**
     * return relationships of a theme by slug
     * @param slug
    */
    getRelationshipsByAnime(slug: string): Observable<any> {
      if (environment.useMock) {
        const anime = ANIMES.find(anime => anime.slug === slug);
        return of(anime?.relationship).pipe(delay(100));
      }
      return this.http.get<any>(`${environment.baseUrlApi}animes/${slug}/relationships`).pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(handleError),
        map(data => data['hydra:member'])
        );
    }

    /**
     * return posterImage of a anime by slug
     * @param slug
    */
    getPostersByAnime(slug: string): Observable<any> {
      if (environment.useMock) {
        const anime = ANIMES.find(anime => anime.slug === slug);
        return of(anime?.posterImage).pipe(delay(100));
      }
      return this.http.get<any>(`${environment.baseUrlApi}animes/${slug}/poster`).pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(handleError),
        map(data => data['hydra:member'])
        );
    }
}
