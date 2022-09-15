import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostListComponent } from './post-list/post-list.component';
import { PostComponent } from './post.component';
import { MaterialModule } from '../shared/material/material.module';
import { ViewPageComponent } from './view-page/view-page.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PostComponent,
    PostListComponent,
    ViewPageComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class PostModule { }
