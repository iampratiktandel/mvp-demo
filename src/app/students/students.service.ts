import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Student } from './student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private http: HttpClient) { }

  public getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>('http://localhost:3000/students')
  }
}
