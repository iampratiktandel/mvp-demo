// import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { Student } from '../../student.model';

export class StudentFormPresenterService {

  public studentData: Subject<Student[]> = new Subject();
  public studentData$: Observable<Student[]>;

  constructor() {
    this.studentData$ = this.studentData.asObservable();
  }

  //returns a FormGroup
  public bindForm(): FormGroup {
    return new FormGroup({
      name: new FormControl(),
      age: new FormControl()
    })
  }

  public studentDetails(studentForm: FormGroup) {
    // debugger
    console.log('studentDetails() executed in presenter service');
    console.log('Presenter sends value')
    this.studentData.next(studentForm.value);
  }
}