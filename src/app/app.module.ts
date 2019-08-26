import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { UpdateInforComponent } from './component/update-infor/update-infor.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ChangePassComponent } from './component/change-pass/change-pass.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {httpInterceptorProviders} from './service/UserManager/auth-interceptor';
import { ContentComponent } from './component/content/content.component';
import { HeaderComponent } from './component/header/header.component';
import { UserComponent } from './component/user/user.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UpdateInforComponent,
    DashboardComponent,
    ChangePassComponent,
    ContentComponent,
    HeaderComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
