import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';
import { userStore } from 'src/app/shared/stores/user.store';
import { formatDate } from '@angular/common';

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
    const dateFormat = 'dd-MM-yyyy';
    const formattedDate = formatDate(
      user.birthdate?.toString() ?? '',
      dateFormat,
      'en-US'
    );
    return this.http.post(`${this.BASE_URL}/signup`, {
      ...user,
      birthdate: formattedDate,
    });
  }

  getProfile() {
    const headers = new HttpHeaders().set(
      'Authorization',
      localStorage.getItem('idToken') ?? ''
    );
    return this.http.get(`${this.BASE_URL}/profile`, { headers: headers });
  }

  testGetProfile() {
    userStore.subscribe((data: any) => console.log('@authStore', data));
  }
}
