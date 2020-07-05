import { Component, OnInit } from '@angular/core';
import { AuthService } from './authentication/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  // show: boolean = true;

  isAuthenticated: boolean = false;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.autoLogin()
  }

  checkAuth() {
    return this.authService.getAuthenticated()
  }

  doLogout() {
    // Clear token and authentication boolean
    this.authService.onLogout();
  }

}
