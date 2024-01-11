import { Injectable } from '@angular/core';
import { Amplify } from 'aws-amplify';
import { signIn } from 'aws-amplify/auth';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CognitoService {
  constructor() {
    Amplify.configure({
      Auth: {
        Cognito: environment.cognito,
      },
    });
  }

  login(username: string, password: string) {
    return signIn({ username, password });
  }
}
