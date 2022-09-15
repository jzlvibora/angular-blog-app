import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { PostComponent } from './post/post.component';
import { AdminComponent } from './admin/admin.component';
import { TruncatePipe } from './shared/pipes/truncate.pipe';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './shared/material/material.module';
import { AddPostComponent } from './admin/add-post/add-post.component';
import { HttpClientModule } from '@angular/common/http';
import { EditPostComponent } from './admin/edit-post/edit-post.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostListComponent } from './admin/post-list/post-list.component';
import { DatePipe } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LoginLayoutComponent } from './login-layout/login-layout.component';
import { HomeLayoutComponent } from './home-layout/home-layout.component';




@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PostComponent,
    AdminComponent,
    TruncatePipe,
    FooterComponent,
    AddPostComponent,
    EditPostComponent,
    PostListComponent,
    PageNotFoundComponent,
    LoginComponent,
    LoginLayoutComponent,
    HomeLayoutComponent,
  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    HttpClientModule,  
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
