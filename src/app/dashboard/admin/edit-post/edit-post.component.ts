import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PostService } from 'src/app/services/post/post.service';
import { BlogPost } from 'src/app/shared/blog-post';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit {
  id!:number;
  blogPost!:BlogPost;
  form!:FormGroup;
  error:string='';
  isSubmitSuccessful:boolean=false;

  constructor(private router:Router,private blogPostService:PostService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params)=>{
      this.id=params['id'];
    })

    this.getBlogPost()

    this.form=this.buildForm();
  }

  private buildForm():FormGroup{
    return new FormGroup({
      title: new FormControl(this.blogPost?.title,[Validators.required]),
      author: new FormControl(this.blogPost?.author,[Validators.required]),
      image:new FormControl(this.blogPost?.image,[Validators.required]),
      description: new FormControl(this.blogPost?.body, [Validators.required]),
      dateCreated:new FormControl(Date.now().toString, [Validators.required])
    })
  }

  get f(){
    return this.form.controls;
  }

  // onSubmit(){
  //   if(this.form.invalid){
  //     this.infoNotification();
  //     return
  //   }
  //   this.blogPostService.postBlogPost(this.form.value).subscribe((res)=>{
  //     console.log(res);
  //     this.successNotification();
  //     this.form.reset();
  //   },(err:HttpErrorResponse)=>{
  //     this.error=err.message;
  //     this.errorNotification(err.message)
  //   })
  // }

  successNotification() {
    Swal.fire({
      title: 'Successful',
      text: 'Saved succesfully',
      icon: 'success',
    })
  }

  errorNotification(error:string) {
    Swal.fire({
      title: 'Error',
      text: `Failed. ${this.error}`  ,
      icon: 'error',
    })
  }

  infoNotification(){
    Swal.fire({
      title: 'Invalid',
      text: `Please fill out all the required fields`  ,
      icon: 'info',
    })
  }

  getBlogPost(){
    this.blogPostService.getBlogPost(this.id).subscribe((res)=>{
      this.blogPost=res
      this.setFormValue(this.blogPost)
    })

  }

  setFormValue(blogPost:BlogPost){
    this.form.controls['id'].setValue(blogPost?.id);
    this.form.controls['title'].setValue(blogPost?.title);
    this.form.controls['author'].setValue(blogPost?.author);
    this.form.controls['createdAt'].setValue(blogPost?.createdAt);
    this.form.controls['body'].setValue(blogPost?.body);
    this.form.controls['image'].setValue(blogPost?.image);
  }

}
