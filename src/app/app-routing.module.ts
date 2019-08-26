import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './component/dashboard/dashboard.component';
import {ChangePassComponent} from './component/change-pass/change-pass.component';
import {UpdateInforComponent} from './component/update-infor/update-infor.component';
import {RegisterComponent} from './component/register/register.component';
import {LoginComponent} from './component/login/login.component';
import {AppComponent} from './app.component';
import {ContentComponent} from './component/content/content.component';


const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'home', component: ContentComponent},
  {path: 'auth/login', component: LoginComponent},
  {path: 'auth/register', component: RegisterComponent},
  {path: 'auth/updateuser', component: UpdateInforComponent},
  {path: 'auth/changepass', component: ChangePassComponent},
  {path: 'auth/dashboard', component: DashboardComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
