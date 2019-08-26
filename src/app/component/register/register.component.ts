import { Component, OnInit } from '@angular/core';
import {RegisterInfo} from '../../model/UserManager/Register-Infor';
import {AuthService} from '../../service/UserManager/auth.service';
import {UserService} from '../../service/UserManager/user.service';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  selectedFiles: FileList;
  form: any = {};
  // ==============================================
  registerForm: RegisterInfo;
  isRegister = false;
  isRegisterFail = false;
  errorMessage = '';
  // currentFileUpload: FileUpload;
  private currentFileUpload: any;

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      usernamr: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
    });
  }

  selecAvatar(event) {

    this.selectedFiles = event.target.files;
    console.log(this.selectedFiles);
  }

  // upload() {
  //   const file = this.selectedFiles.item(0);
  //   this.selectedFiles = undefined;
  //
  //   this.currentFileUpload = new FileUpload(file);
  //   this.userService.pushAvatarToStorage(this.currentFileUpload);
  //   console.log(this.currentFileUpload);
  // }

  RegisterAccount() {
    debugger;
    this.registerForm = new RegisterInfo(
      this.form.firstName,
      this.form.lastName,
      this.form.username,
      this.form.email,
      this.form.password,
      this.currentFileUpload.url
    );

    this.authService
      .registerAuth(this.registerForm)
      .subscribe(
        data => {
          console.log(data);
          this.isRegister = true;
          this.isRegisterFail = false;
        },
        error => {
          console.log(error);
          this.errorMessage = error.error.message;
          this.isRegisterFail = true;
        });
  }

}
