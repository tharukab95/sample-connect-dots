import { Action } from '@ngrx/store';

import * as CoursesActions from './courses.actions';
import { CoursesEntity } from './courses.models';
import { State, initialState, reducer } from './courses.reducer';

describe('Courses Reducer', () => {
  const createCoursesEntity = (id: string, name = ''): CoursesEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Courses actions', () => {
    it('loadCoursesSuccess should return the list of known Courses', () => {
      const courses = [
        createCoursesEntity('PRODUCT-AAA'),
        createCoursesEntity('PRODUCT-zzz'),
      ];
      const action = CoursesActions.loadCoursesSuccess({ courses });

      const result: State = reducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
