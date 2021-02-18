import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Student } from '../../student.model';
import { StudentListPresenterService } from '../student-list-presenter/student-list-presenter.service';

@Component({
  selector: 'app-student-list-presentation',
  templateUrl: './student-list-presentation.component.html',
  styleUrls: ['./student-list-presentation.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [StudentListPresenterService]
})
export class StudentListPresentationComponent implements OnInit {

  private _studentList: Student[] = [];

  //student-list-container => student-list-presentation
  @Input() public set studentList(value: Student[]) {
    if(value) {
      this._studentList = value
    }
  }

  public get studentList(): Student[] {
    return this._studentList
  }

  @Output() deleteId: EventEmitter<any> = new EventEmitter();
  
  constructor(private studentListPresenterService: StudentListPresenterService) { 
    this.studentList = [];
  }

  ngOnInit(): void {
    this.studentListPresenterService.studentId$.subscribe((studentId) => {
      this.deleteId.emit(studentId);
    });
  }

  public deleteStudent(id: number) {
    this.studentListPresenterService.deleteStudent(id)
  }

}
