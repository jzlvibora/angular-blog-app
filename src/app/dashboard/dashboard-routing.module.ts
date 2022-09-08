import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPostComponent } from './admin/add-post/add-post.component';
import { AdminComponent } from './admin/admin.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [
  {path:'admin', component:AdminComponent},
  {path:'post', component:PostComponent},
  {path:'admin/new', component:AddPostComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
