import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './students.component';
import { StudentListContainerComponent } from './student-list-container/student-list-container.component';
import { StudentListPresentationComponent } from './student-list-container/student-list-presentation/student-list-presentation.component';


@NgModule({
  declarations: [StudentsComponent, StudentListContainerComponent, StudentListPresentationComponent],
  imports: [
    CommonModule,
    StudentsRoutingModule
  ]
})
export class StudentsModule { }
