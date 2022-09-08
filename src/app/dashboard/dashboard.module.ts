import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { TruncatePipe } from './admin/pipes/truncate.pipe';
import { AddPostComponent } from './admin/add-post/add-post.component';
import { EditPostComponent } from './admin/edit-post/edit-post.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TruncatePipe,
    AddPostComponent,
    EditPostComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
  ]
})
export class DashboardModule { }
