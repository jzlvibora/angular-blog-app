import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';


@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private authService:AuthService) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(this.authService.isUserSignedin() && this.authService.getToken()){
      const request=req.clone({
        headers:new HttpHeaders({
          'Authorization':this.authService.getToken()
        })
      })

      console.log(request)
      return next.handle(request).pipe(
        catchError(err=>{
          if(err instanceof HttpErrorResponse && err.status===401){
            this.authService.signout();
          }
          return throwError(err);
        })
      )
    }
    return next.handle(req);
  }
}
