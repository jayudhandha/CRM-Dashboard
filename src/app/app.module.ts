import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngBasicsComponent } from './ang-basics/ang-basics.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomInputComponent } from './custom-input/custom-input.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StudentComponent } from './student/student.component';
import { AppRoutingModule } from './app-routing.module';
import { NewStudentComponent } from './new-student/new-student.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatPaginatorModule} from '@angular/material/paginator';
import { LoginComponent } from './authentication/login-page/login.component';
import { SignupComponent } from './authentication/sign-up/signup.component';
import { AuthInterceptor } from './authentication/auth-interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    AngBasicsComponent,
    CustomInputComponent,
    StudentComponent,
    NewStudentComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatExpansionModule,
    MatProgressBarModule,
    MatPaginatorModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
