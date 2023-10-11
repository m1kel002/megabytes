import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
// import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { MatDialogModule, MatDialog } from '@angular/material/dialog';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SignupComponent } from '../../components/signup/signup.component';
import { DialogComponent } from 'src/app/shared/components/dialog/dialog.component';
// import {}
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
  ],
})
export class WelcomePageComponent implements OnInit {
  protected ctaForm = this.fb.group({
    email: this.fb.control('', Validators.required),
    password: this.fb.control('', Validators.required),
  });
  constructor(private dialog: MatDialog, private fb: FormBuilder) {}

  ngOnInit(): void {}

  // openSignup() {
  //   this.dialog.open(DialogComponent, {
  //     width: '400px',
  //     disableClose: true,
  //     autoFocus: true,
  //   });
  // }
  openDialog() {
    this.dialog.open(SignupComponent, {
      width: '400px',
      disableClose: true,
    });
  }
}
