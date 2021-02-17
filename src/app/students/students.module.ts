import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './students.component';
import { StudentListContainerComponent } from './student-list-container/student-list-container.component';
import { StudentListPresentationComponent } from './student-list-container/student-list-presentation/student-list-presentation.component';
import { HighlightDirective } from './directives/highlight.directive';
import { InitialsPipe } from './pipes/initials.pipe';
import { StudentFormContainerComponent } from './student-form-container/student-form-container.component';
import { StudentFormPresentationComponent } from './student-form-container/student-form-presentation/student-form-presentation.component';


@NgModule({
  declarations: [StudentsComponent, StudentListContainerComponent, StudentListPresentationComponent, HighlightDirective, InitialsPipe, StudentFormContainerComponent, StudentFormPresentationComponent],
  imports: [
    CommonModule,
    StudentsRoutingModule
  ]
})
export class StudentsModule { }
