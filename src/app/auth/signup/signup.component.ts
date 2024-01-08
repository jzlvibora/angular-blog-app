import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertsService } from 'src/app/pages/admin/alerts.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
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
    this.signupForm = this.buildForm();
  }

  private buildForm(): FormGroup {
    return new FormGroup({
      username: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
      ]),
      email: new FormControl(null, [Validators.required]),
      userpwd: new FormControl(null, [Validators.required]),
    });
  }

  get f() {
    return this.signupForm.controls;
  }

  onSubmit() {
    if (this.signupForm.invalid) {
      console.log('invalid');
      return;
    }
    this.authService.signup(this.signupForm.value).subscribe((res) => {
      console.log(res);
      this.alertService.registrationSuccessNotification(res);
      this.signupForm.reset();
    });
  }
}
