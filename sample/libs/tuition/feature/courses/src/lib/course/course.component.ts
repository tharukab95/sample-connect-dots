import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesEntity, Lesson } from '../+state/courses/courses.models';
import { Observable } from 'rxjs';
import { concatMap, delay, filter, first, map, shareReplay, tap, withLatestFrom}  from 'rxjs/operators';
import { CoursesHttpService } from '../services/courses-http.service';


@Component({
  selector: 'sample-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  course$: Observable<CoursesEntity>;

  lessons$: Observable<Lesson[]>;

  displayedColumns = ['seqNo', 'description', 'duration'];

  nextPage = 0;

  constructor(
    private coursesService: CoursesHttpService,
    private route: ActivatedRoute) {

  }

  ngOnInit() {

    const courseUrl = this.route.snapshot.paramMap.get("courseUrl");

    this.course$ = this.coursesService.findCourseByUrl(courseUrl);

    this.lessons$ = this.course$.pipe(
      concatMap(course => this.coursesService.findLessons(course.id)),
      tap(console.log)
    );

  }


  loadLessonsPage(course: Course) {

  }

}
