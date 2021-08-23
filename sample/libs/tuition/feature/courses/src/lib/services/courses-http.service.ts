import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course, Lesson } from '../models/model-types';
import { map } from 'rxjs/operators';

@Injectable()
export class CoursesHttpService {
  constructor(private http: HttpClient) {}

  findAllCourses(): Observable<Course[]> {
    return this.http
      .get<any>('/api/courses')
      .pipe(map((res) => res));
  }

  findCourseByUrl(courseUrl: string): Observable<Course> {
    return this.http.get<Course>(`/api/courses/${courseUrl}`);
  }

  findCourseById(id: number): Observable<Course> {
    return this.http.get<Course>(`/api/courses/${id}`);
  }

  findLessons(courseId: number): Observable<Lesson[]> {
    return this.http.get<Lesson[]>(`/api/lessons/${courseId}`);
  }

  // findLessons(
  //   courseId: number,
  //   pageNumber = 0,
  //   pageSize = 3
  // ): Observable<Lesson[]> {
  //   return this.http.get<Lesson[]>('/api/lessons', {
  //     params: new HttpParams()
  //       .set('courseId', courseId.toString())
  //       .set('sortOrder', 'asc')
  //       .set('pageNumber', pageNumber.toString())
  //       .set('pageSize', pageSize.toString()),
  //   });
  // }

  saveCourse(courseId: string | number, changes: Partial<Course>) {
    return this.http.post('/api/courses', changes);
  }

  // saveCourse(courseId: string | number, changes: Partial<Course>) {
  //   return this.http.put('/api/course/' + courseId, changes);
  // }
}
