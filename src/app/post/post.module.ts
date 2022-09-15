import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostListComponent } from './post-list/post-list.component';
import { TruncatePipe } from '../shared/pipes/truncate.pipe';
import { PostComponent } from './post.component';
import { MaterialModule } from '../shared/material/material.module';


@NgModule({
  declarations: [
    PostComponent,
    PostListComponent,
    TruncatePipe
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    MaterialModule
  ]
})
export class PostModule { }
