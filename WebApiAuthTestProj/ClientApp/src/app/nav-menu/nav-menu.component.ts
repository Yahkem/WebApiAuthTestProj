import { Component } from '@angular/core';
import { AuthenticationService } from '../_services';

import { User } from '../_models/User';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  isExpanded = false;
  user: User = null;

  constructor(
    private authService: AuthenticationService
  ) {
    this.authService.userEmitter.subscribe(user => {
      this.user = user;
    });

    this.user = JSON.parse(localStorage.getItem('currentUser'));
  }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
