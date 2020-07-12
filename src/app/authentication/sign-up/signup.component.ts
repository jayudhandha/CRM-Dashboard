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
    this.authService.doSignUp(form.value.email, form.value.password).subscribe(data => {
      console.log(data)
      this.router.navigate(['/students']);
    });

    form.resetForm()
  }
}
