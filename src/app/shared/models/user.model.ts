import { Entity } from './entity.model';

export type User = Partial<
  Readonly<{
    username: string;
    password: string;
    email: string;
    gender: string;
    birthdate: string;
    firstName: string | null | undefined;
    lastName: string | null | undefined;
  }>
>;

export type Profile = Entity & Partial<Readonly<Omit<User, 'password'>>>;
