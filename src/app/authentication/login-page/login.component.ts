import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoading = false
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onLogin(form: NgForm) {
    if(form.invalid) {
      return
    }

    this.authService.onLogin(form.value.email, form.value.password).subscribe(result => {
      console.log(result);
    })

  }

}
