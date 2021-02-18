import { Observable, Subject } from 'rxjs';

export class StudentListPresenterService {

  public studentId: Subject<any> = new Subject();
  public studentId$: Observable<any>;

  constructor() { 
    this.studentId$ = this.studentId.asObservable();
  }

  public deleteStudent(id: number) {
    console.log('Delete Id', id);
    this.studentId.next(id);
  }
}
