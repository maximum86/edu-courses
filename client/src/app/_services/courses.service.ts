import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Courses } from '../_models/courses';
import { Course } from '../_models/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getCourses() {
    return this.http.get<Courses>(this.baseUrl + 'core/preview-courses')
  }

  getCourse(courseId: string) {
    return this.http.get<Course>(this.baseUrl + 'core/preview-courses/' + courseId)
  }
}
