import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from 'src/app/services/post/post.service';
import { BlogPost } from 'src/app/shared/blog-post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  blogPosts!:BlogPost[];
  isLoading=true;

  constructor(private blogPostService:PostService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.getBlogPosts();
  }

  getBlogPosts(){
    this.blogPostService.getBlogPosts().subscribe((res)=>{
      this.blogPosts=res
      this.isLoading=false;
    })

  }

  onViewPost(id:number){
    console.log(id)
    this.router.navigate([`page/${id}`], {relativeTo:this.route})
  }

}
