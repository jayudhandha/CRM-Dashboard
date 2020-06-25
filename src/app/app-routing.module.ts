import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { NewStudentComponent } from './new-student/new-student.component';
import { LoginComponent } from './authentication/login-page/login.component';
import { SignupComponent } from './authentication/sign-up/signup.component';

const routes: Routes = [
  { path: 'students', component: StudentComponent },
  { path: 'create', component: NewStudentComponent },
  { path: 'edit/:stdId', component: NewStudentComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
