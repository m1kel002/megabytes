import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  standalone: true,
  imports: [
    MatIconModule
  ]
})
export class PostComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
