import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
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
  totalElements:number=0;


  constructor(private blogPostService:PostService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    // this.getBlogPosts();
    this.getBlogList({ page: "0", size: "10" });
  }

  getBlogList(request:{page:string, size:string}) {
    this.blogPostService.getBlogList(request).subscribe(res=>{
      console.log(res)
      this.blogPosts=res.content;
      this.totalElements=res.totalElements
      this.isLoading=false
    },err=>{
      console.log(err.message)
    })
  }

  nextPage(event:PageEvent){
    const request:any={};
    request['page']=event.pageIndex.toString();
    request['size']=event.pageSize.toString();
    this.getBlogList(request);
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
