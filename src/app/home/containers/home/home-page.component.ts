import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { BehaviorSubject } from 'rxjs';
import { CommonModule } from '@angular/common';
import { PostComponent } from '../../components/post/post.component';
import { AccountService } from 'src/app/account/services/account.service';
import { AccountRepository } from 'src/app/shared/repositories/account.repository';
@Component({
  selector: 'app-home',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  standalone: true,
  imports: [MatIconModule, CommonModule, PostComponent],
})
export class HomePageComponent implements OnInit {
  showMenu = new BehaviorSubject<boolean>(false);
  posts = [1, 2, 3, 4, 5];

  constructor(private accountRepository: AccountRepository) {}

  ngOnInit(): void {
    this.getUserProfile();
  }

  toggleMenu() {
    this.showMenu.next(!this.showMenu.value);
  }

  getUserProfile() {
    this.accountRepository.getProfile();
  }
}
