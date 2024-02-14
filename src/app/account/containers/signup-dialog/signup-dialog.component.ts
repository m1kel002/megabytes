import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { AccountService } from '../../services/account.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-signup-dialog',
  templateUrl: './signup-dialog.component.html',
  styleUrls: ['./signup-dialog.component.scss'],
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    ReactiveFormsModule,
    MatIconModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
})
export class SignupDialogComponent implements OnInit {
  @Output() onCloseSignupForm = new EventEmitter();
  protected signUpForm = this.fb.group({
    firstName: this.fb.control('', [Validators.required]),
    lastName: this.fb.control('', [Validators.required]),
    username: this.fb.control('', [Validators.required]),
    email: this.fb.control('', [Validators.required]),
    password: this.fb.control('', [Validators.required]),
    // TODO: add custom validator to validate password and confirmPassword
    confirmPassword: this.fb.control('', [Validators.required]),
    birthdate: this.fb.control('', [Validators.required]),
    gender: this.fb.control('', [Validators.required]),
  });

  get username() {
    return this.signUpForm.controls.username;
  }

  get lastName() {
    return this.signUpForm.controls.lastName;
  }

  get firstName() {
    return this.signUpForm.controls.firstName;
  }

  get email() {
    return this.signUpForm.controls.email;
  }

  get password() {
    return this.signUpForm.controls.password;
  }

  get confirmPassword() {
    return this.signUpForm.controls.confirmPassword;
  }

  get birthdate() {
    return this.signUpForm.controls.birthdate;
  }

  get gender() {
    return this.signUpForm.controls.gender;
  }

  ngOnInit(): void {}
  constructor(
    private fb: FormBuilder,
    private accountService: AccountService
  ) {}

  onSubmit() {
    console.log('@onSubmit', this.signUpForm.getRawValue());
    if (this.signUpForm.valid) {
      this.accountService
        .signup({
          username: this.username.value ?? '',
          name: `${this.firstName.value} ${this.lastName.value}`,
          email: this.email.value ?? '',
          password: this.password.value ?? '',
          birthdate: this.birthdate.value ?? '',
          gender: this.gender.value ?? '',
        })
        .pipe(take(1))
        .subscribe((response) => {
          console.log('@SIGNUP', response);
        });
    }
  }

  onClose() {
    this.onCloseSignupForm.emit();
  }
}
