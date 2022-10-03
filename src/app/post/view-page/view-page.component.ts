import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CommentService } from 'src/app/services/comment/comment.service';
import { PostService } from 'src/app/services/post/post.service';
import { BlogPost } from 'src/app/shared/blog-post';
import { Comment } from 'src/app/shared/comment';

@Component({
  selector: 'app-view-page',
  templateUrl: './view-page.component.html',
  styleUrls: ['./view-page.component.scss']
})
export class ViewPageComponent implements OnInit {

  id!:number;
  blogPost!:BlogPost;
  isLoading=true;
  comments!:Comment[];

  constructor(private blogPostService:PostService, private route:ActivatedRoute, private commentService:CommentService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params)=>{
      this.id=params['id'];
    })
    this.getBlogPost();
    this.getComments();



  }

  getBlogPost(){
    this.blogPostService.getBlogPost(this.id).subscribe((res)=>{
      this.blogPost=res
      this.isLoading=false;
    })

  }

  getComments(){
    this.commentService.getAllCommentsForPost(this.id).subscribe((res)=>{
      this.comments=res;
      console.log(res);
     
    })
  }
}
