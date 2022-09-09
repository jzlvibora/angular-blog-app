import { NgModule } from '@angular/core';
import { ɵINTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS } from '@angular/platform-browser-dynamic';
import { RouterModule, Routes } from '@angular/router';
import { AddPostComponent } from './dashboard/admin/add-post/add-post.component';
import { AdminComponent } from './dashboard/admin/admin.component';
import { EditPostComponent } from './dashboard/admin/edit-post/edit-post.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostComponent } from './dashboard/post/post.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'', component:DashboardComponent,
  children:[
    {path:'', pathMatch:'full', redirectTo:'post'},
    {path:'admin', component:AdminComponent},
    {path:'admin/new', component:AddPostComponent},
    {path:'admin/edit/:id', component:EditPostComponent},
    {path:'post', component:PostComponent}
  ]
},
{path:'**', component:PageNotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
