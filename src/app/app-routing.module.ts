import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
  {path:'posts', loadChildren: () => import('./post/post.module').then(m => m.PostModule)}
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
