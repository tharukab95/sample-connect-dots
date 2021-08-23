import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { concatMap, map, tap } from 'rxjs/operators';
import { PricingPlansService } from '../services/pricing-plans.service';
import { MembershipActions } from './action.types';

import {
  allPricingPlansLoaded,
  loadAllPricingPlans,
} from './membership.actions';

@Injectable()
export class MembershipEffects {
  constructor(
    private actions$: Actions,
    private pricingPlansService: PricingPlansService
  ) {}

  loadPricingPlans$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MembershipActions.loadAllPricingPlans),
      concatMap((action) => this.pricingPlansService.findAllPricingPlans()),
      map((plans) => allPricingPlansLoaded({ pricingPlans: plans }))
    )
  );

  loadCurrentMembership$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(MembershipActions.membershipStatusLoaded),
        tap((action) => {
          localStorage.setItem('membership-status', action.membership.status);
        })
      ),
    { dispatch: false }
  );
}
