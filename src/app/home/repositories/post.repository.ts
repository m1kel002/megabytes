import { Injectable } from '@angular/core';
import { PostService } from '../services/post.service';
import { postStore } from 'src/app/shared/stores/post.store';
import { Post } from 'src/app/shared/models/post.model';
import {
  addEntities,
  selectActiveId,
  selectActiveIds,
  selectAllEntities,
  setEntities,
} from '@ngneat/elf-entities';
import { userStore } from 'src/app/shared/stores/user.store';
import { map, switchMap, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PostRepository {
  constructor(private postService: PostService) {}

  posts$ = postStore.pipe(selectAllEntities());

  getPosts() {
    this.postService.getPosts().subscribe((response) => {
      postStore.update(setEntities(response as Array<Post>));
    });
  }

  createPost(message: string) {
    this.getUserId()
      .pipe(switchMap((userId) => this.postService.createPost(message, userId)))
      .subscribe((response) => {
        console.log('@createPost', response);
        postStore.update(addEntities(response as Post));
      });
  }

  getUserId() {
    return userStore.pipe(
      selectActiveIds(),
      map((userIds) => userIds[0])
    );
  }
}
