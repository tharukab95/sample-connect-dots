import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../model/course';
import { Lesson } from '../model/lesson';
import { Observable } from 'rxjs';
import { concatMap,tap}  from 'rxjs/operators';
import { CoursesHttpService } from '../services/courses-http.service';

@Component({
  selector: 'sample-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  course$: Observable<Course> | undefined;

  lessons$?: Observable<Lesson[]>;

  loading$?:Observable<boolean>;

  displayedColumns = ['seqNo', 'description', 'duration'];

  nextPage = 0;

  constructor(
    private coursesService: CoursesHttpService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {

    const courseUrl = this.route.snapshot.paramMap.get('courseUrl');

    this.course$ = this.coursesService.findCourseByUrl(courseUrl ? courseUrl : '');

    this.lessons$ = this.course$.pipe(
      concatMap(course => this.coursesService.findLessons(course.id)),
      tap(console.log)
    );

  }

  loadLessonsPage(course: Course) {
    // this.lessonsService.getWithQuery({
    //   'courseId': course.id.toString(),
    //   'pageNumber': this.nextPage.toString(),
    //   'pageSize': '3'
    // });

    // this.nextPage += 1;
  }

}
