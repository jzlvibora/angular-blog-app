import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BlogPost } from 'src/app/shared/blog-post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
 
  constructor(private http:HttpClient) { }

  public getBlogPosts(){
    return this.http.get<BlogPost[]>('https://angular-blog-app-59231-default-rtdb.firebaseio.com/blogPosts.json');
  }

  public postBlogPost(blogPost:BlogPost){
    return this.http.post('https://angular-blog-app-59231-default-rtdb.firebaseio.com/blogPosts.json', blogPost);
  }

  public postBlogPosts(blogPosts:BlogPost[]){
    return this.http.post('https://angular-blog-app-59231-default-rtdb.firebaseio.com/blogPosts.json', blogPosts);
  }
}
