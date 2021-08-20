import { createAction, props } from '@ngrx/store';
import { Course } from '../../models/model-types';
import { Update } from '@ngrx/entity';

export const loadAllCourses = createAction(
  '[Courses Resolver] Load All Courses'
);

export const allCoursesLoaded = createAction(
  '[Load Courses Effect] All Courses Loaded',
  props<{ courses: Course[] }>()
);

export const courseUpdated = createAction(
  '[Courses Edit Course Dialog] Course Updated',
  props<{ update: Update<Course> }>()
);
