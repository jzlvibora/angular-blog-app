import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!:FormGroup;

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.loginForm=this.buildForm();
  }

  private buildForm():FormGroup{
    return new FormGroup({
      username:new FormControl(null,[
        Validators.required,
        Validators.minLength(3)
      ]),
      userpwd:new FormControl(null,[
        Validators.required,

      ])
    })
  }

  get f(){
    return this.loginForm.controls;
  }

  onSubmit(){
    if(this.loginForm.invalid){
      console.log('invalid');
      return
    }
    this.authService.signin(this.loginForm.value).subscribe((res)=>{
      console.log(this.authService.getToken())
    },)

  }

}
