import { Component, OnInit } from "@angular/core";
import { StudentService } from "src/app/service/student.service";
import { Observable } from 'rxjs';
import { Student } from 'src/app/model/student.model';

@Component({
  selector: "app-student",
  templateUrl: "./student.component.html",
  styleUrls: ["./student.component.scss"]
})
export class StudentComponent implements OnInit {
  title: String;
  displayedColumns: string[] = ["id", "name", "course"];
  response:Observable<Student[]>;



  constructor(private studentService: StudentService) {}

  ngOnInit() {
    this.title = "Overview";
    this.response = this.studentService.getAllStudents();
  }
}
