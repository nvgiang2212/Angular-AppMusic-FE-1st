import { Component, OnInit } from '@angular/core';
import {UserService} from '../../service/UserManager/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  userInfor: string;
  errorMessage: string;
  constructor(private userService: UserService) { }

  ngOnInit() {
    const name = sessionStorage.getItem('AuthUsername');
    this.userService
      .getUserBoard(name)
      .subscribe(
        data => { this.userInfor = data; },
        error => {this.userInfor = null; }
      );
  }

}
