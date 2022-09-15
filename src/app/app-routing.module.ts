import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostComponent } from './post/post.component';
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
  {path: '',loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)},
  {path:'posts', component:PostComponent}
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
