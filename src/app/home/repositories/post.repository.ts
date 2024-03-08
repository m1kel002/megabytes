import { Injectable } from '@angular/core';
import { PostService } from '../services/post.service';
import { postStore } from 'src/app/shared/stores/post.store';
import { Post } from 'src/app/shared/models/post.model';
import { setEntities } from '@ngneat/elf-entities';

@Injectable({ providedIn: 'root' })
export class PostRepository {
  constructor(private postService: PostService) {}

  getPosts() {
    this.postService.getPosts().subscribe((response) => {
      postStore.update(setEntities(response as Array<Post>));
    });
  }
}
