import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { SigninRequest } from 'src/app/shared/signin-request';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  getToken(): any {
    let token = sessionStorage.getItem('token') as string;
    return token;
  }

  BASE_URL = 'http://localhost:8080/';
  constructor(private http: HttpClient) {}

  signin(request: SigninRequest): Observable<any> {
    return this.http.post<any>(this.BASE_URL + 'signin', request, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    }).pipe(map((res:any)=>{
      sessionStorage.setItem('user', request.username);
      sessionStorage.setItem('token', 'HTTP_TOKEN' + res.token)
    }));
  }

  isUserSignedin() {
    return sessionStorage.getItem('token')!==null;
  }

  signout(){
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('token');
  }

}
