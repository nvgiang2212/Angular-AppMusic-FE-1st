import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LoginInfo} from '../../model/UserManager/Login-Infor';
import {JwtResponse} from '../../model/jwt-response';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUrl = 'http://localhost:8080/api/auth/signin';
  private signupUrl = 'http://localhost:8080/api/auth/signup';

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
