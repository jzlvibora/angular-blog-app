import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tag } from 'src/app/shared/tag';

@Injectable({
  providedIn: 'root'
})
export class TagService {
  BASE_URL = 'http://localhost:8080/tags/';
  constructor(private http:HttpClient) { }
  

  public getAllTags():Observable<Tag[]>{
    return this.http.get<Tag[]>(
      this.BASE_URL, 
      // {headers:new HttpHeaders({'Authorization':this.authService.getToken()})}
      );
  }

 
}
