import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogPost } from 'src/app/shared/blog-post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  BASE_URL = 'https://6319a9566b4c78d91b403f35.mockapi.io/ngBlog/v1/blogs/';
 
  constructor(private http:HttpClient) { }

  public getBlogPosts():Observable<BlogPost[]>{
    return this.http.get<BlogPost[]>(this.BASE_URL);
  }

  public getBlogPost(id:number):Observable<BlogPost>{
    return this.http.get<BlogPost>(`${this.BASE_URL}${id}`);
  }

  public postBlogPost(blogPost:BlogPost){
    return this.http.post(this.BASE_URL, blogPost);
  }

  public postBlogPosts(blogPosts:BlogPost[]){
    return this.http.post(this.BASE_URL, blogPosts);
  }

  public updateBlogPost(blogPost:BlogPost, id:number){
    return this.http.put(`${this.BASE_URL}${id}`, blogPost);
  }

  public deleteBlogPost( id:number){
    return this.http.delete(`${this.BASE_URL}${id}`);
  }
}
