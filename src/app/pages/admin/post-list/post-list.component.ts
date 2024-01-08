import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router, ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/services/post/post.service';
import { TagService } from 'src/app/services/tag/tag.service';
import { BlogPost } from 'src/app/shared/blog-post';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  
  blogPosts:BlogPost[]=[];
  displayedColumns: string[] = [ 'id', 'title', 'tag', 'author', 'body', 'image', 'createdAt', 'action'] ;
  isLoading:boolean=true;
  totalPosts:number=0;

  constructor(private router:Router, private route:ActivatedRoute, private blogPostService:PostService, private tagService:TagService) { }

  ngOnInit(): void {
  this.getBlogPosts();
  // console.log(this.getTags())
  // this.getBlogList({page:"0", size:"5"});
  }
  
  // getBlogList(request) {
  //   this.blogPostService.getBlogList(request).subscribe(res=>{
  //     this.blogPosts=res['content'];
  //     this.totalPosts=data['totalPosts']
  //   },err=>{
  //     console.log(err.message)
  //   })
  // }

  // nextPage(event:PageEvent){
  //   const request={};
  //   request['page']=event.pageIndex.toString();
  //   request['size']=event.pageSize.toString();
  //   this.getBlogList(request);
  // }

  getBlogPosts(){
    this.blogPostService.getCurrentUserBlogPosts().subscribe((res)=>{
      console.log(res)
      this.blogPosts=res;
      // console.log(this.blogPosts)
      this.isLoading=false
    })
  }

  onNewBlogPost(){
    this.router.navigate(['new'], {relativeTo:this.route})
  }

  onEditBlogPost(id:number){
    console.log(id)
    this.router.navigate([`edit/${id}`], {relativeTo:this.route})
  }

  onDeleteBlogPost(id:number){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.blogPostService.deleteBlogPost(id).subscribe((res)=>{
          console.log(res)
          this.getBlogPosts();
          Swal.fire(
            'Deleted!',
            'Your post has been deleted.',
            'success'
          )
        })
      }
    }) 
  }

  getTags(){
    this.tagService.getAllTags().subscribe((res)=>{
      console.log(res)
    })
  }
}
