import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';
import { CoursesHttpService } from '../../services/courses-http.service';
import { concatMap, map } from 'rxjs/operators';

import * as CoursesActions from './courses.actions';
import * as CoursesFeature from './courses.reducer';

@Injectable()
export class CoursesEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CoursesActions.loadAllCourses),
      fetch({
        run: (action) => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return CoursesActions.loadCoursesSuccess({ courses: [] });
        },
        onError: (action, error) => {
          console.error('Error', error);
          return CoursesActions.loadCoursesFailure({ error });
        },
      })
    )
  );

  saveCourse$ = createEffect(
    () => this.actions$
        .pipe(
            ofType(CoursesActions.courseUpdated),
            concatMap(action => this.coursesHttpService.saveCourse(
                action.update.id,
                action.update.changes
            ))
        ),
    {dispatch: false}
  );

constructor(private readonly actions$: Actions,
            private coursesHttpService: CoursesHttpService) {}
}
