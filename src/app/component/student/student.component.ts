import { Component, OnInit } from "@angular/core";
import { StudentService } from "src/app/service/student.service";

@Component({
  selector: "app-student",
  templateUrl: "./student.component.html",
  styleUrls: ["./student.component.scss"]
})
export class StudentComponent implements OnInit {
  title: String;
  response
  constructor(private studentService: StudentService) {}

  ngOnInit() {
    this.title = "Overview"
    this.response = this.studentService.getAllStudents();
  }
}
