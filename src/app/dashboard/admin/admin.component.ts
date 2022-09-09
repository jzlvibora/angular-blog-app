import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from 'src/app/services/post/post.service';
import { BlogPost } from 'src/app/shared/blog-post';import Swal from 'sweetalert2';
let BLOGPOST_DATA: BlogPost[] = 
  [
    // { 
    //   id:1,
    //   title:'Curious Case of benjamin button',
    //   author:'Test Admin',
    //   description:'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem',
    //   imageUrl:'https://images.unsplash.com/photo-1515622472995-1a06094d2224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    //   dateCreated:new Date("October 13, 2013 11:13:00")
    // },
    // { 
    //   id:2,
    //   title:'Curious Case of benjamin button',
    //   author:'Test Admin',
    //   description:'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem',
    //   imageUrl:'https://images.unsplash.com/photo-1515622472995-1a06094d2224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    //   dateCreated:new Date("October 13, 2013 11:13:00")
    // },
    // { 
    //   id:3,
    //   title:'Curious Case of benjamin button',
    //   author:'Test Admin',
    //   description:'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem',
    //   imageUrl:'https://images.unsplash.com/photo-1515622472995-1a06094d2224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    //   dateCreated:new Date("October 13, 2013 11:13:00")
    // },
    // { 
    //   id:4,
    //   title:'Curious Case of benjamin button',
    //   author:'Test Admin',
    //   description:'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem',
    //   imageUrl:'https://images.unsplash.com/photo-1515622472995-1a06094d2224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    //   dateCreated:new Date("4500")
    // },
    // { 
    //   id:5,
    //   title:'Curious Case of benjamin button',
    //   author:'Test Admin',
    //   description:'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem',
    //   imageUrl:'https://images.unsplash.com/photo-1515622472995-1a06094d2224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    //   dateCreated:new Date("October 13, 2013 11:13:00")
    // },
    // { 
    //   id:6,
    //   title:'Curious Case of benjamin button',
    //   author:'Test Admin',
    //   description:'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem',
    //   imageUrl:'https://images.unsplash.com/photo-1515622472995-1a06094d2224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    //   dateCreated:new Date("October 13, 2013 11:13:00")
    // },
    // { 
    //   id:7,
    //   title:'Curious Case of benjamin button',
    //   author:'Test Admin',
    //   description:'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem',
    //   imageUrl:'https://images.unsplash.com/photo-1515622472995-1a06094d2224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    //   dateCreated:new Date("October 13, 2013 11:13:00")
    // },
    // { 
    //   id:8,
    //   title:'Curious Case of benjamin button',
    //   author:'Test Admin',
    //   description:'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem',
    //   imageUrl:'https://images.unsplash.com/photo-1515622472995-1a06094d2224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    //   dateCreated:new Date("4500")
    // },
    // { 
    //   id:9,
    //   title:'Curious Case of benjamin button',
    //   author:'Test Admin',
    //   description:'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem',
    //   imageUrl:'https://images.unsplash.com/photo-1515622472995-1a06094d2224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    //   dateCreated:new Date("October 13, 2013 11:13:00")
    // },
    // { 
    //   id:10,
    //   title:'Curious Case of benjamin button',
    //   author:'Test Admin',
    //   description:'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem',
    //   imageUrl:'https://images.unsplash.com/photo-1515622472995-1a06094d2224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    //   dateCreated:new Date("4500")
    // }
  ];

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})



export class AdminComponent implements OnInit {
  blogPosts:BlogPost[]=[];
  displayedColumns: string[] = [ 'id', 'title', 'author', 'body', 'image', 'createdAt', 'action'] ;
  isLoading:boolean=true;

  constructor(private router:Router, private route:ActivatedRoute, private blogPostService:PostService) { }

  ngOnInit(): void {
  this.getBlogPosts();
  }

  getBlogPosts(){
    this.blogPostService.getBlogPosts().subscribe((res)=>{
      this.blogPosts=res;
      console.log(this.blogPosts)
      this.isLoading=false
    })

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
  

  onNewBlogPost(){
    this.router.navigate(['new'], {relativeTo:this.route})
  }

  onEditBlogPost(id:number){
    console.log(id)
    this.router.navigate([`edit/${id}`], {relativeTo:this.route})
  }



  

}
