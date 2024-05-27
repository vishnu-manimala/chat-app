import { HttpEvent, HttpHandler, HttpInterceptor, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class authInterceptor implements HttpInterceptor {

  constructor() {}


  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
   const token = localStorage.getItem('accessToken')
    if(token){
      request = request.clone({
        setHeaders: {
          Authorization: `${token} `
        }
      });
    }
      return next.handle(request)
  }
}
