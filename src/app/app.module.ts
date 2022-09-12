import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostComponent } from './dashboard/post/post.component';
import { AdminComponent } from './dashboard/admin/admin.component';
import { TruncatePipe } from './shared/pipes/truncate.pipe';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './shared/material/material.module';
import { AddPostComponent } from './dashboard/admin/add-post/add-post.component';
import { HttpClientModule } from '@angular/common/http';
import { EditPostComponent } from './dashboard/admin/edit-post/edit-post.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostListComponent } from './dashboard/admin/post-list/post-list.component';
import { DashboardRoutingModule } from './dashboard/dashboard-routing.module';
import { DatePipe } from '@angular/common';




@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PostComponent,
    AdminComponent,
    TruncatePipe,
    FooterComponent,
    AddPostComponent,
    EditPostComponent,
    PostListComponent,
    PageNotFoundComponent,
  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    HttpClientModule,
    DashboardRoutingModule,
  
  
    
    
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
