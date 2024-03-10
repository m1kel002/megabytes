import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PostService {
  private BASE_URL =
    'https://m8ef54b2bl.execute-api.ap-southeast-1.amazonaws.com/dev';
  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get(`${this.BASE_URL}/post`);
  }

  createPost(message: string, userId: string) {
    console.log('@user', userId);
    return this.http.post(`${this.BASE_URL}/post`, {
      userId,
      message,
    });
  }
}
