import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LoginInfo} from '../../model/UserManager/Login-Infor';
import {AuthService} from '../../service/UserManager/auth.service';
import {TokenStorageService} from '../../service/UserManager/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  private logininfor: LoginInfo;

  constructor(
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private router: Router) {
  }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getAuthorities();
    }
  }

  onSubmit() {
    // tslint:disable-next-line:no-debugger
    debugger;
    console.log(this.form);
    this.logininfor = new LoginInfo(
      this.form.username,
      this.form.password);

    this.authService
      .loginAuth(this.logininfor)
      .subscribe(
        data => {
          console.log(data);
          this.tokenStorage.saveToken(data.accessToken);
          this.tokenStorage.saveUsername(data.username);
          this.tokenStorage.saveAvatar(data.avatarUrl);
          this.tokenStorage.saveAuthorities(data.authorities);

          this.isLoginFailed = false;
          this.isLoggedIn = true;
          this.roles = this.tokenStorage.getAuthorities();
          window.location.reload();
        },
        error => {
          console.log(error);
          this.errorMessage = error.error.message;
          this.isLoginFailed = true;
        });
  }

}

