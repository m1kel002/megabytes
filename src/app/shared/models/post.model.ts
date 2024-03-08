import { Entity } from './entity.model';

export type Post = Entity &
  Partial<
    Readonly<{
      message: string;
      downvote: number;
      upvote: number;
      createdAt: string;
      author: Author;
    }>
  >;

export type Author = Partial<
  Readonly<{
    userId: string;
    name: string;
  }>
>;
