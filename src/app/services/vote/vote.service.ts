import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tag } from 'src/app/shared/tag';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VoteService {
  BASE_URL = environment.apiUrl + 'votes';

  constructor(private http:HttpClient) { }

  public likePost(vote:{voteType:string, postId:number}):Observable<any>{
    return this.http.post(this.BASE_URL, vote);
  }
}
