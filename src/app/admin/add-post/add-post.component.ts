import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from 'src/app/services/post/post.service';
import { AlertsService } from '../alerts.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {
  form!:FormGroup;
  error:string|null=null;
  isSubmitSuccessful:boolean=false;

  constructor(private router:Router,private blogPostService:PostService, private alertService:AlertsService) { }

  ngOnInit(): void {
    this.form=this.buildForm();
  }

  private buildForm():FormGroup{
    return new FormGroup({
      title: new FormControl(null,[Validators.required]),
      author: new FormControl(null,[Validators.required]),
      image:new FormControl(null,[Validators.required]),
      body: new FormControl(null, [Validators.required]),
      createdAt:new FormControl(Date.now().toLocaleString(), [Validators.required])
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
    this.blogPostService.postBlogPost(this.form.value).subscribe((res)=>{
      console.log(res);
      this.alertService.successNotification();
      this.form.reset();
    },(err:HttpErrorResponse)=>{
      this.error=err.message;
      this.alertService.errorNotification(err.message)
    })
  }

}
