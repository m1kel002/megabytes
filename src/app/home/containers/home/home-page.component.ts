import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material';
import { BehaviorSubject } from 'rxjs';
import { CommonModule } from '@angular/common';
import { PostComponent } from '../../components/post/post.component';
@Component({
  selector: 'app-home',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  standalone: true,
  imports: [
    MatIconModule,
    CommonModule,
    PostComponent
  ]

})
export class HomePageComponent implements OnInit {

  showMenu = new BehaviorSubject<boolean>(false);
  posts = [1, 2, 3, 4, 5]

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu() {
    this.showMenu.next(!this.showMenu.value)
  }

}
