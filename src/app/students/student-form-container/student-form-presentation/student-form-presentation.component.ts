import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { StudentFormPresenterService } from '../student-form-presenter/student-form-presenter.service';

@Component({
  selector: 'app-student-form-presentation',
  templateUrl: './student-form-presentation.component.html',
  styleUrls: ['./student-form-presentation.component.css'],
  viewProviders: [StudentFormPresenterService]
})
export class StudentFormPresentationComponent implements OnInit {

  public studentForm: FormGroup;

  @Output() addStudent: EventEmitter<any> = new EventEmitter();

  constructor(private studentFormPresenterService: StudentFormPresenterService) {
    this.studentForm = this.studentFormPresenterService.bindForm();
  }

  ngOnInit(): void {
    this.studentFormPresenterService.studentData$.subscribe(
      (studentData) => this.addStudent.emit(studentData)
    );
  }

  public studentDetails() {
    // debugger
    console.log('Form is submitted in presentaion');
    this.studentFormPresenterService.studentDetails(this.studentForm);
  }
}
