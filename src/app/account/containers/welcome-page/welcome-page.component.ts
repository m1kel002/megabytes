import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { MatDialogModule } from '@angular/material/dialog';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SignupDialogComponent } from '../signup-dialog/signup-dialog.component';
import { DialogComponent } from 'src/app/shared/components/dialog/dialog.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BehaviorSubject } from 'rxjs';
import { AccountService } from '../../services/account.service';
import { Router } from '@angular/router';
import { AccountRepository } from 'src/app/shared/repositories/account.repository';
import { GenericButtonComponent } from 'src/app/shared/components/generic-button/generic-button.component';
@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatDialogModule,
    SignupDialogComponent,
    DialogComponent,
    MatSidenavModule,
    GenericButtonComponent,
  ],
})
export class WelcomePageComponent {
  isDrawerOpened$ = new BehaviorSubject<boolean>(false);
  loading$ = this.accountRepository.loading$;
  protected loginForm = this.fb.group({
    username: this.fb.control('', Validators.required),
    password: this.fb.control('', Validators.required),
  });

  get username() {
    return this.loginForm.controls.username;
  }

  get password() {
    return this.loginForm.controls.password;
  }

  constructor(
    private fb: FormBuilder,
    private accountService: AccountService,
    private router: Router,
    private accountRepository: AccountRepository
  ) {}

  toggleDrawer() {
    this.isDrawerOpened$.next(!this.isDrawerOpened$.value);
  }

  onCloseSignupForm() {
    this.isDrawerOpened$.next(false);
  }

  listenWhenLogin() {
    this.accountRepository.isLoggedIn$.subscribe((isLoggedIn) => {
      if (isLoggedIn) {
        this.redirectToHome();
      }
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.listenWhenLogin();
      const username = this.username.value ?? '';
      const password = this.password.value ?? '';
      this.accountRepository.login(username, password);

      // this.accountService
      //   .login(this.username.value ?? '', this.password.value ?? '')
      //   .subscribe((response: AuthResponse) => {
      //     console.log(response);
      //     if (response.AuthenticationResult?.IdToken) {
      //       localStorage.setItem(
      //         'idToken',
      //         response.AuthenticationResult.IdToken
      //       );
      //       this.redirectToHome();
      //     }
      //   });
    }
  }

  redirectToHome() {
    this.router.navigate(['/home']);
  }
}
