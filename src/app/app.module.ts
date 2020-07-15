import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngBasicsComponent } from './ang-basics/ang-basics.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { CustomInputComponent } from './custom-input/custom-input.component';
import { StudentComponent } from './student/student.component';
import { AppRoutingModule } from './app-routing.module';
import { NewStudentComponent } from './new-student/new-student.component';

import { LoginComponent } from './authentication/login-page/login.component';
import { SignupComponent } from './authentication/sign-up/signup.component';
import { AuthInterceptor } from './authentication/auth-interceptor.service';
import { ErrorInterceptor } from './authentication/error-interceptor.service';

import { ErrorPopupComponent } from './error-popup/error-popup.component';
import { AngularMaterial } from './angular-material.module';


@NgModule({
  declarations: [
    AppComponent,
    AngBasicsComponent,
    CustomInputComponent,
    StudentComponent,
    NewStudentComponent,
    LoginComponent,
    SignupComponent,
    ErrorPopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularMaterial
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
