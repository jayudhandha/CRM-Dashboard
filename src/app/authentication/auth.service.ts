import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { auth } from './auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  BASE_PATH = 'http://localhost:3000/auth/'

  constructor(private http: HttpClient) { }

  doSignUp(email, password) {
    const signUpObj: auth = {
      email: email,
      password: password
    }
    return this.http.post(this.BASE_PATH+"signup", signUpObj);
  }

  onLogin(email, password) {
    const loginObj: auth = {
      email: email,
      password: password
    }
    return this.http.post(this.BASE_PATH+"login", loginObj);
  }
}
