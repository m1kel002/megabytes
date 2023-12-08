import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { MatDialogModule, MatDialog } from '@angular/material/dialog';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SignupComponent } from '../signup/signup.component';
import { DialogComponent } from 'src/app/shared/components/dialog/dialog.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BehaviorSubject } from 'rxjs';
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
    SignupComponent,
    DialogComponent,
    MatSidenavModule,
  ],
})
export class WelcomePageComponent implements OnInit {
  isDrawerOpened$ = new BehaviorSubject<boolean>(false);
  protected ctaForm = this.fb.group({
    email: this.fb.control('', Validators.required),
    password: this.fb.control('', Validators.required),
  });
  constructor(private dialog: MatDialog, private fb: FormBuilder) {}

  ngOnInit(): void {}

  toggleDrawer() {
    this.isDrawerOpened$.next(!this.isDrawerOpened$.value);
  }

  onCloseSignupForm() {
    this.isDrawerOpened$.next(false);
  }
}
