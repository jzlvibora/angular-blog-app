import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogPost } from 'src/app/shared/blog-post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
 
  constructor(private http:HttpClient) { }

  public getBlogPosts():Observable<BlogPost[]>{
    return this.http.get<BlogPost[]>('https://6319a9566b4c78d91b403f35.mockapi.io/ngBlog/v1/blogs');
  }

  public getBlogPost(id:number):Observable<BlogPost>{
    return this.http.get<BlogPost>(`https://6319a9566b4c78d91b403f35.mockapi.io/ngBlog/v1/blogs/${id}`);
  }

  public postBlogPost(blogPost:BlogPost){
    return this.http.post('https://6319a9566b4c78d91b403f35.mockapi.io/ngBlog/v1/blogs', blogPost);
  }

  public postBlogPosts(blogPosts:BlogPost[]){
    return this.http.post('https://6319a9566b4c78d91b403f35.mockapi.io/ngBlog/v1/blogs', blogPosts);
  }

  public updateBlogPost(blogPost:BlogPost, id:number){
    return this.http.put(`https://6319a9566b4c78d91b403f35.mockapi.io/ngBlog/v1/blogs/${id}`, blogPost);
  }

  public deleteBlogPost( id:number){
    return this.http.delete(`https://6319a9566b4c78d91b403f35.mockapi.io/ngBlog/v1/blogs/${id}`);
  }
}
