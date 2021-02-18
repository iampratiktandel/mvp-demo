import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentFormContainerComponent } from './student-form-container/student-form-container.component';
import { StudentListContainerComponent } from './student-list-container/student-list-container.component';
import { StudentsComponent } from './students.component';

const routes: Routes = [
  { 
    path: '', 
    component: StudentsComponent,
    children: [
      {
        path: '',
        component: StudentListContainerComponent
      },
      {
        path: 'add',
        component: StudentFormContainerComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
