import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PricingPlan } from '../models/Pricing';
import * as fromMemberships from './membership.reducer';

export const selectPricingPlanState =
  createFeatureSelector<PricingPlan>('pricing');

export const selectMembership = createSelector(
  selectPricingPlanState,
  fromMemberships.selectAll
);
