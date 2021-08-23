import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AppState } from 'apps/tuition/src/app/reducers/index';
import { select, Store } from '@ngrx/store';
import { filter, finalize, first, tap } from 'rxjs/operators';
import {
  allPricingPlansLoaded,
  loadAllPricingPlans,
} from './+state/membership.actions';

@Injectable()
export class MembershipResolver implements Resolve<any> {
  loading = false;

  constructor(private store: Store<AppState>) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.store.pipe(
      select(allPricingPlansLoaded),
      tap((pricingPlansLoaded) => {
        if (!this.loading && !pricingPlansLoaded) {
          this.loading = true;
          this.store.dispatch(loadAllPricingPlans());
        }
      }),
      filter((allPricingPlansLoaded) => allPricingPlansLoaded),
      first(),
      finalize(() => (this.loading = false))
    );
  }
}
