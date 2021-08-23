import { createAction, props } from '@ngrx/store';
import { PricingPlan } from '../models/Pricing';
import { Membership } from '../models/Membership';
import { Update } from '@ngrx/entity';

export const loadAllMembershipDetails = createAction(
  '[Membership Resolver] Load All Subscription Plans'
);

export const loadAllPricingPlans = createAction(
  '[Membership Resolver] Load All Pricing Plans'
);

export const allPricingPlansLoaded = createAction(
  '[Pricing Plans] Load Subscription Plans',
  props<{ pricingPlans: PricingPlan[] }>()
);

export const loadMembershipStatus = createAction(
  '[Membership Resolver] Load All Membership Details'
);

export const membershipStatusLoaded = createAction(
  '[Pricing Plans] All Membership Details Loaded',
  props<{ membership: Membership }>()
);

export const createMembership = createAction(
  '[Membership Plan] Membership Create'
);

export const membershipCreated = createAction(
  '[Membership Success] Membership Created',
  props<{ membership: Membership }>()
);

export const membershipUpdated = createAction(
  '[Membership Success] Membership Updated',
  props<{ update: Update<Membership> }>()
);

export const membershipFailure = createAction(
  '[Membership Failure] Membership Failure',
  props<Membership>()
);
