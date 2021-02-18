import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { Student } from './student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  url: string = 'http://localhost:3000'
  
  constructor(private http: HttpClient) { }

  //GET Request
  public getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.url}/students`)
  }

  //DELETE Request
  public deleteStudent(id: number) {
    // return of(true)
    this.http.delete(`${this.url}/students/${id}`).subscribe(
      data => {
        console.log('Delete Request is successful ', data);
      },
      error => {
        console.log('Error', error);
      }
    );
  }
  
  //POST Request
  public addStudent(studentForm: FormGroup) {
    debugger
    console.log('addStudent() executed in service');
    this.http.post(`${this.url}/students`, studentForm).subscribe(
      data => {
        console.log('POST Request is successful ', data);
      },
      error => {
        console.log('Error', error);
      }
    );
  }
}
