import { TestBed } from "@angular/core/testing";
import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";
import {tap, map} from 'rxjs/operators';

import { StudentService } from "./student.service";
import { HttpClient } from "@angular/common/http";
import { Student } from '../model/student.model';

describe("StudentService", () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let service: StudentService;
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    })
  );

  beforeEach(() => {
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(StudentService);
  });

  describe("initial state", () => {
    it("should be created", () => {
      expect(service).toBeTruthy();
    });
  });

  describe("getAllStudents", () => {
    it('should return a collection Students', () => {
      const testData:Array<Student> = [
        { id: 1, name: "Hans", course: "Mathematik" },
        { id: 2, name: "Peter", course: "Physik" },
        { id: 3, name: "Klaus", course: "Germanistik" }
      ];

      let response:Array<Student>;

      service.getAllStudents()
      .pipe(
        tap((res: Array<Student>) => response = res),
        tap(() => expect(response).toEqual(testData))
      ).subscribe();

      const request = httpTestingController.expectOne(
        "http://localhost:8080/students"
      );
      request.flush(testData);
    });

    afterEach(() => {
      // After every test, assert that there are no more pending requests.
      httpTestingController.verify();
    });
  })
});
