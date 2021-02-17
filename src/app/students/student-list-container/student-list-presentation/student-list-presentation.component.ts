import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Student } from '../../student.model';

@Component({
  selector: 'app-student-list-presentation',
  templateUrl: './student-list-presentation.component.html',
  styleUrls: ['./student-list-presentation.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StudentListPresentationComponent implements OnInit {

  private _studentList: Student[] = [];

  @Input() public set studentList(value: Student[]) {
    if(value) {
      this._studentList = value
    }
  }

  public get studentList(): Student[] {
    return this._studentList
  }
  
  constructor() { 
    this.studentList = [];
  }

  ngOnInit(): void {
  }

}
