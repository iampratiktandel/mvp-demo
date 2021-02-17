import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-student-list-container',
  templateUrl: './student-list-container.component.html',
  styleUrls: ['./student-list-container.component.css']
})
export class StudentListContainerComponent implements OnInit {

  public studentList$: Observable<any>;

  constructor(private studentsService: StudentsService) {
    this.studentList$ = this.studentsService.getStudents();
  }

  ngOnInit(): void {
  }

  public onDeleteId(id: number) {
    this.studentsService.deleteStudent(id)
  }

}
