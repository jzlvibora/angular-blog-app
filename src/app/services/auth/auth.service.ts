import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { SigninRequest } from 'src/app/shared/signin-request';
import { SignupRequest } from 'src/app/shared/signup-request';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  BASE_URL = 'http://localhost:8080/';
  constructor(private http: HttpClient, private router:Router) {}

  signup(request: SignupRequest): Observable<any> {
    return this.http.post<SignupRequest>(this.BASE_URL + 'signup', request, {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
      }),
      responseType:'text' as 'json'
    });
  }

  getToken(): any {
    let token = sessionStorage.getItem('token') as string;
    return token;
  }

  signin(request: SigninRequest): Observable<any> {
    return this.http
      .post<SigninRequest>(this.BASE_URL + 'signin', request, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      })
      .pipe(
        map((res: any) => {
          sessionStorage.setItem('user', request.username);
          sessionStorage.setItem('token', 'HTTP_TOKEN ' + res.token);
        })
      );
  }

  isUserSignedin() {
    return sessionStorage.getItem('token') !== null;
  }

  signout() {
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('token');
    this.router.navigateByUrl('auth/login')
  }
}
