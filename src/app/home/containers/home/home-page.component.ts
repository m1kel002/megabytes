import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { BehaviorSubject } from 'rxjs';
import { CommonModule } from '@angular/common';
import { PostComponent } from '../../components/post/post.component';
import { AccountService } from 'src/app/account/services/account.service';
import { AccountRepository } from 'src/app/shared/repositories/account.repository';
import { ProfileDialogComponent } from '../../components/profile-dialog/profile-dialog.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { OverlayModule } from '@angular/cdk/overlay';
import { Router } from '@angular/router';
import { PostRepository } from '../../repositories/post.repository';
@Component({
  selector: 'app-home',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  standalone: true,
  imports: [
    MatIconModule,
    CommonModule,
    PostComponent,
    MatIconModule,
    ProfileDialogComponent,
    MatDialogModule,
    OverlayModule,
  ],
})
export class HomePageComponent implements OnInit {
  @ViewChild('profileToggle') profileToggle: ElementRef;
  showMenu = new BehaviorSubject<boolean>(false);
  posts = [1, 2, 3, 4, 5];
  userProfile$ = this.accountRepository.profile$;

  constructor(
    private accountRepository: AccountRepository,
    public matDialog: MatDialog,
    private router: Router,
    private postRepository: PostRepository
  ) {}

  ngOnInit(): void {
    this.getUserProfile();
    this.postRepository.getPosts();
  }

  toggleMenu() {
    this.showMenu.next(!this.showMenu.value);
  }

  getUserProfile() {
    this.accountRepository.profile$.subscribe((data) => {
      console.log(data);
    });
  }

  onClickLogout() {
    this.accountRepository.logout();
    this.router.navigate(['/login']);
  }
}
