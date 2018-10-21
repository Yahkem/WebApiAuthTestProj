import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../_models/User';
import { API_URL } from './consts';

@Injectable({ providedIn: 'root' })
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  getUsers() {
    return this.http
      .get<User>(`${API_URL}/Users/GetAll`);
  }
}
