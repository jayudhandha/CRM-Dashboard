import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { auth } from './auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  BASE_PATH = 'http://localhost:3000/auth/'
  private token: string;
  private isAuthenticated: boolean = false;
  private timerHandler : any;

  constructor(private http: HttpClient) { }

  getToken() {
    return this.token;
  }

  setToken(token) {
    this.token = token
  }

  getAuthenticated() {
    return this.isAuthenticated;
  }

  setAuthenticated(isAuthenticated: boolean) {
    this.isAuthenticated = isAuthenticated;
  }

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
    return this.http.post<{message: string, token: string, expiresIn: number}>(this.BASE_PATH+"login", loginObj);
  }

  onLogout() {
    console.log("Logout occurs...");
    this.setToken(null);
    this.setAuthenticated(false);
    this.deRegisterLogoutTimer();
  }

  saveAuthLocally(token: string, expiresIn: number) {
    localStorage.setItem('token', token);
    localStorage.setItem('expiresIn', expiresIn.toString());
  }

  readAuthLocally() {
    return {
      token: localStorage.getItem('token'),
      expiresIn: localStorage.getItem('expiresIn')
    }
  }

  registerLogoutTimer(expiresIn: number) {
    this.timerHandler = setTimeout(() => {
      this.onLogout();
    }, expiresIn * 1000);
  }

  deRegisterLogoutTimer() {
    clearTimeout(this.timerHandler);
  }
}
