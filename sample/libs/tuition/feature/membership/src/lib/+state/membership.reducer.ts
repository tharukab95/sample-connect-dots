import { Action, createReducer, on } from '@ngrx/store';
import * as MembershipActions from './membership.actions';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { Membership } from '../models/Membership';
import { PlanType, PricingPlan } from '../models/Pricing';

export const membershipFeatureKey = 'membership';

export interface MembershipState extends EntityState<Membership> {
  allMembershipDetailsLoaded: boolean;
}

export interface PricingPlansState extends EntityState<PricingPlan[]> {
  allPricingPlansLoaded: boolean;
}

export const membershipAdapter = createEntityAdapter<Membership>();

export const pricingAdapter = createEntityAdapter<PricingPlan>();

export const initialMembershipState = membershipAdapter.getInitialState({
  membershipStatusLoaded: false,
});

export const initialPricingPlanState = pricingAdapter.getInitialState({
  allPricingPlansLoaded: false,
});

export const pricingPlansReducer = createReducer(
  initialPricingPlanState,

  on(MembershipActions.allPricingPlansLoaded, (state, action) =>
    pricingAdapter.setAll(action.pricingPlans, {
      ...state,
      allPricingPlansLoaded: true,
    })
  )
);

export const membershipReducer = createReducer(
  initialMembershipState,

  on(MembershipActions.membershipStatusLoaded, (state, action) =>
    membershipAdapter.setOne(action.membership, {
      ...state,
      allMembershipDetailsLoaded: true,
    })
  ),

  on(MembershipActions.membershipCreated, (state, action) =>
    membershipAdapter.setOne(action.membership, state)
  ),

  on(MembershipActions.membershipUpdated, (state, action) =>
    membershipAdapter.updateOne(action.update, state)
  )
);

export interface MembershipState extends EntityState<Membership> {
  membershipStatusLoaded: boolean;
}

export const { selectAll } = membershipAdapter.getSelectors();
