import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PostService } from 'src/app/services/post/post.service';
import Swal from 'sweetalert2';
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

  constructor(private router:Router,private blogPostService:PostService,private toastr: ToastrService) { }

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
      this.infoNotification();
      return
    }
    this.blogPostService.postBlogPost(this.form.value).subscribe((res)=>{
      console.log(res);
      this.successNotification();
      this.form.reset();
    },(err:HttpErrorResponse)=>{
      this.error=err.message;
      this.errorNotification(err.message)
    })
  }

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

}
