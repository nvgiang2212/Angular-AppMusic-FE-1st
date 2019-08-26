import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {RegisterInfo} from '../../model/UserManager/Register-Infor';
import {UpdateInfo} from '../../model/UserManager/Update-Infor';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl = 'http://localhost:8080/api/users/user';
  private pmUrl = 'http://localhost:8080/api/users/pm';
  private adminUrl = 'http://localhost:8080/api/users/admin';
  private updateUserUrl = 'http://localhost:8080/api/auth/updateuser';
  private getUserUrl = 'http://localhost:8080/api/auth/user';


  // FIREBASE - API
  // private userAvatarUrl = '';


  constructor(private http: HttpClient) {
  }

  // SERVICE CHO BACK-END
  getUserBoard(): Observable<RegisterInfo[]> {
    return this.http.get<RegisterInfo[]>(this.userUrl);
  }

  getPMBoard(): Observable<string> {
    return this.http.get(this.pmUrl, {responseType: 'text'});
  }

  getAdminBoard(): Observable<string> {
    return this.http.get(this.adminUrl, {responseType: 'text'});
  }

  getUpdateUser(username: string): Observable<UpdateInfo> {
    return this.http.get<UpdateInfo>(`${this.updateUserUrl}/${username}`);
  }

  getUser(username: string): Observable<UpdateInfo> {
    return this.http.get<UpdateInfo>(`${this.getUserUrl}/${username}`);
  }
}
