import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { AccountService } from 'src/app/account/services/account.service';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AccountRepository {
  constructor(private accountService: AccountService) {}
  // login
  login() {}
  public isSignedup$ = new BehaviorSubject<boolean>(false);
  public loading$ = new BehaviorSubject<boolean>(false);
  public saving$ = new BehaviorSubject<boolean>(false);

  // signup
  signup(user: User) {
    // set loading to true
    this.loading$.next(true);
    this.accountService.signup(user).subscribe((response) => {
      console.log('@signup response', response);
      this.isSignedup$.next(true);
      this.loading$.next(false);
    });
  }
}
