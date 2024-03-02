import { Injectable } from '@angular/core';
import { Profile, User } from '../models/user.model';
import { BehaviorSubject, map } from 'rxjs';
import { AccountService } from 'src/app/account/services/account.service';
import { userStore } from '../stores/user.store';
import {
  resetActiveIds,
  selectActiveEntities,
  setActiveIds,
  setEntities,
} from '@ngneat/elf-entities';
import { select } from '@ngneat/elf';

@Injectable({ providedIn: 'root' })
export class AccountRepository {
  constructor(private accountService: AccountService) {}

  public isSignedup$ = new BehaviorSubject<boolean>(false);
  public loading$ = new BehaviorSubject<boolean>(false);
  public saving$ = new BehaviorSubject<boolean>(false);
  public isLoggedIn$ = new BehaviorSubject<boolean>(false);
  // public profile$ = userStore.pipe(select((state) => state));
  public profile$ = userStore.pipe(
    selectActiveEntities(),
    map((profile) => profile[0])
  );

  login(username: string, password: string) {
    this.loading$.next(true);
    this.accountService.login(username, password).subscribe({
      next: (res) => {
        const profile = res as Profile;
        userStore.update(setEntities([profile]), setActiveIds([profile.id]));
        localStorage.setItem('idToken', (res as Profile).idToken || '');
        this.isLoggedIn$.next(true);
        this.loading$.next(false);
      },
      error: (err) => {
        this.isLoggedIn$.next(false);
        this.loading$.next(false);
      },
    });
  }

  signup(user: User) {
    this.loading$.next(true);
    this.accountService.signup(user).subscribe({
      next: (res) => {
        this.loading$.next(false);
        this.isSignedup$.next(true);
      },
      error: (err) => {
        this.loading$.next(false);
      },
    });
  }

  getProfile(username: string) {
    this.loading$.next(true);
    this.accountService.getProfile(username).subscribe((response) => {
      console.log('@getProfile', response);
      this.loading$.next(false);
    });
  }

  logout() {
    localStorage.removeItem('idToken');
    userStore.update(resetActiveIds());
  }
}
