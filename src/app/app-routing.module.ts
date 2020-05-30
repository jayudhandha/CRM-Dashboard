// path : /student, /faculty
// component:

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { FacultyComponent } from './faculty/faculty.component';

const routes: Routes = [
  { path: 'student', component: StudentComponent },
  { path: 'faculty', component: FacultyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
