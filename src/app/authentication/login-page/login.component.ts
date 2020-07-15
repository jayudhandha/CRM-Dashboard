import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { error } from 'protractor';

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

      this.authService.postLoginActivity(result);
      this.router.navigate(['/students']);
    }, error => {
      this.isLoading = false;
    })

    form.resetForm()
  }

}
