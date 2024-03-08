import { Component, Input, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Post } from 'src/app/shared/models/post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  standalone: true,
  imports: [MatIconModule],
})
export class PostComponent implements OnInit {
  @Input() post: Post;
  constructor() {}

  ngOnInit(): void {}
}
