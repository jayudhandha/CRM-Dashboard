import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  isLoading = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSignUp(form: NgForm) {
    if(form.invalid) {
      return
    }

    console.log(form.value)
    const email = form.value.email
    const password = form.value.password
    this.authService.doSignUp(email, password).subscribe(data => {
      console.log(data)
      console.log(email, password)
      this.authService.onLogin(email, password).subscribe(result => {
        console.log("Login successfull...")
        this.authService.postLoginActivity(result);
        this.router.navigate(['/students']);
      })
    });

    form.resetForm()
  }
}
