import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { MatDialogModule, MatDialog } from '@angular/material/dialog';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SignupDialogComponent } from '../signup-dialog/signup-dialog.component';
import { DialogComponent } from 'src/app/shared/components/dialog/dialog.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BehaviorSubject } from 'rxjs';
import { AccountService } from '../../services/account.service';
import { CognitoService } from 'src/app/shared/services/cognito.service';
import { Router } from '@angular/router';
import { AuthUser } from 'aws-amplify/auth';
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
  ],
})
export class WelcomePageComponent implements OnInit {
  isDrawerOpened$ = new BehaviorSubject<boolean>(false);
  protected ctaForm = this.fb.group({
    username: this.fb.control('', Validators.required),
    password: this.fb.control('', Validators.required),
  });

  get username() {
    return this.ctaForm.controls.username;
  }

  get password() {
    return this.ctaForm.controls.password;
  }

  constructor(
    private dialog: MatDialog,
    private fb: FormBuilder,
    private accountService: AccountService,
    private cognitoService: CognitoService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  toggleDrawer() {
    this.isDrawerOpened$.next(!this.isDrawerOpened$.value);
  }

  onCloseSignupForm() {
    this.isDrawerOpened$.next(false);
  }

  onSubmit() {
    if (this.ctaForm.valid) {
      this.cognitoService.logout();
      this.cognitoService
        .login(this.username.value ?? '', this.password.value ?? '')
        .then((response) => {
          this.redirectToHome();
        });
    }
  }

  redirectToHome() {
    this.router.navigate(['/home']);
  }
}
