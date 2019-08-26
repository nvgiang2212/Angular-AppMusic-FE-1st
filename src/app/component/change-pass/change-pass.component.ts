import {Component, OnInit} from '@angular/core';
import {ChangePassword} from '../../model/UserManager/ChangPass-Infor';
import {AuthService} from '../../service/UserManager/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-change-pass',
  templateUrl: './change-pass.component.html',
  styleUrls: ['./change-pass.component.scss']
})
export class ChangePassComponent implements OnInit {

  form: any = {};
  changePassword: ChangePassword;
  isChangePassed = false;
  errorMessage = '';

  constructor(
    private authService: AuthService,
    private router: Router) {
  }

  ngOnInit() {
  }

  ngSubmit() {
    // tslint:disable-next-line:no-debugger
    debugger;
    this.changePassword = new ChangePassword(
      this.form.currentPassword,
      this.form.newPassword);

    this.authService
      .changePasswordAuth(this.changePassword)
      .subscribe(
        data => {
          console.log(data);
          this.isChangePassed = true;
          this.router.navigate(['/home']);
        },
        error => {
          console.log(error);
          this.errorMessage = error.error.message;
        });
  }

}
