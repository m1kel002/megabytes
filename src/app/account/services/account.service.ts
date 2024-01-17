import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';

@Injectable({ providedIn: 'root' })
export class AccountService {
  // signup
  // login
  private BASE_URL =
    'https://m8ef54b2bl.execute-api.ap-southeast-1.amazonaws.com/dev';
  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    return this.http.post(`${this.BASE_URL}/login`, { username, password });
  }

  signup(user: User) {
    return this.http.post(`${this.BASE_URL}/signup`, user);
  }

  getProfile() {
    const headers = new HttpHeaders().set(
      'Authorization',
      localStorage.getItem('idToken') ?? ''
    );
    return this.http.get(`${this.BASE_URL}/profile`, { headers: headers });
  }
}
