import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { NewStudentComponent } from './new-student/new-student.component';
import { LoginComponent } from './authentication/login-page/login.component';
import { SignupComponent } from './authentication/sign-up/signup.component';
import { AuthGuard } from './authentication/auth.guard';

const routes: Routes = [
  { path: 'students', component: StudentComponent },
  { path: 'create', component: NewStudentComponent, canActivate: [AuthGuard] },
  { path: 'edit/:stdId', component: NewStudentComponent, canActivate: [AuthGuard]  },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {}
