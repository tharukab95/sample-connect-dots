import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { concatMap, mergeMap } from 'rxjs/operators';
import { Observable, EMPTY } from 'rxjs';

import * as MembershipAction from './membership.actions';
import { Router } from '@angular/router';

@Injectable()
export class MembershipEffects {
  constructor(private actions$: Actions, private router: Router) {}

  // loadSubscriptionPlans$ = createEffect(() =>
  // this.actions$.pipe(
  //   ofType(SubscriptionsActions.loadSubscriptionPlans),
  //   concatMap((action) => this.coursesHttpService.findAllSubscriptionPlans()),
  //   map((plans) => allSubscriptionPlansLoaded({ plans })),
  //   catchError(() => of(SubscriptionsActions.subscriptionFailure))
  // ));

  // login$ = createEffect(
  //   () =>
  //     this.actions$.pipe(
  //       ofType(AuthActions.login),
  //       tap((action) => {
  //         localStorage.setItem('access_token', action.access_token);
  //         localStorage.setItem('user', JSON.stringify(action.user));
  //       })
  //     ),
  //   { dispatch: false }
  // );
}
