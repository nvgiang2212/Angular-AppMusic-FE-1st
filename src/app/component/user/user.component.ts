import { Component, OnInit } from '@angular/core';
import {UserService} from '../../service/UserManager/user.service';
import {TokenStorageService} from '../../service/UserManager/token-storage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  board: any = [];
  errorMessage: string;
  info: any;

  constructor(
    private userService: UserService,
    private token: TokenStorageService,
    private router: Router) {
  }

  ngOnInit() {
    this.userService
      .getUserBoard()
      .subscribe(
        data => {
          this.board = data;
        },
        error => {
          console.log(error);
        });

    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      avatar: this.token.getAvatar(),
      authorities: this.token.getAuthorities()
    };
  }

  logout() {
    this.token.Logout();
    window.location.reload();
  }

}
