import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPostComponent } from './admin/add-post/add-post.component';
import { AdminComponent } from './admin/admin.component';
import { EditPostComponent } from './admin/edit-post/edit-post.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [
 {path:'post', pathMatch:'full', component:PostComponent},
 {path:'post', component:PostComponent},
 {path:'admin', component:AdminComponent,
 children:[
  {path:'new', component:AddPostComponent},
  {path:'edit/:id', component:EditPostComponent}

 ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
