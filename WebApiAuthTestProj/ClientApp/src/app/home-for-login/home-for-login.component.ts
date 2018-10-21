import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '../_models/User';
import { UserService } from '../_services';

@Component({
  selector: 'app-home-for-login',
  templateUrl: './home-for-login.component.html',
  styleUrls: ['./home-for-login.component.css']
})
export class HomeForLoginComponent implements OnInit {

  users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers()
      .pipe(first())
      .subscribe(users => {
        console.log(users);
        this.users = <any>users;
    });
  }
}
