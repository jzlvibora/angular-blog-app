import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { AlertsService } from 'src/app/pages/admin/alerts.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  isSignedin = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private alertService: AlertsService
  ) {}

  ngOnInit(): void {
    this.isSignedin = this.authService.isUserSignedin();
    if (this.isSignedin) {
      this.router.navigateByUrl('posts');
    }
    this.loginForm = this.buildForm();
  }

  private buildForm(): FormGroup {
    return new FormGroup({
      username: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
      userpwd: new FormControl(null, [Validators.required]),
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      console.log('invalid');
      return;
    }
    this.authService.signin(this.loginForm.value).subscribe(
      (res) => {
        this.router.navigateByUrl('posts');
      },
      (err) => {
        this.alertService.errorNotification(
          'Incorrect username and/or password'
        );
      }
    );
  }

  redirectToSignup() {
    this.router.navigate(['auth/signup']);
  }
}
