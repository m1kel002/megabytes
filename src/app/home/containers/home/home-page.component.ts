import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material';
import { BehaviorSubject } from 'rxjs';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  standalone: true,
  imports: [
    MatIconModule,
    CommonModule
  ]

})
export class HomePageComponent implements OnInit {

  showMenu = new BehaviorSubject<boolean>(false);

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu() {
    this.showMenu.next(!this.showMenu.value)
  }

}
