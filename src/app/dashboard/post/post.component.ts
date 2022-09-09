import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post/post.service';
import { BlogPost } from 'src/app/shared/blog-post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  blogPosts!:BlogPost[];
  isLoading=true;

  constructor(private blogPostService:PostService) { }

  ngOnInit(): void {
    this.getBlogPosts();
  }

  getBlogPosts(){
    this.blogPostService.getBlogPosts().subscribe((res)=>{
      this.blogPosts=res
      this.isLoading=false;
    })

  }

}
