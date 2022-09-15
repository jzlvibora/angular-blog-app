import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPostComponent } from './add-post/add-post.component';
import { AdminComponent } from './admin.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { PostListComponent } from './post-list/post-list.component';

const routes: Routes = [
  {path:'', redirectTo:'admin', pathMatch:'full'},
  {path:'admin', component:AdminComponent, 
   children:[
    {path:'', component:PostListComponent},
    {path:'new', component:AddPostComponent},
    {path:'edit/:id', component:EditPostComponent}
   ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
