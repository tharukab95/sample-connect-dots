import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as CoursesActions from './courses.actions';
import { CoursesEffects } from './courses.effects';

describe('CoursesEffects', () => {
  let actions: Observable<Action>;
  let effects: CoursesEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        CoursesEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(CoursesEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: CoursesActions.init() });

      const expected = hot('-a-|', {
        a: CoursesActions.loadCoursesSuccess({ courses: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
