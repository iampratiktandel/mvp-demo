import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './students.component';
import { StudentListContainerComponent } from './student-list-container/student-list-container.component';
import { StudentListPresentationComponent } from './student-list-container/student-list-presentation/student-list-presentation.component';
import { StudentFormContainerComponent } from './student-form-container/student-form-container.component';
import { StudentFormPresentationComponent } from './student-form-container/student-form-presentation/student-form-presentation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [StudentsComponent, StudentListContainerComponent, StudentListPresentationComponent, StudentFormContainerComponent, StudentFormPresentationComponent],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class StudentsModule { }
