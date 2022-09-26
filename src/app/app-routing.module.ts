import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './guards/auth-guard.guard';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';



const routes: Routes = [
  {path:'auth', component:AuthLayoutComponent,
  children:[
    {path:'login', component:LoginComponent},
    {path:'signup', component:SignupComponent}
  ]
},
{path:'', component:HomeLayoutComponent, canActivate:[AuthGuardGuard],
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
