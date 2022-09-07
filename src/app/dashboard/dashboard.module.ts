import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { TruncatePipe } from './admin/pipes/truncate.pipe';
import { AddPostComponent } from './admin/add-post/add-post.component';


@NgModule({
  declarations: [
    TruncatePipe,
    AddPostComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
