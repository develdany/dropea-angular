import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if (user) {
      const clonedReq = req.clone({
        headers: req.headers.set('Authorization', `Bearer fake-jwt-token`)
      });
      return next.handle(clonedReq);
    }
    return next.handle(req);
  }
}
