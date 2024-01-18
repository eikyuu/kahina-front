import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) {}

  login(username: string, password: string) {

    if (environment.useMock) {
      console.log('useMock login');
      return of({}).pipe(delay(1000));
    }

    return this.http.post('/api/login', { username, password });
  }

  register(username: string, email: string, password: string) {
    if (environment.useMock) {
      return of({}).pipe(delay(1000));
    }

    return this.http.post('/api/register', { username, email, password });
  }
}
