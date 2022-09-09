import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPostComponent } from './admin/add-post/add-post.component';
import { AdminComponent } from './admin/admin.component';
import { EditPostComponent } from './admin/edit-post/edit-post.component';
import { PostListComponent } from './admin/post-list/post-list.component';
import { DashboardComponent } from './dashboard.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [
  {path:'',  component:DashboardComponent,
children:[
  {path:'', pathMatch:'full', redirectTo:'posts'},
  {path:'posts', component:PostComponent},
  {path:'admin', component:AdminComponent,
  children:[
      {path:'', pathMatch:'full', component:PostListComponent},
      {path:'new', component:AddPostComponent},
      {path:'edit/:id', component:EditPostComponent}
  ]
}
]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
