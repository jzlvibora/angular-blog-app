import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './guards/auth-guard.guard';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CategoryPostsComponent } from './pages/category-posts/category-posts.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';

const routes: Routes = [
  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
    ],
  },
  {
    path:'', component:HomeComponent
  },
  {
    path:'category', component:CategoryPostsComponent
  },
  {
    path: 'post', component:SinglePostComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
