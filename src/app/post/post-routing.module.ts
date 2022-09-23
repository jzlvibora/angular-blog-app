import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { PostComponent } from './post.component';
import { ViewPageComponent } from './view-page/view-page.component';

const routes: Routes = [
  {path:'', component:PostComponent, 
   children:[
    {path:'', component:PostListComponent},
    {path:'page/:id', component:ViewPageComponent}
   ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
