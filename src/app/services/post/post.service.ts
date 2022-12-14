import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogPost } from 'src/app/shared/blog-post';
import { PostListResponse } from 'src/app/shared/post-list-response';
import { PostRequest } from 'src/app/shared/post-request';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  // BASE_URL = 'https://6319a9566b4c78d91b403f35.mockapi.io/ngBlog/v1/blogs/';
  BASE_URL = environment.apiUrl + 'posts/';
 
  constructor(private http:HttpClient, private authService:AuthService) { }

  public getBlogPosts():Observable<BlogPost[]>{
    return this.http.get<BlogPost[]>(
      this.BASE_URL, 
      // {headers:new HttpHeaders({'Authorization':this.authService.getToken()})}
      );
  }

  public getBlogList(request:{page:string,size:string}):Observable<PostListResponse>{
    return this.http.get<PostListResponse>(this.BASE_URL + `list?page=${request.page}&size=${request.size}`);
  }

  public getCurrentUserBlogPosts():Observable<BlogPost[]>{
    return this.http.get<BlogPost[]>(this.BASE_URL + 'by-user')
  }

  public getBlogPost(id:number):Observable<BlogPost>{
    return this.http.get<BlogPost>(`${this.BASE_URL}${id}`);
  }

  public postBlogPost(blogPost:PostRequest){
    return this.http.post(this.BASE_URL, blogPost);
  }

  public postBlogPosts(blogPosts:BlogPost[]){
    return this.http.post(this.BASE_URL, blogPosts);
  }

  public updateBlogPost(blogPost:PostRequest, id:number){
    return this.http.put(`${this.BASE_URL}${id}`, blogPost);
  }

  public deleteBlogPost( id:number){
    return this.http.delete(`${this.BASE_URL}${id}`);
  }
}
