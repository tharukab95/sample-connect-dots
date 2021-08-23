import { PlanType, PricingPlan } from './Pricing';

export interface Membership {
  subscribedPlan: PricingPlan;
  isActive: boolean;
  status: string;
}

export interface CustomerPortal {
  url: string;
}

export interface Session {
  sessionId: string;
  publicKey: string;
}
