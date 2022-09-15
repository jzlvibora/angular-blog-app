import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPostComponent } from './dashboard/admin/add-post/add-post.component';
import { AdminComponent } from './dashboard/admin/admin.component';
import { EditPostComponent } from './dashboard/admin/edit-post/edit-post.component';
import { PostListComponent } from './dashboard/admin/post-list/post-list.component';
import { PostComponent } from './dashboard/post/post.component';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { LoginLayoutComponent } from './login-layout/login-layout.component';
import { LoginComponent } from './login/login.component';



const routes: Routes = [
  {path:'login', component:LoginLayoutComponent,
  children:[
    {path:'', component:LoginComponent}
  ]
},
{path:'', component:HomeLayoutComponent,
children:[
  {path:'', redirectTo:'admin', pathMatch:'full'},
  {path:'admin', component:AdminComponent, 
   children:[
    {path:'', redirectTo:'list', pathMatch:'full'},
    {path:'list', component:PostListComponent},
    {path:'new', component:AddPostComponent},
    {path:'edit/:id', component:EditPostComponent}
   ]},
   {path:'posts', component:PostComponent}
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
