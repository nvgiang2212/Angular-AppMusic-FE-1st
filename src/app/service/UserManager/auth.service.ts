import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LoginInfo} from '../../model/UserManager/Login-Infor';
import {JwtResponse} from '../../model/jwt-response';
import {RegisterInfo} from '../../model/UserManager/Register-Infor';
import {UpdateInfo} from '../../model/UserManager/Update-Infor';
import {ChangePassword} from '../../model/UserManager/ChangPass-Infor';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUrl = 'http://localhost:8080/login';
  private registerUrl = 'http://localhost:8080/signup';
  private updateProfileUrl = 'http://localhost:8080/updateuser';
  private changePassUrl = 'http://localhost:8080/changePassword';

  constructor(private http: HttpClient) { }

  loginAuth(credentials: LoginInfo): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(this.loginUrl, credentials, httpOptions);
  }

  registerAuth(info: RegisterInfo): Observable<string> {
    return this.http.post<string>(this.registerUrl, info, httpOptions);
  }

  updateAuth(info: UpdateInfo): Observable<JwtResponse> {
    return this.http.put<JwtResponse>(this.updateProfileUrl, info, httpOptions);
  }

  changePasswordAuth(info: ChangePassword): Observable<JwtResponse> {
    return this.http.put<JwtResponse>(this.changePassUrl, info, httpOptions);
  }
}
