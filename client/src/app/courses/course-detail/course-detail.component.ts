import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/_models/course';
import { Lesson } from 'src/app/_models/lesson';
import { CoursesService } from 'src/app/_services/courses.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {
  course: Course | undefined;
  firstLessonLink: string | undefined;

  constructor(private courseService: CoursesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadCourse();
  }

  getFirstLessonLink() {
    this.firstLessonLink = this.course?.lessons[0].link;
  }

  loadCourse() {
    const courseId = this.route.snapshot.paramMap.get('id');
    if(!courseId) return;
    this.courseService.getCourse(courseId).subscribe({
      next: course => this.course = course,
      complete: () => this.getFirstLessonLink()
    })
  }

}
