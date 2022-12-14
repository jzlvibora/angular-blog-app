import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from 'src/app/services/post/post.service';
import { TagService } from 'src/app/services/tag/tag.service';
import { BlogPost } from 'src/app/shared/blog-post';
import { PostRequest } from 'src/app/shared/post-request';
import { Tag } from 'src/app/shared/tag';
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
  postRequest: PostRequest={
    body: '',
    image: '',
    // createdAt: '',
    likes: 0,
    tag: {
      tagName: ''
    }
  };

  tags!: Tag[] ;

  constructor(private router:Router,private blogPostService:PostService, private alertService:AlertsService, private tagService:TagService) { }

  ngOnInit(): void {
    this.form=this.buildForm();
    console.log(this.getTags())
  }

  getDateToday(){
    let now = new Date();
    let month:any = (now.getMonth() + 1);               
    let day:any = now.getDate();
    if (month < 10) 
        month = "0" + month;
    if (day < 10) 
        day = "0" + day;
    let today = now.getFullYear() + '-' + month + '-' + day;
    return today
  }

  private buildForm():FormGroup{
    return new FormGroup({
      title: new FormControl(null,[Validators.required]),
      // author: new FormControl(null,[Validators.required]),
      image:new FormControl(null,[Validators.required]),
      body: new FormControl(null, [Validators.required]),
      likes:new FormControl(null,[Validators.required]),
      createdAt:new FormControl({value: this.getDateToday(), disabled:true}, [Validators.required]),
      tagName:new FormControl(null,[Validators.required])
    })
  }

  get f(){
    return this.form.controls;
  }

  onSubmit(){
    console.log(this.form.value)
    // this.blogPost.author=this.f.author;
    // console.log(this.f['author'].value)
    // this.blogPost.author=this.f['author'].value;
    // this.postRequest.title==this.f['title'].value;
    // this.postRequest.tag.id==this.f['tagId'].value;
    // this.postRequest.image==this.f['image'].value;
    // this.postRequest.body==this.f['body'].value;
    // this.postRequest.likes==this.f['likes'].value;
    // this.postRequest.createdAt==this.f['createdAt'].value;


    if(this.form.invalid){
      this.alertService.infoNotification();
      return
    }
    this.blogPostService.postBlogPost({title:this.f['title'].value, image:this.f['image'].value, body:this.f['body'].value, likes:this.f['likes'].value, tag: { tagName: this.f['tagName'].value} }).subscribe((res)=>{
      console.log(res);
      this.alertService.successNotification();
      this.form.reset();
    },(err:HttpErrorResponse)=>{
      this.error=err.message;
      this.alertService.errorNotification(err.message)
    })
  }

  getTags(){
    this.tagService.getAllTags().subscribe((res)=>{
      this.tags=res
    })
  }

}
