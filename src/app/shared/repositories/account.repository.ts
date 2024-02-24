import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { BehaviorSubject } from 'rxjs';
import { AccountService } from 'src/app/account/services/account.service';
import { userStore } from '../stores/user.store';
import { AuthResponse } from '../models/auth-response.model';

@Injectable({ providedIn: 'root' })
export class AccountRepository {
  constructor(private accountService: AccountService) {}

  public isSignedup$ = new BehaviorSubject<boolean>(false);
  public loading$ = new BehaviorSubject<boolean>(false);
  public saving$ = new BehaviorSubject<boolean>(false);
  public isLoggedIn$ = new BehaviorSubject<boolean>(false);

  login(username: string, password: string) {
    this.loading$.next(true);
    this.accountService
      .login(username, password)
      .subscribe((response: AuthResponse) => {
        console.log('@login', response);
        this.loading$.next(false);
        if (response.AuthenticationResult?.IdToken) {
          localStorage.setItem(
            'idToken',
            response.AuthenticationResult.IdToken
          );
          this.isLoggedIn$.next(true);
        }
      });
  }

  signup(user: User) {
    this.loading$.next(true);
    this.accountService.signup(user).subscribe((response) => {
      console.log('@signup response', response);
      this.isSignedup$.next(true);
      this.loading$.next(false);
    });
  }

  getProfile() {
    this.loading$.next(true);
    this.accountService.getProfile().subscribe((response) => {
      console.log('@getProfile', response);
      this.loading$.next(false);
    });
  }
}
