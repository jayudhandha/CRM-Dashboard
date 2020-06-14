import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { NewStudentComponent } from './new-student/new-student.component';

const routes: Routes = [
  { path: 'students', component: StudentComponent },
  { path: 'create', component: NewStudentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
