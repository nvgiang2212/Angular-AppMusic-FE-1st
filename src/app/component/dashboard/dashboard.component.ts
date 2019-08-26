import { Component, OnInit } from '@angular/core';
import {UpdateInfo} from '../../model/UserManager/Update-Infor';
import {UserService} from '../../service/UserManager/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  userInfor: UpdateInfo;
  errorMessage: string;
  constructor(private userService: UserService) { }

  ngOnInit() {
    const name = sessionStorage.getItem('AuthUsername');
    this.userService
      .getUser(name)
      .subscribe(
        data => { this.userInfor = data; },
        error => {this.userInfor = null; }
      );

  }

}
