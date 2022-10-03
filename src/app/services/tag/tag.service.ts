import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tag } from 'src/app/shared/tag';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TagService {
  BASE_URL = environment.apiUrl + 'tags';
  constructor(private http:HttpClient) { }
  

  public getAllTags():Observable<Tag[]>{
    return this.http.get<Tag[]>(
      this.BASE_URL, 
      // {headers:new HttpHeaders({'Authorization':this.authService.getToken()})}
      );
  }

 
}
