import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { MaterialModule } from './shared/material/material.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DatePipe } from '@angular/common';
import { LoginComponent } from './auth/login/login.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { SignupComponent } from './auth/signup/signup.component';
import { HeaderComponent } from './layouts/header/header.component';
import { CategoryNavComponent } from './layouts/category-nav/category-nav.component';
import { PostCardComponent } from './layouts/post-card/post-card.component';
import { HomeComponent } from './pages/home/home.component';
import { CategoryPostsComponent } from './pages/category-posts/category-posts.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { CommentFormComponent } from './comments/comment-form/comment-form.component';
import { CommentsListComponent } from './comments/comments-list/comments-list.component';






@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    PageNotFoundComponent,
    LoginComponent,
    AuthLayoutComponent,
    SignupComponent,
    HeaderComponent,
    CategoryNavComponent,
    PostCardComponent,
    HomeComponent,
    CategoryPostsComponent,
    SinglePostComponent,
    CommentFormComponent,
    CommentsListComponent,
   
  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,  
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [DatePipe, {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
