import { createAction, props } from '@ngrx/store';
import { CoursesEntity } from './courses.models';
import { Update } from '@ngrx/entity';

export const loadAllCourses = createAction('[Courses Page] Init');

export const loadCoursesSuccess = createAction(
  '[Courses/API] Load Courses Success',
  props<{ courses: CoursesEntity[] }>()
);

export const loadCoursesFailure = createAction(
  '[Courses/API] Load Courses Failure',
  props<{ error: any }>()
);

export const courseUpdated = createAction(
"[Courses Edit Course Dialog] Course Updated",
props<{update: Update<CoursesEntity>}>()
);

