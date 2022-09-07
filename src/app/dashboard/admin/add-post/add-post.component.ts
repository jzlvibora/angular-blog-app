import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from 'src/app/services/post/post.service';
// import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {
  form!:FormGroup;
  error:string='';
  isSubmitSuccessful:boolean=false;

  constructor(private router:Router,private blogPostService:PostService) { }

  ngOnInit(): void {
    this.form=this.buildForm();
  }

  private buildForm():FormGroup{
    return new FormGroup({
      title: new FormControl(null,[Validators.required]),
      author: new FormControl(null,[Validators.required]),
      image:new FormControl(null,[Validators.required]),
      description: new FormControl(null, [Validators.required]),
      dateCreated:new FormControl(Date.now().toString, [Validators.required])
    })
  }

  get f(){
    return this.form.controls;
  }

  onSubmit(){
    if(this.form.invalid){
      return
    }
    // console.log(this.form.value)
    this.blogPostService.postBlogPost(this.form.value).subscribe((res)=>{
      console.log(res);
      this.isSubmitSuccessful=true;
      this.form.reset();
    },(err:HttpErrorResponse)=>{
      this.error=err.message;
    })
  }

}
