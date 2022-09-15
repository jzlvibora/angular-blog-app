import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PostService } from 'src/app/services/post/post.service';
import { BlogPost } from 'src/app/shared/blog-post';

@Component({
  selector: 'app-view-page',
  templateUrl: './view-page.component.html',
  styleUrls: ['./view-page.component.scss']
})
export class ViewPageComponent implements OnInit {

  id!:number;
  blogPost!:BlogPost;
  isLoading=true;

  constructor(private blogPostService:PostService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params)=>{
      this.id=params['id'];
    })
    this.getBlogPost();

  }

  getBlogPost(){
    this.blogPostService.getBlogPost(this.id).subscribe((res)=>{
      this.blogPost=res
      this.isLoading=false;
    })

  }
}
