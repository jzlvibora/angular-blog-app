import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Comment } from 'src/app/shared/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  BASE_URL = environment.apiUrl+'comments/';

  constructor(private http:HttpClient) { }

  public getAllCommentsForPost(postId:number):Observable<Comment[]>{
    return this.http.get<Comment[]>(`${this.BASE_URL}by-post?postId=${postId}`);
  }

  public createComment(comment:{username:string,postIdentity:number, text:string }):Observable<any>{
    return this.http.post(this.BASE_URL, comment);

  }

}
