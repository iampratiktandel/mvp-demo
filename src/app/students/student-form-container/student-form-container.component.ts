import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-student-form-container',
  templateUrl: './student-form-container.component.html',
  styleUrls: ['./student-form-container.component.css']
})
export class StudentFormContainerComponent implements OnInit {

  constructor(private studentsService: StudentsService, private router: Router) { }

  ngOnInit(): void {
  }

  public onAddStudent(studentForm: FormGroup) {
    console.log('onAddStudent() executed in container');
    // debugger
    this.studentsService.addStudent(studentForm);
    this.router.navigate(['../students']);
  }
}
