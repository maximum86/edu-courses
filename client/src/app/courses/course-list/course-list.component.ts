import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/_models/course';
import { CoursesService } from 'src/app/_services/courses.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  courses: Course[] = []

  constructor(private courseService: CoursesService) { }

  ngOnInit(): void {
    this.loadCourses()
  }

  loadCourses() {
    this.courseService.getCourses().subscribe({
      next: courses => this.courses = courses.courses,
      complete: () => console.log(this.courses)
    })
  }
}
