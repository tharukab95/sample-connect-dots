import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SubscriptionDto } from '../models/Subscription.dto';
import * as fromSubscriptions from './subscriptions.reducer';

export const selectSubscriptionsState = createFeatureSelector<fromSubscriptions.State>(
  fromSubscriptions.subscriptionsFeatureKey
);

export const selectSubscriptionState =
  createFeatureSelector<SubscriptionDto>('courses');

]
export const areSubscriptionPlansLoaded = createSelector(
  selectCoursesState,
  (state) => state && state.allCoursesLoaded
);
