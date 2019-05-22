import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../model/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  constructor(public http:HttpClient) { }

  public getAllStudents(): Observable<Array<Student>>{
    return this.http.get<Array<Student>>('http://localhost:8080/students');
  }
}
