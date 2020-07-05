import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoading = false
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onLogin(form: NgForm) {
    if(form.invalid) {
      return
    }
    this.isLoading = true;
    this.authService.onLogin(form.value.email, form.value.password).subscribe(result => {
      console.log(result);
      this.authService.setToken(result.token)
      this.authService.setAuthenticated(true);
      const now = new Date();
      const expireAt = new Date(now.getTime() + result.expiresIn * 1000);

      this.authService.saveAuthLocally(result.token, expireAt);

      console.log("Token will expires at: " + expireAt);
      this.authService.registerLogoutTimer(result.expiresIn);

      this.router.navigate(['/students']);
    })

    form.resetForm()
  }

}
