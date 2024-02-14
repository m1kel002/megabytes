export type User = Partial<
  Readonly<{
    username: string;
    password: string;
    email: string;
    gender: string;
    birthdate: string;
    name: string;
  }>
>;
