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
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS , MatLabel} from '@angular/material/form-field';
import { MaterialModule } from './shared/material/material.module';
import { AddPostComponent } from './dashboard/admin/add-post/add-post.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PostComponent,
    AdminComponent,
    TruncatePipe,
    FooterComponent,
    AddPostComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
    MaterialModule
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
