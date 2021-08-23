export interface PlanType {
  free_plan: 'FREE_PLAN';
  basic_plan: 'BASIC_PLAN';
  standard_plan: 'STANDARD_PLAN';
  premium_plan: 'PREMIUM_PLAN';
}

export interface PricingPlan {
  id: string;
  priceId: string;
  name: string;
  planIdentifier: PlanType;
  price: string;
  features: string[];
}
