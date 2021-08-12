import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IMemberShipPlan } from '../../models/IMembership';
import { StripeSubscriptionService } from '../../services/stripe-subscription.service';

@Component({
  selector: 'app-subscription-checkout',
  templateUrl: './subscription-checkout.component.html',
})
export class SubscriptionCheckoutComponent implements OnInit {
  $membership: Observable<IMemberShipPlan> | undefined;
  constructor(private stripeSubscriptionService: StripeSubscriptionService,
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.$membership = this.stripeSubscriptionService.getCheckoutPlan(id);
  }

  onSubmit(f: NgForm) {Number.parseInt
    this.stripeSubscriptionService.requestMemberSession(f.value.priceId);
  }
}
