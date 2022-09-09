import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostComponent } from './dashboard/post/post.component';
import { AdminComponent } from './dashboard/admin/admin.component';
import { DashboardRoutingModule } from './dashboard/dashboard-routing.module';
import { TruncatePipe } from './dashboard/admin/pipes/truncate.pipe';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS , MatLabel} from '@angular/material/form-field';
import { MaterialModule } from './shared/material/material.module';
import { AddPostComponent } from './dashboard/admin/add-post/add-post.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { EditPostComponent } from './dashboard/admin/edit-post/edit-post.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardModule } from './dashboard/dashboard.module';




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
    PageNotFoundComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // DashboardRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    HttpClientModule,
  
    
    
    
    
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
