import { DatePipe } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PostService } from 'src/app/services/post/post.service';
import { BlogPost } from 'src/app/shared/blog-post';
import { AlertsService } from '../alerts.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit {
  id!:number;
  blogPost!:BlogPost;
  form!:FormGroup;
  error:string|null=null;
  isSubmitSuccessful:boolean=false;
  isLoading=true;
  

  constructor(private router:Router,private blogPostService:PostService,private route:ActivatedRoute, private datePipe:DatePipe, private alertService:AlertsService) { }

  ngOnInit(): void {
    this.form=this.buildForm();
    this.route.params.subscribe((params:Params)=>{
      this.id=params['id'];
    })
    // console.log(this.route.params)
    // console.log(this.route.snapshot.params['id'])
    // this.id=Number(this.route.snapshot.paramMap.get('id'))

    this.getBlogPost();
    console.log(this.form)

    
  }

  private buildForm():FormGroup{
    return new FormGroup({
      title: new FormControl(this.blogPost?.title,[Validators.required]),
      author: new FormControl(this.blogPost?.author,[Validators.required]),
      image:new FormControl(this.blogPost?.image,[Validators.required]),
      body: new FormControl(this.blogPost?.body, [Validators.required]),
      createdAt:new FormControl(this.blogPost?.createdAt.toLocaleDateString().slice(0,10), [Validators.required])
    })
  }

  get f(){
    return this.form.controls;
  }

  onSubmit(){
    if(this.form.invalid){
      this.alertService.infoNotification();
      return
    }
    this.blogPostService.updateBlogPost(this.form.value,this.id).subscribe((res)=>{
      console.log(this.form.value)
      console.log(res);
      this.alertService.successNotification();
      this.form.reset();
    },(err:HttpErrorResponse)=>{
      this.error=err.message;
      this.alertService.errorNotification(err.message)
    })
  }

 

  getBlogPost(){
    this.blogPostService.getBlogPost(this.id).subscribe((res)=>{
      this.blogPost=res
      this.setFormValue(this.blogPost)
      this.isLoading=false
    },(err:HttpErrorResponse)=>{
      this.alertService.errorNotification(err.message);
    })

  }

  setFormValue(blogPost:BlogPost){
//  this.form.controls['id'].setValue(blogPost?.id);
    this.form.controls['title'].setValue(blogPost?.title);
    this.form.controls['author'].setValue(blogPost?.author);
    this.form.controls['createdAt'].setValue(blogPost?.createdAt);
    this.form.controls['body'].setValue(blogPost?.body);
    this.form.controls['image'].setValue(blogPost?.image);
  }

}
