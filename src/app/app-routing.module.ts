import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddStudentComponent } from './pages/add-student/add-student.component';
import { ListStudentComponent } from './pages/list-student/list-student.component';


const routes: Routes = [
  {
    path: '', component: ListStudentComponent
  },
  {
    path: 'add', component: AddStudentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
