import { Component, OnInit } from '@angular/core';
import { CognitoService } from '../../services/cognito.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blank',
  templateUrl: './blank.component.html',
  styleUrls: ['./blank.component.scss'],
})
export class BlankComponent implements OnInit {
  constructor(private cognitoService: CognitoService, private router: Router) {}

  ngOnInit(): void {
    this.navigateUser();
  }

  navigateUser() {
    if (!!this.cognitoService.getCurrentUser()) {
      this.router.navigate(['/home']);
    } else {
      this.router.navigate(['/welcome']);
    }
  }
}
