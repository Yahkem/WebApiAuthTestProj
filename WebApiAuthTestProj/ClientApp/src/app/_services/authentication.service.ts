import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { API_URL } from './consts';
import { User } from '../_models/User';
import { Subject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

  private user = new Subject<User>();
  public userEmitter: Observable<User> = this.user.asObservable();

  constructor(
    private http: HttpClient
  ) { }

  login(username: string, password: string) {
    console.log('login()', API_URL);

    return this.http
      .post<any>(`${API_URL}/Users/Authenticate`, { username, password })
      .pipe(map(user => {
        if (user && user.token) {
          localStorage.setItem('currentUser', JSON.stringify(user));
          //this.userEmitter = ;
          this.userEmitChange(user);
        }
        
        return user;
      }));
  }


  userEmitChange(usr: User) {
    this.user.next(usr);
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.userEmitChange(null);
  }
}
