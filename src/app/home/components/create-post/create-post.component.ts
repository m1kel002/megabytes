import { Component, OnInit } from '@angular/core';
import { PostRepository } from '../../repositories/post.repository';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss'],
  standalone: true,
})
export class CreatePostComponent {
  constructor(private postRepository: PostRepository) {}

  onSubmit(message: string) {
    this.postRepository.createPost(message);
  }
}
