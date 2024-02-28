import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PasswordComponent } from './password/password.component';
const routes: Routes = [
  { path: 'Signup',component: SignUpFormComponent},
  { path: 'Login' ,component: LoginComponent},
  { path: 'Home' ,component: HomeComponent},
  { path: 'Password',component: PasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
 
})
export class AppRoutingModule { }
