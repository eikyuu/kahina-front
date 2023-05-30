import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpUserEvent,
    HttpEvent
  } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class BearerInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    const headers = {
        Authorization: `Bearer ${environment.apiKey}`,
        'Content-Type': 'application/json'
      };
     
      request = request.clone({
        setHeaders: headers
      });
     
      return next.handle(request);
  }
}