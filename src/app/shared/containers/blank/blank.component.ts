import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountRepository } from '../../repositories/account.repository';

@Component({
  selector: 'app-blank',
  templateUrl: './blank.component.html',
  styleUrls: ['./blank.component.scss'],
})
export class BlankComponent implements OnInit {
  constructor(
    private accountRepository: AccountRepository,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.navigateUser();
  }

  navigateUser() {
    if (this.checkTokenExists()) {
      this.router.navigate(['/home']);
    } else {
      this.router.navigate(['/login']);
    }
  }

  checkTokenExists() {
    return !!localStorage.getItem('idToken');
  }
}
