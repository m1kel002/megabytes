export type AuthResponse = Partial<
  Readonly<{
    AuthenticationResult: AuthenticationResult;
  }>
>;

export type AuthenticationResult = Partial<{
  IdToken: string;
  AccessToken: string;
}>;
